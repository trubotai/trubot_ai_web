import { FaQuoteLeft } from "react-icons/fa6";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "../ui/components/shared/HeroSection";
import BenefitCard from "../ui/components/shared/BenefitCard";
import VerticalTimeline from "../ui/components/shared/VerticalTimeline";
import CTASection from "../ui/components/shared/CTASection";
import {
  howWeWorkList,
  heroSection,
  perkList,
  ctaSection,
} from "../ui/libs/constants/work-culture";

export const metadata = {
  title: "Work Culture – TruBot AI",
  description:
    "Explore a career at TruBot AI — 4-day work weeks, equity ownership, and a culture that prioritizes impact and innovation.",
  keywords: [
    "TruBot AI Careers",
    "Work Culture at TruBot AI",
    "4-Day Work Week Tech Companies",
    "AI Company Employee Benefits",
    "Innovative Tech Work Environment",
    "Flat Hierarchy Tech Firms",
    "Employee Equity in Startups",
    "Remote Work Opportunities in AI",
    "Tech Company Retreats",
    "Career Growth in AI Industry",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Why Join */}
      <PageLayout id="join-trubot" aria-label="Why Join TruBot AI?">
        <SectionHeader
          title="Why Join TruBot AI?"
          subtitle="We’ve built a place where the best minds thrive without burnout."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perkList.map((perk, index) => (
            <BenefitCard
              key={index}
              audience={perk.audience}
              subtitle={perk.subtitle}
              benefits={perk.benefits}
              bgClass="bg-light fade-in slide-in-up"
            />
          ))}
        </div>
      </PageLayout>

      {/* How We Work */}
      <div className="bg-gray-soft">
        <PageLayout id="how-we-work" aria-label="How We Work">
          <SectionHeader
            title="How We Work"
            subtitle="Built on freedom, focus, and a flat structure that rewards outcomes."
          />

          <div className="max-w-4xl mx-auto fade-in slide-in-up">
            <VerticalTimeline
              title="Our Core Culture Pillars"
              steps={howWeWorkList}
            />
          </div>
        </PageLayout>
      </div>

      {/* Founder Quote */}
      <PageLayout id="founder-quote" aria-label="Founder Quote">
        <figure className="text-center max-w-2xl mx-auto fade-in slide-in-up">
          <FaQuoteLeft className="text-electric text-2xl mb-4 mx-auto opacity-60 float" />
          <blockquote className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed">
            “We don’t just build AI—we build legacies.”
          </blockquote>
        </figure>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
