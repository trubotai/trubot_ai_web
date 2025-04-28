"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

const FAQItem = ({ question, answer, delay = 0 }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        border-b border-gray-200 transition-all animate-fade-slide-up hover:bg-gray-50 rounded-lg

        ${isOpen ? "bg-gray-50" : "bg-white"}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left px-2 py-4 focus:outline-none group"
      >
        <span className="text-navy font-semibold text-lg group-hover:text-electric transition-colors">
          {question}
        </span>

        <FaChevronDown
          className={`
            text-electric transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all
          ${isOpen ? "max-h-96 pb-4" : "max-h-0 pb-0"}
        `}
        style={{
          transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // 🎯 bounce feel!
          transitionDuration: "500ms",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
