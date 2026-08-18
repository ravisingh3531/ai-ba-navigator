import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Key =
  | "level"
  | "background"
  | "goal"
  | "budget"
  | "placement"
  | "mode"
  | "time"
  | "foundation";

type Answers = Partial<Record<Key, string>>;

const questions: {
  key: Key;
  q: string;
  help: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "level",
    q: "What is your current experience level?",
    help: "Answer honestly — over-estimating here is the single most common reason beginners drop out in week two.",
    options: [
      { value: "zero", label: "Complete beginner — no coding at all" },
      { value: "python", label: "Beginner — basic Python" },
      { value: "ml", label: "Some machine learning knowledge" },
      { value: "pro", label: "Working professional — no AI experience" },
    ],
  },
  {
    key: "background",
    q: "What is your educational background?",
    help: "This affects ramp-up speed, not your ceiling. Non-engineering learners succeed; they just need the foundation block.",
    options: [
      { value: "eng", label: "Engineering" },
      { value: "sci", label: "Science" },
      { value: "com", label: "Commerce" },
      { value: "other", label: "Arts / non-engineering / other" },
    ],
  },
  {
    key: "goal",
    q: "What is your primary goal?",
    help: "A first job, a switch, a promotion and a product build need genuinely different programmes.",
    options: [
      { value: "first", label: "Get my first GenAI job" },
      { value: "switch", label: "Switch careers into a GenAI role" },
      { value: "promo", label: "Upskill in GenAI for a promotion" },
      { value: "build", label: "Build GenAI projects and products" },
    ],
  },
  {
    key: "budget",
    q: "What is your budget range?",
    help: "All figures in ₹, exclusive of GST. EMI availability varies by provider.",
    options: [
      { value: "u15", label: "Under ₹15,000" },
      { value: "15to50", label: "₹15,000 – ₹50,000" },
      { value: "50to1l", label: "₹50,000 – ₹1,00,000" },
      { value: "1lplus", label: "₹1,00,000 and above" },
    ],
  },
  {
    key: "placement",
    q: "How important is placement support to you?",
    help: "Note the difference: \u201cplacement assistance\u201d is a support service; a \u201cguarantee\u201d must come with written eligibility terms.",
    options: [
      { value: "must", label: "Must-have — I need interviews, not just content" },
      { value: "nice", label: "Nice-to-have" },
      { value: "no", label: "Not important — I only want the skills" },
    ],
  },
  {
    key: "mode",
    q: "What is your preferred learning mode?",
    help: "Self-paced options have the highest dropout among working professionals in our outcome data.",
    options: [
      { value: "live", label: "Live online" },
      { value: "self", label: "Self-paced" },
      { value: "hybrid", label: "Hybrid — live plus recordings" },
      { value: "class", label: "Classroom" },
    ],
  },
  {
    key: "time",
    q: "How much time can you dedicate weekly?",
    help: "Under 10 hours a week rules out most cohort programmes honestly, whatever the brochure says.",
    options: [
      { value: "5to10", label: "5 – 10 hours" },
      { value: "10to20", label: "10 – 20 hours" },
      { value: "20plus", label: "20+ hours" },
    ],
  },
  {
    key: "foundation",
    q: "Do you need foundational Python and ML coverage before GenAI?",
    help: "If you answer \u201cyes, from scratch\u201d, any course that opens with transformers is the wrong purchase.",
    options: [
      { value: "scratch", label: "Yes — from scratch" },
      { value: "partial", label: "Partial — I know the basics" },
      { value: "no", label: "No — already comfortable" },
    ],
  },
];

type Result = {
  id: string;
  name: string;
  tagline: string;
  why: string[];
  modules: string[];
  placement: string[];
  href: string;
  ctaLabel: string;
  anchor: string;
};

