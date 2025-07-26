import { colors } from "@/components/colors";
import clsx from "clsx";
import React from "react";

function MenuHeader() {
  return (
    <div className="pt-18">
      <div
        className={clsx(
          "h-auto w-screen py-10 px-4 flex flex-col items-center bg-gradient-to-br to-white/20 text-white border border-cyan-600",
          colors.menuColors.bgBase
        )}
      >
        <span>Our Menu</span>
      </div>
    </div>
  );
}

export default MenuHeader;
