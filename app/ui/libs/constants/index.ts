import {
  FaRobot,
  FaComments,
  FaCogs,
  FaRocket,
  FaFileInvoice,
  FaPhone,
  FaShareAlt,
  FaMapMarkedAlt,
  FaTools,
  FaTruck,
  FaUserTie,
} from "react-icons/fa";

const benefitList = [
  {
    icon: FaRobot,
    title: "Enhanced Productivity",
    subtitle: "Automate Complex Tasks with AI Agents",
    description:
      "Our intelligent AI agents handle repetitive workflows, complex decision-making, and data analysis — freeing your team to focus on strategic initiatives.",
  },
  {
    icon: FaComments,
    title: "Seamless Communication",
    subtitle: "Connect with Customers Through Voice & Chat",
    description:
      "Deliver exceptional experiences with AI voice bots and chatbots that understand context, respond naturally, and learn continuously.",
  },
  {
    icon: FaCogs,
    title: "Operational Excellence",
    subtitle: "Streamline Business Processes",
    description:
      "From invoice management to social media, our AI solutions eliminate inefficiencies and reduce costs across your organization.",
  },
  {
    icon: FaRocket,
    title: "Strategic Advantage",
    subtitle: "Stay Ahead with Cutting-Edge AI",
    description:
      "Leverage the same advanced AI technologies used by industry leaders to gain a competitive edge and drive innovation.",
  },
];

const productList = [
  {
    icon: FaRobot,
    title: "AI Agents",
    description:
      "AI agents that can reason, plan, and execute workflows with minimal human input — perfect for complex operations.",
    link: "/products/ai-agents",
  },
  {
    icon: FaPhone,
    title: "AI Voice Bots",
    description:
      "Voice assistants that understand natural language, detect emotion, and enhance customer experience hands-free.",
    link: "/products/ai-voicebots",
  },
  {
    icon: FaComments,
    title: "AI Chatbots",
    description:
      "Chatbots that engage users with human-like interactions, personalize responses, and guide complex workflows.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaFileInvoice,
    title: "Invoice Management",
    description:
      "Automate invoice capture, fraud detection, and payment optimization using AI-powered finance tools.",
    link: "/products/invoice-management-solutions",
  },
  {
    icon: FaShareAlt,
    title: "Social Media Tools",
    description:
      "AI-driven tools for content creation, trend detection, and engagement optimization to grow your online presence.",
    link: "/products/social-media-tools",
  },
];

const marketplaceList = [
  {
    icon: FaMapMarkedAlt,
    name: "Customer Journey Optimization",
    provider: "AI Insight Group",
    description:
      "Map, track, and enhance every customer interaction across channels using AI-driven analytics and automation.",
    tags: ["Customer Experience", "Analytics", "Automation"],
    link: "/contact",
  },
  {
    icon: FaTools,
    name: "Predictive Maintenance",
    provider: "SmartOps AI",
    description:
      "Prevent downtime and reduce costs by predicting equipment failure before it happens using machine learning.",
    tags: ["IoT", "Reliability", "Cost Reduction"],
    link: "/contact",
  },
  {
    icon: FaTruck,
    name: "Supply Chain Intelligence",
    provider: "LogiAI",
    description:
      "Get real-time insights and optimize supply chain logistics using AI-powered forecasting and tracking tools.",
    tags: ["Logistics", "Forecasting", "Efficiency"],
    link: "/contact",
  },
  {
    icon: FaUserTie,
    name: "Talent Acquisition Assistant",
    provider: "HRBotics",
    description:
      "Use AI to source, screen, and engage the right candidates — faster, smarter, and with less bias.",
    tags: ["Hiring", "HR Tech", "Efficiency"],
    link: "/contact",
  },
];

const smeFocusList = [
  {
    title: "Strategic Sourcing",
    description:
      "Find the perfect AI solutions for your business needs through our AI-powered strategic sourcing platform. Compare options, read reviews, and make informed decisions without the enterprise-level complexity.",
    solutions: [
      "AI matching based on business goals",
      "Transparent vendor reviews",
      "Side-by-side solution comparisons",
    ],
    linkLabel: "Learn More",
    linkHref: "/contact",
  },
  {
    title: "Partner Program",
    description:
      "Join our partner ecosystem to showcase your products to a growing community of businesses seeking AI solutions. Expand your reach and grow your business with our comprehensive support system.",
    solutions: [
      "Dedicated partner support",
      "Marketplace exposure",
      "Lead-sharing and co-marketing",
    ],
    linkLabel: "Become a Partner",
    linkHref: "/contact",
  },
];

const testimonialList = [
  {
    quote:
      "Implementing their AI agents has transformed our customer service operations. We've seen a 40% reduction in response times and a 25% increase in customer satisfaction scores.",
    name: "Sarah Chen",
    title: "CTO",
    company: "Global Retail Solutions",
  },
  {
    quote:
      "The invoice management solution paid for itself within three months. Our accounts payable team now processes 3x the volume with half the staff — and with greater accuracy.",
    name: "Michael Rodriguez",
    title: "CFO",
    company: "Logistics International",
  },
  {
    quote:
      "As an SME, we never thought cutting-edge AI would be accessible to us. Their solutions have leveled the playing field, allowing us to compete with much larger companies.",
    name: "Emma Thompson",
    title: "CEO",
    company: "Innovative Tech Startup",
  },
];

const ctaSection = {
  title: "Ready to Transform Your Business with AI?",
  subtitle:
    "Join hundreds of forward-thinking companies leveraging our AI solutions to drive efficiency, innovation, and growth.",
  primaryCTA: { label: "Request a Demo", href: "/contact" },
  secondaryCTA: { label: "Contact Our Team", href: "/contact" },
};

export {
  benefitList,
  productList,
  marketplaceList,
  smeFocusList,
  testimonialList,
  ctaSection,
};
