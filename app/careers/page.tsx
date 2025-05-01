import PageLayout from "../ui/components/shared/PageLayout";
import SolutionCard from "../ui/components/shared/SolutionCard";
import Button from "../ui/components/shared/Button";
import { roleList } from "../ui/libs/constants/careers";

export const metadata = {
  title: "Careers – TruBot AI",
  description:
    "Join our growing team and help shape the future of AI-powered business automation.",
};

const Page = () => {
  return (
    <PageLayout id="join-the-team">
      <div className="text-center mb-10 fade-in slide-in-up">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Join the Team
        </h1>

        <p className="text-navy/80 font-body max-w-2xl mx-auto text-base md:text-lg">
          We&apos;re building the future of business automation — and we’d love
          to work with you.
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roleList.map((role, index) => (
          <div
            key={index}
            className={`fade-in slide-in-up animation-delay-${
              (index + 1) * 100
            }`}
          >
            <SolutionCard {...role} />
          </div>
        ))}
      </div>

      {/* General CTA */}
      <div className="text-center mt-16 fade-in slide-in-up animation-delay-600">
        <Button
          href="mailto:careers@trubotai.com?subject=Open Role Inquiry"
          variant="primary"
          animate
          label="Don’t see your role? Reach out anyway"
        />
      </div>
    </PageLayout>
  );
};

export default Page;
