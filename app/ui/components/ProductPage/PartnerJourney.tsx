import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import JourneyStep from "../JourneyStep";

interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

interface PartnerJourneyProps {
  steps: Step[];
}

const PartnerJourney = ({ steps }: PartnerJourneyProps) => {
  return (
    <div className="bg-gray-50">
      <PageLayout className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Partner Journey"
          subtitle="A simple and rewarding path to partnership."
        />

        {/* Timeline Line (only desktop) */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200"></div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <JourneyStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default PartnerJourney;
