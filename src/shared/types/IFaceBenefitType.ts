import { BenefitPage } from "../enums/benefitPageTypes";

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
  selectedPage: BenefitPage;
}
