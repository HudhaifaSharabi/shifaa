import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { ProblemSection } from "../components/problem-section";
import { PlanSection } from "../components/plan-section";
import { SuccessStories } from "../components/success-stories";
import { ImpactStats } from "../components/impact-stats";
import { PartnersSection } from "../components/partners-section";
import { DonationCta } from "../components/donation-cta";
import { SiteFooter } from "../components/site-footer";

export default function HomePage() {
  return (
    <div className="bg-white text-darkBlue dark:bg-[#060b1a] dark:text-white">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <ProblemSection />
        <PlanSection />
        <SuccessStories />
        <ImpactStats />
        <PartnersSection />
        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
