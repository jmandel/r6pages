import React, { useMemo, useState } from "react";
import { bundle, findingById, flat, pageByLabel, pages, type FlatFinding } from "./data";
import { buildLlmMarkdown } from "./llmMarkdown";
import { buildHref, type RouteState, useRoute } from "./router";
import { Crumb, Footer, TopBar } from "./Shell";
import { Markdown } from "./Markdown";
import type { ActionableFinding, EvidenceReference, PageReview, SourceLocation } from "../types";

const PRIORITY_ORDER = ["P0", "P1", "P2", "P3", "—"];
const KIND_ORDER = ["H", "E", "G", "—"];
const STATUS_ORDER = ["has-findings", "no-actionable-findings", "incomplete-or-unparseable", "—"];
const MAX_FACET_VALUES = 140;

const PRIORITY_COLOR: Record<string, string> = {
  P0: "#8A1118",
  P1: "#EC2028",
  P2: "#F09225",
  P3: "#2E5DA8",
};
const KIND_LABEL: Record<string, string> = {
  H: "High-signal",
  E: "Editorial / overlooked",
  G: "Evidence gap",
};

type Facet = {
  key: string;
  label: string;
  values: (finding: FlatFinding) => string[];
  display?: (value: string) => string;
  order?: string[];
  colors?: Record<string, string>;
};

const FACETS: Facet[] = [
  { key: "priority", label: "Priority", values: (f) => [f.priority ?? "—"], order: PRIORITY_ORDER, colors: PRIORITY_COLOR },
  { key: "kind", label: "Finding kind", values: (f) => [f.kind ?? "—"], display: formatKind, order: KIND_ORDER },
  { key: "status", label: "Page status", values: (f) => [f.pageReview.status ?? "—"], order: STATUS_ORDER },
  { key: "category", label: "Category", values: (f) => [f.category ?? "—"] },
  { key: "page", label: "HTML page", values: (f) => [f.pageLabel] },
  { key: "evidence", label: "Evidence type", values: (f) => unique((f.evidence ?? []).map((e) => e.type || "—")) },
  { key: "findingStatus", label: "Finding status", values: (f) => [f.status ?? "—"] },
  { key: "intent", label: "Intent mismatch", values: (f) => [f.intentVsImplementationMismatch ? "yes" : "no"] },
  { key: "overlooked", label: "Overlooked/new problem", values: (f) => [f.overlookedOrNewlyNoticedProblem ? "yes" : "no"] },
  { key: "gap", label: "Evidence gap", values: (f) => [f.evidenceGapBlocksDecision ? "yes" : "no"] },
];

export function App() {
  const [route] = useRoute();
  if (route.path[0] === "f" && route.path[1]) return <FindingPage findingId={route.path[1]} />;
  if (route.path[0] === "p" && route.path[1]) return <PagePage pageLabel={route.path[1]} />;
  if (route.path[0] === "pages") return <PagesIndex route={route} />;
  return <Explorer route={route} />;
}

