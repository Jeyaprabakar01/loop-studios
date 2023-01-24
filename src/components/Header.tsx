import React, { useState } from "react";
import HamburgerIcon from "../assets/icon/icon-hamburger.svg";

const Header = () => {
  const [Menu, setMenu] = useState(false);

  return (
    <main className="bg-mobile-image-hero xl:bg-image-hero h-screen relative bg-cover ">
      <div className="px-6 pt-4 xl:px-40 xl:pt-16">
        <div className="flex items-center justify-between text-white font-['Alata']  ">
          <h1 className="font-bold text-3xl xl:text-4xl">loopstudios</h1>
          <img
            src={HamburgerIcon}
            alt=""
            className="xl:hidden lg:hidden md:hidden"
            onClick={() => setMenu(!Menu)}
          />
          <ul
            className={`gap-10
                      ${
                        Menu
                          ? "absolute gap-6 top-40 left-60 flex flex-col "
                          : "hidden"
                      } xl:flex lg:flex md:flex`}
          >
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="absolute right-1 bottom-80 xl:right-4 xl:bottom-48 mx-auto container flex justify-center md:justify-start">
          <article className="xl:p-10 p-6 xl:ml-44 xl:text-7xl text-4xl xl:w-2/5 w-4/5 border-white border-2">
            <h1 className="uppercase font-light text-white">
              immersive experiences that deliver
            </h1>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Header;
