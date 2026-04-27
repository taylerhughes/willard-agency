"use client";

import Button from "./Button";

/**
 * Inverse corner SVG — exact path from the original site.
 * Fills the top-left area of a 100x100 viewBox (about 51.9x51.9),
 * with a concave quarter-circle arc.
 *
 * The filled shape sits in the top-left. The arc curves from
 * top-right down to bottom-left within that filled area.
 */
function CornerTL({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" />
    </svg>
  );
}

/**
 * Inverse corner SVG — fills top-right area.
 * This is the horizontally-flipped version.
 */
function CornerTR({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-10 lg:pt-32 lg:pb-16 xl:pt-40">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="w-full relative flex flex-wrap">
          <div className="px-2 lg:px-3 xl:px-4 w-full relative">
            {/* Hero dark background */}
            <div className="w-full relative rounded-2xl overflow-hidden aspect-[9/16] md:aspect-square lg:rounded-3xl lg:aspect-video bg-gray-600">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-600)_0%,_transparent_50%)] opacity-20" />
            </div>

            {/* ===== Overlaid white panel — matches original structure ===== */}
            <div className="px-2 lg:px-3 xl:px-4 absolute -left-3 top-0 z-20 flex flex-col items-start pb-8 w-auto lg:left-20 xl:left-40">

              {/* White spacer block connecting page bg to hero overlay */}
              <div className="w-20 bg-white h-40 absolute top-0 left-5 z-10 transform -translate-x-full lg:w-44" />

              {/* Corner: right side of spacer bottom — CornerTR */}
              <CornerTR className="w-10 h-10 text-white z-30 absolute top-40 left-3 -mt-px ml-px transform -translate-x-full xl:left-4" />

              {/* Corner: left side of spacer bottom — CornerTL */}
              <CornerTL className="w-10 h-10 text-white z-30 absolute -mt-px -ml-px top-40 -left-17 xl:-left-36" />

              {/* Subtitle row */}
              <div className="w-full bg-white">
                <div className="inline-flex items-center space-x-2 relative z-20 mb-3 px-3 mt-px lg:px-6">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    An equity-aligned design studio
                  </div>
                  <div className="inline-flex origin-bottom-right">🤝</div>
                </div>
              </div>

              {/* Headline with gooey filter for smooth rounded corners */}
              <div className="w-auto relative">
                {/* Corner: top-right of headline area */}
                <CornerTL className="w-9 h-9 lg:w-10 lg:h-10 text-white z-30 absolute -mt-px -top-px right-px transform -translate-y-full translate-x-full" />

                <div className="w-auto relative">
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none tracking-tight text-gray-600 bg-white pt-16 pb-3 gooey-content">
                      <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 2 }}>
                        The design partner&nbsp;&nbsp;
                        <br />
                      </span>
                      <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 1 }}>
                        for your first&nbsp;&nbsp;
                        <br />
                      </span>
                      <span className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5" style={{ zIndex: 0 }}>
                        $0 → $1M.&nbsp;&nbsp;
                        <br />
                      </span>
                    </h1>

                    {/* Gooey SVG filter for smooth blob-like rounding on text lines */}
                    <svg width="0" height="0" className="absolute hidden" colorInterpolationFilters="sRGB">
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                          />
                          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* CTA buttons row */}
              <div className="relative bg-white rounded-b-xl pr-3 pl-3 pb-3 mt-2.5 pt-1 inline-flex lg:rounded-b-2xl lg:pt-3 lg:mt-0 lg:pr-8 lg:pl-5 lg:pb-5">
                {/* Corner: top-right of CTA row */}
                <CornerTL className="w-10 h-10 text-white z-30 absolute -top-px -mt-px -ml-px right-px transform translate-x-full" />

                {/* Corner: bottom-left of CTA row (mobile only) */}
                <CornerTL className="w-10 h-10 text-white z-40 absolute bottom-px -ml-px left-3 transform translate-y-full lg:hidden" />

                <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-7">
                  <div>
                    <Button href="/work" variant="dark">
                      See founder stories
                    </Button>
                  </div>
                  <div className="hidden lg:inline-flex">
                    <Button href="/how-we-work" variant="text" showArrow={true}>
                      How we work
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
