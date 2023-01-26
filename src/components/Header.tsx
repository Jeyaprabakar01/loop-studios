import { useState } from "react";
import HamburgerIcon from "../assets/icon/icon-hamburger.svg";
import Section from "./Section";

const Header = () => {
  const navigation = ["About", "Careers", "Events", "Products", "Support"];

  const [menu, setMenu] = useState(false);

  return (
    <main className="bg-mobile-image-hero xl:bg-image-hero h-screen relative bg-cover ">
      <Section>
        <div className="px-6 pt-4 xl:px-40 xl:pt-16">
          <div className="flex items-center justify-between text-white font-['Alata']  ">
            <h1 className="font-bold text-3xl xl:text-4xl">loopstudios</h1>
            <img
              src={HamburgerIcon}
              alt=""
              className="xl:hidden lg:hidden md:hidden z-20"
              onClick={() => setMenu(!menu)}
            />

            <ul
              className={`gap-10
                      ${
                        menu
                          ? "absolute gap-6 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black z-10"
                          : "hidden"
                      } xl:flex lg:flex md:flex`}
            >
              {navigation.map((nav, key) => {
                return (
                  <li className="hover:underline cursor-pointer" key={key}>
                    {nav}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="absolute right-1 bottom-80 xl:left-1 xl:bottom-48 mx-auto flex justify-center xl:justify-start">
            <article className="xl:p-10 p-6 xl:ml-44 xl:text-7xl text-4xl xl:w-2/5 w-4/5 border-white border-2">
              <h1 className="uppercase font-light text-white">
                immersive experiences that deliver
              </h1>
            </article>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Header;
