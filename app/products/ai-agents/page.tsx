import TechSpecs from "./components/TechSpecs";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  featureList,
  useCaseList,
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/productPage/ai-agents";

export const metadata = {
  title: "AI Agents for Businesses | Intelligent Process Automation",
  description:
    "TruBot AI Agents automate workflows, enhance decision-making, and boost efficiency using conversational and cognitive intelligence. Explore real-world use cases and technical specs.",
  keywords: [
    "AI Agents for Businesses",
    "Intelligent Process Automation",
    "AI Workflow Automation",
    "Autonomous AI Agents",
    "Cognitive AI Solutions",
    "Enterprise AI Agents",
    "AI Task Automation",
    "Customer Support Agents",
    "AI Agents for SMEs",
    "AI Agent Platform",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features">
          <SectionHeader
            title="Key Features of Our AI Agent Platform"
            subtitle="Discover what makes our AI agents revolutionary for modern enterprises"
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

      {/* Use Cases */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="Real-World Use Cases for AI Agents"
          subtitle="Explore how organizations automate decisions and tasks with our AI agents"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {useCaseList.map((useCase, idx) => (
            <UseCaseCard
              key={idx}
              index={idx}
              title={useCase.title}
              subtitle={useCase.challenge}
              description={useCase.solution}
              results={useCase.results}
              icon={useCase.icon}
            />
          ))}
        </div>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing Section (to enable later) */}
      {/* <Pricing /> */}

      {/* Case Studies */}
      <PageLayout id="case-studies">
        <SectionHeader
          title="Customer Success Stories with AI Agents"
          subtitle="See how industry leaders drive impact with our intelligent automation solutions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {caseStudyList.map((story, idx) => (
            <StoryCard
              key={idx}
              delay={idx * 150}
              title={story.title}
              challenge={story.challenge}
              solution={story.solution}
              results={story.results}
              linkHref={story.link}
              linkLabel={story.linkLabel}
            />
          ))}
        </div>
      </PageLayout>

      {/* FAQ Section */}
      <div className="bg-gray-soft" role="region" aria-labelledby="faq-heading">
        <FAQSection {...faqSection} id="faq-heading" />
      </div>

      {/* Related Products */}
      <PageLayout id="related-products">
        <SectionHeader
          title="Explore Related AI Products"
          subtitle="Expand your AI stack with other intelligent solutions from TruBot"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {relatedProductList.map((product, idx) => (
            <ProductCard key={idx} {...product} animationDelay={idx * 100} />
          ))}
        </div>
      </PageLayout>

      {/* Final CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
