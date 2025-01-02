"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.3);
    const { theme } = useTheme();
  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-full" id="experience">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light" ? '#f3f4f6' : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                // transitionDuration: "0.5s",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? '0.4rem solid  #9ca3af': '0.4rem solid rgba(255, 255, 255, 0.3)',
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "#192338",
                                // transitionDuration: "0.5",
                                border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.05)" : "1px solid rgba(255, 255, 255, 0.05)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0 text-gray-600 dark:text-gray-100/60 transition-colors duration-500">{item.location}</p>
                            <p className="!mt-2 font-normal text-gray-700 dark:text-gray-100/75 transition-colors duration-500">
                                {item.description.split("\n").map((line, index) => (
                                    <span key={index} className="block mb-1">
                                        {line}
                                    </span>
                                ))}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
            ))}
        </VerticalTimeline>
    </section>
  )
}


