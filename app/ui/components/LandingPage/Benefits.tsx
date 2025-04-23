import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import { benefitList } from "../../libs/constants";

const Benefits = () => {
  return (
    <PageLayout className="animate-fade-in">
      <SectionHeader
        title="Why Teams Choose TruBot AI"
        subtitle="We help you save time, boost performance, and scale without limits."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {benefitList.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 animate-fade-slide-up animation-delay-${
              (index + 1) * 100
            }`}
          >
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:-translate-y-1">
              {benefit.icon}
            </div>

            <h4 className="text-lg font-semibold text-navy mb-2">
              {benefit.title}
            </h4>

            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Benefits;
