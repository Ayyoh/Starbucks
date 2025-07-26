import Footer from "../-components/footer-section";
import Hero from "./hero";
import LocationSection from "./location-section";
import MenuSection from "./menu-section";

function LandingPage() {
  return (
    <div className="relative">
      <Hero />

      <div className="flex flex-col items-center px-5 justify-center">
        <MenuSection />
        <LocationSection />
      </div>
    </div>
  );
}

export default LandingPage;
