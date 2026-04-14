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
// DESIGN SERVICES
// ---------------------------------------------------------------------------

export const branding: ServiceData = {
  slug: "branding",
  title: "Brand Identity",
  metaTitle: "Brand Identity Agency | Willard",
  metaDescription:
    "We create brands you're proud of — from strategy and design to guidelines and implementation.",
  label: "Branding",
  headline: "We create brands you're proud of, and want to shout about.",
  description:
    "A brand is more than a logo. It's everything your audience comes into contact with — from your website to your business cards. We craft cohesive brand identities that resonate.",
  capabilities: [
    "Brand Strategy",
    "Brand Design",
    "Brand Guidelines",
    "Brand Tone of Voice",
    "Brand Implementation",
    "Brand Repositioning",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Meridian",
      title: "Full brand identity for a sustainable lifestyle brand",
      tags: ["Brand Strategy", "Brand Design", "Guidelines"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/meridian",
    },
    {
      year: "2024",
      client: "Atelier Studios",
      title: "Rebrand and visual identity for a creative agency",
      tags: ["Brand Repositioning", "Brand Design", "Tone of Voice"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/atelier-studios",
    },
    {
      year: "2023",
      client: "Northfield",
      title: "Brand identity and guidelines for a property developer",
      tags: ["Brand Strategy", "Brand Guidelines", "Implementation"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/northfield",
    },
  ],
  teamHeadline: "Branding designers you can trust",
  teamCopy:
    "Our in-house branding team combines strategic thinking with creative design to build brands that resonate. Every project is led by senior designers who care about craft and consistency.",
  teamSignals: [
    "Flexible payment plans available",
    "Regular updates during the project",
    "A team of brand experts to help your brand grow",
  ],
  valueHeadline: "Creating a brand is not just logo design.",
  valueCopy:
    "It's everything your audience comes into contact with, whether it be your website, marketing material, or social media. Each time your user views your brand, both the visual and the message should be consistent. We listen to your needs and who you are so we can communicate that to your audience.",
  trustSignals: ["In-house capabilities", "An agency you can trust"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline:
    "Brand experts that can help you design a brand you're proud of",
  subServices: [
    {
      title: "Brand Strategy",
      description:
        "In depth industry and competitors research to see where you currently sit.",
    },
    {
      title: "Brand Design",
      description:
        "All creative aspects, including logo design, typography, colour, placement, and iconography.",
    },
    {
      title: "Brand Guidelines",
      description:
        "A comprehensive document that outlines how your brand should be applied across all media.",
    },
    {
      title: "Brand Tone of Voice",
      description:
        "Users perceive a brand through visual and written content. We define how your brand speaks.",
    },
    {
      title: "Brand Implementation",
      description:
        "Creative assets such as business card design, print material, and anything with your brand on it.",
    },
    {
      title: "Brand Repositioning",
      description:
        "Evolving your existing brand to better connect with your audience and stand out from competitors.",
    },
  ],
  faqs: [
    {
      question: "How long does a branding project take?",
      answer:
        "Most branding projects take around 4 weeks, depending on the scope. We'll give you a clear timeline once we understand your brief.",
    },
    {
      question: "What's included in a brand identity project?",
      answer:
        "Typically: strategy and research, logo design, colour palette, typography, brand guidelines, and implementation across key touchpoints.",
    },
    {
      question: "Do you offer brand guidelines?",
      answer:
        "Yes — every branding project includes a comprehensive brand guidelines document so your team (and any future partners) can apply the brand consistently.",
    },
  ],
};

export const webDesign: ServiceData = {
  slug: "web-design",
  title: "Web Design",
  metaTitle: "Web Design Agency | Willard",
  metaDescription:
    "Beautiful, functional websites designed to connect with your audience and drive results.",
  label: "Web Design",
  headline: "Websites designed to deliver results.",
  description:
    "We design websites that look great and perform even better. Every pixel is considered, every interaction is intentional — built to engage your audience and grow your business.",
  capabilities: [
    "UI / UX Design",
    "Responsive Design",
    "Wireframing & Prototyping",
    "Design Systems",
    "Landing Pages",
    "Conversion Optimisation",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Volta Group",
      title: "Corporate website redesign for a fintech company",
      tags: ["UI / UX Design", "Responsive Design", "Design Systems"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/volta-group",
    },
    {
      year: "2024",
      client: "Everline",
      title: "Marketing website for a premium skincare brand",
      tags: ["Web Design", "Landing Pages", "Conversion Optimisation"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/everline",
    },
    {
      year: "2023",
      client: "Harken Studios",
      title: "Portfolio website for a creative production studio",
      tags: ["UI / UX Design", "Wireframing", "Responsive Design"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/harken-studios",
    },
  ],
  teamHeadline: "Web designers you can trust",
  teamCopy:
    "Our design team crafts pixel-perfect websites with a focus on user experience. We work collaboratively with you from wireframes through to final design, ensuring every detail is intentional.",
  teamSignals: [
    "Flexible payment plans available",
    "Collaborative design process from day one",
    "A team of designers dedicated to your project",
  ],
  valueHeadline: "Design-led websites that work.",
  valueCopy:
    "We combine beautiful aesthetics with intuitive user experience. Our design process is collaborative — we work closely with you to understand your goals and your audience so we can create a website that truly represents your brand.",
  trustSignals: ["Design-led approach", "Collaborative process"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Web design services tailored to your business",
  subServices: [
    {
      title: "UI / UX Design",
      description:
        "Beautiful interfaces combined with intuitive user experiences that keep visitors engaged.",
    },
    {
      title: "Responsive Design",
      description:
        "Websites that look and work perfectly across all devices, from desktop to mobile.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "We map out every user journey and interaction before moving to full design.",
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture leads and drive action.",
    },
    {
      title: "Design Systems",
      description:
        "Scalable component libraries that keep your website consistent as it grows.",
    },
    {
      title: "Conversion Optimisation",
      description:
        "Data-driven design decisions that turn visitors into customers.",
    },
  ],
  faqs: [
    {
      question: "How long does a web design project take?",
      answer:
        "Typically 5–8 weeks for a custom website. Simpler projects can be faster. We'll provide a clear timeline after reviewing your brief.",
    },
    {
      question: "Do you build the website too, or just design it?",
      answer:
        "We handle both design and development in-house. Your project is managed end-to-end by our team.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we design is fully responsive and tested across all major devices and browsers.",
    },
  ],
};

export const ecommerce: ServiceData = {
  slug: "ecommerce",
  title: "eCommerce",
  metaTitle: "eCommerce Design Agency | Willard",
  metaDescription:
    "eCommerce websites designed to sell. We build online stores that look great and convert.",
  label: "eCommerce",
  headline: "Online stores designed to sell.",
  description:
    "We design and build eCommerce experiences that drive sales. From product pages to checkout flows, every detail is optimised for conversion.",
  capabilities: [
    "eCommerce Strategy",
    "Store Design",
    "Product Page Design",
    "Checkout Optimisation",
    "Payment Integration",
    "Inventory Management",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Caldwell & Co",
      title: "Online store for a premium homeware brand",
      tags: ["eCommerce Strategy", "Store Design", "Checkout Optimisation"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/caldwell-and-co",
    },
    {
      year: "2024",
      client: "Rowan & Birch",
      title: "Multi-category eCommerce platform for artisan goods",
      tags: ["Product Pages", "Payment Integration", "Inventory Management"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/rowan-and-birch",
    },
    {
      year: "2023",
      client: "Lumin Candles",
      title: "Direct-to-consumer store for a luxury candle brand",
      tags: ["Store Design", "Checkout Optimisation", "eCommerce Strategy"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/lumin-candles",
    },
  ],
  teamHeadline: "eCommerce designers you can trust",
  teamCopy:
    "Our eCommerce team understands what drives online sales. We combine beautiful store design with conversion-focused thinking to create shopping experiences that turn browsers into buyers.",
  teamSignals: [
    "Flexible payment plans available",
    "Conversion-focused approach to every project",
    "A team of eCommerce specialists at your side",
  ],
  valueHeadline: "eCommerce that converts.",
  valueCopy:
    "A great online store is more than a product catalogue. It's a carefully crafted experience that guides customers from browsing to buying. We combine beautiful design with proven conversion principles.",
  trustSignals: ["Conversion-focused", "End-to-end service"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Everything you need to sell online",
  subServices: [
    {
      title: "eCommerce Strategy",
      description:
        "Research and planning to ensure your store is set up for success from day one.",
    },
    {
      title: "Store Design",
      description:
        "Beautiful, intuitive store layouts that showcase your products and drive sales.",
    },
    {
      title: "Product Pages",
      description:
        "High-converting product pages with compelling imagery, copy, and clear calls to action.",
    },
    {
      title: "Checkout Optimisation",
      description:
        "Streamlined checkout flows that reduce cart abandonment and increase conversions.",
    },
    {
      title: "Payment Integration",
      description:
        "Secure, reliable payment solutions including Stripe, PayPal, and more.",
    },
    {
      title: "Inventory Management",
      description:
        "Systems and integrations to keep your stock levels accurate and your operations smooth.",
    },
  ],
  faqs: [
    {
      question: "Which eCommerce platform do you recommend?",
      answer:
        "It depends on your needs. We work with Shopify for most eCommerce projects, but we also build custom solutions with headless CMS setups for more complex requirements.",
    },
    {
      question: "Can you migrate my existing store?",
      answer:
        "Yes — we handle full store migrations including products, customers, and order history. We'll make the transition as smooth as possible.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Absolutely. We offer ongoing support packages to keep your store running smoothly, handle updates, and help you grow.",
    },
  ],
};

export const shopify: ServiceData = {
  slug: "shopify",
  title: "Shopify",
  metaTitle: "Shopify Agency | Willard",
  metaDescription:
    "Custom Shopify stores designed and built by experts. Get your store live in as little as 4 weeks.",
  label: "Shopify",
  headline: "Custom Shopify stores, built to sell.",
  description:
    "We design and develop custom Shopify stores that stand out. From theme customisation to bespoke builds, we create stores that convert visitors into customers.",
  capabilities: [
    "Custom Theme Development",
    "Shopify Plus",
    "Theme Customisation",
    "App Integration",
    "Store Migration",
    "Ongoing Support",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Thorne & Ivy",
      title: "Custom Shopify store for a botanical beauty brand",
      tags: ["Custom Theme Development", "App Integration", "Shopify Plus"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/thorne-and-ivy",
    },
    {
      year: "2023",
      client: "Summit Outdoor",
      title: "Shopify store migration and redesign for outdoor gear",
      tags: ["Store Migration", "Theme Customisation", "Ongoing Support"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/summit-outdoor",
    },
    {
      year: "2023",
      client: "Piper & Elm",
      title: "Shopify Plus build for a fast-growing fashion label",
      tags: ["Shopify Plus", "Custom Theme Development", "App Integration"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/piper-and-elm",
    },
  ],
  teamHeadline: "Shopify experts you can trust",
  teamCopy:
    "Our Shopify team knows the platform inside out. From theme development to app integrations, we build stores that look incredible and are optimised for sales.",
  teamSignals: [
    "Flexible payment plans available",
    "Regular progress updates throughout your build",
    "A team of Shopify specialists ready to help",
  ],
  valueHeadline: "Shopify experts you can rely on.",
  valueCopy:
    "Shopify is the world's leading eCommerce platform, and we know it inside out. We build custom Shopify stores that look incredible and are optimised for performance, SEO, and conversions.",
  trustSignals: ["Shopify experts", "Fast turnaround"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Shopify services from design to launch",
  subServices: [
    {
      title: "Custom Theme Development",
      description:
        "Bespoke Shopify themes built from scratch to match your brand perfectly.",
    },
    {
      title: "Theme Customisation",
      description:
        "Modifying existing Shopify themes to better suit your brand and business needs.",
    },
    {
      title: "App Integration",
      description:
        "Connecting your store with the apps and tools you need to run your business.",
    },
    {
      title: "Store Migration",
      description:
        "Migrating your existing store to Shopify with zero data loss and minimal downtime.",
    },
    {
      title: "Shopify Plus",
      description:
        "Enterprise-level Shopify solutions for high-volume merchants and complex requirements.",
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous support to keep your Shopify store running at peak performance.",
    },
  ],
  faqs: [
    {
      question: "How long does a Shopify build take?",
      answer:
        "A typical Shopify project takes around 4 weeks. More complex builds with custom functionality may take longer.",
    },
    {
      question: "Can you work with Shopify Plus?",
      answer:
        "Yes — we have experience with Shopify Plus and can help enterprise-level merchants get the most from the platform.",
    },
    {
      question: "Do you provide training?",
      answer:
        "Yes. We provide full training on how to manage your Shopify store, including adding products, managing orders, and using any custom features we've built.",
    },
  ],
};

export const graphicDesign: ServiceData = {
  slug: "graphic-design",
  title: "Graphic Design",
  metaTitle: "Graphic Design Agency | Willard",
  metaDescription:
    "Print and digital graphic design — from business cards to marketing campaigns.",
  label: "Graphic Design",
  headline: "Design that communicates.",
  description:
    "From print to digital, we create graphic design that tells your story. Business cards, brochures, social media assets — everything your brand needs to look its best.",
  capabilities: [
    "Print Design",
    "Social Media Assets",
    "Presentation Design",
    "Marketing Collateral",
    "Packaging Design",
    "Illustration",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Fenwick Hall",
      title: "Full print and digital collateral for a boutique hotel",
      tags: ["Print Design", "Marketing Collateral", "Packaging Design"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/fenwick-hall",
    },
    {
      year: "2024",
      client: "Mosaic Collective",
      title: "Social media asset library for a creative co-working space",
      tags: ["Social Media Assets", "Illustration", "Presentation Design"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/mosaic-collective",
    },
    {
      year: "2023",
      client: "Bramley Foods",
      title: "Packaging and marketing design for an organic food brand",
      tags: ["Packaging Design", "Print Design", "Marketing Collateral"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/bramley-foods",
    },
  ],
  teamHeadline: "Graphic designers you can trust",
  teamCopy:
    "Our graphic design team works across print and digital to deliver cohesive creative that strengthens your brand at every touchpoint.",
  teamSignals: [
    "Flexible payment plans available",
    "Quick turnaround on revisions",
    "A team of multi-format design experts",
  ],
  valueHeadline: "Every touchpoint matters.",
  valueCopy:
    "Your brand lives across many touchpoints — print, digital, social, physical. We create cohesive graphic design that ensures your brand looks and feels consistent wherever your audience encounters it.",
  trustSignals: ["Multi-format expertise", "Brand consistency"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Graphic design across every medium",
  subServices: [
    {
      title: "Print Design",
      description:
        "Business cards, brochures, flyers, and posters designed to make an impact.",
    },
    {
      title: "Social Media Assets",
      description:
        "Scroll-stopping social media graphics that align with your brand and engage your audience.",
    },
    {
      title: "Presentation Design",
      description:
        "Professional pitch decks and presentations that help you win business.",
    },
    {
      title: "Marketing Collateral",
      description:
        "Leaflets, banners, exhibition stands, and everything in between.",
    },
    {
      title: "Packaging Design",
      description:
        "Product packaging that stands out on the shelf and reinforces your brand.",
    },
    {
      title: "Illustration",
      description:
        "Custom illustrations that add personality and depth to your brand communications.",
    },
  ],
  faqs: [
    {
      question: "Can you match our existing brand guidelines?",
      answer:
        "Absolutely. We'll work within your existing brand guidelines to ensure everything we produce is on-brand and consistent.",
    },
    {
      question: "Do you handle print production?",
      answer:
        "We can manage print production through our trusted print partners, or supply print-ready files for you to produce yourself.",
    },
    {
      question: "What file formats do you provide?",
      answer:
        "We supply files in whatever formats you need — typically PDF, PNG, SVG, and source files (Figma/Adobe).",
    },
  ],
};

// ---------------------------------------------------------------------------
// DEVELOP SERVICES
// ---------------------------------------------------------------------------

export const webDevelopment: ServiceData = {
  slug: "web-development",
  title: "Web Development",
  metaTitle: "Web Development Agency | Willard",
  metaDescription:
    "Custom web development built to the highest standards using modern technologies.",
  label: "Web Development",
  headline: "Built to the highest standards.",
  description:
    "We build fast, accessible, and scalable websites using modern technologies. Clean code, best practices, and attention to detail — that's how we develop.",
  capabilities: [
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Performance Optimisation",
    "Accessibility",
    "Testing & QA",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Meridian",
      title: "Full-stack web application for a sustainability platform",
      tags: ["Frontend Development", "Backend Development", "API Integration"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/meridian",
    },
    {
      year: "2024",
      client: "Praxis Health",
      title: "Accessible patient portal built with React and Next.js",
      tags: ["Accessibility", "Frontend Development", "Performance Optimisation"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/praxis-health",
    },
    {
      year: "2023",
      client: "Volta Group",
      title: "Custom dashboard and reporting tool for fintech analytics",
      tags: ["Backend Development", "API Integration", "Testing & QA"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/volta-group",
    },
  ],
  teamHeadline: "Web developers you can trust",
  teamCopy:
    "Our development team writes clean, maintainable code using modern technologies. Every build is thoroughly tested and optimised for performance, accessibility, and SEO.",
  teamSignals: [
    "Flexible payment plans available",
    "Regular code reviews and progress updates",
    "A team of senior developers on every project",
  ],
  valueHeadline: "Code quality matters.",
  valueCopy:
    "Every line of code we write is clean, maintainable, and built to last. We follow best practices for performance, accessibility, and SEO so your website works for everyone.",
  trustSignals: ["Modern tech stack", "Best practices"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Development services built on best practices",
  subServices: [
    {
      title: "Frontend Development",
      description:
        "Pixel-perfect frontend builds using React, Next.js, and modern CSS.",
    },
    {
      title: "Backend Development",
      description:
        "Robust server-side solutions, APIs, and database architecture.",
    },
    {
      title: "API Integration",
      description:
        "Connecting your website with third-party services, CRMs, and payment providers.",
    },
    {
      title: "Performance Optimisation",
      description:
        "Fast load times, optimised assets, and efficient code for the best user experience.",
    },
    {
      title: "Accessibility",
      description:
        "WCAG-compliant websites that work for all users, regardless of ability.",
    },
    {
      title: "Testing & QA",
      description:
        "Thorough testing across devices and browsers to catch issues before launch.",
    },
  ],
  faqs: [
    {
      question: "What technologies do you use?",
      answer:
        "We primarily use Next.js, React, and TypeScript for frontend development, with various backend technologies depending on the project requirements.",
    },
    {
      question: "Do you work with existing codebases?",
      answer:
        "Yes — we're happy to work with your existing codebase, whether that's fixing bugs, adding features, or refactoring for better performance.",
    },
    {
      question: "How do you handle hosting?",
      answer:
        "We can help you choose and set up the right hosting solution. We work with providers like Vercel, Netlify, and traditional hosting platforms.",
    },
  ],
};

export const nextjs: ServiceData = {
  slug: "nextjs",
  title: "Next.js",
  metaTitle: "Next.js Development Agency | Willard",
  metaDescription:
    "Expert Next.js development for fast, SEO-friendly, and scalable web applications.",
  label: "Next.js",
  headline: "Next.js development, done right.",
  description:
    "We specialise in building web applications with Next.js — the React framework for production. Fast, SEO-friendly, and built to scale.",
  capabilities: [
    "Next.js App Router",
    "Server Components",
    "Static Generation",
    "API Routes",
    "Incremental Static Regeneration",
    "Edge Functions",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Everline",
      title: "High-performance marketing site built on Next.js App Router",
      tags: ["Next.js App Router", "Server Components", "Static Generation"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/everline",
    },
    {
      year: "2024",
      client: "Kinetic Labs",
      title: "Next.js web application with real-time data and edge functions",
      tags: ["Edge Functions", "API Routes", "Incremental Static Regeneration"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/kinetic-labs",
    },
    {
      year: "2023",
      client: "Harken Studios",
      title: "Headless CMS-powered portfolio site on Next.js",
      tags: ["Server Components", "Static Generation", "Next.js App Router"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/harken-studios",
    },
  ],
  teamHeadline: "Next.js developers you can trust",
  teamCopy:
    "Our team specialises in Next.js and React, building production-ready web applications that are fast, scalable, and SEO-friendly from the ground up.",
  teamSignals: [
    "Flexible payment plans available",
    "Transparent development process with regular demos",
    "A team of Next.js specialists dedicated to your build",
  ],
  valueHeadline: "The modern way to build for the web.",
  valueCopy:
    "Next.js gives us the tools to build incredibly fast, SEO-optimised websites with the flexibility of a full application framework. We use it for everything from marketing sites to complex web apps.",
  trustSignals: ["Next.js specialists", "Production-ready builds"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Next.js expertise for modern web projects",
  subServices: [
    {
      title: "Marketing Websites",
      description:
        "Blazing-fast marketing sites with perfect Lighthouse scores and great SEO.",
    },
    {
      title: "Web Applications",
      description:
        "Complex, interactive web applications built on the App Router with server and client components.",
    },
    {
      title: "Headless CMS Integration",
      description:
        "Connecting Next.js with headless CMS platforms for easy content management.",
    },
    {
      title: "eCommerce Storefronts",
      description:
        "Custom headless commerce experiences powered by Shopify or other platforms.",
    },
    {
      title: "Performance Optimisation",
      description:
        "Leveraging ISR, edge functions, and caching for the fastest possible experience.",
    },
    {
      title: "Migration",
      description:
        "Moving your existing site to Next.js for better performance, developer experience, and SEO.",
    },
  ],
  faqs: [
    {
      question: "Why should I choose Next.js?",
      answer:
        "Next.js offers the best balance of performance, SEO, and developer experience. It's used by some of the world's largest companies and is backed by Vercel.",
    },
    {
      question: "Can you migrate our existing site to Next.js?",
      answer:
        "Yes — we've helped many clients migrate from WordPress, custom PHP, and other platforms to Next.js. We handle the entire process.",
    },
    {
      question: "Do you deploy to Vercel?",
      answer:
        "Vercel is our preferred deployment platform for Next.js, but we can also deploy to other providers including AWS, Netlify, and self-hosted solutions.",
    },
  ],
};

export const shopifyDev: ServiceData = {
  slug: "shopify-dev",
  title: "Shopify Dev",
  metaTitle: "Shopify Development | Willard",
  metaDescription:
    "Custom Shopify development — themes, apps, and integrations built by experts.",
  label: "Shopify Development",
  headline: "Custom Shopify development.",
  description:
    "Beyond themes and templates — we build custom Shopify solutions including bespoke theme development, app integrations, and Liquid template customisation.",
  capabilities: [
    "Liquid Development",
    "Custom Sections",
    "App Development",
    "Storefront API",
    "Checkout Customisation",
    "Performance Tuning",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Thorne & Ivy",
      title: "Custom Shopify Liquid theme for a botanical beauty brand",
      tags: ["Liquid Development", "Custom Sections", "Performance Tuning"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/thorne-and-ivy",
    },
    {
      year: "2024",
      client: "Rowan & Birch",
      title: "Headless Shopify storefront using the Storefront API",
      tags: ["Storefront API", "Checkout Customisation", "App Integration"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/rowan-and-birch",
    },
    {
      year: "2023",
      client: "Piper & Elm",
      title: "Custom checkout flow and upsell integration for fashion eCommerce",
      tags: ["Checkout Customisation", "Liquid Development", "Performance Tuning"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/piper-and-elm",
    },
  ],
  teamHeadline: "Shopify developers you can trust",
  teamCopy:
    "Our Shopify development team goes beyond templates with custom Liquid code, bespoke integrations, and performance-tuned builds that give your store a competitive edge.",
  teamSignals: [
    "Flexible payment plans available",
    "Clean, documented code for every project",
    "A team of Shopify Liquid experts at your service",
  ],
  valueHeadline: "Going beyond the template.",
  valueCopy:
    "We write clean, performant Shopify code that goes far beyond what off-the-shelf themes can offer. Custom functionality, seamless integrations, and a store that truly reflects your brand.",
  trustSignals: ["Shopify Liquid experts", "Custom solutions"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Technical Shopify expertise",
  subServices: [
    {
      title: "Liquid Development",
      description:
        "Custom Shopify Liquid templates and theme architecture for complete control.",
    },
    {
      title: "Custom Sections & Blocks",
      description:
        "Bespoke theme sections that give merchants flexibility in the Shopify editor.",
    },
    {
      title: "App Integration",
      description:
        "Connecting third-party apps and services with custom development work.",
    },
    {
      title: "Storefront API",
      description:
        "Headless Shopify builds using the Storefront API for custom frontend experiences.",
    },
    {
      title: "Checkout Customisation",
      description:
        "Custom checkout experiences, upsells, and post-purchase flows.",
    },
    {
      title: "Performance Tuning",
      description:
        "Optimising your Shopify store for speed, reducing load times, and improving core web vitals.",
    },
  ],
  faqs: [
    {
      question: "Can you customise an existing Shopify theme?",
      answer:
        "Yes — we can modify any existing Shopify theme to better fit your brand and business needs, from simple tweaks to major customisations.",
    },
    {
      question: "Do you build custom Shopify apps?",
      answer:
        "We can build custom integrations and functionality. For full Shopify app development, we'd scope this on a project-by-project basis.",
    },
    {
      question: "What's the difference between Shopify design and Shopify dev?",
      answer:
        "Our Shopify design service focuses on the visual look and feel. Shopify dev focuses on the technical build — custom code, integrations, and functionality.",
    },
  ],
};

export const headlessCms: ServiceData = {
  slug: "headless-cms",
  title: "Headless CMS",
  metaTitle: "Headless CMS Development | Willard",
  metaDescription:
    "Headless CMS solutions for flexible, scalable content management.",
  label: "Headless CMS",
  headline: "Content management, decoupled.",
  description:
    "We build headless CMS solutions that separate your content from your frontend — giving you the flexibility to deliver content anywhere, faster.",
  capabilities: [
    "CMS Selection & Setup",
    "Content Modelling",
    "API Integration",
    "Preview & Draft Modes",
    "Multi-channel Delivery",
    "Migration",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Kinetic Labs",
      title: "Sanity CMS integration for a SaaS product marketing site",
      tags: ["CMS Selection & Setup", "Content Modelling", "API Integration"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/kinetic-labs",
    },
    {
      year: "2024",
      client: "Fenwick Hall",
      title: "Contentful-powered multi-language site for a boutique hotel",
      tags: ["Multi-channel Delivery", "Preview & Draft Modes", "Migration"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/fenwick-hall",
    },
    {
      year: "2023",
      client: "Caldwell & Co",
      title: "WordPress to headless CMS migration for a homeware brand",
      tags: ["Migration", "Content Modelling", "CMS Selection & Setup"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/caldwell-and-co",
    },
  ],
  teamHeadline: "Headless CMS experts you can trust",
  teamCopy:
    "Our team has deep experience across leading headless CMS platforms. We help you choose, set up, and integrate the right solution so your content workflow is fast and flexible.",
  teamSignals: [
    "Flexible payment plans available",
    "Full training for your content editors",
    "A team of CMS specialists to guide your setup",
  ],
  valueHeadline: "The future of content management.",
  valueCopy:
    "Headless CMS gives your team the power to manage content easily while your frontend stays fast and flexible. We help you choose the right platform and build a solution that scales with your business.",
  trustSignals: ["Platform agnostic", "Scalable architecture"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Headless CMS solutions that scale",
  subServices: [
    {
      title: "CMS Selection",
      description:
        "Helping you choose the right headless CMS — Sanity, Contentful, Strapi, or others.",
    },
    {
      title: "Content Modelling",
      description:
        "Designing content structures that are flexible, reusable, and easy to manage.",
    },
    {
      title: "API Integration",
      description:
        "Connecting your CMS with your frontend, mobile apps, and third-party services.",
    },
    {
      title: "Preview & Draft Modes",
      description:
        "Real-time content previews so your team can see changes before publishing.",
    },
    {
      title: "Multi-channel Delivery",
      description:
        "Deliver content to websites, apps, digital signage, and more from a single source.",
    },
    {
      title: "CMS Migration",
      description:
        "Moving your content from WordPress or other platforms to a modern headless CMS.",
    },
  ],
  faqs: [
    {
      question: "What is a headless CMS?",
      answer:
        "A headless CMS stores and manages content separately from how it's displayed. This means you can use any frontend technology while still giving your team an easy-to-use content editor.",
    },
    {
      question: "Which headless CMS do you recommend?",
      answer:
        "It depends on your needs and budget. We've worked with Sanity, Contentful, Strapi, and others. We'll help you choose the best fit.",
    },
    {
      question: "Is it harder to manage than WordPress?",
      answer:
        "Not at all — modern headless CMS platforms are designed to be user-friendly. Most clients find them easier to use than WordPress once they're set up.",
    },
  ],
};

export const ecommerceDev: ServiceData = {
  slug: "ecommerce-dev",
  title: "eCommerce Dev",
  metaTitle: "eCommerce Development | Willard",
  metaDescription:
    "Custom eCommerce development — from headless storefronts to platform integrations.",
  label: "eCommerce Development",
  headline: "Custom eCommerce, engineered to perform.",
  description:
    "We build custom eCommerce solutions that go beyond templates. Headless storefronts, complex integrations, and high-performance online stores.",
  capabilities: [
    "Headless Commerce",
    "Custom Storefronts",
    "Payment Integration",
    "ERP Integration",
    "Multi-currency",
    "Performance Optimisation",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Rowan & Birch",
      title: "Headless commerce platform for a multi-brand artisan marketplace",
      tags: ["Headless Commerce", "Custom Storefronts", "ERP Integration"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/rowan-and-birch",
    },
    {
      year: "2024",
      client: "Lumin Candles",
      title: "Multi-currency storefront with Stripe and Klarna integration",
      tags: ["Payment Integration", "Multi-currency", "Performance Optimisation"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/lumin-candles",
    },
    {
      year: "2023",
      client: "Summit Outdoor",
      title: "Custom headless storefront with warehouse integration",
      tags: ["Headless Commerce", "ERP Integration", "Custom Storefronts"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/summit-outdoor",
    },
  ],
  teamHeadline: "eCommerce developers you can trust",
  teamCopy:
    "Our eCommerce development team engineers custom solutions for complex requirements. From headless architecture to deep integrations, we build stores that scale with your business.",
  teamSignals: [
    "Flexible payment plans available",
    "Scalable architecture built for growth",
    "A team of eCommerce engineers ready to build",
  ],
  valueHeadline: "eCommerce without limits.",
  valueCopy:
    "When off-the-shelf solutions don't cut it, we build custom eCommerce experiences tailored to your exact requirements. From headless architecture to complex integrations, we engineer solutions that scale.",
  trustSignals: ["Custom engineering", "Scalable solutions"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Technical eCommerce solutions",
  subServices: [
    {
      title: "Headless Commerce",
      description:
        "Custom frontends powered by Shopify, Saleor, or other commerce backends.",
    },
    {
      title: "Custom Storefronts",
      description:
        "Unique shopping experiences built from the ground up for your brand.",
    },
    {
      title: "Payment Integration",
      description:
        "Stripe, PayPal, Klarna, and custom payment flows integrated seamlessly.",
    },
    {
      title: "ERP & Inventory Integration",
      description:
        "Connecting your store with warehouse management, ERP, and fulfilment systems.",
    },
    {
      title: "Multi-currency & i18n",
      description:
        "Selling internationally with multi-currency, multi-language, and regional pricing.",
    },
    {
      title: "Performance Optimisation",
      description:
        "Blazing-fast stores that load quickly and convert more customers.",
    },
  ],
  faqs: [
    {
      question: "When do I need custom eCommerce development?",
      answer:
        "If your requirements go beyond what standard platforms offer — complex product configurations, custom checkout flows, or deep integrations — custom development is the way to go.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes — we regularly integrate eCommerce platforms with ERPs, CRMs, warehousing systems, and other business tools.",
    },
    {
      question: "What about security?",
      answer:
        "Security is built into everything we do. We follow industry best practices for payment processing, data handling, and platform security.",
    },
  ],
};

export const technicalSeo: ServiceData = {
  slug: "technical-seo",
  title: "Technical SEO",
  metaTitle: "Technical SEO Agency | Willard",
  metaDescription:
    "Technical SEO audits and implementation to improve your site's performance in search.",
  label: "Technical SEO",
  headline: "The foundation of search visibility.",
  description:
    "Technical SEO ensures search engines can crawl, index, and rank your website. We audit and fix the technical issues holding your site back.",
  capabilities: [
    "Technical Audits",
    "Core Web Vitals",
    "Site Architecture",
    "Schema Markup",
    "Crawlability & Indexing",
    "Page Speed Optimisation",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Praxis Health",
      title: "Technical SEO audit and Core Web Vitals overhaul",
      tags: ["Technical Audits", "Core Web Vitals", "Page Speed Optimisation"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/praxis-health",
    },
    {
      year: "2024",
      client: "Northfield",
      title: "Site architecture and schema markup for a property developer",
      tags: ["Site Architecture", "Schema Markup", "Crawlability & Indexing"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/northfield",
    },
    {
      year: "2023",
      client: "Mosaic Collective",
      title: "Full technical SEO remediation for a creative co-working brand",
      tags: ["Technical Audits", "Page Speed Optimisation", "Core Web Vitals"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/mosaic-collective",
    },
  ],
  teamHeadline: "Technical SEO experts you can trust",
  teamCopy:
    "Our technical SEO team combines development expertise with search knowledge to fix the issues holding your site back. We deliver measurable improvements in crawlability, speed, and rankings.",
  teamSignals: [
    "Data-driven audits and recommendations",
    "Regular performance reporting",
    "A team of technical SEO specialists on your side",
  ],
  valueHeadline: "Getting the fundamentals right.",
  valueCopy:
    "Great content and beautiful design mean nothing if search engines can't find your site. We fix the technical issues that hold your rankings back — from site speed to structured data.",
  trustSignals: ["Data-driven approach", "Measurable results"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Technical SEO that drives organic growth",
  subServices: [
    {
      title: "Technical Audits",
      description:
        "Comprehensive crawl analysis to identify and prioritise technical issues.",
    },
    {
      title: "Core Web Vitals",
      description:
        "Improving LCP, FID, and CLS scores for better user experience and rankings.",
    },
    {
      title: "Site Architecture",
      description:
        "Optimising your site structure for better crawlability and user navigation.",
    },
    {
      title: "Schema Markup",
      description:
        "Structured data implementation for rich snippets and better search presence.",
    },
    {
      title: "Crawlability & Indexing",
      description:
        "Ensuring search engines can find and index all your important pages.",
    },
    {
      title: "Page Speed Optimisation",
      description:
        "Reducing load times through code optimisation, image compression, and caching strategies.",
    },
  ],
  faqs: [
    {
      question: "What's the difference between technical SEO and regular SEO?",
      answer:
        "Technical SEO focuses on the underlying structure and performance of your website — how search engines crawl and index it. Regular SEO also includes content strategy, link building, and on-page optimisation.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Technical SEO fixes can have an immediate impact on crawlability, but ranking improvements typically take 4–12 weeks depending on the changes made.",
    },
    {
      question: "Do you provide ongoing technical SEO?",
      answer:
        "Yes — we offer ongoing technical SEO support to monitor performance, fix new issues, and keep your site optimised as it grows.",
    },
  ],
};

// ---------------------------------------------------------------------------
// SUPPORT SERVICES
// ---------------------------------------------------------------------------

export const seo: ServiceData = {
  slug: "seo",
  title: "SEO",
  metaTitle: "SEO Agency | Willard",
  metaDescription:
    "SEO services that drive organic traffic and help your business get found online.",
  label: "SEO",
  headline: "Get your brand seen online.",
  description:
    "We help businesses grow their organic search visibility with strategic SEO. From keyword research to content strategy, we drive traffic that converts.",
  capabilities: [
    "Keyword Research",
    "On-page SEO",
    "Content Strategy",
    "Link Building",
    "Local SEO",
    "Reporting & Analytics",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Caldwell & Co",
      title: "Organic growth strategy for a premium homeware brand",
      tags: ["Keyword Research", "Content Strategy", "On-page SEO"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/caldwell-and-co",
    },
    {
      year: "2024",
      client: "Bramley Foods",
      title: "Local SEO and content campaign for an organic food brand",
      tags: ["Local SEO", "Content Strategy", "Reporting & Analytics"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/bramley-foods",
    },
    {
      year: "2023",
      client: "Fenwick Hall",
      title: "SEO strategy and link building for a boutique hotel",
      tags: ["Link Building", "Keyword Research", "On-page SEO"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/fenwick-hall",
    },
  ],
  teamHeadline: "SEO experts you can trust",
  teamCopy:
    "Our SEO team drives sustainable organic growth through strategic keyword targeting, quality content, and transparent reporting. We focus on results you can measure.",
  teamSignals: [
    "Transparent monthly reporting",
    "No long-term lock-in contracts",
    "A team of SEO specialists focused on your growth",
  ],
  valueHeadline: "SEO that drives real growth.",
  valueCopy:
    "SEO is a long-term investment that pays dividends. We build sustainable organic growth through strategic keyword targeting, quality content, and proven on-page techniques.",
  trustSignals: ["Transparent reporting", "Proven results"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "SEO services that deliver organic growth",
  subServices: [
    {
      title: "Keyword Research",
      description:
        "Identifying the search terms your audience uses and the opportunities to rank.",
    },
    {
      title: "On-page SEO",
      description:
        "Optimising your content, meta data, and page structure for target keywords.",
    },
    {
      title: "Content Strategy",
      description:
        "Planning and creating content that ranks, engages, and converts.",
    },
    {
      title: "Link Building",
      description:
        "Earning high-quality backlinks that boost your domain authority and rankings.",
    },
    {
      title: "Local SEO",
      description:
        "Getting your business found in local search results and Google Maps.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Clear monthly reports showing rankings, traffic, and the impact on your business.",
    },
  ],
  faqs: [
    {
      question: "How long does SEO take to work?",
      answer:
        "SEO is a long-term strategy. Most clients start seeing meaningful results within 3–6 months, with compounding returns over time.",
    },
    {
      question: "Do you guarantee rankings?",
      answer:
        "No reputable SEO agency can guarantee specific rankings. What we do guarantee is transparent, strategic work that improves your organic visibility over time.",
    },
    {
      question: "What do your SEO reports include?",
      answer:
        "Monthly reports covering keyword rankings, organic traffic, technical health, content performance, and actionable recommendations.",
    },
  ],
};

export const hosting: ServiceData = {
  slug: "hosting",
  title: "Web Hosting",
  metaTitle: "Web Hosting | Willard",
  metaDescription:
    "Reliable, fast web hosting managed by our team so you can focus on your business.",
  label: "Web Hosting",
  headline: "Hosting you can rely on.",
  description:
    "We provide fast, secure, and reliable hosting solutions managed by our team. No downtime worries — we handle everything so you can focus on your business.",
  capabilities: [
    "Managed Hosting",
    "SSL Certificates",
    "Daily Backups",
    "Uptime Monitoring",
    "Security Updates",
    "CDN Setup",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Volta Group",
      title: "Enterprise hosting migration and CDN setup for fintech platform",
      tags: ["Managed Hosting", "CDN Setup", "Uptime Monitoring"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/volta-group",
    },
    {
      year: "2024",
      client: "Praxis Health",
      title: "Secure managed hosting for a healthcare patient portal",
      tags: ["Managed Hosting", "SSL Certificates", "Security Updates"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/praxis-health",
    },
    {
      year: "2023",
      client: "Mosaic Collective",
      title: "High-availability hosting with daily backups for a creative platform",
      tags: ["Daily Backups", "Uptime Monitoring", "Managed Hosting"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/mosaic-collective",
    },
  ],
  teamHeadline: "Hosting experts you can trust",
  teamCopy:
    "Our hosting team provides fully managed, enterprise-grade infrastructure so your website stays fast, secure, and online around the clock.",
  teamSignals: [
    "99.9% uptime guarantee",
    "24/7 monitoring and rapid response",
    "A dedicated team managing your infrastructure",
  ],
  valueHeadline: "Fully managed, zero hassle.",
  valueCopy:
    "Your website is only as good as the server it sits on. We provide enterprise-grade hosting with daily backups, SSL certificates, and proactive monitoring — all managed by our team.",
  trustSignals: ["99.9% uptime", "Fully managed"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Hosting services that keep you online",
  subServices: [
    {
      title: "Managed Hosting",
      description:
        "We handle server management, updates, and maintenance so you don't have to.",
    },
    {
      title: "SSL Certificates",
      description:
        "Free SSL certificates to keep your website secure and trusted by visitors.",
    },
    {
      title: "Daily Backups",
      description:
        "Automated daily backups so your data is always safe and recoverable.",
    },
    {
      title: "Uptime Monitoring",
      description:
        "24/7 monitoring to catch and resolve issues before they affect your visitors.",
    },
    {
      title: "Security Updates",
      description:
        "Regular security patches and updates to protect against vulnerabilities.",
    },
    {
      title: "CDN Setup",
      description:
        "Content delivery networks for faster load times across the globe.",
    },
  ],
  faqs: [
    {
      question: "What hosting platform do you use?",
      answer:
        "We use a combination of Vercel, AWS, and premium shared hosting depending on the project requirements and technology stack.",
    },
    {
      question: "Can you host my existing website?",
      answer:
        "Yes — we can migrate your existing website to our hosting infrastructure. We'll handle the entire migration process.",
    },
    {
      question: "What happens if my site goes down?",
      answer:
        "Our monitoring alerts us immediately if there's an issue. We respond quickly to get your site back online with minimal disruption.",
    },
  ],
};

export const support: ServiceData = {
  slug: "support",
  title: "Ongoing Support",
  metaTitle: "Ongoing Website Support | Willard",
  metaDescription:
    "Ongoing website support and maintenance to keep your site running smoothly.",
  label: "Ongoing Support",
  headline: "We're here when you need us.",
  description:
    "Your website doesn't end at launch. We provide ongoing support to keep your site secure, up-to-date, and performing at its best.",
  capabilities: [
    "Bug Fixes",
    "Content Updates",
    "Security Patches",
    "Performance Monitoring",
    "Feature Additions",
    "Priority Support",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Everline",
      title: "Ongoing website support and feature development for a skincare brand",
      tags: ["Bug Fixes", "Feature Additions", "Performance Monitoring"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/everline",
    },
    {
      year: "2024",
      client: "Northfield",
      title: "Priority support and content updates for a property developer",
      tags: ["Content Updates", "Security Patches", "Priority Support"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/northfield",
    },
    {
      year: "2023",
      client: "Kinetic Labs",
      title: "Ongoing maintenance and performance monitoring for a SaaS platform",
      tags: ["Performance Monitoring", "Bug Fixes", "Security Patches"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/kinetic-labs",
    },
  ],
  teamHeadline: "Support experts you can trust",
  teamCopy:
    "Our support team keeps your website secure, up-to-date, and performing at its best. With fast response times and a dedicated team, you always have someone to call on.",
  teamSignals: [
    "Fast response times guaranteed",
    "Flexible support packages to suit your needs",
    "A dedicated team available when you need them",
  ],
  valueHeadline: "Launch is just the beginning.",
  valueCopy:
    "Websites need ongoing care — security updates, content changes, and performance monitoring. Our support packages give you peace of mind and a team that's always available when you need them.",
  trustSignals: ["Fast response times", "Dedicated team"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Support that keeps your site at its best",
  subServices: [
    {
      title: "Bug Fixes",
      description:
        "Quick resolution of any issues or bugs that arise on your website.",
    },
    {
      title: "Content Updates",
      description:
        "Adding new content, updating pages, and making changes on your behalf.",
    },
    {
      title: "Security Patches",
      description:
        "Keeping your site secure with regular updates and vulnerability patches.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Tracking your site's speed, uptime, and core web vitals over time.",
    },
    {
      title: "Feature Additions",
      description:
        "Adding new functionality and features as your business grows.",
    },
    {
      title: "Priority Support",
      description:
        "Guaranteed response times and dedicated support for critical issues.",
    },
  ],
  faqs: [
    {
      question: "What does an ongoing support package include?",
      answer:
        "Support packages typically include a set number of hours per month for content updates, bug fixes, performance monitoring, and security patches. We'll tailor the package to your needs.",
    },
    {
      question: "How quickly do you respond to issues?",
      answer:
        "We aim to respond within 2–4 hours during business hours for standard support, with faster response times for critical issues on priority plans.",
    },
    {
      question: "Can I upgrade my support package?",
      answer:
        "Absolutely. As your site grows, you can upgrade your support package at any time to get more hours and faster response times.",
    },
  ],
};

export const ppc: ServiceData = {
  slug: "ppc",
  title: "PPC",
  metaTitle: "PPC Management Agency | Willard",
  metaDescription:
    "PPC management that drives targeted traffic and maximises your return on ad spend.",
  label: "PPC",
  headline: "Paid advertising that delivers.",
  description:
    "We manage Google Ads and paid social campaigns that drive targeted traffic to your website. Data-driven strategy, creative ads, and transparent reporting.",
  capabilities: [
    "Google Ads",
    "Social Media Ads",
    "Campaign Strategy",
    "Ad Creative",
    "Conversion Tracking",
    "A/B Testing",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Summit Outdoor",
      title: "Google Ads and social media campaign for outdoor gear retailer",
      tags: ["Google Ads", "Social Media Ads", "Conversion Tracking"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/summit-outdoor",
    },
    {
      year: "2024",
      client: "Lumin Candles",
      title: "Multi-channel PPC strategy for a luxury candle brand launch",
      tags: ["Campaign Strategy", "Ad Creative", "A/B Testing"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/lumin-candles",
    },
    {
      year: "2023",
      client: "Atelier Studios",
      title: "Lead generation campaign for a creative agency",
      tags: ["Google Ads", "Conversion Tracking", "Campaign Strategy"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/atelier-studios",
    },
  ],
  teamHeadline: "PPC experts you can trust",
  teamCopy:
    "Our PPC team creates and manages campaigns that drive targeted traffic and maximise your return on ad spend. Data-driven strategy, creative ads, and full transparency.",
  teamSignals: [
    "Transparent reporting on every campaign",
    "No long-term lock-in contracts",
    "A team of paid media specialists managing your ads",
  ],
  valueHeadline: "Every penny working hard.",
  valueCopy:
    "Paid advertising can deliver immediate results when done right. We create and manage campaigns that target the right audience, with the right message, at the right time — maximising your return on ad spend.",
  trustSignals: ["ROAS focused", "Transparent reporting"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "PPC services that maximise your ad spend",
  subServices: [
    {
      title: "Google Ads",
      description:
        "Search, display, and shopping campaigns that put your business in front of the right audience.",
    },
    {
      title: "Social Media Ads",
      description:
        "Targeted campaigns on Facebook, Instagram, LinkedIn, and TikTok.",
    },
    {
      title: "Campaign Strategy",
      description:
        "Research-driven strategies that align your paid campaigns with your business goals.",
    },
    {
      title: "Ad Creative",
      description:
        "Compelling ad copy and visuals designed to stop the scroll and drive clicks.",
    },
    {
      title: "Conversion Tracking",
      description:
        "Proper tracking setup so you know exactly what's working and what isn't.",
    },
    {
      title: "A/B Testing",
      description:
        "Continuous testing and optimisation to improve performance over time.",
    },
  ],
  faqs: [
    {
      question: "How much should I spend on PPC?",
      answer:
        "Ad budgets vary depending on your industry and goals. We'll recommend a budget based on your targets and help you get the most from every pound spent.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track conversions, cost per acquisition, return on ad spend, and other KPIs relevant to your goals. You'll receive clear monthly reports.",
    },
    {
      question: "Can you manage our existing campaigns?",
      answer:
        "Yes — we can audit and take over management of your existing campaigns, optimising them for better performance.",
    },
  ],
};

export const content: ServiceData = {
  slug: "content",
  title: "Content Writing",
  metaTitle: "Content Writing Agency | Willard",
  metaDescription:
    "Professional content writing for websites, blogs, and marketing — written to rank and engage.",
  label: "Content Writing",
  headline: "Words that work.",
  description:
    "We write clear, compelling content for websites, blogs, and marketing campaigns. SEO-optimised copy that engages your audience and drives results.",
  capabilities: [
    "Website Copywriting",
    "Blog Articles",
    "SEO Content",
    "Product Descriptions",
    "Email Campaigns",
    "Social Media Content",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Bramley Foods",
      title: "Website copy and blog content strategy for an organic food brand",
      tags: ["Website Copywriting", "Blog Articles", "SEO Content"],
      gradient: "from-gray-500 to-gray-400",
      href: "/work/bramley-foods",
    },
    {
      year: "2024",
      client: "Thorne & Ivy",
      title: "Product descriptions and email campaigns for a beauty brand",
      tags: ["Product Descriptions", "Email Campaigns", "Social Media Content"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/thorne-and-ivy",
    },
    {
      year: "2023",
      client: "Meridian",
      title: "Full website copywriting for a sustainability platform launch",
      tags: ["Website Copywriting", "SEO Content", "Blog Articles"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/meridian",
    },
  ],
  teamHeadline: "Content writers you can trust",
  teamCopy:
    "Our content team writes clear, compelling copy that engages your audience and helps your website rank. Every piece is crafted in your brand voice with SEO best practices in mind.",
  teamSignals: [
    "SEO-optimised content as standard",
    "Two rounds of revisions included",
    "A team of experienced writers across industries",
  ],
  valueHeadline: "Content with purpose.",
  valueCopy:
    "Great content does more than fill a page — it tells your story, engages your audience, and helps your website rank. We write content that serves your business goals and speaks in your brand voice.",
  trustSignals: ["SEO optimised", "Brand-aligned"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Content that engages and converts",
  subServices: [
    {
      title: "Website Copywriting",
      description:
        "Clear, persuasive website copy that communicates your value and drives action.",
    },
    {
      title: "Blog Articles",
      description:
        "Well-researched, engaging blog posts that establish authority and drive organic traffic.",
    },
    {
      title: "SEO Content",
      description:
        "Content strategically written around target keywords to improve your search rankings.",
    },
    {
      title: "Product Descriptions",
      description:
        "Compelling product copy that highlights benefits and drives purchase decisions.",
    },
    {
      title: "Email Campaigns",
      description:
        "Email copy that gets opened, read, and clicked — from welcome sequences to promotions.",
    },
    {
      title: "Social Media Content",
      description:
        "On-brand social media copy and content calendars that build engagement.",
    },
  ],
  faqs: [
    {
      question: "Do you write in our brand voice?",
      answer:
        "Yes — we'll work with your brand guidelines and tone of voice to ensure all content sounds like you. If you don't have a defined tone yet, we can help create one.",
    },
    {
      question: "Can you write for any industry?",
      answer:
        "We've written content across many industries. We research your sector thoroughly and work closely with you to ensure accuracy and authority.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "All content projects include two rounds of revisions. We find that our research and briefing process means we usually get it right the first time.",
    },
  ],
};

export const consulting: ServiceData = {
  slug: "consulting",
  title: "Consulting",
  metaTitle: "Digital Consulting | Willard",
  metaDescription:
    "Strategic digital consulting to help your business make smarter decisions online.",
  label: "Consulting",
  headline: "Strategic advice, real results.",
  description:
    "We offer strategic digital consulting to help you make informed decisions about your online presence. From audits to roadmaps, we help you plan your next move.",
  capabilities: [
    "Digital Strategy",
    "Website Audits",
    "Technology Consulting",
    "UX Reviews",
    "Competitor Analysis",
    "Roadmap Planning",
  ],
  featuredWork: [
    {
      year: "2024",
      client: "Volta Group",
      title: "Digital strategy and technology consulting for a fintech company",
      tags: ["Digital Strategy", "Technology Consulting", "Roadmap Planning"],
      gradient: "from-gray-600 to-gray-500",
      href: "/work/volta-group",
    },
    {
      year: "2024",
      client: "Piper & Elm",
      title: "Website audit and UX review for a fast-growing fashion label",
      tags: ["Website Audits", "UX Reviews", "Competitor Analysis"],
      gradient: "from-gray-400 to-gray-300",
      href: "/work/piper-and-elm",
    },
    {
      year: "2023",
      client: "Northfield",
      title: "Digital roadmap and competitor analysis for a property developer",
      tags: ["Roadmap Planning", "Competitor Analysis", "Digital Strategy"],
      gradient: "from-primary-700 to-primary-500",
      href: "/work/northfield",
    },
  ],
  teamHeadline: "Digital consultants you can trust",
  teamCopy:
    "Our consulting team brings years of experience across design, development, and marketing. We give honest, actionable advice to help you make smarter decisions about your digital presence.",
  teamSignals: [
    "Honest, impartial advice",
    "Actionable insights you can implement immediately",
    "A team of senior consultants with cross-discipline expertise",
  ],
  valueHeadline: "Expert guidance when you need it.",
  valueCopy:
    "Sometimes you don't need a full project — you need expert advice. Our consulting services give you access to our team's experience and knowledge to help you make better decisions about your digital presence.",
  trustSignals: ["Honest advice", "Actionable insights"],
  subServicesLabel: "What we can help you with",
  subServicesHeadline: "Consulting services to guide your digital strategy",
  subServices: [
    {
      title: "Digital Strategy",
      description:
        "Big-picture strategic planning for your online presence and digital growth.",
    },
    {
      title: "Website Audits",
      description:
        "Comprehensive reviews of your existing website covering UX, performance, SEO, and content.",
    },
    {
      title: "Technology Consulting",
      description:
        "Advice on the right tools, platforms, and technologies for your project.",
    },
    {
      title: "UX Reviews",
      description:
        "Expert analysis of your user experience with actionable recommendations for improvement.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Understanding what your competitors are doing online and how to differentiate.",
    },
    {
      title: "Roadmap Planning",
      description:
        "Creating a clear, prioritised plan for your digital development over the coming months.",
    },
  ],
  faqs: [
    {
      question: "What does a consulting engagement look like?",
      answer:
        "It varies — from a one-off audit and report to ongoing strategic advisory. We'll tailor the engagement to your needs and budget.",
    },
    {
      question: "Can consulting lead to a full project?",
      answer:
        "Absolutely. Many clients start with consulting to understand what they need, then move into a full design and development project with us.",
    },
    {
      question: "How is consulting priced?",
      answer:
        "Consulting is typically priced on a day rate or project basis, depending on the scope. We'll provide a clear quote after understanding your requirements.",
    },
  ],
};

// ---------------------------------------------------------------------------
// LOOKUP MAP
// ---------------------------------------------------------------------------

export const ALL_SERVICES: Record<string, ServiceData> = {
  branding,
  "web-design": webDesign,
  ecommerce,
  shopify,
  "graphic-design": graphicDesign,
  "web-development": webDevelopment,
  nextjs,
  "shopify-dev": shopifyDev,
  "headless-cms": headlessCms,
  "ecommerce-dev": ecommerceDev,
  "technical-seo": technicalSeo,
  seo,
  hosting,
  support,
  ppc,
  content,
  consulting,
};
