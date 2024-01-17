import { SelectedPage } from "@/shared/enums/pageTypes";
import { ClassType } from "@/shared/types/IFaceClassType";
import HeaderText from "@/shared/components/HeaderText";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

// import { Carousel } from "react-responsive-carousel";
import Class from "./Class";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training classes are designed to help you build muscle, increase strength, and improve your overall fitness.",
    image: image1,
  },
  {
    name: "Ab Core Classes",
    description:
      "Ab core classes are designed to help you tone and sculpt your abdominal muscles, improve your posture, and enhance your stability.",
    image: image2,
  },
  {
    name: "Fitness Classes",
    description:
      "Fitness classes are designed to help you improve your cardiovascular health, burn calories, and have fun with a variety of exercises.",
    image: image3,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga classes are designed to help you relax your body and mind, increase your flexibility, and balance your energy.",
    image: image4,
  },
  {
    name: "Strength Training Classes",
    description:
      "Strength training classes are designed to help you boost your metabolism, prevent injuries, and build a strong and lean physique.",
    image: image5,
  },
  {
    name: "Aerobic Classes",
    description:
      "Aerobic classes are designed to help you improve your heart health, endurance, and mood with a range of rhythmic and energetic exercises.",
    image: image6,
  },
];

// const getConfigurableProps = () => ({
//   showArrows: true,
//   showStatus: false,
//   showIndicators: true,
//   infiniteLoop: true,
//   showThumbs: false,
//   useKeyboardArrows: true,
//   autoPlay: true,
//   stopOnHover: true,
//   swipeable: true,
//   dynamicHeight: false,
//   emulateTouch: true,
//   autoFocus: false,
//   selectedItem: 0,
//   interval: 2000,
//   transitionTime: 500,
//   swipeScrollTolerance: 5,
//   height: "373px",
//   width: "auto",
// });

const OurClasses = ({ setSelectedPage }: Props) => {
  const headerText = "Our Classes";
  const passageText =
    "Whether you are looking for a high-intensity workout, a relaxing stretch, \
    or a fun dance routine, our gym has a class for you. Our classes are led by certified instructors who will make you feel welcome and challenged. \
    You can choose from a variety of options, such as Zumba, HIIT, Yoga, Pilates, Spin, and more.";
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>{headerText.toUpperCase()}</HeaderText>
            <p className="py-5">{passageText}</p>
          </div>
        </motion.div>
        <div className="mt-10 w-full h-[338px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
          {/* <Carousel {...getConfigurableProps()}>
            <div key={1}>
              <img src={image1} alt="image1" />
            </div>
            <div key={2}>
              <img src={image2} alt="image2" />
            </div>
            <div key={3}>
              <img src={image3} alt="image3" />
            </div>
            <div key={4}>
              <img src={image4} alt="image4" />
            </div>
            <div key={5}>
              <img src={image5} alt="image5" />
            </div>
            <div key={6}>
              <img src={image6} alt="image6" />
            </div>
          </Carousel> */}
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
