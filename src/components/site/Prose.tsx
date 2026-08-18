import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  blue = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  blue?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "animate-rise scroll-mt-28 py-16 sm:py-20",
        blue ? "bg-blue-section -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 xl:-mx-24 xl:px-24" : "hairline-top",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary shadow-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-primary via-accent to-transparent" />
      <div className="prose-editorial mt-6 max-w-none">{children}</div>
    </section>
  );
}


export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="mt-10 scroll-mt-24 text-xl font-semibold sm:text-2xl">
      {children}
    </h3>
  );
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="mt-7 text-base font-semibold sm:text-lg">{children}</h4>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{children}</p>;
}

export function Callout({
  tone = "signal",
  label,
  children,
}: {
  tone?: "signal" | "warn" | "good" | "accent";
  label?: string;
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    signal: "border-l-signal bg-signal/6 ring-signal/12",
    warn: "border-l-warn bg-warn/8 ring-warn/12",
    good: "border-l-good bg-good/8 ring-good/12",
    accent: "border-l-accent bg-accent/8 ring-accent/12",
  };
  return (
    <div
      className={cn(
        "my-7 rounded-xl border-l-4 px-5 py-4 text-sm shadow-card ring-1 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lift",
        tones[tone],
      )}
    >
      {label ? <p className="eyebrow mb-2 text-foreground/70">{label}</p> : null}
      <div className="prose-editorial [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 border-l-2 border-primary/50 pl-4 text-sm italic text-muted-foreground">
      {children}
    </p>
  );
}

export function DataTable({
  head,
  rows,
  firstColWidth = "min-w-[190px]",
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  firstColWidth?: string;
  caption?: string;
}) {
  return (
    <figure className="my-7 lg:-mx-24 xl:-mx-40">
      <div className="surface-card overflow-x-auto border-primary/15">

        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-primary/[0.11] to-accent/[0.08]">
              {head.map((h, i) => (
                <th
                  key={h + i}
                  scope="col"
                  className={cn(
                    "whitespace-nowrap border-b border-primary/25 px-4 py-3.5 align-bottom text-xs font-semibold uppercase tracking-wider text-primary",
                    i === 0 && firstColWidth,
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={cn(
                  "transition-colors duration-200 hover:bg-primary/5",
                  ri % 2 === 1 && "bg-muted/50",
                )}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "border-b border-border/70 px-4 py-3 align-top leading-relaxed",
                      ci === 0 && "font-medium",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

const scoreTones: Record<string, string> = {
  Deep: "bg-good/15 text-good border-good/30",
  Excellent: "bg-good/15 text-good border-good/30",
  Good: "bg-signal/12 text-signal border-signal/30",
  Moderate: "bg-accent/20 text-accent-foreground border-accent/40",
  Basic: "bg-warn/12 text-warn border-warn/30",
  Limited: "bg-destructive/10 text-destructive border-destructive/25",
  "Not Covered": "bg-destructive/15 text-destructive border-destructive/30",
  Varies: "bg-muted text-muted-foreground border-border",
};

export function Score({ children }: { children: string }) {
  const tone = scoreTones[children] ?? "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium",
        tone,
      )}
    >
      {children}
    </span>
  );
}

export function FlagList({
  tone,
  title,
  items,
}: {
  tone: "good" | "warn";
  title: string;
  items: string[];
}) {
  return (
    <div
      className={cn(
        "surface-card p-6",
        tone === "good" ? "border-good/30 bg-good/5" : "border-destructive/30 bg-destructive/5",
      )}
    >
      <h4 className="text-base font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden
              className={cn(
                "mt-1.5 size-1.5 shrink-0 rounded-full",
                tone === "good" ? "bg-good" : "bg-destructive",
              )}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
