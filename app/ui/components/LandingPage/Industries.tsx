import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

const Industries = () => {
  return (
    <div className="bg-gray-50">
      <PageLayout>
        <SectionHeader
          title="Industries We Help"
          subtitle="Whether you sell products, manage clients, or provide services — we’ve got you covered."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="text-xl">💻</p>
            <p className="mt-2 text-sm font-medium text-navy">Tech & SaaS</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="text-xl">🎨</p>
            <p className="mt-2 text-sm font-medium text-navy">
              Digital Agencies
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="text-xl">🛍️</p>
            <p className="mt-2 text-sm font-medium text-navy">eCommerce</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="text-xl">🏥</p>
            <p className="mt-2 text-sm font-medium text-navy">Healthcare</p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Industries;
