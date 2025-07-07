import Image from "next/image";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import TierCard from "@/app/ui/components/shared/TierCard";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import Button from "@/app/ui/components/shared/Button";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import PartnershipAccordion from "@/app/ui/components/shared/PartnershipAccordion";
import {
  heroSection,
  benefitList,
  partnerList,
  programList,
  programTiersList,
  stepList,
  successFrameworkList,
  applicationProcessList,
  faqSection,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/partners";

export const metadata = {
  title: "Partner Program for SMEs – Expand Your AI Market Reach | TruBot AI",
  description:
    "Join our Partner Program and access new SME markets, co-marketing opportunities, technical support, and business development resources. Accelerate your growth in the AI ecosystem.",
  keywords: [
    "AI Partner Program for SMEs",
    "TruBot AI Partnership Opportunities",
    "SME AI Solutions Partnership",
    "AI Implementation Partner Program",
    "Technology Partner Program for AI",
    "AI Solution Partner Benefits",
    "SME AI Integration Support",
    "AI Co-Marketing Opportunities",
    "TruBot Partner Portal Access",
    "AI Business Development Resources",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Why Partner */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits">
          <SectionHeader
            title="Why Partner with TruBot AI?"
            subtitle="Here's what you gain when you join our partner ecosystem."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {benefitList.map((benefit, index) => (
              <BenefitCard
                key={index}
                audience={benefit.title}
                subtitle=""
                benefits={[{ icon: benefit.icon, text: benefit.description }]}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Partnership Types */}
      <PageLayout id="partnership-types">
        <SectionHeader
          title="Partnership Types"
          subtitle="Explore how your organization can collaborate with us. Click on each partnership type to learn more."
        />
        <div className="mt-12 flex flex-col lg:flex-row items-start">
          {/* Content (always visible) */}
          <div className="w-full lg:w-1/2">
            <PartnershipAccordion partnerships={partnerList} />
          </div>
          {/* Image (desktop only) */}
          <div className="hidden lg:flex w-1/2 justify-center items-center m-4 my-auto">
            <Image
              src="/images/partners/partnership-type.png"
              alt="Partnership Types"
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </PageLayout>

      {/* Programs */}
      <div className="bg-gray-soft">
        <PageLayout id="programs">
          <SectionHeader
            title="Partnership Programs"
            subtitle="Choose the partnership program that best fits your business model and growth objectives. Click on each program to learn more."
          />
          <div className="mt-12 flex flex-col lg:flex-row items-start">
            {/* Image (desktop only) */}
            <div className="hidden lg:flex w-1/2 justify-center items-center m-4 my-auto">
              <Image
                src="/images/partners/partnership-programs.png"
                alt="Partnership Programs"
                width={400}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            {/* Content (always visible) */}
            <div className="w-full lg:w-1/2">
              <PartnershipAccordion partnerships={programList} />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Program Tiers */}
      <PageLayout id="program-tiers">
        <SectionHeader
          title="Program Tiers"
          subtitle="Grow your partnership and unlock more value as you scale with us."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {programTiersList.map((tier, idx) => (
            <TierCard key={idx} {...tier} index={idx} />
          ))}
        </div>
      </PageLayout>

      {/* Partner Journey (How It Works) */}
      <div className="bg-gray-soft">
        <PageLayout id="partner-journey" className="relative z-10">
          <SectionHeader
            title="How It Works"
            subtitle="From application to success, here's how we guide you through the partnership process."
            align="center"
          />
          <div className="mt-12 flex flex-col lg:flex-row items-start">
            {/* Content (always visible) */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-4xl mx-auto">
                <VerticalTimeline
                  title=""
                  steps={stepList}
                  animationOffset={0}
                />
              </div>
            </div>
            {/* Image (desktop only) */}
            <div className="hidden lg:flex w-1/2 justify-center items-center m-4 my-auto">
              <Image
                src="/images/partners/how-it-works.png"
                alt="How It Works"
                width={400}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Partner Success Framework */}
      <PageLayout id="success-framework">
        <SectionHeader
          title="Partner Success Framework"
          subtitle="Everything you need to succeed as a TruBot AI partner."
        />
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {successFrameworkList.map((framework, index) => (
            <FeatureCard
              key={index}
              icon={framework.icon}
              title={framework.title}
              description={framework.description}
              index={index}
            />
          ))}
        </div>
      </PageLayout>

      {/* Application Process */}
      <div className="bg-gray-soft">
        <PageLayout id="application-process" className="relative z-10">
          <SectionHeader
            title="Application Process"
            subtitle="Simple steps to join our partner ecosystem and start growing together."
          />

          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[43%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            {applicationProcessList.map((step, idx) => (
              <HorizontalTimeline
                key={idx}
                stepNumber={idx + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={idx * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/partners/apply"
              label="Apply to Partner Program"
              variant="primary"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* FAQ */}
      <FAQSection {...faqSection} />

      {/* Related Products */}
      <div className="bg-gray-soft">
        <PageLayout id="related-products">
          <SectionHeader
            title="Learn More About TruBot AI"
            subtitle="Explore our company, products, and solutions to better understand our partnership opportunities."
          />

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {relatedProductList.map((product, index) => (
              <ProductCard key={index} {...product} />
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
