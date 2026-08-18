import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">LogicMojo</p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
            Live, mentor-led technology programs for working professionals in India. The AI for
            Business Analysts track is designed around what a BA is accountable for on an AI
            initiative — scoping, specification, evaluation and governance.
          </p>
        </div>

        <nav aria-label="Courses">
          <p className="eyebrow text-primary-foreground/60">Courses</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "AI Course — AI for Business Analysts",
              "Data Structures & Algorithms",
              "System Design",
              "Full Stack Development",
              "Data Engineering",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-primary-foreground/80 hover:text-accent">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <p className="eyebrow text-primary-foreground/60">Resources</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Scoring methodology",
              "Batch dates — [Batch Dates]",
              "EMI options — [EMI Partner]",
              "Blog",
              "Refund & withdrawal policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-primary-foreground/80 hover:text-accent">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-primary-foreground/60">Contact</p>
          <ul className="mt-3 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" /> [contact@logicmojo.com]
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" /> [+91-XXXXX-XXXXX]
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" /> [Office Address], India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LogicMojo. All rights reserved.</p>
          <p>
            Editorial disclosure: LogicMojo publishes this comparison and offers a competing course.
            Pricing for third-party providers is indicative — verify before enrolling.
          </p>
        </div>
      </div>
    </footer>
  );
}
