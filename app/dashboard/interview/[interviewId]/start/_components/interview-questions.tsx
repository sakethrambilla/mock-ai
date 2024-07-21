import { cn } from "@/lib/utils";
import { Volume2 } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

export default function InterviewQuestions({
  questions,
  activeQuestion,
  setActiveQuestion,
}: {
  questions: string | undefined;

  activeQuestion: number;
  setActiveQuestion: Dispatch<SetStateAction<number>>;
}) {
  const textToSpeach = (text: string) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };
  if (!questions) {
    return <></>;
  }

  const questionArray = JSON.parse(questions);
  // console.log(questionArray);
  return (
    <div className="flex w-1/2 flex-col items-start justify-start gap-10 rounded-2xl border-2 p-12">
      <div className="flex w-full flex-wrap gap-2">
        {questionArray.map(
          (question: { question: string; answer: string }, index: number) => (
            <div
              key={index}
              // onClick={() => setActiveQuestion(index)}
              className={cn(
                "w-fit rounded-full border-2 px-4 py-2",
                activeQuestion === index
                  ? "bg-secondary text-secondary-foreground"
                  : "",
              )}
            >
              Question {index + 1}
            </div>
          ),
        )}
      </div>
      <div className="px-2">{questionArray[activeQuestion].question}</div>
      <Volume2
        className="cursor-pointer"
        onClick={() => textToSpeach(questionArray[activeQuestion].question)}
      />
    </div>
  );
}
