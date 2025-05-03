"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TabCard from "@/app/ui/components/shared/TabCard";
import { solutionList } from "@/app/ui/libs/constants/productPage/ai-solutions-buying-aggregator";

const SolutionCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageLayout id="solution-categories">
      <SectionHeader
        title="Solution Categories"
        subtitle="Explore AI solutions tailored to the functional needs and realities of SMEs across every business domain."
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {solutionList.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 font-body
              ${
                activeTab === index
                  ? "bg-electric text-light shadow-md"
                  : "bg-white border border-gray-300 text-navy hover:bg-gray-100"
              }
            `}
          >
            <span className="text-lg">
              {category.icon && category.icon({})}
            </span>
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <TabCard
        title={solutionList[activeTab].title}
        description={solutionList[activeTab].description}
        solutions={solutionList[activeTab].solutions}
        linkLabel={solutionList[activeTab].linkLabel}
        linkHref={solutionList[activeTab].linkHref}
      />
    </PageLayout>
  );
};

export default SolutionCategoriesTabs;
