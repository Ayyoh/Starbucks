import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSession } from "@/hooks/auth.hook";
import { authClient } from "@/lib/auth-client";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
  loader: async () => {
    const { data } = await authClient.getSession();

    if (!data && location.pathname === "/") {
    }
  },

  component: () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <ReactQueryDevtools />
      </>
    );
  },
});
