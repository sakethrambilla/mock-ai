import prisma from "@/lib/db";

import DashboardLayout from "@/layouts/dashboard-layout";
import WebCamera from "./_components/web-camera";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InterviewInfo from "./_components/interview-info";
import Settings from "./start/_components/settings";

export default async function page({
  params,
}: {
  params: { interviewId: string };
}) {
  const id = params.interviewId;
  const data = await prisma.mockInterview.findUnique({ where: { mockId: id } });

  return (
    <DashboardLayout>
      <InterviewInfo data={data} />
    </DashboardLayout>
  );
}
