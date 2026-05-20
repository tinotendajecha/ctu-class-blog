"use client";
import { useEffect, useState } from "react";

const SYMBOLS = [
  "const", "{ }", "</>", "=>", "import React",
  "useState()", "async/await", "git commit", "npm run dev",
  "python", "def __init__", ":root {}", "SELECT *",
  "for i in range", ".map()", "useEffect", "interface",
  "return (", "export default", "npm install",
];

interface Particle {
  id: number;
  symbol: string;
  left: number;   // %
  size: number;   // px
  duration: number; // s
  delay: number;    // s
}

export default function FloatingCode() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: 4 + (i * 7) % 92,
      size: 10 + (i % 4) * 2,
      duration: 14 + (i % 5) * 3,
      delay: (i * 1.3) % 12,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 font-mono text-brand/20 select-none whitespace-nowrap"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animation: `floatCode ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
