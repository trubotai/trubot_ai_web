import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import TierCard from "@/app/ui/components/shared/TierCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  benefitList,
  ctaSection,
  faqSection,
  heroSection,
  partnerList,
  programList,
  relatedProductList,
  resourceList,
  stepList,
  storyList,
} from "@/app/ui/libs/constants/partnerPage/partner-program";

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

      {/* Benefits */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits">
          <SectionHeader
            title="Program Benefits"
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

      {/* Partner Types */}
      <PageLayout id="partner-types">
        <SectionHeader
          title="Partner Types"
          subtitle="Explore how your organization can collaborate with us."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {partnerList.map((partner, index) => (
            <TierCard key={index} {...partner} index={index} />
          ))}
        </div>
      </PageLayout>

      {/* Program Tiers */}
      <div className="bg-gray-soft">
        <PageLayout id="program-tiers">
          <SectionHeader
            title="Program Tiers"
            subtitle="Grow your partnership and unlock more value as you scale."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {programList.map((tier, idx) => (
              <TierCard key={idx} {...tier} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Success Story */}
      <PageLayout id="success-stories">
        <SectionHeader
          title="Success Stories"
          subtitle="See how our partners are growing with us."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {storyList.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>
      </PageLayout>

      {/* Partner Journey */}
      <div className="bg-gray-soft">
        <PageLayout id="partner-journey" className="relative z-10">
          <SectionHeader
            title="Partner Journey"
            subtitle="From application to growth, here’s how we guide you."
            align="center"
          />

          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center">
            {stepList.map((step, idx) => (
              <HorizontalTimeline key={idx} {...step} delay={idx * 100} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Resources */}
      <PageLayout id="resources">
        <SectionHeader
          title="Resources"
          subtitle="Everything you need to succeed as a partner."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {resourceList.map((res, idx) => (
            <ProductCard key={idx} {...res} />
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Product */}
      <PageLayout id="related-products">
        <SectionHeader
          title="Related Products"
          subtitle="Explore complementary offerings to maximize your impact."
        />

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {relatedProductList.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
