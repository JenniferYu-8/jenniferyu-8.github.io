"use client";

import { projectsData } from '../lib/data'
import Image from 'next/image';
import { useScroll } from 'framer-motion'
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({title, description, tags, imageUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref} 
            style={{scale: scaleProgress, opacity: opacityProgress}}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section 
            className="bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition-all block
                dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200 duration-500">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-100/70 transition-colors duration-500">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-gray-100/70 transition-colors duration-500" key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="mx-auto flex items-center justify-center">
                    <Image src={imageUrl} alt={title} quality={95} className="sm:absolute top-8 -right-40  h-[20rem] w-auto sm:w-[28.25rem] sm:h-auto rounded-t-lg shadow-2xl 
                    group-even:right-[initial] group-even:-left-40 sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:rotate-2
                    sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.04] transition"/>
                </div>
            </section>

        </motion.div>

    );
}