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
  caseStudyList,
  faqSection,
  featureList,
  heroSection,
  useCaseList,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/productPage/ai-chatbots";

export const metadata = {
  title: "AI Chatbot Solutions | No-Code Builder for SMEs & Enterprises",
  description:
    "Build and deploy multilingual AI chatbots across WhatsApp, Messenger, and websites. TruBot AI's no-code chatbot builder enables omnichannel customer engagement and support automation.",
  keywords: [
    "AI Chatbot Solutions",
    "No-Code Chatbot Builder",
    "Multilingual Chatbots",
    "Omnichannel Customer Support",
    "AI-Powered Customer Engagement",
    "Chatbot for SMEs",
    "WhatsApp Business Chatbot",
    "Facebook Messenger Automation",
    "Lead Generation Chatbot",
    "Customer Support Automation",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout
          id="chatbot-features"
          ariaLabelledby="chatbot-features-heading"
        >
          <SectionHeader
            title="Key Features of Our AI Chatbot Platform"
            subtitle="Explore the powerful capabilities that set our multilingual, no-code AI chatbots apart."
            align="center"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Cases */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="AI Chatbot Use Cases Across Industries"
          subtitle="See how our AI chatbots transform customer support, sales, HR, and more."
          align="center"
        />

        <div className="grid gap-10 sm:grid-cols-2">
          {useCaseList.map((useCase, index) => (
            <UseCaseCard key={index} index={index} {...useCase} />
          ))}
        </div>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing Section - To be re-enabled */}
      {/*       <PricingSection />      */}

      {/* Demo Section - To be re-enabled */}
      {/*
      <div className="bg-gray-soft" ion" aria-labelledby="demo-heading">
         <PageLayout id="interactive-demo">
          <SectionHeader
            title="Interactive Chatbot Demo"
            subtitle="Experience our AI chatbot technology firsthand. Interact with our demo chatbot to see how it handles different types of inquiries, provides personalized responses, and creates engaging conversations."
            align="center"
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
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
      </div> */}

      {/* Case Studies */}
      <PageLayout id="case-studies" ariaLabelledby="case-studies-heading">
        <SectionHeader
          title="Case Studies of AI Chatbot Success"
          subtitle="See how leading businesses are achieving measurable results with our solutions."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudyList.map((story, index) => (
            <StoryCard key={index} delay={index * 200} {...story} />
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
          title="Related AI Tools for Customer Engagement"
          subtitle="Expand your capabilities with these AI-powered platforms."
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
