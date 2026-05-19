import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.title} — CTU DevBlog`, description: article.excerpt };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);

  return (
    <main>
      {/* Article header */}
      <div className="bg-cream dot-pattern border-b border-line">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-brand transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-light text-brand">
              {article.category}
            </span>
            <span className="text-muted text-xs">{article.readTime}</span>
          </div>

          <h1 className="text-ink font-black text-4xl md:text-5xl leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-muted text-xl leading-relaxed mb-8">{article.excerpt}</p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
              <span className="text-white font-bold">{article.author.charAt(0)}</span>
            </div>
            <div>
              <p className="text-ink font-semibold text-sm">{article.author}</p>
              <p className="text-muted text-xs">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-ink font-black text-2xl mt-10 mb-4 leading-tight">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre key={i} className="bg-ink text-white rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono leading-relaxed">
                  <code>{code}</code>
                </pre>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 my-4 pl-0">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-ink text-base leading-relaxed">
                      <span className="text-brand mt-1.5 text-xs">●</span>
                      <span>{item.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-ink text-base leading-relaxed my-4">
                {block}
              </p>
            );
          })}
        </div>

        {/* Author card */}
        <div className="mt-16 p-6 bg-brand-light rounded-2xl flex items-center gap-4 border border-brand/20">
          <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-xl">{article.author.charAt(0)}</span>
          </div>
          <div>
            <p className="text-xs text-brand font-semibold uppercase tracking-wide mb-0.5">Written by</p>
            <p className="text-ink font-bold text-lg">{article.author}</p>
            <p className="text-muted text-sm">CTU Software Development Student</p>
          </div>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="border-t border-line bg-cream">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-ink font-black text-2xl mb-8">More in {article.category}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} featured />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
