import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import { caseStudyList } from "@/app/ui/libs/constants/productPage/ai-agents";

const CaseStudies = () => {
  return (
    <div className="bg-light py-20">
      <PageLayout>
        <SectionHeader
          title="Case Studies"
          subtitle="See how leading companies are transforming with AI agents"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyList.map((study, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg border border-gray-200 hover-scale-glow animate-fade-slide-up bg-white`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-electric/10 rounded-full text-electric shadow-sm">
                  <study.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {study.title}
                </h3>
                <span className="ml-auto bg-electric text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {study.badge}
                </span>
              </div>

              <div className="mb-3 text-sm text-gray-600 leading-relaxed">
                <strong className="text-navy">Challenge:</strong>{" "}
                {study.challenge}
              </div>
              <div className="mb-4 text-sm text-gray-600 leading-relaxed">
                <strong className="text-navy">Solution:</strong>{" "}
                {study.solution}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {study.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="bg-electric/10 text-electric text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {result}
                  </div>
                ))}
              </div>

              <div className="text-right">
                <Button href={study.link} variant="ghost" animate>
                  Read Full Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default CaseStudies;
