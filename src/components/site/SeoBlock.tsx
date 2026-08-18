import { Link2, Search, Tags, Image as ImageIcon, Code2 } from "lucide-react";

const kv: { k: string; v: string }[] = [
  {
    k: "Title tag (58 chars)",
    v: "Best AI Courses for Business Analysts in India 2026",
  },
  {
    k: "Meta description (156 chars)",
    v: "We scored 130+ AI courses for Business Analysts in India 2026 on specification, evaluation and governance depth — with ₹ pricing and honest limitations.",
  },
  { k: "URL slug", v: "best-ai-courses-for-business-analysts-in-india" },
  {
    k: "Featured snippet target",
    v: "The AI Business Analyst Capability Ladder table, and the \u201cDo Indian BAs need Python?\u201d answer",
  },
  { k: "Update cadence", v: "Reviewed quarterly; pricing bands re-checked at each update" },
];

const keywords: { term: string; type: string; placement: string }[] = [
  {
    term: "AI courses for business analysts in India",
    type: "Primary",
    placement: "H1, title tag, meta description, first 100 words, one H2",
  },
  {
    term: "best AI course for business analyst 2026",
    type: "Secondary",
    placement: "Top 10 section intro and comparison table caption",
  },
  {
    term: "AI course for BA without coding",
    type: "Secondary",
    placement: "Coding-load section and FAQ",
  },
  {
    term: "generative AI course for business analysts",
    type: "Secondary",
    placement: "Reality check section and Module 2 / Module 10 copy",
  },
  {
    term: "AI business analyst salary India",
    type: "Secondary",
    placement: "Career paths section only, with market-range caveat",
  },
  {
    term: "AI requirements engineering / acceptance criteria for AI",
    type: "Long-tail",
    placement: "Skills section, Module 6 and Module 7 copy",
  },
  {
    term: "DPDP Act AI compliance for business analysts",
    type: "Long-tail",
    placement: "Governance subsection and FAQ",
  },
  {
    term: "AI course fees in India with EMI",
    type: "Long-tail",
    placement: "Pricing tier table and LogicMojo pricing block",
  },
];

const alts: string[] = [
  "AI for Business Analysts competency scorecard comparing ten courses across BA-critical capabilities",
  "AI Business Analyst capability ladder from Level 0 awareness to Level 5 governance ownership",
  "Course fit table matching BA profiles to recommended AI courses in India",
  "₹ pricing tier table for AI courses available to Indian Business Analysts with EMI availability",
  "Nineteen-module LogicMojo AI curriculum for Business Analysts shown as an expandable module list",
  "Comparison table of what typical AI-for-business courses teach versus what the 2026 BA role requires",
  "Expert reviewer cards showing BA practice head, AI product manager and AI governance lead",
  "Interactive decision tree that recommends an AI course based on level, budget and goal",
  "Ninety-day roadmap turning an AI course into inspectable Business Analyst artifacts",
  "Buyer's checklist of green flags and red flags when choosing an AI course in India",
];

const anchors: string[] = [
  "AI course overview for working professionals",
  "generative AI course syllabus",
  "business analytics and data analytics course",
  "AI career guide for analysts in India",
  "AI interview questions for business analysts",
  "current batch schedule and ₹ pricing",
];

export function SeoBlock() {
  return (
    <div className="not-prose my-8 grid gap-4">
      <div className="surface-card border-primary/25 bg-gradient-to-br from-primary/[0.06] to-transparent p-6">
        <p className="flex items-center gap-2 font-semibold">
          <Search className="size-4 text-primary" aria-hidden /> Metadata
        </p>
        <dl className="mt-4 grid gap-3">
          {kv.map((r) => (
            <div key={r.k} className="grid gap-1 sm:grid-cols-[210px_1fr] sm:gap-4">
              <dt className="eyebrow text-muted-foreground">{r.k}</dt>
              <dd className="text-sm leading-relaxed">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="surface-card border-primary/25 p-6">
        <p className="flex items-center gap-2 font-semibold">
          <Tags className="size-4 text-primary" aria-hidden /> Keywords and intended placement
        </p>
        <ul className="mt-4 grid list-none gap-2.5 pl-0">
          {keywords.map((k) => (
            <li key={k.term} className="rounded-lg border border-border/70 bg-muted/40 p-3">
              <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
                {k.term}
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                  {k.type}
                </span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{k.placement}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="surface-card border-primary/25 p-6">
          <p className="flex items-center gap-2 font-semibold">
            <Code2 className="size-4 text-primary" aria-hidden /> Recommended schema
          </p>
          <ul className="mt-3 list-none space-y-2 pl-0 text-sm text-muted-foreground">
            {[
              "Article — author, reviewer and dateModified",
              "FAQPage — the 22 questions in this article (implemented)",
              "ItemList — the rank 1–10 ordering",
              "BreadcrumbList — blog hub to this article",
              "Review / Rating — only where a score is honestly attributable",
            ].map((s) => (
              <li key={s} className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/50" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-card border-primary/25 p-6">
          <p className="flex items-center gap-2 font-semibold">
            <Link2 className="size-4 text-primary" aria-hidden /> Internal anchor text variants
          </p>
          <ul className="mt-3 list-none space-y-2 pl-0 text-sm text-muted-foreground">
            {anchors.map((a) => (
              <li key={a} className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="surface-card border-primary/25 p-6">
        <p className="flex items-center gap-2 font-semibold">
          <ImageIcon className="size-4 text-primary" aria-hidden /> Image alt-text suggestions
        </p>
        <ol className="mt-3 grid list-none gap-2 pl-0 text-sm text-muted-foreground sm:grid-cols-2">
          {alts.map((a, i) => (
            <li key={a} className="flex gap-2">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              {a}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function InternalLinks() {
  const links = [
    { t: "AI Course overview", d: "The full live AI programme, all tracks and prerequisites." },
    { t: "Generative AI course", d: "LLMs, RAG and agents at specification depth." },
    { t: "Business Analytics course", d: "SQL, dashboards and analysis — a different category to AI for BA." },
    { t: "AI career guide", d: "Roles, ladders and city-level demand across India." },
    { t: "AI interview questions", d: "Specification, evaluation and governance question banks." },
    { t: "Pricing and batch schedule", d: "Current ₹ fees, GST treatment, EMI and next batch dates." },
  ];
  return (
    <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <a
          key={l.t}
          href="#"
          className="surface-card group border-primary/20 p-5 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <p className="font-semibold text-primary group-hover:underline">{l.t} →</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
        </a>
      ))}
    </div>
  );
}
