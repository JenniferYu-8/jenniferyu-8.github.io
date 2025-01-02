import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 flex flex-col gap-5 items-center justify-center">
        {/* <p className="text-xs">
            Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p> */}
        <div className="flex gap-3"> 
            <a href="https://www.linkedin.com/in/jennifer-yu-on/" target="_blank" className="bg-white p-[0.8rem] text-gray-700 flex items-center gap-2 rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><BsLinkedin /></a>
            <a href="https://github.com/JenniferYu-8" target="_blank" className="bg-white p-[0.6rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><FaGithubSquare /></a>
            <a href="mailto:jenniferyu.on@gmail.com" className="bg-white p-[0.6rem] text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 duration-500"><MdEmail /></a>
        </div>
        <small className="mb-2 block text-xs">
            &copy; 2024 Jennifer Yu
        </small>
    </footer>
  )
}
