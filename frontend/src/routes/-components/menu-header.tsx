import { colors } from "@/components/colors";
import clsx from "clsx";
import React from "react";

function MenuHeader() {
  return (
    <div className="pt-18 pb-8">
      <div
        className={clsx(
          "h-auto w-screen py-10 px-4 flex flex-col items-center bg-gradient-to-br to-white/30 text-white",
          colors.menuColors.bgBase
        )}
      >
        <span className="text-4xl font-bold tracking-wider">Our Menu</span>
        <span className="text-center text-xl">
          Discover Our handcrafted beverages and fresh food, made with the
          finest ingredients
        </span>
      </div>
    </div>
  );
}

export default MenuHeader;
