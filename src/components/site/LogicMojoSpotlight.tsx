import { useState } from "react";
import {
  BadgeCheck,
  ChevronDown,
  Clock3,
  CreditCard,
  FileText,
  IndianRupee,
  ScrollText,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { Section, H3, H4, Callout, Caption, DataTable, Score } from "./Prose";

type Module = { n: string; title: string; body: string; outcome?: string; tag?: string };

const modules: Module[] = [
  {
    n: "01",
    title: "AI Foundations for Business Professionals",
    body: "What AI, machine learning, deep learning and generative AI actually are, what each is genuinely good and bad at, and where the 2026 hype-to-capability gap sits.",
  },
  {
    n: "02",
    title: "How LLMs Work (Conceptually, Not Mathematically)",
    body: "Tokens, context windows, embeddings, inference, temperature, why models hallucinate and why identical prompts return different answers — taught through analogies and diagrams, with no linear algebra.",
  },
  {
    n: "03",
    title: "AI Use-Case Discovery & Prioritisation",
    body: "Running structured AI discovery workshops, identifying opportunities across processes, applying a value-versus-feasibility matrix adapted for AI, and separating problems AI genuinely solves from problems better solved by a rule, a report or a process fix.",
  },
  {
    n: "04",
    title: "Feasibility & Data-Readiness Assessment",
    body: "Does the data exist, is it accessible, labelled, representative, permitted and sufficient? Data quality dimensions, lineage, consent and privacy constraints — and why skipping this step is the most common cause of failed AI projects.",
    outcome: "A data-readiness report that kills bad projects early.",
  },
  {
    n: "05",
    title: "The AI Business Case",
    body: "Cost drivers BAs are rarely taught — inference and token economics, retrieval infrastructure, human review load, monitoring, retraining — plus benefit modelling, sensitivity analysis and honest treatment of uncertainty.",
  },
  {
    n: "06",
    title: "Requirements Engineering for Probabilistic Systems",
    body: "Why \u201cthe system shall\u201d breaks down at 92% accuracy. Specifying confidence thresholds, fallback behaviour, escalation paths, source-of-truth hierarchies, refusal and out-of-scope handling; user stories for AI features; AI-specific non-functional requirements covering latency, cost per call, explainability and auditability.",
    outcome: "A requirements pack a delivery team can build against.",
    tag: "The central module",
  },
  {
    n: "07",
    title: "Acceptance Criteria & Defining \u201cGood Enough\u201d",
    body: "Translating business risk into thresholds; when precision matters more than recall and when the reverse holds; cost-asymmetry analysis for false positives and false negatives; agreeing thresholds with stakeholders before build starts.",
    outcome: "Measurable acceptance criteria for a non-deterministic system.",
  },
  {
    n: "08",
    title: "Evaluation, Golden Datasets & AI UAT",
    body: "Building test sets with SMEs, designing an evaluation harness in business terms, human evaluation rubrics, LLM-as-judge explained in plain language, red-teaming for failure modes, running UAT when outputs vary between runs, and specifying post-deployment monitoring and drift review.",
  },
  {
    n: "09",
    title: "Prompt Engineering for BA Deliverables (Applied)",
    body: "Structured prompting for elicitation prep, requirement drafting and gap-checking, user story generation and splitting, test case derivation, documentation and stakeholder communication — plus the review discipline that prevents shipping plausible-sounding wrong content. Treated as baseline craft, not a differentiator.",
  },
  {
    n: "10",
    title: "RAG for Business Analysts",
    body: "Why enterprises build retrieval-based assistants, what the architecture means in business terms, and what the BA must specify: corpus scope, chunking implications for answer quality, metadata and permissions, citation requirements, freshness and re-indexing rules, and conflict resolution between sources.",
  },
  {
    n: "11",
    title: "AI Agents & Agentic Workflow Specification",
    body: "What an agent is in business terms; planning, memory and tool use; where agentic automation beats rule-based automation and where it is reckless; specifying autonomy boundaries, approval gates, human-in-the-loop checkpoints, audit trails and rollback; multi-agent failure modes.",
  },
  {
    n: "12",
    title: "MCP, Tool Integration & Enterprise Context",
    body: "What Model Context Protocol and tool-calling mean for integration requirements, what to ask about system access and permissions, and how AI integration requirements differ from conventional API requirements.",
  },
  {
    n: "13",
    title: "Data Fluency for BAs",
    body: "SQL to the level a BA genuinely needs — querying, joins, aggregation, validating claims independently — plus reading data profiles, spotting quality issues, understanding pipelines conceptually, and interpreting a model evaluation report without a translator.",
  },
  {
    n: "14",
    title: "Process Analysis Meets AI",
    body: "Process mining concepts, identifying automation candidates from process data, intelligent document processing, and redrawing process maps for AI-augmented rather than rule-automated flows.",
  },
  {
    n: "15",
    title: "AI Risk, Guardrails & Responsible AI",
    body: "Failure modes including hallucination, prompt injection, data leakage, bias and drift; guardrail patterns; human oversight design; and translating risk into requirements rather than into a slide.",
  },
  {
    n: "16",
    title: "AI Governance & the 2026 Regulatory Landscape",
    body: "Risk-tier thinking under the EU AI Act, ISO/IEC 42001 and the NIST AI RMF in practical terms, documentation and audit-trail obligations, model cards and impact assessments, data protection intersections including GDPR and India's DPDP Act, and the BA's specific place in the governance chain — with the standing caveat that this is general information, not legal advice.",
  },
  {
    n: "17",
    title: "Vendor Evaluation & Build vs. Buy",
    body: "Interrogating accuracy claims, designing a proof-of-concept with real acceptance criteria, total cost of ownership, data residency and lock-in, and running a structured AI vendor selection.",
  },
  {
    n: "18",
    title: "Adoption, Change Management & Stakeholder Communication",
    body: "Why technically successful AI projects fail at adoption, trust calibration among end users, training and rollout design, communicating capability and limitation to executives, and handling resistance honestly.",
  },
  {
    n: "19",
    title: "Capstone — End-to-End AI Initiative Pack",
    body: "A learner-chosen business problem taken through the full lifecycle: discovery, use-case canvas, data-readiness assessment, business case, requirements pack, evaluation plan, governance and risk register, adoption plan — documented as a portfolio artifact.",
    tag: "Capstone",
  },
];

const artifacts = [
  "Use-case canvas and prioritised backlog",
  "Data-readiness assessment",
  "Business case with cost model",
  "AI requirements pack",
  "Acceptance criteria specification",
  "Evaluation plan with golden dataset design",
  "RAG requirements document",
  "Agentic workflow specification",
  "AI risk register",
  "Governance checklist mapped to risk tier",
  "Vendor evaluation scorecard",
  "Adoption plan",
  "Capstone initiative pack",
];

const limitations: { title: string; body: string }[] = [
  {
    title: "Not the cheapest",
    body: "Free options — DeepLearning.AI audit, Microsoft Learn, Google Cloud Skills Boost — and sub-₹3,000 Udemy courses exist and are genuinely useful. A BA who only needs Level 1–2 literacy does not need to pay this much.",
  },
  {
    title: "Not university-branded",
    body: "UpGrad, Great Learning, Simplilearn and executive-education providers offer credentials from named institutions. If your employer, immigration pathway or internal promotion process weights institutional branding, that is a legitimate reason to rank them higher than we did.",
  },
  {
    title: "Not a professional-body credential",
    body: "For BAs who need IIBA-recognised credits or credential alignment within the BA profession specifically, an IIBA-aligned pathway serves a purpose this course does not.",
  },
  {
    title: "Not fully self-paced",
    body: "Cohort structure improves completion but constrains flexibility. BAs with unpredictable travel or on-call delivery schedules may genuinely prefer Coursera or Udemy.",
  },
  {
    title: "Not a data science program",
    body: "By design. If your actual goal is to become a data scientist or ML engineer, this is the wrong course and we say so — a full AI/ML program is the correct path.",
  },
  {
    title: "Not a BA fundamentals course",
    body: "It assumes you understand elicitation, requirements documentation and stakeholder management. A complete beginner to business analysis should build BA fundamentals first.",
  },
  {
    title: "Smaller brand footprint",
    body: "Recruiter name-recognition trails Coursera, UpGrad and Scaler. The curriculum is the argument here, not the logo.",
  },
  {
    title: "Requires real commitment",
    body: "Eight to twelve hours weekly. Passive learners will not extract the value, and the artifacts only exist if the work is done.",
  },
];

function ModuleCard({ m }: { m: Module }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="surface-card overflow-hidden border-primary/15 bg-gradient-to-br from-primary/[0.04] to-transparent transition-shadow duration-300 hover:shadow-lift">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-4 text-left sm:p-5"
      >
        <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-xs font-semibold text-primary-foreground shadow-sm">
          {m.n}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-semibold leading-snug">{m.title}</span>
            {m.tag ? (
              <span className="rounded-full border border-accent/40 bg-accent/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-foreground">
                {m.tag}
              </span>
            ) : null}
          </span>
          <span
            className={[
              "mt-1.5 block text-sm leading-relaxed text-muted-foreground",
              open ? "" : "line-clamp-2",
            ].join(" ")}
          >
            {m.body}
          </span>
          {open && m.outcome ? (
            <span className="mt-3 flex items-start gap-2 rounded-lg border border-good/30 bg-good/[0.07] px-3 py-2 text-sm">
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-good" />
              <span>
                <strong>Outcome:</strong> {m.outcome}
              </span>
            </span>
          ) : null}
        </span>
        <ChevronDown
          className={[
            "mt-1 size-4 shrink-0 text-primary transition-transform duration-300",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
    </li>
  );
}

export function LogicMojoSpotlight() {
  return (
    <Section
      id="logicmojo"
      eyebrow="Section 3"
      title="Why LogicMojo Is Our #1 Pick for Business Analysts — Curriculum, Artifacts, and an Honest Account of Its Limits"
      blue
    >
      <Callout tone="warn" label="Publisher disclosure">
        <p>
          LogicMojo publishes this comparison. That is exactly why this section states the scoring
          evidence in detail and includes a limitations subsection written to the same standard as
          every competitor's cons list. Re-weight our criteria if your priorities differ — the
          weights are published above so you can.
        </p>
      </Callout>

      <p>
        Ranking a course #1 for Business Analysts requires a narrower lens than ranking it #1 in
        general. The questions are: does it treat the BA as a BA, or quietly retrain them as a junior
        data scientist? Does it teach <strong>specification</strong> — writing what an AI system must
        do and prove — and <strong>evaluation</strong> — deciding whether it did — the parts of AI
        work that actually land on a BA's desk, or does it stop at literacy and prompting? Does the
        learner finish with artifacts a hiring manager or delivery lead can inspect? Is the
        governance content current with the 2026 regulatory landscape rather than a generic ethics
        lecture?
      </p>
      <p>
        LogicMojo scored highest on the combined weighting, with the largest margin on the criteria
        that carry the most weight for this audience: BA-role relevance and hands-on artifact
        quality.
      </p>

      <div className="my-8 grid gap-3 sm:grid-cols-3">
        {[
          { k: "19", v: "modules, including the capstone", icon: ScrollText },
          { k: "8–12", v: "portfolio-grade BA artifacts", icon: FileText },
          { k: "Zero", v: "Python prerequisite", icon: Sparkles },
        ].map((s) => (
          <div
            key={s.k}
            className="surface-card border-primary/20 bg-gradient-to-br from-primary/[0.07] to-accent/[0.05] p-5 text-center"
          >
            <s.icon className="mx-auto size-5 text-primary" />
            <p className="mt-2 font-mono text-2xl font-semibold text-primary">{s.k}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>

      <H3 id="logicmojo-curriculum">Curriculum breakdown, module by module</H3>
      <p>
        Tap any module to expand it. The sequence is deliberately built backwards from BA
        deliverables rather than forwards from AI theory.
      </p>
      <ol className="not-prose my-6 grid gap-3">
        {modules.map((m) => (
          <ModuleCard key={m.n} m={m} />
        ))}
      </ol>

      <H3 id="logicmojo-gap">What most courses teach a BA vs. what the 2026 role requires</H3>
      <DataTable
        head={[
          "BA-critical capability",
          "Typical \u201cAI for business\u201d course",
          "What the 2026 BA role actually requires",
          "LogicMojo",
        ]}
        firstColWidth="min-w-[210px]"
        rows={[
          [
            "Data-readiness assessment",
            <Score key="a">Not Covered</Score>,
            "The most common project-killer",
            <span key="b" className="text-good">Deep, template-driven</span>,
          ],
          [
            "Requirements for probabilistic systems",
            <Score key="a">Not Covered</Score>,
            "The defining new BA skill",
            <span key="b" className="text-good">Central module</span>,
          ],
          [
            "Acceptance criteria & thresholds",
            <Score key="a">Not Covered</Score>,
            "Required before any AI build starts",
            <span key="b" className="text-good">Deep, with cost-asymmetry method</span>,
          ],
          [
            "Evaluation, golden datasets, AI UAT",
            <Score key="a">Limited</Score>,
            "Increasingly BA-owned, not engineering-owned",
            <span key="b" className="text-good">Hands-on</span>,
          ],
          [
            "Agentic workflow specification",
            <Score key="a">Not Covered</Score>,
            "Fastest-growing project category",
            <span key="b" className="text-good">Autonomy-boundary method</span>,
          ],
          [
            "AI governance & regulatory documentation",
            <Score key="a">Basic</Score>,
            "Audit-relevant and documentation-bound",
            <span key="b" className="text-good">Practical and current</span>,
          ],
          [
            "Model building in Python",
            <Score key="a">Deep</Score>,
            <span key="b" className="text-destructive">Not a BA responsibility</span>,
            <span key="c" className="text-muted-foreground">Deliberately excluded (optional exposure only)</span>,
          ],
        ]}
      />
      <Caption>
        The last row is the point. A course being "more technical" does not make it better for a
        Business Analyst — it often makes it worse, because the hours spent training models are hours
        not spent learning to specify and evaluate them.
      </Caption>

      <H3 id="logicmojo-ba-focus">Why "BA-focused" here actually means BA-focused</H3>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
        {[
          {
            t: "No Python barrier",
            d: "Zero Python prerequisite, with optional technical support modules for those who want them.",
          },
          {
            t: "Concepts through deliverables",
            d: "Every AI concept is introduced through a BA deliverable, not through a code notebook.",
          },
          {
            t: "Live IST batches",
            d: "Real instructors, weekend-weighted timings and real-time doubt resolution rather than a forum queue.",
          },
        ].map((c) => (
          <div key={c.t} className="surface-card border-primary/20 p-5">
            <p className="font-semibold">{c.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>

      <H3 id="logicmojo-artifacts">Artifacts a Business Analyst leaves with</H3>
      <p>
        Artifacts, not certificates, are what a BA can show in an interview or an internal capability
        review. Each item below is produced and mentor-reviewed during the program.
      </p>
      <div className="not-prose my-6 flex flex-wrap gap-2">
        {artifacts.map((a) => (
          <span
            key={a}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1.5 text-sm transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10"
          >
            <FileText className="size-3.5 shrink-0 text-primary" />
            {a}
          </span>
        ))}
      </div>

      <H3 id="logicmojo-pricing">Pricing and value for a Business Analyst</H3>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: IndianRupee, label: "Programme fee", value: "₹XX,XXX", note: "GST as applicable for Indian learners" },
          { icon: CreditCard, label: "EMI", value: "Available", note: "via [EMI Partner]; no bond or lock-in" },
          { icon: Clock3, label: "Duration", value: "X weeks", note: "8–12 hours weekly commitment" },
          { icon: CalendarLike, label: "Batch cadence", value: "[Batch Dates]", note: "Live IST weekend and evening cohorts" },
        ].map((p) => (
          <div
            key={p.label}
            className="surface-card border-primary/20 bg-gradient-to-br from-primary/[0.06] to-transparent p-5"
          >
            <p.icon className="size-5 text-primary" />
            <p className="eyebrow mt-3 text-muted-foreground">{p.label}</p>
            <p className="font-mono text-xl font-semibold text-primary">{p.value}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{p.note}</p>
          </div>
        ))}
      </div>
      <p>
        For a Business Analyst the return is measured in <strong>scope of work</strong>, not just
        salary: being the analyst who owns AI discovery, who is trusted with the flagship program,
        who is consulted before vendor selection. A BA already earning a professional salary should
        weigh <strong>time cost</strong> above fee. A program that consumes six months and does not
        teach specification is the expensive option regardless of price.
      </p>

      <H3 id="logicmojo-limits">Honest limitations</H3>
      <p>
        Written to the same standard as every competitor's cons list, and not softened. Each of the
        eight points below is a real reason a specific reader should choose something else.
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {limitations.map((l) => (
          <div
            key={l.title}
            className="surface-card border-destructive/25 bg-destructive/[0.04] p-5 transition-shadow duration-300 hover:shadow-lift"
          >
            <p className="flex items-center gap-2 font-semibold">
              <TriangleAlert className="size-4 shrink-0 text-destructive" />
              {l.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
          </div>
        ))}
      </div>

      <div className="not-prose my-8 overflow-hidden rounded-2xl bg-navy-grid p-7 text-center text-primary-foreground shadow-lift sm:p-9">
        <p className="font-display text-2xl font-semibold sm:text-3xl">
          Explore the full AI curriculum for Business Analysts
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
          Module-by-module syllabus, artifact list, mentor profiles and the next live IST batch dates
          — including current ₹ pricing, GST treatment and EMI terms.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-card transition-transform duration-200 hover:-translate-y-0.5"
        >
          Explore the Full AI Curriculum + Batch Details →
        </a>
      </div>

      <H4>A note on what this section is not</H4>
      <p>
        Nothing above is a guarantee of a job, a promotion or a salary band, and the regulatory
        material in Modules 15 and 16 is general information rather than legal advice. If your
        priority is a university credential, a professional-body credit or a free introduction first,
        the reviews that follow name the better option for you explicitly.
      </p>
    </Section>
  );
}

function CalendarLike(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
