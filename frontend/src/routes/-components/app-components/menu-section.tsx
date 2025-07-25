import clsx from "clsx";
import { Star } from "lucide-react";

const colors = {
  textBase: "text-[#1C4A35]",
  descriptionBase: "text-[#847062]",

  menuColors: {
    coffeeType: "bg-[#1C4A35] border-[#1C4A35]",
    rating: "bg-[#F9F8F6] border-[#F9F8F6]",
    name: "text-[#35251F]",
    description: "text-[#847062]",
  },
};

const mostRatedProduct = [
  {
    name: "Caramel Macchiato",
    rating: 4.8,
    coffeeType: "Espresso",
    description: "Steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel drizzle",
  },
  {
    name: "Pike Place Roast",
    rating: 4.6,
    coffeeType: "Coffee",
    description: "A smooth, well-rounded blend with subtle notes of cocoa and toasted nuts",
  },
  {
    name: "Green Tea Frappuccino",
    rating: 4.7,
    coffeeType: "Frappuccino",
    description: "Matcha green tea blended with milk and ice, topped with whipped cream",
  },
  {
    name: "Chai Tea Latte",
    rating: 4.5,
    coffeeType: "Tea",
    description: "Black tea infused with cardamom, cinnamon, and other warming spices",
  },
  {
    name: "Vanilla Sweet Cream Nitro",
    rating: 4.9,
    coffeeType: "Cold Brew",
    description: "Nitro cold brew topped with house-made vanilla sweet cream",
  },
  {
    name: "White Chocolate Mocha",
    rating: 4.4,
    coffeeType: "Espresso",
    description: "Espresso with steamed milk and white chocolate sauce, topped with whipped cream",
  },
];

function MenuSection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20 px-4 py-16">
        <div className="flex flex-col items-center px-14">
          <span className="text-4xl font-bold">
            Our <span className={colors.textBase}>Menu</span>
          </span>
          <p className={clsx("text-center text-xl", colors.descriptionBase)}>
            Discover handcrafted beverages and delicious treats made with the finest ingredients
          </p>
        </div>

        <div className="w-94 flex flex-col gap-6">
          {mostRatedProduct.map((ratedProduct, i) => (
            <div
              className="rounded-lg w-full h-auto hover:scale-105 hover:shadow-lg transition-transform ease-in-out"
              key={i}
            >
              <div className="border px-6 py-4 h-44 rounded-t-lg bg-[url(/public/coffee.jpg)] bg-cover bg-center">
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "border rounded-full px-2 py-1 text-white text-xs tracking-wider font-semibold",
                      colors.menuColors.coffeeType
                    )}
                  >
                    {ratedProduct.coffeeType}
                  </span>
                  <span
                    className={clsx(
                      "border rounded-full px-4 text-xs tracking-wider font-semibold flex items-center gap-0.5",
                      colors.menuColors.rating
                    )}
                  >
                    <Star size={16} fill="#E5BF4C" className="text-[#E5BF4C]" />
                    {ratedProduct.rating}
                  </span>
                </div>
              </div>

              <div className="px-6 bg-white shadow-md py-4 h-auto rounded-b-lg">
                <div className="flex flex-col">
                  <span className={clsx("text-lg font-semibold", colors.menuColors.name)}>{ratedProduct.name}</span>
                  <span className={clsx("text-sm", colors.menuColors.description)}>{ratedProduct.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
