import {
  Brain,
  Rocket,
  Layers,
  RefreshCw,
  Users,
  MessageCircle,
  DollarSign,
  Truck,
  FileText,
  PlugZap,
  Settings,
  ShieldCheck,
  Cloud,
  Building2,
  ShoppingBag,
} from "lucide-react";

const featureList = [
  {
    icon: Brain,
    title: "Advanced Reasoning Capabilities",
    subtitle: "Beyond Simple Automation",
    description:
      "Our AI agents employ sophisticated reasoning algorithms to understand context, make decisions, and solve complex problems—just like your best employees.",
  },
  {
    icon: Rocket,
    title: "Autonomous Operation",
    subtitle: "Set Goals, Not Steps",
    description:
      "Unlike traditional automation that follows rigid rules, our AI agents understand objectives and independently determine the best path to achieve them.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    subtitle: "Works With Your Existing Systems",
    description:
      "Easily integrate with your current tech stack through our extensive API library and pre-built connectors for popular business applications.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    subtitle: "Gets Smarter Every Day",
    description:
      "Our AI agents learn from every interaction, continuously improving their performance and adapting to changing business conditions.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Collaboration",
    subtitle: "Perfect Balance of Automation and Control",
    description:
      "Maintain appropriate oversight with customizable approval workflows and intuitive interfaces for human-AI collaboration.",
  },
];

const useCaseList = [
  {
    icon: MessageCircle,
    title: "Customer Service Optimization",
    challenge:
      "Complex customer inquiries handled manually caused delays and higher escalation rates.",
    solution:
      "AI agents autonomously resolved queries, accessed systems, and escalated only when needed.",
    results: [
      "65% reduction in average handling time",
      "40% fewer escalations",
      "30% boost in customer satisfaction",
    ],
  },
  {
    icon: DollarSign,
    title: "Sales Process Automation",
    challenge:
      "Manual lead qualification and follow-ups delayed the sales cycle.",
    solution:
      "Agents automated lead triage, proposal generation, and follow-up communication.",
    results: [
      "50% more leads processed",
      "35% shorter sales cycles",
      "25% conversion rate improvement",
    ],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    challenge: "Stockouts and overstocking due to reactive inventory planning.",
    solution:
      "Agents monitored inventory, predicted demand, and optimized supplier orders.",
    results: [
      "45% fewer stockouts",
      "30% less excess inventory",
      "20% better supply chain efficiency",
    ],
  },
  {
    icon: FileText,
    title: "Financial Operations",
    challenge:
      "Manual reconciliation and reporting led to frequent errors and compliance risks.",
    solution:
      "Agents automated reconciliations, detected anomalies, and ensured regulatory compliance.",
    results: [
      "70% reduction in manual work",
      "60% fewer processing errors",
      "40% improvement in audit readiness",
    ],
  },
];

const techSpecList = [
  {
    icon: PlugZap,
    title: "Integration Capabilities",
    bg: "bg-gray-50",
    items: [
      "RESTful APIs and webhook support for seamless integration",
      "Ready-to-use connectors for Salesforce, SAP, Oracle, and more",
      "Professional services for custom integrations",
    ],
  },
  {
    icon: Settings,
    title: "Customization Options",
    bg: "bg-light",
    items: [
      "No-code UI for quick setup by business users",
      "Low-code visual workflow builder for custom processes",
      "Full SDK access for deep developer control",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    bg: "bg-gray-50",
    items: [
      "SOC 2 Type II, ISO 27001, and GDPR compliant",
      "End-to-end encryption and fine-grained access control",
      "Complete audit trails for all agent activity",
    ],
  },
  {
    icon: Cloud,
    title: "Deployment Options",
    bg: "bg-light",
    items: [
      "Fully managed SaaS (cloud-hosted) with 99.9% uptime",
      "Private cloud deployment in your own environment",
      "On-premises option for high-security use cases",
    ],
  },
];

const pricingList = {
  monthly: [
    {
      name: "Starter",
      price: "$1,500/month",
      features: [
        "Up to 5 AI agents",
        "1,000 agent tasks per month",
        "Standard integrations",
        "Email support",
      ],
      cta: "Get Started",
      link: "/start-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,500/month",
      features: [
        "Up to 20 AI agents",
        "10,000 agent tasks per month",
        "Advanced integrations",
        "Priority support",
        "Custom agent training",
      ],
      cta: "Get Started",
      link: "/start-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited AI agents",
        "Unlimited agent tasks",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "On-premises option",
      ],
      cta: "Contact Sales",
      link: "/contact-sales",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$15,000/year",
      features: [
        "Up to 5 AI agents",
        "12,000 agent tasks/year",
        "Standard integrations",
        "Priority email support",
      ],
      cta: "Get Started",
      link: "/start-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$45,000/year",
      features: [
        "Up to 20 AI agents",
        "120,000 agent tasks/year",
        "All integrations",
        "Priority support",
        "Custom agent training",
      ],
      cta: "Get Started",
      link: "/start-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited AI agents",
        "Unlimited tasks",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "On-premises option",
      ],
      cta: "Contact Sales",
      link: "/contact-sales",
      popular: false,
    },
  ],
};

const caseStudyList = [
  {
    title: "Global Financial Services Firm",
    icon: Building2,
    challenge:
      "Processing thousands of compliance documents manually led to delays and inconsistencies.",
    solution:
      "Implemented AI agents to extract key information, flag potential issues, and route for appropriate action.",
    results: [
      "85% faster processing time",
      "95% compliance accuracy",
      "$2.3M saved annually",
      "60% fewer regulatory findings",
    ],
    link: "/case-studies/financial-firm",
    badge: "Finance",
  },
  {
    title: "E-commerce Retailer",
    icon: ShoppingBag,
    challenge:
      "Customer support overwhelmed by repetitive inquiries caused long wait times.",
    solution:
      "AI agents resolved routine queries, accessed orders, and processed returns autonomously.",
    results: [
      "70% of inquiries auto-resolved",
      "Response time cut from 24h to 2m",
      "35% higher customer satisfaction",
    ],
    link: "/case-studies/ecommerce-retailer",
    badge: "Retail",
  },
];

export { featureList, useCaseList, techSpecList, pricingList, caseStudyList };
