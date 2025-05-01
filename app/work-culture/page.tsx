import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import BulletList from "@/app/ui/components/BulletList";
import QuoteBox from "@/app/ui/components/QuoteBox";
import Button from "@/app/ui/components/Button";
import { whyJoinList, howWeWorkList } from "../ui/libs/constants/work-culture";

export const metadata = {
  title: "Work Culture – TruBot AI",
  description:
    "Explore a career at TruBot AI — 4-day work weeks, equity ownership, and a culture that prioritizes impact and innovation.",
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <PageLayout className="flex flex-col items-center justify-center animate-fade-slide-up">
        <SectionHeader
          title="Redefine Your Career at TruBot AI — 4-Day Work Weeks & Equity Freedom"
          subtitle="Build AI’s future while owning your own—reach financial freedom in 5 years, and leave a legacy of financial freedom for generations."
        />
        <p className="text-gray-700 max-w-2xl mt-4 leading-relaxed">
          At TruBot AI, work isn&lsquo;t about clocking hours — it&apos;s about
          creating impact. Our culture empowers every team member to lead,
          innovate, and grow without limits.
        </p>
      </PageLayout>

      {/* Why Join */}
      <div className="bg-gray-50">
        <PageLayout className="animate-fade-slide-up">
          <BulletList
            title="Why Join TruBot AI?"
            items={whyJoinList}
            align="center"
          />
        </PageLayout>
      </div>

      {/* How We Work */}
      <PageLayout className="animate-fade-slide-up">
        <BulletList title="How We Work" items={howWeWorkList} align="center" />
      </PageLayout>

      {/* Quote Box */}
      <div className="bg-gray-50">
        <PageLayout>
          <QuoteBox quote="We don’t just build AI—we build legacies." />
        </PageLayout>
      </div>

      {/* Final CTA */}
      <PageLayout className="text-center animate-fade-slide-up">
        <SectionHeader
          title="Join Our Team"
          subtitle="Questions? Write to us at careers@trubotai.com or explore current openings."
        />
        <div className="flex justify-center flex-wrap gap-4">
          <Button
            href="mailto:careers@trubotai.com?subject=TruBot%20AI%20Career%20Interest"
            variant="primary"
            className="hover-scale-glow"
          >
            Contact Careers Team
          </Button>
          <Button
            href="/careers"
            variant="outline"
            className="hover-scale-glow"
          >
            View Open Roles →
          </Button>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
