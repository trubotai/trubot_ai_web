import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import QuoteBox from "@/app/ui/components/QuoteBox";
import BulletList from "@/app/ui/components/BulletList";
import Button from "@/app/ui/components/Button";
import { stepList, whyJoinList } from "../ui/libs/constants/sme-empowerment";

export const metadata = {
  title: "SME Empower Program – TruBot AI",
  description:
    "Join the SME Empower Partner Program to earn, trade, and grow 10X faster with TruBot AI’s powerful network.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center animate-fade-slide-up">
        <SectionHeader
          title="SME Empower Partner Program: Earn. Trade. Thrive."
          subtitle="Pay just 10% on successful sales—no hidden fees, no lock-ins."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed text-center">
          We’re building a mutually profitable SME ecosystem. Become a partner
          and access trade-ready businesses through a powerful AI-driven
          platform.
        </p>
      </PageLayout>

      {/* How It Works */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <BulletList title="How It Works" items={stepList} align="center" />
        </PageLayout>
      </div>

      {/* Why Join */}
      <PageLayout className="animate-fade-slide-up">
        <BulletList
          title="Why Join TruBot AI’s SME Network?"
          items={whyJoinList}
          align="center"
        />
      </PageLayout>

      {/* Case Study */}
      <div className="bg-gray-50">
        <PageLayout className="text-center animate-fade-slide-up">
          <h3 className="text-xl font-bold text-navy mb-3">🏆 Case Study</h3>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            DigitalEdge scaled to $7.2M in revenue by partnering with 45+
            Empower SMEs.
          </p>
        </PageLayout>
      </div>

      {/* Quote Box */}
      <PageLayout>
        <QuoteBox quote="A single deal in our network can 10X your business." />
      </PageLayout>

      {/* Final CTA */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <SectionHeader
            title="Enroll Now"
            subtitle="Have questions? Reach us at empowersme@trubotai.com or apply directly below."
          />

          <div className="flex justify-center flex-wrap gap-4">
            <Button
              href="mailto:empowersme@trubotai.com?subject=SME%20Empower%20Program%20Signup"
              variant="primary"
              className="hover-scale-glow"
            >
              Contact Us
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
