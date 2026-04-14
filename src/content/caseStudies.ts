export type ContentBlock =
  | { type: "text"; label: string; heading: string; body: string }
  | { type: "fullImage"; gradient: string; image?: string }
  | { type: "paddedImage"; gradient: string; image?: string }
  | { type: "twoImages"; gradient1: string; gradient2: string; image1?: string; image2?: string };

export interface CaseStudyData {
  slug: string;
  client: string;
  year: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  headline: string;
  heroGradient: string;
  heroImage?: string;
  subHeadline: string;
  description: string;
  industry: string;
  duration: string;
  contentBlocks: ContentBlock[];
}

const meridian: CaseStudyData = {
  slug: "meridian",
  client: "Meridian",
  year: "2024",
  tags: ["Branding", "Website", "SEO"],
  metaTitle: "Meridian | Willard",
  metaDescription:
    "A full rebrand and website overhaul for Meridian, a logistics company looking to modernize its digital presence and improve organic search visibility.",
  headline: "Refreshing a global brand's digital presence",
  heroGradient: "from-gray-500 to-gray-400",
  subHeadline: "A unified identity built for scale",
  description:
    "Meridian needed a cohesive brand identity that could work across dozens of regional markets. We developed a flexible design system, rebuilt their website from the ground up, and implemented a technical SEO strategy that drove a 40% increase in organic traffic within three months.",
  industry: "Logistics & Supply Chain",
  duration: "12 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-500 to-gray-400" },
    {
      type: "text",
      label: "Strategy",
      heading: "Mapping the competitive landscape",
      body: "We began with a deep audit of Meridian's existing brand assets and competitor positioning. The findings revealed an opportunity to own a more confident, forward-looking visual language that set them apart in an industry dominated by conservative blue-and-white palettes.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-400 to-gray-300",
      gradient2: "from-gray-600 to-gray-500",
    },
    {
      type: "text",
      label: "Design",
      heading: "A system that flexes without breaking",
      body: "The new identity centers on a dynamic wordmark paired with a modular grid system. Every element was designed to adapt gracefully from mobile screens to trade-show banners, ensuring brand consistency without sacrificing local relevance.",
    },
    { type: "paddedImage", gradient: "from-gray-600 to-gray-400" },
    {
      type: "text",
      label: "Development",
      heading: "Performance at the core",
      body: "We rebuilt the site on a modern stack optimized for speed and crawlability. Structured data, lazy-loaded media, and server-side rendering combined to push Core Web Vitals into the green across every page template.",
    },
    { type: "fullImage", gradient: "from-gray-500 to-gray-300" },
  ],
};

const northfield: CaseStudyData = {
  slug: "northfield",
  client: "Northfield",
  year: "2024",
  tags: ["Shopify", "Website"],
  metaTitle: "Northfield | Willard",
  metaDescription:
    "We designed and developed a premium Shopify storefront for Northfield, an outdoor apparel brand expanding into direct-to-consumer sales.",
  headline: "Building a storefront that matches the product",
  heroGradient: "from-primary-700 to-primary-500",
  subHeadline: "Premium commerce for the modern outdoors",
  description:
    "Northfield had built a loyal wholesale following but lacked a direct-to-consumer channel that reflected the quality of their gear. We designed and built a Shopify store that combines editorial storytelling with a seamless purchase experience, resulting in a 25% lift in average order value.",
  industry: "Outdoor Apparel",
  duration: "10 Weeks",
  contentBlocks: [
    { type: "paddedImage", gradient: "from-primary-700 to-primary-500" },
    {
      type: "text",
      label: "Discovery",
      heading: "Understanding the customer journey",
      body: "Through interviews with existing customers and analysis of wholesale partner feedback, we identified key moments where the brand story could deepen engagement and drive conversion throughout the shopping experience.",
    },
    { type: "fullImage", gradient: "from-primary-600 to-primary-400" },
    {
      type: "text",
      label: "Design",
      heading: "Editorial meets commerce",
      body: "Product pages blend rich lifestyle photography with detailed spec breakdowns, giving shoppers the confidence to buy technical gear online. A modular content system lets the Northfield team publish seasonal lookbooks without developer support.",
    },
    {
      type: "twoImages",
      gradient1: "from-primary-700 to-primary-600",
      gradient2: "from-primary-500 to-primary-400",
    },
    {
      type: "text",
      label: "Development",
      heading: "Optimized for conversion",
      body: "Custom Shopify sections, an intelligent upsell engine, and streamlined checkout reduced cart abandonment by 18%. The entire storefront loads in under two seconds on mobile networks.",
    },
    { type: "paddedImage", gradient: "from-primary-800 to-primary-500" },
  ],
};

