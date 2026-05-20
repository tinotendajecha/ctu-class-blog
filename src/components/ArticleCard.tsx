import Link from "next/link";
import type { ReactElement } from "react";
import { Article } from "@/lib/types";

const categoryColors: Record<string, string> = {
  React:        "bg-blue-50 text-blue-700",
  TypeScript:   "bg-indigo-50 text-indigo-700",
  CSS:          "bg-pink-50 text-pink-700",
  Python:       "bg-sky-50 text-sky-700",
  AI:           "bg-purple-50 text-purple-700",
  Tools:        "bg-orange-50 text-orange-700",
  Backend:      "bg-brand-light text-brand",
  DevOps:       "bg-orange-50 text-orange-700",
  Fundamentals: "bg-accent-light text-amber-700",
};

// ── Tech icon badges ──────────────────────────────────────────────────────────

function IconJS() {
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-black w-5 h-5 rounded"
      style={{ background: "#F7DF1E", color: "#000" }}
      title="JavaScript"
    >
      JS
    </span>
  );
}

function IconPy() {
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-black w-5 h-5 rounded"
      style={{ background: "#3776AB", color: "#FFD43B" }}
      title="Python"
    >
      Py
    </span>
  );
}

function IconReact() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded"
      style={{ background: "#20232a" }}
      title="React"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(-60 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    </span>
  );
}

function IconTS() {
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-black w-5 h-5 rounded"
      style={{ background: "#3178C6", color: "#fff" }}
      title="TypeScript"
    >
      TS
    </span>
  );
}

function IconHTML() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded"
      style={{ background: "#E34F26" }}
      title="HTML"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
        <path d="M4 3l1.6 18L12 23l6.4-2L20 3H4zm13.5 5H8.4l.2 2.5h8.7l-.7 7.4L12 19.5l-4.6-1.6-.3-3.6h2.4l.2 1.8 2.3.6 2.3-.6.3-3.2H7.8L7.3 8h9.4l-.2 0z" />
      </svg>
    </span>
  );
}

function IconCSS() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded"
      style={{ background: "#264de4" }}
      title="CSS"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
        <path d="M4 3l1.6 18L12 23l6.4-2L20 3H4zm10.3 13.5l-2.3.6-2.3-.6-.2-1.8H7.1l.4 4 4.5 1.3 4.5-1.3.6-6.5H8.4l-.2-2h8.3l.2-2H7.7L7.3 8h9.5l-.7 8.5h-1.8z" />
      </svg>
    </span>
  );
}

function IconGit() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded"
      style={{ background: "#F05032" }}
      title="Git"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
        <path d="M23.7 11.3L12.7.3a1 1 0 0 0-1.4 0L9 2.6l2.8 2.8a1.2 1.2 0 0 1 1.5 1.5l2.7 2.7a1.2 1.2 0 1 1-.7.7L12.6 7.6v6.7a1.2 1.2 0 1 1-1 0V7.5a1.2 1.2 0 0 1-.6-1.6L8.2 3.1 .3 11a1 1 0 0 0 0 1.4l11 11a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0 0-1.4z" />
      </svg>
    </span>
  );
}

function IconAI() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded"
      style={{ background: "#7c3aed" }}
      title="AI / LLM"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    </span>
  );
}

const TECH_ICONS: Record<string, () => ReactElement> = {
  JavaScript: IconJS,
  Python:     IconPy,
  React:      IconReact,
  TypeScript: IconTS,
  HTML:       IconHTML,
  CSS:        IconCSS,
  Git:        IconGit,
  AI:         IconAI,
};

function TechIcons({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {tags.map((tag) => {
        const Icon = TECH_ICONS[tag];
        return Icon ? <Icon key={tag} /> : null;
      })}
    </div>
  );
}

// ── Card components ───────────────────────────────────────────────────────────

interface Props {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: Props) {
  const badgeClass = categoryColors[article.category] ?? "bg-brand-light text-brand";

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <article className="bg-white rounded-2xl border border-line p-7 hover:border-brand hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
              {article.category}
            </span>
            <span className="text-muted text-xs">{article.readTime}</span>
          </div>

          {/* Tech icon badges */}
          {article.tags && (
            <div className="mb-3">
              <TechIcons tags={article.tags} />
            </div>
          )}

          <h3 className="text-ink font-bold text-xl leading-snug mb-3 group-hover:text-brand transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center">
                <span className="text-brand text-xs font-bold">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <span className="text-ink text-sm font-medium">{article.author}</span>
                {article.authorRole && (
                  <span className="ml-1.5 text-[10px] font-semibold text-brand bg-brand-light px-1.5 py-0.5 rounded-full">
                    {article.authorRole}
                  </span>
                )}
              </div>
            </div>
            <span className="text-muted text-xs">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="flex gap-4 py-5 border-b border-line last:border-0 hover:bg-white -mx-4 px-4 rounded-xl transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeClass}`}>
              {article.category}
            </span>
            <TechIcons tags={article.tags} />
            <span className="text-muted text-xs">{article.readTime}</span>
          </div>
          <h3 className="text-ink font-bold text-base leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted text-sm line-clamp-2">{article.excerpt}</p>
          <p className="text-muted text-xs mt-2">
            {article.author}
            {article.authorRole && (
              <span className="ml-1 text-[10px] font-semibold text-brand bg-brand-light px-1.5 py-0.5 rounded-full">
                {article.authorRole}
              </span>
            )}
            {" · "}
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
}
