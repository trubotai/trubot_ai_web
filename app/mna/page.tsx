import type { Metadata } from "next";
import { FaQuoteLeft } from "react-icons/fa6";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "../ui/components/shared/HeroSection";
import FeatureCard from "../ui/components/shared/FeatureCard";
import BenefitCard from "../ui/components/shared/BenefitCard";
import StoryCard from "../ui/components/shared/StoryCard";
import CTASection from "../ui/components/shared/CTASection";
import {
  heroSection,
  acquisitionTargetList,
  dealList,
  successStoryList,
  ctaSection,
} from "../ui/libs/constants/mna";

export const metadata: Metadata = {
  title: "Mergers & Acquisitions – TruBot AI",
  description:
    "Sell your B2B SaaS or Hosting company for 100X returns. Explore our AI-led acquisition strategy, deal automation tools, and M&A integration success stories.",
  keywords: [
    "AI M&A Solutions",
    "AI for Mergers and Acquisitions",
    "Intelligent M&A Automation",
    "AI-Powered Due Diligence",
    "AI Risk Assessment M&A",
    "AI Tools for M&A Strategy",
    "AI in Business Acquisitions",
    "M&A Data Analysis with AI",
    "Deal Flow Automation AI",
    "TruBot AI M&A Platform",
    "AI for Financial Modeling",
    "Predictive Analytics for M&A",
    "Machine Learning in M&A",
    "AI M&A Deal Insights",
    "Automated M&A Process Tools",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Acquisition Targets */}
      <div className="bg-gray-soft">
        <PageLayout id="acquisition-targets">
          <SectionHeader
            title="Our Ideal Acquisition Targets"
            subtitle="We’re looking for growth-stage companies ready to scale with AI."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acquisitionTargetList.map((target, index) => (
              <FeatureCard
                key={index}
                icon={target.icon}
                title={target.title}
                description={target.description}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Deal Structures */}
      <PageLayout id="deal-structures">
        <SectionHeader
          title="Deal Structures We Offer"
          subtitle="Flexible pathways that match your exit goals and vision for growth."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dealList.map((deal, index) => (
            <BenefitCard
              key={index}
              audience={deal.audience}
              subtitle={deal.subtitle}
              benefits={deal.benefits}
              bgClass="bg-gray-soft"
            />
          ))}
        </div>
      </PageLayout>

      {/* Success Stories */}
      <div className="bg-gray-soft">
        <PageLayout id="success-stories">
          <SectionHeader
            title="Integration Success Stories"
            subtitle="See how AI-powered integrations drive margin growth and retention."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStoryList.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                challenge={story.challenge}
                solution={story.solution}
                results={story.results}
                linkLabel={story.linkLabel}
                linkHref={story.linkHref}
                delay={story.delay}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Quote Box */}
      <PageLayout id="founder-quote" ariaLabelledby="founder-quote-heading">
        <div className="text-center max-w-2xl mx-auto fade-in slide-in-up">
          <FaQuoteLeft
            className="text-electric text-2xl mb-4 mx-auto opacity-60 float"
            aria-hidden="true"
          />
          <blockquote
            className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed"
            id="founder-quote-heading"
          >
            “Tech founders deserve more than exits—they deserve legacy growth.”
          </blockquote>
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
