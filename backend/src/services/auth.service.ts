import "dotenv/config";
import { auth } from "../../lib/auth";

export const signUpWithEmail = async ({ name, email, password }: { name: string; email: string; password: string }) => {
  const callbackURL = process.env.AUTH_CALLBACK_URL;

  const data = await auth.api.signInEmail({
    body: {
      name,
      email,
      password,
      callbackURL
    } as any
  })
};