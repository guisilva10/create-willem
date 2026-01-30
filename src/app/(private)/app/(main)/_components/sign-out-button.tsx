"use client";

import { Button } from "@/app/_components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button variant="destructive" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