function Explorer({ route }: { route: RouteState }) {
  const q = route.params.get("q") ?? "";
  const [query, setQueryState] = useState(q);
  React.useEffect(() => setQueryState(q), [q]);

  const active = useMemo(() => activeFacets(route), [route.params]);
  const filtered = useMemo(() => filterFindings(flat, active, query), [active, query]);
  const facetCounts = useMemo(() => buildFacetCounts(active, query), [active, query]);
  const allValues = useMemo(() => buildFacetValues(facetCounts), [facetCounts]);
  const visibleFacets = FACETS.filter((facet) => (allValues[facet.key]?.length ?? 0) > 1 && (allValues[facet.key]?.length ?? 0) <= MAX_FACET_VALUES);

  const setQuery = (next: string) => {
    setQueryState(next);
    const params = new URLSearchParams(route.params);
    if (next) params.set("q", next);
    else params.delete("q");
    history.replaceState(null, "", buildHref([], params));
  };
  const toggleFacet = (key: string, value: string) => {
    const next = new Set(active[key] ?? []);
    next.has(value) ? next.delete(value) : next.add(value);
    const params = new URLSearchParams(route.params);
    if (next.size) params.set(key, [...next].join(","));
    else params.delete(key);
    location.hash = buildHref([], params);
  };
  const clearFacet = (key: string) => {
    const params = new URLSearchParams(route.params);
    params.delete(key);
    location.hash = buildHref([], params);
  };
  const anyFilters = query.trim() || Object.values(active).some((set) => set.size > 0);

  return (
    <>
      <TopBar />
      <Crumb>
        <span className="here">All actionable findings across R4 -> R6 changed HTML pages</span>
        <span className="crumb-actions">
          <CopyForLlmButton findings={filtered} active={active} query={query} totalAll={flat.length} />
          <JsonDownload data={bundle} filename="r6-html-pages-bundle.json" label="Download JSON" />
        </span>
      </Crumb>
      <main className="changes-page">
        <aside className="changes-side">
          <div className="sidebar-top">
            <div className="filter-search">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter findings..." />
            </div>
            {anyFilters && <a className="clear-all-top" href="#/">Clear all filters</a>}
          </div>
          {visibleFacets.map((facet) => (
            <FilterBlock
              key={facet.key}
              facet={facet}
              values={allValues[facet.key]}
              counts={facetCounts[facet.key]}
              selected={active[facet.key] ?? new Set()}
              onToggle={(value) => toggleFacet(facet.key, value)}
              onClear={() => clearFacet(facet.key)}
            />
          ))}
        </aside>
        <section className="changes-main">
          <PageHeader
            title="R4 -> R6 HTML page findings"
            subtitle="Actionable findings abstracted from per-page review files. Filters include all priorities, kinds, categories, triggers, classifications, evidence types, labels, and page statuses in the pooled abstraction JSON."
          />
          <Stats visibleFindings={filtered.length} />
          <ActiveFilters active={active} query={query} onClearFacet={clearFacet} onClearQuery={() => setQuery("")} totalShown={filtered.length} totalAll={flat.length} />
          <FindingsTable findings={filtered} query={query} />
        </section>
      </main>
      <Footer />
    </>
  );
}

function PagesIndex({ route }: { route: RouteState }) {
  const q = route.params.get("q") ?? "";
  const [query, setQueryState] = useState(q);
  React.useEffect(() => setQueryState(q), [q]);
  const filtered = pages.filter((page) => {
    const needle = query.trim().toLowerCase();
    if (!needle) return true;
    return [
      page.pageLabel,
      page.status,
      page.summary,
      page.noFindingReason,
      page.actionFilePath,
      page.researchFilePath,
      ...(page.parseWarnings ?? []),
    ].filter(Boolean).join(" ").toLowerCase().includes(needle);
  });
  const setQuery = (next: string) => {
    setQueryState(next);
    const params = new URLSearchParams();
    if (next) params.set("q", next);
    history.replaceState(null, "", buildHref(["pages"], params));
  };

  return (
    <>
      <TopBar />
      <Crumb><a href="#/">Findings explorer</a><span className="sep">/</span><span className="here">Page inventory</span></Crumb>
      <main className="detail-page">
        <PageHeader title="Page inventory" subtitle="Every pooled page abstraction, including no-finding and incomplete pages." />
        <div className="filter-search inventory-search">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter pages..." />
        </div>
        <PagesTable pages={filtered} />
      </main>
      <Footer />
    </>
  );
}

function FindingPage({ findingId }: { findingId: string }) {
  const finding = findingById(findingId);
  if (!finding) {
    return <NotFound label="Finding" value={findingId} />;
  }
  const page = finding.pageReview;
  return (
    <>
      <TopBar />
      <Crumb>
        <a href="#/">Findings explorer</a>
        <span className="sep">/</span>
        <a href={buildHref(["p", finding.pageLabel])}>{finding.pageLabel}</a>
        <span className="sep">/</span>
        <span className="here">{finding.id}</span>
        <span className="crumb-actions"><JsonDownload data={finding} filename={`${finding.id}.json`} label="Finding JSON" /></span>
      </Crumb>
      <main className="detail-page">
        <header className="detail-h">
          <div className="eyebrow"><span className="resource">{finding.pageLabel}</span><span>{finding.localId ?? finding.id}</span></div>
          <h1>{finding.title}</h1>
          <div className="bdgs">
            <Badge value={finding.priority ?? "—"} kind="priority" />
            <Badge value={finding.kind ? `${finding.kind} · ${KIND_LABEL[finding.kind] ?? finding.kind}` : "—"} />
            <Badge value={finding.category ?? "—"} />
            <Badge value={page.status} tone={page.status === "incomplete-or-unparseable" ? "warn" : undefined} />
          </div>
          <dl className="detail-meta">
            <dt>Page source</dt><dd><code>{finding.pagePath ?? `source/${finding.pageLabel}.html`}</code></dd>
            {finding.dateIdentified && <><dt>Date identified</dt><dd>{new Date(finding.dateIdentified).toLocaleString()}</dd></>}
            <dt>Action file</dt><dd><code>{page.actionFilePath}</code></dd>
            <dt>Research file</dt><dd><code>{page.researchFilePath}</code></dd>
          </dl>
        </header>

        <QuestionGroup title="What is the issue?">
          <Section title="Problem" text={finding.narrative?.problem} />
          <Section title="Why it matters" text={finding.narrative?.whyItMatters} />
          <Section title="Recommended next step" text={finding.narrative?.recommendedNextStep} />
          <Section title="Full analysis" md={finding.narrative?.analysis} />
        </QuestionGroup>

        <QuestionGroup title="Where is the evidence?">
          <SourceLocations locations={finding.sourceLocations ?? []} />
          <EvidenceList evidence={finding.evidence ?? []} />
          <Quotes quotes={finding.narrative?.rawEvidenceQuotes ?? []} />
        </QuestionGroup>

        <QuestionGroup title="How is it classified?">
          <FlagGrid finding={finding} />
          <Section title="Limitations" md={(finding.narrative?.limitations ?? []).join("\n\n")} />
        </QuestionGroup>
      </main>
      <Footer />
    </>
  );
}

