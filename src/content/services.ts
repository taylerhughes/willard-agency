export interface SubService {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface FeaturedProject {
  year: string;
  client: string;
  title: string;
  tags: string[];
  gradient: string;
  href: string;
  image?: string;
  video?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  headline: string;
  description: string;
  capabilities: string[];
  /** Optional icon shown next to the label in the intro section. */
  labelIcon?: string;
  /** Optional longer intro copy shown below the hero. */
  introCopy?: string[];
  /** Optional highlight headline for the capabilities section below the intro. */
  highlightHeadline?: string;
  /** Optional highlight CTA button label + href. */
  highlightCta?: { label: string; href: string };
  /** Optional highlight capabilities list (shown as a checklist on the right). */
  highlightCapabilities?: string[];
  /** Optional feature section with image + benefits checklist. */
  featureSection?: {
    image: string;
    label: string;
    headline: string;
    description: string;
    benefits: string[];
    cta: { label: string; href: string };
  };
  featuredWork: FeaturedProject[];
  valueHeadline: string;
  valueCopy: string;
  trustSignals: string[];
  teamHeadline: string;
  teamCopy: string;
  teamSignals: string[];
  subServicesLabel: string;
  subServicesHeadline: string;
  subServices: SubService[];
  faqs: ServiceFAQ[];
}

// ---------------------------------------------------------------------------
// CONSOLIDATED STARTUP-FOCUSED CAPABILITIES
// ---------------------------------------------------------------------------
// Willard is an equity-aligned design studio. We collapsed the old 15+
// services into four capabilities that map to the founder journey from
// day zero to first round / first revenue.

export const productDesign: ServiceData = {
  slug: "product-design",
  title: "Product Design",
  metaTitle: "Product Design for Early-Stage Startups | Willard",
  metaDescription:
    "Willard embeds as your fractional Head of Product Design — shipping the user-facing product your startup needs to raise or earn revenue.",
  label: "Product Design",
  headline: "Design the product founders can ship on Monday.",
  description:
    "We work as your fractional product design lead — turning your idea into a real, usable product that investors and users can interact with, not just read about.",
  introCopy: [
    "Early-stage startups don't need a deck of mockups. They need a product that works in the browser (or the App Store) by the time the next investor call lands.",
    "We embed alongside your engineers as the fractional design partner — running research, shaping flows, designing screens, and pair-designing in the codebase until something ships.",
  ],
  highlightHeadline:
    "A senior product designer embedded in your team for 3–12 months.",
  highlightCta: { label: "Pitch us", href: "/contact" },
  highlightCapabilities: [
    "UX research & interviews",
    "User flows & wireframes",
    "UI systems & component libraries",
    "Interactive prototypes",
    "Usability testing",
    "Design-engineering pairing",
  ],
  capabilities: [
    "UX research & interviews",
    "User flows & wireframes",
    "UI systems & component libraries",
    "Interactive prototypes",
    "Usability testing",
    "Design-engineering pairing",
  ],
  featuredWork: [],
  valueHeadline: "Design that actually ships.",
  valueCopy:
    "Most early-stage teams have more ideas than hands. We're an extra pair of senior hands — not a deck factory. Every sprint closes with something merged, not a new round of revisions.",
  trustSignals: [
    "Senior-only team",
    "Paid for in equity",
    "Ships in your codebase, not Figma",
  ],
  teamHeadline: "A fractional Head of Design you can actually afford.",
  teamCopy:
    "You get a senior design partner embedded in your team for 3–12 months — less than the cost of a full-time hire, more commitment than a contractor. We sit in your Slack, your standups, and your PR reviews.",
  teamSignals: [
    "Fractional, not freelance",
    "Embedded in your stack",
    "Senior decision-maker",
  ],
  subServicesLabel: "What we ship",
  subServicesHeadline: "From first flow to first launch.",
  subServices: [
    {
      title: "Discovery & research",
      description:
        "User interviews, competitive teardowns, and the occasional founder therapy session.",
    },
    {
      title: "Flows & wireframes",
      description:
        "Mapping the product so every screen earns its place before we touch pixels.",
    },
    {
      title: "UI system",
      description:
        "Lightweight component libraries your engineers can actually use in production.",
    },
    {
      title: "Prototypes",
      description:
        "Clickable, testable prototypes for investor demos and user sessions.",
    },
    {
      title: "Usability testing",
      description:
        "Real people pushing buttons — so you don't ship assumptions.",
    },
    {
      title: "Design-engineering pairing",
      description:
        "We pair with your devs in the codebase to ship features, not handoffs.",
    },
  ],
  faqs: [
    {
      question: "Do you build with our engineering team or replace it?",
      answer:
        "We work alongside your engineers. If you don't have any yet, we'll help you figure out whether to hire, contract, or use a template.",
    },
    {
      question: "How much equity do you take?",
      answer:
        "Depends on stage and scope — enough to be aligned, not enough to distort your cap table. We discuss this in the first call.",
    },
    {
      question: "Can you start before we've raised?",
      answer:
        "Yes. The whole model is built for pre-raise teams. The retainer activates when you raise or start generating meaningful revenue.",
    },
  ],
};

export const brandAndPositioning: ServiceData = {
  slug: "brand-and-positioning",
  title: "Brand & Positioning",
  metaTitle: "Brand & Positioning for Startups | Willard",
  metaDescription:
    "A brand system that makes your startup sound like a real company — narrative, identity, and a website that closes the deal.",
  label: "Brand & Positioning",
  headline: "A brand that sounds like a company, not a side project.",
  description:
    "Narrative, naming, visual identity, and a first-version website that lets you walk into investor meetings and customer calls sounding like you mean it.",
  introCopy: [
    "Pre-seed founders get asked the same question a hundred times: what are you building, and why? We turn the answer into a repeatable narrative, a visual system, and the assets that carry it.",
    "We're not precious about identity exercises that last six months. We ship a working brand in weeks — something you can hand to a journalist, an investor, or your first hire tomorrow.",
  ],
  highlightHeadline:
    "Narrative, identity, and a v1 website that punches above its weight.",
  highlightCta: { label: "Pitch us", href: "/contact" },
  highlightCapabilities: [
    "Positioning & narrative",
    "Naming",
    "Visual identity",
    "Brand guidelines",
    "V1 marketing website",
    "Founder voice",
  ],
  capabilities: [
    "Positioning & narrative",
    "Naming",
    "Visual identity",
    "Brand guidelines",
    "V1 marketing website",
    "Founder voice",
  ],
  featuredWork: [],
  valueHeadline: "Brand as a fundraising tool.",
  valueCopy:
    "A clear brand and narrative compound at every touchpoint — the deck, the landing page, the LinkedIn post, the demo. We build the system once, then you use it everywhere.",
  trustSignals: [
    "Ships in weeks, not quarters",
    "Founder-led, not committee-led",
    "Usable by whoever writes the next tweet",
  ],
  teamHeadline: "Senior brand thinking, embedded in your team.",
  teamCopy:
    "We work as your fractional brand lead for 3–6 months — running positioning workshops, shaping the narrative, and handing off a working system your team can extend.",
  teamSignals: [
    "Positioning workshops",
    "Writing that sounds like you",
    "Guidelines your team will actually use",
  ],
  subServicesLabel: "What we ship",
  subServicesHeadline: "Brand, built for velocity.",
  subServices: [
    {
      title: "Positioning & narrative",
      description:
        "A clear statement of what you do and why — one that survives contact with investors.",
    },
    {
      title: "Naming",
      description:
        "Names that trademark, explain themselves, and don't embarrass you in six months.",
    },
    {
      title: "Visual identity",
      description:
        "Logo, typography, colour, and the little bits that make it feel like a real company.",
    },
    {
      title: "Brand guidelines",
      description:
        "A lightweight reference your team can extend without needing us back.",
    },
    {
      title: "V1 marketing website",
      description:
        "A one-pager or small site that converts — not a 40-page monument.",
    },
    {
      title: "Founder voice",
      description:
        "How you write, tweet, and talk — so your brand carries past the homepage.",
    },
  ],
  faqs: [
    {
      question: "How long does a brand engagement take?",
      answer:
        "Typically 6–12 weeks for the core system. We ship in weeks, not quarters.",
    },
    {
      question: "Do you do the website too?",
      answer:
        "Yes — a v1 marketing site is usually part of the engagement. For larger product surfaces, pair it with Product Design.",
    },
    {
      question: "Will we need a naming sprint?",
      answer:
        "Only if you want one. Many founders come with a working name; we'll tell you if it's worth changing.",
    },
  ],
};

export const launchAndGtm: ServiceData = {
  slug: "launch-and-gtm",
  title: "Launch & GTM",
  metaTitle: "Startup Launch & GTM Design | Willard",
  metaDescription:
    "Launch pages, lifecycle emails, and GTM assets that help founders actually get noticed by the right people.",
  label: "Launch & GTM",
  headline: "Ship it so the right people actually notice.",
  description:
    "Landing pages, lifecycle, launch assets, and founder content — designed so your launch isn't just a tweet and a shrug.",
  introCopy: [
    "Shipping a product is half the work. The other half is making sure the right people see it and remember it.",
    "We design the full launch surface — landing pages that convert, onboarding emails that re-engage, Product Hunt kits, demo videos, and founder content systems that outlast launch week.",
  ],
  highlightHeadline:
    "A launch surface that keeps working after launch week.",
  highlightCta: { label: "Pitch us", href: "/contact" },
  highlightCapabilities: [
    "Landing pages",
    "Lifecycle email",
    "Launch campaign assets",
    "Product Hunt kits",
    "Demo videos & screencasts",
    "Founder content systems",
  ],
  capabilities: [
    "Landing pages",
    "Lifecycle email",
    "Launch campaign assets",
    "Product Hunt kits",
    "Demo videos & screencasts",
    "Founder content systems",
  ],
  featuredWork: [],
  valueHeadline: "Design the distribution, not just the product.",
  valueCopy:
    "Product-market fit is half product, half distribution. We treat the marketing surface as part of the product — instrumented, iterable, and built to learn.",
  trustSignals: [
    "Conversion-aware design",
    "Built for A/B iteration",
    "Assets that live past launch day",
  ],
  teamHeadline: "A launch partner who's been through it.",
  teamCopy:
    "We've shipped launches across consumer, B2B, and hardware. We know what moves and what's theatre — and we'll tell you which of your launch ideas is which.",
  teamSignals: [
    "Launch veterans",
    "Opinionated on what matters",
    "Copy, design, and production under one roof",
  ],
  subServicesLabel: "What we ship",
  subServicesHeadline: "Everything you need on launch day.",
  subServices: [
    {
      title: "Landing pages",
      description:
        "Conversion-focused pages for waitlist, signup, or beta access.",
    },
    {
      title: "Lifecycle email",
      description:
        "Onboarding, activation, and re-engagement sequences that actually land.",
    },
    {
      title: "Launch campaign assets",
      description:
        "Announcement graphics, social kits, and press kits — all on-brand.",
    },
    {
      title: "Product Hunt kits",
      description:
        "Thumbnails, gallery images, and the pitch copy that wins the day.",
    },
    {
      title: "Demo videos",
      description:
        "Short, crisp product demos for the homepage, investors, and Twitter.",
    },
    {
      title: "Founder content systems",
      description:
        "Templates so you can keep posting, shipping, and announcing without our help.",
    },
  ],
  faqs: [
    {
      question: "Do you run paid ads or SEO?",
      answer:
        "No — we design the assets. For media buying and SEO execution, we'll refer you to specialists we trust.",
    },
    {
      question: "How quickly can you turn around a launch page?",
      answer:
        "A tight, conversion-focused page typically takes 1–2 weeks from kickoff.",
    },
    {
      question: "Can you help us post on Product Hunt?",
      answer:
        "Yes — we've launched on PH a bunch of times and can help you plan the day and the assets.",
    },
  ],
};

export const fundraisingMaterials: ServiceData = {
  slug: "fundraising-materials",
  title: "Fundraising-Ready",
  metaTitle: "Pitch Deck & Fundraising Design | Willard",
  metaDescription:
    "Pitch decks, investor memos, and data rooms designed to compound conviction — not test investor patience.",
  label: "Fundraising-Ready",
  headline: "Pitch decks and data rooms that compound conviction.",
  description:
    "We design the artefacts investors actually read — and the ones your team keeps using after the round closes.",
  introCopy: [
    "The deck is the easy part. The harder part is the follow-up memo, the data room, the founder update, and the demo video — the full package investors share internally when you're not in the room.",
    "We design the whole fundraising surface so your narrative holds up at every touchpoint, not just on stage.",
  ],
  highlightHeadline:
    "A fundraising surface that keeps selling when you're not in the room.",
  highlightCta: { label: "Pitch us", href: "/contact" },
  highlightCapabilities: [
    "Pitch decks",
    "Investor memos",
    "Demo videos",
    "Data-room design",
    "Founder update templates",
    "One-page teasers",
  ],
  capabilities: [
    "Pitch decks",
    "Investor memos",
    "Demo videos",
    "Data-room design",
    "Founder update templates",
    "One-page teasers",
  ],
  featuredWork: [],
  valueHeadline: "Design that earns the second meeting.",
  valueCopy:
    "Investors see hundreds of decks. We design yours so it survives the forward-to-a-partner, the skim-on-a-phone, and the follow-up diligence call.",
  trustSignals: [
    "Design that holds up on mobile",
    "Copy that compounds your narrative",
    "Artefacts your team keeps using",
  ],
  teamHeadline: "A partner who's read a lot of decks.",
  teamCopy:
    "We've designed decks that have raised at pre-seed, seed, and Series A. We know what investors notice — and what you can safely cut.",
  teamSignals: [
    "Pre-seed → Series A experience",
    "Narrative-first design",
    "Fast turnarounds",
  ],
  subServicesLabel: "What we ship",
  subServicesHeadline: "The whole fundraising surface.",
  subServices: [
    {
      title: "Pitch deck",
      description:
        "A 10–15 slide deck that investors actually get to the end of.",
    },
    {
      title: "Investor memo",
      description:
        "The longer-form narrative partners read before a first meeting.",
    },
    {
      title: "Demo video",
      description:
        "A crisp 60–90 second video of the product for cold outreach and socials.",
    },
    {
      title: "Data room",
      description:
        "Legible financials, metrics, and org docs — designed, not just uploaded.",
    },
    {
      title: "Founder update template",
      description:
        "A monthly/quarterly investor update system so you don't reinvent the wheel.",
    },
    {
      title: "One-page teaser",
      description:
        "The cold-intro asset warm introducers send on your behalf.",
    },
  ],
  faqs: [
    {
      question: "Can you help with the narrative, not just the design?",
      answer:
        "Yes — narrative work is usually the first third of a deck engagement.",
    },
    {
      question: "How long does a deck take?",
      answer:
        "Typically 2–4 weeks from first call to final file, depending on how many iterations and interviews we run.",
    },
    {
      question: "Do you coach us on the pitch itself?",
      answer:
        "We'll do dry runs and give feedback. For formal pitch coaching, we'll refer you to specialists.",
    },
  ],
};

// ---------------------------------------------------------------------------
// LOOKUP MAP
// ---------------------------------------------------------------------------

export const ALL_SERVICES: Record<string, ServiceData> = {
  "product-design": productDesign,
  "brand-and-positioning": brandAndPositioning,
  "launch-and-gtm": launchAndGtm,
  "fundraising-materials": fundraisingMaterials,
};
