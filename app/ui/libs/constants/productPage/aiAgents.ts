import { ProductPageData } from "../../types/productPage";

export const aiAgentsPageData: ProductPageData = {
  id: "agents",
  title: "AI Agents Built for Sales, Support, and Growth",
  description:
    "Automate complex workflows across your customer journey using purpose-built AI agents for your business teams.",
  platforms: [
    {
      name: "Sales Agent",
      feature: "Qualify leads, respond instantly, and book meetings",
      icon: "📞",
    },
    {
      name: "Marketing Agent",
      feature: "Deliver campaigns, manage content, and analyze performance",
      icon: "📢",
    },
    {
      name: "Customer Support Agent",
      feature: "Resolve queries, escalate issues, and update customers 24/7",
      icon: "💬",
    },
    {
      name: "Shopping Assistant",
      feature: "Guide customers to products, upsell, and support checkout",
      icon: "🛍️",
    },
    {
      name: "AI Agent Studio",
      feature: "Build, train, and customize your own AI agents with no code",
      icon: "🧠",
    },
  ],
  steps: [
    "Choose your agent type",
    "Configure tasks and integrations",
    "Train your agent on company data",
    "Deploy and monitor performance",
  ],
  industries: [
    "eCommerce",
    "SaaS",
    "Healthcare",
    "Real Estate",
    "Education",
    "Finance",
  ],
};