const atelier: CaseStudyData = {
  slug: "atelier",
  client: "Atelier Studios",
  year: "2023",
  tags: ["Website", "SEO"],
  metaTitle: "Atelier Studios | Willard",
  metaDescription:
    "A refined website and SEO strategy for Atelier Studios, an architecture firm seeking to attract high-value residential clients through organic search.",
  headline: "Designing a digital home for architectural excellence",
  heroGradient: "from-gray-400 to-gray-300",
  subHeadline: "Where craft meets discoverability",
  description:
    "Atelier Studios produces award-winning residential architecture but their website failed to convey the caliber of their work. We created a portfolio-driven site that lets the projects speak for themselves, backed by an SEO strategy targeting high-intent local searches.",
  industry: "Architecture & Design",
  duration: "8 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-400 to-gray-300" },
    {
      type: "text",
      label: "Research",
      heading: "Finding the right audience",
      body: "Keyword research revealed that prospective homeowners searching for luxury renovations rarely found Atelier despite their reputation. We mapped a content strategy around high-value search terms tied to specific project types and neighborhoods.",
    },
    { type: "paddedImage", gradient: "from-gray-500 to-gray-300" },
    {
      type: "text",
      label: "Design",
      heading: "Letting the work breathe",
      body: "The new site uses generous whitespace and full-bleed photography to showcase each project at its best. Navigation is minimal and purposeful, guiding visitors from inspiration to inquiry with as few clicks as possible.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-400 to-gray-200",
      gradient2: "from-gray-500 to-gray-400",
    },
    {
      type: "text",
      label: "SEO",
      heading: "Structured for search engines",
      body: "Each project page is optimized with structured data, location-specific metadata, and internal linking patterns that help search engines understand the depth and relevance of Atelier's portfolio.",
    },
    { type: "fullImage", gradient: "from-gray-300 to-gray-200" },
  ],
};

const volta: CaseStudyData = {
  slug: "volta",
  client: "Volta Group",
  year: "2024",
  tags: ["Website"],
  metaTitle: "Volta Group | Willard",
  metaDescription:
    "A high-performance corporate website for Volta Group, a renewable energy investment firm communicating complex offerings to institutional partners.",
  headline: "Translating complex energy solutions into clarity",
  heroGradient: "from-gray-600 to-gray-500",
  subHeadline: "Precision communication for institutional audiences",
  description:
    "Volta Group operates at the intersection of renewable energy and institutional finance. Their previous website buried critical information behind jargon-heavy pages. We restructured the information architecture and designed a site that communicates sophistication without sacrificing accessibility.",
  industry: "Renewable Energy & Finance",
  duration: "10 Weeks",
  contentBlocks: [
    { type: "paddedImage", gradient: "from-gray-600 to-gray-500" },
    {
      type: "text",
      label: "Information Architecture",
      heading: "Untangling the message",
      body: "Stakeholder interviews revealed that different audiences needed different entry points into the same content. We designed a navigation model that serves institutional investors, project partners, and media with distinct but interconnected pathways.",
    },
    { type: "fullImage", gradient: "from-gray-700 to-gray-500" },
    {
      type: "text",
      label: "Visual Design",
      heading: "Authority through restraint",
      body: "A monochromatic palette anchored by precise typography gives the site a sense of gravitas appropriate for the sector. Data visualizations translate portfolio performance into intuitive, scannable graphics.",
    },
    { type: "paddedImage", gradient: "from-gray-500 to-gray-400" },
    {
      type: "text",
      label: "Development",
      heading: "Built for compliance and speed",
      body: "The site meets WCAG AA accessibility standards and loads critical content within one second. A headless CMS gives the communications team full control over disclosures and regulatory updates.",
    },
  ],
};

