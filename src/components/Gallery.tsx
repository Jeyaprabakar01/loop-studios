import Card from "./Card";
import Section from "./Section";

const Gallery = () => {
  const cardDetails = [
    {
      title: "deep earth",
      classNames: "bg-img0-sm xl:bg-img0-xl",
    },
    {
      title: "night arcade",
      classNames: "bg-img1-sm xl:bg-img1-xl",
    },
    {
      title: "soccer team vr",
      classNames: "bg-img2-sm xl:bg-img3-xl",
    },
    {
      title: "the grid",
      classNames: "bg-img3-sm xl:bg-img3-xl",
    },
    {
      title: "from up above vr",
      classNames: "bg-img4-sm xl:bg-img4-xl",
    },
    {
      title: "pocket porealis",
      classNames: "bg-img5-sm xl:bg-img5-xl",
    },
    {
      title: "the curiosity",
      classNames: "bg-img6-sm xl:bg-img6-xl",
    },
    {
      title: "make it fisheye",
      classNames: "bg-img7-sm xl:bg-img7-xl",
    },
  ];

  return (
    <Section>
      <section className="px-6 pt-4 xl:px-40 xl:pt-16 mb-40">
        <div className="flex md:justify-between justify-center">
          <h1 className="md:text-5xl text-4xl uppercase font-light">
            Our Creations
          </h1>
          <button className="hidden md:block uppercase tracking-widest border-2 border-gray-900 w-36 hover:bg-black hover:text-white duration-200 transition">
            See All
          </button>
        </div>

        <div
          className="flex flex-col gap-y-4
                      xl:grid xl:grid-cols-4 xl:gap-6 mt-20"
        >
          {cardDetails.map((detail) => {
            return <Card title={detail.title} img={detail.classNames} />;
          })}
        </div>

        <div className="flex justify-center xl:hidden mt-12 ">
          <button className="border-2 border-black tracking-widest uppercase font-semibold p-2 w-32 hover:bg-black hover:text-white duration-200 transition">
            See All
          </button>
        </div>
      </section>
    </Section>
  );
};

export default Gallery;
