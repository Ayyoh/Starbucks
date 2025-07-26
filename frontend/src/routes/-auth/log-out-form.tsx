import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/auth.hook";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import React from "react";

function LogoutForm() {
  const { data: session } = useSession();

  const navigate = useNavigate();
  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/sign-in" });
        },
      },
    });
  };

  return (
    <div>
      <div>
        {session?.user.name && (
          <Button variant="default" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default LogoutForm;
