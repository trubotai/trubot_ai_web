import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

interface MissionPoint {
  title: string;
  description: string;
}

interface OurMissionProps {
  missionList: MissionPoint[];
}

const OurMission = ({ missionList }: OurMissionProps) => {
  return (
    <PageLayout id="our-mission">
      <SectionHeader
        title="Our Mission"
        subtitle="Empowering businesses with ethical, accessible, and practical AI solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {missionList.map((point, index) => (
          <div
            key={index}
            className={`
              p-6 rounded-2xl border border-gray-200 bg-white 
              transition-all duration-300 transform hover:scale-105 hover:shadow-electric
              animate-fade-slide-up animation-delay-${(index + 1) * 100}
            `}
          >
            <h3 className="text-xl font-semibold text-navy mb-3">
              {point.title}
            </h3>
            <p className="leading-relaxed text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default OurMission;
