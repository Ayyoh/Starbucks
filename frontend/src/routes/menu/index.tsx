import { createFileRoute } from "@tanstack/react-router";
import MenuHeader from "../-components/menu-header";
import MenuCapsules from "../-components/menu-capsules";

export const Route = createFileRoute("/menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
        <MenuHeader />
        <MenuCapsules />
    </div>
  );
}
