import { ProductPageData } from "../../types/productPage";

export const aiChatbotsPageData: ProductPageData = {
  id: "chatbots",
  title: "AI Chatbots for Every Channel",
  description:
    "Engage leads, support customers, and drive conversions 24/7 with intelligent chat experiences.",
  platforms: [
    {
      name: "WhatsApp",
      feature: "Bulk replies, automation, CRM sync",
      icon: "📱",
    },
    { name: "Instagram", feature: "DM automation, lead capture", icon: "📷" },
    {
      name: "Telegram",
      feature: "Real-time messaging, support automation",
      icon: "✈️",
    },
    {
      name: "WordPress",
      feature: "Live chat, surveys, form automation",
      icon: "📰",
    },
    {
      name: "Shopify",
      feature: "Cart recovery, order tracking, support",
      icon: "🛒",
    },
    {
      name: "Microsoft Teams",
      feature: "Workflow automation, internal support",
      icon: "💼",
    },
  ],
  steps: [
    "Choose your platform",
    "Integrate in minutes",
    "Train your AI assistant",
    "Launch and optimize",
  ],
  industries: [
    "eCommerce",
    "Agencies",
    "Healthcare",
    "SaaS",
    "Education",
    "Finance",
  ],
};
