import FacebookIcon from "../assets/icon/icon-facebook.svg";
import TwitterIcon from "../assets/icon/icon-twitter.svg";
import PinterestIcon from "../assets/icon/icon-pinterest.svg";
import InstagramIcon from "../assets/icon/icon-instagram.svg";
import logoIcon from "../assets/icon/logo.svg";
import Section from "./Section";

const Footer = () => {
  const navigation = ["About", "Careers", "Events", "Products", "Support"];

  const socialIcon = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon];

  return (
    <footer className="bg-black p-10">
      <Section>
        <div className=" mx-auto flex flex-col items-center xl:items-start xl:flex-row justify-between xl:px-32">
          <div className="flex flex-col gap-5">
            <img className="xl:w-2/5 w-full" src={logoIcon} alt="" />
            <ul className="flex flex-col items-center xl:items-start xl:flex-row text-white gap-2 xl:gap-10">
              {navigation.map((nav, key) => {
                return (
                  <li className="hover:underline cursor-pointer" key={key}>
                    {nav}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col xl:items-end items-center gap-5 mt-10 xl:mt-0">
            <div className="flex items-center gap-3 text-gray-100 text-2xl">
              {socialIcon.map((icon, key) => {
                return (
                  <img
                    key={key}
                    src={icon}
                    alt="icon"
                    className="hover:underline cursor-pointer"
                  />
                );
              })}
            </div>
            <p className="text-gray-400 text-center font-medium opacity-50">
              &copy; 2023 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
