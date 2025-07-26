import { invalidateAndRefetchSession, useSession } from "@/hooks/auth.hook";
import { authClient } from "@/lib/auth-client";
import { queryClient } from "@/lib/query-client";
import { useNavigate } from "@tanstack/react-router";

export function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await authClient.signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    console.log(res);

    navigate({ to: "/" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
