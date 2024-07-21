import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-[100vh] w-full scroll-smooth">
      <Navbar />
      {children}
    </div>
  );
}
