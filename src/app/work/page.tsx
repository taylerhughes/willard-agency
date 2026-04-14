"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";
import Button from "@/components/Button";

interface Project {
  title: string;
  client: string;
  year: string;
  tags: string[];
  categories: string[];
  gradient: string;
  image?: string;
  video?: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    title: "Crafting a luxury jewelry experience online",
    client: "Oriva",
    year: "2024",
    tags: ["Branding", "Shopify", "eCommerce"],
    categories: ["eCommerce", "Fashion", "B2C", "Shopify"],
    gradient: "from-amber-100 to-amber-50",
    image: "/images/oriva/4f808c241915435.696230f50abaa.webp",
    href: "/work/oriva",
  },
  {
    title: "Refreshing a global brand's digital presence",
    client: "Meridian",
    year: "2024",
    tags: ["Branding", "Website", "SEO"],
    categories: ["Corporate", "B2B"],
    gradient: "from-gray-500 to-gray-400",
    video: "/videos/0325(3) (1080p).mp4",
    href: "/work/meridian",
  },
  {
    title: "Furniture designed to the greatest extent",
    client: "Northfield",
    year: "2024",
    tags: ["Shopify", "Website"],
    categories: ["eCommerce", "B2C", "Shopify"],
    gradient: "from-primary-700 to-primary-500",
    href: "/work/northfield",
  },
  {
    title: "A workplace consultancy creating inspiring environments",
    client: "Atelier Studios",
    year: "2023",
    tags: ["Website", "SEO"],
    categories: ["Corporate", "B2B"],
    gradient: "from-gray-400 to-gray-300",
    href: "/work/atelier",
  },
  {
    title: "Redefining a leading global talent group",
    client: "Volta Group",
    year: "2024",
    tags: ["Website"],
    categories: ["Corporate", "B2B"],
    gradient: "from-gray-600 to-gray-500",
    href: "/work/volta",
  },
  {
    title: "Building an iconic fitness brand online",
    client: "Peak Performance",
    year: "2023",
    tags: ["Branding", "Shopify"],
    categories: ["Fitness", "eCommerce", "B2C", "Shopify"],
    gradient: "from-gray-500 to-gray-600",
    href: "/work/peak",
  },
  {
    title: "A fresh approach to sustainable fashion",
    client: "Verde Collective",
    year: "2024",
    tags: ["Branding", "Website", "Shopify"],
    categories: ["Fashion", "eCommerce", "B2C", "Shopify"],
    gradient: "from-primary-500 to-primary-700",
    href: "/work/verde",
  },
  {
    title: "Transforming property search nationwide",
    client: "Homestead",
    year: "2023",
    tags: ["Website", "SEO"],
    categories: ["Property", "B2C"],
    gradient: "from-gray-300 to-gray-400",
    href: "/work/homestead",
  },
  {
    title: "A digital platform for modern education",
    client: "Luminary Academy",
    year: "2024",
    tags: ["Website", "Branding"],
    categories: ["Education", "B2B"],
    gradient: "from-gray-400 to-gray-500",
    href: "/work/luminary",
  },
  {
    title: "Elevating a premium food brand",
    client: "Harvest & Co",
    year: "2023",
    tags: ["Branding", "Shopify"],
    categories: ["Food & Drink", "eCommerce", "Shopify"],
    gradient: "from-gray-500 to-gray-400",
    href: "/work/harvest",
  },
  {
    title: "Health & wellness reimagined",
    client: "Vitality Clinic",
    year: "2024",
    tags: ["Website", "SEO"],
    categories: ["Health", "B2C"],
    gradient: "from-gray-600 to-gray-400",
    href: "/work/vitality",
  },
  {
    title: "Scaling a digital agency's web presence",
    client: "Pixel & Code",
    year: "2023",
    tags: ["Website", "SEO"],
    categories: ["Agency", "B2B"],
    gradient: "from-primary-600 to-primary-500",
    href: "/work/pixel",
  },
  {
    title: "A bold rebrand for a growing startup",
    client: "Nucleus",
    year: "2024",
    tags: ["Branding", "Website"],
    categories: ["Corporate", "B2B"],
    gradient: "from-gray-500 to-gray-300",
    href: "/work/nucleus",
  },
];

