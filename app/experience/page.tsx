import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import Heading from "@/components/Shared/Heading";
import { ExperienceItemsProps } from "@/types/ComponentProps";

export default function Experience() {
  const exps: ExperienceItemsProps[] = [
    {
      title: "Tech lead | Curriclulum Designer at DJ IT Club",
      description: "Designed programming course curriculums, developed personalized learning platforms for schools",
      duration: "Sept 2022 - Jan 2024",
    },
    {
      title: "Tech lead at Brighter Generation",
      description: "Developed data management systems for hospitals",
      duration: "Dec 2022 - April 2023",
    },
    {
      title: "Fullstack Developer at Tison.io",
      description: "Worked with different teams and developed MVPs for 3 startups, delivering projects to enter their seeding fund round.",
      duration: "Sept 2023 - April 2024",
      isLatest: true,
    },
  ];
  return (
    <div>
      <header className="mb-10 sm:mb-12 lg:mb-16">
        <Heading content="Experience" />
      </header>
      <div>
        <ExperienceTimeline experiences={exps}/>
      </div>
    </div>
  );
}
