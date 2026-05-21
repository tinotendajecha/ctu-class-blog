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
    id: "pixel-play",
    title: "Pixel Play — Browser Games Platform",
    description:
      "A browser-based gaming platform featuring a collection of pixel-style games you can play straight from the browser. Clean, playful UI with a games library page and smooth in-game experience. A fun project that blends creativity with front-end engineering.",
    tech: ["HTML", "CSS", "JavaScript"],
    author: "Giselle",
    demo: "https://pixel-play-beta.vercel.app/games.html",
    tag: "Full Stack",
    featured: false,
  },
  {
    id: "gym-system",
    title: "The Gym System",
    description:
      "A gym management web application for tracking members, sessions, and schedules. Built as a practical full-stack project to solve a real operational problem — giving gym staff a clean interface to manage day-to-day operations without spreadsheets.",
    tech: ["HTML", "CSS", "JavaScript"],
    author: "Jayden Deysel",
    demo: "https://thee-gym-system.vercel.app",
    tag: "Full Stack",
    featured: false,
  },
  {
    id: "for-honor-retry",
    title: "For Honor — Retry",
    description:
      "A web-based interactive project by Braiden Ferreira, combining game mechanics and front-end engineering. Built and iterated through multiple versions as part of class practical work, showcasing persistence and rapid prototyping skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    author: "Braiden Ferreira",
    demo: "https://for-honor-retry-1-0.vercel.app/",
    tag: "Full Stack",
    featured: false,
  },
];
