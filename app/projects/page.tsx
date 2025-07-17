import ProjectList from "@/components/Projects/ProjectList";
import Heading from "@/components/Shared/Heading";
import { ProjectCardProps } from "@/types/ComponentProps";

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Minigit",
      description:
        "Lightweight git like CLI tool. Includes features like commit, track and add files, view commit logs, branch management",
      imageUrl: "/globe.png",
      technologies: ["C++"],
      link: ["https://github.com/halleygz/minigit"],
    },
    {
      title: "Edu-Pulse",
      description: "An ai powered adaptive learning platform",
      imageUrl: "/globe.png",
      technologies: [
        "TypeScript",
        "MongoDB",
        "ExpressJS",
        "NextJS",
        "Gemni",
        "Python",
      ],
      link: ["https://github.com/halleygz/edu-pulse"],
    },
    {
      title: "Blogaa",
      description: "Full stack blogging application with markdown support",
      imageUrl: "/globe.png",
      technologies: ["ReactJS", "JavaScript", "MongoDB"],
      link: ["https://github.com/halleygz/blog-v3", "https://vercel.com"],
    },
    {
      title: "Fusion Ai",
      description: "Interactive  PDF document reader with ai assitant.",
      imageUrl: "/globe.png",
      technologies: ["NextJs", "TypeScript", "MongoDB", "Gemini"],
      link: ["https://github.com/halleygz/blog-v3",],
    },
  ];
  return (
    <div>
      <header className="mb-6 sm:mb-8 lg:mb-12">
        <Heading content="Projects" />
      </header>
      <ProjectList projectLists={projects} />
    </div>
  );
}