const peak: CaseStudyData = {
  slug: "peak",
  client: "Peak Performance",
  year: "2023",
  tags: ["Branding", "Shopify"],
  metaTitle: "Peak Performance | Willard",
  metaDescription:
    "A brand identity and Shopify store for Peak Performance, a fitness supplement company entering a crowded direct-to-consumer market.",
  headline: "Standing out in a saturated market",
  heroGradient: "from-gray-500 to-gray-600",
  subHeadline: "Brand-led commerce that converts",
  description:
    "Peak Performance had a strong product line but a generic brand that blended into a sea of competitors. We developed a distinctive visual identity and built a Shopify store designed to educate customers and drive subscription sign-ups.",
  industry: "Health & Wellness",
  duration: "12 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-500 to-gray-600" },
    {
      type: "text",
      label: "Brand Strategy",
      heading: "Defining what makes them different",
      body: "Competitive analysis showed that most supplement brands lean on aggressive, hyper-masculine aesthetics. We positioned Peak Performance around scientific rigor and clean design, appealing to a broader health-conscious audience.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-600 to-gray-700",
      gradient2: "from-gray-400 to-gray-500",
    },
    {
      type: "text",
      label: "Identity",
      heading: "Clean lines, bold presence",
      body: "The visual system pairs a geometric sans-serif with a warm neutral palette that feels clinical without being cold. Packaging design carries the same principles, creating shelf presence that stops browsers in their tracks.",
    },
    { type: "paddedImage", gradient: "from-gray-600 to-gray-500" },
    {
      type: "text",
      label: "Commerce",
      heading: "Subscription-first architecture",
      body: "The Shopify store foregrounds subscribe-and-save options with transparent pricing and flexible delivery schedules. Ingredient deep-dives and third-party testing results build trust before the customer ever reaches checkout.",
    },
    { type: "fullImage", gradient: "from-gray-500 to-gray-700" },
  ],
};

const verde: CaseStudyData = {
  slug: "verde",
  client: "Verde Collective",
  year: "2024",
  tags: ["Branding", "Website", "Shopify"],
  metaTitle: "Verde Collective | Willard",
  metaDescription:
    "End-to-end branding, website, and Shopify build for Verde Collective, a sustainable home goods company launching its first online store.",
  headline: "Launching a sustainable brand from scratch",
  heroGradient: "from-primary-500 to-primary-700",
  subHeadline: "From concept to commerce in twelve weeks",
  description:
    "Verde Collective came to us with a mission and a product line but no brand presence. We built everything from the ground up: naming refinement, visual identity, a content-rich marketing site, and a Shopify store ready to handle launch-day traffic.",
  industry: "Sustainable Home Goods",
  duration: "12 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-primary-500 to-primary-700" },
    {
      type: "text",
      label: "Brand Foundation",
      heading: "Rooted in purpose",
      body: "We worked closely with the founders to articulate brand values that go beyond sustainability buzzwords. The resulting brand platform centers on transparency, longevity, and everyday beauty, giving every future decision a clear filter.",
    },
    { type: "paddedImage", gradient: "from-primary-600 to-primary-800" },
    {
      type: "text",
      label: "Visual Identity",
      heading: "Natural materials, digital expression",
      body: "Earthy textures and botanical illustrations anchor the identity in the physical world while a flexible grid and modern typography keep it feeling contemporary. The system scales from Instagram posts to product packaging.",
    },
    {
      type: "twoImages",
      gradient1: "from-primary-500 to-primary-600",
      gradient2: "from-primary-700 to-primary-800",
    },
    {
      type: "text",
      label: "Commerce",
      heading: "Built to sell and to tell",
      body: "The Shopify store integrates sourcing stories and material provenance directly into the product pages. Customers can trace each item's journey from raw material to their doorstep, reinforcing the transparency promise.",
    },
    { type: "paddedImage", gradient: "from-primary-400 to-primary-600" },
    {
      type: "text",
      label: "Launch",
      heading: "Day-one readiness",
      body: "Load testing, payment gateway verification, and shipping rule configuration ensured a smooth launch. The store handled twice the projected traffic on opening day without a single performance hiccup.",
    },
  ],
};

