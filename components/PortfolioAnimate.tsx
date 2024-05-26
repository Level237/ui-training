'use client'
import React from 'react'
import InfiniteCarousel from './InfiniteCarousel'
import { Button } from './ui/button'


export default function PortfolioAnimate() {
  return (
    <div className="mb-20">
      <h1 className="mt-10 mx-8 font-primary text-2xl font-bold tracking-tight text-white dark:text-[#e8d1bb] sm:text-4xl">Attractive Portfolio</h1>
    <InfiniteCarousel/>
    <div className="flex justify-center mt-5 items-center">
    <Button variant="default" className='bg-gradient-to-r from-[#f6ea0b] py-6 to-red-500 text-black px-16'>More Portfolio</Button>
    </div>
    
    </div>
  )
}
