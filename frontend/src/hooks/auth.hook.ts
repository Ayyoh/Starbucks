import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { queryClient } from "../lib/query-client";

export const SESSION_KEY = "session";

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MS_WEEK = MS_DAY * 7;

export const TIME = { MS_SECOND, MS_MINUTE, MS_HOUR, MS_DAY, MS_WEEK };

export function useSession() {
  return useQuery({
    queryKey: [SESSION_KEY],
    queryFn: async () => {
      try {
        const data = await authClient.getSession();
        return data.data;
      } catch {
        return null;
      }
    },
    retry: 1,
    staleTime: TIME.MS_SECOND,
    gcTime: TIME.MS_SECOND,
    refetchOnMount: false,
    refetchOnWindowFocus: false, // optional
    refetchOnReconnect: false,
    // refetchInterval: (query) => {
    //   const queryData = query.state.data;
    //   if (!queryData) return false;

    //   const expiresAt = new Date(queryData.session.expiresAt).getTime();
    //   const expiresIn = expiresAt - Date.now();

    //   return Math.max(0, expiresIn - TIME.MS_MINUTE);
    // },
  });
}

export async function invalidateSession() {
  await queryClient.invalidateQueries({ queryKey: [SESSION_KEY] });
}

export async function invalidateAndRefetchSession() {
  await queryClient.invalidateQueries({ queryKey: [SESSION_KEY] });
  const session = await queryClient.fetchQuery({
    queryKey: [SESSION_KEY],
    queryFn: () => authClient.getSession(),
  });

  return session;
}

export async function clearAndRefetchSession() {
  queryClient.setQueryData([SESSION_KEY], null);
  await queryClient.fetchQuery({ queryKey: [SESSION_KEY] });
}
