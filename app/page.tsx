"use client"
import AnimatedTabs from "@/components/AnimatedTab";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/Portfolio-Card";
import PortfolioAnimate from "@/components/PortfolioAnimate";
import { tabStore } from "@/store/TabStore";
import { AnimatePresence, motion } from 'framer-motion';


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
     <section className="flex items-center justify-center">

     </section>
    </>
  )
}
