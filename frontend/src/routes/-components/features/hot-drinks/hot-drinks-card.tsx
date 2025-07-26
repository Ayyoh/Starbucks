import React from "react";
import clsx from "clsx";
import { colors } from "@/components/colors";
import { Star } from "lucide-react";
import { useSession } from "@/hooks/auth.hook";
import { useHotDrinkList } from "@/hooks/menu.hooks";

function HotDrinkCard() {
  const { data: hotDrinks, isLoading, isError } = useHotDrinkList();
  const { data: session } = useSession();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !hotDrinks) return <div>Failed to load drinks</div>;

  return (
    <div>
      <div className="w-94 flex flex-col gap-6">
        {hotDrinks.map((hotDrinksList: any) => (
          <div
            className="rounded-lg w-full h-auto hover:scale-105 hover:shadow-lg transition-transform ease-in-out"
            key={hotDrinksList.id}
          >
            <div className="border px-6 py-4 h-44 rounded-t-lg">
              <div className="flex justify-between">
                <span
                  className={clsx(
                    "border rounded-full px-2 py-1 text-white text-xs tracking-wider font-semibold",
                    colors.menuColors.coffeeType
                  )}
                >
                  {hotDrinksList.type}
                </span>

                <span
                  className={clsx(
                    "border rounded-full px-4 text-xs tracking-wider font-semibold flex items-center gap-0.5",
                    colors.menuColors.rating
                  )}
                >
                  <Star size={16} fill="#E5BF4C" className="text-[#E5BF4C]" />
                  {hotDrinksList.rating}
                </span>
              </div>
            </div>

            <div className="px-6 bg-white shadow-md py-4 h-auto rounded-b-lg">
              <div className="flex flex-col">
                <span
                  className={clsx(
                    "text-lg font-semibold",
                    colors.menuColors.name
                  )}
                >
                  {hotDrinksList.name}
                </span>

                <div className="flex flex-col gap-6">
                  <span
                    className={clsx("text-sm", colors.menuColors.description)}
                  >
                    {hotDrinksList.description}
                  </span>

                  <span
                    className={clsx("text-xs", colors.menuColors.description)}
                  >
                    {session?.user.name ? (
                      hotDrinksList.price
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

export default HotDrinkCard;
