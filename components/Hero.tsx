import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section>
      <div className='flex flex-col gap-8 items-center mt-36 justify-center'>
        <div>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#f6ea0b] to-red-500 text-center  text-[4rem] leading-none font-bold'>Reveillez le Graphiste <br /> qui sommeille en vous. </h2>
            
        </div>
       <div className=''>
        <p className='text-white text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ddzz Lorem ipsum dolor sit<br />  amet consectetur adipisicing elit.</p>
       </div>
        <div>
            <Button className='text-black hover:bg-primary py-6 px-12 bg-gradient-to-r from-[#f6ea0b] to-red-500  text-md '>Découvrir nos formations</Button>
        </div>
      </div>
      
    </section>
  )
}