const homestead: CaseStudyData = {
  slug: "homestead",
  client: "Homestead",
  year: "2023",
  tags: ["Website", "SEO"],
  metaTitle: "Homestead | Willard",
  metaDescription:
    "A website redesign and local SEO campaign for Homestead, a boutique real estate brokerage focused on heritage properties.",
  headline: "Connecting heritage homes with modern buyers",
  heroGradient: "from-gray-300 to-gray-400",
  subHeadline: "Digital presence rooted in local expertise",
  description:
    "Homestead specializes in heritage and character homes in established neighborhoods. Their website needed to reflect the warmth and craftsmanship of the properties they represent while capturing high-intent search traffic from buyers ready to make a move.",
  industry: "Real Estate",
  duration: "8 Weeks",
  contentBlocks: [
    { type: "paddedImage", gradient: "from-gray-300 to-gray-400" },
    {
      type: "text",
      label: "Research",
      heading: "Understanding buyer intent",
      body: "Search data showed that buyers of heritage homes use different language than typical real estate searchers. Terms like 'craftsman bungalow' and 'character home' outperformed generic location-based queries in both volume and conversion potential.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-300 to-gray-200",
      gradient2: "from-gray-400 to-gray-500",
    },
    {
      type: "text",
      label: "Design",
      heading: "Warm, inviting, trustworthy",
      body: "Rich photography sits alongside warm serif typography and a palette drawn from natural materials. The design evokes the feeling of stepping into a well-loved home rather than scrolling through a clinical property database.",
    },
    { type: "fullImage", gradient: "from-gray-400 to-gray-300" },
    {
      type: "text",
      label: "SEO",
      heading: "Owning the neighborhood search",
      body: "Neighborhood guides, architectural style explainers, and market insight articles form a content hub that ranks for dozens of long-tail keywords. Google Business Profile optimization rounds out the local strategy.",
    },
  ],
};

const luminary: CaseStudyData = {
  slug: "luminary",
  client: "Luminary Academy",
  year: "2024",
  tags: ["Website", "Branding"],
  metaTitle: "Luminary Academy | Willard",
  metaDescription:
    "A brand refresh and website redesign for Luminary Academy, an online education platform expanding into professional development courses.",
  headline: "Elevating an education platform for its next chapter",
  heroGradient: "from-gray-400 to-gray-500",
  subHeadline: "A smarter brand for smarter learning",
  description:
    "Luminary Academy had outgrown its startup-era branding. As they expanded from hobbyist courses into corporate training, they needed a visual identity and website that signaled credibility to enterprise buyers while keeping the approachability that individual learners loved.",
  industry: "Education & E-Learning",
  duration: "10 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-400 to-gray-500" },
    {
      type: "text",
      label: "Brand Audit",
      heading: "Bridging two audiences",
      body: "The core challenge was serving enterprise procurement teams and individual learners with one cohesive brand. We developed a tiered messaging framework that adapts tone and proof points by audience without splitting the identity.",
    },
    { type: "paddedImage", gradient: "from-gray-500 to-gray-600" },
    {
      type: "text",
      label: "Identity",
      heading: "Confident but never corporate",
      body: "A refined wordmark, expanded color system, and custom iconography set give the brand room to grow. The visual language borrows cues from editorial design, positioning Luminary as a thought leader rather than just a course marketplace.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-400 to-gray-300",
      gradient2: "from-gray-500 to-gray-600",
    },
    {
      type: "text",
      label: "Website",
      heading: "Content-driven conversion",
      body: "Course landing pages lead with outcomes and social proof rather than feature lists. An intelligent recommendation engine surfaces relevant courses based on browsing behavior, increasing enrollment rates by 22%.",
    },
    { type: "fullImage", gradient: "from-gray-300 to-gray-500" },
  ],
};

