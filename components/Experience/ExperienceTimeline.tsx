import React from "react";
import ExperienceItem from "./ExperienceItem";
import { ExperienceProps } from "@/types/ComponentProps";

const ExperienceTimeline: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="pl-8">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <ExperienceItem
            title={exp.title}
            description={exp.description}
            duration={exp.duration}
            isCurrent={exp.isCurrent}
            isLatest={exp.isLatest}
            skills={exp.skills}
            key={exp.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
