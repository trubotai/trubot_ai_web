import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import QuoteBox from "@/app/ui/components/QuoteBox";
import BulletList from "@/app/ui/components/BulletList";
import Button from "@/app/ui/components/Button";

import {
  investReasonList,
  snapshotList,
} from "@/app/ui/libs/constants/investors";

export const metadata = {
  title: "Investors – TruBot AI",
  description:
    "Discover TruBot AI’s vision for the future. Partner with us to drive AI-powered business transformation and unlock new growth opportunities.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center animate-fade-slide-up">
        <SectionHeader
          title="100X Your Investment with TruBot AI’s Multi-Product Powerhouse"
          subtitle="Join the AI revolution—powered by a $1.3T market, 38% CAGR, and proven profitability."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
          TruBot AI is redefining how businesses engage, support, and grow using
          cutting-edge automation technologies. Our unified AI platform serves
          SMEs globally — and we’re just getting started.
        </p>
      </PageLayout>

      {/* Strategic Investment Highlights */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <BulletList
            iconPrefix="✅"
            title="Why Invest in TruBot AI?"
            align="center"
            items={investReasonList}
          />
        </PageLayout>
      </div>

      {/* Investor Snapshot */}
      <PageLayout className="animate-fade-slide-up">
        <BulletList
          title="📊 Investor Snapshot"
          align="center"
          items={snapshotList}
        />
      </PageLayout>

      {/* Quote Section */}
      <div className="bg-gray-50">
        <PageLayout>
          <QuoteBox quote="Your capital. Our innovation. Exponential returns." />
        </PageLayout>
      </div>

      {/* Final CTA */}
      <PageLayout className="text-center animate-fade-slide-up">
        <SectionHeader
          title="Schedule a Call"
          subtitle="Ready to partner? Reach us directly at investors@trubotai.com or
          schedule a discovery call today."
        />
        <div className="flex justify-center flex-wrap gap-4">
          <Button
            href="mailto:investors@trubotai.com?subject=Request%20Investor%20Deck"
            variant="primary"
            className="hover-scale-glow"
            ariaLabel="Request the investor deck via email"
          >
            Request Investor Deck
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
    </>
  );
};

export default Page;
