"use client";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Feedback = ({ feedbackList }: { feedbackList: any }) => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
      <h2 className="text-2xl font-bold">Here is your interview feedback</h2>
      {feedbackList?.length == 0 ? (
        <h2 className="text-lg font-bold text-green-500">
          No interview Feedback
        </h2>
      ) : (
        <>
          <h2 className="my-2 text-lg text-primary">
            Your overall interview rating: <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview questions with coreect answers,Your answer and
            feedback for improvements for your next interview
          </h2>
          {feedbackList &&
            feedbackList.map((item: any, index: number) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="my-2 flex w-full justify-between gap-7 rounded-lg bg-secondary p-2 text-left">
                  {item.question} <ChevronsUpDown className="h-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="rounded-lg border p-2 text-red-500">
                      <strong>Rating:</strong>
                      {item.rating}
                    </h2>
                    <h2 className="rounded-lg border bg-red-50 p-2 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAnswer}
                    </h2>
                    <h2 className="rounded-lg border bg-green-50 p-2 text-sm text-green-900">
                      <strong>Correct Answer Looks Like: </strong>
                      {item.correctAnswer}
                    </h2>
                    <h2 className="rounded-lg border bg-blue-50 p-2 text-sm text-primary">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Link href={"/dashboard"}>
        <Button className="mt-5"> Go Home</Button>
      </Link>
    </div>
  );
};

export default Feedback;
