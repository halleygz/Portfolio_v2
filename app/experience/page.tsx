import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import Heading from "@/components/Shared/Heading";
import { ExperienceItemsProps } from "@/types/ComponentProps";

export default function Experience() {
  const exps: ExperienceItemsProps[] = [
    {
      title: "Frontend Developer at ABC",
      description: "Built React components...",
      duration: "Apr-June",
    },
    {
      title: "Senior Frontend at XYZ",
      description: "Led UI redesign...",
      duration: "Apr-June",
    },
    {
      title: "Tech Lead at Awesome Co.",
      description: "Currently leading...",
      isCurrent: true,
      duration: "Apr-June",
    },
  ];
  return (
    <div>
      <header>
        <Heading content="Experience" />
      </header>
      <div>
        <ExperienceTimeline experiences={exps}/>
      </div>
    </div>
  );
}
