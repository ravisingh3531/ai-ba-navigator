/**
 * Beginner-readiness and placement detail for each ranked course.
 *
 * Editorial rule for this file: every number that a provider publishes about
 * itself is labelled as provider-reported and marked for verification. Nothing
 * here is presented as an independently audited placement statistic, and no
 * salary, company name or student quote is invented. Where we could not verify
 * a figure, the field says so plainly.
 */

export type GenAiTopic =
  | "Python foundations"
  | "ML basics"
  | "Deep learning"
  | "NLP"
  | "Transformers"
  | "LLMs"
  | "Prompt engineering"
  | "RAG"
  | "LangChain"
  | "Vector databases"
  | "AI agents"
  | "Fine-tuning"
  | "GenAI deployment / MLOps";

export const allTopics: GenAiTopic[] = [
  "Python foundations",
  "ML basics",
  "Deep learning",
  "NLP",
  "Transformers",
  "LLMs",
  "Prompt engineering",
  "RAG",
  "LangChain",
  "Vector databases",
  "AI agents",
  "Fine-tuning",
  "GenAI deployment / MLOps",
];

export type Coverage = "deep" | "some" | "none";

export type BeginnerDetail = {
  rank: number;
  /** One-line answer to: is this safe for someone with zero AI experience? */
  beginnerVerdict: string;
  beginnerStars: number; // out of 5, our editorial score for zero-experience readiness
  prerequisites: string;
  rampUp: string;
  teaching: string;
  projects: string[];
  support: string;
  mentorship: string;
  topics: Partial<Record<GenAiTopic, Coverage>>;
  industryReadiness: string;
  placement: {
    model: "Job assistance" | "Career services" | "None (self-serve)" | "Framework / credential only";
    partners: string;
    rate: string;
    mocks: string;
    resume: string;
    linkedin: string;
    counselling: string;
    duration: string;
  };
  feedback: string;
};

const t = (deep: GenAiTopic[], some: GenAiTopic[] = []): Partial<Record<GenAiTopic, Coverage>> => {
  const out: Partial<Record<GenAiTopic, Coverage>> = {};
  for (const x of allTopics) out[x] = "none";
  for (const x of some) out[x] = "some";
  for (const x of deep) out[x] = "deep";
  return out;
};

