import { sessions, allPhotos } from "@/data/gallery";
import StoriesBar from "@/components/StoriesBar";
import GalleryFeed from "@/components/GalleryFeed";

export const metadata = {
  title: "From the Lab — CTU DevBlog",
  description: "Photos from Thursday and Friday practical sessions at the CTU software development class.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* Header */}
      <div className="bg-ink relative overflow-hidden dot-pattern">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Real moments</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-4">
            From the <span className="text-brand">Lab</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
            {allPhotos.length} photos across {sessions.length} practical sessions. Candid, unfiltered, and very much in progress.
          </p>

          {/* Stories bar in header */}
          <StoriesBar sessions={sessions} />
        </div>
      </div>

      {/* Gallery feed */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <GalleryFeed sessions={sessions} />
      </div>

      {/* Bottom strip teaser */}
      <div className="bg-brand-light border-t border-line py-12 text-center">
        <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">More coming</p>
        <h2 className="text-ink font-black text-2xl mb-2">Every session gets documented.</h2>
        <p className="text-muted text-base max-w-md mx-auto">
          Check back after each Thursday and Friday practical for new photos from the lab.
        </p>
      </div>
    </main>
  );
}
