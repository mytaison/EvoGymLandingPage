import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/enums/pageTypes";
// import { BenefitPage } from "../enums/benefitPageTypes";

type Props = {
  page: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`text-primary-500 transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
