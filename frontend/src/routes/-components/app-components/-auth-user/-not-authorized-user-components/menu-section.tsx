import { colors } from "@/components/colors";
import HotDrinksPage from "@/features/hot-drinks/hot-drinks-page";
import clsx from "clsx";
import { Star } from "lucide-react";

const mostRatedProduct = [
  {
    name: "Caramel Macchiato",
    rating: 4.8,
    coffeeType: "Espresso",
    description:
      "Steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel drizzle",
  },
  {
    name: "Pike Place Roast",
    rating: 4.6,
    coffeeType: "Coffee",
    description:
      "A smooth, well-rounded blend with subtle notes of cocoa and toasted nuts",
  },
  {
    name: "Green Tea Frappuccino",
    rating: 4.7,
    coffeeType: "Frappuccino",
    description:
      "Matcha green tea blended with milk and ice, topped with whipped cream",
  },
  {
    name: "Chai Tea Latte",
    rating: 4.5,
    coffeeType: "Tea",
    description:
      "Black tea infused with cardamom, cinnamon, and other warming spices",
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
    description:
      "Espresso with steamed milk and white chocolate sauce, topped with whipped cream",
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
            Discover handcrafted beverages and delicious treats made with the
            finest ingredients
          </p>
        </div>
        <HotDrinksPage />
      </div>
    </div>
  );
}

export default MenuSection;
