"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import { pricingList } from "@/app/ui/libs/constants/productPage/ai-agents";

const PricingSection = () => {
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const plans = pricingList[duration];

  return (
    <div className="bg-gray-50">
      <PageLayout>
        <SectionHeader
          title="Pricing Options"
          subtitle="Simple and scalable plans to fit your business needs"
        />

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          {["monthly", "yearly"].map((option) => (
            <button
              key={option}
              onClick={() => setDuration(option as "monthly" | "yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                duration === option
                  ? "bg-electric text-white shadow"
                  : "bg-white text-navy border border-electric"
              }`}
            >
              {option === "monthly" ? "Monthly Billing" : "Yearly Billing"}
            </button>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 transition-all transform hover:scale-[1.02] hover:shadow-lg ${
                plan.popular
                  ? "bg-electric text-white"
                  : "bg-white border border-gray-200"
              } animate-fade-slide-up`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-electric text-xs font-bold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-navy"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-lg font-semibold mb-4 ${
                  plan.popular ? "text-white" : "text-electric"
                }`}
              >
                {plan.price}
              </p>
              <ul
                className={`list-disc list-inside text-sm mb-6 space-y-1 ${
                  plan.popular ? "text-white/90" : "text-gray-600"
                }`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="hover-scale-glow transition">
                <Button
                  href={plan.link}
                  variant={plan.popular ? "outline" : "primary"}
                  fullWidth
                  animate
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default PricingSection;
