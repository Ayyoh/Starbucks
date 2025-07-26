import {
  Outlet,
  createRootRoute,
  redirect,
  useNavigate,
  useStableCallback,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSession } from "@/hooks/auth.hook";
import { authClient } from "@/lib/auth-client";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
  loader: async () => {
    const { data: session } = await authClient.getSession();

    const pathname = window.location.pathname;
    const GUEST_ROUTES = ["/sign-in", "sign-up", "/"];

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
        <Navbar />
        <Outlet />
        <ReactQueryDevtools />
      </>
    );
  },
});
