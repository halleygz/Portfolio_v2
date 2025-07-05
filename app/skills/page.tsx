import Heading from "@/components/Shared/Heading";
import SkillsList from "@/components/Skills/SkillsList";
import { SkillCardProps } from "@/types/ComponentProps";

export default function Skills() {
  const skills:SkillCardProps[] = [
    {
      setName: "Languages",
      set: [ "JavaScript", "TypeScript", "Python", "C++", "Go", "HTML", "CSS","SQL"]
    },
    {
      setName: "Front end",
      set: ["ReactJS", "Tailwindcss"]
    },
    {
      setName: "Back end",
      set: ["NodeJS", "ExpressJS", "NestJS", "TypeScript", "Python Flask"]
    },
  ]
  return (
    <div>
      <header>
        <Heading content="Skills"/>
      </header>
      <SkillsList skills={skills}/>
    </div>
  );
}
