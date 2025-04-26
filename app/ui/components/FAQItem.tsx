"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl bg-white transition-all duration-300 ${
        open
          ? "ring-2 ring-electric shadow-md"
          : "shadow-sm hover:ring-1 hover:ring-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="text-navy text-base sm:text-lg font-semibold group-hover:text-electric transition-colors">
          {question}
        </span>

        <span
          className={`text-electric text-2xl font-bold transform transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Answer */}
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed animate-fade-slide-up">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
