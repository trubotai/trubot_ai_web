import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discord,
  linkedIn,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  searchMd,
  slack,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "1",
    title: "About us",
    url: "#about-us",
  },
  {
    id: "2",
    title: "Careers",
    url: "#careers",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const trubotaiServices = [
  "AI Chatbots",
  "AI Agents",
  "Voice AI – Voice Bots",
  "Social Media Management",
  "Automated Invoice Management",
  "AI Marketplace",
  "AI Product SME Aggregator",
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const careerList = [
  {
    id: "0",
    title: "Software Engineer",
    description:
      "Develop, test, and maintain software applications for clients in a dynamic, fast-paced environment.",
    qualifications: [
      "Bachelor's degree in Computer Science",
      "2+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js.",
    ],
  },
  {
    id: "1",
    title: "Product Manager",
    description:
      "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications: [
      "Bachelor's degree in Business or Engineering",
      "3+ years of product management experience",
      "Excellent communication and organizational skills.",
    ],
  },
  {
    id: "2",
    title: "UX/UI Designer",
    description:
      "Design user-friendly interfaces and experiences for our software applications, ensuring a seamless user journey.",
    qualifications: [
      "Bachelor's degree in Design or related field",
      "2+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: "3",
    title: "Marketing Specialist",
    description:
      "Develop and implement marketing strategies to promote our products and services, driving brand awareness and customer engagement.",
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of experience in digital marketing",
      "Strong analytical skills and proficiency in marketing tools.",
    ],
  },
];

export const solutionsList = [
  {
    id: "0",
    title: "AI Chatbots – Text-Based",
    text: "TrubotAI offers AI-powered chatbots for various platforms to automate interactions, enhance customer engagement, and streamline operations.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI Agents – Automate and Optimize",
    text: "TrubotAI’s AI agents are designed to automate and optimize specific business functions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Voice AI – Voice Bots",
    text: "TrubotAI is expanding into voice-enabled AI solutions for seamless customer engagement.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Social Media Management",
    text: "TrubotAI provides tools and services to enhance your social media presence and marketing efforts.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Automated Invoice Management",
    text: "Streamline invoicing, reminders, and payment collections with AI-driven solutions.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "AI Marketplace",
    text: "Explore a marketplace of AI tools and solutions tailored to your business needs.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://www.linkedin.com/company/trubot-ai/",
  },
];

export const jobPostings = [
  {
    id: "0",
    title: "Software Engineer",
    location: "Remote, Worldwide",
    text: "Develop, test, and maintain software applications for clients in a dynamic, fast-paced environment.",
    qualifications:
      "Bachelor's degree in Computer Science, 2+ years of experience in software development, Proficiency in JavaScript, React, and Node.js.",
    applyUrl: "/apply/software-engineer",
    postedAt: "2025-04-01",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
  {
    id: "1",
    title: "Product Manager",
    location: "Remote, Worldwide",
    text: "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications:
      "Bachelor's degree in Business or Engineering, 3+ years of product management experience, Excellent communication and organizational skills.",
    applyUrl: "/apply/product-manager",
    postedAt: "2025-03-28",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
];

export const careersPageList = [
  {
    id: "0",
    title: "Software Engineer",
    description:
      "Develop, test, and maintain software applications for clients in a dynamic, fast-paced environment.",
    qualifications: [
      "Bachelor's degree in Computer Science",
      "2+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js.",
    ],
  },
  {
    id: "1",
    title: "Product Manager",
    description:
      "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications: [
      "Bachelor's degree in Business or Engineering",
      "3+ years of product management experience",
      "Excellent communication and organizational skills.",
    ],
  },
  {
    id: "2",
    title: "UX/UI Designer",
    description:
      "Design user-friendly interfaces and experiences for our software applications, ensuring a seamless user journey.",
    qualifications: [
      "Bachelor's degree in Design or related field",
      "2+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: "3",
    title: "Marketing Specialist",
    description:
      "Develop and implement marketing strategies to promote our products and services, driving brand awareness and customer engagement.",
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of experience in digital marketing",
      "Strong analytical skills and proficiency in marketing tools.",
    ],
  },
  {
    id: "4",
    title: "Software Engineer",
    description:
      "Develop, test, and maintain software applications for clients in a dynamic, fast-paced environment.",
    qualifications: [
      "Bachelor's degree in Computer Science",
      "2+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js.",
    ],
  },
  {
    id: "5",
    title: "Product Manager",
    description:
      "Lead the development of new products and enhance existing ones, collaborating with cross-functional teams.",
    qualifications: [
      "Bachelor's degree in Business or Engineering",
      "3+ years of product management experience",
      "Excellent communication and organizational skills.",
    ],
  },
  {
    id: "6",
    title: "UX/UI Designer",
    description:
      "Design user-friendly interfaces and experiences for our software applications, ensuring a seamless user journey.",
    qualifications: [
      "Bachelor's degree in Design or related field",
      "2+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: "7",
    title: "Marketing Specialist",
    description:
      "Develop and implement marketing strategies to promote our products and services, driving brand awareness and customer engagement.",
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of experience in digital marketing",
      "Strong analytical skills and proficiency in marketing tools.",
    ],
  },
];
