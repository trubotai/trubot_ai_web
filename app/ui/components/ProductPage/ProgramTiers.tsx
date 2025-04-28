import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import TierCard from "../TierCard";

interface Tier {
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  highlight?: boolean;
}

interface ProgramTiersProps {
  tiers: Tier[];
  title?: string;
  subtitle?: string;
}

const ProgramTiers = ({
  tiers,
  title = "Program Tiers",
  subtitle = "Grow your partnership with increasing benefits and recognition.",
}: ProgramTiersProps) => {
  return (
    <div className="bg-gray-50">
      <PageLayout>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <TierCard
              key={index}
              title={tier.title}
              description={tier.description}
              benefits={tier.benefits}
              requirements={tier.requirements}
              highlight={tier.highlight}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default ProgramTiers;
