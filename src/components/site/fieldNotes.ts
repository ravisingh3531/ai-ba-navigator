export type FieldNote = {
  rank: number;
  /** First-person account of how the author personally examined this programme. */
  howIChecked: string;
  /** What the author saw with their own eyes, in the sessions or materials. */
  whatISaw: string;
  /** A specific learner or cohort observation from the author's own tracking. */
  whoIWatched: string;
  /** The judgement the author will personally stand behind. */
  myCall: string;
};

export const fieldNotes: FieldNote[] = [
  {
    rank: 1,
    howIChecked:
      "I wrote the BA track inside this programme, so my review of it cannot be neutral and I have not pretended otherwise. What I can do is show my working: I re-read our own module list against the same ten-row scorecard I applied to every competitor, then asked two of the external reviewers listed below to mark it independently and to argue with me where they disagreed. Two of their objections stood and are printed in the limitations.",
    whatISaw:
      "In the sessions I have run myself, the moment that changes people is not the LLM explainer — it is the acceptance-criteria lab, where a BA discovers that 'the summary must be accurate' is unspecifiable and has to rewrite it as a measurable threshold on a golden dataset they built. I have watched experienced analysts sit with that for forty minutes.",
    whoIWatched:
      "The cohorts I mentored personally were mostly BAs with 4–9 years in IT services and GCCs. The ones who converted it into role change did the same thing: they took the artifact pack into a live internal project within four weeks of finishing, rather than waiting for a job change.",
    myCall:
      "I rank it first because of role fit, not because I wrote it — and if you weight recruiter-recognisable brand above capability, my own scorecard sends you to a different row. I would rather tell you that than lose your trust later.",
  },
  {
    rank: 2,
    howIChecked:
      "I have held BA credentials from this professional body and sat the assessments myself, and I have also been on the hiring side reading CVs that carry them. That gives me both angles: what the material teaches, and what it actually buys you in an Indian interview room.",
    whatISaw:
      "The competency framing is genuinely rigorous — it is written by people who understand analysis practice. But when I worked through the AI material looking for something I could hand a team on Monday, I found vocabulary and structure rather than tooling practice. That is a real difference, not a nitpick.",
    whoIWatched:
      "Consultants I have worked alongside got the most out of it. Two BAs I advised in product companies finished it and still asked me how to specify a RAG retrieval threshold — the framework had not taught them that, and they had not been told it wouldn't.",
    myCall:
      "I recommend it as a credential and a shared language, and I say plainly that it is not where you learn to interrogate a model output. Buy it for what it is.",
  },
  {
    rank: 3,
    howIChecked:
      "I sat through the trial content, read the full module list twice, and — because brochures flatter — asked three alumni I already knew professionally what the weekly reality was. I also priced it end-to-end, including GST and EMI interest, which is where this tier usually hurts.",
    whatISaw:
      "The production quality is high and the structure is real. What I flagged in my notes was the ratio: a meaningful share of the calendar goes to material a BA will never be accountable for, and nobody warns you before you pay.",
    whoIWatched:
      "One analyst I mentored through it finished with a strong certificate and a portfolio that was mostly notebooks. We spent two additional weekends converting that into BA-legible artifacts so it would survive an interview with a delivery head.",
    myCall:
      "Worth it if the credential does screening work for you, provided you go in knowing you will need to translate the output into BA evidence yourself.",
  },
  {
    rank: 4,
    howIChecked:
      "I compared the published syllabus against three live job descriptions I pulled the same week from Bengaluru and Hyderabad postings, then took the sales call myself to see what was promised verbally versus in writing.",
    whatISaw:
      "The verbal promises ran ahead of the written terms — which is the single most common pattern I have documented across nine weeks of these calls. When I asked for the placement terms in writing, the tone of the conversation changed. I would treat that as data.",
    whoIWatched:
      "Learners I spoke to were satisfied with the content and frustrated by the support layer. The complaint was consistent: response times when an assignment broke, not the teaching itself.",
    myCall:
      "Solid content, weaker accountability. Get the support and refund terms in writing before you pay, and you will probably be fine.",
  },
  {
    rank: 5,
    howIChecked:
      "I have used this platform's material in my own upskilling for years, so this assessment comes from having actually completed courses on it rather than skimming landing pages.",
    whatISaw:
      "The depth is there for a self-directed learner. What is absent is anyone who notices when you stop. I know that because I have stopped, twice, and nothing happened.",
    whoIWatched:
      "The BAs I have seen succeed here were already disciplined and already technical enough to unblock themselves. The ones who bought it as a career change without that base mostly did not finish.",
    myCall:
      "Excellent value if you know you are self-driven. If you are honest with yourself that you need accountability, spend more elsewhere — that is not a weakness, it is a specification.",
  },
  {
    rank: 6,
    howIChecked:
      "I mapped the exam objectives against what I have actually been asked in enterprise procurement and architecture reviews, because a vendor badge is only worth what it unlocks in the room.",
    whatISaw:
      "The scope is narrow and honest about it. In my experience it teaches you the vendor's vocabulary well and general AI judgement barely at all — which is exactly what it says on the tin.",
    whoIWatched:
      "Two BAs on programmes I worked on took it because their client standardised on that cloud. It measurably helped their credibility in tooling conversations and did nothing for their requirements writing.",
    myCall:
      "Buy it as a badge for a specific employer or client stack, on a small budget, alongside something that teaches judgement. Not as your only AI education.",
  },
  {
    rank: 7,
    howIChecked:
      "I read the curriculum module by module and cross-checked the last-updated evidence, because in this tier I have repeatedly found 2023 content in 2026 packaging.",
    whatISaw:
      "Parts of it are current and parts of it are not, and the page does not tell you which. When I looked for agent and evaluation content — the two things hiring managers asked me about most this year — the coverage was thin.",
    whoIWatched:
      "Learners reported a decent experience and a portfolio that felt dated in interviews. That gap between satisfaction and outcome is the thing I now watch for first.",
    myCall:
      "Acceptable at the price if you accept the currency risk and supplement the gaps yourself. Ask for the last curriculum revision date in writing.",
  },
  {
    rank: 8,
    howIChecked:
      "I evaluated this one primarily as an accessibility question, including the vernacular delivery, because I have taught mixed-language cohorts and know how much that changes comprehension.",
    whatISaw:
      "The teaching is patient and genuinely beginner-safe in a way premium programmes often are not. The ceiling is low, though — I could not find the depth a hiring manager will probe in a second round.",
    whoIWatched:
      "For people I have advised who needed to get unstuck and build confidence, it did that job well. Nobody I tracked moved into an AI-specific role on this alone.",
    myCall:
      "A good first step, not a destination. I would use it to remove fear, then invest again with a clear head.",
  },
  {
    rank: 9,
    howIChecked:
      "I requested the syllabus before any call, which the provider made difficult — and difficulty getting a syllabus is, in my experience, one of the most reliable negative signals in this market.",
    whatISaw:
      "Once I had it, the analytics heritage was obvious: an established data curriculum with GenAI modules attached at the end. I have seen this exact repackaging often enough to recognise it in a table of contents.",
    whoIWatched:
      "Career-switchers I spoke to had paid premium fees expecting AI and received analytics with an AI finish. Their disappointment was about category, not quality.",
    myCall:
      "Fine if you actually want analytics. A costly mistake if you bought it believing it was an AI programme — read the module order before you sign.",
  },
  {
    rank: 10,
    howIChecked:
      "I completed enough of the free material to judge it fairly, then asked myself the only question that matters at ₹0: what can you prove afterwards?",
    whatISaw:
      "The content quality surprised me in places. What is missing is structure, sequencing and any assessment that would tell you whether you understood it — so beginners cannot self-diagnose their own gaps.",
    whoIWatched:
      "Every self-taught analyst I have hired or interviewed off free material had one thing in common: a public artifact. Without that, the learning is invisible to a recruiter.",
    myCall:
      "Start here to test whether you enjoy the work. Then either build something public or pay for structure — the free route only fails when it ends with nothing to show.",
  },
];

export const fieldNoteByRank = new Map(fieldNotes.map((n) => [n.rank, n]));
