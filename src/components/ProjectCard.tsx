import { Project } from "@/lib/types";

const tagColors: Record<string, string> = {
  "Data Engineering": "bg-orange-50 text-orange-700 border-orange-200",
  "EdTech":           "bg-accent-light text-amber-700 border-amber-200",
  "Full Stack":       "bg-brand-light text-brand border-brand/20",
  "AI/ML":            "bg-purple-50 text-purple-700 border-purple-200",
  "Mobile":           "bg-blue-50 text-blue-700 border-blue-200",
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const tagClass = tagColors[project.tag ?? ""] ?? "bg-brand-light text-brand border-brand/20";
  const isFeatured = project.featured === true;

  return (
    <article
      className={[
        "relative bg-white rounded-2xl border p-6 flex flex-col h-full transition-all duration-300",
        isFeatured
          ? "border-brand/40 hover:border-brand hover:shadow-2xl featured-glow"
          : "border-line hover:border-brand hover:shadow-lg",
      ].join(" ")}
    >
      {/* Featured ribbon */}
      {isFeatured && (
        <div className="absolute -top-3 left-5 z-10">
          <span className="inline-flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            <span className="live-pulse w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Featured Project
          </span>
        </div>
      )}

      {/* Card header */}
      <div className="flex items-start justify-between mb-4 mt-1">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isFeatured ? "bg-brand text-white" : "bg-brand-light"}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={isFeatured ? "text-white" : "text-brand"}>
            <path
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-brand text-white hover:bg-brand-dark transition-colors"
              aria-label="Live demo"
            >
              <span className="live-pulse w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors p-1.5 rounded-lg hover:bg-cream"
              aria-label="View on GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Tag */}
      {project.tag && (
        <span className={`self-start text-xs font-bold px-2.5 py-0.5 rounded-full border mb-3 ${tagClass}`}>
          {project.tag}
        </span>
      )}

      <h3 className="text-ink font-bold text-lg leading-snug mb-2">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">{project.description}</p>

      {/* Footer */}
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
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isFeatured ? "bg-brand" : "bg-accent"}`}>
            <span className={`text-xs font-bold leading-none ${isFeatured ? "text-white" : "text-ink"}`}>
              {project.author.charAt(0)}
            </span>
          </div>
          <span className="text-muted text-xs font-medium">{project.author.split(" ")[0]}</span>
        </div>
      </div>

      {/* Demo preview strip on hover — shown for projects with live demo */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 text-xs text-brand font-semibold opacity-0 group-hover:opacity-100 hover:underline transition-opacity"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          {project.demo.replace("https://", "").replace(/\/$/, "")}
        </a>
      )}
    </article>
  );
}
