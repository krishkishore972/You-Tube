"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthButton = () => {
  // Add diff auth states
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu item for studio and User Profile*/}
        
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className=" px-3 py-2 text-sm font-medium  text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
          >
            <UserCircleIcon />
            <span className="ml-2">Sign In</span>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
