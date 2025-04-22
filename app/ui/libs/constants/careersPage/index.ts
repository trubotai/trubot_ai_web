import { CareerPageData } from "../../types/careerPage";
import { chiefSalesOfficerPageData } from "./chiefSalesOfficer";
import { countryHeadSalesPageData } from "./countryHeadSales";
import { productManagerPageData } from "./productManager";
import { projectManagerPageData } from "./projectManager";
import { fundraisingManagerPageData } from "./fundraisingManager";
import { customerSuccessManagerPageData } from "./customerSuccessManager";
import { mASpecialistManagerPageData } from "./mASpecialistManager";
import { headMAndAPageData } from "./headMAndA";
import { headHRPageData } from "./headHumanResourceOfficer";
import { chiefOperatingOfficerPageData } from "./chiefOperatingOfficer";
import { headFundraisingOfficerPageData } from "./headFundraisingOfficer";
import { headOfProductsPageData } from "./headofProducts";
import { productDesignerLeadPageData } from "./productDesignerLead";
import { hRManagerPageData } from "./humanResourceManager";
import { executiveAssistantPageData } from "./executiveAssistanttoFounder";
import { salesInternPageData } from "./salesAndMarketingIntern";
import { hRInternPageData } from "./hRIntern";
import { productInternPageData } from "./productMarketingIntern";
import { fullStackLeadPageData } from "./fullStackEngineeringManager";
import { cTOPageData } from "./chiefTechnologyOfficer";
import { fullStackDeveloperInternPageData } from "./fullStackDeveloperIntern";

export const careerPagesMap: Record<string, CareerPageData> = {
  "chief-sales-officer": chiefSalesOfficerPageData,
  "country-head-sales": countryHeadSalesPageData,
  "product-manager": productManagerPageData,
  "project-manager": projectManagerPageData,
  "fundraising-manager": fundraisingManagerPageData,
  "customer-success-manager": customerSuccessManagerPageData,
  "m-a-specialist-manager": mASpecialistManagerPageData,
  "head-m-a": headMAndAPageData,
  "head-hr": headHRPageData,
  "chief-operating-officer": chiefOperatingOfficerPageData,
  "head-fundraising-officer": headFundraisingOfficerPageData,
  "head-of-products": headOfProductsPageData,
  "product-designer-lead": productDesignerLeadPageData,
  "hr-manager": hRManagerPageData,
  "executive-assistant-to-founder-and-ceo": executiveAssistantPageData,
  "sales-intern": salesInternPageData,
  "hr-intern": hRInternPageData,
  "product-intern": productInternPageData,
  "full-stack-hands-on-engineering-manager-lead": fullStackLeadPageData,
  "chief-technology-officer": cTOPageData,
  "full-stack-developer-intern": fullStackDeveloperInternPageData,
};
