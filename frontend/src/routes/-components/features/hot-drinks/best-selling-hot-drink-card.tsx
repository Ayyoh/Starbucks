import clsx from "clsx";
import { colors } from "@/components/colors";
import { Loader, Star } from "lucide-react";
import { useSession } from "@/hooks/auth.hook";
import { useHotDrinkList } from "@/hooks/menu.hooks";
import { useEffect } from "react";
import { queryClient } from "@/lib/query-client"; // Make sure this path is correct

function BestSellingHotDrinkCard() {
  const { data: hotDrinks, isLoading, isError } = useHotDrinkList();
  const { data: session } = useSession();

  useEffect(() => {
    if (!isLoading && !isError && hotDrinks) {
      queryClient.setQueryData(["hotDrinks"], hotDrinks);
    }
  }, [hotDrinks, isLoading, isError]);

  if (isLoading)
    return (
      <div>
        <Loader className="animate-spin" />
      </div>
    );
  if (!hotDrinks) return <div>No Drinks at the moment</div>;
  if (isError) return <div>Failed to load drinks</div>;

  return (
    <div>
      <div className="w-full flex flex-col gap-6">
        {hotDrinks.slice(0, 5).map((bestSellingHotDrinks: any) => (
          <div
            className="rounded-lg w-full h-auto hover:scale-105 hover:shadow-lg transition-transform ease-in-out"
            key={bestSellingHotDrinks.id}
          >
            <div className="border px-6 py-4 h-44 rounded-t-lg">
              <div className="flex justify-between">
                <span
                  className={clsx(
                    "border rounded-full px-2 py-1 text-white text-xs tracking-wider font-semibold",
                    colors.menuColors.coffeeType
                  )}
                >
                  {bestSellingHotDrinks.type}
                </span>

                <span
                  className={clsx(
                    "border rounded-full px-4 text-xs tracking-wider font-semibold flex items-center gap-0.5",
                    colors.menuColors.rating
                  )}
                >
                  <Star size={16} fill="#E5BF4C" className="text-[#E5BF4C]" />
                  {bestSellingHotDrinks.rating}
                </span>
              </div>
            </div>

            <div className="px-6 bg-white shadow-md py-4 h-auto rounded-b-lg">
              <div className="flex flex-col">
                <span className={clsx("text-lg font-semibold", colors.menuColors.name)}>
                  {bestSellingHotDrinks.name}
                </span>

                <div className="flex flex-col gap-6">
                  <span className={clsx("text-sm", colors.menuColors.description)}>
                    {bestSellingHotDrinks.description}
                  </span>

                  <span className={clsx("text-xs", colors.menuColors.description)}>
                    {session?.user.name ? (
                      <div>
                        <span
                          className={clsx(
                            "border rounded-full px-3 py-1 text-white font-semibold tracking-wider",
                            colors.menuColors.priceBG
                          )}
                        >
                          ${bestSellingHotDrinks.price}
                        </span>
                      </div>
                    ) : (
                      <span>Sign in to see prices and order</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellingHotDrinkCard;
