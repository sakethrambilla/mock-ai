"use client";

import { Button } from "@/components/ui/button";

import WebCamera from "./web-camera";
import Link from "next/link";
import { useState } from "react";
export interface Data {
  id: string;
  mockId: string;
  jobMockResp: string;
  jobPosition: string;
  jobDescription: string;
  jobExperience: number;
  createdBy: string;
  createdAt: Date;
}

export default function InterviewInfo({ data }: { data: Data | null }) {
  const [webCamOn, setWebCamOn] = useState(false);
  console.log(webCamOn);
  return (
    <div className="flex h-full w-full flex-row items-start justify-center gap-24 py-24">
      <div className="flex w-1/2 flex-col gap-24">
        <div className="flex h-fit w-full flex-col gap-8 rounded-xl border-2 border-foreground p-12">
          <h2 className="text-2xl">Job Position: {data?.jobPosition}</h2>
          <div className="flex flex-col gap-4 text-lg">
            <h2>Job Description: {data?.jobDescription}</h2>
            <h2>Years of Experience : {data?.jobExperience}</h2>
          </div>
        </div>
        <Link href={`/dashboard/interview/` + data?.mockId + "/start"}>
          <Button
            className="w-full"
            size={"lg"}
            variant={"default"}
            disabled={!webCamOn}
          >
            Start Interview
          </Button>
        </Link>
      </div>
      <div className="w-1/3">
        <WebCamera webCamOn={webCamOn} setWebCamOn={setWebCamOn} />
      </div>
    </div>
  );
}
