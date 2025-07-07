"use client";

import { useState } from "react";
import { ElementType } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import Button from "./Button";

interface ProgramType {
  title: string;
  subtitle: string;
  detail: string;
  requirements: string[];
  benefits: string[];
  ctaLabel?: string;
  ctaHref?: string;
  icon?: ElementType;
  index?: number;
  highlight?: boolean;
  badge?: string;
}

interface ProgramAccordionProps {
  programs: ProgramType[];
}

const ProgramAccordion = ({ programs }: ProgramAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {programs.map(
        (
          {
            title,
            subtitle,
            detail,
            requirements,
            benefits,
            ctaLabel,
            ctaHref,
            icon: Icon,
            index,
            highlight,
            badge,
          },
          idx
        ) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`bg-light border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                highlight ? "border-2 border-yellow-400 bg-yellow-50" : ""
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls={`program-content-${idx}`}
              >
                <div className="flex items-center gap-4">
                  {Icon && (
                    <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-electric"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-heading font-semibold text-navy">
                        {title}
                      </h3>
                      {badge && (
                        <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {badge}
                        </span>
                      )}
                    </div>
                    <p className="text-navy/70 font-body text-sm">{subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {ctaLabel && ctaHref && (
                    <Button
                      href={ctaHref}
                      label={ctaLabel}
                      variant="ghost"
                      size="sm"
                    />
                  )}
                  <div className="text-electric">
                    {isOpen ? (
                      <FaChevronDown className="w-5 h-5 transition-transform duration-200" />
                    ) : (
                      <FaChevronRight className="w-5 h-5 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>

              {/* Content */}
              <div
                id={`program-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-navy/80 font-body leading-relaxed">
                      {detail}
                    </p>
                  </div>

                  {/* Requirements and Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Requirements */}
                    <div className="bg-gray-soft rounded-lg p-4">
                      <h4 className="font-heading text-electric text-lg mb-3 font-semibold">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {requirements.map((requirement, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start gap-2 text-sm text-navy/80 font-body"
                          >
                            <span className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gray-soft rounded-lg p-4">
                      <h4 className="font-heading text-electric text-lg mb-3 font-semibold">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-2 text-sm text-navy/80 font-body"
                          >
                            <span className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {ctaLabel && ctaHref && (
                    <div className="text-center pt-4">
                      <Button
                        href={ctaHref}
                        label={ctaLabel}
                        variant="primary"
                        animate
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProgramAccordion;
