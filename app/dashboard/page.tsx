import DashboardLayout from "@/layouts/dashboard-layout";
import React from "react";
import AddNewInterview from "./_components/add-new-interview";
import PreviousInterview from "./_components/previous-interview";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
export default async function page() {
  const { userId } = await auth();

  console.log(userId);
  const data = await prisma.mockInterview.findMany({
    where: { createdBy: userId as string },
    orderBy: { createdAt: "desc" },
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col p-24">
        <h2 className="text-3xl font-bold text-primary lg:text-5xl">
          Dashboard
        </h2>
        <h2>Create and Start your AI mockup Interview </h2>
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
          <AddNewInterview />
          {data.map((interview) => (
            <div
              className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-xl border-2 bg-secondary"
              key={interview.id}
            >
              <h2 className="text-2xl">{interview.jobPosition}</h2>
              <div className="flex w-full flex-col px-4 text-xs text-secondary-foreground">
                <p>
                  Job Description: {interview.jobDescription.substring(0, 30)}
                  ....
                </p>
                <p>Experience : {interview.jobExperience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