const harvest: CaseStudyData = {
  slug: "harvest",
  client: "Harvest & Co",
  year: "2023",
  tags: ["Branding", "Shopify"],
  metaTitle: "Harvest & Co | Willard",
  metaDescription:
    "Brand identity and Shopify development for Harvest & Co, a farm-to-table food delivery service bringing artisanal producers direct to consumers.",
  headline: "Bringing the farmers market to your doorstep",
  heroGradient: "from-gray-500 to-gray-400",
  subHeadline: "Honest branding for honest food",
  description:
    "Harvest & Co partners with small-scale producers to deliver seasonal, artisanal food boxes. They needed a brand that communicated provenance and care, and a Shopify store that made subscription management effortless for busy families.",
  industry: "Food & Beverage",
  duration: "10 Weeks",
  contentBlocks: [
    { type: "paddedImage", gradient: "from-gray-500 to-gray-400" },
    {
      type: "text",
      label: "Brand Strategy",
      heading: "From commodity to community",
      body: "We positioned Harvest & Co not as a grocery delivery service but as a bridge between producers and families. The brand narrative centers on the people behind the food, creating emotional connection that generic competitors cannot replicate.",
    },
    { type: "fullImage", gradient: "from-gray-400 to-gray-300" },
    {
      type: "text",
      label: "Visual Identity",
      heading: "Handmade feel, professional finish",
      body: "Hand-drawn illustrations of seasonal produce give the brand a market-stall warmth. Paired with clean layout principles and a restrained color palette, the identity feels artisanal without looking amateurish.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-500 to-gray-600",
      gradient2: "from-gray-400 to-gray-300",
    },
    {
      type: "text",
      label: "Shopify",
      heading: "Subscriptions made simple",
      body: "A custom subscription flow lets customers choose box sizes, set delivery frequency, and swap items before each shipment. Integration with the fulfillment system gives the operations team real-time visibility into order volumes.",
    },
    { type: "paddedImage", gradient: "from-gray-600 to-gray-400" },
  ],
};

const vitality: CaseStudyData = {
  slug: "vitality",
  client: "Vitality Clinic",
  year: "2024",
  tags: ["Website", "SEO"],
  metaTitle: "Vitality Clinic | Willard",
  metaDescription:
    "A website redesign and medical SEO strategy for Vitality Clinic, a multi-location wellness practice looking to increase new patient bookings online.",
  headline: "Helping patients find the right care faster",
  heroGradient: "from-gray-600 to-gray-400",
  subHeadline: "Trust-building design for healthcare",
  description:
    "Vitality Clinic operates five locations offering integrative medicine services. Their outdated website made it difficult for patients to find providers, understand services, or book appointments. We rebuilt the experience around patient needs and local search visibility.",
  industry: "Healthcare & Wellness",
  duration: "10 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-600 to-gray-400" },
    {
      type: "text",
      label: "Patient Research",
      heading: "Mapping the care-seeking journey",
      body: "Patient surveys and analytics data revealed that most visitors arrived looking for a specific service or provider. We restructured the site around these intent patterns, reducing the average path to booking from five clicks to two.",
    },
    { type: "paddedImage", gradient: "from-gray-500 to-gray-300" },
    {
      type: "text",
      label: "Design",
      heading: "Clinical trust, human warmth",
      body: "The design balances medical credibility with approachable warmth. Provider profiles feature candid photography and personal statements, while service pages use plain language to explain treatment approaches and expected outcomes.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-600 to-gray-500",
      gradient2: "from-gray-400 to-gray-300",
    },
    {
      type: "text",
      label: "Local SEO",
      heading: "Visible in every neighborhood",
      body: "Each location has a dedicated landing page optimized for neighborhood-specific search terms. Schema markup for medical practices, coordinated review management, and Google Business Profile optimization round out a strategy that doubled organic appointment requests.",
    },
    { type: "fullImage", gradient: "from-gray-700 to-gray-400" },
  ],
};

