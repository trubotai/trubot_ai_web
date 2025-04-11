import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import CareerCard from "../ui/components/CareerCard";
import { CareersList } from "../ui/libs/constants/careers";

export const metadata = {
  title: "Careers – TruBot AI",
  description:
    "Join our growing team and help shape the future of AI-powered business automation.",
};

export default function CareersPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Join the Team"
        subtitle="We're building the future of business automation — and we’d love to work with you."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CareersList.map((role) => (
          <CareerCard
            key={role.id}
            title={role.title}
            location={role.location}
            type={role.type}
            href={role.href}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="mailto:careers@trubotai.com?subject=Open Role Inquiry"
          className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Don’t see your role? Reach out anyway
        </a>
      </div>
    </PageLayout>
  );
}
