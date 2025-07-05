import { SkillListProps } from '@/types/ComponentProps'
import React from 'react'
import SkillsCard from './SkillsCard'

const SkillsList:React.FC<SkillListProps> = ({
    skills
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-3/4">
      {skills.map((skill)=> (<SkillsCard setName={skill.setName} set={skill.set} key={skill.setName}/>))}
    </div>
  )
}

export default SkillsList
