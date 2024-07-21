import prisma from "@/lib/db";
import DashboardLayout from "@/layouts/dashboard-layout";
import InterviewSection from "./_components/interview-section";
import Settings from "./_components/settings";

export default async function page({
  params,
}: {
  params: { interviewId: string };
}) {
  const id = params.interviewId;
  const data = await prisma.mockInterview.findUnique({ where: { mockId: id } });

  return (
    <DashboardLayout>
      <div className="h-full w-full p-24">
        <InterviewSection data={data} params={params} />
      </div>
    </DashboardLayout>
  );
}
