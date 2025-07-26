"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSession } from "@/hooks/auth.hook";
import { Link, useLocation } from "@tanstack/react-router";
import clsx from "clsx";
import {
  AlignJustify,
  Award,
  Gift,
  MapPin,
  Menu,
  ShoppingBag,
  Store,
} from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";
import LogoutForm from "../-auth/log-out-form";
import React, { useState } from "react";

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

const LinkItems = [
  { name: "Sign in", Link: "/sign-in", variant: "outline" },
  { name: "Join now", Link: "/sign-up", variant: "default" },
];

export function DrawerDemo() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen px-6 flex flex-col gap-2">
        <DrawerTitle className={clsx("font-semibold text-xl", colors.textBase)}>
          Starbucks
        </DrawerTitle>
        <DrawerDescription />

        <div className="mx-auto w-full max-w-sm flex flex-col gap-6">
          <div className="border-b border-gray-300">
            {items.map((item, i) => (
              <div key={i} className="w-30">
                <Link to={item.Link} onClick={() => setOpen(false)}>
                  <span
                    className={clsx(
                      "flex items-center gap-1 text-lg font-semibold",
                      colors.textBase
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {!session?.user.name && (
            <div className="flex gap-2">
              {LinkItems.map((authItem, i) => (
                <div key={i}>
                  <Link to={authItem.Link} onClick={() => setOpen(false)}>
                    <Button variant={authItem.variant as "outline" | "default"}>
                      {authItem.name}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div>
            <CiCoffeeCup size={120} fill="#1C4A35" />
          </div>

          <div>
            {session?.user.name
              ? `Welcome, ${session.user.name}`
              : "Welcome, Guest"}
          </div>

          <div>
            <LogoutForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