const CTA_INSERT_INDEX = 8;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    PROJECTS.forEach((p) => p.categories.forEach((c) => cats.add(c)));
    return Array.from(cats);
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory]
  );

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return PROJECTS.length;
    return PROJECTS.filter((p) => p.categories.includes(cat)).length;
  };

  const leftColumn = filtered.filter((_, i) => i % 2 === 0);
  const rightColumn = filtered.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Header />
      <main>
        {/* Category filter header */}
        <section className="w-full pt-28 lg:pt-40 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Our Work
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 pb-10 lg:pb-16">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight lowercase transition-colors ${
                      activeCategory === "All"
                        ? "text-gray-600"
                        : "text-gray-200 hover:text-gray-600"
                    }`}
                  >
                    Explore all
                    <sup className="text-sm ml-1 relative -top-4 lg:-top-6 xl:-top-8">
                      {getCategoryCount("All")}
                    </sup>
                  </button>
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight lowercase transition-colors ${
                        activeCategory === cat
                          ? "text-gray-600"
                          : "text-gray-200 hover:text-gray-600"
                      }`}
                    >
                      {cat}
                      <sup className="text-sm ml-1 relative -top-4 lg:-top-6 xl:-top-8">
                        {getCategoryCount(cat)}
                      </sup>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column project grid */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="flex flex-wrap -mb-16 lg:-mb-28">
            {/* Left column */}
            <div className="w-full md:w-8/16 px-2 lg:px-3 xl:px-4">
              {leftColumn.map((project, i) => {
                const globalIndex = i * 2;
                return (
                  <div key={project.client}>
                    <ProjectCard project={project} />
                    {globalIndex === CTA_INSERT_INDEX && <CtaBlock />}
                  </div>
                );
              })}
            </div>
            {/* Right column */}
            <div className="w-full md:w-8/16 px-2 lg:px-3 xl:px-4">
              {rightColumn.map((project) => (
                <ProjectCard key={project.client} project={project} />
              ))}
            </div>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-light">
                No projects found in this category.
              </p>
            </div>
          )}
        </section>
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full mb-16 lg:mb-28">
      <Link
        href={project.href}
        className="w-full relative group flex flex-col items-start"
      >
        {/* Image with hover tags */}
        <div className="w-full relative overflow-hidden mb-6">
          {/* Tags - slide in on hover */}
          <div className="absolute -top-px pt-px -right-px z-20 bg-white pl-3 pb-3 transition-transform duration-300 transform rounded-bl-3xl xl:-translate-y-full xl:group-hover:translate-y-0">
            <div className="flex flex-wrap items-center -mb-2 lg:-mb-3 -mr-2">
              {project.tags.map((tag) => (
                <div key={tag} className="mb-2 lg:mb-3 mr-2">
                  <span className="bg-gray-50 text-gray-600 text-xs rounded-full pt-1.5 pb-1 px-3 whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="w-full rounded-2xl overflow-hidden relative bg-gray-50 lg:rounded-3xl">
            <div className="w-full relative overflow-hidden">
              <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
                <div
                  className="relative overflow-hidden w-full"
                  style={{ paddingTop: "75%" }}
                >
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover absolute top-0 left-0"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.client}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Meta: year + client */}
        <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base text-gray-400">
          <div className="font-light">{project.year}</div>
          <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full" />
          <div className="font-light">{project.client}</div>
        </div>
        {/* Title */}
        <h2 className="text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-balance pr-10">
          {project.title}
        </h2>
      </Link>
    </div>
  );
}

function CtaBlock() {
  return (
    <div className="w-full flex flex-col items-center text-center mb-16 lg:mb-28">
      <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance lg:mb-3">
        You&apos;re still here?!
      </h2>
      <p className="text-base text-gray-400 font-light leading-7 mb-5">
        You must really like us...
      </p>
      <Button href="/contact" variant="primary">
        Contact us
      </Button>
    </div>
  );
}
