import { aiChatbotsPageData } from "./aiChatbots";
import { aiAgentsPageData } from "./aiAgents";
import { voicePageData } from "./voiceAI";
import { socialToolsPageData } from "./socialMediaTools";
import { customSolutionsPageData } from "./customSolutions";
import { otherToolsPageData } from "./otherTools";
import { ProductPageDataType } from "../../types/productPage";

export const productPagesMap: Record<string, ProductPageDataType> = {
  chatbots: aiChatbotsPageData,
  agents: aiAgentsPageData,
  voice: voicePageData,
  social: socialToolsPageData,
  custom: customSolutionsPageData,
  tools: otherToolsPageData,
};
