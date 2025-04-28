import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

type ValuePoint = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface OurValuesProps {
  valueList: ValuePoint[];
}

const OurValues = ({ valueList }: OurValuesProps) => {
  return (
    <PageLayout
      id="our-values"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <SectionHeader
        title="Our Values"
        subtitle="The principles that guide our technology, our culture, and our impact."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {valueList.map((value, index) => {
          const Icon = value.icon;

          return (
            <div
              key={index}
              className={`
                group p-8 rounded-2xl border border-gray-200 bg-white transition-all 
                duration-300 transform hover:scale-105 hover:border-electric hover:shadow-electric 
                animate-fade-slide-up animation-delay-${(index + 1) * 100}
              `}
            >
              {/* Icon Badge */}
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-electric/10 group-hover:bg-electric/20 transition-all">
                <Icon className="w-8 h-8 text-electric group-hover:animate-pulse" />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-navy mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default OurValues;
