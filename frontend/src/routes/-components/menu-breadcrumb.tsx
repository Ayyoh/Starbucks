import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "@tanstack/react-router";
import { capitalizeFirstLetter } from "better-auth/react";
import { SlashIcon } from "lucide-react";
import React from "react";

function MenuBreadCrumb() {
  const location = useLocation();

  const breadCrumb = [
    {
      name: capitalizeFirstLetter(location.pathname.split("/")[1]),
      link: "/menu",
    },
    { name: capitalizeFirstLetter(location.pathname.split("/")[3]), link: "" },
  ];

  return (
    <div className="pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          {breadCrumb.map((bread, i) => (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={bread.link}>{bread.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {i < breadCrumb.length - 1 && (
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default MenuBreadCrumb;
