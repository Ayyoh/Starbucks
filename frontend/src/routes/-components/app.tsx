import { useSession } from "@/hooks/auth.hook";
import HotDrinksPage from "@/features/hot-drinks/hot-drinks-page";
import LandingPage from "./app-components/landing-page";

function App() {
  const session = useSession();

  if (!session.data?.session) {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }

  return (
    <div className="App relative">
      <div>
        {/* Here */}
        <HotDrinksPage />
      </div>
    </div>
  );
}

export default App;
