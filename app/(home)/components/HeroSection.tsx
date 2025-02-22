import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'
import Title from './Title'
import { ShootingStars } from './ui/shooting-stars'
import { StarsBackground } from './ui/stars-background'
function HeroSection() {
  return (
    
      <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between  animate-move-up'>
        

 <div className='space-y-10 text-center lg:text-left'>
        <StarsBackground  >
           </StarsBackground>
        <ShootingStars minSpeed={15} starWidth={10} starHeight={15} >
 </ShootingStars>
 
 <h1 className='text-4xl lg:text-7xl font-bold'>
 Nice to meet you! 👋 <br/><span className='underline underline-offset-8 decoration-green-500'>{"I'm Kumar Saurabh."} </span>
        </h1>
           
        <p className='md:w-96 text-lg text-gray-300'>
           {
           "Based in India, I'm a FullStack developer passionate about building a modern web application that users love and integratee xcitin features in it."
        
        }  
        </p>
        <Link href={"mailto:kumarsaurabh27d@gmail.com"} className="inline-block group">
           
           <Title text="Contact Me 📩"/>
       </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
<div className='flex gap-3 translate-x-8'>
<div className='w-32 h-32 rounded-2xl bg-green-500'></div>
<div className='w-32 h-32 rounded-full bg-indigo-500'></div>

</div>



<div className='flex gap-3 -translate-x-8'>
<div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
<div className='w-32 h-32 rounded-full bg-green-500'></div>

</div>
<div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 ">


        
        <MovingBorderBtn duration={1} borderRadius='0.5rem' className='p-4 font-semibold'>
            <p>📢 Available for Work</p>
        </MovingBorderBtn>
        </div>
      </div>
  

        
        </div>
    
  )
}

export default HeroSection
