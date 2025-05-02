import { FaQuoteLeft } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "../ui/components/shared/HeroSection";
import FeatureCard from "../ui/components/shared/FeatureCard";
import CTASection from "../ui/components/shared/CTASection";
import {
  heroSection,
  featureList,
  snapshotList,
  ctaSection,
} from "@/app/ui/libs/constants/investors";

export const metadata = {
  title: "Investors – TruBot AI",
  description:
    "Discover TruBot AI’s vision for the future. Partner with us to drive AI-powered business transformation and unlock new growth opportunities.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Strategic Investment Highlights */}
      <div className="bg-gray-soft">
        <PageLayout id="investment-benefits">
          <SectionHeader
            title="Why Invest in TruBot AI?"
            subtitle="Unlock compounding growth across verticals with a product and acquisition-led strategy."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureList.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Investor Snapshot */}
      <PageLayout id="investor-snapshot">
        <SectionHeader
          title="Investor Snapshot"
          subtitle="Key financial insights that highlight the opportunity landscape for TruBot AI."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {snapshotList.map((text, index) => (
            <div
              key={index}
              className="bg-light rounded-xl shadow-md p-6 text-center fade-in slide-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-navy font-body text-sm">{text}</p>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* Quote */}
      <div className="bg-gray-soft">
        <PageLayout id="investor-quote">
          <div className="text-center max-w-2xl mx-auto fade-in slide-in-up">
            <FaQuoteLeft className="text-electric text-2xl mb-4 mx-auto opacity-60 pulse-slow" />
            <blockquote className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed fade-in slide-in-up animation-delay-200">
              “Your capital. Our innovation. Exponential returns.”
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
