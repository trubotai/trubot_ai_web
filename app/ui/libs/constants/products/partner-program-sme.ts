const partnerList = [
  {
    title: "Solution Partners",
    description:
      "Ideal for companies offering AI-powered products or services that solve SME challenges.",
    requirements: [
      "Proven AI solution with customer success",
      "SME-friendly pricing",
      "Commitment to customer support excellence",
      "Integration capability with our platform",
    ],
    benefits: [
      "Marketplace listing",
      "Lead generation",
      "Co-marketing opportunities",
      "Technical integration support",
    ],
    applyLabel: "Apply as Solution Partner",
    applyLink: "/contact",
  },
  {
    title: "Implementation Partners",
    description:
      "Perfect for consulting firms helping SMEs implement and optimize AI solutions.",
    requirements: [
      "Proven expertise in AI implementation",
      "Certified technical staff",
      "Documented customer success",
      "Commitment to implementation standards",
    ],
    benefits: [
      "Access to opportunities",
      "Technical training and certification",
      "Joint proposal development",
      "Marketing support",
    ],
    applyLabel: "Apply as Implementation Partner",
    applyLink: "/contact",
  },
  {
    title: "Technology Partners",
    description:
      "Designed for companies providing the underlying tech infrastructure for AI deployments.",
    requirements: [
      "Enterprise-grade technology",
      "Scalable platform capabilities",
      "Commitment to security and reliability",
      "Technical documentation available",
    ],
    benefits: [
      "Technical certification",
      "Joint solution development",
      "Reference architecture publication",
      "Innovation collaboration",
    ],
    applyLabel: "Apply as Technology Partner",
    applyLink: "/contact",
  },
];

const programList = [
  {
    title: "Registered Partner",
    description: "Entry-level tier for new partners starting their journey.",
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
    description:
      "For partners with proven customer success and platform engagement.",
    benefits: [
      "Enhanced marketplace visibility",
      "Lead sharing program access",
      "Co-marketing opportunities",
      "Technical integration support",
    ],
    requirements: [
      "5+ customer implementations",
      "Completed technical integration",
      "Partner certification",
      "Quarterly business reviews",
    ],
  },
  {
    title: "Gold Partner",
    description:
      "Strategic collaboration tier for significant success and alignment.",
    benefits: [
      "Premium marketplace placement",
      "Dedicated partner manager",
      "Joint marketing campaigns",
      "Early access to new features",
    ],
    requirements: [
      "15+ customer implementations",
      "Customer satisfaction score >90%",
      "Joint business plan",
      "Executive sponsorship",
    ],
    highlight: true,
  },
];

const storyList = [
  {
    title: "AI Analytics Provider",
    challenge:
      "Struggled to reach SME customers due to limited marketing resources and enterprise perception.",
    solution:
      "Joined our partner program, accessed SME market, received integration support, participated in co-marketing.",
    results: [
      "200% increase in SME customer acquisition",
      "40% reduction in sales cycle",
      "5 successful joint marketing campaigns",
      "New SME-focused product features developed",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
  {
    title: "Industry-Specific AI Solution",
    challenge: "Great AI tech for manufacturing but lacked SME reach.",
    solution:
      "Leveraged partner program, adapted for SME needs, industry-focused marketing.",
    results: [
      "Expanded to 3 new geographic markets",
      "150+ new SME customers in 12 months",
      "35% revenue growth",
      "Developed SME-specific offering",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
];

const stepList = [
  {
    stepNumber: 1,
    title: "Apply",
    description:
      "Complete our quick application form with your solution and company details.",
  },
  {
    stepNumber: 2,
    title: "Onboard",
    description:
      "Access the partner portal, complete training, and prepare for integration.",
  },
  {
    stepNumber: 3,
    title: "Integrate",
    description:
      "Align your solution technically for seamless customer experience.",
  },
  {
    stepNumber: 4,
    title: "Launch",
    description: "Go live on our marketplace and start co-marketing efforts.",
  },
  {
    stepNumber: 5,
    title: "Grow",
    description: "Expand your reach, move up the tiers, and scale your impact.",
  },
];

const resourceList = [
  {
    title: "Partner Portal",
    description:
      "Access sales tools, marketing assets, training materials, and lead management – all in one place.",
    linkLabel: "Learn About Portal",
    linkHref: "/contact",
  },
  {
    title: "Technical Documentation",
    description:
      "Integration guides, API references, and best practices to streamline your technical onboarding.",
    linkLabel: "View Documentation",
    linkHref: "/contact",
  },
  {
    title: "Marketing Toolkit",
    description:
      "Download co-branded templates, campaign materials, and customer success frameworks.",
    linkLabel: "Explore Toolkit",
    linkHref: "/contact",
  },
  {
    title: "Training and Certification",
    description:
      "Upskill your sales and technical teams with our comprehensive training and certification programs.",
    linkLabel: "View Certification Paths",
    linkHref: "/contact",
  },
];

const faqList = [
  {
    question: "What are the costs associated with joining the partner program?",
    answer:
      "There are no upfront fees. We operate on a success-based commission model depending on customer acquisition and retention.",
  },
  {
    question: "How long does the application and onboarding process take?",
    answer:
      "Typically 4-6 weeks, including application review, agreement signing, technical integration, and marketplace listing.",
  },
  {
    question: "What technical requirements must my solution meet?",
    answer:
      "API integration capability, single sign-on support, security compliance (SOC 2 or equivalent), and performance standards.",
  },
  {
    question: "How are leads generated and shared with partners?",
    answer:
      "Through our AI marketplace, digital marketing campaigns, industry events, and direct sales activities based on customer fit.",
  },
  {
    question: "Can I maintain direct sales while participating?",
    answer:
      "Yes, our partner program complements your existing sales channels without exclusivity requirements.",
  },
];

const productList = [
  {
    title: "AI Marketplace",
    description:
      "Showcase your AI solutions in a curated marketplace connecting SMEs to cutting-edge tools.",
    linkLabel: "Learn More",
    linkHref: "/products/ai-marketplace",
  },
  {
    title: "Strategic Sourcing for SMEs",
    description:
      "Get discovered by SME buyers actively seeking tailored AI solutions through our sourcing engine.",
    linkLabel: "Learn More",
    linkHref: "/products/strategic-sourcing",
  },
  {
    title: "AI Agents",
    description:
      "Integrate your capabilities into our autonomous AI agents for expanded functionality.",
    linkLabel: "Learn More",
    linkHref: "/products/ai-agents",
  },
];

export {
  partnerList,
  programList,
  storyList,
  stepList,
  resourceList,
  faqList,
  productList,
};
