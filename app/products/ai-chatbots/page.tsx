import Image from "next/image";
import { Bot } from "lucide-react";

import TechSpecs from "./components/TechSpecs";
import PricingSection from "./components/Pricing";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import Button from "@/app/ui/components/shared/Button";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  caseStudyList,
  faqSection,
  featureList,
  heroSection,
  useCaseList,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/products/ai-chatbots";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="chatbot-features">
          <SectionHeader
            title="Key Features"
            subtitle="Explore the powerful capabilities that set our AI chatbots apart."
            align="center"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Case */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="Use Cases"
          subtitle="See how our AI chatbots transform different industries and functions."
          align="center"
        />

        <div className="grid gap-10 sm:grid-cols-2">
          {useCaseList.map((useCase, index) => (
            <UseCaseCard key={index} index={index} {...useCase} />
          ))}
        </div>
      </PageLayout>

      {/* Tech Specs */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing */}
      <PricingSection />

      {/* Demo */}
      <div className="bg-gray-soft">
        <PageLayout id="interactive-demo">
          <SectionHeader
            title="Interactive Chatbot Demo"
            subtitle="Experience our AI chatbot technology firsthand. Interact with our demo chatbot to see how it handles different types of inquiries, provides personalized responses, and creates engaging conversations."
            align="center"
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
      <PageLayout id="case-studies">
        <SectionHeader
          title="Case Studies"
          subtitle="See how leading businesses are achieving success with our AI chatbots."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudyList.map((story, index) => (
            <StoryCard key={index} delay={index * 200} {...story} />
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Products */}
      <PageLayout id="related-products">
        <SectionHeader
          title="Related Products"
          subtitle="Expand your capabilities with these AI-powered tools."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {relatedProductList.map((product, index) => (
            <ProductCard
              key={index}
              animationDelay={index * 150}
              {...product}
            />
          ))}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
