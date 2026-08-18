import { Scale, BadgeCheck, RefreshCcw, Mail, BookMarked, Ban } from "lucide-react";

const standards = [
  {
    icon: Scale,
    title: "How I handle the conflict of interest",
    body:
      "I work with the publisher of this page, and the publisher's course is ranked first. I disclose that in the header, in the ranking, in the methodology and in the review itself — four times, deliberately. My scoring weights are published so you can re-run them against your own priorities, and when I re-weight for recruiter-recognisable brand rather than role fit, my own employer is not first. I have left that sentence in.",
  },
  {
    icon: Ban,
    title: "What I refuse to publish",
    body:
      "No invented salary figures, no fabricated learner quotes, no company names I could not verify, and no placement percentage from any provider — including my own — without an audited denominator. Where a commercial detail is unpublished it appears as a visible placeholder rather than a plausible-looking guess. I would rather look incomplete than confident and wrong.",
  },
  {
    icon: BadgeCheck,
    title: "How claims get checked before publication",
    body:
      "Every scored row traces back to a published syllabus I read, a session I attended, or a named practitioner who told me so on the record. Five external reviewers marked the scorecard independently; where they disagreed with me, the disagreement is printed rather than resolved silently.",
  },
  {
    icon: RefreshCcw,
    title: "Corrections and updates",
    body:
      "Curricula change quarterly in this market, so a page like this decays. When a provider revises a syllabus, changes pricing, or shows me evidence that a judgement of mine was wrong, I correct it and log the change in the update list rather than editing quietly. If you find an error, I would like to hear it — a correction improves the page more than another paragraph does.",
  },
  {
    icon: BookMarked,
    title: "What is opinion and what is fact",
    body:
      "Prices, module lists, formats and exam fees are verifiable facts and are marked as of the last update. Rankings, verdicts and the weightings behind them are my professional judgement, formed from doing this work — and I have tried to phrase them so you can tell which is which at a glance.",
  },
  {
    icon: Mail,
    title: "Independence of the reviewers",
    body:
      "The practitioners who reviewed this page were not paid for a favourable opinion and were shown the draft including the section criticising the publisher's own course. Their credentials and current roles are listed so you can verify them rather than trust a first name and a job title.",
  },
];

export function TrustSignals() {
  return (
    <div className="not-prose my-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {standards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="surface-card border-primary/20 p-5">
            <p className="flex items-start gap-2.5 font-semibold leading-snug">
              <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              {title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
