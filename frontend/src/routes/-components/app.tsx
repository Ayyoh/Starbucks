import { SiStarbucks } from "react-icons/si";
import { clsx } from "clsx";
import { DrawerDemo } from "./app-components/drawer-demo";
import Hero from "./app-components/hero";
import MenuSection from "./app-components/menu-section";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";

const colors = {
  starbucksText: "text-[#1C4A35]",
  starbucksTextYellow: "text-[#CBAC49]",
};

function App() {
  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
        }
      }
    });
  };

  return (
    <div className="App relative">
      <div className="flex items-center justify-between shadow-sm h-20.5 px-5">
        <div className="flex items-center gap-2">
          <SiStarbucks size={44} fill="#006241" />
          <span className={clsx("font-bold text-2xl", colors.starbucksText)}>Starbucks</span>
        </div>
        <Button variant="default" onClick={handleLogout}>
          Logout
        </Button>
        <DrawerDemo />
      </div>
      <Hero />
      <MenuSection />
    </div>
  );
}

export default App;
