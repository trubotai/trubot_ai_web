import {
  FaBook,
  FaBullhorn,
  FaChalkboardTeacher,
  FaChartLine,
  FaCogs,
  FaFileAlt,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
  FaProjectDiagram,
  FaRobot,
  FaSearch,
  FaStore,
  FaTools,
} from "react-icons/fa";
import { FaNetworkWired, FaRocket } from "react-icons/fa6";

const heroSection = {
  title: "Partner Program: Accelerate Your Growth in the AI Ecosystem",
  subtitle:
    "Join our thriving partner network to expand your market reach, access new customers, and collaborate on innovative AI solutions for small and medium enterprises.",
  primaryCTA: { label: "Apply to Partner Program", href: "/contact" },
  secondaryCTA: { label: "Download Partner Guide", href: "/contact" },
  icson: FaProjectDiagram,
};

const benefitList = [
  {
    icon: FaBullhorn,
    title: "Expanded Market Reach",
    description:
      "Gain immediate exposure to thousands of SMEs through our marketplace and sourcing platform, reducing your acquisition costs.",
  },
  {
    icon: FaHandshake,
    title: "Co-Marketing Opportunities",
    description:
      "Leverage joint campaigns, success stories, and events to amplify your brand and increase visibility.",
  },
  {
    icon: FaCogs,
    title: "Technical Integration Support",
    description:
      "Get dedicated help integrating your solution for a seamless customer experience and lower implementation barriers.",
  },
  {
    icon: FaChartLine,
    title: "Business Development Resources",
    description:
      "Access sales tools, lead generation programs, and support built for AI vendors targeting SMEs.",
  },
  {
    icon: FaLightbulb,
    title: "Product Development Insights",
    description:
      "Leverage market intelligence and feedback to refine your product roadmap and meet real SME needs.",
  },
];

const partnerList = [
  {
    title: "Solution Partners",
    subtitle: "For AI Product and Service Providers",
    detail:
      "Ideal for companies offering AI-powered products or services that solve specific business challenges for SMEs.",
    requirements: [
      "Proven AI solution with demonstrated customer success",
      "SME-friendly pricing and implementation approach",
      "Commitment to customer support excellence",
      "Technical capability to integrate with our platform",
    ],
    benefits: [
      "Listing in our AI Marketplace and Strategic Sourcing platform",
      "Lead generation and qualified referrals",
      "Co-marketing opportunities",
      "Technical integration support",
      "Partner portal access",
    ],
    ctaLabel: "Apply as Solution Partner",
    ctaHref: "/contact",
    icon: FaHandshake,
  },
  {
    title: "Implementation Partners",
    subtitle: "For Service Providers and Consultants",
    detail:
      "Perfect for consulting firms, system integrators, and service providers who help SMEs implement and optimize AI solutions.",
    requirements: [
      "Proven expertise in AI implementation for SMEs",
      "Certified technical staff",
      "Documented customer success stories",
      "Commitment to our implementation standards",
    ],
    benefits: [
      "Access to implementation opportunities",
      "Technical training and certification",
      "Joint proposal development",
      "Marketing support and co-branding",
      "Preferred pricing on our solutions",
    ],
    ctaLabel: "Apply as Implementation Partner",
    ctaHref: "/contact",
    icon: FaCogs,
  },
  {
    title: "Technology Partners",
    subtitle: "For Infrastructure and Platform Providers",
    detail:
      "Designed for companies providing the underlying technology, infrastructure, or platforms that support AI solution development and deployment.",
    requirements: [
      "Enterprise-grade technology with SME adaptability",
      "Scalable infrastructure or platform capabilities",
      "Commitment to security and reliability",
      "Technical documentation and support resources",
    ],
    benefits: [
      "Technical integration certification",
      "Joint solution development",
      "Reference architecture publication",
      "Co-marketing opportunities",
      "Innovation collaboration",
    ],
    ctaLabel: "Apply as Technology Partner",
    ctaHref: "/contact",
    icon: FaNetworkWired,
  },
];

const programList = [
  {
    title: "Registered Partner",
    subtitle: "Getting Started",
    benefits: [
      "Basic marketplace listing",
      "Partner portal access",
      "Self-service resources",
      "Standard commission structure",
    ],
    requirements: [
      "Completed partner application",
      "Signed partner agreement",
      "Basic solution verification",
    ],
  },
  {
    title: "Silver Partner",
    subtitle: "Building Momentum",
    benefits: [
      "Enhanced marketplace visibility",
      "Lead sharing program access",
      "Co-marketing opportunities",
      "Increased commission structure",
      "Technical integration support",
    ],
    requirements: [
      "5+ successful customer implementations",
      "Completed technical integration",
      "Partner certification",
      "Quarterly business reviews",
    ],
  },
  {
    title: "Gold Partner",
    subtitle: "Strategic Collaboration",
    benefits: [
      "Premium marketplace placement",
      "Dedicated partner manager",
      "Joint marketing campaigns",
      "Advanced lead generation",
      "Highest commission structure",
      "Early access to new features",
    ],
    requirements: [
      "15+ successful customer implementations",
      "Customer satisfaction score >90%",
      "Joint business plan",
      "Executive sponsorship",
      "Annual business reviews",
    ],
    highlight: true,
    badge: "Most Popular",
  },
];

