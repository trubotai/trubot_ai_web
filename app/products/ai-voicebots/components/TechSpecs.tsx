"use client";

import React, { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import ExpandableSpecCard from "@/app/ui/components/shared/ExpandableSpecCard";
import { techSpecList } from "@/app/ui/libs/constants/products/ai-voicebots";

const TechSpecs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout id="tech-specs" animate>
      <SectionHeader
        title="Technical Specifications"
        subtitle="Built for performance, security, and flexibility"
        animate
      />

      <div className="space-y-4">
        {techSpecList.map((spec, index) => (
          <ExpandableSpecCard
            key={index}
            icon={spec.icon}
            title={spec.title}
            items={spec.points}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
            index={index}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default TechSpecs;
