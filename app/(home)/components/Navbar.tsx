import { cn } from 'lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";
export default function Navbar({className}:{className?:string}) {
const socials=[


    {
        Link:"https://www.linkedin.com/in/kumar-saurabh786/",
        Label:"LinkedIn",
        Icon:SiLinkedin,

    },
    {
        Link:"https://github.com/Kumar-s75",
        Label:"Github",
        Icon:SiGithub,

    },
    {
        Link:"https://x.com/Kumars_27",
        Label:"X",
        Icon: SiX,

    },
];





  return <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
<h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>

    KumarSaurabh
</h1>
<div className='flex items-center gap-5'>
    {socials.map((social,index)=>{

const Icon=social.Icon

        return <Link href={social.Link} key={index} aria-label={social.Label}>
            <Icon className='w-5 h-5 hover:scale-150 transition-all'/>
        </Link>
    })}
</div>
    </nav>
  
}


