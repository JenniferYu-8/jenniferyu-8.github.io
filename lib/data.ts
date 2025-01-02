import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import glasses from "@/public/glasses.png"; // FJ change images
import projectHer from "@/public/projecther.png";
import remberU from "@/public/remberu.png";
import canmun from "@/public/canmun.png";
import emotionDetection from "@/public/emotion-detection.png";
import vsLingoBingo from "@/public/vs-lingo-bingo.png";
import portfolio from "@/public/portfolio.png";
import UWaterloo from "@/icons/uwaterloo";
import BxB from "@/icons/bxb";
import Canmun from "@/icons/canmun";
import YRHacks from "@/icons/yrhacks";
import MapleHS from "@/icons/maplehs";
import YRPC from "@/icons/yrpc";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "More",
    hash: "#more",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering | University of Waterloo",
    location: "Waterloo, ON",
    description: "● Website Director @ Waterloo Engineering Society\n● Core Member @ Wat.ai\n● Class Representative @ SE Society",
    icon: React.createElement(UWaterloo),
    date: "Sept. 2024 - Present",
  },
  {
    title: "Software Engineer Team Lead | Bit by Bit Coding",
    location: "Portland, OR",
    description:
      "● Develop interactive demos with DHTML that have taught 1000+ middle schoolers to code.\n● Provide my team members with feedback on UI/UX design and code quality.",
    icon: React.createElement(BxB),
    date: "July 2021 - Present",
  },
  {
    title: "USG of Technology | CANMUN",
    location: "Toronto, ON",
    description:
      "● Designed and developed the Canada Model UN website.\n● Collaborated with 70+ staff members to organize the first iteration of the nationwide conference.",
    icon: React.createElement(Canmun),
    date: "Dec. 2022 - Aug. 2024",
  },
  {
    title: "International Baccalaureate Diploma | Maple High School",
    location: "Maple, ON",
    description:
      "● IB Grade: 45/45\n● Awards: Governor General’s Academic Medal, Lion’s Club Award, Academic Accomplishment Award (x4)\n● Activities: Computer Science Club (President), Rubik's Cube Club (Founder & President), Model UN (Vice President)",
    icon: React.createElement(MapleHS),
    date: "Sept. 2020 - June 2024",
  },
  {
    title: "Co-Chair | York Region Hacks",
    location: "Toronto, ON",
    description:
      "● Led a team of 15 students from 9 schools to organize the annual largest high school hackathon in Canada.\n● Provided 1000+ students, cumulatively, from 25+ schools, with the opportunity to experience a hackathon.\n● Organized 30+ workshops to educate participants on computer science topics such as cybersecurity.",
    icon: React.createElement(YRHacks),
    date: "May 2021 - June 2024",
  },
  {
    title: "Deputy Prime Minister | York Region Presidents' Council",
    location: "Toronto, ON",
    description:
      "● Liaised with 20 students from across the school board to represent 130,000+ student voices.\n● United student council presidents from 34 schools to brainstorm new student leadership opportunities.",
    icon: React.createElement(YRPC),
    date: "Nov. 2022 - June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "G.L.A.S.S.E.S.",
    description:
      "Smart glasses that can detect songs and display lyrics in real-time using a Raspberry Pi Zero 2 W and a transparent OLED display.",
    tags: ["Raspberry Pi", "Python", "Flask", "React", "JavaScript"],
    imageUrl: glasses,
  },
  {
    title: "ProjectHer",
    description:
      "A web app that Projects inspirational stories of Her future, encouraging girls to pursue their interests in tech and beyond!",
    tags: ["Cohere", "Flask", "React", "Sass", "SQLAlchemy"],
    imageUrl: projectHer,
  },
  {
    title: "RemberU",
    description:
      "An AI powered device that reads the lips of the interlocutor and summarizes their points so that the person and conversation can always be remembered!",
    tags: ["Flutter", "Firebase", "Python", "Flask", "OpenCV", "Gemini"],
    imageUrl: remberU,
  },
  {
    title: "CANMUN Website",
    description:
      "I designed and developed the website for the first iteration of Canada Model United Nations, where over 500 high school students from across Canada attended!",
    tags: ["HTML", "Sass", "JavaScript"],
    imageUrl: canmun,
  },
  {
    title: "Emotion Detection",
    description:
      "A program that uses Multilayer Perceptrons to identify a person's emotion in real-time, distinguishing between five emotions with 74% accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "Dlib"],
    imageUrl: emotionDetection,
  },
  {
    title: "VS Lingo Bingo",
    description:
      "A Chrome extension popup designed to help students stay engaged in their online classes during the pandemic by gamifying common pandemic-related phrases and actions.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: vsLingoBingo,
  },
  {
    title: "Portfolio Website",
    description:
      "You're looking at it right now! Keep tabs on my latest projects, experiences, education, and interests.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Resend", "Vercel"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "Java",
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Git",
  "Flutter",
  "Figma",
] as const;