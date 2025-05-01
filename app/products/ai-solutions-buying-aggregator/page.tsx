import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import FeaturesGrid from "./components/FeaturesGrid";
import StepTimeline from "./components/StepTimeline";
import SolutionCategoriesTabs from "./components/SolutionCategoriesTabs";
import BenefitsSection from "./components/BenefitsSection";
import SuccessStoriesCarousel from "./components/SuccessStoriesCarousel";
import ExpertServicesGrid from "./components/ExpertServicesGrid";
import FAQSection from "./components/FAQSection";
import RelatedServicesSection from "./components/RelatedServicesSection";

import FinalCTASection from "@/app/ui/components/FinalCTASection";

const Page = () => {
  return (
    <>
      <PageLayout>
        <SectionHeader
          title="Strategic AI Sourcing for Small and Medium Enterprises"
          subtitle="Find, compare, and implement the perfect AI solutions for your business needs with our intelligent buying aggregator platform designed specifically for SMEs."
        />

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" className="animation-delay-100">
            Start Your AI Journey
          </Button>
          <Button
            className="hover-scale-glow animation-delay-200"
            href="/contact"
            variant="outline"
          >
            Book a Consultation
          </Button>
        </div>
      </PageLayout>
      <FeaturesGrid />
      <StepTimeline />
      <SolutionCategoriesTabs />
      <BenefitsSection />
      <SuccessStoriesCarousel />
      <ExpertServicesGrid />
      <FAQSection />
      <RelatedServicesSection />
      <FinalCTASection
        title="Begin Your AI Transformation Journey"
        subtitle="Join thousands of SMEs that have successfully implemented AI solutions to improve efficiency, enhance customer experiences, and drive growth with our strategic sourcing platform."
        ctaLabel="Start Free Assessment"
        ctaLink="/contact"
        align="center"
      />
    </>
  );
};

export default Page;
