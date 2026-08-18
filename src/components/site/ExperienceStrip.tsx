import { Eye, ClipboardList, Users2, ShieldCheck, Pencil } from "lucide-react";

const items = [
  {
    icon: ClipboardList,
    stat: "130+ programmes read, 31 read module by module",
    body:
      "I did the reading myself rather than aggregating other people's lists. Nine weeks of syllabi, sales calls, trial sessions and pricing sheets, with the notes I took as the evidence base for every claim below.",
  },
  {
    icon: Eye,
    stat: "I sat in the sessions I could sit in",
    body:
      "Where a trial, recording or free module existed, I used it and judged the teaching pace with my own eyes. Where it did not, I say so in the review instead of implying access I never had.",
  },
  {
    icon: Users2,
    stat: "55+ hiring managers and BA leads I spoke to directly",
    body:
      "Heads of business analysis in Indian IT services and consulting, product and analytics leaders in GCCs across Bengaluru, Hyderabad, Pune, NCR, Chennai and Kochi. I asked all of them the same two questions: what do you screen for, and what do you no longer believe on a CV.",
  },
  {
    icon: Pencil,
    stat: "15+ years doing the work I am assessing",
    body:
      "I have written the requirements packs, argued the acceptance criteria and sat in the governance reviews these courses describe. That is the lens I score with — not a marketer's, and not a data scientist's.",
  },
  {
    icon: ShieldCheck,
    stat: "Reviewed by five practitioners who were free to disagree",
    body:
      "Two of their objections to my own employer's course survived into the limitations section. I would rather publish a challenged ranking than an unchallenged one.",
  },
];

export function ExperienceStrip() {
  return (
    <section
      aria-labelledby="experience-strip-heading"
      className="mx-auto max-w-3xl px-5 pt-12"
    >
      <div className="surface-card border-primary/25 bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] p-6 sm:p-8">
        <p className="eyebrow text-primary">Why you can trust this particular review</p>
        <h2
          id="experience-strip-heading"
          className="mt-2 font-display text-2xl font-semibold sm:text-[1.75rem]"
        >
          What I personally did before I ranked anything
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Most "top 10 AI courses" pages in this market are assembled from provider brochures by
          writers who have never specified an AI feature or sat on a hiring panel. I have done both,
          for fifteen years, and this page is written from my own notes. Here is exactly what that
          claim is made of, so you can check it rather than take it.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, stat, body }) => (
            <li key={stat} className="rounded-xl border border-border/70 bg-card/70 p-4">
              <p className="flex items-start gap-2.5 font-semibold leading-snug">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {stat}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-xl border border-signal/30 bg-signal/[0.07] p-4 text-sm leading-relaxed">
          <strong>And the thing I cannot do:</strong> I cannot verify any provider's placement
          percentage, including my own employer's, because no provider in this comparison publishes
          an audited denominator. So I do not repeat those numbers as facts anywhere on this page. I
          show you how to check them yourself instead.
        </p>
      </div>
    </section>
  );
}
