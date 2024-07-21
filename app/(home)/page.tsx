import MainLayout from "@/layouts/main-layout";
import Image from "next/image";
import Header from "./_components/header";
import FeaturesSection from "./_components/features-section";
import HowItWorks from "./_components/how-it-works";
import CtaSection from "./_components/cta-section";

export default function Home() {
  // console.log(process.env.DRIZZLE_DATABASE_URL);
  return (
    <MainLayout>
      <Header />
      <FeaturesSection />
      <HowItWorks />
      <CtaSection />
    </MainLayout>
  );
}
