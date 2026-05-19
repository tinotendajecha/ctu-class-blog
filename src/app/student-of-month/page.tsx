import StudentSpotlight from "@/components/StudentSpotlight";
import { students } from "@/data/students";

export default function StudentOfMonthPage() {
  const [current, ...past] = students;

  return (
    <main>
      {/* Header */}
      <div className="bg-ink relative overflow-hidden dot-pattern">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Recognition Program</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-4">
            Student of the{" "}
            <span className="text-brand">Month</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Each month, the class recognises a student who showed exceptional growth, helped their peers, or produced outstanding work. Here are our stars.
          </p>
        </div>
      </div>

      {/* Current winner — big card */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-line" />
          <span className="text-muted text-xs font-bold uppercase tracking-widest px-3">
            {current.month} {current.year} — Current
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <StudentSpotlight student={current} />
      </div>

      {/* Past winners */}
      {past.length > 0 && (
        <div className="bg-cream border-t border-line">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-line" />
              <span className="text-muted text-xs font-bold uppercase tracking-widest px-3">Previous Winners</span>
              <div className="h-px flex-1 bg-line" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {past.map((student) => (
                <div key={student.name} className="relative">
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {student.month} {student.year}
                    </span>
                  </div>
                  <StudentSpotlight student={student} compact />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Nomination CTA */}
      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="text-ink font-black text-3xl mb-4">Nominate a classmate</h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              Know someone who&apos;s been going above and beyond? Send a nomination with their name and what they did. Nominations are reviewed at the end of each month.
            </p>
            <a
              href="mailto:devblog@ctu.ac.zw?subject=Student of the Month Nomination"
              className="inline-block px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md"
            >
              Send a Nomination
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