const storyList = [
  {
    title: "AI Analytics Provider",
    challenge:
      "Struggled to reach SME customers due to limited marketing resources and perception that their solution was only for enterprises.",
    solution:
      "Joined our partner program to access the SME market, received technical integration support, and participated in co-marketing activities.",
    results: [
      "200% increase in SME customer acquisition",
      "40% reduction in sales cycle length",
      "5 successful joint marketing campaigns",
      "New product features developed based on SME feedback",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
    delay: 0,
  },
  {
    title: "Industry-Specific AI Solution",
    challenge:
      "Had excellent AI tech for manufacturing but lacked channels to reach small and medium manufacturers.",
    solution:
      "Used the partner program to connect with targeted SMEs, adapted their solution for easier implementation, and ran industry-specific marketing.",
    results: [
      "Expanded to 3 new geographic markets",
      "150+ new SME customers in 12 months",
      "35% revenue growth",
      "Developed SME-specific offering based on platform insights",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
    delay: 150,
  },
];

const stepList = [
  {
    stepNumber: 1,
    title: "Apply",
    description:
      "Complete our partner application form. Our team reviews applications within 5 business days.",
    icon: FaFileAlt,
  },
  {
    stepNumber: 2,
    title: "Onboard",
    description:
      "Access our portal, complete training, and collaborate on integration planning.",
    icon: FaChalkboardTeacher,
  },
  {
    stepNumber: 3,
    title: "Integrate",
    description:
      "Implement technical integrations for a seamless customer experience.",
    icon: FaCogs,
  },
  {
    stepNumber: 4,
    title: "Launch",
    description:
      "Create your listing, prep joint marketing, and activate your GTM strategy.",
    icon: FaRocket,
  },
  {
    stepNumber: 5,
    title: "Grow",
    description:
      "Leverage program benefits, expand your reach, and move up tiers.",
    icon: FaChartLine,
  },
];

const resourceList = [
  {
    icon: FaTools,
    title: "Partner Portal",
    description:
      "Access sales tools, marketing materials, technical documentation, training resources, and lead management—all in one place.",
    link: "/contact",
    animationDelay: 0,
  },
  {
    icon: FaBook,
    title: "Technical Documentation",
    description:
      "Comprehensive guides, API documentation, sample code, and best practices to streamline your technical integration.",
    link: "/contact",
    animationDelay: 150,
  },
  {
    icon: FaBullhorn,
    title: "Marketing Toolkit",
    description:
      "Access co-branded templates, campaign materials, customer success frameworks, and social content.",
    link: "/contact",
    animationDelay: 300,
  },
  {
    icon: FaGraduationCap,
    title: "Training & Certification",
    description:
      "Certification paths for sales, technical, and implementation teams to validate your expertise.",
    link: "/contact",
    animationDelay: 450,
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know before joining our partner program.",
  faqList: [
    {
      question:
        "What are the costs associated with joining the partner program?",
      answer:
        "There are no upfront fees. We operate on a shared success model with commission structures based on customer acquisition and retention, which vary by tier and solution category.",
    },
    {
      question: "How long does the application and onboarding process take?",
      answer:
        "Typically 4–6 weeks, including application review, agreement signing, technical integration, and listing setup. This may be faster for simple integrations.",
    },
    {
      question: "What technical requirements must my solution meet?",
      answer:
        "API-based integration, SSO support, data exchange standards, SOC 2 compliance, and performance metrics. Full specs are shared during onboarding.",
    },
    {
      question: "How do you generate leads for partners?",
      answer:
        "Through our marketplace, strategic sourcing engine, marketing campaigns, industry events, and direct sales activities—distributed based on tier and performance.",
    },
    {
      question:
        "Can we maintain our direct sales channels while participating in your program?",
      answer:
        "Absolutely. Our partner program is designed to complement your sales strategy, not replace it. There are no exclusivity requirements.",
    },
  ],
};

const relatedProductList = [
  {
    icon: FaStore,
    title: "AI Marketplace",
    description:
      "Showcase your solutions in our comprehensive catalog of enterprise-grade AI tools and services.",
    link: "/products/ai-marketplace",
    animationDelay: 0,
  },
  {
    icon: FaSearch,
    title: "Strategic Sourcing for SMEs",
    description:
      "Connect with SME customers actively seeking solutions through our AI-powered recommendation engine.",
    link: "/products",
    animationDelay: 150,
  },
  {
    icon: FaRobot,
    title: "AI Agents",
    description:
      "Integrate your solutions with our autonomous AI agents to extend functionality and value.",
    link: "/products/ai-agents",
    animationDelay: 300,
  },
];

const ctaSection = {
  title: "Join Our Partner Ecosystem and Accelerate Your Growth",
  subtitle:
    "Become part of a thriving network of AI innovators serving the rapidly growing SME market. Apply today to expand your reach, access new customers, and collaborate on the future of AI solutions.",
  primaryCTA: {
    label: "Apply to Partner Program",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Schedule a Partner Consultation",
    href: "/contact",
  },
};

export {
  heroSection,
  benefitList,
  partnerList,
  programList,
  storyList,
  stepList,
  resourceList,
  faqSection,
  relatedProductList,
  ctaSection,
};
