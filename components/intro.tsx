"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiLinkExternal } from "react-icons/bi"
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
                <a href="https://www.linkedin.com/in/jennifer-yu-on/" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"><BsLinkedin /></a>
                <a href="https://github.com/JenniferYu-8" target="_blank" className="bg-white p-[0.88rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"><FaGithubSquare /></a>
                <a href="mailto:jenniferyu.on@gmail.com" className="bg-white p-[0.88rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"><MdEmail /></a>

                
            </div>
        </motion.div>
    </section>
  )
}
