interface Props {
  title: string;
  img: string;
}

const Card = (props: Props) => {
  const { title, img } = props;

  return (
    <div className="cursor-pointer group">
      <div
        className={`flex justify-start items-end p-4 h-28  bg-blend-soft-light bg-black/40 bg-cover ${img}
                     xl:h-[30rem] xl:text-2xl  group-hover:opacity-50  transition duration-300`}
      >
        <h2
          className="text-white uppercase w-24
                    xl:w-32 group-hover:text-black"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
