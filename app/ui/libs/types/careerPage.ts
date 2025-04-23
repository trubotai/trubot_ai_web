export interface CareerPageDataType {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  about: string;
  roleIntro: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  workingHours?: string; // New field (optional)
  compensation?: string; // New field (optional)
  applyInstructions: string;
  applyEmail: string;
}
