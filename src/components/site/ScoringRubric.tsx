import { useMemo, useState } from "react";
import { ChevronDown, ScrollText, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { DataTable, H3, H4, Callout, Caption } from "@/components/site/Prose";
import { Cite } from "@/components/site/Citations";

type Criterion = {
  key: string;
  n: number;
  name: string;
  weight: number;
  why: string;
  evidence: string[];
  anchors: { band: string; label: string; text: string }[];
  disqualifiers: string;
};

export const criteria: Criterion[] = [
  {
    key: "relevance",
    n: 1,
    name: "BA-Role Relevance",
    weight: 30,
    why:
      "It carries the largest weight because it is the only dimension that decides whether the fee changes your day job. A BA who cannot scope a use case, write acceptance criteria for a probabilistic output or run a data-readiness check is not more employable for having trained a classifier. Hiring managers I interviewed described the same gap in almost identical words, which is why I refused to spread this weight thinner.",
    evidence: [
      "Module-by-module mapping of each published syllabus against the ten competency rows in Table 2 — one row scored per module, not per marketing bullet.",
      "55+ interviews with heads of business analysis, BA CoE leads and GCC product leaders on what they actually ask BAs to own in AI projects.",
      "Job-description sampling for BA and product-analyst roles in Indian metros, checking which tasks appear in requirements sections.",
      "Post-course capability assessments on five BA-specific tasks (use-case scoping, AI requirements pack, acceptance criteria, data-readiness check, AI business case).",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Six or more competency rows taught with a BA-authored deliverable attached to each; specification of probabilistic behaviour is explicit." },
      { band: "7–8", label: "Good", text: "Four to five rows covered with at least two BA deliverables; some coverage inferred from adjacent product-management content." },
      { band: "5–6", label: "Moderate", text: "Two to three rows, mostly conceptual; learner must translate data-science framing into BA practice unaided." },
      { band: "3–4", label: "Basic", text: "AI taught competently but for a different role; BA relevance is a marketing claim on the landing page." },
      { band: "1–2", label: "Limited", text: "No mapping to BA responsibilities at any point in the published syllabus." },
    ],
    disqualifiers: "A programme claiming a BA track with no BA-authored artifact anywhere in the syllabus cannot score above 4, regardless of brand.",
  },
  {
    key: "depth",
    n: 2,
    name: "AI Depth and 2026 Currency",
    weight: 20,
    why:
      "The 2026 enterprise queue in India is GenAI, RAG and agent pilots, not 2019 supervised-learning demos.<sup /> A syllabus that stops at scikit-learn teaches a real skill for a role most BAs will never be hired into, so currency is weighted second.",
    evidence: [
      "Presence and depth of LLM, prompt design, RAG, vector store, agent, evaluation, guardrail and fine-tuning modules, scored on the same seven-topic grid used in every review.",
      "Last-updated dates on syllabus PDFs and course pages, plus version references (model names, framework versions) as an authenticity check.",
      "Trial sessions and recorded sample lectures where available, to confirm taught content matches the published outline.",
      "Cross-reference against enterprise-adoption and skills-demand reporting so currency is judged against the market, not against my preferences.",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Six or seven of the seven current topics taught with hands-on work, including evaluation and guardrails, and content refreshed within 6 months." },
      { band: "7–8", label: "Good", text: "Four to five topics with hands-on work; evaluation covered but lightly; refreshed within 12 months." },
      { band: "5–6", label: "Moderate", text: "GenAI present as a module bolted onto an older analytics core; agents and evaluation mostly absent." },
      { band: "3–4", label: "Basic", text: "One GenAI overview session; the remainder is pre-2024 material." },
      { band: "1–2", label: "Limited", text: "No GenAI content, or content that is demonstrably out of date on the tools it names." },
    ],
    disqualifiers: "No published last-updated signal and no dated tool references caps this criterion at 5 — I will not assume currency I cannot verify.",
  },
  {
    key: "artifacts",
    n: 3,
    name: "Hands-On Artifact Quality",
    weight: 20,
    why:
      "Artifacts are the only part of a course that survives into an interview. Every hiring manager conversation converged on the same test: show me something you specified. Quiz scores and completion certificates do not pass it, so I weight portfolio output as heavily as curriculum currency.",
    evidence: [
      "Count and type of graded deliverables named in the syllabus, separating BA artifacts (requirement packs, evaluation plans, governance checklists) from engineering artifacts.",
      "Sample artifacts shared voluntarily by learners — 40+ documents read and scored for specificity, testability and traceability.",
      "Capstone briefs checked for real or realistic datasets and named stakeholders versus toy CSV exercises.",
      "Whether artifacts receive human feedback, and by whom (practitioner, TA or automated rubric).",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Ten or more portfolio-grade artifacts, most BA-authored, with practitioner feedback on each and a defensible capstone." },
      { band: "7–8", label: "Good", text: "Five to nine artifacts with feedback on the major ones; capstone is real but scoped tightly." },
      { band: "5–6", label: "Moderate", text: "Two to four artifacts; feedback automated or peer-reviewed; capstone reusable but generic." },
      { band: "3–4", label: "Basic", text: "Notebook exercises only; nothing a BA could show a hiring panel as their own specification work." },
      { band: "1–2", label: "Limited", text: "Quizzes and a certificate." },
    ],
    disqualifiers: "Capstones with a provider-supplied solution notebook score no higher than 5, because the learner cannot claim the reasoning.",
  },
  {
    key: "coding",
    n: 4,
    name: "Appropriate Coding Load",
    weight: 10,
    why:
      "This is scored as calibration, not volume — both directions are penalised. Overloaded programmes drive BA dropout at the first debugging wall; under-loaded ones leave a BA unable to read model output or challenge a vendor benchmark. Ten percent, because the right load is a fit question rather than a quality ceiling.",
    evidence: [
      "Estimated hours of coding work inferred from assignment lists and lab counts, then checked against learner reports.",
      "Dropout points by module in the cohorts I could observe, which cluster tightly around the first unsupported coding assignment.",
      "The naive-beginner question set: does week one assume a working environment, is 'vector' defined before embeddings appear, is there a named human to ask at 11 p.m.?",
      "Whether a foundation block exists and runs before GenAI topics rather than alongside them.",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Coding present but scaffolded — enough to read outputs, run evaluations and prototype prompts, with a foundation block first and support at the wall." },
      { band: "7–8", label: "Good", text: "Load slightly high or slightly low for a BA, but ramped and supported." },
      { band: "5–6", label: "Moderate", text: "Engineering-paced or conceptual-only; a determined BA copes, an average one struggles or coasts." },
      { band: "3–4", label: "Basic", text: "Heavy unsupported coding, or no technical contact with a model at all." },
      { band: "1–2", label: "Limited", text: "Mis-sold on either side — an engineering bootcamp marketed to BAs, or a slide deck marketed as hands-on." },
    ],
    disqualifiers: "No doubt-resolution channel with a stated response window caps this criterion at 6 whatever the load.",
  },
  {
    key: "support",
    n: 5,
    name: "Learning Experience and Support",
    weight: 10,
    why:
      "Completion, not enrolment, produces capability. For working BAs in Indian delivery cycles the binding constraint is weeknight fatigue, so accountability structures and recording policy predict outcomes more reliably than content quality does.",
    evidence: [
      "Live versus recorded ratio, cohort size, session timings in IST and whether recordings are released the same week.",
      "Named mentorship model, TA availability, and the published response window for doubts — checked by asking as a prospective buyer.",
      "Catch-up and cohort-repeat policy, written down or not.",
      "Learner reports on dropout and re-entry, read for patterns across review sites, Reddit and Quora rather than for star ratings.",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Live cohort at IST-friendly hours, same-week recordings, named mentor, stated doubt SLA, free cohort repeat." },
      { band: "7–8", label: "Good", text: "Live sessions with recordings and TA support; catch-up possible but informal." },
      { band: "5–6", label: "Moderate", text: "Self-paced with scheduled doubt clinics or forum support; accountability depends entirely on the learner." },
      { band: "3–4", label: "Basic", text: "Self-paced with ticketed support only, or live sessions with no recording." },
      { band: "1–2", label: "Limited", text: "No human contact available at any price point in the offer." },
    ],
    disqualifiers: "Support terms that exist only in a sales call and not in writing are scored as absent.",
  },
  {
    key: "value",
    n: 6,
    name: "Value, Credential and Accessibility",
    weight: 10,
    why:
      "Fee matters, but only relative to capability gained and to the credential's standing with Indian employers. I keep it at 10% deliberately: readers routinely over-weight brand and EMI, and a cheaper programme that changes your work is better value than a prestigious one that does not.",
    evidence: [
      "₹ list price, GST treatment, EMI availability and refund terms read from the provider's own pricing or terms page and re-checked at each update.",
      "Employer recognition tested in the same 55+ hiring-manager interviews — specifically whether the credential is named in shortlisting.",
      "Credential portability: is it a verifiable badge, a professional-body designation, a vendor certification, or a provider PDF?",
      "Accessibility factors: IST scheduling, language options and bandwidth-light delivery for non-metro learners.",
    ],
    anchors: [
      { band: "9–10", label: "Excellent", text: "Capability gained clearly exceeds fee, credential is independently verifiable and named by employers, financing terms published." },
      { band: "7–8", label: "Good", text: "Fair price for the capability, recognised brand, EMI available with terms published." },
      { band: "5–6", label: "Moderate", text: "Priced at market with a provider-issued credential that carries little weight beyond brand familiarity." },
      { band: "3–4", label: "Basic", text: "Premium fee for capability available far cheaper elsewhere, or opaque pricing." },
      { band: "1–2", label: "Limited", text: "High fee, no verifiable credential, refund terms hostile or unpublished." },
    ],
    disqualifiers: "Advertised placement or salary numbers without a verifiable basis are treated as a negative signal here, not a positive one.",
  },
];

const citeFor: Record<string, string[]> = {
  relevance: ["nasscom", "naukri"],
  depth: ["mckinsey-genai", "wef-jobs"],
  artifacts: ["logicmojo"],
  coding: ["dlai"],
  support: ["ugc-online"],
  value: ["ambitionbox", "asci"],
};

function CriterionCard({ c }: { c: Criterion }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="surface-card overflow-hidden border-primary/15 p-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-primary/5"
      >
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 font-semibold text-primary">
          {c.n}
        </span>
        <span className="flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-serif text-lg font-semibold text-foreground">{c.name}</span>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Weight {c.weight}%
            </span>
          </span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {open ? "Hide" : "Show"} the weighting rationale, the evidence I collected and the 1–10 score anchors
          </span>
        </span>
        <ChevronDown
          className={cn("mt-2 h-5 w-5 shrink-0 text-primary transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div className="border-t border-primary/15 px-5 py-5">
          <H4>Why I weighted it {c.weight}%</H4>
          <p className="mt-1 text-sm leading-relaxed text-foreground/85">{c.why.replace("<sup />", "")}</p>

          <H4>Evidence behind every score on this criterion</H4>
          <ul className="mt-1 space-y-2 text-sm leading-relaxed text-foreground/85">
            {c.evidence.map((e) => (
              <li key={e} className="flex gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-foreground">
            Supporting references for this criterion: <Cite ids={citeFor[c.key] ?? []} />
          </p>

          <H4>Score anchors — what each band has to prove</H4>
          <div className="mt-2 overflow-hidden rounded-xl border border-border/70">
            {c.anchors.map((a, i) => (
              <div
                key={a.band}
                className={cn(
                  "flex flex-col gap-1 px-4 py-3 text-sm sm:flex-row sm:gap-4",
                  i % 2 === 1 && "bg-muted/50",
                )}
              >
                <span className="w-24 shrink-0 font-semibold text-primary">
                  {a.band}
                  <span className="ml-2 font-normal text-muted-foreground sm:ml-0 sm:block sm:text-xs">{a.label}</span>
                </span>
                <span className="text-foreground/85">{a.text}</span>
              </div>
            ))}
          </div>

          <Callout tone="warn" label="Automatic cap on this criterion">
            <p>{c.disqualifiers}</p>
          </Callout>
        </div>
      ) : null}
    </div>
  );
}

export function ScoringRubric() {
  const total = useMemo(() => criteria.reduce((s, c) => s + c.weight, 0), []);

  return (
    <div className="not-prose my-8 space-y-6">
      <DataTable
        head={["#", "Criterion", "Weight", "Why this weight", "Primary evidence used"]}
        firstColWidth="w-10"
        rows={criteria.map((c) => [
          String(c.n),
          <span key={c.key} className="font-serif text-base font-semibold">
            {c.name}
          </span>,
          <span key={c.key + "w"} className="font-semibold text-primary">
            {c.weight}%
          </span>,
          c.why.replace("<sup />", "").split(". ").slice(0, 2).join(". ") + ".",
          <ul key={c.key + "e"} className="list-disc space-y-1 pl-4">
            {c.evidence.slice(0, 2).map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>,
        ])}
        caption={
          <>
            Table — the full scoring rubric. Weights sum to {total}%. Every score in the reviews above
            is a weighted average of these six criteria, each scored 1–10 against the anchors below.{" "}
            <Cite ids={["nasscom", "wef-jobs", "mckinsey-genai"]} />
          </>
        }
      />

      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/[0.06] p-4 text-sm text-foreground/85">
        <Scale className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p>
          <strong>Re-weight it yourself.</strong> The weights are my judgment for a working Indian BA
          in 2026, not a law. If credential prestige matters more in your organisation, push criterion
          6 to 40% and criterion 1 to 10% — ranks 5 to 8 rise and my own employer's course drops. I
          publish the arithmetic precisely so that disagreement is possible.
        </p>
      </div>

      <div className="space-y-3">
        <H3>
          <span className="inline-flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary" aria-hidden /> Criterion-by-criterion: weight
            rationale, evidence and score anchors
          </span>
        </H3>
        {criteria.map((c) => (
          <CriterionCard key={c.key} c={c} />
        ))}
      </div>

      <Callout tone="info" label="How a final score is produced">
        <p>
          Each criterion is scored 1–10 strictly against the anchors above, using only evidence I could
          read, observe or verify myself. The score is multiplied by its weight and summed, then the
          total is rounded to one decimal. Where evidence for a criterion was missing rather than weak,
          I score the midpoint and say so in that course's review instead of quietly assuming the best
          case. No provider saw its score before publication, and no score was adjusted after the fact
          to protect the ranking order — including at rank 1.
        </p>
      </Callout>
      <Caption>
        Rubric last re-checked at the current page update. Scores are comparative judgments based on
        published syllabi and verifiable evidence at the time of writing, not measurements of guaranteed
        outcomes.
      </Caption>
    </div>
  );
}
