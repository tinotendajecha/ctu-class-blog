import { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="bg-white rounded-2xl border border-line p-6 hover:border-brand hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand">
            <path
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors p-1.5 rounded-lg hover:bg-cream"
              aria-label="View on GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand transition-colors p-1.5 rounded-lg hover:bg-brand-light"
              aria-label="View live demo"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-ink font-bold text-lg leading-snug mb-2">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">{project.description}</p>

      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-cream text-muted font-medium border border-line"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-cream text-muted font-medium border border-line">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <span className="text-ink text-xs font-bold leading-none">
              {project.author.charAt(0)}
            </span>
          </div>
          <span className="text-muted text-xs font-medium">{project.author.split(" ")[0]}</span>
        </div>
      </div>
    </article>
  );
}