const pixel: CaseStudyData = {
  slug: "pixel",
  client: "Pixel & Code",
  year: "2023",
  tags: ["Website", "SEO"],
  metaTitle: "Pixel & Code | Willard",
  metaDescription:
    "A portfolio website and SEO foundation for Pixel & Code, a digital product agency positioning itself for enterprise-level engagements.",
  headline: "Positioning a product agency for enterprise clients",
  heroGradient: "from-primary-600 to-primary-500",
  subHeadline: "Showcasing capability through craft",
  description:
    "Pixel & Code had the talent and track record to win enterprise contracts but their website told a different story. We designed a portfolio-driven site that demonstrates their process and results with the rigor that procurement teams expect.",
  industry: "Technology & Digital Services",
  duration: "8 Weeks",
  contentBlocks: [
    { type: "paddedImage", gradient: "from-primary-600 to-primary-500" },
    {
      type: "text",
      label: "Positioning",
      heading: "Proving enterprise readiness",
      body: "We restructured the portfolio around detailed case studies that speak to business outcomes, not just visual execution. Each project page follows a consistent problem-process-result framework that mirrors how enterprise buyers evaluate agencies.",
    },
    {
      type: "twoImages",
      gradient1: "from-primary-500 to-primary-400",
      gradient2: "from-primary-700 to-primary-600",
    },
    {
      type: "text",
      label: "Design",
      heading: "The medium is the message",
      body: "For a digital product agency, the website itself is the most important portfolio piece. Every interaction, transition, and layout decision was crafted to demonstrate the team's attention to detail and technical sophistication.",
    },
    { type: "fullImage", gradient: "from-primary-700 to-primary-500" },
    {
      type: "text",
      label: "SEO",
      heading: "Capturing decision-stage searches",
      body: "A targeted content strategy focuses on long-tail queries from buyers actively evaluating agencies. Service pages, methodology articles, and technology-specific landing pages capture traffic at the moment of highest purchase intent.",
    },
    { type: "paddedImage", gradient: "from-primary-600 to-primary-400" },
  ],
};

const nucleus: CaseStudyData = {
  slug: "nucleus",
  client: "Nucleus",
  year: "2024",
  tags: ["Branding", "Website"],
  metaTitle: "Nucleus | Willard",
  metaDescription:
    "A brand identity and corporate website for Nucleus, a biotech startup communicating breakthrough research to investors and scientific partners.",
  headline: "Making biotech approachable without losing depth",
  heroGradient: "from-gray-500 to-gray-300",
  subHeadline: "Science-forward branding for a new era",
  description:
    "Nucleus is developing novel therapeutic platforms but struggled to communicate their science to non-specialist investors. We created a brand identity that conveys scientific rigor and built a website that makes complex research accessible without oversimplifying.",
  industry: "Biotechnology",
  duration: "12 Weeks",
  contentBlocks: [
    { type: "fullImage", gradient: "from-gray-500 to-gray-300" },
    {
      type: "text",
      label: "Brand Strategy",
      heading: "Bridging the knowledge gap",
      body: "The central challenge was serving two audiences with fundamentally different levels of scientific literacy. We developed a layered communication approach where headlines convey impact, body copy provides context, and expandable sections offer technical depth.",
    },
    {
      type: "twoImages",
      gradient1: "from-gray-400 to-gray-300",
      gradient2: "from-gray-600 to-gray-500",
    },
    {
      type: "text",
      label: "Identity",
      heading: "Precision meets possibility",
      body: "The visual identity uses a custom geometric typeface and a restrained palette of deep navy and clinical white, punctuated by a single accent color that references molecular imaging. Abstract data visualizations replace stock photography throughout.",
    },
    { type: "paddedImage", gradient: "from-gray-600 to-gray-400" },
    {
      type: "text",
      label: "Website",
      heading: "Interactive science communication",
      body: "Pipeline pages use interactive diagrams that let investors explore each program's mechanism of action at their own pace. A publications hub aggregates peer-reviewed research and press coverage, building credibility with both audiences.",
    },
    { type: "fullImage", gradient: "from-gray-400 to-gray-200" },
    {
      type: "text",
      label: "Results",
      heading: "Investor-ready from day one",
      body: "The new brand and website launched ahead of Nucleus's Series B fundraise. The communications team reported that investor decks built on the new brand system cut meeting-to-term-sheet timelines by nearly a third.",
    },
  ],
};

