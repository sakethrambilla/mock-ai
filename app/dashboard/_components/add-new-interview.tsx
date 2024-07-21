"use client";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { chatSession } from "@/lib/gemini-ai-model";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import prisma from "@/lib/db";
import { useRouter } from "next/navigation";
export default function AddNewInterview() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState(0);
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState("");
  const { user } = useUser();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log(jobDescription, jobPosition, jobExperience);
    const InputPrompt =
      "Act as a Interviewer for  Job Position:" +
      jobPosition +
      " with given Job Description: " +
      jobDescription +
      " for a role with Experience of " +
      jobExperience +
      ".Give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " question with their answer in json format, Give us question and answer field on json strictly no text only json format as mentioned";
    setLoading(true);
    const result = await chatSession.sendMessage(InputPrompt);

    const jobMockResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(jobMockResp);
    if (jobMockResp) {
      const response = await axios.post("/api/mock-interview", {
        jobExperience,
        jobDescription,
        jobMockResp,
        jobPosition,
        mockId: uuidv4(),
        createdBy: user?.id,
      });
      console.log(response);
      if (response) {
        setOpenDialog(false);
        router.push(`/dashboard/interview/${response.data.message.mockId}`);
      }
      // console.log(response.data.message);
      toast({
        description: "Questions genereated. ",
      });
    } else {
      toast({
        description: "Couldn't genereate. Please try again after few minutes ",
      });
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div
        className="cursor-pointer rounded-lg border-2 border-foreground bg-primary bg-opacity-10 p-10 text-primary-foreground transition duration-300 hover:scale-105 hover:shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="d text-center text-2xl">+ Add New </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about you job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className="">
                  <h2>
                    Add Details about your job position/role, job Descirpiton
                    and years of experience
                  </h2>
                  <div className="flex flex-col gap-2 py-2">
                    <label htmlFor="">Job Role/ Job Position</label>
                    <Input
                      placeholder="Ex: Full Stack Developer "
                      className="rounded"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <label htmlFor="">Job Description/ Tech Stack</label>
                    <Textarea
                      placeholder="Ex: React, Angular, Node JS "
                      className="rounded"
                      required
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <label htmlFor="">Years of Experience</label>
                    <Input
                      placeholder="Ex: 5 "
                      max={50}
                      type="number"
                      className="rounded"
                      required
                      onChange={(e) => setJobExperience(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <Button
                    variant={"ghost"}
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <LoaderCircle className="animate-spin" /> Generating
                        Questions
                      </div>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
