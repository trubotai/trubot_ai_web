import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

type ApproachPoint = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface OurApproachProps {
  approachList: ApproachPoint[];
}

const OurApproach = ({ approachList }: OurApproachProps) => {
  return (
    <PageLayout id="our-approach">
      <SectionHeader
        title="Our Approach"
        subtitle="Blending human empathy, technical excellence, and real-world impact."
      />

      <div className="space-y-20 max-w-6xl mx-auto">
        {approachList.map((point, index) => {
          const Icon = point.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`
                flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} 
                md:items-center md:gap-8
                animate-fade-slide-up animation-delay-${(index + 1) * 100}
                group
              `}
            >
              {/* Circle Badge */}
              <div className="relative flex-shrink-0 mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-electric text-white font-bold text-2xl flex items-center justify-center shadow-lg relative z-10">
                  {index + 1}
                </div>
                {/* Soft Background Glow */}
                <div className="absolute inset-0 rounded-full bg-electric/10 backdrop-blur-md blur-md scale-125" />
              </div>

              {/* Text Content */}
              <div className="max-w-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-8 h-8 text-electric" />
                  <h3 className="text-2xl font-semibold text-navy">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default OurApproach;
