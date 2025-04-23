import Link from "next/link";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import HighlightGrid from "@/app/ui/components/HighlightGrid";
import QuoteBox from "@/app/ui/components/QuoteBox";

import { smeEmpowermentHighlights } from "../ui/libs/constants/sme-empowerment";

export const metadata = {
  title: "SME Empowerment – TruBot AI",
  description:
    "Learn how TruBot AI empowers small and medium businesses (SMEs) with cutting-edge AI automation tools for growth and efficiency.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center animate-fade-slide-up">
        <SectionHeader
          title="Empowering Small Businesses with AI"
          subtitle="Transforming SME operations with intelligent, scalable automation."
        />

        <div className="prose prose-gray max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 leading-relaxed">
            At TruBot AI, we believe that small and medium businesses deserve
            enterprise-grade AI tools to thrive in today&apos;s competitive
            world. Our mission is to democratize access to automation,
            empowering entrepreneurs to focus on growth, innovation, and
            customer relationships.
          </p>
        </div>
      </PageLayout>

      {/* Challenges Section */}
      <PageLayout className="animate-fade-slide-up animation-delay-200">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">
          Challenges SMEs Face
        </h2>

        <div className="prose prose-gray max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 leading-relaxed">
            High operational costs, inconsistent customer support, and limited
            resources often hinder SME growth. Traditional automation solutions
            are expensive and complex. TruBot AI offers a smarter, simpler way
            forward — AI that adapts to your business needs.
          </p>
        </div>
      </PageLayout>

      {/* Highlights Section */}
      <PageLayout className="animate-fade-slide-up animation-delay-300">
        <HighlightGrid items={smeEmpowermentHighlights} />
      </PageLayout>

      {/* Quote Section */}
      <PageLayout className="animate-fade-slide-up animation-delay-400">
        <QuoteBox
          quote="Small businesses deserve big technology. TruBot AI makes enterprise-grade automation accessible to every entrepreneur."
          author="Gopalakrishnan K"
          role="Founder & CEO, TruBot AI"
        />
      </PageLayout>

      {/* Final CTA */}
      <div className="text-center mb-16 animate-fade-slide-up animation-delay-500">
        <Link
          href="mailto:careers@trubotai.com?subject=Request%20for%20SME%20Empowerment%20Program%20Details"
          className="inline-block bg-electric text-white px-8 py-4 rounded-lg font-semibold hover-scale-glow"
        >
          Empower My Business
        </Link>
      </div>
    </>
  );
};

export default Page;
