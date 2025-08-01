import { colors } from "@/components/colors";
import clsx from "clsx";
import BestSelling from "../-components/features/hot-drinks/best-selling-page";
import { Button } from "@/components/ui/button";

function MenuSection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-14 py-16">
        <div className="flex flex-col items-center px-14">
          <span className="text-4xl font-bold">
            Our <span className={colors.textBase}>Menu</span>
          </span>

          <p className={clsx("text-center text-xl", colors.descriptionBase)}>
            Discover handcrafted beverages and delicious treats made with the
            finest ingredients
          </p>
        </div>

        <BestSelling />

        <div>
          <Button variant="default">View Full Menu</Button>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
