"use client";

import { useEffect, useState } from "react";
import PageLayout from "../PageLayout";

interface OurStoryProps {
  storyList: { title: string; description: string }[];
}

const OurStory = ({ storyList }: OurStoryProps) => {
  const [visibleStep, setVisibleStep] = useState<number>(-1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".story-step");
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleStep((prev) => Math.max(prev, idx));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout id="our-story" className="bg-light">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            Our Story
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-electric/30 rounded-lg">
          {storyList.map((step, index) => (
            <div
              key={index}
              className={`story-step relative mb-16 ml-8 pl-4 transition-all duration-700 ${
                visibleStep >= index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute -left-10 top-2 flex items-center justify-center w-8 h-8 bg-electric text-white font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${
                  visibleStep >= index ? "animate-pulse-slow" : ""
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Connecting Line */}
              {index !== storyList.length - 1 && (
                <div
                  className={`absolute -left-[7px] top-10 w-1 bg-electric/30 transition-all duration-700 origin-top ${
                    visibleStep >= index + 1 ? "h-24" : "h-0"
                  }`}
                />
              )}

              {/* Title + Description */}
              <h3 className="text-2xl font-semibold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default OurStory;
