"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TickerCTA() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const pos1Ref = useRef(0);
  const pos2Ref = useRef(0);
  const animRef = useRef<number>(0);
  const initRef = useRef(false);

  useEffect(() => {
    const speed = 1.5;

    function animate() {
      // Row 1 — scrolls left
      if (row1Ref.current) {
        const halfWidth = row1Ref.current.scrollWidth / 2;
        pos1Ref.current += speed;
        if (pos1Ref.current >= halfWidth) pos1Ref.current = 0;
        row1Ref.current.style.transform = `translateX(-${pos1Ref.current}px)`;
      }

      // Row 2 — scrolls right (starts offset, moves opposite)
      if (row2Ref.current) {
        const halfWidth = row2Ref.current.scrollWidth / 2;
        // Initialize starting position once
        if (!initRef.current) {
          pos2Ref.current = halfWidth / 2;
          initRef.current = true;
        }
        pos2Ref.current -= speed;
        if (pos2Ref.current <= 0) pos2Ref.current = halfWidth;
        row2Ref.current.style.transform = `translateX(-${pos2Ref.current}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const text = "Let's work together.";

  return (
    <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-0 overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div ref={row1Ref} className="flex will-change-transform">
          {[...Array(4)].map((_, i) => (
            <div key={`r1-${i}`} className="px-2 lg:px-3 xl:px-4 inline-flex flex-shrink-0 w-auto">
              <Link href="/contact" className="inline-flex flex-shrink-0">
                <div className="text-[20vw] md:text-[11vw] lg:text-[10vw] tracking-tight text-gray-600 leading-tight whitespace-nowrap">
                  {text}
                </div>
                <div className="ml-4 mt-2 w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center md:mt-4 lg:mt-3 lg:w-24 lg:h-24 xl:hidden">
                  <svg className="w-7 h-7 fill-current lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M344 96c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.3L45.7 413.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 112H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h240z" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div ref={row2Ref} className="flex will-change-transform">
          {[...Array(4)].map((_, i) => (
            <div key={`r2-${i}`} className="px-2 lg:px-3 xl:px-4 inline-flex flex-shrink-0 w-auto">
              <Link href="/contact" className="inline-flex flex-shrink-0">
                <div className="text-[20vw] md:text-[11vw] lg:text-[10vw] tracking-tight text-gray-600 leading-tight whitespace-nowrap">
                  {text}
                </div>
                <div className="ml-4 mt-2 w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center md:mt-4 lg:mt-3 lg:w-24 lg:h-24 xl:hidden">
                  <svg className="w-7 h-7 fill-current lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M344 96c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.3L45.7 413.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 112H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h240z" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
