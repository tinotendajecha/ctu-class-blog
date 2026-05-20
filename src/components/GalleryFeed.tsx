"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { Session } from "@/data/gallery";

interface Props {
  sessions: Session[];
}

const gradients = [
  "linear-gradient(135deg, #F5C430 0%, #2B7A4B 100%)",
  "linear-gradient(135deg, #2B7A4B 0%, #F5C430 100%)",
];

export default function GalleryFeed({ sessions }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos = sessions.flatMap((s) =>
    s.photos.map((p) => ({ ...p, session: s.label, date: s.date }))
  );

  return (
    <>
      <div className="space-y-20">
        {sessions.map((session, si) => {
          const sessionStartIndex = sessions
            .slice(0, si)
            .reduce((acc, s) => acc + s.photos.length, 0);

          return (
            <section key={session.id} id={session.id}>
              {/* Session header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="p-[3px] rounded-full flex-shrink-0"
                  style={{ background: gradients[si % gradients.length] }}
                >
                  <div className="rounded-full overflow-hidden bg-cream ring-[3px] ring-cream w-14 h-14">
                    <Image
                      src={session.coverSrc}
                      alt={session.label}
                      width={56}
                      height={56}
                      unoptimized
                      className="w-14 h-14 object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-ink font-black text-2xl leading-tight">{session.label}</h2>
                  <p className="text-muted text-sm">
                    {session.sublabel} · {session.date} · {session.photos.length} photos
                  </p>
                </div>
                <div className="hidden sm:block h-px flex-1 bg-line" />
              </div>

              {/* Masonry photo grid */}
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {session.photos.map((photo, pi) => {
                  const globalIndex = sessionStartIndex + pi;
                  return (
                    <button
                      key={photo.src}
                      className="break-inside-avoid w-full group relative overflow-hidden rounded-2xl cursor-pointer block mb-3 shadow-sm hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setLightboxIndex(globalIndex)}
                      aria-label={`View: ${photo.caption}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        width={600}
                        height={800}
                        unoptimized
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Bottom gradient + caption on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-white text-xs font-bold block mb-0.5">{photo.vibe}</span>
                        <p className="text-white/80 text-xs line-clamp-2 leading-snug">{photo.caption}</p>
                      </div>
                      {/* Top-right: expand icon */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/30 backdrop-blur-sm rounded-full p-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() =>
            setLightboxIndex((i) =>
              i !== null && i < allPhotos.length - 1 ? i + 1 : i
            )
          }
        />
      )}
    </>
  );
}
