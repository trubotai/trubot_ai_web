import {
  UserCheck,
  Globe,
  Brain,
  Handshake,
  TrendingUp,
  Headset,
  MonitorSmartphone,
  ShoppingCart,
  Users,
  MessageSquare,
  PlugZap,
  ShieldCheck,
  Sliders,
  Mic,
  Zap,
} from "lucide-react";

const heroSection = {
  title: "AI Chatbots: Intelligent Conversations That Drive Results",
  subtitle:
    "Transform customer engagement with AI chatbots that deliver personalized, human-like interactions across all your digital channels.",
  primaryCTA: {
    label: "Start Free Trial",
    href: "/contact",
  },
  secondaryCTA: {
    label: "See Live Demo",
    href: "/contact",
  },
};

const featureList = [
  {
    title: "Advanced Natural Language Understanding",
    subtitle: "Comprehend Intent, Not Just Keywords",
    description:
      "Our AI chatbots understand the nuances of human language, recognizing intent, context, and sentiment to provide relevant responses that address the true meaning behind customer queries.",
    icon: Brain,
  },
  {
    title: "Hyper-Personalization",
    subtitle: "Tailored Interactions for Every Customer",
    description:
      "Leverage customer data and interaction history to deliver personalized experiences that make customers feel understood and valued, increasing satisfaction and conversion rates.",
    icon: UserCheck,
  },
  {
    title: "Omnichannel Deployment",
    subtitle: "Consistent Experience Everywhere",
    description:
      "Deploy the same intelligent chatbot across your website, mobile app, social media platforms, messaging apps, and more—providing a seamless experience regardless of channel.",
    icon: Globe,
  },
  {
    title: "Seamless Human Handoff",
    subtitle: "Perfect Balance of Automation and Human Touch",
    description:
      "Intelligent escalation protocols ensure complex issues are transferred to human agents at the right moment, with full conversation context for a smooth transition.",
    icon: Handshake,
  },
  {
    title: "Continuous Improvement",
    subtitle: "Gets Smarter with Every Interaction",
    description:
      "Our chatbots employ machine learning to continuously improve from customer interactions, feedback, and outcomes, becoming more effective over time.",
    icon: TrendingUp,
  },
];

const useCaseList = [
  {
    icon: Headset,
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
    icon: Users,
    title: "Lead Generation and Qualification",
    subtitle: "Convert More Visitors into Qualified Leads",
    description:
      "Engage website visitors proactively, answer product questions, qualify prospects, and schedule meetings with sales representatives—all through natural conversation.",
    results: [
      "60% increase in lead capture rate",
      "40% improvement in lead quality",
      "300% reduction in cost per qualified lead",
      "25% higher conversion rates from lead to opportunity",
    ],
  },
  {
    icon: ShoppingCart,
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
    icon: MonitorSmartphone,
    title: "Internal Employee Support",
    subtitle: "Streamline Internal Operations",
    description:
      "Provide employees with instant access to information, automate HR processes, and support IT troubleshooting, improving productivity and reducing operational costs.",
    results: [
      "70% reduction in time spent searching for information",
      "500% decrease in routine HR inquiries to staff",
      "40% faster resolution of common IT issues",
      "30% improvement in employee satisfaction with internal services",
    ],
  },
];

