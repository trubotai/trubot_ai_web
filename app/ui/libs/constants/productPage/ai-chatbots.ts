import { BadgeCheck, UserCheck, Globe, Users, Repeat } from "lucide-react";

const featureList = [
  {
    icon: BadgeCheck,
    title: "Advanced Natural Language Understanding",
    description:
      "Our AI chatbots understand the nuances of human language, recognizing intent, context, and sentiment to provide relevant responses that address the true meaning behind customer queries.",
  },
  {
    icon: UserCheck,
    title: "Hyper-Personalization",
    description:
      "Leverage customer data and interaction history to deliver personalized experiences that make customers feel understood and valued, increasing satisfaction and conversion rates.",
  },
  {
    icon: Globe,
    title: "Omnichannel Deployment",
    description:
      "Deploy the same intelligent chatbot across your website, mobile app, social media platforms, messaging apps, and more—providing a seamless experience regardless of channel.",
  },
  {
    icon: Users,
    title: "Seamless Human Handoff",
    description:
      "Intelligent escalation protocols ensure complex issues are transferred to human agents at the right moment, with full conversation context for a smooth transition.",
  },
  {
    icon: Repeat,
    title: "Continuous Improvement",
    description:
      "Our chatbots employ machine learning to continuously improve from customer interactions, feedback, and outcomes, becoming more effective over time.",
  },
];

const useCaseList = [
  {
    title: "Customer Support",
    subtitle: "24/7 Intelligent Assistance",
    description:
      "Provide instant, accurate responses to customer inquiries around the clock, resolving common issues without human intervention while ensuring complex cases are properly escalated.",
    results: [
      "80% of routine inquiries resolved without human assistance",
      "Average response time reduced from hours to seconds",
      "45% reduction in support costs",
      "35% improvement in customer satisfaction scores",
    ],
  },
  {
    title: "Lead Generation and Qualification",
    subtitle: "Convert More Visitors into Qualified Leads",
    description:
      "Engage website visitors proactively, answer product questions, qualify prospects, and schedule meetings with sales representatives—all through natural conversation.",
    results: [
      "60% increase in lead capture rate",
      "40% improvement in lead quality",
      "30% reduction in cost per qualified lead",
      "25% higher conversion rates from lead to opportunity",
    ],
  },
  {
    title: "E-commerce Sales",
    subtitle: "Guide Customers to Purchase",
    description:
      "Help customers find products, answer questions, provide recommendations, and facilitate checkout, creating a personalized shopping assistant that drives revenue.",
    results: [
      "35% increase in conversion rates",
      "28% higher average order value",
      "45% reduction in cart abandonment",
      "50% increase in repeat purchases",
    ],
  },
  {
    title: "Internal Employee Support",
    subtitle: "Streamline Internal Operations",
    description:
      "Provide employees with instant access to information, automate HR processes, and support IT troubleshooting, improving productivity and reducing operational costs.",
    results: [
      "70% reduction in time spent searching for information",
      "50% decrease in routine HR inquiries to staff",
      "40% faster resolution of common IT issues",
      "30% improvement in employee satisfaction with internal services",
    ],
  },
];

export { featureList, useCaseList };
