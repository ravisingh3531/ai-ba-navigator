import { Linkedin, UserRound, Award, Briefcase, GraduationCap, PenLine } from "lucide-react";

const credentials = [
  {
    icon: Briefcase,
    label: "Where the experience comes from",
    value:
      "15+ years in business analysis: BA and BA lead on enterprise programmes in Indian IT services and GCC delivery, then AI delivery — scoping use cases, writing requirements for probabilistic systems, and defending evaluation plans in front of data teams and risk functions.",
  },
  {
    icon: PenLine,
    label: "What I have actually produced",
    value:
      "AI requirements packs, acceptance-criteria specifications, golden-dataset designs and governance checklists on AI initiatives across BFSI, retail and healthcare clients. Lead curriculum author for the AI-for-Business-Analysts track discussed in Section 3.",
  },
  {
    icon: GraduationCap,
    label: "Teaching and hiring experience",
    value:
      "I have run live cohorts for working analysts and mentored artifact reviews one-to-one, and I have sat on the hiring side of BA interviews — which is why the reviews below judge portfolios the way an interviewer does, not the way a brochure does.",
  },
  {
    icon: Award,
    label: "Domains and regulation I have worked inside",
    value:
      "DPDP Act obligations on AI data use, EU AI Act exposure for Indian service providers, and the ISO/IEC 42001 and NIST AI RMF questions that now arrive in client procurement checklists. This is practitioner experience, not legal advice.",
  },
];

export function AuthorBio() {
  return (
    <div className="not-prose my-7 surface-card overflow-hidden border-primary/25 bg-gradient-to-br from-primary/[0.07] to-accent/[0.04] p-6 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
          <UserRound className="size-9" aria-hidden />
          <span className="sr-only">Author photo placeholder</span>
        </div>
        <div className="min-w-0">
          <p className="eyebrow text-primary">Written and personally researched by</p>
          <p className="font-display text-xl font-semibold">[Author Name]</p>
          <p className="text-sm text-muted-foreground">
            Lead Curriculum Author, AI for Business Analysts · LogicMojo · 15+ years in business
            analysis and AI delivery
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            I did not come to this list as a reviewer of courses. I came to it as the person who kept
            being handed AI programmes to scope. I spent the first decade of my career writing
            requirements for deterministic systems, and then watched every assumption in that craft
            break the first time I had to write acceptance criteria for a system that is right
            <em> most</em> of the time. Nobody had trained me for that. I had to learn it in front of
            a client, and I got parts of it wrong in public.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            That experience is the reason this page exists and the reason it is scored the way it is.
            When I read a syllabus, I am asking one question I learned the hard way: will this teach
            a BA to specify, evaluate and govern an AI system, or will it teach them to build a model
            they will never be accountable for? Four out of five programmes in India answer the
            second question. I have said so plainly, including about programmes with far better brand
            recognition than my employer's.
          </p>

          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg border border-border/70 bg-card/70 p-4">
                <dt className="flex items-center gap-2 text-sm font-semibold">
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden />
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Where my judgement is contested, I have printed the objection instead of removing it. If
            you think I have scored something unfairly — especially in my employer's favour — write
            to me and I will correct the page and log the change.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3.5 py-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary/12"
          >
            <Linkedin className="size-4" aria-hidden />
            Verify my background on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
