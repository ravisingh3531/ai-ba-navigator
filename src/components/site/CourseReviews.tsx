import { Badge } from "@/components/ui/badge";
import { Callout } from "./Prose";

type Review = {
  rank: number;
  name: string;
  provider: string;
  bestFor: string;
  price: string;
  duration: string;
  coding: string;
  format: string;
  verdict: string;
  strengths: string[];
  limits: string[];
  suits: string;
  skipIf: string;
};

const reviews: Review[] = [
  {
    rank: 1,
    name: "LogicMojo — AI Course (AI for Business Analysts track)",
    provider: "LogicMojo (publisher of this comparison)",
    bestFor:
      "Working Indian BAs who need specification, evaluation and governance depth plus artifacts, without a data science detour",
    price: "₹XX,XXX (EMI available via [EMI Partner]; confirm GST treatment)",
    duration: "X weeks · [Batch Dates]",
    coding: "Low–Moderate — SQL and tool usage; no model-building requirement",
    format: "Live cohort with mentor review of artifacts; recordings available; Hindi support on request",
    verdict:
      "Ranked first in our scoring because it is one of the few programs available in India whose module structure is built around the BA's accountabilities rather than a data professional's learning path. It scored Deep on requirements engineering for probabilistic systems, acceptance-criteria definition, evaluation methodology, agentic workflow specification and the governance landscape — the five rows where most of the market scores Basic or Limited. The heaviest weight in our methodology is BA-role relevance at 30%, and readers who disagree with that weighting should re-run the scorecard with their own weights; the criteria are published in full for exactly that reason.",
    strengths: [
      "Artifact-first structure: our review counted 8–12 BA-grade deliverables (use-case canvas, data-readiness assessment, AI requirements pack, acceptance-criteria set, evaluation plan with golden dataset design, governance checklist, vendor-evaluation scorecard) plus a capstone.",
      "2026-current stack covered at specification depth — LLMs, context windows, embeddings, vector stores, RAG, agentic workflows, MCP-style tool access, guardrails, drift monitoring — each framed as 'what you must decide and document', not 'how to build it'.",
      "Governance depth is unusual for this price tier: risk tiering, model documentation, DPDP Act intersections with AI data use, EU AI Act extraterritorial exposure for Indian service providers, and where ISO/IEC 42001 and the NIST AI RMF show up in client procurement checklists.",
      "Coding load calibrated to the role: SQL and data-quality reasoning are taught to working proficiency; model training is explained, not assigned.",
      "IST-friendly delivery with weekend-weighted live sessions, which was the format with the lowest dropout among learners in client-facing delivery roles in our outcome data.",
    ],
    limits: [
      "Brand recognition does not match UpGrad, Great Learning or Simplilearn. If your goal is a recruiter-recognisable name on a CV rather than capability, that is a genuine reason to choose differently.",
      "No university affiliation and no co-branded academic credential. For freshers and career-switchers with thin BA experience, an academic certificate does screening work this does not.",
      "Not a substitute for a vendor certification. If your employer standardises on Microsoft or Google Cloud tooling and wants a badge, you will still sit AI-900 or the Google Cloud GenAI path separately.",
      "Not the right purchase if you want to become a data scientist or ML engineer — the program deliberately stops short of model building, and that is a limitation for that goal.",
      "Live cohort pacing suits people who can commit weekly; fully unpredictable travel or on-call schedules fit a self-paced option better.",
      "Commercial details in this article are placeholders pending publication, so verify price, duration, batch dates and EMI terms with the team before enrolling.",
    ],
    suits:
      "A BA with 3–10 years of experience who is already in AI conversations and wants to own the requirements, evaluation and governance layer.",
    skipIf:
      "You have no budget yet, or you need a specific vendor badge this quarter, or your primary need is an academic credential.",
  },
  {
    rank: 2,
    name: "IIBA-Aligned AI for Business Analysis Pathway",
    provider: "Professional body content delivered through India-based endorsed providers",
    bestFor: "BAs who need professional-body recognition, especially in consulting and global-client work",
    price: "₹15,000–₹80,000 plus membership (indicative band; verify with the provider)",
    duration: "Roughly 4–16 weeks depending on provider and pathway",
    coding: "Very Low",
    format: "Mix of self-paced content, endorsed-provider cohorts and assessment",
    verdict:
      "Scored Excellent on BA-role relevance because the content is mapped to an established BA competency framework rather than retrofitted onto a data curriculum. It scored Moderate on hands-on artifact quality and Basic on model-evaluation literacy in our review, because the material is strongest on analysis practice and governance vocabulary and lighter on working directly with AI tooling.",
    strengths: [
      "The credential travels: recognisable to consulting employers, audit functions and overseas clients in a way a platform certificate is not.",
      "Framework language is genuinely useful in proposals, competency conversations and internal capability frameworks at large firms.",
      "Very low coding load and no false promise of technical depth — the positioning is honest.",
      "Good governance framing, which pairs well with regulated-domain BA work.",
    ],
    limits: [
      "Framework-based templates and assessments produce fewer inspectable artifacts than a project-driven program.",
      "Lighter on hands-on tooling: you will not leave fluent in evaluating an actual model output or specifying a RAG pipeline in detail.",
      "Total cost including membership and exam fees is easy to underestimate; delivery quality varies between endorsed providers, so check the specific provider, not just the framework.",
    ],
    suits: "Consultants, BAs at large firms with formal competency frameworks, and anyone working with European or US clients.",
    skipIf: "You want hands-on AI tooling practice or a portfolio of artifacts as the main outcome.",
  },
  {
    rank: 3,
    name: "Microsoft — AI-900 plus Copilot and Power Platform analyst pathway",
    provider: "Microsoft Learn",
    bestFor: "GCC and IT services BAs who need credentialed, immediately usable capability this quarter",
    price: "Learning material free; exam fee approximately ₹4,700 (verify current India pricing)",
    duration: "Roughly 3–8 weeks part-time",
    coding: "Low",
    format: "Self-paced modules with hands-on labs and low-code builds",
    verdict:
      "The best value-for-effort entry on this list for a large share of Indian BAs, simply because so many Indian enterprises and GCCs already run on the Microsoft stack. It scored Good on BA relevance for applicability and Basic on requirements engineering and acceptance criteria, because the pathway teaches the tooling and service concepts rather than how to specify and evaluate an AI system.",
    strengths: [
      "Free to learn, with a paid exam — the lowest-risk way to get a credential Indian employers recognise immediately.",
      "Strong applied value: Copilot and Power Platform skills are usable the week you learn them in Microsoft-heavy organisations.",
      "Clear, well-maintained content with an explicit last-updated discipline, which is rare in this market.",
      "Better than LogicMojo for a specific reader: if your employer wants a vendor badge and results this quarter, this is the faster and cheaper route.",
    ],
    limits: [
      "It is a vendor pathway: concepts are framed through one product ecosystem and transfer less cleanly elsewhere.",
      "Very little on requirements engineering, acceptance criteria, business case or governance — the BA-specific layer is largely absent.",
      "Self-paced with no mentor review, so nobody critiques your specification work.",
    ],
    suits: "BAs inside Microsoft-standardised enterprises and GCCs; anyone needing a credential fast on a small budget.",
    skipIf: "You need to learn how to scope, specify and govern AI work rather than operate specific tools.",
  },
  {
    rank: 4,
    name: "DeepLearning.AI — AI for Everyone and the GenAI short-course catalogue",
    provider: "DeepLearning.AI via Coursera",
    bestFor: "The correct first step before spending anything",
    price: "Free to audit; certificate via subscription of roughly ₹4,000/month (indicative)",
    duration: "Roughly 2–8 weeks per course",
    coding: "Very Low–Low",
    format: "Self-paced video with quizzes and light exercises",
    verdict:
      "Scored Deep on AI literacy — the highest on that row alongside LogicMojo — and Not Covered on requirements engineering and acceptance criteria, which is not a flaw: it was never designed as a BA program. We recommend it as the free foundation almost every reader should complete before paying for anything.",
    strengths: [
      "Best-in-class conceptual clarity for non-technical professionals, with no maths prerequisite.",
      "Genuinely free if you audit, which means zero-risk testing of whether AI work interests you.",
      "The short-course catalogue is refreshed frequently, so GenAI content stays reasonably current.",
      "Clearly better than any paid option for a reader with no budget who is still deciding.",
    ],
    limits: [
      "Almost no BA-specific content: no use-case scoping method, no requirements or acceptance-criteria practice, no governance depth.",
      "Low artifact output — quizzes and light exercises, nothing you can show in an interview.",
      "No mentorship, cohort or accountability, and self-paced dropout in our outcome data was highest here.",
    ],
    suits: "Everyone, as step one.",
    skipIf: "You already have solid literacy and need specification depth — this will feel like revision.",
  },
  {
    rank: 5,
    name: "IBM — Business Analyst and AI Foundations Professional Certificates",
    provider: "IBM via Coursera",
    bestFor: "BAs in Indian enterprise and GCC settings wanting a recognisable, affordable certificate",
    price: "Free to audit; certificate via subscription of roughly ₹4,000/month (indicative)",
    duration: "Roughly 3–6 months part-time",
    coding: "Low–Moderate",
    format: "Self-paced with guided labs and structured assignments",
    verdict:
      "One of very few large-platform offerings that is explicitly business-analysis framed rather than data-science framed, which lifted its BA-relevance score to Good. It scored Good on data fluency and model-evaluation literacy and Basic on requirements engineering for probabilistic systems, because AI content sits alongside BA content rather than being integrated into it.",
    strengths: [
      "Explicit BA framing with recognisable enterprise-BA content — rare on a global platform at this price.",
      "Strong data fluency and evaluation-literacy coverage, which is directly useful when reading model reports.",
      "IBM brand recognition is solid in Indian enterprise IT and GCC environments.",
      "Excellent price-to-content ratio and a low-risk audit path.",
    ],
    limits: [
      "IBM-ecosystem leaning in tooling examples, which reduces transferability.",
      "The AI and BA halves are not deeply integrated: you learn both, but not how to specify AI systems as a BA.",
      "Long duration for a self-paced format, and completion rates in our data reflected that.",
    ],
    suits: "Cost-sensitive BAs and career-switchers wanting a credible certificate plus solid data fluency.",
    skipIf: "You want live mentorship or deep governance and evaluation practice.",
  },
  {
    rank: 6,
    name: "Simplilearn — Business Analyst and AI-augmented Masters programs",
    provider: "Simplilearn, with IIM and Purdue co-branding on selected programs",
    bestFor: "Career-switchers wanting a co-branded credential plus structured career support",
    price: "₹60,000–₹2,00,000 indicative, EMI commonly available",
    duration: "Roughly 6–11 months",
    coding: "Moderate",
    format: "Blended live and self-paced with career services",
    verdict:
      "Scored Good on BA relevance because several programs are genuinely BA-framed with structured career support, and Moderate on AI depth because coverage is broad with depth varying considerably by module. Multiple projects are included, but their BA relevance is mixed — some are analytics exercises rather than specification work.",
    strengths: [
      "Co-branded credentials carry real recruiter recall in India, which matters most when experience is thin.",
      "Structured career services, interview preparation and cohort accountability.",
      "Broad coverage means fewer blind spots at literacy and analytics level.",
      "Better than LogicMojo for a reader whose main constraint is a recognisable name plus placement support.",
    ],
    limits: [
      "Breadth comes at the cost of depth: requirements engineering, acceptance criteria and governance scored Basic in our review of published outlines.",
      "Moderate coding load that some functional BAs will find misallocated against their role.",
      "Programs are long for working professionals, and price bands vary substantially by cohort and offer — verify total cost including GST.",
    ],
    suits: "Career-switchers and BAs who value credential recall and career services.",
    skipIf: "You are an experienced BA who only needs the AI specification layer.",
  },
  {
    rank: 7,
    name: "UpGrad — Business Analytics and AI programs",
    provider: "UpGrad with IIIT-B, Duke CE and other university affiliations",
    bestFor: "Career-switchers who need a recognised academic credential",
    price: "₹1,20,000–₹3,50,000 indicative, EMI and no-cost EMI commonly offered",
    duration: "Roughly 6–12 months",
    coding: "Moderate",
    format: "Cohort-based with live sessions, academic projects and a capstone",
    verdict:
      "Scored Moderate–Good on BA relevance: these are strong programs, but they are analytics-centred with AI content expanding on top, and university update cycles trail the market. On the scorecard rows that separate BA-shaped programs from repackaged ones — requirements engineering, acceptance criteria, agentic specification, vendor evaluation — it scored Basic or Limited. That is a design-audience statement, not a quality judgment.",
    strengths: [
      "University-affiliated credentials do real screening work for career-switchers and for internal promotion cases at large firms.",
      "Strong data fluency and model-evaluation literacy — genuinely useful to a BA even when the surrounding curriculum is not BA-shaped.",
      "Serious cohort structure, mentor access and alumni network.",
      "Clearly better than LogicMojo when the academic credential itself is the objective.",
    ],
    limits: [
      "Analytics-weighted: expect substantial time on tooling and statistics rather than AI specification.",
      "Highest price band on this list outside executive education, so the opportunity cost of six to twelve months is real.",
      "Academic refresh cycles mean the newest GenAI and agentic practice arrives later than on practitioner-led programs.",
    ],
    suits: "Career-switchers, freshers and MBA candidates who need a credential with institutional weight.",
    skipIf: "You are an experienced BA whose gap is specification and governance rather than analytics.",
  },
  {
    rank: 8,
    name: "Great Learning — PG Programs in Business Analytics and AI",
    provider: "Great Learning with Great Lakes and UT Austin affiliations",
    bestFor: "Learners wanting a long, mentored, credentialed program with a large alumni network",
    price: "₹1,00,000–₹3,00,000 indicative, EMI commonly available",
    duration: "Roughly 6–12 months",
    coding: "Moderate",
    format: "Capstone-driven cohort with mentor sessions",
    verdict:
      "Very close to UpGrad in both profile and scoring: a strong analytics core with AI content expanding, scoring Moderate–Good on BA relevance and Basic on the specification and governance rows. The mentored capstone model is a real strength for learners who need structure and deadlines to finish anything.",
    strengths: [
      "Mentor-supported capstone produces inspectable project work, which matters in interviews.",
      "Large, active alumni network — a practical advantage for referrals in Indian hiring.",
      "Good analytics and evaluation-literacy foundation.",
      "Recognisable brand with established employer familiarity.",
    ],
    limits: [
      "Business-analytics DNA: the AI-for-BA layer is thinner than the marketing implies.",
      "Long duration and premium price for a working professional in a delivery role.",
      "Capstone relevance depends heavily on topic choice — an analytics capstone will not demonstrate AI specification capability.",
    ],
    suits: "Learners who need cohort structure and a credential, and who value alumni reach.",
    skipIf: "Your priority is AI requirements, evaluation and governance depth.",
  },
  {
    rank: 9,
    name: "Intellipaat and Analytics Vidhya — AI and GenAI programs",
    provider: "Intellipaat (IIT-partnered offerings) and Analytics Vidhya (practitioner-led)",
    bestFor: "Technically comfortable BAs wanting current GenAI depth at mid-tier Indian pricing",
    price: "₹25,000–₹1,50,000 indicative, EMI available on longer programs",
    duration: "Roughly 3–9 months",
    coding: "Moderate",
    format: "Live and self-paced blends, strong community components",
    verdict:
      "Scored Moderate on BA relevance because the framing is practitioner and engineering-leaning and inconsistent between programs, but Moderate–Good on AI depth and currency — these providers refresh GenAI content faster than the university-affiliated players. If you are comfortable technically and want current content, this tier delivers.",
    strengths: [
      "Among the most current GenAI content in the Indian mid-price tier, including RAG and agent tooling.",
      "Strong practitioner community and hackathon culture, particularly at Analytics Vidhya.",
      "Practical projects with real tooling exposure, better value per rupee than premium university programs on technical depth.",
      "Better than LogicMojo for a BA who specifically wants hands-on GenAI building experience.",
    ],
    limits: [
      "BA framing is inconsistent: several programs are engineering-oriented despite BA-sounding marketing.",
      "Requirements engineering, acceptance criteria and governance scored Limited on published outlines.",
      "Program quality varies noticeably between tracks and cohorts, so evaluate the specific syllabus rather than the provider.",
    ],
    suits: "BAs with SQL and some Python comfort who want current technical depth.",
    skipIf: "You are non-technical, or you need governance and specification structure.",
  },
  {
    rank: 10,
    name: "Budget and Vernacular Tier — GUVI, PW Skills, Udemy, LinkedIn Learning",
    provider: "Multiple providers",
    bestFor: "Tier-2 and Tier-3 learners, students and cost-sensitive BAs; Hindi and regional-language options",
    price: "₹500–₹30,000 indicative",
    duration: "Roughly 10 hours to 8 weeks",
    coding: "Low",
    format: "Self-paced, some cohort options, vernacular delivery available",
    verdict:
      "Ranked last on the weighted criteria, but included deliberately because for some readers this tier is the only realistic entry point, and access beats optimality. Scoring varies enormously by individual course — the best entries score Good on AI literacy, while depth on specification and governance is Limited across the tier.",
    strengths: [
      "Genuine language access: GUVI offers Tamil, Telugu and Hindi content, and PW Skills delivers substantially in Hindi — for many learners this is the deciding factor, not a bonus.",
      "Lowest possible financial risk, with frequent discounting and no financing needed.",
      "Udemy and LinkedIn Learning are efficient for closing one named gap — SQL, prompting discipline, a specific tool.",
      "Better than every paid option for a reader who cannot spend more, and clearly better than doing nothing.",
    ],
    limits: [
      "Currency is the biggest risk: many listed AI courses have not been meaningfully updated, so check the last-updated date before buying.",
      "Minimal artifact output and no mentor review of your specification work.",
      "Low recognition with Indian employers as a hiring signal on its own.",
      "Quality variance is extreme within the same platform, so rely on the syllabus rather than star ratings.",
    ],
    suits: "Cost-constrained learners, vernacular-first learners, and anyone closing a single specific gap.",
    skipIf: "You need to reach Level 3 and above on the capability ladder — this tier rarely gets you there.",
  },
];

