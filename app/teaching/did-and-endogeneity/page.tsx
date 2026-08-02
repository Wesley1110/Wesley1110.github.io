import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "DID and Endogeneity",
  description:
    "A Chinese teaching note by Wesley Tzeng on difference-in-differences, endogeneity, and instrumental variables in empirical corporate finance.",
};

export default function DidAndEndogeneityPage() {
  return (
    <SiteShell active="teaching">
      <article className="article-page" lang="zh-Hant">
        <header className="article-header">
          <a className="article-back-link" href="/teaching">
            ← Back to teaching
          </a>
          <p className="eyebrow">Corporate Finance · Causal Inference</p>
          <h1>不要以為做 DID 就可以解決內生性問題</h1>
          <p className="article-dek">
            DID 是一種識別策略，不是內生性的萬靈丹。關鍵仍在於處理事件是否可信、平行趨勢是否成立，以及是否存在會同時影響處理與結果的因素。
          </p>
          <p className="article-meta">Teaching note · Chinese</p>
        </header>

        <div className="article-body">
          <section>
            <h2>DID 能做什麼，也不能做什麼</h2>
            <p>
              公司理財實證研究經常使用 difference-in-differences（DID）。DID
              可以在特定假設成立時，消除處理組與控制組之間固定不變的差異，並比較兩組在事件前後的相對變化。
            </p>
            <p>
              但使用 DID 並不代表內生性問題自動消失。如果處理事件本身不是外生的，或處理組與控制組即使沒有事件也會呈現不同趨勢，DID
              的估計仍可能混入其他因素。研究設計的核心問題不是「有沒有做 DID」，而是「DID 所需的識別假設是否可信」。
            </p>
          </section>

          <section>
            <h2>內生性的三個主要來源</h2>
            <ul className="concept-list">
              <li>
                <strong>遺漏變數（omitted variables）</strong>：未納入模型、但同時影響自變數與應變數的因素。
              </li>
              <li>
                <strong>測量誤差（measurement error）</strong>：解釋變數或結果變數被不精確地衡量，因而造成估計偏誤。
              </li>
              <li>
                <strong>雙向因果（simultaneity / reverse causality）</strong>：X 與 Y
                可能共同決定，或實際因果方向與研究者假設的方向相反。
              </li>
            </ul>
          </section>

          <section>
            <h2>地方報紙倒閉的例子</h2>
            <p>
              Heese、Pérez-Cavazos 與 Peter（2022）研究地方報紙倒閉是否增加當地企業的不當行為。其 DID
              結果顯示，報紙倒閉後，當地上市公司設施的違規事件增加約 1.1%，罰款則增加約 15.2%。這個發現符合地方媒體監督減弱的解釋。
            </p>
            <p>
              然而，一個自然的質疑是：地方報紙倒閉本身是否外生？假設地方經濟衰退降低廣告收入，因而導致報紙倒閉；同一場經濟衰退也可能增加企業壓力，使違規、偷工減料或違反勞動與環境規定的機率上升。
            </p>

            <div className="causal-map" aria-label="Potential omitted-variable paths">
              <p>地方經濟衰退 → 地方報紙倒閉</p>
              <p>地方經濟衰退 → 企業不當行為</p>
              <p className="misread-path">若忽略共同原因，可能誤讀為：地方報紙倒閉 → 企業不當行為</p>
            </div>

            <p>
              這是遺漏變數偏誤的典型疑慮。也不能完全排除反向因果：例如企業與地方政治勢力可能先壓制揭露不當行為的媒體，最終使報紙退出市場。此時，企業問題可能先於報紙倒閉發生。
            </p>
          </section>

          <section>
            <h2>工具變數：Craigslist 的進入</h2>
            <p>
              當自變數 X（報紙倒閉）與不可觀測的地方因素糾纏不清時，一種補充策略是尋找工具變數 Z。該研究利用 Craigslist
              進入不同城市的時間，作為影響地方報紙財務壓力與倒閉機率的工具。
            </p>

            <h3>1. 相關性（relevance）</h3>
            <p>
              工具變數必須與內生自變數有足夠強的關聯。地方報紙過去有相當一部分收入來自徵才、租屋與二手交易等分類廣告；Craigslist
              進入一個城市後，會直接競爭這些收入，因此可能加速地方報紙退出市場。
            </p>

            <h3>2. 外生性與排除限制（exogeneity / exclusion restriction）</h3>
            <p>
              Craigslist 的進入必須只透過地方報紙的存續來影響企業不當行為，而不能直接影響企業行為，也不能與地方經濟衰退等遺漏因素系統性相關。這項條件無法只靠統計檢定證明，必須由制度背景、時序證據與各種排除性檢驗共同支持。
            </p>

            <div className="article-callout">
              <strong>重要提醒</strong>
              <p>
                IV 不是 DID 的機械式必備附件。只有在工具變數的相關性、外生性與排除限制都具有可信論證時，IV
                才能提供有意義的補充證據；一個不可信的 IV 並不會讓研究設計更嚴謹。
              </p>
            </div>
          </section>

          <section>
            <h2>DID 是策略，不是萬靈丹</h2>
            <p>
              嚴謹的研究不應止於「套用 DID」。研究者仍需檢查事件前趨勢、處理時間與預期效果、樣本組成變化、可能同時發生的政策或經濟衝擊，以及結果對不同規格與控制組的敏感度。
            </p>
            <p>
              若能找到可信的工具變數，IV 可以成為補充識別策略，但並非每篇 DID 研究都必須加入 IV。真正的標準是：研究者能否清楚說明威脅識別的來源，並用最適合研究情境的證據逐一處理。
            </p>
          </section>

          <section>
            <h2>欲尋 IV，請先尋找 VI</h2>
            <p>
              研究者尋找工具變數，就像詩中行人尋找酒家：知道自己需要它，卻不一定知道它在哪裡。線索通常來自過去文獻、制度背景、歷史事件、自然實驗與政策變動。
            </p>

            <blockquote className="article-quote">
              清明時節雨紛紛，路上行人欲斷魂。<br />
              借問酒家何處有，牧童遙指杏花村。
            </blockquote>

            <p>
              但「找到一個變數」不等於找到工具變數。杏花村所指的，應該是一個 valid instrument（VI）。因此，欲尋 IV，請先尋找 VI。
            </p>
          </section>

          <section>
            <h2>參考資料</h2>
            <p>
              Heese, J., Pérez-Cavazos, G., &amp; Peter, C. D. (2022). “When the Local Newspaper Leaves Town: The Effects of Local Newspaper Closures on Corporate Misconduct.” <em>Journal of Financial Economics</em>, 145(2), 445–463.
            </p>
            <div className="article-sources">
              <a href="https://doi.org/10.1016/j.jfineco.2021.08.015" target="_blank" rel="noreferrer">
                Publisher page and DOI ↗
              </a>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3889039" target="_blank" rel="noreferrer">
                SSRN record ↗
              </a>
            </div>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
