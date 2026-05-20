"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export interface HeroPhoto {
  src: string;
  alt: string;
  baseRotate: number; // degrees
  depth: number;      // parallax multiplier — higher = moves more
  positionClasses: string;
  sizeClasses: string;
}

function easeOutBack(t: number): number {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

const STAGGER_MS = 200;
const DROP_MS    = 900;

export default function HeroCollage({ photos }: { photos: HeroPhoto[] }) {
  const [dropProgress, setDropProgress] = useState<number[]>(photos.map(() => 0));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const startRef     = useRef<number>(0);

  // ── Drop-in animation ──────────────────────────────────────
  useEffect(() => {
    const total = DROP_MS + STAGGER_MS * (photos.length - 1);

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;

      const progress = photos.map((_, i) => {
        const photoStart = i * STAGGER_MS;
        const t = (elapsed - photoStart) / DROP_MS;
        return t <= 0 ? 0 : Math.min(easeOutBack(Math.min(t, 1)), 1);
      });

      setDropProgress(progress);
      if (elapsed < total) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [photos.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Mouse parallax ─────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2),
      y: (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2),
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="relative h-80 md:h-[420px] hidden md:block select-none">
      {photos.map((photo, i) => {
        const drop = dropProgress[i];
        const dropY = (1 - drop) * -90;
        const dropScale = 0.82 + 0.18 * drop;
        const opacity = Math.min(drop * 4, 1);
        const tx = mouse.x * photo.depth * 16 * drop;
        const ty = mouse.y * photo.depth * 10 * drop;
        const extraRotate = mouse.x * photo.depth * 2 * drop;

        return (
          <div
            key={i}
            className={`absolute ${photo.positionClasses} ${photo.sizeClasses} rounded-2xl overflow-hidden border-[5px] border-white`}
            style={{
              opacity,
              boxShadow: `0 ${8 + photo.depth * 4}px ${24 + photo.depth * 8}px rgba(0,0,0,${0.12 + photo.depth * 0.04})`,
              transform: `translate(${tx}px, ${ty + dropY}px) rotate(${photo.baseRotate + extraRotate}deg) scale(${dropScale})`,
              transition: drop >= 1 ? "transform 0.14s ease-out" : "none",
              zIndex: i + 1,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              unoptimized
              sizes="220px"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Decorative glows */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent opacity-25 blur-3xl pointer-events-none animate-float" />
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-brand  opacity-15 blur-2xl pointer-events-none" />
    </div>
  );
}
