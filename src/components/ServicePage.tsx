"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import type { ServiceData, FeaturedProject } from "@/content/services";
import Button from "./Button";

/* ------------------------------------------------------------------ */
/*  Check icon (tick inside circle)                                   */
/* ------------------------------------------------------------------ */
function CheckIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg
      className={`w-3 h-3 fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Featured Work Card                                                 */
/* ------------------------------------------------------------------ */
function FeaturedWorkCard({ project }: { project: FeaturedProject }) {
  return (
    <div className="w-full">
      <Link
        href={project.href}
        className="flex flex-col items-start group"
      >
        {/* Image */}
        <div className="w-full relative overflow-hidden mb-5">
          <div className="w-full relative z-10 rounded-2xl overflow-hidden bg-gray-50 lg:rounded-3xl">
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

          {/* Tags — slide in on hover */}
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
        </div>

        {/* Meta */}
        <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base text-gray-400">
          <div className="font-light">{project.year}</div>
          <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full" />
          <div className="font-light">{project.client}</div>
        </div>

        {/* Title */}
        <div className="text-lg md:text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-balance pr-8">
          {project.title}
        </div>
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Featured Work Carousel                                             */
/* ------------------------------------------------------------------ */
function FeaturedWorkCarousel({
  projects,
  label,
}: {
  projects: FeaturedProject[];
  label: string;
}) {
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
    <section className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="pl-2 sm:pl-6 xl:pl-12 2xl:pl-20">
        <div className="w-full flex flex-wrap justify-between">
          {/* Left header */}
          <div className="px-2 lg:px-3 xl:px-4 inline-flex flex-row items-end justify-between w-full mb-10 md:pr-6 lg:pr-0 lg:flex-col lg:items-start lg:justify-between lg:w-4/16 lg:mb-0">
            <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
              <div className="inline-flex items-center">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Our Work
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-xs lg:max-w-sm">
                Our favourite {label} projects
              </h2>
              <Button href="/work" variant="primary">
                View our work
              </Button>
            </div>
          </div>

          {/* Projects — draggable horizontal scroll */}
          <div className="w-full lg:w-12/16">
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
                    key={project.client}
                    className={`flex-shrink-0 w-[75vw] sm:w-[55vw] lg:w-[35vw] xl:w-[30vw] ${isDragging ? "pointer-events-none" : ""}`}
                  >
                    <FeaturedWorkCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */
function ServiceFAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full rounded-2xl bg-gray-50 mb-4 lg:rounded-3xl">
      <button
        className="flex justify-between items-center text-left cursor-pointer w-full p-6 focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg tracking-tight text-gray-600 leading-tight text-balance pr-10">
          {question}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-3 h-3 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full pl-6 pb-6 pr-6 lg:pr-28">
          <p className="text-base text-gray-400 font-light leading-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main service page layout                                           */
/* ------------------------------------------------------------------ */
export default function ServicePage({ service }: { service: ServiceData }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ============================================================ */}
      {/*  1. HERO                                                     */}
      {/* ============================================================ */}
      <section className="w-full pt-28 pb-16 lg:pt-40 lg:pb-24 xl:pt-48">
        <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="w-full flex flex-wrap justify-between">
            {/* Left — label + capabilities */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  {service.label}
                </div>
              </div>

              {/* Capabilities checklist — desktop */}
              <div className="hidden lg:block mt-6">
                <div className="text-sm font-light text-gray-400 mb-5">
                  Our {service.label} Capabilities
                </div>
                <div className="w-full">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex space-x-4 mb-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-px rounded-full flex items-center justify-center bg-gray-600">
                        <CheckIcon />
                      </div>
                      <div className="leading-snug font-light text-gray-600">
                        {cap}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — headline + description + CTA */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-8 text-balance lg:indent-48">
                {service.headline}
              </h1>
              <div className="flex flex-wrap items-start justify-between gap-8 lg:pl-48">
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-lg">
                  {service.description}
                </p>
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
              </div>
            </div>
          </div>

          {/* Capabilities — mobile only */}
          <div className="lg:hidden mt-10 px-2">
            <div className="text-sm font-light text-gray-400 mb-5">
              Our {service.label} Capabilities
            </div>
            <div className="w-full">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex space-x-4 mb-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-px rounded-full flex items-center justify-center bg-gray-600">
                    <CheckIcon />
                  </div>
                  <div className="leading-snug font-light text-gray-600">
                    {cap}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. FEATURED WORK CAROUSEL                                   */}
      {/* ============================================================ */}
      {service.featuredWork.length > 0 && (
        <FeaturedWorkCarousel
          projects={service.featuredWork}
          label={service.label}
        />
      )}

      {/* ============================================================ */}
      {/*  3. VALUE PROPOSITION — "We're the real sh*t"                */}
      {/* ============================================================ */}
      <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24">
        <div className="w-full flex flex-wrap justify-between">
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
            <div className="inline-flex items-center mb-4">
              <div className="font-light text-sm lg:text-base text-gray-600">
                Why Willard
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none mb-5 text-balance">
              {service.valueHeadline}
            </h2>
          </div>
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
            <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-8 max-w-2xl">
              {service.valueCopy}
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {service.trustSignals.map((signal) => (
                <div key={signal} className="flex space-x-4 items-center">
                  <div className="w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center bg-primary-500">
                    <CheckIcon className="text-gray-600" />
                  </div>
                  <div className="leading-snug font-light text-gray-600">
                    {signal}
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. TEAM / TRUST SECTION                                     */}
      {/* ============================================================ */}
      <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24">
        <div className="w-full flex flex-wrap justify-between">
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
            <div className="inline-flex items-center mb-4">
              <div className="font-light text-sm lg:text-base text-gray-600">
                The team
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none mb-5 text-balance">
              {service.teamHeadline}
            </h2>
          </div>
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
            {/* Team image placeholder */}
            <div className="w-full relative overflow-hidden rounded-2xl lg:rounded-3xl mb-8">
              <div
                className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200"
                style={{ paddingTop: "56.25%" }}
              />
            </div>

            <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-8 max-w-2xl">
              {service.teamCopy}
            </p>

            {/* Team trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {service.teamSignals.map((signal) => (
                <div key={signal} className="flex space-x-4 items-center">
                  <div className="w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center bg-primary-500">
                    <CheckIcon className="text-gray-600" />
                  </div>
                  <div className="leading-snug font-light text-gray-600">
                    {signal}
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="primary">
              Start a project today
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. SUB-SERVICES GRID (dark section)                         */}
      {/* ============================================================ */}
      <div className="w-full py-0">
        <div className="px-0">
          <div className="w-full py-10 lg:py-16 2xl:py-24 bg-gray-600 rounded-2xl lg:rounded-3xl">
            <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
              {/* Header */}
              <div className="w-full flex flex-wrap justify-between items-end mb-8 mt-10 lg:mt-0 lg:mb-16">
                <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-auto">
                  <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                    <div className="inline-flex items-center">
                      <div className="font-light text-sm lg:text-base text-white">
                        {service.subServicesLabel}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-white leading-none text-balance max-w-xs pr-10 lg:pr-0 lg:max-w-xl">
                      {service.subServicesHeadline}
                    </h2>
                  </div>
                </div>
                <div className="px-2 lg:px-3 xl:px-4 flex-shrink-0 w-full mt-5 lg:mt-0 lg:w-auto">
                  <Button href="/contact" variant="primary">
                    Get in touch today
                  </Button>
                </div>
              </div>

              {/* Cards grid */}
              <div className="w-full flex flex-wrap -mb-12">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.title}
                    className="px-2 lg:px-3 xl:px-4 flex w-full md:w-1/2 lg:w-1/3"
                  >
                    <div className="w-full flex flex-col items-start justify-start border-b border-solid border-gray-400 pb-8 mb-8 lg:mb-12 lg:pb-12">
                      <div className="w-full flex items-center space-x-4 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500 text-gray-600 inline-flex items-center justify-center">
                          <CheckIcon className="text-gray-600 w-4 h-4" />
                        </div>
                        <h3 className="text-xl xl:text-2xl tracking-tight text-white leading-tight text-balance">
                          {sub.title}
                        </h3>
                      </div>
                      <p className="text-base text-white font-light leading-7 opacity-70 max-w-sm">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  6. SHAMEFUL PLUG CTA                                        */}
      {/* ============================================================ */}
      <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 py-20 lg:py-24 2xl:py-32">
        <div className="w-full flex flex-wrap justify-between items-end">
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-9/16 mb-6 lg:mb-0">
            <div className="inline-flex items-center mb-4">
              <div className="font-light text-sm lg:text-base text-gray-600">
                Shameful plug
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-2xl">
              We work with start-up businesses through to global organisations.
            </h2>
          </div>
          <div className="px-2 lg:px-3 xl:px-4 flex-shrink-0">
            <Button href="/work" variant="primary">
              Join them
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. FAQ                                                       */}
      {/* ============================================================ */}
      {service.faqs.length > 0 && (
        <section className="w-full pb-20 lg:pb-24 2xl:pb-32">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              {/* Left — sticky header */}
              <div className="px-2 lg:px-3 xl:px-4 w-full mb-10 lg:mb-0 lg:w-5/16">
                <div className="w-full lg:sticky lg:top-32 lg:left-0">
                  <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                    <div className="inline-flex items-center">
                      <div className="font-light text-sm lg:text-base text-gray-600">
                        FAQs
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-lg lg:max-w-none">
                      Frequently asked {service.title.toLowerCase()} questions.
                    </h2>
                    <Button href="/contact" variant="primary">
                      Get in touch
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right — accordion */}
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16 xl:w-9/16">
                {service.faqs.map((faq, i) => (
                  <ServiceFAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={activeFaq === i}
                    onToggle={() =>
                      setActiveFaq(activeFaq === i ? null : i)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
