import { colors } from "@/components/colors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Copyright } from "lucide-react";
import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { SiGithub, SiStarbucks } from "react-icons/si";

function Footer() {
  const items = [
    { icon: <CiFacebook size={20} fill="#ffffff" />, link: "" },
    { icon: <CiTwitter size={20} fill="#ffffff" />, link: "" },
    { icon: <CiInstagram size={20} fill="#ffffff" />, link: "" },
    { icon: <SiGithub size={20} fill="#ffffff" />, link: "" },
  ];

  const quickLinks = [
    { name: "Menu", link: "" },
    { name: "Rewards", link: "" },
    { name: "Gift Cards", link: "" },
    { name: "Store Locator", link: "" },
    { name: "Careers", link: "" },
  ];

  const customerService = [
    { name: "Contact Us", link: "" },
    { name: "FaQs", link: "" },
    { name: "Order Support", link: "" },
    { name: "Return Policy", link: "" },
    { name: "Accessibility", link: "" },
  ];

  const gdprProof = [
    { name: "Privacy Policy", link: "" },
    { name: "Terms of Service", link: "" },
    { name: "Cookie Preferences", link: "" },
  ];

  return (
    <div>
      <div
        className={clsx(
          "h-full w-screen py-14 px-4",
          colors.footerSectionColors.background
        )}
      >
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 text-white font-semibold text-lg tracking-wider">
            <SiStarbucks
              size={30}
              className="bg-white rounded-full"
              fill="#006241"
            />
            <span>Starbucks</span>
          </span>

          <div>
            <span className={clsx("", colors.footerSectionColors.textBase)}>
              Inspiring and nurturing the human spirit – one person, one cup and
              one neighborhood at a time.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {items.map((item, i) => (
              <div key={i} className="rounded-md p-2 hover:bg-[#493A30]">
                <span>{item.icon}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-white font-semibold text-lg">
                Quick Links
              </span>
              {quickLinks.map((link, i) => (
                <div
                  key={i}
                  className={clsx("", colors.footerSectionColors.textBase)}
                >
                  <span>{link.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-white font-semibold text-lg">
                Customer Service
              </span>
              {customerService.map((link, i) => (
                <div
                  key={i}
                  className={clsx("", colors.footerSectionColors.textBase)}
                >
                  <span>{link.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-white border-b pb-10">
              <span>Stay Connected</span>
              <span className={clsx("", colors.footerSectionColors.textBase)}>
                Get the latest updates on new products and exclusive offers.
              </span>

              <Input
                placeholder="Enter your email"
                className={clsx("py-1", colors.footerSectionColors.inputBG)}
              />
              <Button
                variant="default"
                className={clsx(
                  "bg-gradient-to-r to-120% text-white",
                  colors.footerSectionColors.buttonBase
                )}
              >
                Subscribe
              </Button>
            </div>

            <div
              className={clsx(
                "flex justify-center",
                colors.footerSectionColors.textBase
              )}
            >
              <div className="flex flex-col text-sm items-center">
                <div className="flex items-center gap-1 -space-y-1">
                  <Copyright size={14} />
                  <span className="text-sm">
                    2024 Starbucks Corporation. All rights reserved.
                  </span>
                </div>

                <div className="flex gap-4">
                  {gdprProof.map((proof, i) => (
                    <div
                      key={i}
                      className={clsx("", colors.footerSectionColors.textBase)}
                    >
                      <span>{proof.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
