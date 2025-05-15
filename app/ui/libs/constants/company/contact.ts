import { HiMail } from "react-icons/hi";

const heroSection = {
  title: "Let's Start Your AI Journey Together",
  subtitle:
    "Our team of AI experts is ready to help you discover the right solutions for your business needs.",
  primaryCTA: {
    label: "Contact Us",
    href: "#email-section",
  },
};

const emailList = [
  {
    audience: "Sales Inquiries",
    subtitle: "Discuss AI solutions tailored to your business needs.",
    benefits: [
      {
        icon: HiMail,
        text: "sales@trubotai.com",
      },
    ],
  },
  {
    audience: "Technical Support",
    subtitle: "Need help? Get fast and reliable technical assistance.",
    benefits: [
      {
        icon: HiMail,
        text: "support@trubotai.com",
      },
    ],
  },
  {
    audience: "Partnership Opportunities",
    subtitle:
      "Collaborate with TruBot AI to create future-ready AI ecosystems.",
    benefits: [
      {
        icon: HiMail,
        text: "gopal@trubotai.com",
      },
    ],
  },
];

const locationList = [
  {
    title: "Florida, USA",
    description:
      "Our North American office driving AI innovation and client success across the US and Canada.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580568.1949590673!2d-83.91955728010085!3d28.78973868809425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1744794685108!5m2!1sen!2sin",
  },
  {
    title: "Chennai, India",
    description:
      "Our Asia-Pacific hub delivering AI solutions and support to businesses across India and Southeast Asia.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313126384!2d80.0438591397053!3d13.047473315886025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1744794552916!5m2!1sen!2sin",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to common questions about our AI solutions and services.",
  faqList: [
    {
      question: "What happens after I submit the contact form?",
      answer:
        "You'll receive an immediate confirmation email, and one of our team members will respond to your inquiry within one business day.",
    },
    {
      question:
        "I'm not sure which solution is right for my business. Who should I contact?",
      answer:
        'Start with our general inquiries contact or use the contact form and select "Not sure" in the interest field. Our team will help guide you to the right solution based on your business needs.',
    },
    {
      question: "Do you offer implementation services?",
      answer:
        "Yes, we provide implementation support for all our solutions. The level of support varies by product and plan. Contact our sales team for specific details related to your needs.",
    },
    {
      question: "How quickly can we implement your solutions?",
      answer:
        "Implementation timelines vary by solution and your organization's readiness. Many of our solutions can be implemented in as little as 2–4 weeks, while more complex enterprise deployments may take 8–12 weeks. Our team can provide a more accurate timeline after understanding your specific requirements.",
    },
    {
      question: "Do you offer custom solutions or only pre-built products?",
      answer:
        "While we offer a comprehensive suite of pre-built AI solutions, we understand that some businesses have unique requirements. Our enterprise plans include customization options, and we can develop tailored solutions for specific use cases. Contact our sales team to discuss your custom needs.",
    },
  ],
};

export { heroSection, emailList, locationList, faqSection };
