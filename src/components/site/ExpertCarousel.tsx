import { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

type Expert = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin: string;
};

const experts: Expert[] = [
  {
    name: "[Reviewer 1 Name]",
    initials: "BA",
    role: "Head of Business Analysis Practice, Indian IT services firm (Pune)",
    bio: "Reviews BA capability frameworks and account-level staffing for AI engagements. Assessed our scoring dimensions for alignment with how service-side BA competency is actually judged in client proposals and SOW conversations.",
    linkedin: "https://www.linkedin.com/in/[reviewer-1]",
  },
  {
    name: "[Reviewer 2 Name]",
    initials: "PM",
    role: "AI Product Manager, global GCC (Bengaluru)",
    bio: "Owns an internal RAG knowledge assistant and two agentic workflow pilots. Pressure-tested the specification and evaluation rows of the competency scorecard against the requirements packs her team receives from BAs.",
    linkedin: "https://www.linkedin.com/in/[reviewer-2]",
  },
  {
    name: "[Reviewer 3 Name]",
    initials: "GV",
    role: "AI Governance & Model Risk Lead, BFSI (Mumbai)",
    bio: "Reviews AI documentation against internal model-risk policy and client audit requests. Advised on how we describe DPDP Act, EU AI Act, ISO/IEC 42001 and NIST AI RMF content without overstating obligations.",
    linkedin: "https://www.linkedin.com/in/[reviewer-3]",
  },
  {
    name: "[Reviewer 4 Name]",
    initials: "AL",
    role: "AI Business Analyst — career switcher from manual testing (Hyderabad)",
    bio: "Moved from QA into an AI-adjacent BA role over roughly eighteen months. Provided the learner-side view on dropout points, coding anxiety and which artifacts actually came up in interviews.",
    linkedin: "https://www.linkedin.com/in/[reviewer-4]",
  },
  {
    name: "[Reviewer 5 Name]",
    initials: "DL",
    role: "Director of Data & AI Engineering, product company (NCR)",
    bio: "Consumes BA-authored requirements downstream. Reviewed our position on coding load and confirmed which technical topics engineers genuinely need a BA to understand versus perform.",
    linkedin: "https://www.linkedin.com/in/[reviewer-5]",
  },
];

export function ExpertCarousel() {
  const [index, setIndex] = useState(0);
  const expert = experts[index]!;
  const go = (delta: number) => setIndex((i) => (i + delta + experts.length) % experts.length);

  return (
    <div className="surface-card my-8 overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/[0.04]">
      <div className="flex items-center justify-between gap-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 to-accent/8 px-5 py-3">
        <p className="eyebrow text-secondary-foreground">
          Reviewed by practitioners · {index + 1} / {experts.length}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous reviewer"
            onClick={() => go(-1)}
            className="border-primary/25 text-primary hover:bg-primary/10 hover:text-primary"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next reviewer"
            onClick={() => go(1)}
            className="border-primary/25 text-primary hover:bg-primary/10 hover:text-primary"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6 sm:flex-row">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/25 font-display text-xl font-semibold text-primary shadow-inner ring-1 ring-primary/30">
          {expert.initials}
        </div>
        <div>
          <p className="text-lg font-semibold">{expert.name}</p>
          <p className="text-sm text-muted-foreground">{expert.role}</p>
          <p className="mt-3 text-sm leading-relaxed">{expert.bio}</p>
          <a
            href={expert.linkedin}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-signal underline-offset-4 hover:underline"
          >
            <Linkedin className="size-4" /> LinkedIn profile
          </a>
        </div>
      </div>

      <div className="flex gap-1.5 px-6 pb-5">
        {experts.map((e, i) => (
          <button
            key={e.role}
            onClick={() => setIndex(i)}
            aria-label={`Show reviewer ${i + 1}`}
            className={
              "h-1.5 flex-1 rounded-full transition-colors " +
              (i === index ? "bg-gradient-to-r from-primary to-accent shadow-sm" : "bg-border hover:bg-primary/40")
            }
          />
        ))}
      </div>
    </div>
  );
}
