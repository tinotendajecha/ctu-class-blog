// Server component — computed directly from static data, no client JS needed.
import { projects } from "@/data/projects";
import { portfolios } from "@/data/portfolios";

interface Entry {
  name: string;
  initial: string;
  projectCount: number;
  portfolioCount: number;
  xp: number;
  isFacilitator: boolean;
}

function buildLeaderboard(): Entry[] {
  const map = new Map<string, Entry>();

  for (const p of projects) {
    const e = map.get(p.author) ?? {
      name: p.author,
      initial: p.author.charAt(0),
      projectCount: 0,
      portfolioCount: 0,
      xp: 0,
      isFacilitator: false,
    };
    e.projectCount++;
    e.xp += 2;
    map.set(p.author, e);
  }

  for (const p of portfolios) {
    const e = map.get(p.name) ?? {
      name: p.name,
      initial: p.name.charAt(0),
      projectCount: 0,
      portfolioCount: 0,
      xp: 0,
      isFacilitator: false,
    };
    e.portfolioCount++;
    e.xp += 1;
    if (p.name === "Tinotenda Jecha") e.isFacilitator = true;
    map.set(p.name, e);
  }

  return [...map.values()].sort(
    (a, b) => b.xp - a.xp || a.name.localeCompare(b.name)
  );
}

const RANK_COLORS = [
  "text-accent",       // #1 — gold
  "text-white/50",     // #2 — silver
  "text-orange-400",   // #3 — bronze
];

export default function ContributorBoard() {
  const board = buildLeaderboard();
  const max = board[0]?.xp ?? 1;

  return (
    <section className="bg-ink relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              Contribution Board
            </p>
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight">
              Who&apos;s building
              <br />
              the most?
            </h2>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-5 text-xs text-white/40 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-brand inline-block" />
              project&nbsp;=&nbsp;2 XP
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent inline-block" />
              portfolio&nbsp;=&nbsp;1 XP
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {board.map((entry, i) => {
            const projectPct  = (entry.projectCount  * 2 / max) * 100;
            const portfolioPct = (entry.portfolioCount * 1 / max) * 100;
            const isTop3 = i < 3;
            const rankColor = RANK_COLORS[i] ?? "text-white/20";

            return (
              <div
                key={entry.name}
                className={[
                  "flex items-center gap-3 md:gap-5 px-4 py-4 rounded-2xl border transition-colors",
                  isTop3
                    ? "bg-white/5 border-white/10 hover:bg-white/8"
                    : "border-transparent hover:bg-white/3",
                ].join(" ")}
              >
                {/* Rank */}
                <span
                  className={`w-8 text-right font-black font-mono text-base flex-shrink-0 ${rankColor}`}
                >
                  #{i + 1}
                </span>

                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm shadow-md ${
                    isTop3
                      ? "bg-brand text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {entry.initial}
                </div>

                {/* Name + bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-sm font-semibold truncate ${
                        isTop3 ? "text-white" : "text-white/50"
                      }`}
                    >
                      {entry.name}
                    </span>
                    {entry.isFacilitator && (
                      <span className="flex-shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-brand/25 text-brand border border-brand/30">
                        Facilitator
                      </span>
                    )}
                  </div>

                  {/* Stacked bar */}
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden flex">
                    {entry.projectCount > 0 && (
                      <div
                        className="h-full bg-brand"
                        style={{ width: `${projectPct}%` }}
                      />
                    )}
                    {entry.portfolioCount > 0 && (
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${portfolioPct}%` }}
                      />
                    )}
                  </div>
                </div>

                {/* XP score */}
                <div className="flex-shrink-0 text-right">
                  <span
                    className={`font-black font-mono text-xl leading-none ${
                      i === 0 ? "text-accent" : "text-white/40"
                    }`}
                  >
                    {entry.xp}
                  </span>
                  <span className="text-white/20 text-[10px] font-mono ml-0.5">
                    XP
                  </span>
                </div>

                {/* Breakdown — desktop only */}
                <div className="hidden md:block flex-shrink-0 w-28 text-right font-mono text-[10px] text-white/25 leading-relaxed">
                  {entry.projectCount > 0 && (
                    <div>{entry.projectCount} project{entry.projectCount > 1 ? "s" : ""}</div>
                  )}
                  {entry.portfolioCount > 0 && (
                    <div>{entry.portfolioCount} portfolio</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-white/20 text-[10px] font-mono text-center mt-10">
          XP auto-updates as projects and portfolios are added to the class blog
        </p>
      </div>
    </section>
  );
}
