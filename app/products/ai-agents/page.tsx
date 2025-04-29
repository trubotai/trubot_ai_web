import HeroSection from "./components/HeroSection";
import KeyFeatures from "./components/KeyFeatures";
import UseCases from "./components/UseCases";
import TechSpecs from "./components/TechSpecs";
import PricingSection from "./components/PricingSection";
import CaseStudies from "./components/CaseStudies";
import FAQSection from "./components/FAQSection";
import RelatedProducts from "./components/RelatedProducts";
import FinalCTASection from "@/app/ui/components/FinalCTASection";

const Page = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures />
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
