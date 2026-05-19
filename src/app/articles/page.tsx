import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ArticlesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">Knowledge Base</p>
        <h1 className="text-ink font-black text-5xl mb-4">Articles</h1>
        <p className="text-muted text-lg max-w-xl">
          Technical write-ups, tutorials, and lessons from our software development class. Written by students, reviewed by peers.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              cat === "All"
                ? "bg-brand text-white"
                : "bg-white text-ink border border-line hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} featured />
        ))}
      </div>
    </main>
  );
}
