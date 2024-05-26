import React from 'react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <>
    <section className='max-h-36   mt-5 flex mx-8 items-center justify-between'>
      <div className=''>
        <h2 className='text-2xl text-white font-bold'>SkillCat</h2>
      </div>
      <ul className='flex text-white gap-12 justify-between'>
        <li>
          Pricing
        </li>
        <li>
          Review
        </li>
        <li>
          Showcase
        </li>
        <li>
         Blog
        </li>
      </ul>
      <div>
        <Button className='text-black'>Get Started</Button>
      </div>
    </section>
    </>
  )
}
