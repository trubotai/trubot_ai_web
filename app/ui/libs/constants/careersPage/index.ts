import { CareerPageData } from "../../types/careerPage";

import { executiveAssistantPageData } from "./assistant-operations-founder";
import { COOPageData } from "./chief-operations-officer";
import { CSOPageData } from "./chief-sales-officer";
import { CTOPageData } from "./chief-technology-officer";
import { headFundraisingPageData } from "./head-fundraising";
import { headHumanResourcesPageData } from "./head-human-resources";
import { headMAPageData } from "./head-mergers-acquisitions";
import { headProductsPageData } from "./head-products";
import { headSalesCountryPageData } from "./head-sales-country";
import { HRInternPageData } from "./intern-human-resources";
import { productMarketingInternPageData } from "./intern-product-marketing";
import { salesMarketingInternPageData } from "./intern-sales-marketing";
import { fullStackDeveloperInternPageData } from "./intern-technology-fullstack-developer";
import { leadProductDesignerPageData } from "./lead-product-designer";
import { fundraisingManagerPageData } from "./manager-fundraising";
import { humanResourcesManagerPageData } from "./manager-human-resources";
import { MASpecialistManagerPageData } from "./manager-mergers-acquisitions-specialis";
import { customerSuccessManagerPageData } from "./manager-operations-customer-success";
import { productManagerPageData } from "./manager-product";
import { projectManagerPageData } from "./manager-project";
import { fullStackEngineeringManagerPageData } from "./manager-technology-fullstack-engineering";

export const careerPagesMap: Record<string, CareerPageData> = {
  "assistant-operations-founder": executiveAssistantPageData,
  "chief-operations-officer": COOPageData,
  "chief-sales-officer": CSOPageData,
  "chief-technology-officer": CTOPageData,
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
  "manager-fundraising": fundraisingManagerPageData,
  "manager-human-resources": humanResourcesManagerPageData,
  "manager-mergers-acquisitions-specialist": MASpecialistManagerPageData,
  "manager-operations-customer-success": customerSuccessManagerPageData,
  "manager-product": productManagerPageData,
  "manager-project": projectManagerPageData,
  "manager-technology-fullstack-engineer": fullStackEngineeringManagerPageData,
};
