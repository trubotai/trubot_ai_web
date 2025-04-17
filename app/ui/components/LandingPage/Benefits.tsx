import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";

const benefitsList = [
  {
    icon: "💸",
    title: "Reduce Support Costs",
    description:
      "Automate up to 80% of common queries with no-code chat and voice flows.",
  },
  {
    icon: "⚙️",
    title: "Automate Repetitive Tasks",
    description:
      "Free your team from FAQ hell, follow-ups, and manual data entry.",
  },
  {
    icon: "📈",
    title: "Get Real ROI on AI",
    description:
      "Launch in days, not weeks — with measurable results from Day 1.",
  },
];

const Benefits = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Why Teams Choose TruBot AI"
        subtitle="We help you save time, boost performance, and scale without limits."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {benefitsList.map((benefit) => (
          <div
            key={benefit.title}
            className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-300"
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
