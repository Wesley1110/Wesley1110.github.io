import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research topics and publication by Wesley Tzeng in asset pricing, uncertainty, monetary policy, news salience, and exchange rates.",
};

const workingTopics = [
  {
    number: "01",
    topic: "Policy uncertainty across asset markets",
    description:
      "How distinct dimensions of economic policy uncertainty transmit to valuations, risk premia, and investor decisions.",
    collaborators: "With Ling Tak Douglas Chung",
  },
  {
    number: "02",
    topic: "Ambiguity in the Taiwanese market",
    description:
      "How ambiguity affects asset prices when investors face uncertainty that is difficult to summarize with ordinary risk alone.",
    collaborators: "With Ling Tak Douglas Chung and Mi-Hsiu Chiang",
  },
  {
    number: "03",
    topic: "Monetary-policy voice and market reactions",
    description:
      "Whether the spoken delivery of monetary-policy communication contains information for Taiwan's asset markets beyond the written message.",
    collaborators: "With Wei-Yu Kuo and Mi-Hsiu Chiang",
  },
  {
    number: "04",
    topic: "Adverse-news salience in foreign-exchange markets",
    description:
      "How attention to adverse macro-financial news shapes monthly exchange-rate predictability across currencies.",
    collaborators: "With Mi-Hsiu Chiang",
  },
];

export default function ResearchPage() {
  return (
    <SiteShell active="research">
      <header className="page-intro">
        <p className="eyebrow">Research</p>
        <h1>Questions before titles.</h1>
        <p>
          My research focuses on the information frictions behind prices: what
          investors notice, how uncertainty is formed, and when those signals
          become useful for prediction.
        </p>
      </header>

      <section className="research-section section-rule" aria-labelledby="publication-title">
        <div className="section-heading">
          <p className="section-number">Published</p>
          <h2 id="publication-title">Publication</h2>
        </div>
        <article className="publication-card">
          <p className="publication-year">2025 · Advances in Financial Education</p>
          <h3>A Modern Approach to Teaching Options Pricing Using Monte Carlo Simulation with Python</h3>
          <p>
            A computational approach to teaching option valuation that connects
            simulation, pricing intuition, and reproducible Python exercises.
          </p>
        </article>
      </section>

      <section className="research-section section-rule" aria-labelledby="working-title">
        <div className="section-heading">
          <p className="section-number">In progress</p>
          <h2 id="working-title">Working paper topics</h2>
          <p className="section-note">
            Research is listed by topic rather than manuscript title.
          </p>
        </div>
        <div className="topic-list">
          {workingTopics.map((item) => (
            <article className="topic-card" key={item.number}>
              <p className="topic-number">{item.number}</p>
              <div>
                <h3>{item.topic}</h3>
                <p>{item.description}</p>
                <p className="collaborators">{item.collaborators}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section section-rule" aria-labelledby="project-title">
        <div className="section-heading">
          <p className="section-number">2025 — 2027</p>
          <h2 id="project-title">Current research project</h2>
        </div>
        <article className="feature-band">
          <p className="eyebrow">Climate risk · Text analysis · Dynamic hedging</p>
          <h3>Measuring and hedging climate-change risk</h3>
          <p>
            Research assistance for a National Science and Technology Council
            project led by Professor Mi-Hsiu Chiang, combining machine-learning
            text methods, GPT-based climate-news extraction, and dynamic hedging
            portfolio construction.
          </p>
        </article>
      </section>
    </SiteShell>
  );
}
