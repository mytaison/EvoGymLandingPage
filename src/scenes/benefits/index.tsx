import HeaderText from "@/shared/components/HeaderText";
import { BenefitPage } from "@/shared/enums/benefitPageTypes";
import { SelectedPage } from "@/shared/enums/pageTypes";
import { BenefitType } from "@/shared/types/IFaceBenefitType";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import ActionButton from "@/shared/components/ActionButton";
import BenefitGraphicImg from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"></HomeModernIcon>,
    title: "State of the Art Facilities",
    description:
      "At our gym, you will find state of the art facilities that cater to your every fitness need, from cutting-edge cardio machines to spacious studios for yoga and pilates.",
    selectedPage: BenefitPage.Facilites,
  },
  {
    icon: <UserGroupIcon className="w-6 h-6"></UserGroupIcon>,
    title: "100's of Diverse Classes",
    description:
      "Whether you want to build strength, improve flexibility, or burn calories, our gym offers hundreds of diverse classes to suit your fitness goals and preferences.",
    selectedPage: BenefitPage.Classes,
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6"></AcademicCapIcon>,
    title: "Expert and Pro Trainers",
    description:
      "Our gym boasts a team of expert and pro trainers who can guide you through personalized workouts, nutrition plans, and fitness challenges.",
    selectedPage: BenefitPage.Trainers,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const headerText = "more than just gym.";
  const passageText =
    "We provide world class fitness equipment, trainers, and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.";

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5 md:my-5"
        >
          <HeaderText>{headerText.toUpperCase()}</HeaderText>
          <p className="my-5 text-sm">{passageText}</p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                // selectedPage={benefit.selectedPage}
              ></BenefitCard>
            );
          })}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:flex md:mt-28">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitGraphicImg}
            alt="benefit-page-graphic"
          />
          {/* TITLE AND DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-3/5 md:my-5"
                >
                  <HeaderText>
                    MILLIONS OF HAPPY CUSTOMERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HeaderText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:w-3/5 md:my-5"
            >
              <p className="my-5">
                Join the millions of happy members who are getting fit at our
                gym. Whether you are a beginner or a pro, you will find a
                friendly and supportive community that will motivate you to
                achieve your fitness goals. Our gym is more than just a place to
                work out, it is a lifestyle that will transform your body and
                mind.
              </p>
              <p className="mb-5">
                Our gym is not only the best in the city, but also the most
                affordable. For a low monthly fee, you get unlimited access to
                all our state of the art facilities, hundreds of diverse
                classes, and expert and pro trainers. No matter what your
                schedule, budget, or fitness level, our gym has something for
                you. Don’t wait, sign up today and start your fitness journey
                with us.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
