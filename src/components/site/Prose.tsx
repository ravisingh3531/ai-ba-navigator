import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-14", className)}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
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
    signal: "border-l-signal bg-signal/5",
    warn: "border-l-warn bg-warn/8",
    good: "border-l-good bg-good/8",
    accent: "border-l-accent bg-accent/10",
  };
  return (
    <div className={cn("my-6 rounded-r-lg border-l-4 px-5 py-4 text-sm", tones[tone])}>
      {label ? <p className="eyebrow mb-2 text-foreground/70">{label}</p> : null}
      <div className="prose-editorial [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 border-l-2 border-accent pl-4 text-sm italic text-muted-foreground">
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
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">

        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary/80">
              {head.map((h, i) => (
                <th
                  key={h + i}
                  scope="col"
                  className={cn(
                    "whitespace-nowrap border-b border-border px-4 py-3 align-bottom font-semibold text-secondary-foreground",
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
              <tr key={ri} className={cn(ri % 2 === 1 && "bg-muted/40")}>
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
        "rounded-xl border p-5",
        tone === "good" ? "border-good/30 bg-good/6" : "border-destructive/30 bg-destructive/6",
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
