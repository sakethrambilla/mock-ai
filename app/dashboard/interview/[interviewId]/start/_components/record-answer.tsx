"use client";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { chatSession } from "@/lib/gemini-ai-model";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

interface RecordAnswerProps {
  questions: string | undefined;
  activeQuestion: number;
  params: { interviewId: string };
  setActiveQuestion: Dispatch<SetStateAction<number>>;
}

export default function RecordAnswer({
  questions,
  activeQuestion,
  params,
  setActiveQuestion,
}: RecordAnswerProps) {
  const questionArray = JSON.parse(questions || "");
  const router = useRouter();
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const {
    error,
    isRecording,
    results,
    setResults,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  console.log("OUTSIDE  ", userAnswer);

  useEffect(() => {
    if (results.length > 0 && typeof results[0] !== "string") {
      const resultArray = results as ResultType[];
      resultArray.map((result: { transcript: string }) =>
        setUserAnswer((prevAns) => prevAns + result?.transcript),
      );
    }
  }, [results]);
  // useEffect(() => {
  //   setUserAnswer(results[0].transcript as string);
  // results.map((result: { transcript: string }) =>
  //   setUserAnswer((prevAns) => prevAns + result?.transcript),
  // );
  // }, [results]);

  // useEffect(() => {
  //   if (!isRecording && userAnswer.length > 10) {
  //     UpdateUserAnswer();

  //   }
  // }, [userAnswer]);

  const StartStopRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    console.log("Results: ", results);
    const feedBackPrompt = `Interview Question: ${questionArray[activeQuestion].question}, User Answer: ${userAnswer}, Depending on the interview question and user answer for the interview. please give us rating fot the answer and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with ratiung field should be a number and feedback field`;
    await console.log(feedBackPrompt);
    const result = await chatSession.sendMessage(feedBackPrompt);
    const jobMockResp = await result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    await console.log(jobMockResp);
    const feedbackResponse = await JSON.parse(jobMockResp);
    await setUserAnswer("");
    await setResults([]);
    const response = await axios.post("/api/user-answer", {
      mockIdRef: params.interviewId,
      question: questionArray[activeQuestion].question,
      correctAnswer: questionArray[activeQuestion].answer,
      userAnswer,
      feedback: feedbackResponse.feedback,
      rating: feedbackResponse.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress || "dummy",
    });

    toast({ description: "Answer Updated" });
    if (activeQuestion + 1 == questionArray.length) {
      router.push(`/dashboard/interview/${params.interviewId}/feedback`);
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  if (error)
    return (
      <p>
        Web Speech API is not available in this browser 🤷‍. Use any of these
        browsers Google Chrome, Firefox, Safari for Mac
      </p>
    );
  return (
    <div className="h-full w-1/2">
      <div className="flex h-full w-fit flex-col items-center justify-start gap-8">
        <Webcam className="h-96 w-fit rounded-2xl" mirrored={true} />
        <Button
          variant={"secondary"}
          className={cn("w-full", isRecording ? "text-destructive" : "")}
          onClick={StartStopRecording}
        >
          {isRecording ? "Recording..." : "Record Answer"}
        </Button>
        <Button className="w-full" onClick={() => UpdateUserAnswer()}>
          Submit Answer
        </Button>
      </div>
    </div>
  );
}
