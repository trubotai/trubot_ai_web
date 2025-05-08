import PageLayout from "../../ui/components/shared/PageLayout";
import SectionHeader from "../../ui/components/shared/SectionHeader";

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
      {/* Optional background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric opacity-10 rounded-full blur-3xl z-0" />

      <SectionHeader
        title="Our Approach"
        subtitle="Blending human empathy, technical excellence, and real-world impact."
        align="center"
      />

      <div className="space-y-20 max-w-6xl mx-auto relative z-10">
        {approachList.map((point, index) => {
          const Icon = point.icon;
          const isEven = index % 2 === 0;
          const animationDelay = { animationDelay: `${(index + 1) * 100}ms` };

          return (
            <div
              key={index}
              className={`
                flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} 
                md:items-center md:gap-8 fade-in slide-in-up group transition-all duration-500 hover:scale-[1.02]
              `}
              style={animationDelay}
            >
              {/* Circle Badge */}
              <div className="relative flex-shrink-0 mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-electric text-white font-bold text-2xl flex items-center justify-center shadow-lg relative z-10">
                  {index + 1}
                </div>
                <div className="absolute inset-0 rounded-full bg-electric/10 backdrop-blur-md blur-md scale-125" />
              </div>

              {/* Text Content */}
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-navy">
                    {point.title}
                  </h3>
                </div>
                <p className="text-navy/80 font-body text-[17px] leading-[1.75rem]">
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
