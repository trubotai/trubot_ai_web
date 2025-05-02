import TechSpecs from "./components/TechSpecs";
import Pricing from "./components/Pricing";
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
} from "@/app/ui/libs/constants/products/ai-agents";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features">
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

      {/* Use Cases */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="Real-World Use Cases"
          subtitle="Explore how organizations leverage our AI agents"
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

      {/* TechSpecs */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing */}
      <Pricing />

      {/* Case Studies */}
      <div className="bg-gray-soft">
        <PageLayout id="case-studies">
          <SectionHeader
            title="Customer Success Stories"
            subtitle="See how industry leaders drive impact with our AI agents"
            align="center"
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
      </div>

      {/* FAQ */}
      <FAQSection {...faqSection} />

      {/* Related Products */}
      <div className="bg-gray-soft">
        <PageLayout id="related-products">
          <SectionHeader
            title="Related Products"
            subtitle="Explore more intelligent solutions"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {relatedProductList.map((product, idx) => (
              <ProductCard key={idx} {...product} animationDelay={idx * 100} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
