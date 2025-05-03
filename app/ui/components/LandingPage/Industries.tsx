import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import { industryList } from "../../libs/constants";

const Industries = () => {
  return (
    <div className="bg-gray-50">
      <PageLayout className="animate-fade-in">
        <SectionHeader
          title="Industries We Help"
          subtitle="Whether you sell products, manage clients, or provide services — we’ve got you covered."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {industryList.map((industry, index) => (
            <div
              key={industry.label}
              className={`bg-white border border-gray-200 rounded-xl p-6 hover-pop-glow animate-fade-slide-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <p className="text-3xl">{industry.icon}</p>
              <p className="mt-2 text-sm font-medium text-navy">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default Industries;
