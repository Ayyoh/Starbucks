import {
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { authClient } from "@/lib/auth-client";
import Navbar from "@/routes/-components/navbar";
import Footer from "./-components/footer-section";
import { Toaster } from "sonner";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { SESSION_KEY, useSession } from "@/hooks/auth.hook";

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  loader: async ({ context }) => {
    const { data: session } = await authClient.getSession();

    const pathname = window.location.pathname;
    const GUEST_ROUTES = ["/sign-in", "/sign-up", "/"];

    const isGuestRoutes = GUEST_ROUTES.includes(pathname);

    if (!session && !isGuestRoutes) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: pathname },
      });
    }

    context.queryClient.setQueryData([SESSION_KEY], session ?? null);

    return { session };
  },

  component: () => {
    const { data: session } = useSession();

    return (
      <>
        <Toaster richColors />
        <Navbar />
        <Outlet />
        <Footer />
        <ReactQueryDevtools />
      </>
    );
  },
});
