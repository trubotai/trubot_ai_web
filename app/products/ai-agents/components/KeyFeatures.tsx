import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { featureList } from "@/app/ui/libs/constants/productPage/ai-agents";

const KeyFeatures = () => {
  return (
    <div className="bg-gray-50">
      <PageLayout>
        <SectionHeader
          title="Key Features"
          subtitle="Discover what makes our AI agents revolutionary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all animate-fade-slide-up shadow ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } hover-pop-glow`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-electric/10 text-electric p-2 rounded-full">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.subtitle}</p>
                </div>
              </div>
              <hr className="my-3 border-gray-200" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default KeyFeatures;
