import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import QuoteBox from "@/app/ui/components/QuoteBox";
import BulletList from "@/app/ui/components/BulletList";
import Button from "@/app/ui/components/Button";
import {
  targetList,
  dealStructureList,
  successStoryList,
} from "../ui/libs/constants/mna";

export const metadata = {
  title: "Mergers & Acquisitions – TruBot AI",
  description:
    "Sell your B2B SaaS or Hosting company for 100X returns. Explore our acquisition strategy and deal structures.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center animate-fade-slide-up">
        <SectionHeader
          title="Sell Your B2B SaaS or Hosting Company for 100X Returns"
          subtitle="We acquire companies with $10M–$100M revenue. Stay onboard with equity, or exit fully."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed text-center">
          At TruBot AI, we don’t just acquire companies — we scale them into
          category leaders using AI innovation, cross-sell strategies, and deep
          technical integration.
        </p>
      </PageLayout>

      {/* Target Criteria */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <BulletList
            title="Our Ideal Acquisition Targets"
            items={targetList}
            iconPrefix="🔹"
            align="center"
          />
        </PageLayout>
      </div>

      {/* Deal Structures */}
      <PageLayout className="animate-fade-slide-up">
        <BulletList
          title="💼 Deal Structures We Offer"
          items={dealStructureList}
          align="center"
        />
      </PageLayout>

      {/* Success Stories */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <BulletList
            title="🛠️ Integration Success Stories"
            items={successStoryList}
            iconPrefix="✅"
            align="center"
          />
        </PageLayout>
      </div>

      {/* Quote Box */}
      <PageLayout>
        <QuoteBox quote="Tech founders deserve more than exits—they deserve legacy growth." />
      </PageLayout>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <PageLayout className="text-center animate-fade-slide-up">
          <SectionHeader
            title="Submit Your Company"
            subtitle="Reach us at acquisitions@trubotai.com or share your details via the form below."
          />

          <div className="flex justify-center flex-wrap gap-4">
            <Button
              href="mailto:acquisitions@trubotai.com?subject=M&A%20Interest"
              variant="primary"
              className="hover-scale-glow"
            >
              Contact Acquisitions
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="hover-scale-glow"
            >
              Contact →
            </Button>
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default Page;
