"use client";

import { JSX, useState } from "react";
import { FaCogs, FaSmile, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";

interface SolutionCategory {
  title: string;
  description: string;
  solutions: string[];
  linkLabel: string;
  linkHref: string;
  icon: JSX.Element;
}

const categories: SolutionCategory[] = [
  {
    title: "Business Operations",
    description:
      "Streamline processes with AI automation and optimization tools across your operations.",
    solutions: [
      "Intelligent Document Processing",
      "Workflow Automation",
      "Resource Planning Optimization",
      "Meeting Transcription and Summarization",
    ],
    linkLabel: "Explore Operations Solutions",
    linkHref: "/solutions/operations",
    icon: <FaCogs />,
  },
  {
    title: "Customer Experience",
    description:
      "Enhance interactions and personalize experiences with AI-powered customer solutions.",
    solutions: [
      "Customer Service Automation",
      "Personalization Engines",
      "Voice and Chat Assistants",
      "Customer Journey Analytics",
    ],
    linkLabel: "Explore Customer Experience Solutions",
    linkHref: "/solutions/customer-experience",
    icon: <FaSmile />,
  },
  {
    title: "Sales and Marketing",
    description: "Grow revenue and optimize campaigns with AI tools for SMEs.",
    solutions: [
      "Lead Scoring and Qualification",
      "Content Generation and Optimization",
      "Market Intelligence",
      "Conversion Rate Optimization",
    ],
    linkLabel: "Explore Sales and Marketing Solutions",
    linkHref: "/solutions/sales-marketing",
    icon: <FaChartLine />,
  },
  {
    title: "Financial Management",
    description:
      "Improve financial operations and decision-making with AI-powered tools.",
    solutions: [
      "Accounts Payable Automation",
      "Cash Flow Forecasting",
      "Expense Management",
      "Financial Planning and Analysis",
    ],
    linkLabel: "Explore Financial Solutions",
    linkHref: "/solutions/financial",
    icon: <FaMoneyBillWave />,
  },
];

const SolutionCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-soft">
      <PageLayout>
        <SectionHeader
          title="Explore Solution Categories"
          subtitle="Tailored AI solutions across key business functions."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 font-sans
                ${
                  activeTab === index
                    ? "bg-electric text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          key={activeTab}
          className="bg-white rounded-2xl p-8 shadow-md transition-all duration-500 animate-fade-slide-up"
        >
          <h3 className="text-2xl font-bold text-navy mb-4 font-sans">
            {categories[activeTab].title}
          </h3>
          <p className="text-gray-600 mb-6 font-sans">
            {categories[activeTab].description}
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 font-sans">
            {categories[activeTab].solutions.map((solution, idx) => (
              <li key={idx}>{solution}</li>
            ))}
          </ul>

          <Button href={categories[activeTab].linkHref} variant="ghost" animate>
            {categories[activeTab].linkLabel} →
          </Button>
        </div>
      </PageLayout>
    </div>
  );
};

export default SolutionCategoriesTabs;
