import { portfolios } from "@/data/portfolios";

export const metadata = {
  title: "Student Portfolios — CTU DevBlog",
  description: "Personal portfolios from CTU software development students. See what we're building.",
};

const specialtyColors: Record<string, string> = {
  "Full Stack": "bg-brand-light text-brand",
  "AI/ML": "bg-purple-50 text-purple-700",
  "Multi-Agent Systems": "bg-indigo-50 text-indigo-700",
  "Data Engineering": "bg-orange-50 text-orange-700",
  "EdTech": "bg-accent-light text-amber-700",
  "Mobile": "bg-blue-50 text-blue-700",
};

export default function PortfoliosPage() {
  return (
    <main>
      {/* Header */}
      <div className="bg-cream dot-pattern border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">The people behind the code</p>
          <h1 className="text-ink font-black text-5xl mb-4">Student Portfolios</h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Personal sites, projects, and full professional profiles from students in the CTU software development class. More being added each week.
          </p>
        </div>
      </div>

      {/* Portfolio cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolios.map((portfolio) => (
            <article
              key={portfolio.name}
              className="bg-white rounded-2xl border border-line p-8 hover:border-brand hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-black text-xl">
                      {portfolio.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-ink font-black text-xl leading-tight">{portfolio.name}</h2>
                    <p className="text-brand text-sm font-semibold">{portfolio.role}</p>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex gap-2 flex-shrink-0">
                  {portfolio.github && (
                    <a
                      href={portfolio.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-ink transition-colors p-1.5 rounded-lg hover:bg-cream"
                      aria-label="GitHub"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {portfolio.linkedin && (
                    <a
                      href={portfolio.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-blue-50"
                      aria-label="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted text-sm leading-relaxed mb-5">{portfolio.bio}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-5">
                {portfolio.specialties.map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-bold px-3 py-1 rounded-full ${specialtyColors[s] ?? "bg-brand-light text-brand"}`}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {portfolio.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-cream text-muted font-medium border border-line"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors group-hover:shadow-md"
              >
                View Portfolio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </article>
          ))}

          {/* Coming soon placeholder */}
          <div className="bg-cream rounded-2xl border-2 border-dashed border-line p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-14 h-14 rounded-full bg-white border border-line flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <p className="text-ink font-bold text-lg mb-2">Your portfolio here</p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              More student portfolios being added. Send your portfolio link to get featured.
            </p>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="bg-brand-light rounded-2xl p-8 text-center border border-brand/20">
          <h2 className="text-ink font-black text-2xl mb-3">Have a portfolio to share?</h2>
          <p className="text-muted text-base mb-6 max-w-md mx-auto">
            Built a personal site? Send it over and we&apos;ll add it here. It&apos;s the best way to show the world what you&apos;re building.
          </p>
          <a
            href="mailto:devblog@ctu.ac.zw?subject=Portfolio Submission"
            className="inline-block px-7 py-3 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md"
          >
            Submit Your Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
