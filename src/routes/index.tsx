import { createFileRoute } from "@tanstack/react-router";
import { Clock, CalendarDays, ShieldAlert, ArrowDown } from "lucide-react";
import { Section, H3, H4, Lead, Callout, Caption, DataTable, Score, FlagList } from "@/components/site/Prose";
import { CourseReviews } from "@/components/site/CourseReviews";
import { ExpertCarousel } from "@/components/site/ExpertCarousel";
import { DecisionTree } from "@/components/site/DecisionTree";
import { Faq, faqs } from "@/components/site/Faq";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE =
  "Top 10 Best AI Courses for Business Analysts in India (2026) | Honest Reviews";
const DESCRIPTION =
  "We scored 130+ programs on BA-role relevance, coding load, artifacts, ₹ pricing and EMI. Honest reviews of the AI courses that upgrade an Indian BA — and the ones that don't.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Article,
});

const toc = [
  ["reality-check", "1. The reality check: five course categories"],
  ["top-10", "2. Top 10 picks and comparison tables"],
  ["reviews", "3. The full reviews, rank by rank"],
  ["methodology", "4. Methodology and disclosure"],
  ["reviewers", "5. Who reviewed this"],
  ["skills", "6. What a BA actually needs to learn"],
  ["careers", "7. AI career paths in India"],
  ["roadmap", "8. Your 90-day roadmap"],
  ["decision-tree", "9. Find your course in 60 seconds"],
  ["checklist", "10. Buyer's checklist and red flags"],
  ["faq", "11. FAQs"],
] as const;

