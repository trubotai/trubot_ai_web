import {
  FaGlobe,
  FaBullhorn,
  FaCogs,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import ProgramBenefits from "@/app/ui/components/ProductPage/ProgramBenefits";
import PartnerTypes from "@/app/ui/components/ProductPage/PartnerTypes";
import ProgramTiers from "@/app/ui/components/ProductPage/ProgramTiers";
import SuccessStories from "@/app/ui/components/ProductPage/SuccessStories";
import PartnerJourney from "@/app/ui/components/ProductPage/PartnerJourney";
import ResourcesSection from "@/app/ui/components/ProductPage/ResourcesSection";
import FAQSection from "@/app/ui/components/ProductPage/FAQSection";
import RelatedProducts from "@/app/ui/components/ProductPage/RelatedProducts";
import FinalCTASection from "@/app/ui/components/FinalCTASection";
import {
  faqList,
  partnerList,
  productList,
  programList,
  resourceList,
  stepList,
  storyList,
} from "@/app/ui/libs/constants/productPage/partner-program-sme";

const Page = () => {
  return (
    <>
      <PageLayout>
        <SectionHeader
          title="Partner Program: Accelerate Your Growth in the AI Ecosystem"
          subtitle="Join our thriving partner network to expand your market reach, access new customers, and collaborate on innovative AI solutions for small and medium enterprises."
        />

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" className="animation-delay-100">
            Apply to Partner Program
          </Button>
          <Button
            className="hover-scale-glow animation-delay-200"
            href="/contact"
            variant="outline"
          >
            Download Partner Guide
          </Button>
        </div>
      </PageLayout>

      <ProgramBenefits
        benefits={[
          {
            title: "Expanded Market Reach",
            description:
              "Gain immediate exposure to thousands of SMEs actively seeking AI solutions through our marketplace.",
            icon: <FaGlobe />,
          },
          {
            title: "Co-Marketing Opportunities",
            description:
              "Leverage our marketing channels, joint campaigns, success stories, and events.",
            icon: <FaBullhorn />,
          },
          {
            title: "Technical Integration Support",
            description:
              "Receive dedicated technical assistance to integrate your solutions seamlessly with our platform.",
            icon: <FaCogs />,
          },
          {
            title: "Business Development Resources",
            description:
              "Access sales enablement tools, lead generation programs, and business support.",
            icon: <FaChartLine />,
          },
          {
            title: "Product Development Insights",
            description:
              "Gain valuable customer feedback to guide your product roadmap.",
            icon: <FaLightbulb />,
          },
        ]}
      />

      <PartnerTypes types={partnerList} />

      <ProgramTiers tiers={programList} />

      <SuccessStories stories={storyList} />

      <PartnerJourney steps={stepList} />

      <ResourcesSection resources={resourceList} />

      <FAQSection faqs={faqList} />

      <RelatedProducts products={productList} />

      <FinalCTASection
        title="Join Our Partner Ecosystem and Accelerate Your Growth"
        subtitle="Become part of a thriving network of AI innovators serving SMEs. Apply today to expand your reach."
        ctaLabel="Apply to Partner Program"
        ctaLink="/contact"
      />
    </>
  );
};

export default Page;
