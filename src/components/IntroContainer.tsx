import IntroImg from "../assets/img/image-interactive.jpg";
import Section from "./Section";

const IntroContainer = () => {
  return (
    <Section>
      <section className="xl:h-screen h-auto flex items-center">
        <div className="  py-20 px-4 xl:px-1 flex flex-col xl:flex-row items-center justify-center">
          <img src={IntroImg} alt="" />
          <div className="bg-white xl:w-2/5 xl:p-20 h-1/2 xl:-ml-44 xl:mt-64 mt-10">
            <h1 className="font-light xl:text-5xl text-4xl text-center xl:text-left">
              THE LEADER IN INTERACTIVE VR
            </h1>
            <p className="mt-10 font-semibold text-gray-400 text-base xl:text-left text-center">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default IntroContainer;
