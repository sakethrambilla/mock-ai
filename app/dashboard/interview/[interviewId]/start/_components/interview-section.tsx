"use client";
import React, { useState } from "react";
import { Data } from "../../_components/interview-info";
import InterviewQuestions from "./interview-questions";
import dynamic from "next/dynamic";
// import RecordAnswer from "./record-answer";
const RecordAnswer = dynamic(() => import("./record-answer"), {
  ssr: false,
});
export default function InterviewSection({
  data,
  params,
}: {
  data: Data | null;
  params: { interviewId: string };
}) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  return (
    <div className="flex h-full items-start gap-24">
      
      <InterviewQuestions
        questions={data?.jobMockResp}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <RecordAnswer
        questions={data?.jobMockResp}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
        params={params}
      />
    </div>
  );
}
