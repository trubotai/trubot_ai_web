const stepList = [
  {
    number: 1,
    title: "Assess Your Needs",
    description:
      "Complete our comprehensive assessment to evaluate your business needs, technical environment, data readiness, and team capabilities. Our AI analyzes your responses to create a personalized roadmap.",
  },
  {
    number: 2,
    title: "Explore Curated Solutions",
    description:
      "Receive tailored recommendations from our extensive catalog of pre-vetted AI solutions specifically suited to SME requirements and constraints.",
  },
  {
    number: 3,
    title: "Compare and Select",
    description:
      "Use our interactive comparison tools to evaluate solutions based on features, cost, implementation complexity, and customer reviews from businesses similar to yours.",
  },
  {
    number: 4,
    title: "Implementation Support",
    description:
      "Access step-by-step implementation guides, technical documentation, and expert support to ensure successful deployment with minimal disruption.",
  },
  {
    number: 5,
    title: "Measure and Optimize",
    description:
      "Track performance metrics, identify improvement opportunities, and receive ongoing recommendations to enhance your AI investments over time.",
  },
];

const storyList = [
  {
    company: "Regional Manufacturing Company",
    challenge:
      "Needed to improve production efficiency and quality control but lacked technical expertise to evaluate AI solutions.",
    solution:
      "Implemented a computer vision quality inspection system and predictive maintenance solution tailored to their equipment and budget.",
    results: [
      "35% reduction in quality defects",
      "40% decrease in unplanned downtime",
      "6-month ROI on both solutions",
      "Implementation completed with existing IT staff",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/case-studies/manufacturing",
  },
  {
    company: "Professional Services Firm",
    challenge:
      "Wanted to automate document processing and client communication but was overwhelmed by the number of AI options.",
    solution:
      "Adopted document intelligence and client communication assistant solutions that integrated with their systems.",
    results: [
      "70% reduction in document processing time",
      "45% improvement in client response time",
      "$150,000 annual cost savings",
      "Deployed in under 30 days",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/case-studies/professional-services",
  },
  {
    company: "E-commerce Retailer",
    challenge:
      "Needed to personalize customer experiences and optimize inventory but had limited data science capabilities.",
    solution:
      "Implemented a personalization engine and inventory optimization solution designed for SME e-commerce businesses.",
    results: [
      "28% increase in average order value",
      "35% reduction in stockouts",
      "22% improvement in customer retention",
      "Completed without hiring data scientists",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/case-studies/ecommerce",
  },
];

const faqList = [
  {
    question: "How is this different from going directly to AI vendors?",
    answer:
      "Our platform provides vendor-neutral recommendations based on your specific needs, not sales incentives. We evaluate hundreds of solutions against consistent criteria, saving you countless hours of research. Plus, we negotiate SME-friendly pricing unavailable through direct purchasing.",
  },
  {
    question: "Do I need technical expertise to use your platform?",
    answer:
      "No. Our platform is designed specifically for SMEs without extensive technical resources. We provide clear, jargon-free guidance and recommend solutions matching your technical capabilities. Implementation guidance is tailored for non-technical teams too.",
  },
  {
    question: "How do you ensure the quality of recommended solutions?",
    answer:
      "Every solution undergoes rigorous evaluation — security assessment, performance testing, SME suitability review, and customer reference checks. We continuously monitor solution performance and feedback to maintain standards.",
  },
  {
    question: "What if I'm not sure what AI solutions my business needs?",
    answer:
      "Our AI readiness assessment and consultation services help you identify the most valuable opportunities for AI in your specific business. We focus on delivering measurable ROI, not just implementing technology for the sake of it.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Most SME-focused solutions in our catalog can be implemented in 2–8 weeks. Each recommendation includes an estimated implementation timeline customized to your business readiness and solution complexity.",
  },
];

export { stepList, storyList, faqList };
