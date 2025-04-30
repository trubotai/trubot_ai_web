import { FaExchangeAlt } from "react-icons/fa";

import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import SolutionCard from "@/app/ui/components/shared/SolutionCard";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CallToActionSection from "@/app/ui/components/shared/CTASection";
import SolutionCategoriesTabs from "./components/SolutionCategories";
import TestimonialCarousel from "./components/TestimonialCarousel";
import {
  heroSection,
  featureList,
  buyStepList,
  providerStepList,
  solutionList,
  benefitList,
  faqSection,
  relatedProductList,
  CTASection,
} from "@/app/ui/libs/constants/products/ai-marketplace";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        primaryCTA={heroSection.primaryCTA}
        secondaryCTA={heroSection.secondaryCTA}
        icon={heroSection.icon}
      />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout>
          <SectionHeader
            title="Key Features"
            subtitle="Explore what makes our AI Marketplace the preferred platform for enterprises"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Solutions Category */}
      <SolutionCategoriesTabs />

      {/* How It Works */}
      <PageLayout id="how-it-works" animate>
        <SectionHeader
          title="How It Works"
          subtitle="A seamless experience for buyers and solution providers alike."
          align="center"
          animate
        />

        <div className="mt-16 flex flex-col md:flex-row items-start gap-12">
          <VerticalTimeline title="For Buyers" steps={buyStepList} />

          {/* Icon Separator */}
          <div className="hidden md:flex flex-col justify-center items-center self-stretch px-4">
            <div className="flex flex-col justify-center items-center h-full text-electric">
              <div className="w-px flex-1 bg-electric mb-2" />
              <FaExchangeAlt className="w-6 h-6 float my-2" />
              <div className="w-px flex-1 bg-electric mt-2" />
            </div>
          </div>

          <VerticalTimeline
            title="For Solution Providers"
            steps={providerStepList}
            animationOffset={400}
          />
        </div>
      </PageLayout>

      {/* Featured Solutions */}
      <div className="bg-gray-soft">
        <PageLayout id="featured-solutions" animate>
          <SectionHeader
            title="Featured Solutions"
            subtitle="Explore top AI tools curated for your business needs."
            align="center"
            animate
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutionList.map((solution, index) => (
              <SolutionCard
                key={index}
                name={solution.name}
                provider={solution.provider}
                description={solution.description}
                icon={solution.icon}
                tags={solution.tags}
                link={solution.link}
                bgColor={solution.bgColor}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href="/solutions"
              label="View All Solutions"
              variant="primary"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* Benefits Section */}
      <PageLayout id="benefits-section" animate>
        <SectionHeader
          title="Benefits"
          subtitle="Discover the advantages tailored for each audience"
          align="center"
          animate
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((group, index) => (
            <BenefitCard
              key={index}
              audience={group.audience}
              subtitle={group.subtitle}
              benefits={group.benefits}
              bgClass={group.bgClass}
            />
          ))}
        </div>
      </PageLayout>

      {/* Testimonials */}
      <div className="bg-gray-soft">
        <TestimonialCarousel />
      </div>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Products */}
      <PageLayout id="related-products" animate>
        <SectionHeader
          title="Related Products"
          subtitle="Explore additional offerings to enhance your AI journey"
          align="center"
          animate
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {relatedProductList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 150}
            />
          ))}
        </div>
      </PageLayout>

      {/* Call To Action */}
      <CallToActionSection {...CTASection} />
    </>
  );
};

export default Page;
