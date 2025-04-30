"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { techSpecList } from "@/app/ui/libs/constants/products/ai-agents";

const TechSpecs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <SectionHeader
        title="Technical Specifications"
        subtitle="Built for performance, security, and flexibility"
      />

      <div className="space-y-4">
        {techSpecList.map((spec, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow transition-all animate-fade-slide-up ${spec.bg}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-electric/10 text-electric p-2 rounded-full">
                  <spec.icon size={22} />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  {spec.title}
                </h3>
              </div>
              <ChevronDown
                className={`text-electric transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all px-6 ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
              } overflow-hidden`}
            >
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 pl-1">
                {spec.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default TechSpecs;
