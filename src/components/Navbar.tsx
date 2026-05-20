"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolios", label: "Portfolios" },
  { href: "/gallery", label: "From the Lab" },
  { href: "/student-of-month", label: "Student of the Month" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-brand font-black text-2xl tracking-tight leading-none">CTU</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-0.5" />
          <span className="text-ink font-bold text-lg tracking-tight leading-none">DevBlog</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-brand text-white shadow-sm"
                    : "text-ink hover:bg-brand-light hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu indicator */}
        <div className="sm:hidden flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`w-2 h-2 rounded-full transition-colors ${
                pathname === link.href ? "bg-brand" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden border-t border-line px-4 py-2 flex gap-1 overflow-x-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              pathname === link.href
                ? "bg-brand text-white"
                : "text-ink bg-white border border-line"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
