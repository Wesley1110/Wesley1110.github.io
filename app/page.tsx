import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Wesley Tzeng is a Finance PhD candidate at National Chengchi University working on asset pricing, macro-finance, behavioral finance, and machine learning.",
};

const interests = [
  "Empirical Asset Pricing",
  "Macro-Finance",
  "Behavioral Finance",
  "Machine Learning",
];

export default function Home() {
  return (
    <SiteShell active="home">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Finance · Asset Pricing · Econometrics</p>
          <h1 id="home-title">Researching how information becomes price.</h1>
          <p className="hero-lede">
            I am a PhD candidate in Finance at National Chengchi University,
            studying how uncertainty, news, and investor beliefs shape asset
            prices and exchange rates.
          </p>
          <div className="button-row" aria-label="Profile links">
            <a className="button button-primary" href="/cv-wesley-tzeng.pdf">
              View CV
            </a>
            <Link className="button button-secondary" href="/research">
              Explore research
            </Link>
          </div>
        </div>

        <figure className="portrait-frame">
          <Image
            src="/avatar.jpg"
            alt="A chalkboard with a mathematical derivation, used as Wesley Tzeng's temporary profile image"
            width={2048}
            height={1152}
            priority
            sizes="(max-width: 760px) 100vw, 38vw"
          />
          <figcaption>Curiosity begins at the blackboard.</figcaption>
        </figure>
      </section>

      <section className="editorial-grid section-rule" aria-labelledby="about-title">
        <div>
          <p className="section-number">01</p>
          <h2 id="about-title">About</h2>
        </div>
        <div className="prose-stack">
          <p>
            My work sits at the intersection of empirical asset pricing,
            macro-finance, behavioral finance, and modern textual analysis. I
            am especially interested in settings where attention and
            uncertainty change the information investors extract from markets.
          </p>
          <p>
            I am currently a research assistant on a National Science and
            Technology Council project led by Professor Mi-Hsiu Chiang. The
            project studies climate-change risk using machine learning,
            GPT-based news extraction, and dynamic hedging portfolios.
          </p>
          <p>
            In 2027, I plan to visit the Department of Finance at BI Norwegian
            Business School as a visiting PhD student with Professor Paul
            Ehling.
          </p>
        </div>
      </section>

      <section className="editorial-grid section-rule" aria-labelledby="interests-title">
        <div>
          <p className="section-number">02</p>
          <h2 id="interests-title">Research interests</h2>
        </div>
        <div>
          <ul className="interest-list" aria-label="Research interests">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
          <p className="quiet-note">
            Current projects examine policy uncertainty, ambiguity, central-bank
            communication, adverse-news salience, and exchange-rate prediction.
          </p>
        </div>
      </section>

      <section className="editorial-grid section-rule" aria-labelledby="education-title">
        <div>
          <p className="section-number">03</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="timeline">
          <article>
            <p className="timeline-date">2022 — present</p>
            <h3>PhD in Finance</h3>
            <p>National Chengchi University · Department of Money and Banking</p>
          </article>
          <article>
            <p className="timeline-date">2019 — 2021</p>
            <h3>MS in Finance</h3>
            <p>National Taiwan Normal University · Graduate Institute of Management</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
