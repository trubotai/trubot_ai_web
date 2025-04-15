import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

const Testimonials = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="What Our Customers Say"
        subtitle="We’re just getting started — but here’s what early adopters are saying."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm italic">
            “TruBot AI helped us reduce inbound calls by 40% — and gave our
            support team their evenings back.”
          </p>
          <p className="mt-2 text-sm font-semibold text-navy">
            — Samir, Founder @ SaaSBox
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm italic">
            “Setup took less than an hour, and our AI agent closed 3 deals in
            the first week. Unreal.”
          </p>
          <p className="mt-2 text-sm font-semibold text-navy">
            — Rina, Growth Lead @ SparkAgency
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Testimonials;