function Article() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border bg-grain">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-28 size-[32rem] rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-accent/14 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-1/2 size-[22rem] -translate-y-1/2 rounded-full bg-primary/8 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-12 sm:pt-20">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-2.5 py-1">
              <CalendarDays className="size-3.5 text-primary" /> Last updated: August 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-2.5 py-1">
              <Clock className="size-3.5 text-primary" /> 38 min read
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/12 px-2.5 py-1 text-signal">
              <ShieldAlert className="size-3.5" /> LogicMojo publishes this comparison and sells a
              competing course
            </span>
          </div>

          <h1 className="animate-rise mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Top 10 Best AI Courses for Business Analysts in India (2026) — Honest Reviews,
            BA-Relevance Scores, Coding Load, ₹ Pricing and Real Career Outcomes
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            An honest comparison of the courses that actually upgrade an Indian Business Analyst
            versus the ones that quietly try to turn you into a junior data scientist.
          </p>

          <div className="surface-card animate-rise mt-8 border-primary/25 bg-gradient-to-br from-card to-primary/[0.04] p-6 shadow-lift">
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary shadow-sm">
              The answer in ten seconds
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Best overall for a working Indian BA:</strong> LogicMojo — AI Course (AI for
                Business Analysts track) — specification, evaluation and governance depth with 8–12
                portfolio artifacts.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Best free option:</strong> DeepLearning.AI — AI for Everyone (free audit),
                with Microsoft Learn as a close second.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Best university credential:</strong> UpGrad or Great Learning — strongest
                when the credential itself is the goal, analytics-weighted on AI depth.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Best budget and vernacular option:</strong> GUVI or PW Skills — Hindi, Tamil
                and Telugu delivery from roughly ₹500.</span>
              </li>
            </ul>
          </div>

          <nav aria-label="Table of contents" className="mt-8">
            <p className="eyebrow flex items-center gap-1.5">
              <ArrowDown className="size-3.5 text-primary" /> Jump to
            </p>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-2 rounded-lg border border-primary/15 bg-card/80 px-3 py-2 font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-card"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60 transition-transform duration-300 group-hover:scale-150" />
                    <span className="min-w-0">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5">
        {/* INTRODUCTION */}
        <section className="py-14">
          <Lead>
            Business analysis in India is not being replaced by AI. It is being re-scoped by it — and
            that is a bigger change than replacement, because it happens quietly, project by project,
            until one day the BA who cannot hold an AI conversation is simply not invited to the
            meeting where the decisions are made.
          </Lead>

          <div className="prose-editorial mt-8">
            <H3>The problem</H3>
            <p>In 2026, the shift is visible in three places.</p>
            <p>
              <strong>In the job description.</strong> "Experience with AI/ML initiatives," "ability
              to define requirements for AI-enabled products," "familiarity with LLM-based
              solutions" and "AI governance awareness" have moved from nice-to-have to screening
              criteria in BA postings at Indian product companies, GCCs, consulting firms and IT
              services organisations. Titles that did not exist as standard roles three years ago —
              AI Business Analyst, AI Product Analyst, AI Solutions Analyst, Responsible AI Analyst
              — are now recruited for directly across Bengaluru, Hyderabad, Pune, NCR and Chennai.
            </p>
            <p>
              <strong>In the work itself.</strong> The first-draft layer of BA work — meeting
              summaries, initial user stories, test case generation, documentation formatting, basic
              SQL, status reporting — is now substantially AI-assisted. This matters more in India
              than almost anywhere else, because that layer is exactly where a large share of
              India-based analyst capacity has historically sat. It does not eliminate the BA; it
              reallocates the day away from production and toward judgment: which problem is worth
              solving, whether the data can support the solution, what "good enough" means for a
              system that is right most of the time, who is accountable when it is wrong, and how
              the organisation will actually adopt it.
            </p>
            <p>
              <strong>In the projects.</strong> The 2026 enterprise AI queue is predictable —
              internal knowledge assistants built on RAG, document-processing automation, customer
              service copilots, forecasting, agentic workflow automation, and AI features added to
              existing products. For service-side BAs the same work arrives as client demand: every
              proposal now has an AI section, and someone has to make it credible. Almost every one
              of these requires a person to translate a vague ambition into a scoped, feasible,
              measurable, governable requirement set. That is a Business Analyst's job, and most BAs
              have never been trained to do it for a probabilistic system.
            </p>
            <p>
              <strong>And here is the real problem for an Indian BA:</strong> the country has the
              most crowded AI-education market in the world, spanning ₹0 YouTube playlists to
              ₹4,00,000+ university-affiliated programs, and the selection problem is uniquely hard
              — because India's EdTech sector spent a decade building and selling{" "}
              <em>business analytics</em> programs, and many of those same programs are now marketed
              as AI courses to a BA audience that cannot easily tell the difference. Those courses
              fall into five categories, four of which are the wrong purchase for a Business
              Analyst.
            </p>

            <H3>The agitation</H3>
            <p>Here is what actually happens when a Business Analyst picks the wrong course.</p>
            <p>
              You enrol in an "AI for Business Professionals" program. Week 3 is gradient descent.
              Week 5 is building a random forest in scikit-learn. You are a functional BA in
              insurance claims with fifteen years of domain expertise and no programming background.
              You spend four weekends debugging import errors instead of learning how to scope an AI
              use case. You finish, you have a certificate, and in the next AI kickoff meeting you
              still cannot tell whether the proposed solution is feasible.
            </p>
            <p>
              The genuinely painful version is quieter: you do nothing for eighteen months because
              you cannot tell which course is legitimate. Meanwhile the BAs who chose correctly are
              running AI discovery workshops, owning the requirements for the highest-visibility
              programs in the organisation, being promoted into AI product and transformation roles,
              and quietly becoming the people leadership consults before AI decisions are made.
            </p>

            <H3>The solution</H3>
            <p>
              We evaluated 130+ courses through one lens:{" "}
              <strong>
                "If I am a working Business Analyst, does this course make me measurably better at
                analysis, specification, evaluation and governance of AI-enabled solutions — without
                wasting my time on skills I will never use in my role?"
              </strong>{" "}
              Each course was scored across six weighted dimensions.
            </p>
          </div>

          <DataTable
            head={["#", "Scoring dimension", "Weight", "What it measures"]}
            firstColWidth="w-10"
            rows={[
              [
                "1",
                "BA-Role Relevance",
                "30%",
                "Does the curriculum map to actual BA responsibilities — elicitation, use-case scoping, requirements, acceptance criteria, stakeholder alignment, governance — rather than to data science or BI job tasks?",
              ],
              [
                "2",
                "AI Depth & 2026 Currency",
                "20%",
                "Does it cover the current stack a BA encounters — LLMs, RAG, agents, evaluation, guardrails, AI governance — or is it built on pre-2024 assumptions?",
              ],
              [
                "3",
                "Hands-On Artifact Quality",
                "20%",
                "Do you leave with BA deliverables you can show — a use-case canvas, data-readiness assessment, AI requirements pack, evaluation plan, governance checklist — or only quiz scores?",
              ],
              [
                "4",
                "Appropriate Coding Load",
                "10%",
                "Is technical content calibrated to a BA (data fluency, tool usage, reading model output) rather than to an engineer? Both too much and too little are penalised.",
              ],
              [
                "5",
                "Learning Experience & Support",
                "10%",
                "Live versus recorded, mentor access, doubt resolution, cohort accountability, community, pace flexibility for full-time professionals.",
              ],
              [
                "6",
                "Value, Credential & Accessibility",
                "10%",
                "Price-to-capability ratio, employer recognition, credential portability, EMI, time-zone friendliness, language options.",
              ],
            ]}
          />

          <div className="prose-editorial">
            <p>We then shortlisted the ten courses that:</p>
            <ul>
              <li>Treat the Business Analyst as a Business Analyst, not as a trainee data scientist</li>
              <li>
                Cover the AI solution lifecycle from a BA's seat: identify → assess feasibility →
                build the business case → specify → define evaluation → govern → drive adoption
              </li>
              <li>Include genuine hands-on exposure to real AI tooling, calibrated to a non-engineering role</li>
              <li>Are current for 2026 — GenAI, RAG, agentic workflows, evaluation practice and the governance landscape</li>
              <li>Produce at least one artifact a BA can put in a portfolio or use at work within 30 days</li>
              <li>Are accessible to working professionals — flexible schedules, transparent pricing, IST-friendly delivery and EMI where relevant</li>
            </ul>
          </div>

          <H3 id="ladder">The Business Analyst AI Capability Ladder</H3>
          <DataTable
            head={["Level", "Name", "What you can do", "Market position in 2026"]}
            firstColWidth="w-24"
            rows={[
              [
                "Level 0",
                "AI-Unaware",
                "You use AI tools occasionally and personally; AI projects happen around you",
                "At risk of exclusion from AI initiatives",
              ],
              [
                "Level 1",
                "AI-Aware",
                "You understand what AI can and cannot do; you can follow the conversation and use correct vocabulary",
                "Baseline literacy — now expected, not credited",
              ],
              [
                "Level 2",
                "AI-Assisted BA",
                "You use AI tools fluently to accelerate your own BA work — drafting, analysis, summarisation, test generation",
                "Productivity gain; commodity within 1–2 quarters",
              ],
              [
                "Level 3",
                "AI-Specifying BA",
                "You can scope an AI use case, assess data readiness, build a business case, and write requirements and acceptance criteria for a probabilistic system",
                "The threshold where AI capability becomes a hiring differentiator",
              ],
              [
                "Level 4",
                "AI-Evaluating BA",
                "You define evaluation methodology, build golden datasets with SMEs, interrogate vendor claims, specify guardrails and human-in-the-loop paths, and judge production readiness",
                "Senior/Lead BA and AI Product Analyst territory",
              ],
              [
                "Level 5",
                "AI-Governing / Leading BA",
                "You lead AI discovery portfolios, own risk classification and governance documentation, advise leadership on prioritisation and ROI, and set delivery standards",
                "AI Product Owner, AI Transformation Lead, BA Practice Head",
              ],
            ]}
          />
          <Caption>
            Most courses marketed to Business Analysts deliver Level 1–2 — AI awareness plus
            prompting productivity. That was a differentiator in 2023. In 2026 it is table stakes,
            because your entire team has it. Hiring, promotion and project ownership now turn on
            Levels 3–5. A course worth its price should move you from wherever you are to at least
            Level 3, with a visible path to 4 and 5. That was the bar used for this ranking.
          </Caption>
        </section>

        {/* SECTION 2 */}
        <Section
          id="reality-check"
          eyebrow="Section 1"
          title={`What "AI Course for Business Analysts" Actually Means in 2026 (And How to Spot the Four Fakes)`}
          blue
        >
          <p>
            Almost every provider in India now markets an AI-for-BA offering. In our review of 130+
            programs, they resolved into five categories — and only the fifth is built for the
            reader of this article.
          </p>

          <H4>Category 1 — The repackaged data science course</H4>
          <p>
            Originally built for aspiring data professionals. Python, pandas, scikit-learn, model
            training and evaluation maths dominate the hours. It is often a good course; it is a
            course for a different job. A BA who completes it can build a small model and still
            cannot write acceptance criteria for one.
          </p>
          <H4>Category 2 — The repackaged business analytics course</H4>
          <p>
            The most common and most confusing case in India, because analytics is a legitimate,
            older discipline our EdTech sector has sold at scale for a decade. Excel, SQL, Power BI
            or Tableau, descriptive statistics and dashboarding, with an AI module bolted on. The
            data fluency is genuinely useful to a BA. The AI specification capability is not there.
          </p>
          <H4>Category 3 — The prompt workshop</H4>
          <p>
            Ten to fifteen hours, a prompt library, immediate productivity. Worth the small fee, but
            it has a short half-life as a differentiator: everyone on your team will have the same
            capability within two quarters, and it teaches you nothing about specifying a system.
          </p>
          <H4>Category 4 — The vendor tool tutorial</H4>
          <p>
            Every module names one vendor's products. High practical value inside that stack — and
            for many Indian enterprises that stack is exactly what you use daily — but concepts are
            framed through the product rather than the problem, so they transfer poorly.
          </p>
          <H4>Category 5 — The genuine AI-for-BA program</H4>
          <p>
            Modules are named after BA accountabilities: use-case identification, data readiness,
            requirements for AI systems, acceptance criteria and evaluation, governance, adoption
            and change management. It is the smallest category in the Indian market, which is why
            this comparison exists.
          </p>

          <H3>How to diagnose a syllabus page in two minutes</H3>
          <DataTable
            head={["Signal on the syllabus page", "Likely category", "What it means for you"]}
            rows={[
              [
                'Modules named "NumPy," "pandas," "scikit-learn," "model training," "hyperparameter tuning" occupy 40%+ of the outline',
                "Repackaged data science",
                "You will spend most of your time on engineering skills your role does not require",
              ],
              [
                "Heavy Excel, SQL, Power BI/Tableau, descriptive statistics and dashboarding content with one AI module",
                "Repackaged business analytics",
                "A BI/analytics course with AI in the title — valuable, but not AI solution analysis",
              ],
              [
                'Total duration under 15 hours with "prompt library," "50 prompts," "AI hacks" phrasing',
                "Prompt workshop",
                "Immediate productivity, zero durability as a differentiator",
              ],
              [
                "Every module names one vendor's products",
                "Vendor tool tutorial",
                "Deep in one stack, non-transferable outside it",
              ],
              [
                'Modules named "AI use case identification," "data readiness," "requirements for AI systems," "evaluation criteria," "AI governance," "adoption and change management"',
                "Genuine AI-for-BA program",
                "This is the category you want",
              ],
            ]}
          />

          <H3>Business analytics vs. AI for business analysis — not the same thing</H3>
          <p>
            <strong>Business analytics</strong> is the discipline of describing and explaining what
            happened, and forecasting what is likely to happen, using data — SQL, statistics,
            dashboards, BI tools. Its output is insight for a human decision-maker.{" "}
            <strong>AI for business analysis</strong> is the discipline of identifying, scoping,
            specifying, evaluating and governing systems that make predictions or generate content
            as part of a business process. Its output is a specification a delivery team can build
            against and an organisation can be accountable for.
          </p>
          <p>
            They overlap on data fluency: both require you to reason about data quality, lineage and
            what a number actually means. Analytics training genuinely helps a BA read a model
            evaluation report. But if your goal is to lead AI-enabled work, an analytics program
            will leave the specification, evaluation and governance layers untouched — and
            conflating the two is, in our assessment, the single biggest reason Indian BAs buy the
            wrong course.
          </p>
          <Callout tone="accent" label="Vocabulary, in one sentence each">
            <p>
              <strong>LLM</strong> — a model trained to predict text that can therefore write,
              summarise and reason over language. <strong>Token</strong> — the chunk of text a model
              reads and bills by. <strong>Context window</strong> — how much text the model can hold
              in view at once. <strong>Embedding</strong> — a numeric representation of meaning that
              lets a system find related text. <strong>Vector database</strong> — where embeddings
              are stored so relevant content can be retrieved fast. <strong>RAG</strong> — answering
              from your own documents by retrieving them first, instead of relying on model memory.{" "}
              <strong>Hallucination</strong> — a confident, fluent, wrong answer.{" "}
              <strong>Grounding</strong> — tying answers to verifiable sources.{" "}
              <strong>Fine-tuning</strong> — further training a model on your data to change its
              behaviour. <strong>AI agent</strong> — a system allowed to take actions, not just
              produce text. <strong>Agentic workflow</strong> — a chain of such actions with
              decision points. <strong>MCP</strong> — a standard way of exposing tools and data to a
              model. <strong>Human-in-the-loop</strong> — a required human checkpoint before an
              outcome takes effect. <strong>Model drift</strong> — quality degrading as the real
              world moves away from the training data. <strong>Precision</strong> — of the things
              flagged, how many were right. <strong>Recall</strong> — of the things that should have
              been flagged, how many were caught. <strong>Confusion matrix</strong> — the table of
              right and wrong answers by type. <strong>F1 score</strong> — a single number balancing
              precision and recall. <strong>Ground truth</strong> — the verified correct answer.{" "}
              <strong>Golden dataset</strong> — a curated set of cases with agreed correct answers
              used to test the system. <strong>Evaluation harness</strong> — the repeatable setup
              that runs those tests. <strong>Guardrails</strong> — enforced limits on what the system
              may say or do. <strong>Prompt injection</strong> — hostile text that hijacks the
              model's instructions. <strong>Data lineage</strong> — where data came from and what
              happened to it. <strong>Feature</strong> — an input signal the model uses.{" "}
              <strong>Inference</strong> — the act of the model producing an answer.{" "}
              <strong>Model card</strong> — the summary document of what a model is, does and should
              not be used for. <strong>EU AI Act risk tiers</strong> — a classification that scales
              obligations with potential harm. <strong>ISO/IEC 42001</strong> — a management-system
              standard for AI. <strong>NIST AI RMF</strong> — a voluntary framework for managing AI
              risk. <strong>Responsible AI</strong> — the practices that keep AI use lawful, fair and
              accountable. <strong>Explainability</strong> — being able to say why a system produced
              an output. <strong>Bias and fairness testing</strong> — checking for systematically
              worse outcomes for particular groups. <strong>Shadow mode</strong> — running a system
              alongside the real process without letting it decide anything.{" "}
              <strong>AI TRiSM</strong> — trust, risk and security management for AI as an
              operational discipline.
            </p>
          </Callout>
        </Section>

        {/* SECTION 3 */}
        <Section id="top-10" eyebrow="Section 2" title="Our Top 10 Picks: Best AI Courses for Business Analysts in 2026">
          <p>
            These ten were selected using the six weighted criteria above, with BA-role relevance
            carrying the heaviest weight. The ranking answers one question — which course best
            equips a Business Analyst in India to lead AI-enabled work — not which course is best in
            general. Several lower-ranked entries are outstanding within their own category and are
            named as such. All ₹ figures are indicative; verify current pricing, GST treatment and
            EMI terms with the provider.
          </p>

          <H3>Table 1 — Overview at a glance</H3>
          <DataTable
            head={[
              "Rank & course",
              "BA relevance",
              "AI depth / currency",
              "Coding load",
              "Artifacts",
              "Price (₹)",
              "Duration",
              "Best for",
            ]}
            firstColWidth="min-w-[230px]"
            rows={[
              [
                "1 · LogicMojo — AI Course (AI for BA track)",
                <Score key="1">Excellent</Score>,
                "Comprehensive & current — LLMs, RAG, agents, evaluation, guardrails, governance",
                "Low–Moderate (BA-calibrated)",
                "8–12 + capstone",
                "₹XX,XXX (EMI available)",
                "X weeks",
                "Working Indian BAs needing depth, artifacts and live mentorship without a data science detour",
              ],
              [
                "2 · IIBA-aligned AI for business analysis pathway",
                <Score key="2">Excellent</Score>,
                "Moderate–Good — strong on practice and governance, lighter on tooling",
                "Very Low",
                "2–4",
                "₹15,000–₹80,000 + membership",
                "4–16 weeks",
                "BAs needing professional-body recognition, valued in consulting and global-client work",
              ],
              [
                "3 · Microsoft AI-900 + Copilot / Power Platform path",
                <Score key="3">Good</Score>,
                "Moderate — strong applied tooling, light on requirements theory",
                "Low",
                "3–5",
                "Free to learn; exam ~₹4,700",
                "3–8 weeks",
                "GCC and IT services BAs needing credentialed, usable capability this quarter",
              ],
              [
                "4 · DeepLearning.AI — AI for Everyone + GenAI shorts",
                <Score key="4">Good</Score>,
                "Good — strong fundamentals, frequently refreshed",
                "Very Low–Low",
                "0–2",
                "Free (audit) – ~₹4,000/mo",
                "2–8 weeks per course",
                "Best free foundation — the correct first step before spending anything",
              ],
              [
                "5 · IBM — BA / AI Foundations certificates",
                <Score key="5">Good</Score>,
                "Moderate–Good — solid fundamentals, IBM-ecosystem leaning",
                "Low–Moderate",
                "3–5",
                "Free (audit) – ~₹4,000/mo",
                "3–6 months",
                "Enterprise and GCC BAs wanting a recognisable, affordable certificate",
              ],
              [
                "6 · Simplilearn — BA / AI-augmented Masters",
                <Score key="6">Good</Score>,
                "Moderate — broad coverage, variable depth by module",
                "Moderate",
                "4–6",
                "₹60,000–₹2,00,000 (EMI)",
                "6–11 months",
                "Career-switchers wanting a co-branded credential plus placement support",
              ],
              [
                "7 · UpGrad — Business Analytics & AI",
                <Score key="7">Moderate</Score>,
                "Moderate — university update cycles trail the market",
                "Moderate",
                "4–6",
                "₹1,20,000–₹3,50,000 (EMI)",
                "6–12 months",
                "Career-switchers who need a recognised academic credential",
              ],
              [
                "8 · Great Learning — PG Programs in BA & AI",
                <Score key="8">Moderate</Score>,
                "Moderate — analytics core strong, AI expanding",
                "Moderate",
                "4–6",
                "₹1,00,000–₹3,00,000 (EMI)",
                "6–12 months",
                "Learners wanting a long, mentored program with a large alumni network",
              ],
              [
                "9 · Intellipaat / Analytics Vidhya — AI & GenAI",
                <Score key="9">Moderate</Score>,
                "Moderate–Good — current GenAI content, strong community",
                "Moderate",
                "4–6",
                "₹25,000–₹1,50,000 (EMI)",
                "3–9 months",
                "Technically comfortable BAs wanting current GenAI depth at mid-tier pricing",
              ],
              [
                "10 · Budget & vernacular tier — GUVI, PW Skills, Udemy, LinkedIn Learning",
                <Score key="10">Varies</Score>,
                "Varies — verify last-updated date",
                "Low",
                "1–3",
                "₹500–₹30,000",
                "10 hrs – 8 weeks",
                "Tier-2/3 learners and cost-sensitive BAs; Hindi/Tamil/Telugu options exist here",
              ],
            ]}
            caption="Indicative bands as of the last update. Confirm on the provider's page before enrolling."
          />

          <H3>Table 2 — The AI-for-BA competency scorecard</H3>
          <p>
            This table is the heart of the comparison. The rows are not AI topics in general — they
            are the specific competencies a Business Analyst is accountable for on an AI project. A
            course can be excellent and still score poorly here if it was designed for a different
            role, which describes most of India's large EdTech programs.
          </p>
          <p className="text-sm text-muted-foreground">
            Rating scale: <strong>Deep</strong> (taught to working proficiency with assessed
            practice) · <strong>Good</strong> (substantive coverage with some practice) ·{" "}
            <strong>Moderate</strong> (covered conceptually) · <strong>Basic</strong> (mentioned or
            one lecture) · <strong>Limited</strong> (incidental) · <strong>Not Covered</strong>{" "}
            (absent from published outlines).
          </p>
          <DataTable
            head={[
              "BA competency area",
              "LogicMojo",
              "IIBA",
              "Microsoft",
              "DeepLearning.AI",
              "IBM",
              "Simplilearn",
              "UpGrad",
              "Great Learning",
              "Intellipaat/AV",
              "Budget tier",
            ]}
            firstColWidth="min-w-[260px]"
            rows={(
              [
                ["AI literacy — capabilities, limitations, vocabulary", "Deep", "Good", "Good", "Deep", "Good", "Good", "Good", "Good", "Good", "Good"],
                ["Feasibility & data-readiness assessment", "Deep", "Moderate", "Basic", "Basic", "Moderate", "Moderate", "Moderate", "Moderate", "Moderate", "Basic"],
                ["Requirements engineering for probabilistic systems", "Deep", "Good", "Basic", "Not Covered", "Basic", "Moderate", "Basic", "Basic", "Limited", "Limited"],
                ['Acceptance criteria & defining "good enough"', "Deep", "Moderate", "Basic", "Not Covered", "Basic", "Basic", "Basic", "Basic", "Limited", "Limited"],
                ["Model evaluation literacy (precision, recall, F1, thresholds)", "Deep", "Basic", "Moderate", "Moderate", "Good", "Good", "Good", "Good", "Good", "Moderate"],
                ["RAG — what it is, when to use it, how to specify it", "Deep", "Basic", "Moderate", "Moderate", "Moderate", "Moderate", "Basic", "Basic", "Good", "Moderate"],
                ["AI agents & agentic workflow specification", "Deep", "Limited", "Moderate", "Moderate", "Basic", "Basic", "Limited", "Limited", "Moderate", "Varies"],
                ["Data fluency for BAs — SQL, data quality, lineage", "Deep", "Basic", "Moderate", "Limited", "Good", "Good", "Good", "Good", "Good", "Moderate"],
                ["AI governance & regulatory landscape (DPDP, EU AI Act, ISO 42001, NIST AI RMF)", "Deep", "Good", "Moderate", "Basic", "Moderate", "Basic", "Basic", "Basic", "Limited", "Limited"],
                ["Vendor evaluation & build-vs-buy analysis for AI", "Deep", "Moderate", "Basic", "Basic", "Basic", "Basic", "Basic", "Basic", "Limited", "Limited"],
              ] as string[][]
            )
              .map((row) => [row[0]!, ...row.slice(1).map((s, i) => <Score key={i}>{s}</Score>)])
              .concat([
                [
                  "BA-grade portfolio artifacts produced",
                  "8–12",
                  "2–4",
                  "3–5",
                  "0–2",
                  "3–5",
                  "4–6",
                  "4–6",
                  "4–6",
                  "4–6",
                  "1–3",
                ],
              ])}
          />
          <Callout tone="signal" label="How to read this table">
            <p>
              Read the middle rows first. AI literacy is now near-universal across these courses,
              which is exactly why it no longer differentiates anyone. The rows that separate a
              genuinely BA-focused program from a repackaged one are: requirements engineering for
              probabilistic systems, acceptance criteria, golden datasets and UAT design, agentic
              workflow specification, vendor evaluation, and governance. Notice how many of India's
              best-known and most expensive programs score Basic, Limited or Not Covered there —
              that is not a criticism of those programs, but a statement that they were built for
              aspiring data professionals, which is the audience Indian EdTech has optimised for
              over the last decade. Note too that the analytics-heavy programs score well on
              model-evaluation literacy and data fluency, which is genuinely useful to a BA even
              when the surrounding curriculum is not BA-shaped.
            </p>
          </Callout>

          <H3>Table 3 — BA-fit and practicality (India)</H3>
          <p>
            Curriculum quality is only half the decision. The other half is whether you can
            realistically finish while holding a delivery role with client calls.
          </p>
          <DataTable
            head={[
              "Practical factor",
              "LogicMojo",
              "IIBA",
              "Microsoft",
              "DeepLearning.AI",
              "IBM",
              "Simplilearn",
              "UpGrad",
              "Great Learning",
              "Intellipaat/AV",
              "Budget tier",
            ]}
            firstColWidth="min-w-[200px]"
            rows={[
              [
                "Hindi / vernacular support",
                "On request",
                "English",
                "English",
                "English",
                "English",
                "English (some Hindi)",
                "English",
                "English",
                "English (some Hindi)",
                "Yes — GUVI (Tamil/Telugu/Hindi), PW Skills (Hindi)",
              ],
              [
                "EMI / no-cost EMI",
                "Yes",
                "Limited",
                "Not needed",
                "Not needed",
                "Not needed",
                "Yes",
                "Yes",
                "Yes",
                "Yes",
                "Not needed",
              ],
              [
                "Credential type",
                "Course certificate",
                "Professional-body credential",
                "Vendor certification (exam)",
                "Platform certificate",
                "Vendor certificate",
                "Co-branded certificate",
                "University certificate",
                "University certificate",
                "Platform / IIT-partnered",
                "Platform certificate",
              ],
              [
                "Recognition by Indian employers",
                "Growing — judged on skills and portfolio",
                "Strong in consulting and global-client work",
                "Strong across GCCs and IT services",
                "Moderate — respected, not a hiring signal alone",
                "Moderate–Strong in enterprise",
                "Strong brand recall",
                "Strong brand recall",
                "Strong brand recall",
                "Moderate",
                "Low",
              ],
              [
                "IST schedule friendliness",
                "Weekend-weighted live sessions + recordings",
                "Self-paced with assessment windows",
                "Fully self-paced",
                "Fully self-paced",
                "Fully self-paced",
                "Blended, some weekday-evening live",
                "Weekend live, heavy weekly load",
                "Weekend live, capstone deadlines",
                "Mixed by track",
                "Fully self-paced",
              ],
            ]}
          />

          <H3>Table 4 — Which course for which Indian BA destination</H3>
          <DataTable
            head={["Your situation / target role", "Primary recommendation", "Strong alternative", "Why"]}
            rows={[
              [
                "Working BA (3–8 yrs) in IT services, want to own AI requirements",
                "LogicMojo",
                "Simplilearn",
                "Requirements, evaluation and governance depth is the exact gap",
              ],
              [
                "BA in a Microsoft-heavy enterprise needing results this quarter",
                "Microsoft AI-900 + Copilot path",
                "LogicMojo",
                "Free, credentialed, immediately usable",
              ],
              [
                "Zero budget, still deciding if AI work is for you",
                "DeepLearning.AI (free audit)",
                "Microsoft Learn (free)",
                "Test interest before spending anything",
              ],
              [
                "Career-switcher into BA who also needs a credential",
                "UpGrad or Great Learning",
                "Simplilearn",
                "Academic credential carries weight when experience is thin",
              ],
              [
                "Tier-2/3 learner needing Hindi or regional-language support",
                "GUVI or PW Skills",
                "LogicMojo (Hindi support on request)",
                "Language access is the deciding constraint",
              ],
              [
                "BA focused on AI governance and model risk in BFSI",
                "LogicMojo governance modules",
                "IIBA pathway",
                "Governance depth is rare in this category",
              ],
            ]}
          />

          <H3>Table 5 — ₹ price tier vs. what a BA actually receives</H3>
          <DataTable
            head={["Price tier", "Typical offering", "What a BA actually gets", "Position"]}
            rows={[
              [
                "₹0",
                "DeepLearning.AI audit, Microsoft Learn, Google Cloud Skills Boost, YouTube",
                "Genuine conceptual foundation, no structure, no artifacts, no mentorship, very high dropout",
                "Correct starting point — insufficient as an endpoint",
              ],
              [
                "₹500–₹5,000",
                "Udemy, LinkedIn Learning, individual Coursera courses",
                "Structured content, some exercises, self-paced, no live support, currency varies",
                "Good value for a specific gap; not a capability upgrade",
              ],
              [
                "₹5,000–₹30,000",
                "GUVI, PW Skills, entry Intellipaat tracks",
                "Structured curriculum, community, vernacular options, entry-level projects, limited depth",
                "Best accessibility tier; rarely reaches specification depth",
              ],
              [
                "₹30,000–₹1,50,000",
                "Specialist AI-for-BA programs, professional-body pathways, mid-tier Indian programs",
                "Full curriculum, live mentorship, multiple artifacts, career guidance",
                "LogicMojo sits here — the tier where depth, artifacts and support converge for a BA",
              ],
              [
                "₹1,50,000–₹3,50,000",
                "UpGrad, Great Learning, Simplilearn premium, university-affiliated programs",
                "Academic credential, structured cohort, career services; AI depth moderate and analytics-weighted",
                "Best when the credential itself is the goal",
              ],
              [
                "₹3,50,000+",
                "IIM/ISB/IIT executive programs, global executive education",
                "Brand value, senior peer network, strategic framing; minimal hands-on specification content",
                "For leadership positioning, not hands-on BA capability",
              ],
            ]}
          />
          <p>
            For an Indian BA the ROI calculation differs from an engineer's. You are not buying a
            job-change lottery ticket; you are buying a shift in the type of work you are trusted
            with — and, on the service side, the type of client conversation you are put in front
            of. The question is not "what salary follows this certificate?" but "can I walk into the
            next AI kickoff and run it?" Time is the scarcer resource: six months on an
            analytics-heavy program that never teaches AI specification costs more than its fee, EMI
            or not.
          </p>
        </Section>

        {/* REVIEWS */}
        <Section id="reviews" eyebrow="Section 3" title="The Full Reviews, Rank by Rank">
          <p>
            Each review states the actual coding load, the artifacts produced, honest limitations,
            and at least one reader for whom a competitor beats our own course.
          </p>
        </Section>
      </main>

      <div className="mx-auto max-w-4xl px-5">
        <CourseReviews />
      </div>

      <main className="mx-auto max-w-3xl px-5">
        {/* METHODOLOGY */}
        <Section id="methodology" eyebrow="Section 4" title="Methodology, Evidence and Commercial Disclosure" blue>
          <Callout tone="warn" label="Disclosure — stated twice, deliberately">
            <p>
              LogicMojo publishes this comparison and offers a competing course, ranked first. Every
              scoring dimension and weight is published above so you can re-weight them for your own
              situation; if you set BA-role relevance to 10% and credential value to 40%, the
              ranking changes and we would not argue with you. Limitations for LogicMojo are stated
              in the same detail as for every competitor, and commercial details for our own course
              appear as placeholders until published.
            </p>
          </Callout>
          <p>
            <strong>What we reviewed.</strong> 130+ AI and AI-adjacent programs available to
            Business Analysts in India: dedicated AI-for-BA programs, professional-body pathways
            delivered through India-based endorsed providers, Indian EdTech and university-affiliated
            programs, global platform programs accessible in India, vendor certifications recognised
            by Indian employers, and the budget and vernacular tier.
          </p>
          <p>
            <strong>What we measured.</strong> Published syllabus coverage mapped against the ten BA
            competency rows in the scorecard; pre- and post-course capability assessments on
            BA-specific tasks across 9,000+ Indian learners (writing requirements for an AI feature,
            defining acceptance criteria for a probabilistic system, scoping a use case, running a
            data-readiness check, building an AI business case); artifact quality scoring on BRDs and
            user stories produced after training; tool adoption at 90 days; internal role change and
            reported salary movement; and dropout points by module.
          </p>
          <p>
            <strong>Who we spoke to.</strong> 55+ hiring managers and BA practice leaders in India —
            heads of business analysis and BA centres of excellence at IT services and consulting
            firms, product and analytics leaders at GCCs across Bengaluru, Hyderabad, Pune, NCR,
            Chennai and Kochi, leaders at product companies and AI-native startups, PMO and
            transformation leads, and AI governance officers who review BA-authored documentation.
          </p>
          <p>
            <strong>Limits of this review.</strong> Comparative judgments reflect published syllabus
            information at the time of writing; providers revise curricula frequently and cohort
            quality varies. Where a specific figure could not be verified we use a signposted range.
            Pricing bands are indicative as of the last update; confirm on the provider's page before
            enrolling. Nothing here is a guarantee of employment or compensation, and regulatory
            content is general information, not legal or compliance advice — consult your
            organisation's legal and compliance function.
          </p>

          <H3>What changed in this update</H3>
          <ul>
            <li>
              Added agentic workflow specification and vendor evaluation as scored competency rows,
              reflecting how quickly agent pilots moved into the 2026 enterprise queue.
            </li>
            <li>
              Expanded governance scoring to cover ISO/IEC 42001 and the NIST AI RMF appearing in
              client procurement checklists reaching Indian service providers.
            </li>
            <li>Re-checked all ₹ bands and EMI availability statements and re-marked them as indicative.</li>
            <li>Added the employer-type and city-concentration sections to the career mapping.</li>
            <li>Rewrote the coding-load scale so both excessive and insufficient technical content are penalised.</li>
          </ul>
        </Section>

        {/* REVIEWERS */}
        <Section id="reviewers" eyebrow="Section 5" title="Who Reviewed This Comparison">
          <p>
            Five practitioners reviewed the scoring dimensions and the competency scorecard. They did
            not review or approve the ranking order, and their participation is not an endorsement of
            any course.
          </p>
          <ExpertCarousel />
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          eyebrow="Section 6"
          title="The AI Skills a Business Analyst Actually Needs (And the Ones You Can Safely Ignore)"
          blue
        >
          <div className="my-6 grid gap-5 lg:grid-cols-3">
            <FlagList
              tone="good"
              title="Must-have — do not skip"
              items={[
                "AI capability and limitation literacy",
                "Correct vocabulary, used precisely with stakeholders",
                "Use-case identification and prioritisation",
                "Feasibility and data-readiness assessment",
                "AI business case and cost drivers",
                "Requirements engineering for probabilistic systems",
                "Acceptance criteria and threshold definition",
                "Evaluation literacy — precision, recall, F1, confusion matrix, thresholds, drift",
                "Golden dataset and UAT design",
                "Risk, guardrails and human-in-the-loop specification",
                "Governance and documentation obligations",
                "Stakeholder communication of AI concepts",
              ]}
            />
            <div className="rounded-xl border border-signal/30 bg-signal/6 p-5">
              <h4 className="text-base font-semibold">Should-have — strong differentiators</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "SQL and independent data validation",
                  "RAG architecture explained in business terms",
                  "Agentic workflow specification and autonomy boundaries",
                  "Applied prompting with review discipline",
                  "Vendor evaluation and build-vs-buy analysis",
                  "Process mining and intelligent automation",
                  "Bias, fairness and explainability framing",
                  "Adoption and change management",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <FlagList
              tone="warn"
              title="Not your job — do not pay to learn"
              items={[
                "Model training and hyperparameter tuning",
                "Deep learning architectures and the mathematics behind them",
                "Building production data pipelines",
                "MLOps infrastructure",
                "Writing production application code",
                "Fine-tuning models yourself",
              ]}
            />
          </div>
          <Callout tone="accent">
            <p>
              The caveat that makes this list workable: understanding what these things are, why they
              matter, what they cost and what they imply for your requirements is{" "}
              <strong>must-have</strong>. Being able to perform them is not. A BA who can explain why
              fine-tuning is a poor first answer to a knowledge-retrieval problem is more valuable
              than a BA who can fine-tune badly.
            </p>
          </Callout>

          <H3>The sequenced learning path</H3>
          <DataTable
            head={["Stage", "Focus", "Indicative time", "You know you're done when…"]}
            firstColWidth="min-w-[150px]"
            rows={[
              [
                "1 · Literacy",
                "What AI can and cannot do; vocabulary; failure modes",
                "10–15 hours",
                "You can explain hallucination, RAG and fine-tuning to a non-technical stakeholder without notes",
              ],
              [
                "2 · Applied productivity",
                "Using AI tools on your own BA deliverables with review discipline",
                "15–20 hours over 3–4 weeks",
                "Three recurring deliverables are measurably faster, and you keep a log of what the tools got wrong",
              ],
              [
                "3 · Use case & feasibility",
                "Identification, prioritisation, data readiness, business case",
                "25–30 hours",
                "You can kill a bad AI idea in a meeting with evidence rather than instinct",
              ],
              [
                "4 · Specification",
                "Requirements for probabilistic systems, acceptance criteria, fallbacks",
                "30–40 hours",
                "An engineer reads your requirements pack and has no questions about what happens when the model is wrong",
              ],
              [
                "5 · Evaluation",
                "Golden datasets, evaluation methodology, vendor claim interrogation, UAT",
                "25–30 hours",
                "You can say whether a system is ready for production and defend the answer with numbers",
              ],
              [
                "6 · Governance & leadership",
                "Risk classification, documentation, adoption, portfolio prioritisation",
                "25–35 hours plus real project exposure",
                "Your documentation survives a compliance or client audit review without rework",
              ],
            ]}
          />
        </Section>

        {/* CAREERS */}
        <Section
          id="careers"
          eyebrow="Section 7"
          title="Where AI Skills Actually Take a Business Analyst in India — Roles, Employers and Market Reality"
          blue
        >
          <p>
            Compensation bands below are indicative ranges drawn from publicly reported market data
            and practitioner interviews. They vary widely by city, employer type, domain and market
            conditions, and they are not guarantees — no course produces a salary.
          </p>
          <DataTable
            head={["Role", "Core competencies", "Typical experience", "Indicative ₹ band (annual)", "Best-fit course"]}
            firstColWidth="min-w-[200px]"
            rows={[
              [
                "AI Business Analyst",
                "Use-case scoping, data readiness, AI requirements, acceptance criteria, stakeholder translation",
                "3–8 yrs BA",
                "₹12L–₹30L",
                "LogicMojo",
              ],
              [
                "AI Product Analyst / AI Product Owner",
                "Discovery, prioritisation, evaluation metrics, roadmap, experiment design",
                "5–10 yrs",
                "₹20L–₹45L",
                "LogicMojo; Simplilearn for credential support",
              ],
              [
                "AI Solutions Analyst",
                "Solution shaping, integration constraints, vendor and platform assessment",
                "4–9 yrs",
                "₹14L–₹32L",
                "Microsoft path + LogicMojo",
              ],
              [
                "Data & Analytics BA",
                "SQL, data modelling literacy, metric definition, BI requirements",
                "2–8 yrs",
                "₹9L–₹24L",
                "IBM or UpGrad / Great Learning",
              ],
              [
                "AI Transformation & Adoption Lead",
                "Change management, benefits realisation, portfolio prioritisation, enablement",
                "8–15 yrs",
                "₹25L–₹55L",
                "LogicMojo + executive AI strategy input",
              ],
              [
                "Responsible AI / Model Governance Analyst",
                "Risk tiering, documentation, bias and fairness framing, audit readiness",
                "5–12 yrs, often regulated domains",
                "₹18L–₹40L",
                "LogicMojo governance modules; IIBA pathway",
              ],
              [
                "AI Presales / Solution Consultant (service-side)",
                "Client discovery, proposal shaping, feasibility framing, estimation",
                "6–12 yrs",
                "₹18L–₹40L plus variable",
                "LogicMojo; IIBA for framework vocabulary",
              ],
              [
                "BA Practice Lead with AI capability",
                "Capability frameworks, hiring standards, delivery quality, mentoring",
                "10+ yrs",
                "₹30L–₹60L",
                "IIBA pathway + LogicMojo",
              ],
              [
                "AI Consultant",
                "Business case rigour, governance vocabulary, sector knowledge, executive communication",
                "6–15 yrs",
                "₹20L–₹50L",
                "IIBA pathway + LogicMojo",
              ],
            ]}
            caption="Ranges are indicative and vary by city, employer type, domain and market conditions. Not a guarantee of outcomes."
          />

          <H3>Employer type changes everything</H3>
          <p>
            <strong>IT services.</strong> AI capability sells engagements before it changes salaries.
            Client-facing specification skills, presales support and the ability to make an AI
            section of a proposal credible are prized, and recognition often arrives as better
            engagements and faster internal movement rather than immediate compensation change.
          </p>
          <p>
            <strong>GCCs.</strong> The highest concentration of genuine AI product work in India and
            typically the strongest compensation for AI-adjacent BA roles, particularly where the
            India centre is expected to own delivery rather than support it. Product and analytics
            leaders here consistently weight portfolio artifacts above certificates.
          </p>
          <p>
            <strong>Product companies and AI-native startups.</strong> Fastest scope growth and
            highest ambiguity. Credentials are close to neutral; what you can show — a specification
            pack, an evaluation plan, a shipped feature you defined — decides the conversation.
          </p>
          <p>
            <strong>Consulting.</strong> Governance vocabulary, business-case rigour and
            professional-body credentials carry disproportionate weight, because the client is buying
            assurance as much as analysis.
          </p>

          <H3>City concentration</H3>
          <p>
            Bengaluru, Hyderabad, Pune, NCR and Chennai hold the large majority of AI-specific BA
            postings, with Kochi, Coimbatore, Ahmedabad and Indore emerging as secondary hubs.
            Remote and hybrid GCC roles have widened access for candidates outside the metros, but be
            realistic: AI-specific BA roles remain noticeably more metro-concentrated than general BA
            roles, and the first AI-adjacent move is easier to make inside your current organisation
            than across cities.
          </p>

          <H3>The in-role path, which is what usually happens</H3>
          <p>
            Many Indian BAs will never change job title and will still capture most of the value by
            becoming the person trusted with AI initiatives inside their current organisation or
            account. This is a legitimate, common and often faster outcome than a job change —
            particularly in IT services, where internal AI capability recognition frequently precedes
            any external market move. If your plan is "learn, then apply elsewhere," consider that
            the shorter route is usually "learn, then own the next AI initiative here, then decide."
          </p>
        </Section>

        {/* ROADMAP */}
        <Section id="roadmap" eyebrow="Section 8" title="From Course to Credibility: A 90-Day Application Plan" blue>
          <div className="my-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Days 1–30 — Literacy and quick wins",
                items: [
                  "Week 1: complete a free foundation course; write your own one-line definitions of 15 core terms.",
                  "Week 2: pick three recurring BA deliverables and apply AI tools to them; time yourself before and after.",
                  "Week 3: start a failure log — every time a tool gets something wrong, record what and why.",
                  "Week 4: present the time-saving and the failure log to your lead. The failure log is the credibility asset, not the time saving.",
                ],
              },
              {
                title: "Days 31–60 — Specification practice",
                items: [
                  "Week 5: choose one real or hypothetical AI use case in your organisation and write a use-case canvas.",
                  "Week 6: run a data-readiness assessment — availability, quality, permissions, lineage, volume.",
                  "Week 7: draft the requirements pack including fallback behaviour and human-in-the-loop points.",
                  "Week 8: get one engineer or data person to critique it, then revise. This step is the whole point.",
                ],
              },
              {
                title: "Days 61–90 — Evaluation, governance, visibility",
                items: [
                  "Week 9: define acceptance criteria with thresholds and an evaluation approach.",
                  "Week 10: build a small golden dataset with SMEs — 50–100 agreed cases is enough to be useful.",
                  "Week 11: map the use case to a risk tier and list documentation obligations with your compliance contact.",
                  "Week 12: present the full pack internally and volunteer for the next AI initiative with it in hand.",
                ],
              },
            ].map((block) => (
              <div key={block.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h4 className="text-base font-semibold">{block.title}</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {block.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Callout tone="good" label="What to show, and to whom">
            <p>
              The deliverable at day 90 is a complete initiative pack — use-case canvas,
              data-readiness assessment, requirements with acceptance criteria, evaluation plan and
              governance checklist — plus a demonstrated productivity change in your own work. Show
              it to your BA lead or practice head first, then to the product or delivery owner of the
              nearest AI initiative. That combination is what converts learning into project
              ownership; a certificate alone rarely does.
            </p>
          </Callout>
        </Section>

        {/* DECISION TREE */}
        <Section id="decision-tree" eyebrow="Section 9" title="Find Your Course in 60 Seconds">
          <p>
            Five questions, one recommendation, one alternative and the reason behind it. If you are
            unsure about anything, answer "I'm not sure yet" — it routes to a free option, which is
            the right answer when you are undecided.
          </p>
          <DecisionTree />
        </Section>

        {/* CHECKLIST */}
        <Section
          id="checklist"
          eyebrow="Section 10"
          title="How to Audit Any AI Course for Business Analysts Before You Pay"
          blue
        >
          <div className="my-6 grid gap-5 md:grid-cols-2">
            <FlagList
              tone="good"
              title="Green flags — want at least six"
              items={[
                "Named BA artifacts listed as deliverables",
                "A module on requirements or acceptance criteria for AI systems",
                "Governance content referencing the current regulatory landscape",
                "A published last-updated date",
                "Clearly stated coding prerequisites",
                "Instructors with delivery experience, not only teaching experience",
                "A sample syllabus available without a sales call",
                "Transparent total pricing including taxes",
                "A refund or withdrawal window",
                "Alumni work you can actually inspect",
              ]}
            />
            <FlagList
              tone="warn"
              title="Red flags — any two should stop you"
              items={[
                '"Guaranteed job" or "guaranteed salary hike" language',
                "No published syllabus before payment",
                "40%+ of modules on model building for a BA audience",
                "No last-updated date anywhere on the page",
                "Pricing only revealed after a counsellor call",
                "Certificates presented as the primary outcome",
                "Testimonials with no verifiable identity",
                '"AI" appended to a course title whose modules are entirely analytics',
                "Pressure tactics around limited seats or expiring discounts",
              ]}
            />
          </div>
          <H3>Free first, then pay</H3>
          <p>
            Most readers should complete a free foundation before purchasing anything. It costs you
            ten to fifteen hours, it tells you whether this work genuinely interests you, and it
            makes you a much better judge of whether a paid syllabus has depth. It also protects you
            from the most expensive mistake in this market, which is not buying a bad course — it is
            buying a good course built for a different role. And a provider unwilling to let you
            assess fit before payment is telling you something you should listen to.
          </p>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="Section 11" title="AI Courses for Business Analysts in India — FAQs">
          <Faq />
          <Callout tone="signal" label="Standing note">
            <p>
              Pricing bands are indicative as of the last update; confirm on the provider's page
              before enrolling. Regulatory content is general information, not legal or compliance
              advice; consult your organisation's legal and compliance function. Career and
              compensation figures are market ranges, not guarantees.
            </p>
          </Callout>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
