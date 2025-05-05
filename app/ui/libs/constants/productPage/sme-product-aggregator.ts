import {
  FaBrain,
  FaCheckCircle,
  FaClipboardList,
  FaCreditCard,
  FaHandshake,
  FaMoneyBillWave,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
} from "react-icons/fa";

import SplitScreenChart from "@/app/ui/components/IconComponents/SplitScreenChart";

const heroSection = {
  title: "TRUBOT AI: ENTERPRISE SOFTWARE AGGREGATOR",
  subtitle: "Bulk Pricing. Unmatched Value. Elite Access.",
  primaryCTA: { label: "Start Saving Now", href: "/contact" },
  secondaryCTA: { label: "10X Your Sales", href: "/contact" },
  icon: SplitScreenChart,
};

const enterpriseSection = {
  audience: "Negotiate like a billion-dollar buyer",
  subtitle: "No need to switch vendors or disrupt your stack.",
  benefits: [
    { icon: FaCheckCircle, text: "Keep your preferred tools" },
    { icon: FaCheckCircle, text: "Pay significantly less" },
    {
      icon: FaCheckCircle,
      text: "Eliminate procurement friction",
    },
  ],
};

const softwareSection = {
  audience: "Already selling to enterprises?",
  subtitle:
    "We bring pre-qualified, bulk-ready buyers to your doorstep—at scale.",
  benefits: [
    { icon: FaCheckCircle, text: "Sell bigger, faster" },
    { icon: FaCheckCircle, text: "Predictable demand flow" },
    { icon: FaCheckCircle, text: "Zero CAC growth" },
  ],
  bgClass: "border border-electric/30",
};

const stepList = [
  {
    title: "Buyers Register",
    description:
      "Submit your software list + current pricing. Join live aggregation carts in your category.",
    icon: FaClipboardList,
  },
  {
    title: "Vendors List Products",
    description:
      "Upload SKUs, pricing tiers, and volume breaks. Access verified enterprise demand instantly.",
    icon: FaShoppingCart,
  },
  {
    title: "Matchmaking Engine Triggers",
    description:
      "When volume meets price threshold, deal is auto-locked. Smart contracts handle the rest.",
    icon: FaHandshake,
  },
  {
    title: "10% Flat Fee Applied",
    description: "Simple. Transparent. No surprises. No lock-ins.",
    icon: FaCreditCard,
  },
];

const categoryList = [
  "FinTech",
  "AI SaaS",
  "Supply Chain",
  "Cybersecurity",
  "EdTech",
  "HR Tech",
  "HealthTech",
  "DevOps",
];

const benefitList = [
  {
    icon: FaBrain,
    title: "COST SMASHER",
    description: "AI negotiates at scale. You save instantly.",
  },
  {
    icon: FaRocket,
    title: "GROWTH ACCELERATOR",
    description: "Pre-qualified volume. No cold leads.",
  },
  {
    icon: FaShieldAlt,
    title: "ZERO RISK",
    description: "No contracts. Cancel anytime.",
  },
  {
    icon: FaMoneyBillWave,
    title: "FLAT 10% FEE",
    description: "No hidden fees. Full transparency.",
  },
];

const ctaSection = {
  title: "READY TO OPTIMIZE YOUR ENTERPRISE SPEND OR SALES PIPELINE?",
  subtitle: "Join our network of elite buyers and top vendors today.",
  primaryCTA: { label: "BUYERS: Start Saving Now", href: "/contact" },
  secondaryCTA: { label: "VENDORS: 10X Your Sales", href: "/contact" },
};

export {
  heroSection,
  enterpriseSection,
  softwareSection,
  stepList,
  categoryList,
  benefitList,
  ctaSection,
};