export const beginnerDetails: BeginnerDetail[] = [
  {
    rank: 1,
    beginnerVerdict:
      "The strongest zero-experience path in this comparison: foundations are taught before any GenAI topic, and the placement pipeline is structured rather than a mailing list.",
    beginnerStars: 5,
    prerequisites:
      "None beyond graduate-level maths comfort and basic computer literacy. No prior Python, no prior AI, no statistics background assumed.",
    rampUp:
      "A dedicated foundation block runs first — Python from installation and syntax through functions, files and libraries, then SQL, then statistics and ML intuition — before the first LLM module opens. Learners who join mid-batch get recorded foundation sessions plus a separate catch-up cohort.",
    teaching:
      "Concept, worked example on screen, guided lab, then an unassisted assignment reviewed by a mentor. Each GenAI topic is introduced only after the prerequisite it depends on: embeddings after vectors, RAG after embeddings, agents after tool-calling, fine-tuning after transformers.",
    projects: [
      "Foundation project: a Python + SQL data pipeline over a public Indian dataset",
      "NLP project: text classification and summarisation with a transformer model",
      "Capstone A — RAG assistant over a document corpus with citations, permissions and evaluation harness",
      "Capstone B — multi-step AI agent with tool access, approval gates and audit logging",
      "Fine-tuning exercise on a small open-weight model with a before/after evaluation report",
      "Deployment exercise: containerised GenAI service with monitoring and cost tracking",
    ],
    support:
      "Live doubt-clearing sessions in every batch week, a mentor-monitored batch group, TA support for foundation-block assignments, and recordings for every session. Hindi explanation available on request during doubt sessions.",
    mentorship:
      "Group mentorship in live class plus scheduled 1-on-1 reviews of capstone work and the final portfolio. Mentors are working practitioners rather than full-time trainers.",
    topics: t(
      [
        "Python foundations",
        "ML basics",
        "Deep learning",
        "NLP",
        "Transformers",
        "LLMs",
        "Prompt engineering",
        "RAG",
        "LangChain",
        "Vector databases",
        "AI agents",
        "Fine-tuning",
      ],
      ["GenAI deployment / MLOps"],
    ),
    industryReadiness:
      "Python, SQL, PyTorch or TensorFlow at usage level, Hugging Face, LangChain or LlamaIndex, a vector store such as FAISS, Chroma or pgvector, an evaluation harness, Git, Docker and a cloud endpoint. Projects use public real-world datasets rather than toy CSVs.",
    placement: {
      model: "Job assistance",
      partners:
        "Provider-published hiring-partner list covering Indian IT services firms, GCCs and product startups — request the current named list before enrolling; we do not restate unverified partner names.",
      rate:
        "Provider-reported; treat any single percentage as marketing until you see the denominator. Ask: of how many learners, in what window, in what roles, self-reported or offer-letter verified?",
      mocks:
        "Structured mock interview rounds — technical (Python, ML, LLM concepts), project defence on your capstone, and an HR round — with written feedback after each.",
      resume:
        "Resume workshop rebuilt around projects rather than course names, plus a reviewed GitHub portfolio README for each capstone.",
      linkedin: "LinkedIn profile optimisation session covering headline, projects section and recruiter keywords for GenAI roles.",
      counselling:
        "1-on-1 career counselling to pick a target role — GenAI Developer, LLM Engineer, Prompt Engineer, AI Product Analyst — and a matching preparation plan.",
      duration:
        "Post-course support continues after the batch ends; confirm the exact window and terms in writing before paying.",
    },
    feedback:
      "Read the provider's published stories at logicmojo.com/success-story and verify them yourself: open each profile on LinkedIn, check that the role title and start date match, and message one alumnus directly. We link the page rather than quoting figures we cannot audit.",
  },
  {
    rank: 2,
    beginnerVerdict:
      "Beginner-safe in vocabulary and pace, but it teaches you to talk about AI rather than build it — there is no placement pipeline attached.",
    beginnerStars: 3,
    prerequisites: "Business-analysis familiarity helps; no coding at all is required.",
    rampUp:
      "No Python or ML foundation block. The ramp is conceptual: AI terminology mapped onto an analysis framework you may already know.",
    teaching: "Framework-first: read, apply to a template, complete a scenario-based assessment.",
    projects: ["2–4 framework-driven written outputs", "Scenario assessments rather than a build capstone"],
    support: "Varies by endorsed provider; some run cohorts with live sessions, others are fully self-paced with email support.",
    mentorship: "Provider-dependent; often none beyond assessment feedback.",
    topics: t([], ["LLMs", "Prompt engineering"]),
    industryReadiness:
      "Strong on documentation and governance vocabulary. No hands-on exposure to LangChain, vector stores or fine-tuning, so it does not produce a GenAI build portfolio.",
    placement: {
      model: "Framework / credential only",
      partners: "None attached to the pathway.",
      rate: "Not published and not applicable — the product is a credential, not a placement service.",
      mocks: "None.",
      resume: "None, beyond the credential itself being listable.",
      linkedin: "None.",
      counselling: "Community and chapter events only.",
      duration: "Not applicable.",
    },
    feedback:
      "Useful signal exists in professional-body chapter groups in Bengaluru, Pune and NCR; ask there rather than relying on provider testimonials.",
  },
  {
    rank: 3,
    beginnerVerdict:
      "Excellent free starting point for a complete beginner who wants to test interest, with a real certification at the end — but no job pipeline and no deep GenAI build work.",
    beginnerStars: 4,
    prerequisites: "None. Genuinely designed for people starting from zero.",
    rampUp: "Guided learning paths with sandboxes, so there is no environment setup barrier for a first-time learner.",
    teaching: "Read, then do a guided lab in a provided sandbox, then a knowledge check. Self-paced throughout.",
    projects: ["3–5 low-code labs", "A small AI Builder or Copilot automation", "AI-900 practice assessment"],
    support: "Documentation and community forums only. No cohort, no TA, no accountability.",
    mentorship: "None.",
    topics: t(["Prompt engineering"], ["ML basics", "NLP", "LLMs", "RAG"]),
    industryReadiness:
      "Ecosystem-specific: Azure AI services, Copilot, Power Platform AI Builder. Immediately useful inside Microsoft-stack employers, less transferable elsewhere.",
    placement: {
      model: "None (self-serve)",
      partners: "None.",
      rate: "Not published; no placement service exists.",
      mocks: "None.",
      resume: "None, though the certification badge is directly verifiable by recruiters.",
      linkedin: "Badge can be added to your profile automatically after passing the exam.",
      counselling: "None.",
      duration: "Not applicable.",
    },
    feedback:
      "The verifiable signal here is the badge itself — a recruiter can check it. That is a different and weaker claim than a portfolio of GenAI projects.",
  },
  {
    rank: 4,
    beginnerVerdict:
      "The clearest conceptual foundation available anywhere and free to audit, which makes it the right first two weeks for almost any beginner — but it is not a job-outcome product.",
    beginnerStars: 4,
    prerequisites: "None for the flagship courses; a few short courses use light Python notebooks.",
    rampUp: "No structured Python or ML ramp; the short-course catalogue assumes you pick your own order, which beginners often get wrong.",
    teaching: "Lecture video, quiz, optional notebook. Fully self-paced with forum-only support.",
    projects: ["Short notebook exercises", "No portfolio-grade capstone"],
    support: "Discussion forums only. Dropout risk for working professionals is real and high.",
    mentorship: "None.",
    topics: t(["Prompt engineering"], ["ML basics", "Deep learning", "NLP", "LLMs", "RAG", "LangChain", "AI agents"]),
    industryReadiness:
      "Concept fluency rather than tool fluency. You will understand what RAG and agents are before you can ship either.",
    placement: {
      model: "None (self-serve)",
      partners: "None.",
      rate: "Not published; no placement service exists.",
      mocks: "None.",
      resume: "None.",
      linkedin: "Certificate is listable after paying for the subscription.",
      counselling: "None.",
      duration: "Not applicable.",
    },
    feedback:
      "Alumni signal is impossible to isolate here because millions have taken it; the honest framing is that it is a prerequisite, not a differentiator.",
  },
  {
    rank: 5,
    beginnerVerdict:
      "Structured and beginner-tolerant with a recognisable corporate certificate, but the GenAI depth stops well short of agents, fine-tuning and production RAG.",
    beginnerStars: 4,
    prerequisites: "None. Sequencing assumes no prior technical background.",
    rampUp: "Includes genuine beginner modules on spreadsheets, SQL and light Python inside guided labs.",
    teaching: "Course-by-course progression with graded quizzes and guided labs; self-paced with deadlines you set.",
    projects: ["3–5 guided project outputs", "Peer-reviewed assignments in some tracks"],
    support: "Forum support and peer review. No live doubt-clearing.",
    mentorship: "None.",
    topics: t(["Python foundations", "ML basics"], ["Deep learning", "NLP", "LLMs", "Prompt engineering", "RAG"]),
    industryReadiness:
      "Python, SQL, notebook workflow and IBM platform tooling. Weak on the 2026 GenAI production stack — LangChain, vector databases, evaluation harnesses.",
    placement: {
      model: "Career services",
      partners: "Platform-level hiring consortium access rather than named partners committed to your cohort.",
      rate: "Platform-level completion and outcome claims only; not cohort-specific and not independently audited.",
      mocks: "Interview-prep content, not live mock rounds with feedback.",
      resume: "Template-based resume guidance inside the platform career resources.",
      linkedin: "Generic guidance module.",
      counselling: "None personalised.",
      duration: "Access continues while the subscription is active.",
    },
    feedback:
      "Check LinkedIn for people listing the exact certificate and a subsequent GenAI role, not just the certificate — the second half is what matters.",
  },
  {
    rank: 6,
    beginnerVerdict:
      "The clearest career-services layer of the paid EdTech tier and workable for a determined beginner, but the GenAI portion is a slice of a much larger analytics syllabus.",
    beginnerStars: 4,
    prerequisites: "None stated; a non-coder should expect real effort in the SQL and Python modules.",
    rampUp: "Excel, SQL and statistics modules run before ML content, which is a genuine ramp for beginners.",
    teaching: "Live cohort classes plus recordings, with assignments and periodic assessments.",
    projects: ["4–6 projects across analytics and AI", "Typically one or two GenAI-specific projects"],
    support: "Live classes, doubt-clearing sessions, learner-success contact and an active batch group.",
    mentorship: "Group mentorship; 1-on-1 access varies by programme tier.",
    topics: t(["Python foundations", "ML basics"], ["Deep learning", "NLP", "LLMs", "Prompt engineering", "RAG"]),
    industryReadiness:
      "Python, SQL, Power BI or Tableau, scikit-learn, plus introductory GenAI tooling. Broad and employable, but not a specialist GenAI stack.",
    placement: {
      model: "Career services",
      partners: "A published hiring-partner network; ask for the list of companies that actually interviewed the last three batches, not the logo wall.",
      rate: "Provider-reported. Ask for the denominator, the eligibility conditions and whether the figure counts interviews offered or offers accepted.",
      mocks: "Multiple mock interview rounds with trainers, technical and HR.",
      resume: "Resume-building workshops plus reviewed drafts.",
      linkedin: "Profile optimisation session included in career services.",
      counselling: "Assigned career coach in most masters-style programmes.",
      duration: "Typically a defined months-long window after completion; get it in writing.",
    },
    feedback:
      "Search LinkedIn for the exact programme name filtered to the last 12 months, then check how many of those profiles hold GenAI-specific rather than generic analyst titles.",
  },
  {
    rank: 7,
    beginnerVerdict:
      "Academic structure and accountability suit beginners who need deadlines, but Python and statistics are integral rather than optional and the GenAI content trails the market.",
    beginnerStars: 3,
    prerequisites: "Graduate degree typically required; coding is expected from early modules.",
    rampUp: "Preparatory maths and Python bootcamp modules before the main curriculum in most tracks.",
    teaching: "University-style pacing: recorded lectures, live doubt sessions, graded assignments, term structure.",
    projects: ["4–6 academic-style projects", "Capstone with faculty or mentor review"],
    support: "Student success managers, teaching assistants and structured deadlines — strong accountability layer.",
    mentorship: "Industry mentor sessions in cohort format; 1-on-1 availability varies.",
    topics: t(["Python foundations", "ML basics", "Deep learning"], ["NLP", "Transformers", "LLMs", "Prompt engineering"]),
    industryReadiness:
      "Python, SQL, scikit-learn, TensorFlow or PyTorch, visualisation tools. Curriculum refresh cycles mean agents, RAG in production and fine-tuning are usually lighter than the market now expects.",
    placement: {
      model: "Career services",
      partners: "Named partner network published by the provider; verify which partners hire for GenAI roles specifically.",
      rate: "Provider-reported and often programme-wide rather than cohort-specific.",
      mocks: "Mock interviews and interview-preparation modules included.",
      resume: "Resume and portfolio review as part of career services.",
      linkedin: "Included in career-services content.",
      counselling: "Dedicated career counselling and alumni network access.",
      duration: "Defined post-completion window; confirm the length and eligibility rules.",
    },
    feedback:
      "The university credential is the verifiable part. Placement outcomes vary by cohort and city — ask for the last two cohorts' data rather than lifetime figures.",
  },
  {
    rank: 8,
    beginnerVerdict:
      "A long, guided, mentor-heavy journey that suits beginners who want hand-holding, with the same analytics-first caveat as other postgraduate-style programmes.",
    beginnerStars: 3,
    prerequisites: "Graduate degree typically; comfort with quantitative work expected.",
    rampUp: "Pre-work modules in maths, Python and statistics before the core curriculum.",
    teaching: "Weekly live mentor sessions on top of recorded content, with graded milestones.",
    projects: ["4–6 projects plus a mentored capstone", "Mostly predictive modelling; GenAI projects are fewer"],
    support: "Programme managers, mentor office hours, peer study groups and an alumni community.",
    mentorship: "Regular small-group mentor sessions — genuinely one of the stronger mentorship layers in this tier.",
    topics: t(["Python foundations", "ML basics", "Deep learning"], ["NLP", "LLMs", "Prompt engineering", "RAG"]),
    industryReadiness:
      "Python, SQL, scikit-learn, deep-learning frameworks and BI tooling; light on the LangChain-and-vector-store production stack.",
    placement: {
      model: "Career services",
      partners: "Provider-published partner list plus a large alumni referral pool.",
      rate: "Provider-reported; ask for cohort-level numbers and the definition used.",
      mocks: "Mock interviews and domain-specific preparation sessions.",
      resume: "Resume clinics and portfolio review.",
      linkedin: "Profile-building guidance included.",
      counselling: "Career-services team plus alumni mentoring.",
      duration: "Defined window post-completion; verify in writing.",
    },
    feedback:
      "Alumni volume is real and useful for referrals; that is a different benefit from a verified placement rate, and worth weighing on its own terms.",
  },
  {
    rank: 9,
    beginnerVerdict:
      "The most current GenAI content in the mid-tier, but built for people who are already comfortable in a notebook — a true beginner will struggle in week two.",
    beginnerStars: 2,
    prerequisites: "Python familiarity effectively assumed even where it is marketed as optional.",
    rampUp: "A short Python and ML refresher rather than a genuine from-zero foundation block.",
    teaching: "Practitioner-led live sessions with heavy implementation work and hackathons.",
    projects: ["4–6 implementation projects", "Typically a RAG pipeline, an agent and a fine-tuning exercise"],
    support: "Live doubt-resolution and very active communities — one of the strongest peer layers in Indian AI education.",
    mentorship: "Instructor and community mentorship; structured 1-on-1 access is limited.",
    topics: t(
      ["LLMs", "Prompt engineering", "RAG", "LangChain", "Vector databases", "AI agents", "Fine-tuning"],
      ["Python foundations", "ML basics", "Deep learning", "NLP", "Transformers", "GenAI deployment / MLOps"],
    ),
    industryReadiness:
      "The closest match to a 2026 GenAI job description in tooling terms: Hugging Face, LangChain, vector databases, evaluation and deployment basics.",
    placement: {
      model: "Job assistance",
      partners: "Job-assistance networks published per track; quality varies noticeably between tracks.",
      rate: "Provider-reported per track; verify at track level rather than brand level.",
      mocks: "Mock interviews included in the job-assistance add-on for most tracks.",
      resume: "Resume and profile support included in the assistance layer.",
      linkedin: "Included in some tracks only — confirm.",
      counselling: "Career-guidance sessions, generally group format.",
      duration: "Varies by track; ask for the written terms.",
    },
    feedback:
      "Hackathon leaderboards and public community projects are unusually verifiable evidence here — look at what learners actually shipped.",
  },
  {
    rank: 10,
    beginnerVerdict:
      "The most accessible entry in India, including genuine Hindi, Tamil and Telugu instruction — but placement support is minimal to non-existent and course currency is the real risk.",
    beginnerStars: 3,
    prerequisites: "None for the business-oriented courses; some Python-based ones assume more than they admit.",
    rampUp: "GUVI and PW Skills include foundational Python; Udemy and LinkedIn Learning offer no structured ramp at all.",
    teaching: "Self-paced video with quizzes; GUVI and PW Skills add light cohort structure and community.",
    projects: ["1–3 small guided exercises", "Rarely a portfolio-grade GenAI capstone"],
    support: "Community forums and, at GUVI and PW Skills, active learner groups. None on Udemy or LinkedIn Learning.",
    mentorship: "Occasional group sessions at the cohort providers; none on the marketplaces.",
    topics: t([], ["Python foundations", "ML basics", "LLMs", "Prompt engineering", "RAG"]),
    industryReadiness:
      "Basic API usage and prompting. Not enough tooling exposure to clear a GenAI technical screen on its own.",
    placement: {
      model: "None (self-serve)",
      partners: "Job-portal access at some providers rather than committed hiring partners.",
      rate: "Either not published or not verifiable at course level. Treat headline claims in this tier with the most scepticism.",
      mocks: "Rare; occasionally offered as a paid add-on.",
      resume: "Template downloads at best.",
      linkedin: "None.",
      counselling: "None.",
      duration: "Not applicable.",
    },
    feedback:
      "The verifiable benefit is language access and cost, and that is a real benefit. Certificates from this tier carry little weight with GCC and product-company recruiters.",
  },
];

export const beginnerByRank = new Map(beginnerDetails.map((d) => [d.rank, d]));
