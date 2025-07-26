import {
  Outlet,
  createRootRoute,
  redirect,
  useLocation,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { authClient } from "@/lib/auth-client";
import Navbar from "@/routes/-components/navbar";
import Footer from "./-components/footer-section";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  loader: async () => {
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
  },

  component: () => {
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
