import Link from "@/shared/components/Link";
// import { BenefitPage } from "@/shared/enums/benefitPageTypes";
import { SelectedPage } from "@/shared/enums/pageTypes";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitCard = ({ icon, title, description, setSelectedPage }: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center  w-full md:max-w-2xl"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Link page="Learn More" setSelectedPage={setSelectedPage}></Link>
    </motion.div>
  );
};
export default BenefitCard;
