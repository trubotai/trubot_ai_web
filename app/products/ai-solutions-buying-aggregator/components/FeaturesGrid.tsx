import {
  FaSearch,
  FaBalanceScale,
  FaRobot,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FaSearch />,
    title: "Find Your Perfect AI Fit",
    description:
      "Our intelligent recommendation engine analyzes your business needs, technical environment, and budget to suggest the most suitable AI solutions from hundreds of vetted providers.",
    badge: "Top Pick",
  },
  {
    icon: <FaBalanceScale />,
    title: "Beyond Feature Checklists",
    description:
      "Compare AI solutions based on implementation time, cost of ownership, integration ease, and real-world performance, not just features.",
  },
  {
    icon: <FaRobot />,
    title: "Unbiased Recommendations",
    description:
      "Receive vendor-neutral advice from our AI experts who prioritize your business outcomes, not vendor commissions.",
    badge: "New",
  },
  {
    icon: <FaCogs />,
    title: "Designed for Your Resources",
    description:
      "Get tailored implementation roadmaps matching SME capabilities, ensuring smooth deployments without heavy technical lift.",
  },
  {
    icon: <FaChartLine />,
    title: "Continuous Value Improvement",
    description:
      "Our platform monitors your AI solution performance and suggests optimizations and upgrades as your business evolves.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="bg-gray-soft">
      <PageLayout>
        <SectionHeader
          title="Why Choose Our Platform?"
          subtitle="Discover the unique advantages of sourcing AI solutions with our SME-focused platform."
        />

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              animationDelayClass={`animation-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default FeaturesGrid;
