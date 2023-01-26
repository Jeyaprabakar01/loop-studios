import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section = (props: Props) => {
  const { children } = props;

  return <div className="px-6 xl:px-4">{children}</div>;
};

export default Section;
