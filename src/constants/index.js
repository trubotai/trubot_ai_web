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
    title: "Chief Sales Officer",
    description:
      "Lead the global sales strategy, drive client acquisition, and spearhead revenue growth at a fast-growing AI startup transforming business communication.",
    qualifications: [
      "2 to 15+ years of B2B sales experience (preferably in AI, SaaS, or tech).",
      "Proven ability to negotiate and close high-value deals.",
      "Entrepreneurial mindset with a passion for scaling businesses.",
    ],
  },
  {
    id: "1",
    title: "Hands-on Product Manager",
    description:
      "Lead the roadmap and execution of AI-driven customer support products, working closely with cross-functional teams to build impactful solutions.",
    qualifications: [
      "5+ years of experience in product management, preferably in AI or SaaS.",
      "Strong technical understanding of AI, NLP, and automation technologies.",
      "Ability to balance strategic vision with hands-on execution.",
    ],
  },
  {
    id: "2",
    title: "Project Manager",
    description:
      "Oversee and drive AI-focused projects from inception to completion, ensuring alignment with company goals and seamless cross-functional collaboration.",
    qualifications: [
      "Proven experience in project management, preferably in AI, SaaS, or tech startups.",
      "Experience in agile project management methodologies.",
      "Excellent communication and leadership skills to drive collaboration.",
    ],
  },
  {
    id: "3",
    title: "Fundraising Manager",
    description:
      "Develop and execute fundraising strategies, build investor relations, and secure funding to accelerate growth for a cutting-edge AI startup.",
    qualifications: [
      "5+ years of experience in fundraising, investor relations, or business development.",
      "Proven track record in securing funding for startups or tech ventures.",
      "Strong negotiation and communication skills.",
    ],
  },
  {
    id: "4",
    title: "Customer Success & Client Onboarding Manager",
    description:
      "Ensure smooth onboarding and long-term engagement with AI solutions by guiding clients through setup, support, and continued success strategies.",
    qualifications: [
      "5+ years of experience in customer success, onboarding, or account management.",
      "Experience in AI, SaaS, or B2B technology solutions.",
      "Strong communication and problem-solving skills.",
    ],
  },
  {
    id: "5",
    title: "M&A Specialist Manager",
    description:
      "Drive strategic growth through mergers, acquisitions, and partnerships by identifying opportunities, leading negotiations, and ensuring seamless integrations.",
    qualifications: [
      "Experience negotiating deals in M&A, partnerships, or other business agreements.",
      "Excellent financial analysis, communication, and leadership skills.",
      "Passion for working in a fast-paced startup environment with the ability to drive independent projects.",
    ],
  },
  {
    id: "6",
    title: "Head - M&A",
    description:
      "Lead the M&A strategy by identifying growth opportunities, structuring strategic deals, and overseeing integrations to drive long-term success for an AI startup.",
    qualifications: [
      "Strong ability to evaluate business opportunities and make decisions that align with company growth.",
      "Experience negotiating deals in M&A, partnerships, or other business agreements.",
      "A passion for working in a startup environment, with the drive to scale the company through strategic acquisitions and partnerships.",
    ],
  },
  {
    id: "7",
    title: "Chief Human Resource Officer",
    description:
      "Define and lead the HR strategy across talent acquisition, organizational culture, and employee development to build a high-performing remote team in a growing AI startup.",
    qualifications: [
      "3 to 15+ years of HR experience, preferably in a startup or tech environment.",
      "Proven experience in recruitment, employee engagement, and organizational development.",
      "Strong leadership and communication skills with the ability to influence at all levels.",
    ],
  },
  {
    id: "8",
    title: "Chief Operating Officer",
    description:
      "Build and scale the operational foundation of a fast-growing AI startup by driving efficiency, optimizing processes, and leading cross-functional teams.",
    qualifications: [
      "3 to 15+ years of experience in operations management, preferably in a fast-growing tech or AI startup.",
      "Leadership experience in managing cross-functional teams and driving a high-performance culture.",
      "Strategic thinker with the ability to execute in a dynamic and fast-paced environment.",
    ],
  },
  {
    id: "9",
    title: "Chief Fundraising Officer",
    description:
      "Lead and execute fundraising efforts for a fast-growing AI startup by building investor relationships, crafting persuasive pitches, and managing funding rounds.",
    qualifications: [
      "2 to 15+ years of proven experience in securing funding for startups, with a strong investor network.",
      "Ability to craft persuasive pitches and confidently engage with investors.",
      "Hands-on, self-driven approach to securing funding and scaling startups.",
    ],
  },
  {
    id: "10",
    title: "Human Resource Manager",
    description:
      "Lead recruitment, employee engagement, and HR strategy to build a supportive and high-performing culture at a fast-growing AI startup.",
    qualifications: [
      "3 to 15+ years of HR experience, preferably in a startup or tech environment.",
      "Proven experience in recruitment, employee engagement, and organizational development.",
      "Exceptional communication skills, both written and verbal, with the ability to influence at all levels.",
    ],
  },
  {
    id: "11",
    title: "Executive Assistant to Founder & CEO",
    description:
      "Support the Founder & CEO by managing executive operations, coordinating communication, and executing special projects to drive efficiency and strategic growth at a high-impact AI startup.",
    qualifications: [
      "2+ years supporting C-level executives (startup experience preferred).",
      "Expert-level proficiency in GSuite, Slack, and Zoom.",
      "Superhuman organizational skills with obsessive attention to detail.",
    ],
  },
  {
    id: "12",
    title: "Full Stack Hands-on Engineering Manager/Lead",
    description:
      "Drive the development and innovation of AI-powered customer support solutions by leading full-stack engineering efforts and aligning technical strategy with business goals.",
    qualifications: [
      "At least 5 years of software engineering experience, with a minimum of 2 years in a leadership role.",
      "Expertise in both front-end and back-end development (web, mobile apps).",
      "Proficiency in languages such as Python, Java, or C++, and familiarity with AI frameworks like TensorFlow or PyTorch.",
    ],
  },
  {
    id: "13",
    title: "Chief Technology Officer (CTO)",
    description:
      "Shape and lead the technical vision of a fast-growing AI startup by building scalable infrastructure, driving innovation, and managing high-performing engineering teams.",
    qualifications: [
      "5 to 15+ years of experience in technology leadership, ideally in AI, machine learning, or software tech startups.",
      "Proven track record in developing and scaling AI-driven products and technologies.",
      "Strong leadership experience in building and leading high-performing technical teams.",
    ],
  },
  {
    id: "14",
    title: "Full Stack Developer Intern",
    description:
      "Work alongside experienced developers to build real-world web and mobile applications, enhancing both front-end and back-end skills in a fast-paced AI startup.",
    qualifications: [
      "Basic knowledge of front-end technologies (HTML, CSS, JavaScript) and back-end technologies (Node.js, Python, Java).",
      "Strong problem-solving abilities and a passion for learning new tools and technologies.",
      "Eagerness to grow in a fast-paced environment with adaptability and continuous improvement mindset.",
    ],
  },
];
