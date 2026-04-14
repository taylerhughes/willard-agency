"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import type { CaseStudyData, ContentBlock } from "@/content/caseStudies";
import Button from "./Button";

/* ------------------------------------------------------------------ */
/*  Content block renderers                                            */
/* ------------------------------------------------------------------ */

function TextBlock({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body: string;
}) {
  return (
    <div className="py-10 lg:py-16 2xl:py-24">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="w-full flex flex-wrap justify-between">
          <div className="px-2 lg:px-3 xl:px-4 relative w-full mb-5 lg:mb-0 lg:w-6/16 xl:w-7/16">
            <div className="inline-flex items-center space-x-2 w-auto mb-3 xl:mb-0 xl:absolute xl:top-3 xl:left-4">
              <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
              <div className="font-light text-sm lg:text-base text-gray-600">
                {label}
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance xl:indent-32">
              {heading}
            </h2>
          </div>
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-8/16">
            <p className="text-base xl:text-lg text-gray-400 font-light leading-7 lg:pr-10">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullImageBlock({ gradient, image }: { gradient: string; image?: string }) {
  return (
    <div className="py-4">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="px-2 lg:px-3 xl:px-4 w-full">
          <div
            className={`bg-gray-50 w-full rounded-2xl overflow-hidden lg:rounded-3xl`}
          >
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {image ? (
                <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaddedImageBlock({ gradient, image }: { gradient: string; image?: string }) {
  return (
    <div className="py-4">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="px-2 lg:px-3 xl:px-4 w-full">
          <div className="bg-gray-50 rounded-2xl overflow-hidden p-4 md:p-16 lg:rounded-3xl 2xl:p-28">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {image ? (
                <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwoImagesBlock({
  gradient1,
  gradient2,
  image1,
  image2,
}: {
  gradient1: string;
  gradient2: string;
  image1?: string;
  image2?: string;
}) {
  return (
    <div className="py-4">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="w-full flex flex-wrap -mb-5 md:mb-0">
          <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 md:mb-0 md:w-6/12">
            <div className="w-full h-full relative overflow-hidden rounded-2xl bg-gray-50 lg:rounded-3xl">
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                {image1 ? (
                  <img src={image1} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient1}`} />
                )}
              </div>
            </div>
          </div>
          <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 md:mb-0 md:w-6/12">
            <div className="w-full h-full relative overflow-hidden rounded-2xl bg-gray-50 lg:rounded-3xl">
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                {image2 ? (
                  <img src={image2} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient2}`} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "text":
      return (
        <TextBlock
          key={index}
          label={block.label}
          heading={block.heading}
          body={block.body}
        />
      );
    case "fullImage":
      return <FullImageBlock key={index} gradient={block.gradient} image={block.image} />;
    case "paddedImage":
      return <PaddedImageBlock key={index} gradient={block.gradient} image={block.image} />;
    case "twoImages":
      return (
        <TwoImagesBlock
          key={index}
          gradient1={block.gradient1}
          gradient2={block.gradient2}
          image1={block.image1}
          image2={block.image2}
        />
      );
  }
}

/* ------------------------------------------------------------------ */
/*  More Work carousel                                                 */
/* ------------------------------------------------------------------ */

interface RelatedProject {
  slug: string;
  client: string;
  year: string;
  headline: string;
  tags: string[];
  gradient: string;
}

function MoreWorkCarousel({ projects }: { projects: RelatedProject[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="w-full py-20 lg:py-24 2xl:py-32">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 w-full flex flex-wrap justify-between items-end mb-10">
        <div className="px-2 lg:px-3 xl:px-4 w-14/16 lg:w-auto">
          <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
            <div className="inline-flex items-center space-x-2">
              <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
              <div className="font-light text-sm lg:text-base text-gray-600">
                More good stuff
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tight text-gray-600 leading-none text-balance max-w-xs">
              What next?
            </h2>
          </div>
        </div>
        <div className="px-2 lg:px-3 xl:px-4 w-full mt-3 lg:w-auto lg:mt-0">
          <Button href="/work" variant="primary">
            Browse more Work
          </Button>
        </div>
      </div>

      <div className="pl-2 sm:pl-6 xl:pl-12 2xl:pl-20">
        <div
          ref={scrollRef}
          className={`w-full overflow-x-auto scrollbar-hide ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-4 lg:gap-6 pr-4 sm:pr-6 xl:pr-12 2xl:pr-20">
            {projects.map((project) => (
              <div
                key={project.slug}
                className={`flex-shrink-0 w-[75vw] sm:w-[55vw] lg:w-[35vw] xl:w-[30vw] ${isDragging ? "pointer-events-none" : ""}`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="flex flex-col items-start group"
                >
                  {/* Image with hover tags */}
                  <div className="w-full relative overflow-hidden mb-6">
                    <div className="absolute -top-px pt-px -right-px z-20 bg-white pl-3 pb-3 transition-transform duration-300 transform rounded-bl-3xl xl:-translate-y-full xl:group-hover:translate-y-0">
                      <div className="flex flex-wrap items-center -mb-2 lg:-mb-3 -mr-2">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="bg-gray-50 leading-tight rounded-full mr-2 mb-2 lg:mr-3 lg:mb-3 text-sm pt-2 pb-1.5 px-4"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden relative bg-gray-50 lg:rounded-3xl">
                      <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
                        <div
                          className="relative overflow-hidden w-full"
                          style={{ paddingTop: "75%" }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base text-gray-400">
                    <div className="font-light">{project.year}</div>
                    <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full" />
                    <div className="font-light">{project.client}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-balance pr-10">
                    {project.headline}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main case study page                                               */
/* ------------------------------------------------------------------ */

export default function CaseStudyPage({
  caseStudy,
  relatedProjects,
}: {
  caseStudy: CaseStudyData;
  relatedProjects: RelatedProject[];
}) {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="w-full pt-28 lg:pt-40 mb-3 lg:mb-20">
        <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
          {/* Header area: tags + title */}
          <div className="w-full flex flex-wrap justify-between items-start relative z-20 mb-5 lg:mb-10">
            {/* Tags — desktop left */}
            <div className="px-2 lg:px-3 xl:px-4 w-full mb-2 hidden lg:flex lg:mb-0 lg:w-6/16">
              <div className="flex flex-wrap items-center mb-3 lg:mb-20">
                {caseStudy.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-gray-50 leading-tight rounded-full mr-2 mb-2 lg:mr-3 lg:mb-3 text-sm pt-2 pb-1.5 px-4 lg:text-base"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Title area */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <div className="relative bg-white lg:px-10 lg:pb-5 lg:pt-0">
                <div className="flex items-center space-x-3 mb-3 xl:mb-5 text-sm lg:text-base">
                  <div className="font-light">{caseStudy.year}</div>
                  <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full" />
                  <div className="font-light">{caseStudy.client}</div>
                </div>
                <h1 className="text-3xl lg:text-[4vw] tracking-tight text-gray-600 leading-none text-balance">
                  {caseStudy.headline}
                </h1>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="px-2 lg:px-3 xl:px-4 w-full relative">
            <div className="w-full relative">
              {/* Tags — mobile overlay */}
              <div className="absolute top-0 -right-px z-20 bg-white pl-3 pb-3 rounded-bl-3xl lg:hidden">
                <div className="flex flex-wrap items-center -mb-2 -mr-2">
                  {caseStudy.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-gray-50 leading-tight rounded-full mr-2 mb-2 text-sm pt-2 pb-1.5 px-4"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full overflow-hidden bg-gray-50 relative z-10 rounded-2xl lg:rounded-3xl lg:-mt-24 xl:-mt-28">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  {caseStudy.heroImage ? (
                    <img
                      src={caseStudy.heroImage}
                      alt={caseStudy.client}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${caseStudy.heroGradient}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BRIEF                                                       */}
      {/* ============================================================ */}
      <section className="w-full pb-10 lg:pb-16 2xl:pb-24">
        <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="flex flex-wrap items-start justify-between relative z-10">
            {/* Left — sub-headline */}
            <div className="px-2 lg:px-3 xl:px-4 relative w-full flex flex-wrap lg:mb-0 lg:w-9/16">
              <div>
                <h2 className="mb-3 text-pretty tracking-tight text-gray-600 text-xl md:text-3xl xl:text-4xl leading-none lg:pr-16">
                  {caseStudy.subHeadline}
                </h2>
              </div>
            </div>

            {/* Right — description + metadata */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-7/16">
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 xl:pr-10">
                {caseStudy.description}
              </p>

              {/* Metadata grid */}
              <div className="w-full max-w-2xl mt-6 flex flex-wrap justify-between pr-6 lg:mt-10 lg:pr-0">
                <div className="mb-3 pr-8 lg:mb-0">
                  <div className="text-sm text-gray-400 font-light">
                    Client
                  </div>
                  <div className="text-base lg:text-lg xl:text-xl">
                    {caseStudy.client}
                  </div>
                </div>
                <div className="mb-3 pr-8 lg:mb-0">
                  <div className="text-sm text-gray-400 font-light">
                    Industry
                  </div>
                  <div className="text-base lg:text-lg xl:text-xl">
                    {caseStudy.industry}
                  </div>
                </div>
                <div className="pr-8 lg:mb-0">
                  <div className="text-sm text-gray-400 font-light">
                    Duration
                  </div>
                  <div className="text-base lg:text-lg xl:text-xl">
                    {caseStudy.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTENT BLOCKS                                              */}
      {/* ============================================================ */}
      {caseStudy.contentBlocks.map((block, i) => renderBlock(block, i))}

      {/* ============================================================ */}
      {/*  MORE WORK                                                   */}
      {/* ============================================================ */}
      {relatedProjects.length > 0 && (
        <MoreWorkCarousel projects={relatedProjects} />
      )}
    </main>
  );
}
