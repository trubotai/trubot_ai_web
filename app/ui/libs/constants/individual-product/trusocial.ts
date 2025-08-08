import {
  Sparkles,
  Calendar,
  BarChart3,
  Star,
  FileText,
  Bookmark,
  MoreHorizontal,
  Home,
  Plus,
  Users,
} from "lucide-react";
import {
  FaRobot,
  FaComments,
  FaRocket,
  FaPhone,
  FaChartLine,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";

const heroSection = {
  badge: "All in one place.",
  title: {
    main: "Effortless",
    highlight: "Social Media Management",
  },
  subtitle: "Design. Plan. Schedule. Analyse",
  poweredBy: {
    text: "Powered by",
    ai: {
      letter: "A",
      subLetter: "i",
      sparkle: "✦",
    },
  },
  buttons: {
    primary: {
      label: "Join Waitlist",
      href: "/trusocial-waitlist",
      variant: "primary" as const,
    },
    secondary: {
      label: "Book a Demo",
      href: "/demo",
      variant: "outline" as const,
    },
  },
  image: {
    src: "/images/products/landing-hero.png",
    alt: "Woman using TruSocial",
    width: 400,
    height: 500,
  },
};

const benefitList = [
  {
    icon: Sparkles,
    iconColor: "from-teal-100 to-teal-200 text-teal-600",
    title: "AI Content Generator",
    subtitle: "Create stunning visuals with AI",
    description:
      "Create stunning visuals with our advanced AI technology. Generate custom images that perfectly match your brand.",
  },
  {
    icon: Calendar,
    iconColor: "from-blue-100 to-blue-200 text-blue-600",
    title: "Smart Scheduling & Publishing",
    subtitle: "Optimize posting times with AI",
    description:
      "Optimize your posting times with AI-driven scheduling. Reach your audience when they're most active.",
  },
  {
    icon: BarChart3,
    iconColor: "from-green-100 to-green-200 text-green-600",
    title: "Performance Analytics",
    subtitle: "Track your success with insights",
    description:
      "Track your success with detailed analytics. Understand what works and optimize your strategy.",
  },
];

const featureList = [
  {
    icon: Star,
    title: "Smart AI Editor",
    subtitle: "Advanced AI-powered content creation",
    description:
      "Advanced AI-powered content creation with intelligent suggestions and automated design assistance.",
  },
  {
    icon: FileText,
    title: "Quick Prompts",
    subtitle: "Pre-built templates and prompts",
    description:
      "Pre-built templates and prompts to accelerate your content creation workflow.",
  },
  {
    icon: Bookmark,
    title: "Save Your Prompts",
    subtitle: "Store and reuse your favorites",
    description:
      "Store and reuse your favorite prompts and templates for consistent branding.",
  },
  {
    icon: MoreHorizontal,
    title: "Modern and Friendly Design",
    subtitle: "Intuitive interface design",
    description:
      "Intuitive interface designed for professionals with zero learning curve.",
  },
];

const whyChooseList = [
  {
    icon: FaRocket,
    title: "Lightning Fast",
    subtitle: "Create content 10x faster",
    description:
      "Create and schedule content 10x faster than traditional methods. Get more done in less time.",
  },
  {
    icon: FaUserCheck,
    title: "24/7 Support",
    subtitle: "Dedicated support team",
    description:
      "Our dedicated support team is always here to help you succeed. Chat, and email support available.",
  },
  {
    icon: FaClock,
    title: "Save 3+ Hours Weekly",
    subtitle: "Automate your workflow",
    description:
      "Automate your social media workflow and reclaim your time for what matters most.",
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    subtitle: "Real-time insights and monitoring",
    description:
      "Get real-time insights, monitor performance, and understand user behavior to drive smarter decisions.",
    comingSoon: true,
  },
];

const testimonialList = [
  {
    text: `"TruSocial has been a game-changer for our online clothing store. The AI content generator creates stunning visuals that perfectly showcase our latest collections. Our Instagram engagement has increased by 65% since we started using it, and the scheduling feature saves us hours every week!"`,
    name: "Darshan Chobarkar",
    role: "Founder, ClothSphere Enterprises",
    rating: 5,
  },
  {
    text: `"As a small business owner, I was struggling to maintain a consistent social media presence. TruSocial's AI-powered content creation and smart scheduling have transformed our online marketing. We've seen a 40% increase in website traffic and our brand awareness has never been stronger!"`,
    name: "Emily Rodriguez",
    role: "CEO, Bloom & Blossom Florist",
    rating: 4,
  },
  {
    text: `"The platform's intuitive design and powerful features make social media management effortless. The analytics help us understand what content resonates with our audience, and the AI suggestions are spot-on. Highly recommend for any business serious about their social media strategy!"`,
    name: "David Chen",
    role: "Marketing Director, Urban Fitness Co.",
    rating: 5,
  },
];

const pricingPlans = [
  {
    icon: Home,
    title: "Free Trial Starter",
    description: "Ideal for new users exploring the platform capabilities",
    price: "Free Trial / 14 Days",
    features: [
      "25 Credits (trial allocation)",
      "AI Content Generation (text only)",
      "Social Media Posts (up to 300 words)",
      "Content Scheduling (up to 10 posts)",
      "Analytics Dashboard (basic metrics)",
    ],
    buttonLabel: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-purple-600",
  },
  {
    icon: FaClock,
    title: "Basic Plan",
    description:
      "Perfect for small businesses and freelancers - 325 credits for social media posts, product descriptions",
    price: "$50 /month",
    features: [
      "Social Media Management",
      "Content Scheduling",
      "Analytics Dashboard",
    ],
    buttonLabel: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-teal-600",
  },
  {
    icon: Plus,
    title: "Standard",
    description:
      "Ideal for growing businesses and content creators - 720 credits with 10% bonus for consistent blog",
    price: "$100 /month",
    features: [
      "Social Media Management",
      "Content Scheduling",
      "Analytics Dashboard",
    ],
    buttonLabel: "Get Started",
    buttonVariant: "primary" as const,
    popular: true,
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Premium",
    description:
      "Best deal available - 1,150 credits with 15% bonus savings vs lower plans, perfect for agencies and",
    price: "$150 /month",
    features: [
      "Social Media Management",
      "Content Scheduling",
      "Analytics Dashboard",
    ],
    buttonLabel: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-orange-600",
  },
];

const faqList = [
  {
    question: "How does AI content generation work?",
    answer:
      "AI content generation creates social media posts based on user prompts, selected tone, word count, and preferences like emojis or hashtags. Users can choose the platform and post type, upload media (or let AI generate it), and preview the result before publishing.",
  },
  {
    question: "Can I manage multiple social media accounts?",
    answer:
      "Yes! You can manage Facebook, Instagram, LinkedIn, Pinterest, and more—all from a single, easy-to-use dashboard. We're also working on adding your favourite platforms, so stay tuned for more updates!",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Enjoy full access to all Trusocial features with a 14-day free trial—no credit card needed.",
  },
  {
    question: "How does the scheduling feature work?",
    answer:
      "You can easily schedule and posts across all your social media channels. Approval workflows will help you streamline team collaboration. AI-powered posting time recommendations based on audience behaviour are coming soon!",
  },
  {
    question: "What analytics do you provide?",
    answer:
      "Monitor engagement, follower growth, post performance, and overall reach. Get valuable insights to understand what's working and make smarter content decisions.",
  },
  {
    question: "Can I collaborate with my team?",
    answer:
      "Yes! With multi-user roles, shared content calendars, and built-in approval tools, your team can easily collaborate and manage campaigns together—efficiently and seamlessly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Your data is protected with industry-standard encryption, GDPR-compliant practices, and role-based access controls to ensure privacy and security at every level.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our friendly support team is available via chat and email. Premium plan users also get 24/7 assistance for round-the-clock support.",
  },
  {
    question: "Does Trusocial support multilingual content?",
    answer:
      "Yes! Trusocial lets you create and schedule content in over 25 languages—perfect for reaching and engaging global audiences.",
  },
  {
    question: "Is there a mobile version available?",
    answer:
      "A dedicated mobile app is coming soon! In the meantime, you can easily manage content, approve posts, and track analytics on the go with our mobile-friendly website.",
  },
];

const relatedProductList = [
  {
    icon: FaComments,
    title: "AI Chatbots",
    description:
      "Automate customer conversations across all channels with intelligent AI chatbots.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaPhone,
    title: "AI Voicebots",
    description:
      "Transform customer calls with AI-powered voice automation and natural conversations.",
    link: "/products/ai-voicebots",
  },
  {
    icon: FaRobot,
    title: "AI Agents",
    description:
      "Automate complex workflows and business processes with intelligent AI agents.",
    link: "/products/ai-agents",
  },
];

const ctaSection = {
  title: "What Are You Waiting For?",
  subtitle:
    "Join thousands of businesses already using Tru Social to transform their social media presence. Start your free trial today.",
  primaryCTA: {
    label: "Schedule Your First Post Today",
    href: "/trusocial-waitlist",
  },
};

export {
  heroSection,
  benefitList,
  featureList,
  whyChooseList,
  testimonialList,
  pricingPlans,
  faqList,
  relatedProductList,
  ctaSection,
};
