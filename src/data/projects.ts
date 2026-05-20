import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "techpulse-news-aggregator",
    title: "TechPulse News Aggregator",
    description:
      "A data engineering project that automatically scrapes and aggregates tech news from Hacker News and multiple other sources into a clean dashboard. Features category filtering (AI, Security, Web, Hardware), sorting, light mode toggle, and live scrape timestamps. The scraper is written in Python and powers a real-time news feed.",
    tech: ["Python", "Web Scraping", "JavaScript", "Data Engineering", "Vercel"],
    author: "Giselle",
    demo: "https://hacker-news-webscarping-activity.vercel.app/",
    tag: "Data Engineering",
    featured: true,
  },
  {
    id: "hot-seat-quiz",
    title: "Hot Seat — Exam Prep Quiz Platform",
    description:
      "A classroom quiz platform built with students to practise for international certification exams (AWS Cloud Practitioner & DP-900). Features real-time 'Hot Seat' sessions where teachers run the room and call on students, with every response tracked and reviewable. Built together in class, used by the class.",
    tech: ["Next.js", "Firebase", "TypeScript", "React"],
    author: "Tinotenda Jecha",
    demo: "https://quiz-app-blue-nu.vercel.app/",
    tag: "EdTech",
    featured: true,
  },
  {
    id: "code-red-studios",
    title: "Code Red Studios",
    description:
      "A video streaming platform built for independent creator monetisation. Features content management, creator profiles, and a modern streaming UI. Built with Next.js and designed to give creators a self-hosted alternative to mainstream platforms.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    author: "Tinotenda Jecha",
    tag: "Full Stack",
    featured: false,
  },
  {
    id: "smart-recruit",
    title: "Smart Recruit",
    description:
      "An AI-powered applicant tracking system that uses generative AI and multi-agent analysis to streamline the hiring pipeline. Agents analyse CVs, score candidates, and surface insights — dramatically reducing manual review time for hiring teams.",
    tech: ["Next.js", "Python", "LangChain", "FastAPI", "PostgreSQL"],
    author: "Tinotenda Jecha",
    tag: "AI/ML",
    featured: false,
  },
];
