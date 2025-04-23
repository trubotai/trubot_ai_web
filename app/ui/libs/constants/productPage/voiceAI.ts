import { ProductPageDataType } from "../../types/productPage";

const voicePageData: ProductPageDataType = {
  id: "voice",
  title: "Voice AI for Smart, Scalable Customer Conversations",
  description:
    "Add AI-powered voice automation to your inbound and outbound workflows — from support calls to follow-ups and scheduling.",
  platforms: [
    {
      name: "Voice Bots",
      feature: "Automated support, updates, and feedback collection",
      icon: "🎙️",
    },
    {
      name: "Voice Assistants",
      feature: "Conversational IVRs and AI routing",
      icon: "📞",
    },
    {
      name: "Voice-enabled Chatbots",
      feature: "Combine voice and chat experiences",
      icon: "💬",
    },
    {
      name: "Outbound Voice Campaigns",
      feature: "Automate calls for reminders, promos, and alerts",
      icon: "📣",
    },
    {
      name: "Smart Voice Analytics",
      feature: "Transcripts, tone analysis, and summaries",
      icon: "📊",
    },
  ],
  steps: [
    "Pick your voice use case",
    "Integrate with your call platform",
    "Train voice intents & flows",
    "Deploy with live fallback options",
  ],
  industries: [
    "Healthcare",
    "Logistics",
    "Education",
    "Banking",
    "Insurance",
    "Telecom",
  ],
};

export { voicePageData };
