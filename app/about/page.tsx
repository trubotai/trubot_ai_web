import { Lightbulb, AlertTriangle, Network } from "lucide-react";

import AboutHeroSection from "./components/AboutHeroSection";
import OurApproach from "./components/OurApproach";
import Commitments from "./components/Commitments";
import PageLayout from "../ui/components/shared/PageLayout";
import SectionHeader from "../ui/components/shared/SectionHeader";
import VerticalTimeline from "../ui/components/shared/VerticalTimeline";
import BenefitCard from "../ui/components/shared/BenefitCard";
import FeatureCard from "../ui/components/shared/FeatureCard";
import CTASection from "../ui/components/shared/CTASection";
import {
  missionList,
  approachList,
  valueList,
  ctaSection,
} from "../ui/libs/constants/about";

const steps = [
  {
    title: "The Beginning",
    description:
      "Our journey began in 2023 when AI researchers, software veterans, and business leaders came together to make AI more accessible.",
    icon: () => <Lightbulb className="float pulse text-electric" />,
  },
  {
    title: "The Problem We Solved",
    description:
      "SMEs struggled with fragmented, complex AI systems. We identified the need for unified, practical solutions with real-world value.",
    icon: () => <AlertTriangle className="float text-coral" />,
  },
  {
    title: "Our Solution",
    description:
      "We created an integrated AI ecosystem combining proprietary tools and partner solutions — built for accessibility and simplicity.",
    icon: () => <Network className="float text-teal" />,
  },
];

export const metadata = {
  title: "About – TruBot AI",
  description:
    "Discover how TruBot AI is making AI solutions accessible and transformative for businesses worldwide.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Story */}
      <div className="relative bg-gray-soft" aria-label="Our Story Section">
        <div className="absolute top-0 left-0 w-96 h-96 sm:w-64 sm:h-64 bg-electric opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 sm:w-64 sm:h-64 bg-coral opacity-10 rounded-full blur-3xl" />

        <PageLayout
          id="our-story"
          className="relative z-10"
          aria-label="The Story of TruBot AI"
        >
          <SectionHeader
            title="Our Story"
            subtitle="From an idea to an integrated AI platform — here’s how we got here."
            align="center"
          />
          <div className="max-w-4xl mx-auto">
            <VerticalTimeline
              title="The Journey"
              steps={steps}
              animationOffset={200}
            />
          </div>
        </PageLayout>
      </div>

      {/* Mission */}
      <PageLayout id="our-mission" aria-label="Mission Section">
        <SectionHeader
          title="Our Mission"
          subtitle="Guiding principles that shape how we build, innovate, and serve businesses of all sizes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {missionList.map((item, idx) => (
            <BenefitCard key={idx} {...item} />
          ))}
        </div>
      </PageLayout>

      {/* Approach */}
      <div className="bg-gray-soft" aria-label="Our Approach Section">
        <OurApproach approachList={approachList} />
      </div>

      {/* Values */}
      <PageLayout id="our-values" aria-label="Company Values Section">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide how we build, collaborate, and support our customers."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {valueList.map((value, index) => (
            <FeatureCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
            />
          ))}
        </div>
      </PageLayout>

      {/* Commitment */}
      <div className="bg-gray-soft" aria-label="Commitments Section">
        <Commitments />
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