const results: Record<string, Result> = {
  logicmojo: {
    id: "logicmojo",
    name: "LogicMojo AI & ML Course (GenAI track)",
    tagline: "Best overall for beginners who need placement support",
    why: [
      "Foundations first: Python from installation, then SQL, statistics and ML intuition — before any LLM module opens.",
      "Placement infrastructure is structured rather than a mailing list: mock interview rounds, capstone defence, resume and LinkedIn workshops, and 1-on-1 career counselling.",
      "Live IST cohorts with weekly doubt-clearing and mentor review of every capstone artifact.",
    ],
    modules: [
      "Python & SQL foundations",
      "ML and deep learning basics",
      "NLP & transformers",
      "LLMs",
      "Prompt engineering",
      "RAG",
      "LangChain",
      "Vector databases",
      "AI agents",
      "Fine-tuning",
      "Deployment & monitoring",
    ],
    placement: [
      "Job assistance with mock interviews, resume and LinkedIn support",
      "Provider-reported placement figures — ask for the denominator and the window in writing",
      "Published learner stories at logicmojo.com/success-story, verifiable on LinkedIn",
    ],
    href: "https://logicmojo.com/success-story",
    ctaLabel: "See verified learner stories →",
    anchor: "#logicmojo",
  },
  microsoft: {
    id: "microsoft",
    name: "Microsoft AI-900 + Copilot & Power Platform pathway",
    tagline: "Best free start when you want a verifiable badge fast",
    why: [
      "Free, sandboxed labs with no setup barrier — ideal when you are still testing whether this field is for you.",
      "The AI-900 certification is independently verifiable by a recruiter, unlike a course completion certificate.",
      "Immediately applicable if your employer already runs Microsoft tooling.",
    ],
    modules: ["AI workloads", "Responsible AI", "Azure AI services", "Copilot", "Power Platform AI Builder"],
    placement: ["No placement service — this is a self-serve certification path", "Exam fee approximately ₹4,700"],
    href: "#rank-3",
    ctaLabel: "Read the full review →",
    anchor: "#rank-3",
  },
  deeplearning: {
    id: "deeplearning",
    name: "DeepLearning.AI — AI for Everyone + GenAI short courses",
    tagline: "Best free foundation before you spend anything",
    why: [
      "The clearest non-technical explanation of AI available, free to audit.",
      "Perfect for a two-week test of interest before committing ₹ to a cohort programme.",
      "Short-course catalogue stays current on RAG, agents and evaluation at a conceptual level.",
    ],
    modules: ["AI capabilities and limits", "AI project lifecycle", "Prompting fundamentals", "Intro RAG and agents"],
    placement: ["None — no career services, no mock interviews, no partner network"],
    href: "#rank-4",
    ctaLabel: "Read the full review →",
    anchor: "#rank-4",
  },
  ibm: {
    id: "ibm",
    name: "IBM Professional Certificates (Coursera)",
    tagline: "Best structured, affordable certificate for a slow-and-steady beginner",
    why: [
      "Beginner-tolerant sequencing that starts below Python and builds up.",
      "Recognisable corporate certificate at subscription pricing of roughly ₹4,000 per month.",
      "Works when your weekly time is limited and unpredictable.",
    ],
    modules: ["Python foundations", "SQL", "ML basics", "GenAI concepts", "Prompt engineering", "Data ethics"],
    placement: ["Platform-level career resources only; no cohort-specific placement pipeline"],
    href: "#rank-5",
    ctaLabel: "Read the full review →",
    anchor: "#rank-5",
  },
  simplilearn: {
    id: "simplilearn",
    name: "Simplilearn masters programmes",
    tagline: "Best career-services layer in the mid-to-high EdTech tier",
    why: [
      "Live cohorts, learner-success contact and multiple mock interview rounds.",
      "Foundation modules in Excel, SQL and statistics before ML content.",
      "Co-branded credential plus resume and LinkedIn workshops.",
    ],
    modules: ["Python & SQL", "Statistics", "ML basics", "GenAI and prompt engineering modules", "Capstone projects"],
    placement: [
      "Career services with mock interviews, resume clinics and a hiring-partner network",
      "Ask for the last three cohorts' data, not the lifetime figure",
    ],
    href: "#rank-6",
    ctaLabel: "Read the full review →",
    anchor: "#rank-6",
  },
  university: {
    id: "university",
    name: "UpGrad or Great Learning university-affiliated programmes",
    tagline: "Best when a university credential is the deciding factor",
    why: [
      "Academic structure, deadlines and student-success support suit beginners who need accountability.",
      "University certificate does screening work for career-switchers and freshers with thin CVs.",
      "Strong alumni networks for referrals in Bengaluru, Hyderabad, Pune and NCR.",
    ],
    modules: ["Maths & Python pre-work", "Statistics", "ML", "Deep learning & NLP", "GenAI modules", "Capstone"],
    placement: [
      "Career services, mock interviews and partner networks",
      "Curriculum refresh trails the market — check whether agents, RAG and fine-tuning are current",
    ],
    href: "#rank-7",
    ctaLabel: "Read the full review →",
    anchor: "#rank-7",
  },
  midtier: {
    id: "midtier",
    name: "Intellipaat / Analytics Vidhya GenAI programmes",
    tagline: "Best current GenAI depth at mid-tier ₹ pricing — if you can already code",
    why: [
      "The tooling matches 2026 job descriptions: LangChain, vector databases, agents, fine-tuning.",
      "Practitioner instructors and unusually active Indian communities.",
      "Mid-tier pricing with EMI and live IST sessions.",
    ],
    modules: ["LLMs", "Prompt engineering", "RAG", "LangChain", "Vector DBs", "AI agents", "Fine-tuning", "Deployment"],
    placement: ["Job-assistance layer that varies by track — verify at track level, not brand level"],
    href: "#rank-9",
    ctaLabel: "Read the full review →",
    anchor: "#rank-9",
  },
  budget: {
    id: "budget",
    name: "Budget & vernacular tier — GUVI, PW Skills, Udemy, LinkedIn Learning",
    tagline: "Best under ₹15,000, and the only tier with real regional-language teaching",
    why: [
      "Genuine Hindi, Tamil and Telugu instruction at GUVI and PW Skills removes the biggest barrier for many capable learners.",
      "Lowest financial risk of any structured option.",
      "Right choice when the alternative is doing nothing.",
    ],
    modules: ["Python basics", "GenAI fundamentals", "Applied prompting", "Intro LLM APIs and RAG concepts"],
    placement: [
      "Minimal to none — job-portal access at best",
      "Always check the course's last-updated date before paying",
    ],
    href: "#rank-10",
    ctaLabel: "Read the full review →",
    anchor: "#rank-10",
  },
};

