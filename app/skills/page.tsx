import Heading from "@/components/Shared/Heading";
import SkillsList from "@/components/Skills/SkillsList";
import { SkillCardProps } from "@/types/ComponentProps";

export default function Skills() {
  const skills:SkillCardProps[] = [
    {
      setName: "Languages and Tools",
      set: ["JavaScript", "Python", "TypeScript", "C++", "Bash", "SQL", "Matplotlib", "Pandas", "Github Actions", "Docker", "HTML", "CSS"]
    },
    {
      setName: "Front end and Design",
      set: ["NextJS", "Tailwindcss", "Figma"]
    },
    {
      setName: "Back end",
      set: ["NodeJS", "ExpressJS", "NestJS", "TypeScript", "Python Flask"]
    },
  ]
  return (
    <div>
      <header className="mb-4 sm:mb-6 lg:mb-8">
        <Heading content="Skills"/>
      </header>
      <SkillsList skills={skills}/>
    </div>
  );
}
