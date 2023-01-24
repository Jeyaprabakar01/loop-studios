import React from "react";
import Card from "./Card";

const Gallery = () => {
  return (
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
        <Card title="deep earth" img="bg-img0-sm xl:bg-img0-xl" />

        <Card title="night arcade" img="bg-img1-sm xl:bg-img1-xl" />

        <Card title="soccer team vr" img="bg-img2-sm xl:bg-img2-xl" />

        <Card title="the grid" img="bg-img3-sm xl:bg-img3-xl" />

        <Card title="from up above vr" img="bg-img4-sm xl:bg-img4-xl" />

        <Card title="pocket porealis" img="bg-img5-sm xl:bg-img5-xl" />

        <Card title="the curiosity" img="bg-img6-sm xl:bg-img6-xl" />

        <Card title="make it fisheye" img="bg-img7-sm xl:bg-img7-xl" />
      </div>

      <div className="flex justify-center xl:hidden mt-12 ">
        <button className="border-2 border-black tracking-widest uppercase font-semibold p-2 w-32 hover:bg-black hover:text-white duration-200 transition">
          See All
        </button>
      </div>
    </section>
  );
};

export default Gallery;