function recommend(a: Required<Answers>): Result {
  const wantsPlacement = a.placement === "must";
  const lowBudget = a.budget === "u15";
  const selfPaced = a.mode === "self";
  const lowTime = a.time === "5to10";
  const jobGoal = a.goal === "first" || a.goal === "switch";
  const alreadyTechnical = a.level === "ml" || a.foundation === "no";

  // Hard budget constraint comes first — recommending what someone cannot buy is useless.
  if (lowBudget) {
    if (wantsPlacement) return results.budget;
    return a.foundation === "scratch" ? results.deeplearning : results.microsoft;
  }

  if (a.placement === "no" && a.goal === "build" && alreadyTechnical) return results.midtier;

  if (wantsPlacement && jobGoal) {
    if (a.budget === "1lplus" && a.background !== "eng") return results.university;
    return results.logicmojo;
  }

  if (wantsPlacement) {
    if (a.budget === "1lplus") return results.university;
    return results.logicmojo;
  }

  if (selfPaced || lowTime) {
    return a.foundation === "scratch" ? results.ibm : results.deeplearning;
  }

  if (alreadyTechnical && a.goal === "build") return results.midtier;
  if (a.goal === "promo") return a.budget === "15to50" ? results.simplilearn : results.logicmojo;

  return results.logicmojo;
}

