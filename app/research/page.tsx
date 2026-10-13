import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Empirical and theoretical asset pricing research by Wesley Tzeng on information, investor beliefs, AI in financial markets, and portfolio choice.",
};

const workingTopics = [
  {
    number: "01",
    topic: "Monetary and fiscal policy uncertainty in Japan",
    description:
      "How monetary and fiscal policy uncertainty differ in their implications for equity risk premia and return predictability. The project combines factor-mimicking portfolios and asset-pricing tests with Japan's monetary and fiscal institutional setting.",
    collaborators: "With Ling Tak Douglas Chung",
  },
  {
    number: "02",
    topic: "Ambiguity in the Taiwanese market",
    description:
      "How ambiguity enters equity prices when investors differ in their willingness to bear uncertainty about probabilities. The project examines ambiguity attitudes and the pricing of ambiguity exposure in Taiwan.",
    collaborators: "With Ling Tak Douglas Chung and Mi-Hsiu Chiang",
  },
  {
    number: "03",
    topic: "Monetary-policy voice and market reactions",
    description:
      "Whether the central bank governor's vocal delivery during unscripted press-conference Q&A contains information for Taiwan's financial markets. The project uses audio-based measures and local projections to study subsequent asset-price and volatility responses, accounting for written policy statements and U.S. monetary-policy news.",
    collaborators: "With Wei-Yu Kuo and Mi-Hsiu Chiang",
  },
  {
    number: "04",
    topic: "Adverse-news salience in foreign-exchange markets",
    description:
      "Whether adverse macro-financial news adds predictive information to Taylor-rule exchange-rate models. The project evaluates domestic and U.S. sentiment signals in monthly out-of-sample forecasts across nine currencies.",
    collaborators: "With Mi-Hsiu Chiang",
  },
  {
    number: "05",
    topic: "AI analysts and investment decisions",
    description:
      "How investors should allocate research resources across additional AI analysts, improvements to existing systems, and better evaluation evidence. The project examines the role of analyst complementarity and estimation uncertainty in AI-assisted investment decisions.",
  },
  {
    number: "06",
    topic: "Stock demand and market equilibrium at the AI limit",
    description:
      "How the widespread use of advanced AI in investment decisions affects the demand for individual stocks. This theoretical project examines whether stock demand remains downward sloping as investors' information-processing capabilities improve, and how portfolio constraints and market-clearing conditions shape equilibrium prices.",
  },
  {
    number: "07",
    topic: "Delegated portfolio management and investor beliefs",
    description:
      "How investment mandates, household fund choice, and portfolio constraints determine whose beliefs influence asset prices. This research studies the connection between delegated asset management and market equilibrium.",
  },
  {
    number: "08",
    topic: "Investor experience and risk-bearing capacity",
    description:
      "How personal experience shapes beliefs and willingness to bear risk, and how these differences aggregate into asset prices. Theoretical work connects investor heterogeneity with demographic change and portfolio choice.",
  },
  {
    number: "09",
    topic: "Zero-days-to-expiration options and market structure",
    description:
      "A synthesis of research on zero-days-to-expiration (0DTE) options, focusing on trading activity, dealer hedging, liquidity, and intraday market dynamics.",
  },
];

export default function ResearchPage() {
  return (
    <SiteShell active="research">
      <header className="page-intro">
        <p className="eyebrow">Research</p>
        <h1>Questions before titles.</h1>
        <p className="page-intro-copy">
          My research spans empirical and theoretical asset pricing, with a
          focus on how information, uncertainty, and macro-financial conditions
          shape expected returns and investment decisions. I combine econometric
          analysis with text and audio methods, and develop models of investor
          beliefs, delegated management, and AI-assisted investment decisions.
        </p>
        <nav className="button-row research-profile-links" aria-label="Research profiles">
          <a
            className="button button-primary"
            href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6262633"
            target="_blank"
            rel="noreferrer"
          >
            SSRN Profile
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/Wesley1110"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
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
            <article className="topic-card" key={item.number} id={`topic-${item.number}`}>
              <p className="topic-number">{item.number}</p>
              <div>
                <h3>{item.topic}</h3>
                <p>{item.description}</p>
                {item.collaborators && (
                  <p className="collaborators">{item.collaborators}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section section-rule" aria-labelledby="methods-title">
        <div className="section-heading">
          <h2 id="methods-title">Methods and measurement</h2>
        </div>
        <div className="prose-stack">
          <p>
            My empirical work uses factor-mimicking portfolios, generalized
            method of moments (GMM), predictive regressions, and local
            projections (<a href="https://doi.org/10.1257/0002828053828518" target="_blank" rel="noreferrer">Jordà, 2005</a>) to connect economic questions with observable market
            outcomes. Forecasting projects emphasize out-of-sample performance
            relative to explicit benchmarks.
          </p>
          <p>
            I use Python and R to develop reproducible research workflows and apply
            machine learning and language models to financial news and
            central-bank communication.
          </p>
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
