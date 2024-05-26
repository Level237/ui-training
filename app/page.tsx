"use client"
import AnimatedTabs from "@/components/AnimatedTab";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/Portfolio-Card";
import PortfolioAnimate from "@/components/PortfolioAnimate";
import { Button } from "@/components/ui/button";
import { tabStore } from "@/store/TabStore";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";


export default function Home() {
  const portfolio=tabStore(s=>s.portfolio)
  return (
    <>
    <Header/>
    <Hero/>
    <AnimatedTabs/>
    <div className="grid grid-cols-3 gap-5 mx-16 mb-36">
          <AnimatePresence>
          {portfolio.map(p=>{
            return (
              <motion.div key={p.id}
              initial={{ 
                y:100
               }}
               animate={{ y:0 }}
              >
                  <PortfolioCard key={p.id} src={p.img}/>
              </motion.div>
              
            )
          })}
          </AnimatePresence>
         
        </div>
     <section className="flex mb-32 gap-8 mx-32 items-center">
     <div className='w-[45rem] h-[25rem] bg-black rounded-3xl'>
     <iframe className="w-full h-full" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FByBorisSkillcat%2Fvideos%2F1932892647164506%2F&show_text=true&width=560&t=0" width="560" height="429" style={{ border:'none',overflow:'hidden' }} scrolling="no"   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
            </div>
    <div className="flex-1 gap-5 flex flex-col">
      <h2 className="text-white font-extrabold tracking-tight leading-none text-4xl">Devenez un pro du montage video avec capcut.</h2>
      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus minima neque necessitatibus voluptatem ut repellendus magni, explicabo itaqu</p>
      <Button className="text-black hover:bg-primary bg-gradient-to-r from-[#f6ea0b] to-red-500">Voir la formation</Button>
    </div>
   
     </section>
     
     <section>
     <PortfolioAnimate/>
     </section>
    </>
  )
}
