"use client";
import Navbar from "@/components/navbar";
import { ReactNode, useRef } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={mainRef} className="relative h-full min-h-screen w-full">
      <Navbar mainRef={mainRef} />
      {children}
    </div>
  );
}
