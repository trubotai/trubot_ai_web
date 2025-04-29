"use client";

import { useEffect, useRef, useState } from "react";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { stepList } from "@/app/ui/libs/constants/productPage/ai-solutions-buying-aggregator";

const StepTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.max(0, windowHeight - rect.top);
        const totalHeight = rect.height;
        const progress = Math.min(100, (visibleHeight / totalHeight) * 100);
        setProgressHeight(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout>
      <SectionHeader
        title="How It Works"
        subtitle="Follow these simple steps to find and implement the right AI solutions for your business."
      />

      <div className="relative pl-10" ref={timelineRef}>
        {/* Static Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gray-200 rounded-full"></div>

        {/* Glowing Progress Line */}
        <div
          className="absolute left-5 top-0 w-1 bg-gradient-to-b from-electric to-transparent rounded-full"
          style={{ height: `${progressHeight}%` }}
        ></div>

        <div className="space-y-16">
          {stepList.map((step, index) => (
            <div
              key={index}
              className={`relative animate-fade-slide-up animation-delay-${
                (index + 1) * 150
              }`}
            >
              <div className="absolute -left-[35px] top-0 w-10 h-10 flex items-center justify-center rounded-full bg-electric text-white font-bold shadow-md">
                {step.number < 10 ? `0${step.number}` : step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2 font-sans">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default StepTimeline;
