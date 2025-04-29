import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { useCaseList } from "@/app/ui/libs/constants/productPage/ai-agents";

const UseCases = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Use Cases"
        subtitle="Explore how AI agents deliver results across industries"
      />
      <div className="space-y-12">
        {useCaseList.map((item, index) => (
          <div
            key={index}
            className={`
                rounded-xl p-6 transition-all animate-fade-slide-up shadow-sm
                ${index % 2 === 0 ? "bg-white" : "bg-light"}
              `}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-electric/10 text-electric p-3 rounded-full shadow">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 italic">
                  {item.challenge}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              <strong className="text-navy">Solution:</strong> {item.solution}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.results.map((result, i) => (
                <span
                  key={i}
                  className="bg-electric/10 text-electric text-xs font-medium px-3 py-1 rounded-full"
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default UseCases;
