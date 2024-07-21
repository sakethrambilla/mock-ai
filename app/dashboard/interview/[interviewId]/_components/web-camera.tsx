"use client";
import { Button } from "@/components/ui/button";
import { LucideWebcam } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import Webcam from "react-webcam";

export default function WebCamera({
  webCamOn,
  setWebCamOn,
}: {
  webCamOn: boolean;
  setWebCamOn: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex h-full w-fit flex-col gap-8">
      <div className="h-full">
        {webCamOn ? (
          <Webcam
            className="rounded-2xl"
            onUserMedia={() => setWebCamOn(true)}
            onUserMediaError={() => setWebCamOn(false)}
            mirrored={true}
            width={400}
          />
        ) : (
          <LucideWebcam className="h-[30vh] w-full rounded-2xl bg-secondary p-8" />
        )}
      </div>
      <Button className="w-full" onClick={() => setWebCamOn(true)}>
        Enable Web Cam and Microphone
      </Button>
    </div>
  );
}
