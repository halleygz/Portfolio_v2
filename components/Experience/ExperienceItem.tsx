import { ExperienceItemsProps } from "@/types/ComponentProps";
import TimelineDot from "./TimelineDot";

const ExperienceItem: React.FC<ExperienceItemsProps> = ({
  title,
  description,
  isCurrent,
  duration,
  skills,
  isLatest,
}) => {
  return (
    <div className="relative flex items-start space-x-4 font-mono">
      <div className={`absolute top-0 bottom-0 left-[27px] w-px bg-gray-500 ${(isCurrent || isLatest) && "hidden"}`} />

      <div className="relative z-10 ml-4">
        <TimelineDot isCurrent={isCurrent} isLatest={isLatest} />
      </div>


      <div className="ml-4 mb-8">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p>{description}</p>
        <div className="hidden">{duration} {skills}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