const oriva: CaseStudyData = {
  slug: "oriva",
  client: "Oriva",
  year: "2024",
  tags: ["Branding", "Shopify", "eCommerce"],
  metaTitle: "Oriva | Willard",
  metaDescription:
    "Designing and building a luxury jewelry eCommerce experience for Oriva — from brand identity to a bespoke Shopify storefront.",
  headline: "Crafting a luxury jewelry experience online",
  heroGradient: "from-amber-100 to-amber-50",
  heroImage: "/images/oriva/4f808c241915435.696230f50abaa.webp",
  subHeadline: "A bespoke Shopify store for timeless craftsmanship",
  description:
    "Oriva needed an online presence that matched the quality and elegance of their handcrafted jewelry. We designed and built a premium Shopify storefront from the ground up — from brand identity and art direction to product photography layouts and a seamless checkout experience.",
  industry: "Luxury Jewelry",
  duration: "10 Weeks",
  contentBlocks: [
    {
      type: "fullImage",
      gradient: "from-amber-100 to-amber-50",
      image: "/images/oriva/7e36e0241915435.696230f50c5a6.webp",
    },
    {
      type: "text",
      label: "Strategy",
      heading: "Elevating every touchpoint",
      body: "Luxury shoppers expect a seamless, considered experience from the first click. We mapped out the entire customer journey — from discovery through product browsing to checkout — ensuring every interaction reinforced Oriva's positioning as a premium jewelry house.",
    },
    {
      type: "twoImages",
      gradient1: "from-amber-100 to-amber-50",
      gradient2: "from-gray-200 to-gray-100",
      image1: "/images/oriva/cb25f5241915435.696230f50be1a.webp",
      image2: "/images/oriva/4be728241915435.696230f50b90d.webp",
    },
    {
      type: "text",
      label: "Design",
      heading: "Where elegance meets function",
      body: "The design language draws from Oriva's jewelry itself — clean lines, generous whitespace, and warm tonal photography that lets the product speak. Product pages were designed with large imagery, detailed specifications, and subtle micro-interactions that create a tactile browsing experience.",
    },
    {
      type: "paddedImage",
      gradient: "from-amber-50 to-amber-100",
      image: "/images/oriva/ea9f57241915435.696230f50d997.webp",
    },
    {
      type: "text",
      label: "Development",
      heading: "Built on Shopify, built to scale",
      body: "We developed a custom Shopify theme with advanced product filtering, a fully responsive design, and optimised checkout flows. The store integrates with Oriva's inventory management and supports multi-currency transactions for their international customer base.",
    },
    {
      type: "fullImage",
      gradient: "from-gray-100 to-gray-200",
      image: "/images/oriva/7bdebe241915435.696230f50e5c7.webp",
    },
  ],
};

export const ALL_CASE_STUDIES: Record<string, CaseStudyData> = {
  oriva,
  meridian,
  northfield,
  atelier,
  volta,
  peak,
  verde,
  homestead,
  luminary,
  harvest,
  vitality,
  pixel,
  nucleus,
};
