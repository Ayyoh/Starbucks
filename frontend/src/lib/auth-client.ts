import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000/api/auth",
  session: async () => {
    const res = await fetch("http://localhost:3000/api/auth/session", {
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch session");
    }

    return res.json();
  },

  // signIn: {
  //   email: async ({ email, password }: { email: string; password: string }) => {
  //     const res = await fetch("http://localhost:3000/api/auth/sign-in/email", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify({ email, password }),
  //     });
  //   },
  // },
});
