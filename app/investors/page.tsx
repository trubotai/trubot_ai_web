import Link from "next/link";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import QuoteBox from "@/app/ui/components/QuoteBox";
import HighlightGrid from "@/app/ui/components/HighlightGrid";
import { highLightsList } from "../ui/libs/constants/investors";

export const metadata = {
  title: "Investors – TruBot AI",
  description:
    "Discover TruBot AI’s vision for the future. Partner with us to drive AI-powered business transformation and unlock new growth opportunities.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center text-center animate-fade-slide-up">
        <SectionHeader
          title="Partner with TruBot AI"
          subtitle="Building the Future of AI-Powered Business Automation."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed">
          TruBot AI is redefining how businesses engage, support, and grow using
          cutting-edge automation technologies. Our unified AI platform serves
          SMEs globally — and we’re just getting started.
        </p>
      </PageLayout>

      {/* Highlights */}
      <PageLayout>
        <HighlightGrid items={highLightsList} />
      </PageLayout>

      {/* Quote Section */}
      <PageLayout>
        <QuoteBox
          quote="We’re building the next generation of intelligent business automation — empowering companies globally with AI that works, adapts, and scales."
          author="Gopalakrishnan K"
          role="Founder & CEO, TruBot AI"
        />
      </PageLayout>

      {/* Vision Statement */}
      <PageLayout className="text-center animate-fade-slide-up">
        <h2 className="text-3xl font-bold text-navy mb-6">
          Why Invest in TruBot AI?
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We are not just solving today’s customer service challenges — we are
          shaping the future of how businesses interact with customers. With
          scalable AI solutions for chat, voice, and workflow automation, we’re
          positioned to unlock massive value across industries.
        </p>
      </PageLayout>

      {/* Final CTA */}
      <div className="text-center mb-24 animate-fade-slide-up">
        <Link
          href="mailto:careers@trubotai.com?subject=Request%20for%20Investor%20Deck"
          className="inline-block bg-electric text-white px-8 py-4 rounded-lg font-semibold"
        >
          Request Investor Deck
        </Link>
      </div>
    </>
  );
};

export default Page;
