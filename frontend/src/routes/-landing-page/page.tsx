import { useSession } from "@/hooks/auth.hook";
import LandingPage from "./landing-page";
import HotDrinksPage from "../-components/features/hot-drinks/hot-drinks-page";

export function RouteComponent() {
  const { data: session } = useSession();

  return (
    <div className="App relative">
      <div>
        {!session && <LandingPage />}
        {session && <LandingPage />}
      </div>
    </div>
  );
}
