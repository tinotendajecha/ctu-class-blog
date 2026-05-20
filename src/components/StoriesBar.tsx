"use client";
import Link from "next/link";
import Image from "next/image";
import { Session } from "@/data/gallery";

interface Props {
  sessions: Session[];
}

const gradients = [
  "linear-gradient(135deg, #F5C430 0%, #2B7A4B 100%)",
  "linear-gradient(135deg, #2B7A4B 0%, #1d5c38 60%, #F5C430 100%)",
];

export default function StoriesBar({ sessions }: Props) {
  return (
    <div className="flex items-start gap-5 overflow-x-auto pb-2 scrollbar-hide px-1">
      {sessions.map((session, i) => (
        <Link
          key={session.id}
          href={`/gallery#${session.id}`}
          className="flex flex-col items-center gap-2 flex-shrink-0 group"
        >
          {/* Gradient ring — Instagram highlight style */}
          <div
            className="p-[3px] rounded-full transition-transform duration-300 group-hover:scale-105"
            style={{ background: gradients[i % gradients.length] }}
          >
            <div className="rounded-full overflow-hidden bg-cream ring-[3px] ring-cream w-16 h-16">
              <Image
                src={session.coverSrc}
                alt={session.label}
                width={64}
                height={64}
                unoptimized
                className="w-16 h-16 object-cover object-center"
              />
            </div>
          </div>
          <div className="text-center">
            <span className="text-xs font-bold text-ink block leading-tight">{session.label}</span>
            <span className="text-xs text-muted block leading-tight">{session.date}</span>
          </div>
        </Link>
      ))}

      {/* "Coming soon" placeholder story */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0 opacity-40">
        <div className="p-[3px] rounded-full" style={{ background: "linear-gradient(135deg, #E5E1D8, #6B6B6B)" }}>
          <div className="rounded-full bg-cream ring-[3px] ring-cream w-16 h-16 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold text-muted block leading-tight">Next Lab</span>
          <span className="text-xs text-muted block leading-tight">Coming soon</span>
        </div>
      </div>
    </div>
  );
}
