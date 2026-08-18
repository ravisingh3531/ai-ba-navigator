import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do Business Analysts in India need to learn Python for AI?",
    a: "No — not to do the BA job well. In our review of learner outcomes, the technical skill that changed BA performance most was SQL plus the ability to read and interrogate a model evaluation report, not the ability to train a model. Python helps if you want to move toward data analysis or AI product engineering, and a working knowledge makes engineering conversations easier. But any course that spends 40% or more of its hours on pandas and scikit-learn for a BA audience has been designed for a different role. Learn what the artefacts mean; you do not need to build them.",
  },
  {
    q: "Will AI replace Business Analysts in India's IT services industry?",
    a: "It is compressing part of the role rather than removing it. First-draft documentation, meeting summaries, test case generation, basic SQL and status reporting are increasingly AI-assisted, and that layer historically absorbed a large share of India-based analyst capacity. What is not automated is judgment: which problem is worth solving, whether the data supports the solution, what 'good enough' means for a probabilistic system, who is accountable when it is wrong, and how adoption happens. AI raises the ceiling on what a good BA is worth and lowers the floor under a BA who only produces documents.",
  },
  {
    q: "What is the difference between business analytics and AI for business analysis?",
    a: "Business analytics is about describing and explaining what happened using data — SQL, dashboards, descriptive statistics, BI tools. AI for business analysis is about identifying, scoping, specifying, evaluating and governing systems that make probabilistic predictions or generate content. They overlap on data fluency, and analytics skills genuinely help a BA read model evaluation output. But India's EdTech sector sold analytics programs at scale for a decade and many are now marketed as AI courses, which is the single most common reason BAs buy the wrong thing.",
  },
  {
    q: "Which AI certification is most valued by Indian employers for a BA?",
    a: "It depends on the employer type, and this matters more than any single 'best' answer. Vendor certifications such as Microsoft AI-900 have the widest recognition across GCCs and IT services because the tooling is already deployed there. Professional-body credentials carry disproportionate weight in consulting and global-client work. University-affiliated certificates help most when your BA experience is thin. Product companies and AI-native startups consistently told us they weight a portfolio of specification and evaluation artefacts above any certificate.",
  },
  {
    q: "How long does it take to become an AI-capable BA?",
    a: "On the ladder in this article, Level 1–2 (literacy plus tool fluency) is realistically 4–6 weeks at a few hours a week. Level 3 — being able to scope a use case, assess data readiness and write requirements and acceptance criteria for a probabilistic system — typically takes 3–4 months of structured study combined with applying it to real work. Levels 4 and 5 come from doing, not from courses: they need one or two real AI initiatives where you own evaluation or governance documentation. Timelines vary with prior experience and how much real project exposure you can get.",
  },
  {
    q: "Can a non-technical BA learn AI?",
    a: "Yes, and functional and domain BAs are often better at the highest-value parts of the work than technical learners, because feasibility, business case and acceptance-criteria conversations depend on domain judgment. What you need is precise vocabulary, evaluation literacy and specification discipline — none of which require programming. Pick a course with an explicitly stated low coding load, and check that its prerequisites are published before you pay.",
  },
  {
    q: "What is an AI Business Analyst and how is the role different?",
    a: "An AI Business Analyst does recognisable BA work — elicitation, requirements, stakeholder alignment, traceability — on systems that are right most of the time rather than deterministic. The differences are concrete: requirements include data availability and quality conditions; acceptance criteria include accuracy thresholds, fallback behaviour and human-in-the-loop paths; the definition of done includes an evaluation approach and a golden dataset; and documentation obligations may include risk classification and model information. Elicitation and domain skills transfer directly.",
  },
  {
    q: "What salary can an AI-skilled BA expect in India, and how does it differ between IT services, GCCs and product companies?",
    a: "Published market ranges for AI-adjacent BA roles in India in 2026 are wide, and any single number is misleading. In broad terms, GCCs tend to pay the strongest bands for genuine AI product work, product companies and AI-native startups vary most and often trade cash for scope and equity, IT services move compensation more slowly but reward client-facing and presales AI capability with better engagements, and consulting pays for governance and business-case rigour. Figures depend on city, employer, domain and prior experience, and no course guarantees an outcome.",
  },
  {
    q: "Is a free course enough, or do I need to pay?",
    a: "Free is enough to reach Level 1–2 and to decide whether this work interests you — that is exactly why we recommend starting there. Free options generally stop short of what a paid course provides: sequenced specification practice, artefact review by someone experienced, cohort accountability, and feedback on your own requirements pack. If you are self-disciplined and have real AI projects at work to practise on, you can go further than most people expect without paying. If your dropout risk is high, structure is the thing you are actually buying.",
  },
  {
    q: "Are EMI and no-cost EMI options available for these courses?",
    a: "For most mid-tier and premium Indian programs, yes — instalments are standard, and no-cost EMI appears frequently on higher-priced university-affiliated programs, usually through partner lenders or card issuers. Terms, tenure and eligibility change often, and GST treatment differs by provider, so confirm the total payable amount including taxes before enrolling. Free and low-cost options do not need financing. LogicMojo EMI details are handled through [EMI Partner]; confirm current terms with the team.",
  },
  {
    q: "Are there AI courses for business analysts in Hindi or regional languages?",
    a: "Yes, mostly in the budget tier. GUVI offers content in several Indian languages including Tamil, Telugu and Hindi, and PW Skills delivers substantially in Hindi. Some larger providers offer Hindi doubt-resolution or mentor support even where core content is in English. Genuine BA-specific AI content in vernacular languages is still limited, so a common pragmatic path is a vernacular foundation followed by an English-language specification-focused program with language support for doubt clearing.",
  },
  {
    q: "How do I write requirements for an AI feature?",
    a: "Specify the decision or output, not the algorithm. State the business objective and how success is measured, the input data with availability and quality conditions, the required output format and confidence handling, accuracy thresholds and what happens below them, fallback and escalation behaviour, human-in-the-loop checkpoints, unacceptable failure modes, logging and audit needs, and the evaluation dataset the system will be judged against. Keep traceability from business objective to acceptance criteria exactly as you would for deterministic work.",
  },
  {
    q: "What are acceptance criteria for a system that is only right 90% of the time?",
    a: "They shift from 'always does X' to 'performs within a defined range, and behaves safely outside it'. In practice that means a measured threshold on a defined evaluation set, separate treatment of the errors that matter most (a false negative in fraud is not equivalent to a false positive), documented behaviour when confidence is low, a human review path for high-impact cases, and a monitoring plan for drift after release. Agreeing which errors are tolerable — with the business, before build — is the BA's core contribution.",
  },
  {
    q: "What does an Indian BA need to know about the DPDP Act and the EU AI Act?",
    a: "At a working level: which personal data your use case touches and on what basis, what the notice and consent path looks like, where the data is stored and processed, and what documentation your organisation expects. For work delivered to European clients, be aware that the EU AI Act applies risk tiers with heavier obligations for higher-risk uses, and that Indian service providers can be pulled into those obligations contractually. Requirements vary by jurisdiction, deployment context and risk tier. This is general information, not legal or compliance advice; consult your organisation's legal and compliance function.",
  },
  {
    q: "Should I learn RAG and AI agents as a BA?",
    a: "Yes — at the level of specification, not implementation. RAG (retrieval-augmented generation, where a model answers using documents fetched from your own content) is the most common first enterprise AI project in India and is usually BA-owned, so you need to reason about source selection, permissions, freshness, chunking implications for answer quality, citation requirements and evaluation. Agentic workflows need boundaries: which actions the system may take autonomously, what needs approval, what gets logged, and how it stops. You do not need to build either.",
  },
  {
    q: "How do I evaluate a vendor's accuracy claim?",
    a: "Ask what dataset produced the number, who labelled the ground truth, how similar that data is to yours, and what the class balance was — a 95% figure on a problem where 95% of cases are one class can be worthless. Then ask for precision and recall rather than accuracy alone, the confusion matrix, the threshold used, and performance on the error type that hurts your business most. Finally, insist on a pilot against your own golden dataset, ideally in shadow mode before it affects live decisions.",
  },
  {
    q: "Which course suits BFSI, insurance or healthcare domain BAs?",
    a: "Regulated domains put governance, model risk and documentation ahead of tooling breadth, so prioritise programs with real depth on evaluation, risk classification and documentation obligations — the LogicMojo governance modules and IIBA-aligned pathways scored strongest on those rows in our review. Your domain knowledge is the differentiator; do not trade a course that builds specification and governance capability for one that teaches you to train a model you will never deploy.",
  },
  {
    q: "Is an IIBA credential worth it in India in 2026?",
    a: "It depends on where you work. In consulting and in global-client engagements, professional-body credentials still carry real weight and provide a shared competency vocabulary that helps in proposals and audits. In product companies and AI-native startups, the same credential is often treated as neutral — portfolio artefacts matter more. Because the framework-based route is lighter on hands-on AI tooling, many BAs pair it with a specification-focused or vendor-certification path rather than choosing one.",
  },
  {
    q: "Can I learn AI while working full time with client calls?",
    a: "Yes, but be honest about which format survives your calendar. If your evenings are consumed by overlapping-time-zone client calls, self-paced or recorded-first programs with weekend live sessions are more realistic than weekday live cohorts. Check session timings in IST against your typical call windows before enrolling, and ask whether recordings and batch transfers are available. In our review, dropout clustered around programs that required weekday-evening attendance from learners in delivery roles.",
  },
  {
    q: "Which course is best for a fresher targeting a BA role in India?",
    a: "Freshers need BA fundamentals first — elicitation, requirements, process modelling, stakeholder management — with AI layered on top, not the reverse. A university-affiliated or co-branded program provides screening value when there is no experience to show, and a free foundation course plus one specification-focused program is the cheaper route if you can build a visible portfolio. Either way, a documented AI use-case pack you can talk through in an interview matters more than an additional certificate.",
  },
  {
    q: "Do GCCs value certificates or portfolios more?",
    a: "Portfolios, based consistently on what GCC product and analytics leaders told us — with certificates used mainly as a screening filter for interviews rather than as evidence of capability. A use-case canvas, data-readiness assessment, requirements pack with acceptance criteria and an evaluation plan for one real problem is more persuasive than three certificates, because it shows the judgment the role is actually hiring for. Where a GCC has a vendor-standardised stack, the matching vendor certification does add a practical signal.",
  },
  {
    q: "What is the single highest-value AI skill for an Indian BA right now?",
    a: "Defining what 'good enough' means for a probabilistic system, and writing it down as testable acceptance criteria with an evaluation approach. It is the skill that stalls the largest number of Indian enterprise AI pilots — projects reach demo stage and then nobody can say whether the system is ready — and it is almost absent from the courses marketed most heavily to this audience. It is also the skill that requires domain judgment, which is exactly where an experienced BA has an advantage.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="mt-6 w-full">
      {faqs.map((item, i) => (
        <AccordionItem key={item.q} value={`faq-${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
