"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { allPhotos } from "@/data/gallery";

export default function FilmStrip() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (stripRef.current?.offsetLeft ?? 0);
    scrollLeft.current = stripRef.current?.scrollLeft ?? 0;
    if (stripRef.current) stripRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    stripRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (stripRef.current) stripRef.current.style.cursor = "grab";
  };

  return (
    <>
      <div
        ref={stripRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide select-none"
        style={{ cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {allPhotos.map((photo, i) => (
          <button
            key={photo.src}
            className="flex-shrink-0 relative overflow-hidden rounded-2xl group"
            style={{ width: "176px", height: "232px" }}
            onClick={() => !isDragging.current && setLightboxIndex(i)}
            aria-label={photo.caption}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              unoptimized
              sizes="176px"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xs font-bold block leading-tight">{photo.vibe}</span>
              <p className="text-white/70 text-xs mt-0.5 line-clamp-2 leading-tight">{photo.caption}</p>
            </div>
            {/* Session label top-left */}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/80 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {photo.session}
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos.map((p) => ({ ...p, session: p.session }))}
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
