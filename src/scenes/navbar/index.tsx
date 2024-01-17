// import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import NavLink from "./NavLink";
import { SelectedPage } from "@/shared/enums/pageTypes";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ActionButton from "@/shared/components/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <>
      <nav className="">
        <div
          className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              {/* LEFT SIDE */}
              <img src={Logo} alt="logo" />
              {/* RIGHT SIDE */}
              {isAboveMediumScreen ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <NavLink
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    ></NavLink>
                    <NavLink
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    ></NavLink>
                    <NavLink
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    ></NavLink>
                    <NavLink
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    ></NavLink>
                  </div>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Become a Member
                    </ActionButton>
                  </div>
                </div>
              ) : (
                // MOBILE NAVBAR
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  <Bars3Icon className="w-6 h-6 text-white"></Bars3Icon>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* CLOSE BUTTON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
              </button>
            </div>
            {/* NAV TABS */}
            <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
              <NavLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></NavLink>
              <NavLink
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></NavLink>
              <NavLink
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></NavLink>
              <NavLink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