function PagePage({ pageLabel }: { pageLabel: string }) {
  const page = pageByLabel(pageLabel);
  if (!page) return <NotFound label="Page" value={pageLabel} />;
  return (
    <>
      <TopBar />
      <Crumb>
        <a href="#/">Findings explorer</a>
        <span className="sep">/</span>
        <a href="#/pages">Page inventory</a>
        <span className="sep">/</span>
        <span className="here">{page.pageLabel}</span>
        <span className="crumb-actions"><JsonDownload data={page} filename={`${page.pageLabel}.json`} label="Page JSON" /></span>
      </Crumb>
      <main className="detail-page">
        <header className="detail-h">
          <div className="eyebrow"><span className="resource">{page.pageLabel}</span><span>{page.status}</span></div>
          <h1>{page.pageLabel}.html</h1>
          <div className="bdgs">
            <Badge value={page.status} tone={page.status === "incomplete-or-unparseable" ? "warn" : undefined} />
            <Badge value={`${page.findingCount} finding${page.findingCount === 1 ? "" : "s"}`} />
          </div>
          <dl className="detail-meta">
            <dt>Action file</dt><dd><code>{page.actionFilePath}</code></dd>
            <dt>Research file</dt><dd><code>{page.researchFilePath}</code></dd>
          </dl>
        </header>
        <Section title="Summary" text={page.summary || page.noFindingReason} />
        {page.parseWarnings?.length ? <Section title="Parse warnings" md={page.parseWarnings.map((warning) => `- ${warning}`).join("\n")} /> : null}
        <section className="section">
          <h2>Findings on this page</h2>
          <FindingsTable findings={(page.findings ?? []).map((finding) => ({ ...finding, pageReview: page }))} query="" compact />
        </section>
      </main>
      <Footer />
    </>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="changes-h">
      <div>
        <h1>{title}</h1>
        <div className="sub">{subtitle}</div>
      </div>
    </div>
  );
}

function Stats({ visibleFindings }: { visibleFindings: number }) {
  return (
    <div className="stats">
      <a className="stat stat-link" href="#/pages">
        <div className="k">Pages</div>
        <div className="v">{bundle.totals.pagesReviewed.toLocaleString()}</div>
        <div className="d">pooled abstractions</div>
      </a>
      <div className="stat">
        <div className="k">Findings</div>
        <div className="v">{bundle.totals.findings.toLocaleString()}</div>
        <div className="d">total actionable items</div>
      </div>
      <div className="stat">
        <div className="k">Visible</div>
        <div className="v">{visibleFindings.toLocaleString()}</div>
        <div className="d">matching filters</div>
      </div>
      <a className="stat stat-link warn" href={buildHref(["pages"], new URLSearchParams({ q: "incomplete-or-unparseable" }))}>
        <div className="k">Incomplete</div>
        <div className="v">{bundle.totals.incompleteOrUnparseable.toLocaleString()}</div>
        <div className="d">need re-review or re-abstraction</div>
      </a>
    </div>
  );
}

