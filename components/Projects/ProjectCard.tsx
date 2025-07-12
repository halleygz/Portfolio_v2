import { ProjectCardProps } from "@/types/ComponentProps";
import Button from "../Shared/Button";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-between border border-gray-800 overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-all font-mono">
      <div className="hidden">
        <img src={imageUrl} alt={title} className="w-full h-54 object-cover" />
      </div>
      <h3 className="font-semibold text-lg p-4">{title}</h3>{" "}
      <div className="p-4">
        <p className="">{description}</p>
        <div className="flex gap-2 flex-wrap my-2">
          {technologies.map((tech, key) => (
            <Button key={key}>{tech}</Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Link href={link[0]} target="blank">
            <Button className="flex justify-center align-middle cursor-pointer">
              <FaGithub size={20} style={{ verticalAlign: "middle" }} />
            </Button>
          </Link>
          {link[1] && (
            <Link href={`${link[1]}`} target="blank">
              <Button className="flex justify-center align-middle cursor-pointer">
                <FaGlobe size={20} style={{ verticalAlign: "middle" }} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
