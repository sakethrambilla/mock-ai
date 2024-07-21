import DashboardLayout from "@/layouts/dashboard-layout";
import prisma from "@/lib/db";
import React from "react";
import Feedback from "./_components/feedback-section";

export default async function page({
  params,
}: {
  params: { interviewId: string };
}) {
  const data = await prisma.userAnswer.findMany({
    where: { mockIdRef: params.interviewId },
    orderBy: { createdAt: "asc" },
  });
  await console.log(data);
  await console.log(data.length);
  return (
    <DashboardLayout>
      <Feedback feedbackList={data} />
    </DashboardLayout>
  );
}
