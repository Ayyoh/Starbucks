import { createFileRoute } from "@tanstack/react-router";
import { AddHotDrinkForm } from "./-components/add-hot-drink";

export const Route = createFileRoute("/admin-add-hot-drink")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AddHotDrinkForm />
    </div>
  );
}
