"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiLinkExternal } from "react-icons/bi"
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tweed",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                 <Image src="/jyu-logo-colour.png" alt="Jennifer Yu" width="192" height="192" quality="95" priority={true} className="h-24 w-auto drop-shadow-xl"></Image>
            </motion.div>
        </div>
        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Hi! I'm <span className="font-bold">Jennifer Yu</span>, a <span className="font-bold">Software Engineering</span> student at the <span className="font-bold">University of Waterloo. </span>
            I’m particularly interested in <span className="font-bold">machine learning</span> and <span className="font-bold">front-end development</span>.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <a href="/resume-jennifer-yu.pdf" target="_blank" className="bg-gray-900 text-white px-9 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer">Resume <BiLinkExternal className="opacity-80"/></a>

            <div className="flex gap-2"> 
                <a href="https://www.linkedin.com/in/jennifer-yu-on/" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><BsLinkedin /></a>
                <a href="https://github.com/JenniferYu-8" target="_blank" className="bg-white p-[0.88rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><FaGithubSquare /></a>
                <a href="mailto:jenniferyu.on@gmail.com" className="bg-white p-[0.88rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><MdEmail /></a>

                
            </div>
        </motion.div>
    </section>
  )
}
