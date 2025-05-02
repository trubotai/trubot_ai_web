import { FaExchangeAlt, FaHandshake, FaMoneyBillAlt } from "react-icons/fa";
import { FaMoneyBillWave, FaTrophy, FaUserCheck } from "react-icons/fa6";

const heroSection = {
  title: "SME Empower Partner Program: Earn. Trade. Thrive.",
  subtitle: "Pay just 10% on successful sales—no hidden fees, no lock-ins.",
  primaryCTA: {
    label: "Enroll Now",
    href: "mailto:empowersme@trubotai.com?subject=SME%20Empower%20Program%20Signup",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:empowersme@trubotai.com?subject=SME%20Empower%20Program%20Signup",
  },
};

const stepList = [
  {
    title: "Enroll",
    description:
      "Subscribe to any TruBot AI product and activate your SME profile.",
    icon: FaUserCheck,
  },
  {
    title: "Connect",
    description:
      "Instantly access 1,000+ SMEs for high-value trade partnerships.",
    icon: FaHandshake,
  },
  {
    title: "Earn",
    description:
      "Get listed, get discovered, and grow revenue through peer deals.",
    icon: FaMoneyBillWave,
  },
];

const benefitList = [
  {
    audience: "Reciprocal Selling",
    subtitle: "Create new demand by participating in a win-win sales loop.",
    icon: FaExchangeAlt,
    benefits: [
      { icon: FaExchangeAlt, text: "Earn from peer purchases" },
      { icon: FaExchangeAlt, text: "Grow by helping others grow" },
    ],
  },
  {
    audience: "Zero Overhead",
    subtitle: "No upfront fees—only pay when you profit.",
    icon: FaMoneyBillAlt,
    benefits: [
      { icon: FaMoneyBillAlt, text: "Only 10% commission on your sales" },
      { icon: FaMoneyBillAlt, text: "No subscriptions or lock-ins" },
    ],
  },
  {
    audience: "Leaderboard Bonuses",
    subtitle: "Get visibility and funding exposure for top sellers.",
    icon: FaTrophy,
    benefits: [
      { icon: FaTrophy, text: "Featured to investors & VCs" },
      { icon: FaTrophy, text: "Recognition drives demand" },
    ],
  },
];

const caseStudyList = [
  {
    title: "DigitalEdge",
    challenge:
      "Struggled with inconsistent lead flow and low recurring revenue.",
    solution: "Joined the SME Empower Program and partnered with 45+ SMEs.",
    results: [
      "Achieved $7.2M in annual revenue",
      "Boosted lead consistency and customer LTV",
    ],
    linkLabel: "Explore the Full Case Study",
    linkHref: "/contact",
    delay: 0,
  },
];

const ctaSection = {
  title: "Ready to Grow 10X Faster with Fellow SMEs?",
  subtitle:
    "Join the Empower Partner Program today and turn every partnership into profit.",
  primaryCTA: {
    label: "Enroll Now",
    href: "mailto:empowersme@trubotai.com?subject=SME%20Empower%20Program%20Signup",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:empowersme@trubotai.com?subject=SME%20Empower%20Program%20Signup",
  },
};

export { heroSection, stepList, benefitList, caseStudyList, ctaSection };
