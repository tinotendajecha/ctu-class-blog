import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-brand font-black text-xl tracking-tight">CTU</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-ink font-bold text-base tracking-tight">DevBlog</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The official blog of the CTU Software Development class. Written by students, for students.
            </p>
          </div>

          <div>
            <h4 className="text-ink font-semibold text-sm mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {[
                { href: "/articles", label: "Articles" },
                { href: "/projects", label: "Student Projects" },
                { href: "/student-of-month", label: "Student of the Month" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-semibold text-sm mb-3 uppercase tracking-wider">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "CSS", "Backend", "DevOps", "Fundamentals"].map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-2.5 py-1 rounded-full bg-brand-light text-brand font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} CTU Software Development Class. All rights reserved.
          </p>
          <p className="text-muted text-xs">Built by students, with love for code.</p>
        </div>
      </div>
    </footer>
  );
}
