import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Answers = {
  level?: string;
  coding?: string;
  budget?: string;
  goal?: string;
  time?: string;
};

const questions: {
  key: keyof Answers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "level",
    question: "1. Where are you on the capability ladder right now?",
    options: [
      { value: "0-1", label: "Level 0–1 — AI-unaware or just AI-aware" },
      { value: "2", label: "Level 2 — I use AI tools daily for my own BA work" },
      { value: "3+", label: "Level 3+ — I have already specified or evaluated an AI use case" },
      { value: "unsure", label: "I'm not sure yet" },
    ],
  },
  {
    key: "coding",
    question: "2. How comfortable are you with code?",
    options: [
      { value: "none", label: "None — spreadsheets and documents" },
      { value: "sql", label: "SQL only" },
      { value: "python", label: "Some Python / scripting" },
    ],
  },
  {
    key: "budget",
    question: "3. What can you realistically spend?",
    options: [
      { value: "0", label: "₹0 — free only" },
      { value: "5k", label: "Under ₹5,000" },
      { value: "80k", label: "₹15,000 – ₹80,000" },
      { value: "2l", label: "₹80,000 – ₹2,00,000" },
      { value: "2l+", label: "Above ₹2,00,000" },
    ],
  },
  {
    key: "goal",
    question: "4. What is the primary goal?",
    options: [
      { value: "inrole", label: "Upgrade in my current BA role" },
      { value: "switch", label: "Change roles or break into BA work" },
      { value: "credential", label: "A credential an employer recognises" },
      { value: "tools", label: "Tools I can apply at work this month" },
      { value: "strategy", label: "Strategy, governance and consulting framing" },
    ],
  },
  {
    key: "time",
    question: "5. How many hours per week can you actually protect?",
    options: [
      { value: "<4", label: "Under 4 hours" },
      { value: "4-8", label: "4–8 hours" },
      { value: "8-15", label: "8–15 hours" },
    ],
  },
];

function resolve(a: Required<Answers>): { primary: string; alternative: string; reason: string } {
  if (a.level === "unsure" || a.budget === "0") {
    return {
      primary: "DeepLearning.AI — AI for Everyone (free audit on Coursera)",
      alternative: "Microsoft Learn — AI-900 learning path (free)",
      reason:
        "Never pay to find out whether AI work interests you; both options build correct vocabulary at zero cost, and you lose nothing but time if you stop.",
    };
  }
  if (a.budget === "5k") {
    return {
      primary: "A single well-reviewed Udemy or LinkedIn Learning AI-for-BA course",
      alternative: "Individual Coursera course (audit free, pay only for the certificate)",
      reason:
        "At this tier you are buying structure for one specific gap, not a capability upgrade — check the last-updated date before you buy.",
    };
  }
  if (a.goal === "tools" || (a.time === "<4" && a.goal !== "switch")) {
    return {
      primary: "Microsoft AI-900 + Copilot / Power Platform analyst path",
      alternative: "LogicMojo AI Course (AI for Business Analysts track)",
      reason:
        "Learning material is free, the credential is exam-based, and the skills apply immediately inside India's Microsoft-heavy enterprise estates on a small weekly time budget.",
    };
  }
  if (a.goal === "switch" && (a.budget === "2l" || a.budget === "2l+")) {
    return {
      primary: "UpGrad or Great Learning university-affiliated program",
      alternative: "Simplilearn co-branded Business Analyst / AI Masters program",
      reason:
        "When BA experience is thin, an academic credential and cohort structure do screening work that a skills-only course cannot — accept that AI depth will be analytics-weighted.",
    };
  }
  if (a.goal === "credential" && a.budget !== "2l+") {
    return {
      primary: "IIBA-aligned AI for business analysis pathway via an India-based endorsed provider",
      alternative: "IBM Business Analyst / AI Foundations certificates on Coursera",
      reason:
        "Professional-body recognition carries the most weight in consulting and global-client work; the IBM route is the cheaper recognisable fallback.",
    };
  }
  if (a.goal === "strategy") {
    return {
      primary: "LogicMojo governance and evaluation modules",
      alternative: "IIBA-aligned pathway plus a short executive AI-strategy program",
      reason:
        "Governance, risk classification and business-case rigour are the scarcest competencies in this category and the ones consulting and BFSI buyers test for.",
    };
  }
  if (a.level === "3+" && a.coding === "python") {
    return {
      primary: "LogicMojo AI Course (AI for Business Analysts track)",
      alternative: "Intellipaat or Analytics Vidhya current GenAI program",
      reason:
        "You are past literacy, so pay only for specification, evaluation and governance depth; the practitioner-led GenAI options suit you if you want more hands-on tooling.",
    };
  }
  return {
    primary: "LogicMojo AI Course (AI for Business Analysts track)",
    alternative: "Simplilearn Business Analyst / AI-augmented program",
    reason:
      "For a working Indian BA with a real budget and 4+ hours a week, the gap is specification, evaluation and governance — not more analytics tooling.",
  };
}

export function DecisionTree() {
  const [answers, setAnswers] = useState<Answers>({});
  const step = questions.findIndex((q) => !answers[q.key]);
  const done = step === -1;
  const outcome = done ? resolve(answers as Required<Answers>) : null;

  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">
          {done ? "Your result" : `Question ${step + 1} of ${questions.length}`}
        </p>
        {Object.keys(answers).length > 0 ? (
          <Button variant="ghost" size="sm" onClick={() => setAnswers({})}>
            <RotateCcw className="mr-1.5 size-3.5" /> Start again
          </Button>
        ) : null}
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{
            width: `${((done ? questions.length : step) / questions.length) * 100}%`,
          }}
        />
      </div>

      {!done ? (
        <div className="mt-6">
          <p className="text-lg font-semibold">{questions[step]!.question}</p>
          <div className="mt-4 grid gap-2">
            {questions[step]!.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, [questions[step]!.key]: opt.value }))
                }
                className="rounded-lg border border-border bg-background px-4 py-3 text-left text-sm transition-colors hover:border-accent hover:bg-accent/10"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4 text-sm">
          <div className="rounded-lg border border-good/30 bg-good/8 p-4">
            <p className="eyebrow mb-1">Primary recommendation</p>
            <p className="text-base font-semibold">{outcome!.primary}</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <p className="eyebrow mb-1">Strong alternative</p>
            <p className="font-medium">{outcome!.alternative}</p>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Why: </span>
            {outcome!.reason}
          </p>
          <p className="text-xs text-muted-foreground">
            This tool encodes the same weighted criteria used in the ranking. It is guidance, not
            advice — verify current pricing, syllabus and batch dates with the provider.
          </p>
        </div>
      )}
    </div>
  );
}
