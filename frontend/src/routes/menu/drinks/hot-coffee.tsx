import MenuBreadCrumb from "@/routes/-components/menu-breadcrumb";
import MenuHotCoffeeItems from "@/routes/-components/menu-hot-coffee-items";
import { createFileRoute, Link, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/drinks/hot-coffee")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <MenuBreadCrumb />
      <span className="font-bold text-2xl">Hot Coffee</span>
      <MenuHotCoffeeItems />
    </div>
  );
}