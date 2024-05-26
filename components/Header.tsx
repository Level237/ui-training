import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <section className='max-h-36   mt-5 flex mx-8 items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Image className='rounded-full' width="30" height="30" src="/img3.jpg" alt={''}/>
        <h2 className='text-2xl text-white font-bold'>Agence XYZ</h2>
      </div>
      <ul className='flex text-white gap-12 justify-between'>
        <li>
         Formations
        </li>
        <li>
         Solutions digitales
        </li>
        <li>
          Portfolio
        </li>
        <li>
        Contactez nous
        </li>
      </ul>
      <div>
        <Button className='text-black'>Get Started</Button>
      </div>
    </section>
    </>
  )
}
