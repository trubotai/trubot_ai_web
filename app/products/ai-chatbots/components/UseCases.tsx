import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { CheckCircle } from "lucide-react";
import { useCaseList } from "@/app/ui/libs/constants/productPage/ai-chatbots";

const UseCasesSection = () => {
  return (
    <div className="bg-gray-50">
      <PageLayout>
        <SectionHeader
          title="Use Cases"
          subtitle="Versatile AI chatbots for every business scenario"
        />

        <div className="space-y-12">
          {useCaseList.map((useCase, idx) => (
            <div
              key={useCase.title}
              className={`p-8 rounded-xl ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-100"
              } shadow-sm animate-fade-slide-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-navy mb-1">
                {useCase.title}
              </h3>
              <p className="text-electric font-medium mb-4">
                {useCase.subtitle}
              </p>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.results.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle size={16} className="text-electric mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default UseCasesSection;
