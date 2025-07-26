import { createFileRoute } from "@tanstack/react-router";
import { RouteComponent } from "./-landing-page/page";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});