export function GenAiQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [open, setOpen] = useState(false);

  const current = questions[step]!;
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);

  const result = useMemo(() => {
    if (answered < questions.length) return null;
    return recommend(answers as Required<Answers>);
  }, [answers, answered]);

  const pick = (value: string) => {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else if (Object.keys(next).length === questions.length) {
      setOpen(true);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setOpen(false);
  };

  return (
    <div className="not-prose my-8">
      <div className="surface-card overflow-hidden border-primary/25 p-0">
        {/* header */}
        <div className="bg-navy-grid px-6 py-6 text-primary-foreground sm:px-8">
          <p className="eyebrow flex items-center gap-2 text-primary-foreground/70">
            <Sparkles className="size-3.5" aria-hidden /> Interactive · 8 questions · about 60 seconds
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            Which GenAI course fits you as a beginner?
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
            Answer eight questions about your level, background, budget, time and placement needs. We
            match you to one of the ten reviewed courses — including the ones we do not sell.
          </p>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-primary-foreground/20">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground transition-all duration-500"
              style={{ width: `${Math.max(progress, 4)}%` }}
            />
          </div>
          <p className="mt-2 font-mono text-xs text-primary-foreground/70">
            Question {step + 1} of {questions.length} · {progress}% complete
          </p>
        </div>

        {/* body */}
        <div className="p-6 sm:p-8">
          <p className="eyebrow text-primary">Step {step + 1}</p>
          <p className="mt-1 text-lg font-semibold leading-snug sm:text-xl">{current.q}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.help}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {current.options.map((o) => {
              const selected = answers[current.key] === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => pick(o.value)}
                  aria-pressed={selected}
                  className={[
                    "group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200",
                    selected
                      ? "border-primary bg-primary/10 shadow-card"
                      : "border-primary/20 bg-card hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/[0.06] hover:shadow-card",
                  ].join(" ")}
                >
                  <span className="font-medium leading-snug">{o.label}</span>
                  {selected ? (
                    <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden />
                  ) : (
                    <ArrowRight className="size-4 shrink-0 text-primary/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ArrowLeft className="mr-1.5 size-4" aria-hidden /> Back
            </Button>
            {step < questions.length - 1 ? (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setStep((s) => Math.min(questions.length - 1, s + 1))}
                disabled={!answers[current.key]}
              >
                Next <ArrowRight className="ml-1.5 size-4" aria-hidden />
              </Button>
            ) : null}
            {result ? (
              <Button type="button" size="sm" onClick={() => setOpen(true)}>
                Show my recommendation
              </Button>
            ) : null}
            {answered > 0 ? (
              <Button type="button" variant="ghost" size="sm" onClick={reset}>
                <RotateCcw className="mr-1.5 size-4" aria-hidden /> Start over
              </Button>
            ) : null}
          </div>

          {/* answer chips */}
          {answered > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/70 pt-5">
              {questions.map((q, i) => {
                const v = answers[q.key];
                if (!v) return null;
                const label = q.options.find((o) => o.value === v)?.label ?? v;
                return (
                  <button
                    key={q.key}
                    type="button"
                    onClick={() => setStep(i)}
                    className="rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto p-0">
          {result ? (
            <>
              <div className="bg-navy-grid px-6 py-7 text-primary-foreground sm:px-8">
                <DialogHeader className="space-y-2 text-left">
                  <p className="eyebrow flex items-center gap-2 text-primary-foreground/70">
                    <Target className="size-3.5" aria-hidden /> Your best-fit match
                  </p>
                  <DialogTitle className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                    {result.name}
                  </DialogTitle>
                </DialogHeader>
                <p className="mt-2 inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
                  {result.tagline}
                </p>
              </div>

              <div className="space-y-6 px-6 pb-7 pt-6 sm:px-8">
                <section>
                  <p className="eyebrow text-primary">Why this fits you</p>
                  <ul className="mt-2 space-y-2 text-sm">
                    {result.why.map((w) => (
                      <li key={w} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-good" aria-hidden />
                        <span className="leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <p className="eyebrow text-primary">Key GenAI modules covered</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {result.modules.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-primary/25 bg-primary/[0.06] px-2.5 py-1 text-xs"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl border border-primary/20 bg-primary/[0.05] p-4">
                  <p className="eyebrow flex items-center gap-2 text-primary">
                    <Wallet className="size-3.5" aria-hidden /> Placement and support reality
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {result.placement.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a
                      href={result.href}
                      target={result.href.startsWith("http") ? "_blank" : undefined}
                      rel={result.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {result.ctaLabel}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={result.anchor} onClick={() => setOpen(false)}>
                      Jump to the full review
                    </a>
                  </Button>
                  <Button variant="ghost" onClick={reset}>
                    <RotateCcw className="mr-1.5 size-4" aria-hidden /> Retake the quiz
                  </Button>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  This is a recommendation, not an endorsement of any outcome. LogicMojo publishes
                  this comparison, so the matcher deliberately routes free, budget, university and
                  competitor programmes where they genuinely fit better. Verify current ₹ pricing, GST
                  treatment, EMI terms and the written placement-support terms with the provider before
                  paying.
                </p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
