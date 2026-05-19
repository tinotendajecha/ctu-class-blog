import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "library-system",
    title: "Library Management System",
    description:
      "A full-stack web application for managing library books, member registrations, and loan tracking. Features authentication, real-time search, overdue alerts, and an admin dashboard.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    author: "Alice Moyo",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "class-dashboard",
    title: "Class Performance Dashboard",
    description:
      "An interactive dashboard for visualizing student grades, attendance, and project scores. Built with data visualization charts, filterable tables, and PDF export functionality.",
    tech: ["React", "Chart.js", "Node.js", "Express"],
    author: "Brian Ncube",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "expense-tracker",
    title: "Student Expense Tracker",
    description:
      "A mobile-responsive expense tracking app designed for students. Supports budgeting categories, monthly reports, spending alerts, and syncs across devices via Firebase.",
    tech: ["React Native", "Firebase", "TypeScript"],
    author: "Emmanuel Chikwanda",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "weather-app",
    title: "Local Weather Companion",
    description:
      "A clean weather application using the OpenWeatherMap API with a 7-day forecast, air quality index, sunrise/sunset times, and location-based weather alerts.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    author: "Sara Mwangi",
    github: "https://github.com",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Site Generator",
    description:
      "A tool that lets students generate a professional portfolio website by filling in a structured form. Outputs a downloadable, self-contained static HTML/CSS site ready to deploy.",
    tech: ["Python", "Jinja2", "Bootstrap"],
    author: "Fatima Dube",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "quiz-platform",
    title: "Peer Quiz Platform",
    description:
      "A collaborative platform where students create and share multiple-choice quizzes. Includes a live leaderboard, timed quiz sessions, and a review mode with explanations.",
    tech: ["Vue.js", "Supabase", "Tailwind CSS"],
    author: "Tino Jecha",
    github: "https://github.com",
    demo: "https://example.com",
  },
];
