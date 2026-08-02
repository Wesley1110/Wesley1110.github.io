import Link from "next/link";
import type { ReactNode } from "react";

type ActivePage = "home" | "research" | "teaching";

const navigation: Array<{ href: string; label: string; key: ActivePage }> = [
  { href: "/", label: "Home", key: "home" },
  { href: "/research", label: "Research", key: "research" },
  { href: "/teaching", label: "Teaching", key: "teaching" },
];

export function SiteShell({
  active,
  children,
}: {
  active: ActivePage;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Wesley Tzeng home">
            <span className="brand-mark" aria-hidden="true">WT</span>
            <span>
              <strong>Wesley Tzeng</strong>
              <small>Finance PhD Candidate · NCCU</small>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active === item.key ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/cv-wesley-tzeng.pdf">CV</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="page-wrap">{children}</main>

      <footer className="site-footer">
        <div className="footer-grid">
          <p>
            Wesley Tzeng<br />
            Department of Money and Banking<br />
            National Chengchi University
          </p>
          <div className="footer-links" aria-label="External profile links">
            <a href="mailto:111352503@g.nccu.edu.tw">Email</a>
            <a
              href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6262633"
              target="_blank"
              rel="noreferrer"
            >
              SSRN
            </a>
            <a href="https://github.com/Wesley1110" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p className="footer-meta">Taipei, Taiwan · Updated August 2026</p>
        </div>
      </footer>
    </div>
  );
}
