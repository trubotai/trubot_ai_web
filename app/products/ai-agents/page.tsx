import UseCases from "./components/UseCases";
import TechSpecs from "./components/TechSpecs";
import PricingSection from "./components/PricingSection";
import CaseStudies from "./components/CaseStudies";
import FAQSection from "./components/FAQSection";
import RelatedProducts from "./components/RelatedProducts";
import FinalCTASection from "@/app/ui/components/FinalCTASection";

import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import {
  featureList,
  heroSection,
} from "@/app/ui/libs/constants/products/ai-agents";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-50">
        <PageLayout>
          <SectionHeader
            title="Key Features"
            subtitle="Discover what makes our AI agents revolutionary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featureList.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      <UseCases />
      <TechSpecs />
      <PricingSection />
      <CaseStudies />
      <FAQSection />
      <RelatedProducts />
      <FinalCTASection
        title="Ready to Transform Your Business with Intelligent AI Agents?"
        subtitle="Join industry leaders who are automating complex processes, reducing costs, and delivering world-class customer experiences."
        ctaLabel="Start Your Free Trial"
        ctaLink="/start-trial"
      />
    </>
  );
};

export default Page;
