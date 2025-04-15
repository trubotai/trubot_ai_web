import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

const Benefits = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Why Teams Choose TruBot AI"
        subtitle="We help you save time, boost performance, and scale without limits."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl mb-2">💸</div>
          <h4 className="font-semibold text-navy mb-1">Reduce Support Costs</h4>
          <p className="text-sm text-gray-600">
            Automate up to 80% of common queries with no-code chat and voice
            flows.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-2">⚙️</div>
          <h4 className="font-semibold text-navy mb-1">
            Automate Repetitive Tasks
          </h4>
          <p className="text-sm text-gray-600">
            Free your team from FAQ hell, follow-ups, and manual data entry.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-2">📈</div>
          <h4 className="font-semibold text-navy mb-1">Get Real ROI on AI</h4>
          <p className="text-sm text-gray-600">
            Launch in days, not weeks — with measurable results from Day 1.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Benefits;
