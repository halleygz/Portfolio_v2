import React from 'react'
import Button from './Button'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full font-mono'>
      <h1 className='text-3xl lg:text-7xl font-thin mb-4'>Available on</h1>
      <div className="flex justify-bewteen gap-4 w-full">
        <Button className="flex justify-between items-center align-middle gap-1">
          <FaEnvelope style={{verticalAlign: "middle"}}/>
          Mail
        </Button>
        <Button>LinkedIn</Button>
        <Button>X (Twitter)</Button>
        <Button>Telegram</Button>
        
      </div>
      <p className='font-mono mt-4'>feel free to connect</p>
    </div>
  )
}

export default Footer
