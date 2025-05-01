import { FaHandshake, FaStore, FaCode } from "react-icons/fa";

import RelatedProductCard from "@/app/ui/components/RelatedProductCard";
import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";

const relatedServices = [
  {
    title: "Partner Program for SMEs",
    description:
      "Join our ecosystem as a solution provider specializing in SME AI implementations and expand your business reach.",
    linkLabel: "Learn More",
    linkHref: "/partner-program",
    icon: <FaHandshake />,
  },
  {
    title: "AI Marketplace",
    description:
      "Explore our full catalog of AI solutions for enterprises and SMEs across all industries and functions.",
    linkLabel: "Learn More",
    linkHref: "/ai-marketplace",
    icon: <FaStore />,
  },
  {
    title: "Custom AI Development",
    description:
      "For unique business challenges that require tailored solutions beyond off-the-shelf options, we offer custom AI development.",
    linkLabel: "Learn More",
    linkHref: "/custom-ai-development",
    icon: <FaCode />,
  },
];

const RelatedServicesSection = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Related Services"
        subtitle="Discover more ways we can help your business succeed with AI solutions and strategic partnerships."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedServices.map((service, index) => (
          <RelatedProductCard
            key={index}
            title={service.title}
            description={service.description}
            linkLabel={service.linkLabel}
            linkHref={service.linkHref}
            icon={service.icon}
            delay={index * 150}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default RelatedServicesSection;
