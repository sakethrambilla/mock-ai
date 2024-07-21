"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <>
      {/* Mobile Design */}

      {/* Desktop Navbar */}
      <div className="flex w-full items-center justify-between border-b-2 px-8 py-4 font-josefin_sans lg:text-xl">
        <Link href={"/dashboard"}>
          <p>
            Mock.<span className="text-primary">AI</span>
          </p>
        </Link>
        <UserButton />
      </div>
    </>
  );
}
