import { Student } from "@/lib/types";

interface Props {
  student: Student;
  compact?: boolean;
}

export default function StudentSpotlight({ student, compact = false }: Props) {
  if (compact) {
    return (
      <div className="bg-white rounded-2xl border border-line p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light rounded-bl-full opacity-60" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-lg">
                {student.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted font-medium uppercase tracking-wider">
                Student of the Month
              </p>
              <h3 className="text-ink font-bold text-lg leading-tight">{student.name}</h3>
              <p className="text-brand text-sm font-semibold">
                {student.month} {student.year}
              </p>
            </div>
          </div>
          <p className="text-muted text-sm leading-relaxed line-clamp-3">{student.bio}</p>
          <div className="mt-3 p-3 bg-brand-light rounded-xl">
            <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-1">Achievement</p>
            <p className="text-ink text-sm leading-relaxed line-clamp-2">{student.achievement}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-brand p-8 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent opacity-10 rounded-full" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-light rounded-bl-full" />

      <div className="relative">
        <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">
          Student of the Month — {student.month} {student.year}
        </p>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center flex-shrink-0 shadow-lg">
            <span className="text-white font-black text-2xl">{student.name.charAt(0)}</span>
          </div>
          <div>
            <h2 className="text-ink font-black text-3xl leading-tight">{student.name}</h2>
            <p className="text-brand font-semibold text-sm">Top Performer</p>
          </div>
        </div>

        <p className="text-ink text-base leading-relaxed mb-5">{student.bio}</p>

        <div className="bg-brand-light rounded-2xl p-5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-brand font-bold text-sm uppercase tracking-wide">Key Achievement</p>
          </div>
          <p className="text-ink text-sm leading-relaxed">{student.achievement}</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {student.demo && (
            <a
              href={student.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors"
            >
              <span className="live-pulse w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              View Live Project
            </a>
          )}
          {student.github && (
            <a
              href={student.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