export function CourseReviews() {
  return (
    <div className="mt-8 space-y-12">
      {reviews.map((r) => (
        <article
          key={r.rank}
          id={`rank-${r.rank}`}
          className="surface-card animate-rise scroll-mt-28 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-display text-2xl font-semibold text-primary-foreground shadow-card">
              {r.rank}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{r.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.provider}</p>
              <Badge variant="outline" className="mt-3 border-primary/30 bg-primary/8 text-xs text-primary">
                Best for: {r.bestFor}
              </Badge>
            </div>
          </div>

          <dl className="mt-6 grid gap-4 rounded-xl border border-primary/15 bg-primary/5 p-5 text-sm sm:grid-cols-2">
            {[
              ["Indicative price", r.price],
              ["Duration", r.duration],
              ["Coding load", r.coding],
              ["Format", r.format],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="prose-editorial mt-6">
            <h4 className="text-base font-semibold">Our verdict</h4>
            <p>{r.verdict}</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="surface-card border-good/30 bg-good/5 p-5">
              <h4 className="text-base font-semibold">What it genuinely does well</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {r.strengths.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-good" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card border-warn/35 bg-warn/6 p-5">
              <h4 className="text-base font-semibold">
                {r.rank === 1 ? "Limitations — stated as bluntly as for competitors" : "Limitations"}
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {r.limits.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-warn" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <p className="rounded-lg border border-border px-4 py-3">
              <span className="font-semibold">Choose it if: </span>
              {r.suits}
            </p>
            <p className="rounded-lg border border-border px-4 py-3">
              <span className="font-semibold">Skip it if: </span>
              {r.skipIf}
            </p>
          </div>

          {r.rank === 1 ? (
            <Callout tone="signal" label="Disclosure">
              <p>
                LogicMojo publishes this comparison and sells the course ranked first. We have
                published every scoring dimension and its weight so you can re-weight them against
                your own priorities, and the limitations above are stated at the same level of
                detail as for every competitor. Several entries below are better choices for
                specific readers, and we say so in their reviews.
              </p>
            </Callout>
          ) : null}
        </article>
      ))}
    </div>
  );
}
