import { FaQuoteLeft } from "react-icons/fa6";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "../ui/components/shared/HeroSection";
import VerticalTimeline from "../ui/components/shared/VerticalTimeline";
import BenefitCard from "../ui/components/shared/BenefitCard";
import StoryCard from "../ui/components/shared/StoryCard";
import CTASection from "../ui/components/shared/CTASection";
import {
  benefitList,
  heroSection,
  stepList,
  caseStudyList,
  ctaSection,
} from "../ui/libs/constants/sme-empowerment";

export const metadata = {
  title: "SME Empower Program – TruBot AI",
  description:
    "Join the SME Empower Partner Program to earn, trade, and grow 10X faster with TruBot AI’s powerful network.",
  keywords: [
    "SME Empowerment Program",
    "AI Solutions for SMEs",
    "TruBot AI Partnership",
    "SME Automation Tools",
    "Small Business AI Integration",
    "AI Chatbots for SMEs",
    "SME Digital Transformation",
    "TruBot AI SME Network",
    "Business Growth for SMEs",
    "AI-Driven SME Solutions",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* How It Works */}
      <PageLayout id="how-it-works">
        <SectionHeader
          title="How It Works"
          subtitle="Three simple steps to unlock high-growth opportunities with TruBot AI."
          align="center"
        />
        <div className="max-w-4xl mx-auto fade-in slide-in-up">
          <VerticalTimeline title="Your Empowerment Journey" steps={stepList} />
        </div>
      </PageLayout>

      {/* Why Join */}
      <div className="bg-gray-soft">
        <PageLayout id="sme-network">
          <SectionHeader
            title="Why Join TruBot AI’s SME Network?"
            subtitle="More sales. More exposure. No strings attached."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitList.map((item, index) => (
              <BenefitCard
                key={index}
                audience={item.audience}
                subtitle={item.subtitle}
                benefits={item.benefits}
                bgClass="bg-light"
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Case Study */}
      <PageLayout id="empower-in-action">
        <SectionHeader
          title="Empower in Action"
          subtitle="Discover how our SME network enables real growth."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {caseStudyList.map((story, index) => (
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

      {/* Quote Box */}
      <div className="bg-gray-soft">
        <PageLayout id="founder-quote">
          <div className="text-center max-w-2xl mx-auto fade-in slide-in-up">
            <FaQuoteLeft className="text-electric text-2xl mb-4 mx-auto opacity-60 float" />
            <blockquote className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed">
              “A single deal in our network can 10X your business.”
            </blockquote>
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
