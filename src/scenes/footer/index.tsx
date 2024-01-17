import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Welcome to EvoGym, the ultimate destination for your fitness
            journey. Whether you want to work out, relax, or have fun, we have
            everything you need to achieve your goals. Join us today and
            discover the difference EvoGym can make in your life.
          </p>
          <p>&copy; EvoGym All Rights Reserved</p>
        </div>
        <div className="mt-16 basic-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Membership</p>
          <p className="my-5">Fees & Packages</p>
        </div>
        <div className="mt-16 basic-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">172 Jersey Avenue, Mortdale, NSW</p>
          <p className="">(+61)123 456 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
