'use client'

import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/card-hover-effect';
import { SiNodedotjs, SiReact, SiTailwindcss, SiNextdotjs, SiJavascript, SiExpress, SiPython, SiC, SiDjango, SiCplusplus } from 'react-icons/si';
import { StarsBackground } from './ui/stars-background';
import { startupSnapshot } from 'v8';
export default function Skills() {
    
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Nodejs",
            Icon: SiNodedotjs,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Expressjs",
            Icon: SiExpress,
        },
        {
            text: "Python",
            Icon: SiPython,
        },
        {
            text: "C",
            Icon: SiC,
        },
        {
            text: "django",
            Icon: SiDjango,
        },
        {
            text: "C++",
            Icon: SiCplusplus,
        },
    ];

    return (
        <div className='max-w-5xl mx-auto px-8 '>
            <StarsBackground></StarsBackground>
            <Title text="Skills" className='flex flex-col items-center justify-center -rotate-6' />
            
            <HoverEffect items={skills} />
            
        </div>
       
    );
}

