"use client";

import { useEffect, useState } from "react";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import { storyList } from "@/app/ui/libs/constants/productPage/ai-solutions-buying-aggregator";

const SuccessStoriesCarousel = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowScrollHint(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-soft relative">
      <PageLayout>
        <SectionHeader
          title="Success Stories"
          subtitle="Real results from businesses like yours."
        />

        {showScrollHint && (
          <div className="text-center text-gray-400 text-sm mb-4 animate-fade-in animation-delay-300">
            ← Scroll →
          </div>
        )}

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth">
          {storyList.map((story, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-white rounded-2xl shadow-sm p-6 snap-center animate-fade-slide-up animation-delay-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4 bg-electric text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                Case Study
              </div>

              <h3 className="text-xl font-semibold text-navy mb-4 font-sans">
                {story.company}
              </h3>

              <div className="mb-3">
                <h4 className="font-bold text-gray-800 text-sm mb-1 font-sans">
                  Challenge
                </h4>
                <p className="text-gray-600 text-sm font-sans">
                  {story.challenge}
                </p>
              </div>

              <div className="mb-3">
                <h4 className="font-bold text-gray-800 text-sm mb-1 font-sans">
                  Solution
                </h4>
                <p className="text-gray-600 text-sm font-sans">
                  {story.solution}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-800 text-sm mb-1 font-sans">
                  Results
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 font-sans">
                  {story.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>

              <Button
                href={story.linkHref}
                variant="ghost"
                className="text-sm p-0 hover:underline"
                animate
              >
                {story.linkLabel} →
              </Button>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default SuccessStoriesCarousel;
