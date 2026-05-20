"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxPhoto {
  src: string;
  caption: string;
  vibe: string;
  session?: string;
  date?: string;
}

interface Props {
  photos: LightboxPhoto[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }: Props) {
  const photo = photos[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next */}
      {currentIndex < photos.length - 1 && (
        <button
          className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image + caption */}
      <div
        className="relative max-w-xl w-full flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={photo.src}
            alt={photo.caption}
            width={600}
            height={800}
            unoptimized
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption card */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <span className="text-brand font-bold text-sm block mb-1">{photo.vibe}</span>
          <p className="text-white/80 text-sm leading-relaxed">{photo.caption}</p>
          {photo.session && (
            <p className="text-white/30 text-xs mt-2">
              {photo.session} {photo.date ? `· ${photo.date}` : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
