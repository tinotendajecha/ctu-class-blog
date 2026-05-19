import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import ProjectCard from "@/components/ProjectCard";
import StudentSpotlight from "@/components/StudentSpotlight";
import { articles } from "@/data/articles";
import { students } from "@/data/students";
import { projects } from "@/data/projects";

export default function HomePage() {
  const latestStudent = students[0];
  const featuredArticles = articles.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-6 px-3 py-1.5 bg-brand-light rounded-full">
                CTU · Software Development Class
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-ink leading-[1.05] mb-6">
                We write code.
                <br />
                We{" "}
                <span className="text-brand">share</span> what we{" "}
                <span className="text-brand">learn.</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
                Articles, projects, and spotlights from the CTU software development class — real students, real work, real lessons.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/articles"
                  className="px-6 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-md"
                >
                  Read Articles
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-white text-ink font-semibold rounded-full border border-line hover:border-brand hover:text-brand transition-colors"
                >
                  See Projects
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: articles.length, label: "Articles Published", cls: "bg-brand text-white" },
                { value: projects.length, label: "Student Projects", cls: "bg-accent text-ink" },
                { value: students.length, label: "Students Spotlighted", cls: "bg-white text-ink border border-line" },
                { value: "∞", label: "Things to Learn", cls: "bg-ink text-white" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 ${stat.cls} flex flex-col justify-between min-h-[120px]`}
                >
                  <span className="text-4xl font-black leading-none">{stat.value}</span>
                  <span className="text-sm font-medium opacity-80 leading-snug mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student of the Month teaser */}
      <section className="bg-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
                Student Spotlight
              </p>
              <h2 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
                Meet{" "}
                <span className="text-brand">{latestStudent.name.split(" ")[0]}</span>,
                <br />
                our{" "}
                <span className="text-accent">{latestStudent.month}</span> star.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6 max-w-md">
                {latestStudent.bio}
              </p>
              <Link
                href="/student-of-month"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors"
              >
                See All Spotlights
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <StudentSpotlight student={latestStudent} compact />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">From the Class</p>
            <h2 className="text-ink font-black text-3xl md:text-4xl">Latest Articles</h2>
          </div>
          <Link
            href="/articles"
            className="text-brand font-semibold text-sm hover:underline flex items-center gap-1"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} featured />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-line" />
      </div>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Built by Students</p>
            <h2 className="text-ink font-black text-3xl md:text-4xl">Student Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-brand font-semibold text-sm hover:underline flex items-center gap-1"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-light border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <span className="text-accent text-3xl mb-4 block font-black">✦</span>
          <h2 className="text-ink font-black text-3xl md:text-4xl mb-4">
            Want to contribute an article?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
            Share what you learned, a project you built, or a concept that clicked. Every student in the class can write.
          </p>
          <a
            href="mailto:devblog@ctu.ac.zw"
            className="inline-block px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md text-lg"
          >
            Submit Your Article
          </a>
        </div>
      </section>
    </main>
  );
}
