"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface HeroPhoto {
  src: string;
  alt: string;
}

const SLOTS = [
  {
    positionClasses: "top-4 left-0",
    sizeClasses: "w-44 h-56 md:w-52 md:h-64",
    rotate: 3,
    depth: 4,   // shadow depth only
    zIndex: 1,
  },
  {
    positionClasses: "top-0 right-0",
    sizeClasses: "w-40 h-52 md:w-48 md:h-60",
    rotate: -4,
    depth: 6,
    zIndex: 2,
  },
  {
    positionClasses: "bottom-0 left-1/2 -translate-x-1/2",
    sizeClasses: "w-48 h-60 md:w-56 md:h-72",
    rotate: 1,
    depth: 8,
    zIndex: 3,
  },
];

function easeOutBack(t: number): number {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

const STAGGER_MS = 200;
const DROP_MS    = 900;

export default function HeroCollage({ photos }: { photos: HeroPhoto[] }) {
  const [dropProgress, setDropProgress] = useState<number[]>(photos.map(() => 0));
  // slotOrder[slotIndex] = photoIndex — which photo sits in each slot
  const [slotOrder, setSlotOrder] = useState<number[]>(photos.map((_, i) => i));
  const rafRef   = useRef<number>(0);
  const startRef = useRef<number>(0);

  // Drop-in animation
  useEffect(() => {
    const total = DROP_MS + STAGGER_MS * (photos.length - 1);

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;

      const progress = photos.map((_, i) => {
        const t = (elapsed - i * STAGGER_MS) / DROP_MS;
        return t <= 0 ? 0 : Math.min(easeOutBack(Math.min(t, 1)), 1);
      });

      setDropProgress(progress);
      if (elapsed < total) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [photos.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const allDropped = dropProgress.every((d) => d >= 1);

  const handleTap = () => {
    if (!allDropped) return;
    // Rotate all photos one slot forward: [a,b,c] → [c,a,b]
    setSlotOrder(([a, b, c]) => [c, a, b]);
  };

  return (
    <div
      className="relative h-80 md:h-[420px] hidden md:block select-none"
      onClick={handleTap}
      title="Tap to swap photos"
    >
      {SLOTS.map((slot, i) => {
        const photo = photos[slotOrder[i]];
        const drop  = dropProgress[i];
        const dropY = (1 - drop) * -90;
        const dropScale = 0.82 + 0.18 * drop;
        const opacity   = Math.min(drop * 4, 1);

        return (
          <div
            key={i}
            className={[
              "absolute",
              slot.positionClasses,
              slot.sizeClasses,
              "rounded-2xl overflow-hidden border-[5px] border-white",
              allDropped ? "cursor-pointer hover:scale-[1.03] transition-transform duration-200" : "",
            ].join(" ")}
            style={{
              opacity,
              boxShadow: `0 ${8 + slot.depth}px ${24 + slot.depth * 2}px rgba(0,0,0,${0.12 + slot.depth * 0.01})`,
              transform: `translateY(${dropY}px) rotate(${slot.rotate}deg) scale(${dropScale})`,
              transition: drop < 1 ? "none" : "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
              zIndex: slot.zIndex,
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

      {/* Tap hint — fades out once user has tapped */}
      {allDropped && (
        <span className="absolute bottom-2 right-2 text-[10px] text-ink/30 font-medium pointer-events-none">
          tap to swap
        </span>
      )}

      {/* Decorative glows */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent opacity-25 blur-3xl pointer-events-none animate-float" />
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-brand  opacity-15 blur-2xl pointer-events-none" />
    </div>
  );
}
