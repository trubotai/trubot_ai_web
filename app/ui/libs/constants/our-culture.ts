import {
  FaClock,
  FaPiggyBank,
  FaMedal,
  FaLightbulb,
  FaPlane,
  FaSitemap,
} from "react-icons/fa";

const heroSection = {
  title:
    "Redefine Your Career at TruBot AI — 4-Day Work Weeks & Equity Freedom",
  subtitle:
    "Build AI’s future while owning your own—reach financial freedom in 5 years, and leave a legacy of financial freedom for generations.",
  primaryCTA: {
    label: "Join Our Team",
    href: "mailto:careers@trubotai.com?subject=TruBot%20AI%20Career%20Interest",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:careers@trubotai.com?subject=TruBot%20AI%20Career%20Interest",
  },
};

const perkList = [
  {
    audience: "4-Day Work Week",
    subtitle: "Because burnout doesn’t build billion-dollar products.",
    benefits: [
      { icon: FaClock, text: "Every Friday off — seriously" },
      { icon: FaClock, text: "Maximize output, minimize burnout" },
    ],
  },
  {
    audience: "Base Equity for Everyone",
    subtitle: "Be an owner, not just an employee.",
    benefits: [
      { icon: FaPiggyBank, text: "Equity from day one" },
      { icon: FaPiggyBank, text: "Transparent comp & vesting" },
    ],
  },
  {
    audience: "Top 1% Employer",
    subtitle: "Culture of innovation, not bureaucracy.",
    benefits: [
      { icon: FaMedal, text: "Zero micro-management" },
      { icon: FaMedal, text: "Mission-driven teams" },
    ],
  },
];

const howWeWorkList = [
  {
    title: "Innovation Labs",
    description:
      "20% of your time is dedicated to passion projects and moonshot ideas.",
    icon: FaLightbulb,
  },
  {
    title: "Global Retreats",
    description:
      "Annual team offsites to reflect, recharge, and celebrate big wins.",
    icon: FaPlane,
  },
  {
    title: "Zero Hierarchy",
    description: "Best ideas win—no job title politics, just impact.",
    icon: FaSitemap,
  },
];

const ctaSection = {
  title: "Join a Culture Where You Build and Belong",
  subtitle:
    "Be part of a team that values freedom, ownership, and impact. We're hiring across tech, product, and growth.",
  primaryCTA: {
    label: "Join Our Team",
    href: "mailto:careers@trubotai.com?subject=TruBot%20AI%20Career%20Interest",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:careers@trubotai.com?subject=TruBot%20AI%20Career%20Interest",
  },
};

export { heroSection, perkList, howWeWorkList, ctaSection };
