"use client";

import { useEffect, useRef } from "react";
import Button from "./Button";

const IMAGES = [
  "/images/aboutus/photo-1603201667493-4c2696de0b1f.avif",
  "/images/aboutus/photo-1603201667246-3c45012c6d17.avif",
  "/images/aboutus/photo-1603202662706-62ead3176b8f.avif",
  "/images/aboutus/photo-1603201667141-5a2d4c673378.avif",
  "/images/aboutus/photo-1603201667106-0e3e0ae584c5.avif",
  "/images/aboutus/photo-1603195827187-459ab02554a0.avif",
];

// Space images 12 degrees apart around the full 360° so there's always
// something visible no matter how far the arc has rotated.
const STEP = 12;
const SLOT_COUNT = Math.ceil(360 / STEP); // 30 slots

const BASE_SPEED = 0.015; // degrees per frame when idle
const SCROLL_MULTIPLIER = 0.005; // how much scroll velocity affects rotation speed
const DAMPING = 0.95; // how quickly scroll boost decays back to base speed

export default function AboutHero() {
  const arcRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const rotRef = useRef(0);
  const scrollBoost = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
      // Add scroll velocity as a boost (scrolling down = faster rotation)
      scrollBoost.current += delta * SCROLL_MULTIPLIER;
    }

    function animate() {
      // Decay the scroll boost toward zero
      scrollBoost.current *= DAMPING;
      // Combine base speed with scroll boost
      const speed = BASE_SPEED + scrollBoost.current;
      rotRef.current -= speed;
      if (arcRef.current) {
        arcRef.current.style.transform = `rotate(${rotRef.current}deg)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    animRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Fill all 360° with images by cycling through the source array
  const arcImages = Array.from({ length: SLOT_COUNT }, (_, i) => ({
    src: IMAGES[i % IMAGES.length],
    angle: i * STEP,
  }));

  return (
    <section className="w-full pt-20 lg:pt-32 xl:pt-40 relative mb-10 lg:mb-20 h-[90vh] min-h-[700px] max-h-[1000px]">
      {/* Centered heading */}
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 w-full flex flex-wrap justify-center relative z-30 -mb-10 lg:-mb-14">
        <div className="px-2 lg:px-3 xl:px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl tracking-tight text-gray-600 leading-none text-balance text-center">
            Good design <br />
            makes life better.
          </h1>
        </div>
      </div>

      {/* Arched image carousel */}
      <div className="w-full overflow-hidden pt-5 relative pointer-events-none h-[35vw]">
        <div
          ref={arcRef}
          className="relative will-change-transform"
          style={{
            width: "250vw",
            height: "250vw",
            marginLeft: "-75vw",
          }}
        >
          {arcImages.map(({ src, angle }, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 h-1/2 origin-bottom-left"
              style={{
                width: "20vw",
                transform: `rotate(${angle}deg) translateX(-50%)`,
              }}
            >
              <div className="relative overflow-hidden w-full" style={{ paddingTop: "100%" }}>
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl lg:rounded-3xl bg-gray-50"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA at bottom */}
      <div className="w-full absolute left-0 bottom-0 lg:bottom-10 xl:bottom-0">
        <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 w-full flex flex-wrap justify-center text-center">
          <div className="px-2 lg:px-3 xl:px-4">
            <Button href="#about-content" variant="primary">
              Learn about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
