import { createFileRoute } from "@tanstack/react-router";
import { SignInForm } from "./-auth/sign-in-form";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SignInForm />
    </div>
  );
}
