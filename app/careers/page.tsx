import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import CareerCard from "../ui/components/CareerCard";
import Button from "../ui/components/Button";
import { careerList } from "../ui/libs/constants/careers";

export const metadata = {
  title: "Careers – TruBot AI",
  description:
    "Join our growing team and help shape the future of AI-powered business automation.",
};

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Join the Team"
        subtitle="We're building the future of business automation — and we’d love to work with you."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerList.map((role, index) => (
          <div
            key={role.id}
            className={`animate-fade-slide-up animation-delay-${
              (index + 1) * 100
            }`}
          >
            <CareerCard
              title={role.title}
              location={role.location}
              type={role.type}
              href={role.href}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-16 animate-fade-slide-up animation-delay-600">
        <Button
          href="mailto:careers@trubotai.com?subject=Open Role Inquiry"
          variant="primary"
        >
          Don’t see your role? Reach out anyway
        </Button>
      </div>
    </PageLayout>
  );
};

export default Page;
