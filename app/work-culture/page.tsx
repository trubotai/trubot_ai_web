import Link from "next/link";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import { coreValues } from "../ui/libs/constants/work-culture";
import HighlightGrid from "../ui/components/HighlightGrid";

export const metadata = {
  title: "Work Culture – TruBot AI",
  description:
    "Explore our values-driven, collaborative, and flexible work culture at TruBot AI — where innovation meets impact.",
};

const Page = () => {
  return (
    <>
      {/* Intro Section */}
      <PageLayout className="text-center py-24 animate-fade-slide-up">
        <SectionHeader
          title="Work at TruBot AI"
          subtitle="We believe culture is what fuels product innovation. At TruBot AI,
          you’ll grow with a team that values trust, purpose, and shared wins."
        />
      </PageLayout>

      {/* Values Section */}
      <PageLayout className="text-center animate-fade-slide-up">
        <SectionHeader
          title="Our Core Values"
          subtitle="These are more than words — they’re our everyday rituals. The mindset
          behind everything we build."
        />
      </PageLayout>

      <PageLayout>
        <HighlightGrid items={coreValues} />
      </PageLayout>

      {/* Final CTA */}
      <div className="text-center mb-16 animate-fade-slide-up animation-delay-500">
        <Link
          href="/careers"
          className="inline-block bg-electric text-white px-8 py-4 rounded-lg font-semibold hover-scale-glow"
        >
          Explore Careers
        </Link>
      </div>
    </>
  );
};

export default Page;
