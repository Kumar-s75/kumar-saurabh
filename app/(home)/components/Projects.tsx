import React from 'react'
import { SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { cn } from 'lib/utils'
import { StarsBackground } from './ui/stars-background'
export default function Projects() {

const projects=[
    {
        title:":E-Learning Platform (onlydekh)",
        tech:[SiNextdotjs,SiReactquery,SiSupabase,SiTailwindcss],
        Link:"",
        cover:"",
        background:"bg-indigo-500",
    },
    {
        title:":E-Learning Platform (onlydekh)",
        tech:[SiNextdotjs,SiReactquery,SiSupabase,SiTailwindcss],
        Link:"",
        cover:"",
        background:"bg-green-500",
    }
]


  return <div className='py-10 p-5 sm:p-0'>
        <Title 
        text="Projects "
        className="flex flex-col items-center justify-center -rotate-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">

{projects.map((project,index)=>{

return <Link href={project.Link} key={index} >
    <div className={cn("p-5 rounded-md",project.background)}>
<DirectionAwareHover
imageUrl={project.cover}
className='w-full space-y-5 cursor-pointer'
>

<div className='space-y-5 '>
<StarsBackground></StarsBackground>
<h1 className='text-2xl  font-bold'>{project.title}</h1>
<div className="flex items-center gap-5">
    {project.tech.map((Icon,index)=>{
  return <Icon 
  className='w-8 h-8'
  key={index} />
    })}
</div>
</div>

</DirectionAwareHover>
    </div>
</Link>
})}

        </div>
    </div>

}


