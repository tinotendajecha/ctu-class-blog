"use client";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "$ git log --oneline", color: "text-green-400" },
  { text: "3ccd2af feat: add hero collage animation", color: "text-white/70" },
  { text: "cd92761 init: create next app with tailwind", color: "text-white/70" },
  { text: "$ npm run dev", color: "text-green-400" },
  { text: "▶  Next.js 16 — Turbopack", color: "text-cyan-400" },
  { text: "✓  Local:  http://localhost:3000", color: "text-white/70" },
  { text: "$ git status", color: "text-green-400" },
  { text: "On branch main — nothing to commit ✨", color: "text-white/70" },
];

const CHAR_MS = 32;
const LINE_PAUSE_MS = 380;

export default function TerminalWidget() {
  const [lines, setLines] = useState<{ text: string; color: string; done: boolean }[]>([]);
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (currentLine >= LINES.length) return;

    const target = LINES[currentLine];
    if (currentChar < target.text.length) {
      rafRef.current = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          if (!next[currentLine]) {
            next[currentLine] = { text: "", color: target.color, done: false };
          }
          next[currentLine] = {
            ...next[currentLine],
            text: target.text.slice(0, currentChar + 1),
          };
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, CHAR_MS);
    } else {
      rafRef.current = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          if (next[currentLine]) next[currentLine].done = true;
          return next;
        });
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE_MS);
    }

    return () => { if (rafRef.current) clearTimeout(rafRef.current); };
  }, [currentLine, currentChar]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-sm">
      {/* Title bar */}
      <div className="bg-[#1e1e2e] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-white/30 text-xs font-mono">terminal</span>
      </div>

      {/* Output */}
      <div
        ref={containerRef}
        className="bg-[#13131f] px-4 py-4 font-mono text-xs leading-relaxed h-44 overflow-y-auto scrollbar-hide"
      >
        {lines.map((line, i) => (
          <div key={i} className={line.color}>
            {line.text}
            {i === currentLine && !line.done && (
              <span className={`inline-block w-1.5 h-3.5 bg-green-400 ml-px align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
            )}
          </div>
        ))}
        {currentLine >= LINES.length && (
          <div className="text-green-400">
            $&nbsp;
            <span className={`inline-block w-1.5 h-3.5 bg-green-400 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
          </div>
        )}
      </div>
    </div>
  );
}
