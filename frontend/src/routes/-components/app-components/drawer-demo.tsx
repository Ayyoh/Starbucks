"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { AlignJustify, Award, Gift, MapPin, Menu, ShoppingBag, Store } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";

const colors = {
  textBase: "text-[#1C4A35]",
};

const items = [
  { name: "Menu", Link: "/menu", icon: <Menu size={20} /> },
  { name: "Locations", Link: "/locations", icon: <MapPin size={20} /> },
  { name: "Orders", Link: "/orders", icon: <ShoppingBag size={20} /> },
  { name: "Rewards", Link: "/rewards", icon: <Award size={20} /> },
  { name: "About", Link: "/about", icon: <Store size={20} /> },
  { name: "Gift Cards", Link: "/gift-cards", icon: <Gift size={20} /> },
];

const authItems = [
  { name: "Sign in", Link: "/sign-in", variant: "outline" },
  { name: "Join now", Link: "/sign-up", variant: "default" },
];

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen px-6 flex flex-col gap-2">
        <DrawerTitle className={clsx("font-semibold text-xl", colors.textBase)}>Starbucks</DrawerTitle>

        <div className="mx-auto w-full max-w-sm flex flex-col gap-6">
          <div className="border-b border-gray-300">
            {items.map((item, i) => (
              <div key={i} className="w-30">
                <Link to={item.Link}>
                  <span className={clsx("flex items-center gap-1 text-lg font-semibold", colors.textBase)}>
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {authItems.map((authItem, i) => (
              <div key={i}>
                <Link to={authItem.Link}>
                  <Button variant={authItem.variant as "outline" | "default"}>{authItem.name}</Button>
                </Link>
              </div>
            ))}
          </div>

          <div>
            <CiCoffeeCup size={120} fill="#1C4A35" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
