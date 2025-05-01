import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import BenefitCard from "../BenefitCard";

interface BenefitItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProgramBenefitsProps {
  benefits: BenefitItem[];
  title?: string;
  subtitle?: string;
}

const ProgramBenefits = ({
  benefits,
  title = "Program Benefits",
  subtitle = "Accelerate your growth with exclusive partner advantages tailored for SMEs.",
}: ProgramBenefitsProps) => {
  return (
    <div className="bg-gray-50">
      <PageLayout id="program-benefits">
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default ProgramBenefits;
