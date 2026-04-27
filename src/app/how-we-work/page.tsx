"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";
import Button from "@/components/Button";

/* ------------------------------------------------------------------ */
/*  Check icon                                                         */
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
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const MODEL = [
  {
    title: "Equity up front",
    copy: "We take a small equity stake instead of full cash fees. We win when you win — and we're on the cap table to prove it.",
  },
  {
    title: "Retainer when it's earned",
    copy: "A monthly retainer is agreed on day one — and activates the moment you raise funding or start generating meaningful revenue.",
  },
  {
    title: "Fractional design lead",
    copy: "Tayler embeds as your fractional Head of Design / Product for 3–12 months. One senior partner, not a pod of juniors.",
  },
];

const FIT = [
  "Pre-seed to Series A, technical or domain-expert founders",
  "No in-house design yet — and design matters to your story",
  "You're building something real, not a side project",
  "You're OK trading a little equity for a partner who sticks around",
];

const PROCESS = [
  {
    step: "01",
    title: "Pitch us",
    copy: "Send us your deck, your repo, your wireframes — whatever you've got. We read everything.",
  },
  {
    step: "02",
    title: "Two-week fit sprint",
    copy: "We run a paid, bounded sprint to prove the partnership works before anyone signs a long-term deal.",
  },
  {
    step: "03",
    title: "Embed",
    copy: "We work as the fractional design/product lead for 3–12 months — shipping product, brand, and fundraising materials alongside the founders.",
  },
  {
    step: "04",
    title: "Handoff or keep going",
    copy: "When you hit funding or revenue, the retainer activates. If you've outgrown us, we hand off to your first in-house design hire.",
  },
];

const FAQS = [
  {
    q: "How much equity do you take?",
    a: "It depends on stage and scope. We aim for a fair stake that reflects the real value we're adding — typically less than what a full-time hire would cost in options, more than a one-off contract.",
  },
  {
    q: "What triggers the retainer?",
    a: "When you raise a funding round or start generating meaningful revenue. We keep the threshold deliberately flexible so we can agree what makes sense for your company.",
  },
  {
    q: "What if we don't hit funding or revenue?",
    a: "Then we keep the equity and part as friends. The whole point of the model is that you don't have to pay us cash you don't have.",
  },
  {
    q: "How long is an engagement?",
    a: "3–12 months typically. Long enough to ship something meaningful, short enough that we're not a permanent dependency.",
  },
  {
    q: "Can we just pay you cash?",
    a: "Yes. If the equity model doesn't fit your cap table or stage, we can do a straight retainer. But most founders at this stage find the equity model more practical.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ accordion item                                                 */
/* ------------------------------------------------------------------ */
function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
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
          {q}
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
          <p className="text-base text-gray-400 font-light leading-7">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HowWeWorkPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main>
        {/* ========================================================== */}
        {/*  HERO                                                      */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pt-32 lg:pt-40 xl:pt-48 pb-16 lg:pb-20">
          <div className="w-full flex flex-wrap">
            <div className="px-2 lg:px-3 xl:px-4 w-full flex flex-col items-center">
              <div className="flex flex-col space-y-3 lg:space-y-5 items-center text-center">
                <h1 className="inline-flex items-center space-x-2">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    How we work
                  </div>
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-tight text-gray-600 leading-none text-balance text-center max-w-3xl">
                  We invest design into startups.
                </h2>
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-xl text-balance">
                  Equity up front. Retainer when it&apos;s earned. A fractional
                  design partner embedded in your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  THE MODEL — 3 columns                                     */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-10 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  The model
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-sm">
                Three pieces. One partnership.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {MODEL.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 rounded-2xl p-6 lg:p-8 lg:rounded-3xl"
                  >
                    <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center mb-5">
                      <CheckIcon className="text-gray-600" />
                    </div>
                    <h3 className="text-lg lg:text-xl tracking-tight text-gray-600 leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-400 font-light leading-7">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  WHO WE WORK WITH                                          */}
        {/* ========================================================== */}
        <div className="w-full py-0">
          <div className="px-0">
            <div className="w-full py-16 lg:py-24 2xl:py-32 bg-gray-600 rounded-2xl lg:rounded-3xl">
              <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
                <div className="w-full flex flex-wrap justify-between">
                  <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
                    <div className="inline-flex items-center mb-4">
                      <div className="font-light text-sm lg:text-base text-white">
                        Who we work with
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-white leading-none text-balance max-w-md">
                      Founders at the scrappiest stage of the journey.
                    </h2>
                  </div>
                  <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
                    <div className="w-full">
                      {FIT.map((item) => (
                        <div key={item} className="flex space-x-4 mb-4">
                          <div className="w-5 h-5 flex-shrink-0 mt-px rounded-full flex items-center justify-center bg-primary-500">
                            <CheckIcon className="text-gray-600" />
                          </div>
                          <div className="leading-snug font-light text-white">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/*  PROCESS — 4 steps                                         */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 py-20 lg:py-24 2xl:py-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-10 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  The process
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-sm">
                Four steps from first email to handoff.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <div className="w-full">
                {PROCESS.map((step) => (
                  <div
                    key={step.step}
                    className="w-full flex items-start space-x-5 lg:space-x-8 border-b border-gray-100 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0"
                  >
                    <div className="flex-shrink-0 text-2xl lg:text-3xl tracking-tight text-primary-500 font-light">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-2xl tracking-tight text-gray-600 leading-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-400 font-light leading-7 max-w-lg">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  FAQ                                                       */}
        {/* ========================================================== */}
        <section className="w-full pb-20 lg:pb-24 2xl:pb-32">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full mb-10 lg:mb-0 lg:w-5/16">
                <div className="w-full lg:sticky lg:top-32 lg:left-0">
                  <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                    <div className="inline-flex items-center">
                      <div className="font-light text-sm lg:text-base text-gray-600">
                        FAQs
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-lg">
                      The questions founders always ask.
                    </h2>
                    <Button href="/contact" variant="primary">
                      Pitch us your startup
                    </Button>
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16 xl:w-9/16">
                {FAQS.map((f, i) => (
                  <FAQItem
                    key={i}
                    q={f.q}
                    a={f.a}
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
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
