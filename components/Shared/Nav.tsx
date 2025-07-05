"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const path = usePathname()
  return (
    <nav className='font-mono font-light'>
        <p className='text-3xl font-extralight mb-5'>$cd {path === "/" ? "." : <Link href="/" className="underline">..</Link>}/</p>
        <ul className='text-2xl flex flex-col gap-4'>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/skills">Skills</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
