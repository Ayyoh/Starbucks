import { useNavigate } from "@tanstack/react-router";
import { authClient } from "../../lib/auth-client";
import { clearAndRefetchSession, invalidateAndRefetchSession, useSession } from "@/hooks/auth.hook";

export function SignInForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await authClient.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    navigate({ to: "/" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
      <h1></h1>
    </form>
  );
}
