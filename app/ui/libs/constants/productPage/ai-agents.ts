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

export { featureList, useCaseList };
