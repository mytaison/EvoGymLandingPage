import { SelectedPage } from "@/shared/enums/pageTypes";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeaderText from "@/shared/components/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const ContactUs = ({ setSelectedPage }: Props) => {
  const headerText = (
    <span>
      <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
    </span>
  );
  const passageText =
    "Don't miss this opportunity to join our gym and get in shape with our amazing facilities, classes, and trainers. Whether you want to lose weight, gain muscle, or just feel better, our gym is the perfect place for you.";

  const inputStyle =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
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
          <HeaderText children={headerText}></HeaderText>
          <p className="my-5 text-sm">{passageText}</p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 sm:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-10 basic-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              //   action="https://formsubmit.co/el/hotezo"
              action="https://formsubmit.co/mehedihasan.devpro@gmail.com"
            >
              <input
                type="text"
                className={inputStyle}
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 ">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              <input
                type="text"
                className={inputStyle}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500 ">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                  {errors.email.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className={inputStyle}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 ">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16 basic-2/5 md:mt-0 sm:mt-10"
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
