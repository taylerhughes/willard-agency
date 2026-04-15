export type ContentBlock =
  | { type: "text"; label: string; heading: string; body: string }
  | { type: "fullImage"; gradient: string; image?: string }
  | { type: "paddedImage"; gradient: string; image?: string }
  | { type: "twoImages"; gradient1: string; gradient2: string; image1?: string; image2?: string }
  | { type: "video"; src: string; poster?: string; gradient?: string };

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
  heroVideo?: string;
  subHeadline: string;
  description: string;
  industry: string;
  duration: string;
  contentBlocks: ContentBlock[];
}

const fireside: CaseStudyData = {
  slug: "fireside",
  client: "Fireside",
  year: "2025",
  tags: ["Web Design", "Development", "Motion Design"],
  metaTitle: "Fireside | Willard",
  metaDescription:
    "Designing and developing an engaging website for Fireside — the first membership community for pediatric dentists.",
  headline: "Building a community dentists actually want to join",
  heroGradient: "from-orange-100 to-amber-50",
  heroImage: "/images/fireside/cover.avif",
  heroVideo: "/videos/fireside/fireside_landing_01.mp4",
  subHeadline: "A warm, engaging web presence for a pediatric dentistry community",
  description:
    "Fireside is the first membership community for pediatric dentists, offering exclusive resources, expert support, and vendor discounts. They needed a website that felt approachable and warm — not clinical — while clearly communicating their value proposition and driving membership sign-ups.",
  industry: "Healthcare & B2B",
  duration: "8 Weeks",
  contentBlocks: [
    {
      type: "video",
      src: "/videos/fireside/fireside_logo.mp4",
      poster: "/images/fireside/logo-mark.webp",
    },
    {
      type: "text",
      label: "Challenge",
      heading: "Warm, not clinical",
      body: "The biggest challenge was breaking away from typical healthcare design conventions. Fireside didn't want sterile blues and stock photos of smiling patients. They wanted something that felt like a conversation between colleagues — approachable, professional, and genuinely useful. We needed to create an engaging, light-feeling design that showcased the product while ensuring ease of connection with users.",
    },
    {
      type: "paddedImage",
      gradient: "from-orange-50 to-orange-100",
      image: "/images/fireside/mobile.avif",
    },
    {
      type: "text",
      label: "Design",
      heading: "Comfort over convention",
      body: "We found a positive design direction using warm colours, generous whitespace, and photography that focused on the people behind the practice rather than clinical environments. The design accompanies the existing brand identity properly while creating comfortable associations and emotions — without solely focusing on dentistry. Every layout decision was made to feel inviting rather than institutional.",
    },
    {
      type: "video",
      src: "/videos/fireside/fireside_web_animation_parallax.mp4",
      poster: "/images/fireside/overview.avif",
    },
    {
      type: "fullImage",
      gradient: "from-amber-50 to-orange-50",
      image: "/images/fireside/685e69b25fb7962db52f7cf6_fireside_website_overview.avif",
    },
    {
      type: "text",
      label: "Development",
      heading: "Built for conversion",
      body: "We developed a fully functional website ensuring a positive and engaging user experience along with high conversion rates. The site structure was crafted from scratch to guide visitors naturally from discovery to membership sign-up, with clear value propositions at every stage. Motion design elements add personality and guide the eye without overwhelming the content.",
    },
    {
      type: "video",
      src: "/videos/fireside/fireside_landing_02.mp4",
      poster: "/images/fireside/cover.avif",
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

const harvest: CaseStudyData = {
  slug: "harvest",
  client: "MOVA",
  year: "2024",
  tags: ["Branding", "eCommerce", "Motion Design"],
  metaTitle: "MOVA Brewery | Willard",
  metaDescription:
    "Brand identity, eCommerce design, and motion design for MOVA — a brewery and restaurant translating its in-person energy into a digital experience.",
  headline: "Translating a brewery's soul into a digital experience",
  heroGradient: "from-amber-950 to-amber-900",
  heroImage: "/images/mova/63e65925962d1c778663d4c1_63e6574fccb11003a47b907b_MOVA_1.avif",
  heroVideo: "/videos/mova/mova_home_1.mp4",
  subHeadline: "A bilingual eCommerce platform for a brewery with character",
  description:
    "MOVA is a brewery and restaurant that fosters connections between people through its unique culture and atmosphere. They needed a digital presence that authentically captured the energy of their physical space — a bilingual eCommerce site that felt as distinctive as the brand itself.",
  industry: "Food & Beverage",
  duration: "12 Weeks",
  contentBlocks: [
    {
      type: "video",
      src: "/videos/mova/hero_cas_mova_13.mp4",
      poster: "/images/mova/63e65925962d1c778663d4c1_63e6574fccb11003a47b907b_MOVA_1.avif",
    },
    {
      type: "text",
      label: "Challenge",
      heading: "Capturing atmosphere through a screen",
      body: "MOVA's physical space has a magnetic energy — industrial textures, warm light, and the constant hum of community. The biggest challenge was bottling that atmosphere into a digital experience. We couldn't rely on generic brewery tropes. Every design decision needed to feel like walking into the taproom.",
    },
    {
      type: "fullImage",
      gradient: "from-amber-950 to-amber-900",
      image: "/images/mova/63e62dd5ccb110c9ec784cf0_63e62aa5464bbf84b0a228fb_mova3.avif",
    },
    {
      type: "twoImages",
      gradient1: "from-amber-900 to-amber-800",
      gradient2: "from-amber-800 to-amber-900",
      image1: "/images/mova/63e62e1917a6ee836240091b_63e62ab3464bbfc35ca22975_mova6.1.avif",
      image2: "/images/mova/63e62e725d2086ee3567e050_63e62ab96c01915197668752_mova6.2.avif",
    },
    {
      type: "text",
      label: "Brand Identity",
      heading: "Raw materials, refined execution",
      body: "We built the visual identity around contrast — pairing raw, industrial textures with precise typography and considered whitespace. The colour palette draws from the brewing process itself: deep ambers, charred blacks, and the warm glow of copper vessels. Every element reinforces the brand's authenticity without feeling heavy-handed.",
    },
    {
      type: "twoImages",
      gradient1: "from-amber-800 to-amber-700",
      gradient2: "from-amber-900 to-amber-800",
      image1: "/images/mova/63e62df79825c3405c3bfe77_63e62ab95a14988d47591c05_mova7.1.avif",
      image2: "/images/mova/63e62e588380e634011461d9_63e62ab5fdf813809bb36b37_mova7.2.avif",
    },
    {
      type: "fullImage",
      gradient: "from-amber-900 to-amber-800",
      image: "/images/mova/63e633b38f7e7e38095cbba8_63e62f518110ab2157f08c38_mova8--min.avif",
    },
    {
      type: "video",
      src: "/videos/mova/mova_3dbottle_half.mp4",
      poster: "/images/mova/63b58407d4aad8e3cb4e5e15_1.avif",
    },
    {
      type: "text",
      label: "Motion Design",
      heading: "Movement that tells a story",
      body: "Motion design brings the brand to life across the digital experience. From 3D bottle renders that rotate with parallax depth to micro-interactions on product cards, every animation serves a purpose — guiding the eye, revealing information, or simply making the experience feel alive and tactile.",
    },
    {
      type: "fullImage",
      gradient: "from-amber-950 to-amber-900",
      image: "/images/mova/63e634f24dc521a386a26274_63e62abf8110abb0c8f04378_mova11-.avif",
    },
    {
      type: "fullImage",
      gradient: "from-amber-900 to-amber-800",
      image: "/images/mova/63e6351f2995ebea6e72fef8_63e62f5215a4cb5c27c89f6c_mova12--min.avif",
    },
    {
      type: "text",
      label: "eCommerce",
      heading: "A shop that feels like the taproom",
      body: "The bilingual eCommerce platform handles everything from single bottle purchases to mixed cases and merchandise. We designed the shopping flow to mirror the discovery you'd experience walking through the brewery — browsing by style, exploring seasonal releases, and stumbling onto limited editions. The checkout is fast and friction-free.",
    },
    {
      type: "twoImages",
      gradient1: "from-amber-800 to-amber-700",
      gradient2: "from-amber-900 to-amber-800",
      image1: "/images/mova/63e636ce5383837725c3317e_63e62ab5cba71baede655add_mova14-.avif",
      image2: "/images/mova/63e636e1773f7472ccef918b_63e62ab92ff628fecb5dc1f0_mova16.avif",
    },
    {
      type: "fullImage",
      gradient: "from-amber-950 to-amber-900",
      image: "/images/mova/63e636f017a6ee95b7409560_63e62ab5b6925cc4b9e9754f_17.avif",
    },
    {
      type: "video",
      src: "/videos/mova/brew_mova_new.mp4",
      poster: "/images/mova/63e633b38f7e7e38095cbba8_63e62f518110ab2157f08c38_mova8--min.avif",
    },
    {
      type: "fullImage",
      gradient: "from-amber-900 to-amber-800",
      image: "/images/mova/63e637070002fc4e6baf0c0e_63e62f4e9825c3dee63c1183_mova19-min.avif",
    },
  ],
};

export const ALL_CASE_STUDIES: Record<string, CaseStudyData> = {
  fireside,
  oriva,
  harvest,
};
