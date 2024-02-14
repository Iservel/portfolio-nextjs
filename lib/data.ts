import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsBarChart } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import managelandingpage from "@/public/managelandingpage.jpg";
import promptopia from "@/public/promptopia.png";
import dashboard from "@/public/dashboard.png";
import resume from "@/public/resume.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Real-Time Analyst",
    location: "411 Locals",
    description:
      "I'm currently a Real-Time Analyst / SME at 411 Locals, a Las Vegas-based SEO company, where I lead a team of fourteen. My main responsibilities include creating reports to enhance real-time visibility of KPIs and proposing innovative strategies to increase revenue and improve processes for the Customer Success Division.",
    icon: React.createElement(BsBarChart),
    date: "2021 - Present",
  },
  {
    title: "Help Desk Support",
    location: "Dresden Partners",
    description:
      "I was a remote Helpdesk IT Assistant for USAA, mainly I was responsible of troubleshooting with employees in regards of their equipment, software and tools they used to perform their activities.",
    icon: React.createElement(FiTool),
    date: "2020 - 2021",
  },
  {
    title: "Sales Team Leader",
    location: "AT&T",
    description:
      "As an AT&T wireless sales team leader, I guided my team to success by managing KPIs and providing personalized coaching. Working closely with my supervisor and ACM, I ensured our efforts were aligned for optimal results.",
    icon: React.createElement(FaChartLine),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Minimalist Resume",
    link: "https://65cd3b2e7769f22eee0d12ce--lucky-gaufre-200239.netlify.app/",
    description:
      "A beautiful, minimalist resume made with Astro. Designed to be printable and fully customized using only one JSON file.",
    tags: ["Astro", "Typescript", "CSS", "HTML"],
    imageUrl: resume,
  },
  {
    title: "Dashboard",
    link: "https://relaxed-stroopwafel-69eccb.netlify.app/",
    description:
      "Dynamic React Admin Hub: Empowering Data Management with Custom Themes, Interactive Charts, Integrated Calendar, and Agile Kanban Boards.",
    tags: ["React", "TailwindCSS", "Javascript", "HTML"],
    imageUrl: dashboard,
  },
  {
    title: "Manage Landing Page",
    link: "https://iservel.github.io/manage-landing-page/",
    description:
      "A management software landing page crafted to captivate and adapt responsively across all devices.",
    tags: ["React", "TailwindCSS", "Javascript", "HTML"],
    imageUrl: managelandingpage,
  },
  {
    title: "Promptopia",
    description:
      "Promptopia is a full stack app crafted using Next.js and MongoDB. A website designed to discover, create and share creative AI prompts",
    link: "https://project-promptopia-eosin-two.vercel.app/",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: promptopia,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "HTML",
  "CSS",
  "Git & Github",
  "MongoDB",
  "MySQL",
  "Framer Motion",
] as const;