function FilterBlock({ facet, values, counts, selected, onToggle, onClear }: {
  facet: Facet;
  values: string[];
  counts: Map<string, number>;
  selected: Set<string>;
  onToggle: (value: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="filter-block">
      <div className="filter-h">
        {facet.label}
        {selected.size > 0 && <button className="clear" onClick={onClear}>Clear</button>}
      </div>
      <div className="filter-list">
        {values.map((value) => {
          const count = counts.get(value) ?? 0;
          const isSelected = selected.has(value);
          return (
            <button
              key={value}
              className={`filter-row ${isSelected ? "on" : ""} ${count === 0 && !isSelected ? "disabled" : ""}`}
              disabled={count === 0 && !isSelected}
              onClick={() => onToggle(value)}
              title={facet.display?.(value) ?? value}
            >
              <span className="box" />
              {facet.colors?.[value] && <span className="sw-dot" style={{ background: facet.colors[value] }} />}
              <span className="lbl">{facet.display?.(value) ?? value}</span>
              <span className="cnt">{count.toLocaleString()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ActiveFilters({ active, query, onClearFacet, onClearQuery, totalShown, totalAll }: {
  active: Record<string, Set<string>>;
  query: string;
  onClearFacet: (key: string) => void;
  onClearQuery: () => void;
  totalShown: number;
  totalAll: number;
}) {
  const chips: { label: string; onClear: () => void }[] = [];
  if (query) chips.push({ label: `text: "${query}"`, onClear: onClearQuery });
  for (const facet of FACETS) {
    const selected = active[facet.key];
    if (selected?.size) {
      const labels = [...selected].map((value) => facet.display?.(value) ?? value);
      chips.push({ label: `${facet.label}: ${labels.length === 1 ? labels[0] : labels.length}`, onClear: () => onClearFacet(facet.key) });
    }
  }
  return (
    <div className="toolbar">
      <span className="lbl">Showing {totalShown.toLocaleString()} of {totalAll.toLocaleString()}</span>
      {chips.map((chip, index) => (
        <span key={index} className="chip">
          <b>{chip.label}</b>
          <button className="x" onClick={chip.onClear} aria-label="Remove filter">x</button>
        </span>
      ))}
    </div>
  );
}

function CopyForLlmButton({ findings, active, query, totalAll }: {
  findings: FlatFinding[];
  active: Record<string, Set<string>>;
  query: string;
  totalAll: number;
}) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const onClick = async () => {
    const filters: { label: string; values: string[] }[] = [];
    for (const facet of FACETS) {
      const set = active[facet.key];
      if (set?.size) filters.push({ label: facet.label, values: [...set].map((value) => facet.display?.(value) ?? value) });
    }
    const markdown = buildLlmMarkdown(findings, {
      url: location.href,
      totalShown: findings.length,
      totalAll,
      filters,
      query: query.trim() || undefined,
    });
    try {
      await navigator.clipboard.writeText(markdown);
      setState("ok");
    } catch {
      setState("err");
    }
    setTimeout(() => setState("idle"), 1800);
  };
  const label = state === "ok"
    ? `Copied ${findings.length.toLocaleString()} findings`
    : state === "err"
      ? "Copy failed"
      : `Copy for LLM (${findings.length.toLocaleString()})`;
  return (
    <button
      className={`pill-btn ${state === "ok" ? "primary" : ""}`}
      onClick={onClick}
      disabled={findings.length === 0}
      title="Copy currently-filtered findings to clipboard as Markdown for pasting into an LLM"
    >
      {label}
    </button>
  );
}

function FindingsTable({ findings, query, compact = false }: { findings: FlatFinding[]; query: string; compact?: boolean }) {
  if (findings.length === 0) return <div className="empty">No findings match.</div>;
  return (
    <>
      <table className={`findings-table ${compact ? "compact" : ""}`}>
        <colgroup>
          <col style={{ width: 210 }} />
          <col style={{ width: 88 }} />
          <col style={{ width: 82 }} />
          <col style={{ width: 180 }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Page</th>
            <th>Priority</th>
            <th>Kind</th>
            <th>Category</th>
            <th>Finding</th>
          </tr>
        </thead>
        <tbody>
          {findings.slice(0, 800).map((finding) => <FindingRow key={finding.id} finding={finding} query={query} />)}
        </tbody>
      </table>
      {findings.length > 800 && <div className="results-overflow">+ {(findings.length - 800).toLocaleString()} more matching findings. Narrow filters to show them.</div>}
    </>
  );
}

function FindingRow({ finding, query }: { finding: FlatFinding; query: string }) {
  const href = buildHref(["f", finding.id]);
  return (
    <tr className="finding-row" onClick={(event) => {
      if ((event.target as HTMLElement).closest("a, button")) return;
      window.open(href, "_blank", "noopener");
    }}>
      <td className="ft-path">
        <a className="path-resource" href={buildHref(["p", finding.pageLabel])}>{finding.pageLabel}</a>
        <div className="path-element">{finding.pagePath ?? `source/${finding.pageLabel}.html`}</div>
      </td>
      <td><Badge value={finding.priority ?? "—"} kind="priority" /></td>
      <td><Badge value={formatKind(finding.kind ?? "—")} /></td>
      <td><code className="delta-code">{finding.category ?? "—"}</code></td>
      <td>
        <a className="ft-title" href={href} target="_blank" rel="noopener">{highlight(finding.title, query)}</a>
        <div className="ft-goal">{highlight(finding.narrative?.problem || finding.narrative?.recommendedNextStep || "", query)}</div>
      </td>
    </tr>
  );
}

function PagesTable({ pages }: { pages: PageReview[] }) {
  if (pages.length === 0) return <div className="empty">No pages match.</div>;
  return (
    <table className="findings-table pages-table">
      <colgroup>
        <col style={{ width: 280 }} />
        <col style={{ width: 210 }} />
        <col style={{ width: 110 }} />
        <col />
      </colgroup>
      <thead>
        <tr><th>Page</th><th>Status</th><th>Findings</th><th>Summary</th></tr>
      </thead>
      <tbody>
        {pages.map((page) => (
          <tr key={page.pageLabel} className="finding-row">
            <td><a className="path-resource" href={buildHref(["p", page.pageLabel])}>{page.pageLabel}</a></td>
            <td><Badge value={page.status} tone={page.status === "incomplete-or-unparseable" ? "warn" : undefined} /></td>
            <td>{page.findingCount}</td>
            <td className="ft-goal">{page.summary || page.noFindingReason || "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Section({ title, text, md }: { title: string; text?: string; md?: string }) {
  const source = md ?? text;
  if (!source?.trim()) return null;
  return (
    <section className="section">
      <h2>{title}</h2>
      {md ? <Markdown source={source} /> : <p className="md-text">{source}</p>}
    </section>
  );
}

function QuestionGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const rendered = React.Children.toArray(children).filter(Boolean);
  if (rendered.length === 0) return null;
  return (
    <div className="qgroup">
      <div className="qgroup-h">{title}</div>
      {rendered}
    </div>
  );
}

function SourceLocations({ locations }: { locations: SourceLocation[] }) {
  if (locations.length === 0) return null;
  return (
    <section className="section">
      <h2>Source locations</h2>
      <table className="table">
        <thead><tr><th>File</th><th>Lines</th><th>Commit / branch</th></tr></thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td><code>{location.filePath}</code></td>
              <td>{location.lineRange ? `${location.lineRange.start}-${location.lineRange.end}` : "—"}</td>
              <td>{location.commitHash || location.gitBranch || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function EvidenceList({ evidence }: { evidence: EvidenceReference[] }) {
  if (evidence.length === 0) return null;
  return (
    <section className="section">
      <h2>Evidence and references</h2>
      <div className="evidence-list">
        {evidence.map((item, index) => (
          <div key={index} className="evidence-card">
            <div className="evidence-head">
              <Badge value={item.type || "evidence"} />
              {item.confidence && <span className="dim">confidence: {item.confidence}</span>}
            </div>
            <div className="evidence-title">
              {item.url ? <a href={item.url} target="_blank" rel="noopener">{item.label || item.id || item.url}</a> : (item.label || item.id || "Evidence")}
            </div>
            {item.filePath && <div><code>{item.filePath}{item.lineRange ? `:${item.lineRange.start}-${item.lineRange.end}` : ""}</code></div>}
            {item.quote && <blockquote>{item.quote}</blockquote>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Quotes({ quotes }: { quotes: string[] }) {
  if (quotes.length === 0) return null;
  return (
    <section className="section">
      <h2>Raw evidence quotes</h2>
      <ul className="quote-list">
        {quotes.map((quote, index) => <li key={index}><code>{quote}</code></li>)}
      </ul>
    </section>
  );
}

function TagSection({ title, tags }: { title: string; tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="tag-cloud">{tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    </section>
  );
}

function FlagGrid({ finding }: { finding: ActionableFinding }) {
  return (
    <section className="section">
      <h2>Boolean labels</h2>
      <dl className="kv">
        <dt>Intent mismatch</dt><dd>{yesNo(finding.intentVsImplementationMismatch)}</dd>
        <dt>Overlooked/new problem</dt><dd>{yesNo(finding.overlookedOrNewlyNoticedProblem)}</dd>
        <dt>Evidence gap blocks decision</dt><dd>{yesNo(finding.evidenceGapBlocksDecision)}</dd>
      </dl>
    </section>
  );
}

function JsonDownload({ data, filename, label }: { data: unknown; filename: string; label: string }) {
  const href = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  return <a className="pill-btn" href={href} download={filename}>{label}</a>;
}

function Badge({ value, kind, tone }: { value: string; kind?: "priority"; tone?: "warn" }) {
  const style = kind === "priority" && PRIORITY_COLOR[value] ? { borderColor: PRIORITY_COLOR[value], color: PRIORITY_COLOR[value] } : undefined;
  return <span className={`bdg ${tone ?? ""}`} style={style}>{value}</span>;
}

function NotFound({ label, value }: { label: string; value: string }) {
  return (
    <>
      <TopBar />
      <Crumb><a href="#/">Findings explorer</a></Crumb>
      <main className="detail-page"><div className="empty">{label} not found: <code>{value}</code></div></main>
      <Footer />
    </>
  );
}

function activeFacets(route: RouteState): Record<string, Set<string>> {
  const out: Record<string, Set<string>> = {};
  for (const facet of FACETS) {
    const raw = route.params.get(facet.key);
    out[facet.key] = raw ? new Set(raw.split(",").filter(Boolean)) : new Set();
  }
  return out;
}

function filterFindings(items: FlatFinding[], active: Record<string, Set<string>>, query: string): FlatFinding[] {
  const needle = query.trim().toLowerCase();
  return items.filter((finding) => {
    for (const facet of FACETS) {
      const selected = active[facet.key];
      if (selected?.size && !facet.values(finding).some((value) => selected.has(value))) return false;
    }
    if (!needle) return true;
    return searchText(finding).includes(needle);
  });
}

function buildFacetCounts(active: Record<string, Set<string>>, query: string): Record<string, Map<string, number>> {
  const counts: Record<string, Map<string, number>> = {};
  for (const facet of FACETS) {
    const withoutThisFacet = { ...active, [facet.key]: new Set<string>() };
    const map = new Map<string, number>();
    for (const finding of filterFindings(flat, withoutThisFacet, query)) {
      for (const value of facet.values(finding)) map.set(value, (map.get(value) ?? 0) + 1);
    }
    counts[facet.key] = map;
  }
  return counts;
}

function buildFacetValues(counts: Record<string, Map<string, number>>): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const facet of FACETS) {
    const values = [...counts[facet.key].keys()];
    if (facet.order) {
      values.sort((a, b) => {
        const ai = facet.order!.indexOf(a);
        const bi = facet.order!.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
    } else {
      values.sort((a, b) => (counts[facet.key].get(b) ?? 0) - (counts[facet.key].get(a) ?? 0) || a.localeCompare(b));
    }
    out[facet.key] = values;
  }
  return out;
}

function searchText(finding: FlatFinding): string {
  return [
    finding.id,
    finding.localId,
    finding.pageLabel,
    finding.pagePath,
    finding.title,
    finding.priority,
    finding.kind,
    finding.category,
    finding.pageReview.status,
    finding.pageReview.summary,
    finding.narrative?.problem,
    finding.narrative?.analysis,
    finding.narrative?.whyItMatters,
    finding.narrative?.recommendedNextStep,
    ...(finding.narrative?.rawEvidenceQuotes ?? []),
    ...(finding.sourceLocations ?? []).map((location) => `${location.filePath}:${location.lineRange?.start ?? ""}-${location.lineRange?.end ?? ""}`),
    ...(finding.evidence ?? []).flatMap((evidence) => [evidence.type, evidence.id, evidence.label, evidence.url, evidence.filePath, evidence.quote]),
  ].filter(Boolean).join(" ").toLowerCase();
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim() || !text) return text;
  const idx = text.toLowerCase().indexOf(query.trim().toLowerCase());
  if (idx < 0) return text;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>;
}

function yesNo(value?: boolean): string {
  return value ? "yes" : "no";
}

function formatKind(value: string): string {
  if (value === "—") return value;
  return KIND_LABEL[value] ? `${value} · ${KIND_LABEL[value]}` : value;
}
