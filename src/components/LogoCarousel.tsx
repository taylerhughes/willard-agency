"use client";

import { useEffect, useRef } from "react";

interface Logo {
  name: string;
  src?: string;
  type?: "svg" | "png";
}

const LOGOS: Logo[] = [
  { name: "NSPCC", src: "/images/logos/NSPCC_official_logo.svg", type: "svg" },
  { name: "Sudystream", src: "/images/logos/Normal/Logo Horizontal.svg", type: "svg" },
  { name: "Y Combinator", src: "/images/logos/Y_Combinator_logo.svg", type: "svg" },
  { name: "Colchester Zoo", src: "/images/logos/idzgo2ct08_logos.png", type: "png" },
  { name: "GatherGov", src: "/images/logos/logo_gathergov.c0e21066.svg", type: "svg" },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="w-full flex justify-center items-center py-5">
      <img
        src={logo.src}
        alt={logo.name}
        className="h-8 lg:h-10 w-auto max-w-[180px] object-contain opacity-40 grayscale"
        loading="lazy"
      />
    </div>
  );
}

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5;

    function animate() {
      if (!container) return;
      positionRef.current += speed;

      const halfWidth = container.scrollWidth / 2;
      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }

      container.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Blur edges */}
      <div className="hidden xl:block absolute top-0 left-0 w-40 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="hidden xl:block absolute top-0 right-0 w-40 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div className="w-full relative z-0 mt-10 -mb-5 lg:mt-16 xl:w-15/16 mx-auto">
        <div ref={scrollRef} className="flex will-change-transform">
          {/* Render logos twice for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 px-10 lg:px-14 xl:px-20"
              style={{ minWidth: "240px" }}
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
