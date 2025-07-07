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
    <div className="relative flex items-start space-x-4 font-mono full sm:w-2/3 lg:max-w-3/4">
      <div className="absolute top-2 bottom-0 -left-[43px]">
        

        <div className="relative z-10 ml-4">
          <TimelineDot isCurrent={isCurrent} isLatest={isLatest} />
        </div>
      </div>

      <div className="ml-4 mb-8">
        <h3 className="font-semibold text-xl lg:font-light lg:text-4xl">{title}</h3>
        <p>{description}</p>
        <div className="hidden">
          {duration} {skills}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
