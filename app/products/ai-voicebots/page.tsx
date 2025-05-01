import Image from "next/image";
import { Bot } from "lucide-react";

import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import Button from "@/app/ui/components/shared/Button";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CallToActionSection from "@/app/ui/components/shared/CTASection";
import TechSpecs from "./components/TechSpecs";
import PricingSection from "./components/Pricing";
import {
  caseStudyList,
  faqSection,
  featureList,
  heroSection,
  relatedProductList,
  useCaseList,
  CTASection,
} from "@/app/ui/libs/constants/products/ai-voicebots";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features" animate>
          <SectionHeader
            title="Key Features"
            subtitle="Discover the powerful capabilities of our AI Voice Bots."
            align="center"
            animate
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Cases */}
      <PageLayout id="use-cases" animate>
        <SectionHeader
          title="Use Cases"
          subtitle="Explore how our AI Voice Bots can transform key areas of your business."
          align="center"
          animate
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {useCaseList.map((useCase, idx) => (
            <UseCaseCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              subtitle={useCase.subtitle}
              description={useCase.description}
              results={useCase.results}
              index={idx}
            />
          ))}
        </div>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing */}
      <PricingSection />

      {/* Demo */}
      <div className="bg-gray-soft">
        <PageLayout id="interactive-demo" animate>
          <SectionHeader
            title="Interactive Voice Bot Demo"
            subtitle="Experience our AI voice bot technology firsthand. Click below to interact with a demo voice bot that can answer questions about our platform, provide product information, and showcase key features."
            align="center"
            animate
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {/* Image with float + typing-effect subtext */}
            <div className="w-full md:w-1/2 text-center">
              <div className="float inline-block">
                <Image
                  src="/images/voice-bot-demo.png"
                  alt="AI Voice Bot Demo"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                />
              </div>
              <p className="mt-4 text-sm text-navy/80 font-body typing-effect max-w-xs mx-auto">
                “Hi there! I&apos;m your virtual assistant—ask me anything!”
              </p>
            </div>

            {/* Button with sway icon + pulse-slow */}
            <div className="w-full md:w-1/3 text-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                animate
                label="Launch Interactive Demo"
                iconLeft={Bot}
                iconAnimate
                className="pulse-slow"
              />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Case Study */}
      <PageLayout id="case-studies" animate>
        <SectionHeader
          title="Case Studies"
          subtitle="Discover how our AI Voice Bots have transformed businesses across various industries."
          align="center"
          animate
        />

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyList.map((story, index) => (
            <StoryCard
              key={index}
              title={story.client}
              challenge={story.challenge}
              solution={story.solution}
              results={story.results}
              linkLabel={story.linkLabel}
              linkHref={story.linkHref}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>

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
