import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import glasses from "@/public/glasses.png"; // FJ change images
import projectHer from "@/public/projecther.png";
import remberU from "@/public/remberu.png";
import canmun from "@/public/canmun.png";
import emotionDetection from "@/public/emotion-detection.png";
import vsLingoBingo from "@/public/vs-lingo-bingo.png";
import portfolio from "@/public/portfolio.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    title: "Personal Portfolio",
    description:
      "You're looking at it right now! Keep tabs on my latest projects, experiences, education, and interests.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Resend", "Vercel"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;