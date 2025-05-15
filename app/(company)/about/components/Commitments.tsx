"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import AccordionItem from "@/app/ui/components/shared/AccordionItem";
import { commitmentList } from "@/app/ui/libs/constants/company/about";

const Commitments = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout
      id="responsible-ai"
      aria-label="Responsible AI Commitments Section"
    >
      <SectionHeader
        title="Our Commitment to Responsible AI"
        subtitle="Ethics and responsibility are central to how we design, build, and deliver our AI technologies."
        align="center"
      />

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {commitmentList.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `accordion-panel-${index}`;
          const buttonId = `accordion-button-${index}`;

          return (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-4 text-electric shrink-0" aria-hidden="true">
                <item.icon className="w-5 h-5" />
              </div>
              <AccordionItem
                index={index}
                isOpen={isOpen}
                question={item.question}
                answer={item.answer}
                onToggle={() => toggleItem(index)}
                aria-controls={panelId}
                aria-labelledby={buttonId}
              />
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Commitments;
