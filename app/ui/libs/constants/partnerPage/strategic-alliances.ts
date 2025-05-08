import {
  FaChartPie,
  FaCogs,
  FaExchangeAlt,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaGlobe, FaServer } from "react-icons/fa6";

const heroSection = {
  title: "Sell Your B2B SaaS or Hosting Company for 100X Returns",
  subtitle:
    "We acquire companies with $10M–$100M revenue. Stay onboard with equity, or exit fully.",
  primaryCTA: {
    label: "Submit Your Company",
    href: "mailto:acquisitions@trubotai.com?subject=M&A%20Interest",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:acquisitions@trubotai.com?subject=M&A%20Interest",
  },
};

const acquisitionTargetList = [
  {
    icon: FaServer,
    title: "Sector Focus",
    description:
      "Web Hosting, ERP, Invoice Automation, or Cloud SaaS companies primed for AI integration.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Financial Threshold",
    description:
      "Revenue of $10M+ and EBITDA of $1M+ for scalable, proven operations.",
  },
  {
    icon: FaGlobe,
    title: "Geographic Fit",
    description:
      "Headquartered in the U.S., India, or operating globally with scalable infrastructure.",
  },
  {
    icon: FaCogs,
    title: "Tech & Revenue Stack",
    description:
      "AI-ready platforms with 70%+ recurring revenue and modern tech stacks.",
  },
];

const dealList = [
  {
    audience: "Buyouts",
    subtitle: "Ideal for founders seeking a complete exit.",
    icon: FaHandshake,
    benefits: [
      { icon: FaHandshake, text: "3–5x EBITDA payouts" },
      { icon: FaHandshake, text: "Fast close, clean exit" },
    ],
  },
  {
    audience: "Equity Rollover",
    subtitle: "Stay involved and earn upside on long-term growth.",
    icon: FaChartPie,
    benefits: [
      { icon: FaChartPie, text: "Retain 10–30% equity" },
      { icon: FaChartPie, text: "Earn on AI-driven expansion" },
    ],
  },
  {
    audience: "Cross-Sell Synergies",
    subtitle: "Boost valuation through smart AI upsells.",
    icon: FaExchangeAlt,
    benefits: [
      { icon: FaExchangeAlt, text: "Synergy-based growth" },
      { icon: FaExchangeAlt, text: "Enhanced customer LTV" },
    ],
  },
];

const successStoryList = [
  {
    title: "WebCraft Solutions",
    challenge: "Needed to grow revenue without increasing headcount.",
    solution: "Integrated TruVoice for AI-driven customer upsells.",
    results: ["85% recurring revenue achieved", "120% upsell growth via AI"],
    linkLabel: "Explore WebCraft Story",
    linkHref: "/contact",
    delay: 0,
  },
  {
    title: "InvoiceAI Systems",
    challenge: "Struggled with flat EBITDA margins.",
    solution: "Used AI to automate invoicing and upsell integrations.",
    results: [
      "35% EBITDA increase in 6 months",
      "Improved operational efficiency",
    ],
    linkLabel: "Explore InvoiceAI Story",
    linkHref: "/contact",
    delay: 100,
  },
];

const ctaSection = {
  title: "Ready for a Strategic Exit or Growth Partnership?",
  subtitle:
    "Submit your company details or reach out to explore how TruBot AI can elevate your legacy.",
  primaryCTA: {
    label: "Submit Your Company",
    href: "mailto:acquisitions@trubotai.com?subject=M&A%20Interest",
  },
  secondaryCTA: { label: "Email Us", href: "/contact" },
};

export {
  heroSection,
  acquisitionTargetList,
  dealList,
  successStoryList,
  ctaSection,
};
