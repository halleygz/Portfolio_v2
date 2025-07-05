import ProjectList from "@/components/Projects/ProjectList";
import Heading from "@/components/Shared/Heading";
import { ProjectCardProps } from "@/types/ComponentProps";

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "My Portfolio",
      description: "A sleek portfolio built with Next.js.",
      imageUrl: "/globe.png",
      technologies: ["JavaScript"],
      link: "googa"
    },
    {
      title: "E-commerce App",
      description: "Full-stack store with Stripe integration.",
      imageUrl: "/globe.png",
      technologies: ["JavaScript"],
      link: "googa"
    },
    {
      title: "Minigit",
      description: "Full-stack store with Stripe integration.",
      imageUrl: "/globe.png",
      technologies: ["JavaScript"],
      link: "googa"
    },
  ];
  return (
    <div>
      <header>
        <Heading content="Projects" />
      </header>
      <ProjectList projectLists={projects}/>
    </div>
  );
}
