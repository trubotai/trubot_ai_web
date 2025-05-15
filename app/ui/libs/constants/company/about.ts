import {
  Sparkles,
  Share2,
  Layers,
  RefreshCw,
  Users,
  ShieldCheck,
  Scale,
  Lock,
  Leaf,
  Accessibility,
  Brain,
  Settings2,
  RefreshCcw,
  TrendingUp,
  Zap,
  CircleSlash2,
} from "lucide-react";

const missionList = [
  {
    audience: "Making AI Accessible",
    subtitle:
      "We create solutions that don't require data science expertise to implement or use effectively.",
    benefits: [
      {
        icon: Accessibility,
        text: "Designed for ease of use and wide adoption.",
      },
    ],
  },
  {
    audience: "Ensuring Practical Value",
    subtitle:
      "We focus on real-world business outcomes, not just building impressive technology.",
    benefits: [{ icon: Settings2, text: "Prioritizing usability and ROI." }],
  },
  {
    audience: "Ethical AI Development",
    subtitle:
      "We build AI systems that are transparent, fair, and human-first in their design.",
    benefits: [
      { icon: ShieldCheck, text: "Committed to responsible innovation." },
    ],
  },
  {
    audience: "Continuous Innovation",
    subtitle:
      "We stay on the cutting edge of AI research and make it useful for everyday business.",
    benefits: [
      { icon: Brain, text: "Turning new ideas into actionable tools." },
    ],
  },
];

const approachList = [
  {
    title: "Human-Centered AI",
    description:
      "We design all our solutions with humans at the center. Our AI technologies enhance human capabilities, streamline workflows, and free people to focus on creative, strategic, and interpersonal work that machines cannot replicate.",
    icon: Sparkles,
  },
  {
    title: "Integrated Ecosystem",
    description:
      "Unlike point solutions, our platform provides an integrated ecosystem where different AI capabilities work together seamlessly, reducing complexity and maximizing value.",
    icon: Share2,
  },
  {
    title: "SME-First Design",
    description:
      "We specifically design our technologies with small and medium enterprises in mind, requiring minimal specialized expertise, extensive resources, or massive datasets to implement successfully.",
    icon: Layers,
  },
  {
    title: "Continuous Learning",
    description:
      "Our AI systems continuously learn and improve from user interactions and feedback, ensuring solutions become more valuable over time as business needs evolve.",
    icon: RefreshCw,
  },
];

const valueList = [
  {
    title: "Empowerment Through Technology",
    description:
      "We design AI tools that enhance human capability and create meaningful opportunities for growth, creativity, and productivity.",
    icon: Zap,
  },
  {
    title: "Accessibility and Inclusion",
    description:
      "We ensure that advanced AI technologies are within reach for organizations of all sizes, making innovation inclusive.",
    icon: Users,
  },
  {
    title: "Transparency and Trust",
    description:
      "We communicate openly about how our systems work, how data is used, and their limitations to build long-term trust.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Innovation",
    description:
      "We stay at the forefront of AI and continually evolve our solutions to meet the needs of a dynamic market.",
    icon: RefreshCcw,
  },
  {
    title: "Measurable Impact",
    description:
      "We measure success by the outcomes we help our clients achieve — not just technical metrics but business results.",
    icon: TrendingUp,
  },
];

const commitmentList = [
  {
    question: "Ethical Development",
    answer:
      "We adhere to rigorous ethical standards in our AI development process, considering potential impacts on users, society, and the environment. All new features are reviewed by our internal ethics committee before release.",
    icon: Scale,
  },
  {
    question: "Data Privacy and Security",
    answer:
      "We follow industry-leading security practices and provide full transparency about how data is used. Our systems give customers control over their information and ensure safe usage at all times.",
    icon: Lock,
  },
  {
    question: "Bias Mitigation",
    answer:
      "We actively identify and reduce biases in our AI systems through diverse training data, regular audits, and iterative improvements. We view fairness as a continuous journey, not a checkbox.",
    icon: CircleSlash2,
  },
  {
    question: "Environmental Responsibility",
    answer:
      "We optimize AI systems for computational efficiency to reduce energy usage and environmental impact, aligning innovation with sustainability.",
    icon: Leaf,
  },
];

const ctaSection = {
  title: "Ready to explore how AI can transform your business?",
  subtitle:
    "Our team is here to help you navigate the possibilities and find solutions that make a real difference.",
  primaryCTA: {
    label: "Contact Our Team",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Learn More About Our Solutions",
    href: "/solutions",
  },
};

export { missionList, approachList, valueList, commitmentList, ctaSection };
