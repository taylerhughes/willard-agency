"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";
import Button from "@/components/Button";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TEAM = [
  { name: "Alex Carter", role: "Co-Founder & Creative Director", initials: "AC", color: "bg-primary-500" },
  { name: "Jordan Mills", role: "Co-Founder & Technical Lead", initials: "JM", color: "bg-gray-600" },
  { name: "Sam Reeves", role: "Senior Designer", initials: "SR", color: "bg-gray-400" },
  { name: "Taylor Hughes", role: "Lead Developer", initials: "TH", color: "bg-primary-500" },
  { name: "Morgan Blake", role: "Project Manager", initials: "MB", color: "bg-gray-600" },
  { name: "Casey Lin", role: "UI/UX Designer", initials: "CL", color: "bg-gray-400" },
  { name: "Riley Scott", role: "Frontend Developer", initials: "RS", color: "bg-primary-500" },
  { name: "Jamie Parker", role: "SEO Strategist", initials: "JP", color: "bg-gray-600" },
  { name: "Drew Lawson", role: "Content Writer", initials: "DL", color: "bg-gray-400" },
  { name: "Avery Chen", role: "Motion Designer", initials: "AV", color: "bg-primary-500" },
];

const STATS = [
  { number: "120+", label: "Clients", description: "Businesses we've partnered with since day one." },
  { number: "94%", label: "Referrals", description: "Of our clients come through word of mouth." },
  { number: "10", label: "Team members", description: "Small team, big ambitions." },
  { number: "12", label: "Years", description: "Crafting digital experiences since 2012." },
];

const VALUES = [
  { title: "Craft over quantity", body: "We'd rather do fewer things brilliantly than many things averagely. Every project gets our full attention." },
  { title: "Honest by default", body: "We tell you what you need to hear, not what you want to hear. It's how we build trust." },
  { title: "Collaboration first", body: "We work with you, not for you. The best results come from genuine partnership." },
  { title: "Always learning", body: "The web moves fast. We stay curious, experiment constantly, and bring fresh thinking to every brief." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* ========================================================== */}
        {/*  HERO                                                      */}
        {/* ========================================================== */}
        <section className="w-full pt-28 pb-16 lg:pt-40 lg:pb-24 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-4 lg:mb-0">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    About us
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-8 text-balance lg:indent-48">
                  Good design makes life better.
                </h1>
                <div className="flex flex-wrap items-start justify-between gap-8 lg:pl-48">
                  <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-lg">
                    We&apos;re a digital agency with expertise in web design,
                    branding, eCommerce, and SEO. We help businesses grow their
                    online presence with thoughtful design and strategic
                    thinking.
                  </p>
                  <Button href="/contact" variant="primary">
                    Start a project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  ABOUT COPY                                                */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-6 lg:mb-0">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Who we are
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                Expert designers &amp; developers you can trust.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-6 max-w-2xl">
                Willard is a small, focused digital agency. We specialise in
                brand identity, web design, eCommerce, and SEO &mdash; working
                with businesses of all sizes, from startups to established
                brands looking to level up their digital presence.
              </p>
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-8 max-w-2xl">
                We keep our team small on purpose. It means every client gets
                senior-level attention, and every project is led by people who
                genuinely care about the outcome. No account managers, no
                juniors learning on your budget &mdash; just experienced
                designers and developers doing what they do best.
              </p>
              <Button href="/work" variant="primary">
                See our work
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  TEAM GRID                                                 */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Our Team
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                Multiple personalities, no egos.
              </h2>
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-sm">
                A tight-knit team of designers, developers, and strategists who
                love what they do.
              </p>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                {TEAM.map((member) => (
                  <div key={member.name} className="group">
                    <div
                      className={`w-full aspect-square rounded-2xl lg:rounded-3xl ${member.color} flex items-center justify-center mb-3 transition-transform duration-300 xl:group-hover:scale-95`}
                    >
                      <span className="text-white text-2xl lg:text-3xl font-light tracking-tight">
                        {member.initials}
                      </span>
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 leading-tight">
                      {member.name}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400 font-light">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  STATS                                                     */}
        {/* ========================================================== */}
        <div className="w-full py-0">
          <div className="px-0">
            <div className="w-full py-16 lg:py-24 2xl:py-32 bg-gray-600 rounded-2xl lg:rounded-3xl">
              <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
                <div className="w-full flex flex-wrap justify-between items-end mb-10 lg:mb-16">
                  <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-auto">
                    <div className="inline-flex items-center space-x-2 mb-4">
                      <div className="bg-white w-1.5 h-1.5 rounded-full" />
                      <div className="font-light text-sm lg:text-base text-white">
                        By the numbers
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-white leading-none text-balance max-w-md">
                      Small team, big results.
                    </h2>
                  </div>
                </div>
                <div className="w-full flex flex-wrap">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="px-2 lg:px-3 xl:px-4 w-1/2 lg:w-1/4 mb-8 lg:mb-0"
                    >
                      <div className="border-t border-gray-400 pt-6">
                        <div className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-none mb-2">
                          {stat.number}
                        </div>
                        <div className="text-base lg:text-lg text-white mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-white font-light opacity-60">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/*  TESTIMONIAL                                               */}
        {/* ========================================================== */}
        <TestimonialSection />

        {/* ========================================================== */}
        {/*  VALUES                                                    */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full mb-10 lg:mb-0 lg:w-5/16">
              <div className="w-full lg:sticky lg:top-32 lg:left-0">
                <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                  <div className="inline-flex items-center space-x-2">
                    <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                    <div className="font-light text-sm lg:text-base text-gray-600">
                      Our values
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-lg lg:max-w-none">
                    What we believe in.
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16 xl:w-9/16">
              {VALUES.map((value, i) => (
                <div
                  key={value.title}
                  className="w-full rounded-2xl bg-gray-50 mb-4 lg:rounded-3xl"
                >
                  <button
                    className="flex justify-between items-center text-left cursor-pointer w-full p-6 focus:outline-none"
                    onClick={() =>
                      setActiveValue(activeValue === i ? null : i)
                    }
                  >
                    <h3 className="text-lg tracking-tight text-gray-600 leading-tight text-balance pr-10">
                      {value.title}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        activeValue === i ? "rotate-180" : ""
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
                      activeValue === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="w-full pl-6 pb-6 pr-6 lg:pr-28">
                      <p className="text-base text-gray-400 font-light leading-7">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  SHAMEFUL PLUG CTA                                         */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between items-end">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-9/16 mb-6 lg:mb-0">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Shameful plug
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-2xl">
                We work with start-up businesses through to global
                organisations.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 flex-shrink-0">
              <Button href="/work" variant="primary">
                Join them
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  BLOG                                                      */}
        {/* ========================================================== */}
        <BlogSection />
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
