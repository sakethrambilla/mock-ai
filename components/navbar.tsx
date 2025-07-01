"use client";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About Us",
    href: "#about-us",
  },
];

export default function Navbar({
  mainRef,
}: {
  mainRef: React.RefObject<HTMLDivElement>;
}) {
  const { isSignedIn } = useUser();
  const ref = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Animate the navbar
      gsap.to(".navbar", {
        width: "60%",
        margin: "20px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        ease: "power2.inOut",
        duration: 1,

        scrollTrigger: {
          trigger: mainRef.current,
          start: "5% 10%",
          end: "15% 10%",
          scrub: true,
          markers: false, // Set to true for debugging
        },
      });
    },
    { dependencies: [mainRef.current] },
  ); // Add dependency array

  return (
    <div className="navbar-container fixed z-50 flex w-full items-center justify-center">
      {/* Mobile Design */}

      {/* Desktop Navbar */}
      <div
        ref={ref}
        className="navbar flex h-20 w-4/5 items-center justify-between px-8 lg:text-xl"
      >
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="h-6 w-auto"
          />
          <p className="font-switzer">MockInt</p>
        </div>

        <div className="flex items-center justify-between gap-8 text-sm">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <Button>{"Sign Up"}</Button>
      </div>
    </div>
  );
}