const techSpecList = [
  {
    icon: MessageSquare,
    title: "Conversational AI Technology",
    items: [
      "Natural Language Processing: State-of-the-art NLP with 95%+ intent recognition accuracy",
      "Context Management: Maintains conversation context across multiple turns and sessions",
      "Sentiment Analysis: Real-time emotion detection to adapt tone and responses",
      "Multi-language Support: 30+ languages with native-level understanding",
    ],
  },
  {
    icon: PlugZap,
    title: "Integration Capabilities",
    items: [
      "Website Integration: Simple JavaScript snippet or WordPress plugin",
      "Mobile SDK: Native SDKs for iOS and Android applications",
      "Messaging Platforms: Facebook Messenger, WhatsApp, Telegram, and more",
      "Business Systems: Connect to CRM, e-commerce, ticketing, and knowledge base systems",
    ],
  },
  {
    icon: Sliders,
    title: "Customization Options",
    items: [
      "Visual Builder: No-code conversation designer for business users",
      "Advanced Customization: Developer tools for complex use cases",
      "Appearance Editor: Brand-aligned visual customization",
      "Analytics Dashboard: Comprehensive insights and performance metrics",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    items: [
      "Enterprise-grade Security: SOC 2 Type II certified",
      "Data Protection: GDPR and CCPA compliant",
      "Encryption: End-to-end encryption for all conversations",
      "Data Residency: Regional hosting options for regulatory compliance",
    ],
  },
];

const pricingSection = {
  monthly: [
    {
      name: "Starter",
      price: "$800/month",
      features: [
        "Up to 5,000 conversations",
        "5 standard chatbot templates",
        "Basic customization",
        "Business hours support",
        "Standard analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,500/month",
      features: [
        "Up to 25,000 conversations",
        "Unlimited custom chatbots",
        "Advanced customization",
        "24/7 priority support",
        "Advanced analytics",
        "A/B testing capabilities",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited conversations",
        "Custom development",
        "Dedicated success manager",
        "Premium support SLA",
        "Full analytics suite",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$720/month (billed annually)",
      features: [
        "Up to 5,000 conversations",
        "5 standard chatbot templates",
        "Basic customization",
        "Business hours support",
        "Standard analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,250/month (billed annually)",
      features: [
        "Up to 25,000 conversations",
        "Unlimited custom chatbots",
        "Advanced customization",
        "24/7 priority support",
        "Advanced analytics",
        "A/B testing capabilities",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited conversations",
        "Custom development",
        "Dedicated success manager",
        "Premium support SLA",
        "Full analytics suite",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
};

const caseStudyList = [
  {
    title: "Global Retail Brand",
    challenge:
      "High volume of repetitive customer service inquiries causing long wait times and increasing support costs.",
    solution:
      "Implemented AI chatbots across website, mobile app, and Facebook Messenger to handle product questions, order tracking, and returns processing.",
    results: [
      "75% of customer inquiries resolved without human intervention",
      "Customer satisfaction increased by 40%",
      "$2.1M annual support cost savings",
      "24/7 support coverage without additional staffing",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
  {
    title: "B2B Software Company",
    challenge:
      "Long sales cycles and inefficient lead qualification process limiting growth.",
    solution:
      "Deployed AI chatbots to engage website visitors, qualify leads, answer product questions, and schedule demos with sales representatives.",
    results: [
      "55% increase in qualified leads",
      "Sales cycle reduced by 35%",
      "45% of demos automatically scheduled through chatbot",
      "Marketing team refocused on strategic initiatives",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about our chatbot platform.",
  faqList: [
    {
      question: "How quickly can we implement your chatbot solution?",
      answer:
        "Basic implementation can be completed in as little as one week, with more complex integrations taking 2–4 weeks. Our implementation team works closely with you to ensure a smooth deployment and quick time-to-value.",
    },
    {
      question: "Can the chatbot integrate with our existing systems?",
      answer:
        "Yes, our chatbots integrate seamlessly with most CRM systems, e-commerce platforms, knowledge bases, and ticketing systems through our extensive library of pre-built connectors. For specialized systems, our professional services team can develop custom integrations.",
    },
    {
      question: "How do you handle chatbot training and improvement?",
      answer:
        "Initial training is based on your existing knowledge base, FAQs, and conversation logs. After deployment, the chatbot continuously learns from interactions and feedback. Our platform includes tools for monitoring performance and making improvements based on actual customer conversations.",
    },
    {
      question: "What languages do your chatbots support?",
      answer:
        "Our platform currently supports over 30 languages with native-level understanding, including English, Spanish, French, German, Chinese, Japanese, Arabic, and more. We regularly add new languages based on customer demand.",
    },
    {
      question: "How do you measure chatbot performance and ROI?",
      answer:
        "Our analytics dashboard provides comprehensive metrics on conversation volume, resolution rates, customer satisfaction, and business outcomes. We work with you to establish KPIs aligned with your business goals and provide regular performance reviews to ensure you're achieving maximum ROI.",
    },
  ],
};

const relatedProductList = [
  {
    icon: Zap,
    title: "AI Agents",
    description:
      "Extend your chatbot capabilities with autonomous AI agents that can perform complex tasks and make decisions across your business systems.",
    link: "/products/ai-agents",
  },
  {
    icon: Mic,
    title: "AI Voice Bots",
    description:
      "Complement your chatbot strategy with intelligent voice assistants for a consistent experience across voice channels.",
    link: "/products/ai-voicebots",
  },
  {
    icon: MessageSquare,
    title: "Social Media Tools",
    description:
      "Integrate chatbots into your social media strategy for enhanced customer engagement and support.",
    link: "/products/social-media-tools",
  },
];

const ctaSection = {
  title: "Ready to Transform Customer Engagement with Intelligent Chatbots?",
  subtitle:
    "Join thousands of forward-thinking companies using our AI chatbots to deliver exceptional customer experiences, generate qualified leads, and drive business growth.",
  primaryCTA: {
    label: "Start Your Free Trial",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Schedule a Personalized Demo",
    href: "/contact",
  },
};

export {
  heroSection,
  featureList,
  useCaseList,
  techSpecList,
  pricingSection,
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
};
