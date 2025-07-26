import { useSession } from "@/hooks/auth.hook";
import { authClient } from "@/lib/auth-client";
import clsx from "clsx";
import { SiStarbucks } from "react-icons/si";
import { Button } from "./ui/button";
import { DrawerDemo } from "@/routes/-components/drawer-demo";
import { Link, useNavigate } from "@tanstack/react-router";

const colors = {
  starbucksText: "text-[#1C4A35]",
  starbucksTextYellow: "text-[#CBAC49]",
};

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/sign-in" });
        },
      },
    });
  };

  const { data: session } = useSession();

  return (
    <div>
      <div className="flex items-center justify-between shadow-sm h-20.5 px-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <SiStarbucks size={44} fill="#006241" />
            <span className={clsx("font-bold text-2xl", colors.starbucksText)}>
              Starbucks
            </span>
          </Link>
        </div>
        {session?.user.name && (
          <Button variant="default" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <DrawerDemo />
      </div>
    </div>
  );
}

export default Navbar;
