"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import ExpandableSpecCard from "@/app/ui/components/shared/ExpandableSpecCard";
import { techSpecList } from "@/app/ui/libs/constants/products/invoice-management-solutions";

const TechSpecs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout id="technical-specs" animate>
      <SectionHeader
        title="Technical Specifications"
        subtitle="Explore the robust technologies and capabilities behind our invoice management solution."
        align="center"
        animate
      />

      <div className="space-y-4">
        {techSpecList.map((card, index) => (
          <ExpandableSpecCard
            key={index}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            {...card}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default TechSpecs;
