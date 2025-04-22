import Link from "next/link";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import TimelineStep from "@/app/ui/components/TimelineStep";
import QuoteBox from "@/app/ui/components/QuoteBox";

export const metadata = {
  title: "Mergers & Acquisitions – TruBot AI",
  description:
    "Discover TruBot AI’s strategy for strategic mergers, acquisitions, and partnerships that drive intelligent business automation forward.",
};

const Page = () => {
  return (
    <>
      <PageLayout className="flex flex-col items-center justify-center text-center animate-fade-slide-up">
        <SectionHeader
          title="TruBot AI M&A Strategy"
          subtitle="Accelerating Growth Through Strategic Acquisitions and Partnerships."
        />

        <div className="prose prose-gray max-w-3xl mx-auto text-center mb-16">
          <p>
            At TruBot AI, mergers and acquisitions are not just transactions —
            they&apos;re part of our mission to build the future of AI-driven
            business solutions. We seek strategic partnerships that amplify
            innovation, extend market reach, and deliver greater value to
            customers worldwide.
          </p>
        </div>
      </PageLayout>

      <PageLayout className="space-y-12">
        <SectionHeader
          title="Our M&A Journey"
          subtitle="How we identify, acquire, and integrate strategic opportunities."
        />

        <div className="space-y-12">
          <TimelineStep
            step="Step 1: Vision Alignment"
            description="We target companies that share our mission of AI-powered customer engagement and operational efficiency."
            delay={0.1}
          />

          <TimelineStep
            step="Step 2: Opportunity Assessment"
            description="Our team conducts rigorous evaluations of the market, technology, and operational synergies to ensure strategic fit."
            delay={0.2}
          />

          <TimelineStep
            step="Step 3: Due Diligence"
            description="We engage in thorough financial, legal, and operational reviews to validate the opportunity and minimize risk."
            delay={0.3}
          />

          <TimelineStep
            step="Step 4: Integration Planning"
            description="Integration is not an afterthought — we build detailed roadmaps to ensure smooth cultural and technological integration."
            delay={0.4}
          />

          <TimelineStep
            step="Step 5: Scaling Together"
            description="Post-integration, we focus on accelerated growth, shared innovation, and maximizing value creation for all stakeholders."
            delay={0.5}
          />
        </div>
      </PageLayout>

      <PageLayout>
        <QuoteBox
          quote="We view every acquisition as an opportunity to create more intelligent, more scalable, and more human-centric business solutions."
          author="Gopalakrishnan K"
          role="Founder & CEO, TruBot AI"
        />
      </PageLayout>

      {/* Final CTA */}
      <div className="text-center mb-16">
        <Link
          href="mailto:careers@trubotai.com?subject=Explore%20M&A%20Opportunities"
          className="inline-block bg-electric text-white px-8 py-4 rounded-lg font-semibold hover-scale-glow animate-fade-slide-up"
        >
          Discuss M&A Opportunities
        </Link>
      </div>
    </>
  );
};

export default Page;
