import { CareerPageDataType } from "../../../types/careerPage";

import { accountsPayrollManagerPageData } from "./manager-accounts-payroll";
import { COOPageData } from "./chief-operations-officer";
import { CSOPageData } from "./chief-sales-officer";
import { CTOPageData } from "./chief-technology-officer";
import { customerSuccessManagerPageData } from "./manager-operations-customer-success";
import { executiveAssistantPageData } from "./assistant-operations-founder";
import { financeAdvisorPageData } from "./board-advisor-finance";
import { fullStackDeveloperInternPageData } from "./intern-technology-fullstack-developer";
import { fullStackEngineeringManagerPageData } from "./manager-technology-fullstack-engineering";
import { fundraisingManagerPageData } from "./manager-fundraising";
import { headFundraisingPageData } from "./head-fundraising";
import { headHumanResourcesPageData } from "./head-human-resources";
import { headMAPageData } from "./head-mergers-acquisitions";
import { headProductsPageData } from "./head-products";
import { headSalesCountryPageData } from "./head-sales-country";
import { HRInternPageData } from "./intern-human-resources";
import { humanResourcesManagerPageData } from "./manager-human-resources";
import { leadProductDesignerPageData } from "./lead-product-designer";
import { legalAdvisorPageData } from "./board-advisor-legal";
import { MASpecialistManagerPageData } from "./manager-mergers-acquisitions-specialis";
import { MLEngineerPageData } from "./engineer-machine-learning";
import { productManagerPageData } from "./manager-product";
import { productMarketingInternPageData } from "./intern-product-marketing";
import { projectManagerPageData } from "./manager-project";
import { salesGrowthAdvisorPageData } from "./board-advisor-sales-growth";
import { salesMarketingInternPageData } from "./intern-sales-marketing";
import { softwareEngineerPageData } from "./engineer-software";
import { technologyAdvisorPageData } from "./board-advisor-technology";
import { performanceMarketerPageData } from "./marketer-performance";
import { socialMediaStrategyLeadPageData } from "./lead-social-media-strategy";
import { vpTechnologyPageData } from "./vp-technology";
import { svpTechnologyAIPageData } from "./svp-technology-ai";
import { graphicDesignerPageData } from "./designer-graphic";
import { uiuxDesignerPageData } from "./designer-uiux";
import { cfoPageData } from "./chief-financial-officer";
import { aiSolutionArchitectPageData } from "./architect-ai-solutions";

export const careerPagesMap: Record<string, CareerPageDataType> = {
  "assistant-operations-founder": executiveAssistantPageData,
  "architect-ai-solutions": aiSolutionArchitectPageData,
  "board-advisor-finance": financeAdvisorPageData,
  "board-advisor-legal": legalAdvisorPageData,
  "board-advisor-sales-growth": salesGrowthAdvisorPageData,
  "board-advisor-technology": technologyAdvisorPageData,
  "chief-financial-officer": cfoPageData,
  "chief-operations-officer": COOPageData,
  "chief-sales-officer": CSOPageData,
  "chief-technology-officer": CTOPageData,
  "designer-graphic": graphicDesignerPageData,
  "designer-uiux": uiuxDesignerPageData,
  "head-fundraising": headFundraisingPageData,
  "head-human-resources": headHumanResourcesPageData,
  "head-mergers-acquisitions": headMAPageData,
  "head-products": headProductsPageData,
  "head-sales-country": headSalesCountryPageData,
  "intern-human-resources": HRInternPageData,
  "intern-product-marketing": productMarketingInternPageData,
  "intern-sales-marketing": salesMarketingInternPageData,
  "intern-technology-fullstack-developer": fullStackDeveloperInternPageData,
  "lead-product-designer": leadProductDesignerPageData,
  "lead-social-media-strategy": socialMediaStrategyLeadPageData,
  "manager-accounts-payroll": accountsPayrollManagerPageData,
  "manager-fundraising": fundraisingManagerPageData,
  "manager-human-resources": humanResourcesManagerPageData,
  "manager-mergers-acquisitions-specialist": MASpecialistManagerPageData,
  "manager-operations-customer-success": customerSuccessManagerPageData,
  "manager-product": productManagerPageData,
  "manager-project": projectManagerPageData,
  "manager-technology-fullstack-engineer": fullStackEngineeringManagerPageData,
  "marketer-performance": performanceMarketerPageData,
  "engineer-machine-learning": MLEngineerPageData,
  "engineer-software": softwareEngineerPageData,
  "svp-technology-ai": svpTechnologyAIPageData,
  "vp-technology": vpTechnologyPageData,
};
