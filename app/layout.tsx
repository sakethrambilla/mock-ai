import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Mock.AI | Mock Interview using AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" style={{ scrollBehavior: "smooth" }}>
        {" "}
        <link rel="icon" href="/images/logo.svg" sizes="any" />
        <body className={` ${josefin_sans.className}`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
