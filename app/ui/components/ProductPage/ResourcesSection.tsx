import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import ResourceCard from "../ResourceCard";

import {
  FaLaptopCode,
  FaBookOpen,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";

interface Resource {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

interface ResourcesSectionProps {
  resources: Resource[];
}

const iconMap: Record<string, React.ReactNode> = {
  "Partner Portal": <FaLaptopCode />,
  "Technical Documentation": <FaBookOpen />,
  "Marketing Toolkit": <FaBullhorn />,
  "Training and Certification": <FaGraduationCap />,
};

const ResourcesSection = ({ resources }: ResourcesSectionProps) => {
  return (
    <PageLayout>
      {/* Section Header */}
      <SectionHeader
        title="Partner Resources"
        subtitle="Everything you need to succeed as our partner — resources, tools, and training at your fingertips."
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            linkLabel={resource.linkLabel}
            linkHref={resource.linkHref}
            icon={iconMap[resource.title] || undefined}
            delay={index * 100}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default ResourcesSection;
