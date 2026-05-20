"use client";
import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const DURATION_MS = 1400;

interface Props {
  target: number;
  label: string;
}

export default function CountUpStat({ target, label }: Props) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;

          const tick = (now: number) => {
            if (!startRef.current) startRef.current = now;
            const t = Math.min((now - startRef.current) / DURATION_MS, 1);
            setValue(Math.round(easeOutCubic(t) * target));
            if (t < 1) rafRef.current = requestAnimationFrame(tick);
          };

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return (
    <div ref={elRef} className="text-center">
      <span className="text-ink font-black text-2xl block leading-none tabular-nums">{value}</span>
      <span className="text-muted text-xs font-medium">{label}</span>
    </div>
  );
}
