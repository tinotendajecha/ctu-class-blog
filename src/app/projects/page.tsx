import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      {/* Header */}
      <div className="bg-cream dot-pattern border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Built by Students</p>
          <h1 className="text-ink font-black text-5xl mb-4">Student Projects</h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Real applications designed and built by students in the CTU software development class. From idea to deployment.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Submit project CTA */}
      <div className="bg-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl mb-4">
            Have a project to{" "}
            <span className="text-brand">showcase?</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            Built something during the semester? Share it with the class. All skill levels welcome — it&apos;s about learning, not perfection.
          </p>
          <a
            href="mailto:devblog@ctu.ac.zw?subject=Project Submission"
            className="inline-block px-8 py-4 bg-accent text-ink font-bold rounded-full hover:opacity-90 transition-opacity shadow-md text-lg"
          >
            Submit Your Project
          </a>
        </div>
      </div>
    </main>
  );
}
