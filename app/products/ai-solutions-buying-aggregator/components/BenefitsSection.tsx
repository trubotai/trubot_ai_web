import {
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaClock,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Reduced Risk",
    description:
      "All solutions undergo rigorous evaluation for security, reliability, and SME suitability, minimizing risks of failed implementations.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Cost Efficiency",
    description:
      "Access enterprise-grade AI capabilities at SME-friendly pricing, with negotiated deals and transparent total cost calculations.",
  },
  {
    icon: <FaClock />,
    title: "Time Savings",
    description:
      "Shrink your solution selection process from months to days with our pre-vetted catalog and streamlined comparison tools.",
  },
  {
    icon: <FaUserTie />,
    title: "Expertise On Demand",
    description:
      "Access AI specialists and clear guidance without hiring expensive consultants, through on-demand advisory services.",
  },
  {
    icon: <FaLightbulb />,
    title: "Future-Proof Strategy",
    description:
      "Receive ongoing recommendations and updates, ensuring your AI investments stay competitive as technology evolves.",
  },
];

const BenefitsSection = () => {
  return (
    <PageLayout className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text + List */}
      <div className="space-y-8">
        <SectionHeader
          title="Built for SME Success"
          subtitle="Explore the key advantages of using our strategic AI sourcing platform tailored for SMEs."
          align="left"
        />

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md animate-fade-slide-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <div className="text-electric text-2xl flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-navy font-sans">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 font-sans">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Placeholder Illustration */}
      <div className="flex justify-center md:justify-end">
        <div className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center shadow-inner animate-fade-slide-up animation-delay-400">
          <span className="text-gray-400 font-sans">[Insert Illustration]</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default BenefitsSection;
