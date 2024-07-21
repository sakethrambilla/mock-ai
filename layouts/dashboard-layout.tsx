import Navbar from "@/components/dashboard-navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="  h-full min-h-[100vh] w-full ">
      <Navbar />
      {children}
    </div>
  );
}
