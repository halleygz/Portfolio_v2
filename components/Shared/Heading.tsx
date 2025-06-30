import { HeadingProps } from "@/types/ComponentProps";

const Heading: React.FC<HeadingProps> = ({ content }) => {
  return (
    <div>
      <h1 className="font-mono text-8xl font-thin">{content}</h1>
    </div>
  );
};

export default Heading;
