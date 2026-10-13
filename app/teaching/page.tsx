import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching notes by Wesley Tzeng on mathematical statistics, real analysis, Black-Scholes pricing, and American option valuation.",
};

const notes = [
  {
    area: "Mathematical Statistics · Econometrics",
    title: "Consistency, mean-square convergence, and rare extreme errors",
    description:
      "A guided counterexample showing why convergence in probability need not imply MSE convergence, with a review of bias, variance, and the hierarchy of consistency concepts.",
    href: "/teaching-consistency-mse.pdf",
    meta: "29 pages · English",
  },
  {
    area: "Real Analysis",
    title: "From fields to the completeness of the real numbers",
    description:
      "A gentle bridge from field axioms and ordered fields to completeness, written for students in business, economics, and finance.",
    href: "/teaching-real-numbers.pdf",
    meta: "8 pages · English and Chinese",
  },
  {
    area: "Derivatives",
    title: "Solutions of the Black-Scholes pricing PDE",
    description:
      "Three examples—stock, cash, and a structured payoff—illustrate linearity, risk-neutral valuation, and why closed-form combinations satisfy the pricing PDE.",
    href: "/teaching-black-scholes-pde.pdf",
    meta: "4 pages · Chinese",
  },
  {
    area: "Corporate Finance · Causal Inference",
    title: "不要以為做 DID 就可以解決內生性問題",
    description:
      "A Chinese-language empirical note on what difference-in-differences identifies, where endogeneity can remain, and how a credible instrumental variable may provide complementary evidence.",
    href: "/teaching/did-and-endogeneity",
    meta: "Web article · Chinese",
    linkLabel: "Read article",
  },
];

export default function TeachingPage() {
  return (
    <SiteShell active="teaching">
      <header className="page-intro">
        <p className="eyebrow">Teaching</p>
        <h1>Derivations with an economic reason.</h1>
        <div className="prose-stack">
          <p>
            My approach starts with the economic question, revisits the necessary
            mathematical foundations, and works through the derivation step by
            step. Where useful, Python simulations connect an analytical result
            to a numerical example that students can explore themselves.
          </p>
          <p>
            These materials support courses in option valuation and advanced
            quantitative methods.
          </p>
        </div>
      </header>

      <section className="notes-grid section-rule" aria-labelledby="notes-title">
        <div className="section-heading notes-heading">
          <p className="section-number">Selected materials</p>
          <h2 id="notes-title">Teaching notes</h2>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <article className="note-card" key={note.href}>
              <p className="note-index">0{index + 1}</p>
              <div>
                <p className="eyebrow">{note.area}</p>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <div className="note-meta">
                  <span>{note.meta}</span>
                  <a
                    href={note.href}
                    target={note.linkLabel ? undefined : "_blank"}
                    rel={note.linkLabel ? undefined : "noreferrer"}
                  >
                    {note.linkLabel ?? "Read PDF"} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="baw-section section-rule" aria-labelledby="baw-title">
        <div>
          <p className="section-number">Interactive companion</p>
          <h2 id="baw-title">Barone-Adesi and Whaley (1987)</h2>
        </div>
        <div className="baw-card">
          <p>
            I developed a browser-based learning resource for the BAW
            approximation to American option prices. It connects the early-
            exercise boundary, analytical approximation, and numerical
            implementation in one place.
          </p>
          <div className="link-stack">
            <a
              className="text-link"
              href="https://Wesley1110.github.io/BAW-option-pricing/"
              target="_blank"
              rel="noreferrer"
            >
              Open the BAW option-pricing website <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6599958"
              target="_blank"
              rel="noreferrer"
            >
              View the related teaching note on SSRN <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6262633"
              target="_blank"
              rel="noreferrer"
            >
              Browse all SSRN materials <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="teaching-role section-rule" aria-labelledby="role-title">
        <div>
          <p className="section-number">2024 — 2026</p>
          <h2 id="role-title">Teaching experience</h2>
        </div>
        <div>
          <h3>Teaching Assistant · National Chengchi University</h3>
          <ul className="course-list" aria-label="Courses">
            <li>Option Valuation and Applications</li>
            <li>Advanced Quantitative Methods</li>
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
