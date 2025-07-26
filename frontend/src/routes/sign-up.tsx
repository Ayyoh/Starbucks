import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "./-auth/sign-up-form";

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <SignUpForm />
    </div>
  );
}
