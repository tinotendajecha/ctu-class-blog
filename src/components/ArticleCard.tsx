import Link from "next/link";
import { Article } from "@/lib/types";

const categoryColors: Record<string, string> = {
  React: "bg-blue-50 text-blue-700",
  TypeScript: "bg-indigo-50 text-indigo-700",
  CSS: "bg-pink-50 text-pink-700",
  Backend: "bg-brand-light text-brand",
  DevOps: "bg-orange-50 text-orange-700",
  Fundamentals: "bg-accent-light text-amber-700",
};

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
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
              {article.category}
            </span>
            <span className="text-muted text-xs">{article.readTime}</span>
          </div>
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
              <span className="text-ink text-sm font-medium">{article.author}</span>
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
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeClass}`}>
              {article.category}
            </span>
            <span className="text-muted text-xs">{article.readTime}</span>
          </div>
          <h3 className="text-ink font-bold text-base leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted text-sm line-clamp-2">{article.excerpt}</p>
          <p className="text-muted text-xs mt-2">
            {article.author} ·{" "}
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
