import { FaGlobeAmericas, FaTag } from "react-icons/fa";
import { FaChartLine, FaLayerGroup } from "react-icons/fa6";

const heroSection = {
  title: "100X Your Investment with TruBot AI’s Multi-Product Powerhouse",
  subtitle:
    "Join the AI revolution—powered by a $1.3T market, 38% CAGR, and proven profitability.",
  primaryCTA: {
    label: "Schedule a Call",
    href: "mailto:investors@trubotai.com?subject=Request%20Investor%20Deck",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:investors@trubotai.com?subject=Request%20Investor%20Deck",
  },
};

const featureList = [
  {
    icon: FaLayerGroup,
    title: "Multi-Product Playbook",
    description:
      "AI agents, voice bots, invoice automation, and a growing marketplace make TruBot a scalable AI ecosystem.",
  },
  {
    icon: FaTag,
    title: "White-Label Power",
    description:
      "Adaptable solutions for both SMBs and enterprises with brand customization at scale.",
  },
  {
    icon: FaChartLine,
    title: "M&A-Driven Growth",
    description:
      "Targeting U.S. and Indian companies with $1M+ EBITDA for synergy-driven growth.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Exit-Ready Strategy",
    description:
      "Defined ROI goals, scalable GTM, and global expansion potential with 20%+ IRR targets.",
  },
];

const snapshotList = [
  "6–12x revenue multiples for B2B software M&A",
  "Cross-sell boosts acquired firm valuation by 40%",
  "Focused on high-retention, high-margin verticals",
];

const ctaSection = {
  title: "Schedule a Call",
  subtitle:
    "Ready to partner? Reach us directly at investors@trubotai.com or schedule a discovery call today.",
  primaryCTA: {
    label: "Schedule a Call",
    href: "mailto:investors@trubotai.com",
  },
  secondaryCTA: { label: "Email Us", href: "mailto:investors@trubotai.com" },
};

export { heroSection, featureList, snapshotList, ctaSection };
