import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import PartnerTypeCard from "../PartnerTypeCard";

interface PartnerType {
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  applyLabel: string;
  applyLink: string;
}

interface PartnerTypesProps {
  types: PartnerType[];
  title?: string;
  subtitle?: string;
}

const PartnerTypes = ({
  types,
  title = "Partner Types",
  subtitle = "Find the partner category that fits your expertise and goals.",
}: PartnerTypesProps) => {
  return (
    <PageLayout id="partner-types">
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {types.map((type, index) => (
          <PartnerTypeCard
            key={index}
            title={type.title}
            description={type.description}
            requirements={type.requirements}
            benefits={type.benefits}
            applyLabel={type.applyLabel}
            applyLink={type.applyLink}
            delay={index * 100}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default PartnerTypes;
