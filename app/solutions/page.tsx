import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import { solutionsList } from "../ui/libs/constants/solutions";

export const metadata = {
  title: "Solutions – TruBot AI",
  description:
    "See how TruBot AI can streamline operations across industries like SaaS, eCom, and healthcare.",
};

export default function SolutionsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="AI Solutions by Industry"
        subtitle="TruBot AI adapts to your business — see how it fits into your workflows."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutionsList.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-navy mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Let’s explore how TruBot fits your business
        </a>
      </div>
    </PageLayout>
  );
}
