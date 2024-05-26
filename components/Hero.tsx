import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section>
      <div className='flex flex-col gap-8 items-center mt-[8rem] justify-center'>
        <div>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#f6ea0b] to-red-500 text-center  text-[4rem] leading-none font-bold'>Reveillez le Graphiste <br /> qui sommeille en vous. </h2>
            
        </div>
       <div className=''>
        <p className='text-white text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ddzz Lorem ipsum dolor sit<br />  amet consectetur adipisicing elit.</p>
       </div>
        <div>
            <Button className='text-black hover:bg-primary py-6 px-12 bg-gradient-to-r from-[#f6ea0b] to-red-500  text-md '>Découvrir nos formations</Button>
        </div>
        <div className='flex gap-5 mt-12'>
          <div className="flex items-center justify-center -space-x-3">
          <Image loading="lazy" width="400" height="400" src="/photo1.jpeg" alt="member photo" className="h-[2.9rem] border w-[2.9rem] rounded-full object-cover"/>
        <Image loading="lazy" width="400" height="400" src="/photo1.jpeg" alt="member photo" className="h-[2.9rem] border w-[2.9rem] rounded-full object-cover"/>
        <Image loading="lazy" width="400" height="400" src="/photo1.jpeg" alt="member photo" className="h-[2.9rem] border w-[2.9rem] rounded-full object-cover"/>
        <Image loading="lazy" width="400" height="400" src="/photo1.jpeg" alt="member photo" className="h-[2.9rem] w-[2.9rem] border rounded-full object-cover"/>
          </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row gap-1'>
            <Star className='w-5 h-5 text-primary fill-current'/>
            <Star className='w-5 h-5 text-primary fill-current'/>
            <Star className='w-5 h-5 text-primary fill-current'/>
            <Star className='w-5 h-5 text-primary fill-current'/>
            <Star className='w-5 h-5 text-primary fill-current'/>
          </div>
          <div className='text-white'>
            <h2 className='font-bold'>ils nous aiment!</h2>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  )
}
