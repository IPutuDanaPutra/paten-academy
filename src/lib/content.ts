// Single source of truth for confirmed Paten Academy copy.
// Used by both the page sections and the chat agent's system prompt,
// so the agent can never know more (or less) than what's on the page.

export const content = {
  hero: {
    headlineLines: [
      "Build Zero-to-One Your Product",
      "for Indonesian Hustlers and Solo Founders",
    ],
    subhead:
      "Go from idea to a launched MVP — using AI across the full process, not just for brainstorming.",
  },
  problem: {
    points: [
      {
        icon: "Lightbulb",
        text: "AI usage in Indonesia is still limited to brainstorming, not product building.",
      },
      {
        icon: "Code2",
        text: "Plenty of existing education platforms and communities exist for developers — very few for founders and hustlers.",
      },
      {
        icon: "TrendingUp",
        text: "There's a distinct rise in solo founders in Indonesia, without a program built for how they actually work.",
      },
    ],
    why: [
      {
        icon: "GraduationCap",
        text: "We provide lectures and hands-on activities, from idea generation to building an MVP.",
      },
      {
        icon: "Target",
        text: "We build the content from a founder-focused perspective.",
      },
      {
        icon: "Users",
        text: "Team of experts in entrepreneurship, experience design, and tech.",
      },
    ],
  },
  whoFor: {
    quote:
      "People who want to run their own business and own its strategic-commercial side, but lack the AI skills to execute a product.",
    chips: [
      "Age 25–40",
      "Unisex",
      "Region: Indonesia",
      "Middle class, bootstrapping — limited capital, can't yet hire professional employees or agencies",
      "Currently employed with a side business, or fully transitioned from employment",
    ],
  },
  learningObjective: {
    statement:
      "Independently build, launch, and validate an MVP using AI and no-code/low-code tools across the complete 0-to-1 product development lifecycle in 8 weeks.",
    pillars: [
      "End-to-End Product Lifecycle",
      "No-Code Independence",
      "8-Week Showcase",
    ],
  },
  learn: [
    {
      icon: "Brain",
      title: "AI Fundamentals",
      body: 'Understanding transformer engines and context windows, because "context is king" and guessing isn\'t enough.',
    },
    {
      icon: "Compass",
      title: "Tool Curation",
      body: "Cutting through social media noise to objectively evaluate the real pros, cons, and trade-offs of AI tools.",
    },
    {
      icon: "Terminal",
      title: "Applied Prompting",
      body: "Mastering practical operation and prompt engineering techniques to command models effectively.",
      highlight: true,
    },
    {
      icon: "Blocks",
      title: "No-Code / Low-Code Prototyping",
      body: "Empowering non-technical creators to turn ideas into functional MVPs and web applications rapidly, without traditional software development barriers.",
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      body: "Designing end-to-end automated pipelines for operational efficiency, freeing founders to focus on strategic growth and customer acquisition.",
    },
  ],
  // confirm: deck states 8 weeks in 3 places, but Phase 2/3 timeline math
  // still sums closer to 12 — recommend using the Curriculum Overview
  // table's clean Week 1-8 structure as the source of truth if this needs
  // resolving before launch.
  durationWeeks: 8,
  curriculum: [
    {
      week: 1,
      focus: "AI Fundamentals",
      format: "Lecture",
      deliverable: "A one-page explanation of how AI actually works",
    },
    {
      week: 2,
      focus: "AI Operation I",
      format: "Workshop",
      deliverable: "A shortlist of tools matched to need, plus a first working prompt set",
    },
    {
      week: 3,
      focus: "AI Operation II",
      format: "Workshop",
      deliverable: "A short demo of one AI tool operated end-to-end for the participant's need",
    },
    {
      week: 4,
      focus: "Ideation & Screening",
      format: "Lecture + Workshop",
      deliverable: "A one-page idea and target definition, screened through a design-thinking framework",
    },
    {
      week: 5,
      focus: "MVP Building I",
      format: "Workshop",
      deliverable: "A working MVP skeleton (live link)",
    },
    {
      week: 6,
      focus: "MVP Building II",
      format: "Project",
      deliverable: "An extended, functioning MVP build (live link)",
    },
    {
      week: 7,
      focus: "MVP Building III",
      format: "Project + Mentoring",
      deliverable: "A finished MVP (live link), ready for showcase and validation",
    },
    {
      week: 8,
      focus: "Automation & Ops",
      format: "Lecture + Workshop",
      deliverable: "A basic automation plan (CRM/email/payment)",
    },
  ],
  programStructure: [
    {
      phase: "Phase 1",
      title: "Onboarding",
      icon: "ClipboardList",
      items: [
        {
          label: "Call for Founders",
          body: "Marketing campaign and registration; candidates submit their profile and business idea.",
        },
        {
          label: "Selection & Kick-off",
          body: "Short interviews to select 20–30 committed solo founders, followed by an online kick-off and small-group formation (4–5 people per group).",
        },
      ],
    },
    {
      phase: "Phase 2",
      title: "The Sprint (Main Execution)",
      icon: "Rocket",
      items: [
        {
          label: "Weekly Masterclass",
          body: "Online, Saturday mornings 10:00–12:00. Centralized technical sessions (no-code, design, automation) with experts.",
        },
        {
          label: "Group Office Hours",
          body: "Online, Wednesday evenings 19:30–21:00. Small-group accountability sessions with a mentor.",
        },
        {
          label: "Extended Stretch",
          body: "1-on-1 mentoring and product iteration, fully focused on individual coaching and product refinement before launch.",
        },
      ],
    },
    {
      phase: "Phase 3",
      title: "Demo Day & Alumni",
      icon: "Trophy",
      items: [
        {
          label: "Demo Day",
          body: "Offline, full day. Each founder pitches for 3 minutes to an audience of speakers and successful founders.",
        },
        {
          label: "Post-Program",
          body: "Alumni join an exclusive community group (Discord/WhatsApp) for continued networking and resource-sharing.",
        },
      ],
    },
  ],
  pricing: {
    amountIDR: 1_000_000,
    unit: "per participant",
    includes: [
      "Weekly live masterclasses (8 weeks)",
      "Small-group office hours with a mentor",
      "Dedicated 1-on-1 mentoring during MVP build (Weeks 5–7)",
      "Demo Day: a 3-minute pitch slot in front of an audience/investors",
      "Post-program alumni community access",
    ],
  },
  faq: [
    {
      q: "Who is this program for?",
      a: "People who want to run their own business and own its strategic-commercial side, but lack the AI skills to execute a product.",
    },
    {
      q: "What will I learn?",
      a: "AI Fundamentals, Tool Curation, Applied Prompting, No-Code/Low-Code Prototyping, and Workflow Automation — five focus areas covering the full path from idea to a working, automated product.",
    },
    {
      q: "How long is the program?",
      a: "8 weeks. (One source table in the underlying planning deck still sums closer to 12 weeks — 8 weeks is the majority-stated and most internally consistent figure, but treat it as the working number pending final confirmation.)",
    },
    {
      q: "What do I walk away with?",
      a: "The ability to independently build, launch, and validate an MVP using AI and no-code/low-code tools across the complete 0-to-1 product lifecycle — plus a live MVP and a Demo Day pitch.",
    },
    {
      q: "How much does it cost?",
      a: "Rp 1,000,000 per participant.",
    },
    {
      q: "What happens week by week?",
      a: "See the curriculum table below.",
    },
    {
      q: "How many people get in?",
      a: "A small, selected cohort.",
    },
  ],
  team: [
    {
      name: "Abdul Rahman",
      role: "Tenaga Ahli Komdigi, Division Head Governance",
      bio: "15+ years of professional experience, including as Division Head of Risk Management & Governance at InJourney Aviation Services (BUMN). Certified QRMP, CGRCP, CJAT, QRMO.",
    },
    {
      name: "Emir Hartri Putra",
      role: "Director of People & Community, Impala Network Community",
      bio: null,
    },
    {
      // Role is listed in the source deck as the literal placeholder "XX
      // Manager" — not a real title, so it's omitted rather than guessed.
      name: "I Putu Dana Putra",
      role: null,
      bio: null,
    },
  ],
  // Verified against each organization's official site — see Part 7 §5.
  // Hetero Space (operated by Impala Network) and Balai Diklat Industri
  // (operates under Kemenperin) are NOT separate logo slots — one entry
  // each for their parent org. Nomads Giving Back / Nomads Skillshare are
  // sister orgs (nomadsskillshare.com now redirects fully into
  // nomadsgivingback.com); only an icon-only mark was found on the live
  // site for either — no distinct wordmark asset was publicly available
  // to source, so both reuse that icon mark rather than fabricating one.
  // "AIBI Incubator Network" (from the Acquisition Plan slide) and a
  // possible separate "Ministry of Comms & Digital" entry are NOT added
  // here — neither was independently verifiable this session (see Part
  // 13 §1.7), so they're left out rather than guessed at.
  communities: [
    { name: "Garuda Spark", logo: "/logos/garuda-spark.svg" },
    { name: "Impala Network", logo: "/logos/impala-network.png" },
    { name: "UXID (UX Indonesia)", logo: "/logos/uxid.png" },
    { name: "Kemenperin", logo: "/logos/kemenperin.svg" },
    { name: "Nomads Giving Back", logo: "/logos/nomads-giving-back.png" },
    { name: "Nomads Skillshare", logo: "/logos/nomads-giving-back.png" },
    { name: "Service Design Indonesia", logo: "/logos/servicedesign-id.png" },
    { name: "Generation Girl", logo: "/logos/generation-girl.png" },
  ],
  becomePartner: {
    headline: "Interested in becoming a partner?",
    body: "Paten Academy works with communities, institutions, and platforms that share a stake in Indonesia's founder ecosystem — from co-hosting sessions to offering participant perks.",
    cta: "Get in Touch",
  },
} as const;

// Things that are explicitly NOT decided yet. The chat agent must refuse
// on these rather than guess, same discipline as the static page.
export const openItems = [
  "team bios or facilitator/mentor names beyond Abdul Rahman and Emir Hartri Putra's title",
  "I Putu Dana Putra's role or title (the source deck lists a literal placeholder, not a real title)",
  "a finished tagline or brand equation",
  "the abandoned Traditional Culture Planner content",
  "the internal financial/pricing model (margins, breakeven, projected profit) — only the public ticket price is shareable",
  "AIBI Incubator Network or a separate Ministry of Comms & Digital partnership — mentioned in planning materials but not independently verified",
  "a specific partner-inquiry contact email or form — none has been set up yet",
];

export const REFUSAL_LINE =
  "That part hasn't been finalized yet — apply and you'll be the first to know once it's confirmed.";
