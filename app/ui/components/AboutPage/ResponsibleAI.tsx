import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

type ResponsibilityPoint = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface ResponsibleAIProps {
  responsibilityList: ResponsibilityPoint[];
}

const ResponsibleAI = ({ responsibilityList }: ResponsibleAIProps) => {
  return (
    <PageLayout
      id="responsible-ai"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Soft background pattern */}
      <div
        className="absolute inset-0 bg-[url('/svg/pattern.svg')] opacity-5 bg-repeat"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          title="Responsible AI"
          subtitle="Building ethical, secure, and sustainable AI solutions for a better future."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {responsibilityList.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={index}
                className={`
                  group p-8 rounded-2xl border border-gray-200 bg-white
                  transition-all duration-300 transform hover:scale-105 hover:border-electric hover:shadow-electric
                  animate-fade-slide-up animation-delay-${(index + 1) * 100}
                `}
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-electric/10 group-hover:bg-electric/20 transition-all">
                  <Icon className="w-8 h-8 text-electric group-hover:animate-pulse" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default ResponsibleAI;
