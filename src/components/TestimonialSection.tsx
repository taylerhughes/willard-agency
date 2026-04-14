import Image from "next/image";
import Button from "./Button";

/** Inverse corner SVG — fills top-left with concave arc */
function CornerTL({ className = "" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" />
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <div className="w-full relative">
      {/* Dark strip at top — creates the transition from the services dark bg */}
      <div className="absolute -top-12 left-0 bg-gray-600 rounded-t-3xl h-80 w-full" />

      <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
        <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="w-full flex flex-wrap">
            <div className="px-2 lg:px-3 xl:px-4 w-full relative">
              <div className="flex flex-wrap w-full relative cursor-pointer h-[60vh] md:h-[40vh] lg:h-[60vh] lg:min-h-[30rem] rounded-2xl lg:rounded-3xl overflow-hidden">

                {/* Play button — bottom left, with background image */}
                <div
                  className="absolute top-0 left-0 w-full h-full flex p-6 lg:p-10 items-end justify-start z-20 rounded-2xl lg:rounded-3xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/pete.jpg')" }}
                >
                  <div className="flex-shrink-0 rounded-full bg-primary-500 flex items-center justify-center transition-transform transform hover:scale-110 w-14 h-14 md:w-16 md:h-16">
                    <svg className="w-3 h-3 md:w-4 md:h-4" width="12" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M384 256L0 32v448l384-224z" />
                    </svg>
                  </div>
                </div>

                {/* Quote overlay — top left */}
                <div className="flex flex-col items-start absolute top-0 left-0 rounded-2xl z-20 pointer-events-none mx-2 md:m-6 lg:rounded-3xl lg:m-10">
                  <div className="relative mt-6 z-20">
                    {/* Quote mark */}
                    <div className="absolute top-0 left-3 lg:left-6 z-20">
                      <svg
                        className="text-gray-600 fill-current w-5 h-5 lg:w-8 lg:h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z" />
                      </svg>
                    </div>

                    {/* Quote text with gooey filter */}
                    <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-none tracking-tight text-gray-600 bg-white py-2 lg:py-3 gooey-content">
                      <span
                        className="pl-14 lg:pl-24 flex-shrink-0 truncate inline relative lg:pl-5"
                        style={{ zIndex: 2 }}
                      >
                        Willard went above and&nbsp;&nbsp;
                        <br />
                      </span>
                      <span
                        className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5"
                        style={{ zIndex: 1 }}
                      >
                        beyond — the end result&nbsp;&nbsp;
                        <br />
                      </span>
                      <span
                        className="flex-shrink-0 truncate inline relative pl-3 lg:pl-5"
                        style={{ zIndex: 0 }}
                      >
                        exceeded all expectations&nbsp;&nbsp;
                        <br />
                      </span>
                    </div>

                    {/* Gooey filter */}
                    <svg width="0" height="0" className="absolute hidden" colorInterpolationFilters="sRGB">
                      <defs>
                        <filter id="goo-testimonial">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  {/* Author card */}
                  <div className="w-auto relative bg-white rounded-xl z-10 rounded-t-none p-3 -mt-px lg:p-4">
                    {/* Inverse corner on right side of author card */}
                    <CornerTL className="w-8 h-8 text-white absolute right-px transform translate-x-full top-1.5 lg:top-3.5" />

                    <div className="flex items-end space-x-2 lg:space-x-3">
                      <div className="w-9 h-9 rounded-md lg:w-12 lg:h-12 lg:rounded-lg overflow-hidden relative flex-shrink-0">
                        <Image
                          src="/images/pete.jpg"
                          alt="Pete Gatenby"
                          width={48}
                          height={48}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div className="leading-tight tracking-tight">
                        <div className="text-gray-600">Pete Gatenby</div>
                        <div className="font-light text-xs lg:text-sm text-gray-400">
                          Partner, Novus Strategy &amp; Consulting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons — bottom right notch */}
                <div className="absolute bottom-0 right-0 z-30 pl-4 pt-4 flex-shrink-0 rounded-tl-2xl bg-white lg:rounded-tl-3xl">
                  {/* Inverse corners */}
                  <CornerTL className="w-10 h-10 lg:w-12 lg:h-12 text-white absolute bottom-0 left-px transform -translate-x-full rotate-180" />
                  <CornerTL className="w-10 h-10 lg:w-12 lg:h-12 text-white absolute top-px -right-px transform -translate-y-full rotate-180" />

                  <div className="inline-flex flex-col items-start lg:flex-row lg:space-x-6">
                    <Button href="/testimonials" variant="dark">
                      View more testimonials
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
