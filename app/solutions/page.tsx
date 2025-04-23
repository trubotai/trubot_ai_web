import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import Button from "../ui/components/Button";
import { solutionList } from "../ui/libs/constants/solutions";

export const metadata = {
  title: "Solutions – TruBot AI",
  description:
    "See how TruBot AI streamlines operations across industries like SaaS, eCommerce, healthcare, and more.",
};

const Page = () => {
  return (
    <PageLayout className="animate-fade-in">
      {/* Header */}
      <SectionHeader
        title="AI Solutions by Industry"
        subtitle="TruBot AI adapts to your workflows — empowering you to automate smarter and scale faster."
      />

      {/* Industry Groups */}
      <div className="space-y-20">
        {solutionList.map((group) => (
          <section key={group.id}>
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">
              {group.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {group.items.map((item, itemIdx) => (
                <div
                  key={item.title}
                  className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition hover-scale-glow animate-fade-slide-up animation-delay-${
                    (itemIdx + 1) * 100
                  }`}
                >
                  <h4 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-24 animate-fade-slide-up animation-delay-400">
        <Button href="/contact">Let’s Explore Your Solutions</Button>
      </div>
    </PageLayout>
  );
};

export default Page;
