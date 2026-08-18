import { Linkedin, UserRound } from "lucide-react";

export function AuthorBio() {
  return (
    <div className="not-prose my-7 surface-card overflow-hidden border-primary/25 bg-gradient-to-br from-primary/[0.07] to-accent/[0.04] p-6 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
          <UserRound className="size-9" aria-hidden />
          <span className="sr-only">Author photo placeholder</span>
        </div>
        <div className="min-w-0">
          <p className="eyebrow text-primary">Written by</p>
          <p className="font-display text-xl font-semibold">[Author Name]</p>
          <p className="text-sm text-muted-foreground">
            Lead Curriculum Author, AI for Business Analysts · LogicMojo · [X] years in business
            analysis and AI delivery
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Spent [X] years as a Business Analyst and BA lead on enterprise programmes in Indian IT
            services and GCC environments before moving into AI delivery, where the work shifted to
            scoping AI use cases, writing requirements for probabilistic systems and reviewing
            evaluation plans with data teams. Has authored or reviewed AI requirements packs,
            acceptance-criteria specifications and governance checklists on [X] AI initiatives across
            BFSI, retail and healthcare clients.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            This comparison was written because the market keeps selling Business Analysts data
            science curricula with an AI label on the box, and no existing list scored courses on the
            work a BA is actually accountable for.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3.5 py-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary/12"
          >
            <Linkedin className="size-4" aria-hidden />
            LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
}
