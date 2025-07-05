import ProjectCard from "./ProjectCard";
import { ProjectListProps } from "@/types/ComponentProps";

const ProjectList: React.FC<ProjectListProps> = ({ projectLists }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-3/4">
      {projectLists.map((project) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          link={project.link}
          key={project.title}
        />
      ))}
    </div>
  );
};

export default ProjectList;
