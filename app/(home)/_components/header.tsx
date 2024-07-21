import React from "react";

export default function Header() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-5xl lg:w-3/5 xl:text-6xl">
        {"Experience "}
        <span className="relative z-10 w-full">
          <span className="relative z-10">AI Mock Interviews</span>
          <div className="absolute bottom-3 left-0 z-0 h-4 w-full bg-primary/60"></div>
        </span>
        {" Like Never Before"}
      </h1>
      <p className="text-xl text-secondary-foreground">
        Prepare for your dream job with our AI-powered mock interview platform.
      </p>
    </div>
  );
}
