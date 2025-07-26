import { createFileRoute } from "@tanstack/react-router";
import MenuHeader from "./-components/menu-header";

export const Route = createFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
        <MenuHeader />
    </div>
  );
}
