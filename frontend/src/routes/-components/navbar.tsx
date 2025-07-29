import { useSession } from "@/hooks/auth.hook";
import clsx from "clsx";
import { SiStarbucks } from "react-icons/si";
import { DrawerDemo } from "@/routes/-components/drawer-demo";
import { Link } from "@tanstack/react-router";

const colors = {
  starbucksText: "text-[#1C4A35]",
  starbucksTextYellow: "text-[#CBAC49]",
};

function Navbar() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between shadow-sm h-20.5 px-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <SiStarbucks size={44} fill="#006241" />
            <span className={clsx("font-bold text-2xl", colors.starbucksText)}>
              Starbucks
            </span>
          </Link>
        </div>

        <DrawerDemo />
      </div>
    </div>
  );
}

export default Navbar;
