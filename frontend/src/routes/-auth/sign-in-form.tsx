import { Link, useNavigate } from "@tanstack/react-router";
import { authClient } from "../../lib/auth-client";
import { invalidateAndRefetchSession, useSession } from "@/hooks/auth.hook";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { toast } from "sonner";

export function SignInForm() {
  const navigate = useNavigate();
  const { data: session, isLoading } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await authClient.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    console.log(res, session);

    if (res?.error?.message) {
      toast.error("Invalid email or password", {
        description: "Please check your credentials and try again",
        position: "top-center",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("undo"),
        },
      });
    }

    if (res.data?.user.name) {
      toast.success(`Hello ${res.data.user.name}`, {
        position: "top-center",
        duration: 3000,
      });
    }

    await invalidateAndRefetchSession();

    navigate({ to: "/" });
  };

  if (isLoading) {
    return (
      <div>
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
