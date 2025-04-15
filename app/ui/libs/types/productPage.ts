export interface Platform {
  name: string;
  feature: string;
  icon?: React.ReactNode;
}

export interface ProductPageData {
  id: string;
  title: string;
  description: string;
  platforms: Platform[];
  steps: string[];
  industries: string[];
}
