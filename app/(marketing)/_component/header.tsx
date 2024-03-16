"use client";

import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import ROUTES from "@/routes";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const auth = useAuth();
  return (
    <header className="w-full px-4 h-20 border-b border-slate-200">
      <div className="lg:max-w-screen-lg justify-between h-full mx-auto flex items-center">
        <Link href={auth.isSignedIn ? ROUTES.LEARN : ROUTES.MARKETING}>
          <Logo />
        </Link>
        <div className="inline-flex items-center gap-x-4">
          <ClerkLoading>
            <LoaderIcon size={14} className="animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl={ROUTES.MARKETING} />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl={ROUTES.LEARN}
                afterSignUpUrl={ROUTES.LEARN}
              >
                <Button variant={"default"}>Login</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
