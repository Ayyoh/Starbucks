import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

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

  plugins: [adminClient()],

  admin: {
    async setRole({ userId, role }: { userId: string; role: string }) {
      const res = await fetch("/api/admin/set-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, role }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to set role");
      }

      return res.json();
    },
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
