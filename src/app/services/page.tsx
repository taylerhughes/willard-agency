import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import TickerCTA from "@/components/TickerCTA";
import Link from "next/link";
import { ALL_SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "What we do | Willard",
  description:
    "Four capabilities, one embedded partner — from first pixel to pitch deck. Willard is an equity-aligned design studio for early-stage startups.",
};

/* ------------------------------------------------------------------ */
/*  Arrow icon                                                         */
/* ------------------------------------------------------------------ */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ServicesPage() {
  const services = Object.values(ALL_SERVICES);

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
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center mb-4">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    What we do
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-8 text-balance lg:indent-48">
                  Four capabilities. One embedded partner.
                </h1>
                <div className="flex flex-wrap items-start justify-between gap-8 lg:pl-48">
                  <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-lg">
                    From first pixel to pitch deck — we cover the full founder
                    surface as your fractional design and product lead. Take us
                    on for one capability, or all four.
                  </p>
                  <Button href="/contact" variant="primary">
                    Pitch us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  SERVICE CARDS — 4 big cards                               */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative block bg-gray-50 rounded-2xl p-6 lg:p-10 lg:rounded-3xl transition-all hover:bg-primary-500"
              >
                <div className="flex items-start justify-between mb-10 lg:mb-16">
                  <span className="text-sm font-light text-gray-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center transform transition-transform group-hover:rotate-45">
                    <ArrowIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-tight mb-4 text-balance">
                  {service.label}
                </h2>
                <p className="text-base text-gray-400 font-light leading-7 max-w-md mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap}
                      className="text-xs lg:text-sm bg-white text-gray-600 rounded-full px-3 py-1"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/*  HOW WE WORK TEASER                                        */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between items-end">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-9/16 mb-6 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  The model
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-2xl">
                Equity up front. Retainer when you raise or start earning
                revenue.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 flex-shrink-0">
              <Button href="/how-we-work" variant="primary">
                How we work
              </Button>
            </div>
          </div>
        </section>
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
