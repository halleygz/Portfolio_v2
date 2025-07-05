import { ProjectCardProps } from '@/types/ComponentProps'

const ProjectCard:React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    technologies,
    link,
}) => {
  return (
    <div className="border border-gray-800 overflow-hidden hover:translate-x-1 hover:translate-y-1 transition font-mono">
      <img src={imageUrl} alt={title} className="w-full h-54 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="">{description}</p>
        <div className='hidden'>{technologies} {link}</div>
      </div>
    </div>
  )
}

export default ProjectCard
