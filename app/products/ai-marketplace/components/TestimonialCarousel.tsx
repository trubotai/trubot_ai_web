"use client";

import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TestimonialCard from "@/app/ui/components/shared/TestimonialCard";
import { testimonialList } from "@/app/ui/libs/constants/products/ai-marketplace";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialList.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialList.length);
  };

  return (
    <PageLayout id="testimonialList">
      <SectionHeader
        title="What Our Customers Say"
        subtitle="Real feedback from enterprises, SMEs, and solution providers"
      />

      <div className="mt-12 relative max-w-3xl mx-auto">
        <TestimonialCard {...testimonialList[activeIndex]} />

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="bg-white/70 p-2 rounded-full shadow hover:shadow-md transition"
          >
            <FaChevronLeft className="w-5 h-5 text-navy hover:text-electric" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="bg-white/70 p-2 rounded-full shadow hover:shadow-md transition"
          >
            <FaChevronRight className="w-5 h-5 text-navy hover:text-electric" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialList.map((_, idx) =>
            idx === activeIndex ? (
              <FaCircle
                key={idx}
                className="text-electric w-3 h-3 cursor-pointer transition"
                onClick={() => setActiveIndex(idx)}
              />
            ) : (
              <FaRegCircle
                key={idx}
                className="text-navy/40 w-3 h-3 cursor-pointer hover:text-electric transition"
                onClick={() => setActiveIndex(idx)}
              />
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default TestimonialCarousel;
