import { useEffect, useMemo, useState } from "react";
import { List, X, ChevronRight } from "lucide-react";
import { reviewIndex } from "@/components/site/CourseReviews";

type Item = { id: string; label: string; child?: boolean };

const items: Item[] = [
  { id: "top", label: "Overview" },
  { id: "deep-dive", label: "The deep dive" },
  { id: "problem", label: "Why courses fail beginners" },
  { id: "reality-check", label: "Reality check" },
  { id: "top-10", label: "Top 10 picks" },
  { id: "logicmojo", label: "Why LogicMojo is #1" },
  { id: "logicmojo-curriculum", label: "Curriculum, module by module", child: true },
  { id: "logicmojo-artifacts", label: "Artifacts you leave with", child: true },
  { id: "logicmojo-limits", label: "Honest limitations", child: true },
  { id: "reviews", label: "The full reviews" },
  ...reviewIndex.map((r) => ({
    id: r.id,
    label: `${r.rank}. ${r.short}`,
    child: true,
  })),
  { id: "methodology", label: "Methodology" },
  { id: "reviewers", label: "Author & reviewers" },
  { id: "research", label: "Research & ranking method" },
  { id: "choose", label: "How to choose" },
  { id: "beyond-marketing", label: "Beyond the marketing" },
  { id: "skills", label: "Skills a BA needs" },
  { id: "careers", label: "Career paths" },
  { id: "roadmap", label: "90-day roadmap" },
  { id: "decision-tree", label: "Quiz: find your course" },
  { id: "genai-quiz", label: "Beginner GenAI matcher", child: true },
  { id: "checklist", label: "Buyer's checklist" },
  { id: "faq", label: "FAQs" },
  { id: "seo", label: "Resources & metadata" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const line = window.innerHeight * 0.32;
      let current = elements[0]?.id ?? "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

export function StickyToc() {
  const ids = useMemo(() => items.map((i) => i.id), []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const activeLabel = items.find((i) => i.id === active)?.label ?? "Overview";

  const list = (onNavigate?: () => void) => (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={[
                "group flex items-start gap-2 rounded-md py-1.5 pr-2 text-[0.8rem] leading-snug transition-colors duration-200",
                item.child ? "pl-5" : "pl-3 font-medium",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground",
              ].join(" ")}
            >
              <span
                aria-hidden
                className={[
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-200",
                  isActive
                    ? "scale-125 bg-primary"
                    : "bg-primary/30 group-hover:bg-primary/60",
                ].join(" ")}
              />
              <span className="min-w-0">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop rail */}
      <nav
        aria-label="Table of contents"
        className="pointer-events-none fixed left-4 top-0 z-40 hidden h-screen w-60 items-center 2xl:flex"
      >
        <div className="pointer-events-auto max-h-[80vh] w-full overflow-y-auto rounded-xl border border-primary/15 bg-card/85 p-3 shadow-card backdrop-blur-md">
          <p className="eyebrow px-3 pb-2 text-primary">On this page</p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="pt-2">{list()}</div>
        </div>
      </nav>

      {/* Mobile / tablet sticky bar */}
      <div className="sticky top-0 z-40 border-b border-primary/15 bg-card/90 backdrop-blur-md 2xl:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mx-auto flex w-full max-w-3xl items-center gap-2 px-5 py-3 text-left text-sm font-medium"
        >
          {open ? (
            <X className="size-4 text-primary" />
          ) : (
            <List className="size-4 text-primary" />
          )}
          <span className="eyebrow shrink-0">Contents</span>
          <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="min-w-0 truncate text-primary">{activeLabel}</span>
        </button>
        {open && (
          <nav
            aria-label="Table of contents"
            className="mx-auto max-h-[65vh] max-w-3xl overflow-y-auto border-t border-primary/10 px-3 py-3"
          >
            {list(() => setOpen(false))}
          </nav>
        )}
      </div>
    </>
  );
}
