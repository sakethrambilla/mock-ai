"use client";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <>
      {/* Mobile Design */}

      {/* Desktop Navbar */}
      <div className="flex h-20 w-full items-center justify-between border-b-2 px-8 lg:text-xl">
        <p>
          Mock.<span className="text-primary">AI</span>
        </p>
        <div className="flex gap-8">
          <div className="flex items-center justify-between gap-8">
            <Link href={"services"}>About Us</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#how-it-works"}>How it works</Link>
          </div>
          {isSignedIn ? (
            <Link href={"/dashboard"}>Dashboard</Link>
          ) : (
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <p className="cursor-pointer rounded bg-primary px-4 py-2 text-primary-foreground">
                {"Sign Up"}
              </p>
            </SignInButton>
          )}
        </div>
      </div>
    </>
  );
}
