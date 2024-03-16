import { Button } from "@/components/ui/button";
import {
  SignUpButton,
  SignedOut,
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignInButton,
} from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 max-w-[988px] mx-auto relative w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative flex items-center justify-center  h-[240px] w-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="hero" />

        <div className="relative  h-auto aspect-[35/32] w-full max-w-[20%]">
          <Image fill src="/penguin.svg" alt="hero" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-bold max-w-[480px] text-center text-primary text-xl lg:text-2xl">
          Learn, practice, and master a new language with Penguage
        </h1>

        <ClerkLoading>
          <LoaderIcon size={14} className="animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button className="w-full" size={"lg"} variant={"secondary"}>
                Get Started
              </Button>
            </SignUpButton>

            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button className="w-full" size={"lg"} variant={"primaryOutline"}>
                I already an account
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button
              asChild
              className="max-lg:w-full"
              size={"lg"}
              variant={"secondary"}
            >
              <Link href="/learn">Continue Learn</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
