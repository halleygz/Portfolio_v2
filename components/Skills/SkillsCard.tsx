import { SkillCardProps } from '@/types/ComponentProps'
import React from 'react'
import Button from '../Shared/Button'

const SkillsCard:React.FC<SkillCardProps> = ({
    setName,
    set
}) => {
  return (
    <div className='border border-gray-800 overflow-hidden font-mono w-full p-4'>
      <h2 className="text-xl font-light">{setName}</h2>
      <div className="flex gap-2 flex-wrap">
        {set.map((skill)=> (<Button key={skill}>{skill}</Button>))}
      </div>
    </div>
  )
}

export default SkillsCard
