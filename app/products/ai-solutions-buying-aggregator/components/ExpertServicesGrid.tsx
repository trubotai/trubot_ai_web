"use client";

import {
  FaClipboardCheck,
  FaMapSigns,
  FaCalculator,
  FaUserGraduate,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";

const services = [
  {
    icon: <FaClipboardCheck />,
    title: "AI Readiness Assessment",
    description:
      "Evaluate your organization's readiness across data, infrastructure, team capabilities, and processes.",
    linkLabel: "Take Free Assessment",
    linkHref: "/services/assessment",
  },
  {
    icon: <FaMapSigns />,
    title: "Implementation Roadmaps",
    description:
      "Receive step-by-step customized plans for implementing your chosen AI solutions successfully.",
    linkLabel: "View Sample Roadmap",
    linkHref: "/services/roadmap",
  },
  {
    icon: <FaCalculator />,
    title: "ROI Calculators",
    description:
      "Estimate potential returns, costs, and payback periods tailored to your specific business metrics.",
    linkLabel: "Try ROI Calculator",
    linkHref: "/services/roi-calculator",
  },
  {
    icon: <FaUserGraduate />,
    title: "Expert Consultations",
    description:
      "Get personalized 1-on-1 guidance from our AI specialists on strategy, deployment, and optimization.",
    linkLabel: "Book Consultation",
    linkHref: "/services/consultation",
  },
];

const ExpertServicesGrid = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Expert Guidance at Every Step"
        subtitle="Comprehensive support services designed to ensure your AI adoption journey is smooth, successful, and ROI-driven."
      />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group bg-gray-50 hover:bg-white hover:shadow-lg rounded-2xl p-8 text-center transition-all duration-300 animate-fade-slide-up animation-delay-${
              index * 100
            } flex flex-col items-center`}
          >
            <div className="text-4xl text-electric mb-6 transform transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-navy mb-2 font-sans">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 font-sans">
              {service.description}
            </p>
            <Button
              href={service.linkHref}
              variant="ghost"
              className="text-sm p-0 hover:underline mt-auto"
              animate
            >
              {service.linkLabel} →
            </Button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default ExpertServicesGrid;
