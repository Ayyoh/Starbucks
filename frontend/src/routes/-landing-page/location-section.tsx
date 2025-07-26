import { colors } from "@/components/colors";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowRight, ClockAlert, MapPin } from "lucide-react";

function LocationSection() {
  return (
    <div className="w-full items-center flex flex-col gap-10 pb-14">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold">
          <span className={clsx("flex gap-2", colors.locationSectionColors.textBase)}>
            Find Your
            <span className={colors.locationSectionColors.findStarbucks}>
              Starbucks
            </span>
          </span>
        </div>
        <div className="text-xl text-center">
          <span className={colors.locationSectionColors.description}>
            Discover our convenient locations near you and experience the
            perfect coffee moment
          </span>
        </div>
      </div>

      <div>
        <Button variant="default" className="flex items-center">
          <MapPin size={12} />
          Find Stores near you
          <ArrowRight size={12} />
        </Button>
      </div>
    </div>
  );
}

export default LocationSection;
