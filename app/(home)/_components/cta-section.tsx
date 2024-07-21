import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function CtaSection() {
  return (
    <div className="relative flex h-screen flex-row items-center justify-center">
      <div className="flex h-[30vh] w-full flex-col items-start justify-center gap-4 bg-primary px-40 text-primary-foreground">
        <h2 className="text-5xl font-bold">
          Start your Interview Journey Today
        </h2>
        <p className="text-xl">
          Experience the power of our AI mock interview platform and improve
          your interview skills.
        </p>
        <Button className="text-xl" variant={"secondary"}>
          Sign Up
        </Button>
      </div>
      <Image
        src={
          "https://images.unsplash.com/photo-1686771416317-b964cc4e0002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D"
        }
        width={100}
        height={100}
        className="absolute right-0 mx-24 w-1/3 rounded-2xl"
        alt="Interivew Image"
        unoptimized
      />
    </div>
  );
}
