import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { featureList } from "@/app/ui/libs/constants/productPage/ai-chatbots";

const KeyFeaturesSection = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Key Features"
        subtitle="Discover the powerful capabilities built into every AI chatbot we offer."
      />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={title}
            className="p-6 rounded-xl bg-white shadow-sm transition-all hover:shadow-xl hover:bg-gray-100 animate-fade-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center justify-center w-10 h-10 mb-4  text-electric rounded-full border border-electric/20">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default KeyFeaturesSection;
