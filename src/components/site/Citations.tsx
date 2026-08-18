import { ExternalLink, ShieldCheck } from "lucide-react";
import { sourceById, sources, verifyByRank } from "./sources";

/**
 * Inline citation marker. Usage: <Cite ids={["dpdp-act", "eu-ai-act"]} />
 * Renders superscript numbers that link to the References section and expose the
 * source title on hover/focus so readers can verify a claim without losing place.
 */
export function Cite({ ids }: { ids: string[] }) {
  const resolved = ids.flatMap((id) => (sourceById[id] ? [sourceById[id]!] : []));
  if (!resolved.length) return null;
  return (
    <sup className="ml-0.5 inline-flex gap-0.5 align-super text-[0.65em] font-semibold">
      {resolved.map((s, i) => (
        <span key={s.id}>
          <a
            href={`#ref-${s.id}`}
            title={`${s.publisher} — ${s.title}`}
            aria-label={`Citation ${s.n}: ${s.publisher} — ${s.title}`}
            className="rounded px-[0.15em] text-primary no-underline decoration-primary/40 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/60"
          >
            [{s.n}]
          </a>
          {i < resolved.length - 1 ? <span className="text-primary/50">,</span> : null}
        </span>
      ))}
    </sup>
  );
}

/** Row of "verify this yourself" outbound links, used inside each course review. */
export function VerifyLinks({ rank }: { rank: number }) {
  const ids = verifyByRank[rank] ?? [];
  if (!ids.length) return null;
  return (
    <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] px-4 py-3">
      <p className="eyebrow flex items-center gap-1.5 text-foreground/70">
        <ShieldCheck className="size-3.5 text-primary" /> Verify this course yourself
      </p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
        {ids.map((id) => {
          const s = sourceById[id];
          if (!s) return null;
          return (
            <li key={id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                {s.publisher} — {s.title}
                <ExternalLink className="size-3" aria-hidden />
              </a>
              <span className="ml-1 text-muted-foreground">[{s.n}]</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">
        I re-check fees, batch dates and syllabus pages before each update, but providers change
        them without notice — the source page is authoritative, not this article.
      </p>
    </div>
  );
}

/** Full numbered reference list. Rendered once, near the end of the article. */
export function ReferenceList() {
  return (
    <ol className="mt-6 space-y-4 text-sm">
      {sources.map((s) => (
        <li
          key={s.id}
          id={`ref-${s.id}`}
          className="scroll-mt-28 rounded-xl border border-border/70 bg-card/60 px-4 py-3 shadow-card"
        >
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-semibold text-primary">[{s.n}]</span>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-medium underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              {s.title}
            </a>
            <span className="text-muted-foreground">— {s.publisher}</span>
            <span className="rounded-full border border-border px-2 py-0.5 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
              {s.kind}
            </span>
          </div>
          <p className="mt-1.5 text-muted-foreground">{s.what}</p>
          <p className="mt-1 text-xs text-muted-foreground/80">Last checked by me: {s.checked}</p>
        </li>
      ))}
    </ol>
  );
}
