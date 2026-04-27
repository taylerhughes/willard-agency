"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const SERVICES = [
  { name: "Product Design", href: "/services/product-design", image: "/images/websites.jpg" },
  { name: "Brand & Positioning", href: "/services/brand-and-positioning", image: "/images/branding.jpg" },
  { name: "Launch & GTM", href: "/services/launch-and-gtm", image: "/images/seo.jpg" },
  { name: "Fundraising-Ready", href: "/services/fundraising-materials", image: "/images/shopify.webp" },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | false>(false);

  return (
    <div className="w-full py-0">
      <div className="px-0">
        <div className="w-full py-20 lg:py-24 2xl:py-32 bg-gray-600 rounded-2xl lg:rounded-3xl">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            {/* Header */}
            <div className="w-full flex flex-wrap justify-between mb-10 lg:mb-20">
              <div className="px-2 lg:px-3 xl:px-4 w-full mb-2 lg:mb-0 lg:w-5/16">
                <div className="inline-flex items-center">
                  <div className="font-light text-sm lg:text-base text-white">
                    Our Expertise
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full lg:w-11/16">
                <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 lg:mb-0 lg:w-9/16 xl:w-10/16">
                  <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-white leading-none text-balance max-w-xl xl:indent-32">
                    How we help you get to your next round.
                  </h2>
                </div>
                <div className="px-2 lg:px-3 xl:px-4 w-full sm:w-10/16 lg:w-7/16 xl:w-6/16">
                  <p className="text-base xl:text-lg text-white font-light leading-7 mb-6 opacity-70">
                    Four capabilities, one embedded partner — from first pixel
                    to pitch deck.
                  </p>
                  <Button href="/services" variant="primary">
                    See what we do
                  </Button>
                </div>
              </div>
            </div>

            {/* Service list */}
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16 lg:ml-auto">
                {SERVICES.map((service, i) => (
                  <div
                    key={service.name}
                    className="w-full group border-b border-solid border-gray-400"
                  >
                    <Link
                      href={service.href}
                      className={`flex items-center relative w-full py-4 lg:py-6 transition-opacity duration-300 ${
                        active !== false && active !== i
                          ? "lg:opacity-30"
                          : ""
                      }`}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(false)}
                    >
                      {/* Thumbnail — shows on hover (desktop) / always visible (mobile) */}
                      <div
                        className={`w-20 relative flex-shrink-0 duration-700 bg-gray-500 rounded-xl overflow-hidden inline-flex items-center justify-center transition-all h-16 md:h-28 lg:rounded-2xl ${
                          active === i
                            ? "w-20 md:w-36"
                            : "w-20 md:w-36 lg:w-0"
                        }`}
                      >
                        <div
                          className={`w-full h-full transition-opacity ${
                            active === i
                              ? "opacity-100"
                              : "opacity-100 lg:opacity-0"
                          }`}
                        >
                          {service.video ? (
                            <video
                              className="w-full h-full object-cover absolute top-0 left-0"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={service.video} type="video/mp4" />
                            </video>
                          ) : service.image ? (
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
                          )}
                        </div>
                      </div>

                      {/* Service name */}
                      <div
                        className={`inline-flex relative transition-transform transform ${
                          active === i
                            ? "translate-x-6 delay-0"
                            : "translate-x-6 lg:translate-x-0 delay-100"
                        }`}
                      >
                        <div className="text-[8vw] lg:text-[7vw] tracking-tight text-white leading-tight text-balance">
                          {service.name}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
