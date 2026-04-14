"use client";

import { useCallback, useRef } from "react";

const WILLARD_QUERY = encodeURIComponent(
  "As a Marketing Director/Business Owner, I want to know what makes Willard the best partner for reinventing our brand or scaling our Website and SEO, and why their approach consistently delivers professional results. Summarise the highlights from Willard's website: https://willard.agency"
);

const AI_LINKS = [
  {
    name: "OpenAI",
    href: `https://chat.openai.com/?q=${WILLARD_QUERY}`,
    icon: (
      <svg className="w-5 h-5 fill-current lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M260.4 249.8L260.4 201.2C260.4 197.1 261.9 194 265.5 192L363.3 135.7C376.6 128 392.5 124.4 408.9 124.4C470.3 124.4 509.3 172 509.3 222.7C509.3 226.3 509.3 230.4 508.8 234.5L407.3 175.1C401.2 171.5 395 171.5 388.9 175.1L260.4 249.8zM488.7 439.2L488.7 323C488.7 315.8 485.6 310.7 479.5 307.1L351 232.4L393 208.3C396.6 206.3 399.7 206.3 403.2 208.3L501 264.7C529.2 281.1 548.1 315.9 548.1 349.7C548.1 388.6 525.1 424.5 488.7 439.3L488.7 439.3zM230.2 336.8L188.2 312.2C184.6 310.2 183.1 307.1 183.1 303L183.1 190.4C183.1 135.6 225.1 94.1 281.9 94.1C303.4 94.1 323.4 101.3 340.3 114.1L239.4 172.5C233.3 176.1 230.2 181.2 230.2 188.4L230.2 336.9L230.2 336.9zM320.6 389L260.4 355.2L260.4 283.5L320.6 249.7L380.8 283.5L380.8 355.2L320.6 389zM359.3 544.7C337.8 544.7 317.8 537.5 300.9 524.7L401.8 466.3C407.9 462.7 411 457.6 411 450.4L411 301.9L453.5 326.5C457.1 328.5 458.6 331.6 458.6 335.7L458.6 448.3C458.6 503.1 416.1 544.6 359.3 544.6L359.3 544.6zM237.8 430.5L140.1 374.2C111.9 357.8 93 323 93 289.2C93 249.8 116.6 214.4 152.9 199.6L152.9 316.3C152.9 323.5 156 328.6 162.1 332.2L290.1 406.4L248.1 430.5C244.5 432.5 241.4 432.5 237.9 430.5zM232.2 514.5C174.3 514.5 131.8 471 131.8 417.2C131.8 413.1 132.3 409 132.8 404.9L233.7 463.3C239.8 466.9 246 466.9 252.1 463.3L380.6 389.1L380.6 437.7C380.6 441.8 379.1 444.9 375.5 446.9L277.7 503.2C264.4 510.9 248.5 514.5 232.1 514.5L232.1 514.5zM359.2 575.4C421.2 575.4 472.9 531.4 484.6 473C541.9 458.1 578.8 404.4 578.8 349.6C578.8 313.8 563.4 278.9 535.8 253.9C538.4 243.1 539.9 232.4 539.9 221.6C539.9 148.4 480.5 93.6 411.9 93.6C398.1 93.6 384.8 95.6 371.5 100.3C348.5 77.8 316.7 63.4 281.9 63.4C219.9 63.4 168.2 107.4 156.5 165.8C99.2 180.6 62.3 234.4 62.3 289.2C62.3 325 77.7 359.9 105.3 384.9C102.7 395.7 101.2 406.4 101.2 417.2C101.2 490.4 160.6 545.2 229.2 545.2C243 545.2 256.3 543.2 269.6 538.5C292.6 561 324.4 575.4 359.2 575.4z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${WILLARD_QUERY}`,
    icon: (
      <svg className="w-5 h-5 fill-current lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M164.4 404.5L265.1 348L266.8 343.1L265.1 340.4L260.2 340.4L243.4 339.4L185.9 337.8L136 335.7L87.7 333.1L75.5 330.5L64.1 315.5L65.3 308L75.5 301.1L90.2 302.4C109.1 303.7 136.1 305.5 171.2 308L206.4 310.1L258.6 315.5L266.9 315.5L268.1 312.1L265.3 310L263.1 307.9L212.8 273.8L158.4 237.8L129.9 217.1L114.5 206.6L106.7 196.8L103.3 175.3L117.3 159.9L136.1 161.2L140.9 162.5L159.9 177.2L200.6 208.7L253.7 247.8L261.5 254.3L264.6 252.1L265 250.5L261.5 244.7L232.6 192.5L201.8 139.4L188.1 117.4L184.5 104.2C183.2 98.8 182.3 94.2 182.3 88.7L198.2 67.1L207 64.3L228.2 67.1L237.1 74.9L250.3 105.1L271.7 152.6L304.9 217.2L314.6 236.4L319.8 254.2L321.7 259.6L325.1 259.6L325.1 256.5L327.8 220.1L332.8 175.4L337.7 117.9L339.4 101.7L347.4 82.3L363.3 71.8L375.7 77.7L385.9 92.4L384.5 101.9L378.4 141.4L366.5 203.3L358.7 244.8L363.2 244.8L368.4 239.6L389.4 211.8L424.6 167.7L440.1 150.2L458.2 130.9L469.8 121.7L491.8 121.7L508 145.8L500.7 170.7L478 199.4L459.2 223.8L432.2 260.1L415.4 289.1L417 291.4L421 291L481.9 278L514.8 272.1L554.1 265.4L571.9 273.7L573.8 282.1L566.8 299.3L524.8 309.7L475.6 319.5L402.3 336.8L401.4 337.5L402.4 338.8L435.4 341.9L449.5 342.7L484.1 342.7L548.5 347.5L565.3 358.6L575.4 372.2L573.7 382.6L547.8 395.8C532.3 392.1 493.4 382.9 431.2 368.1L403.2 361.1L399.3 361.1L399.3 363.4L422.6 386.2L465.3 424.8L518.8 474.6L521.5 486.9L514.6 496.6L507.3 495.6L460.3 460.2L442.2 444.3L401.1 409.7L398.4 409.7L398.4 413.3L407.9 427.2L457.9 502.4L460.5 525.4L456.9 532.9L443.9 537.4L429.7 534.8L400.4 493.7L370.2 447.4L345.8 405.9L342.8 407.6L328.4 562.4L321.7 570.3L306.2 576.2L293.2 566.4L286.3 550.5L293.2 519L301.5 477.9L308.2 445.2L314.3 404.6L317.9 391.1L317.7 390.2L314.7 390.6L284.1 432.6L237.6 495.5L200.8 534.9L192 538.4L176.7 530.5L178.1 516.4L186.6 503.8L237.5 439L268.2 398.8L288 375.6L287.9 372.2L286.7 372.2L151.4 460L127.3 463.1L116.9 453.4L118.2 437.5L123.1 432.3L163.8 404.3L163.7 404.4L163.7 404.5z" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: `https://www.google.com/search?udm=50&aep=11&q=${WILLARD_QUERY}`,
    icon: (
      <svg className="w-5 h-5 fill-current lg:w-6 lg:h-6" width="67" height="67" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
        <path d="M33.2 10.75c-.74 12.07-10.61 21.73-22.95 22.46v.08c12.34.73 22.21 10.39 22.96 22.46h.08c.75-12.07 10.62-21.73 22.96-22.46v-.08c-12.34-.73-22.21-10.39-22.96-22.46z" />
      </svg>
    ),
  },
  {
    name: "Grok",
    href: `https://x.com/i/grok?text=${WILLARD_QUERY}`,
    icon: (
      <svg className="w-5 h-5 fill-current lg:w-6 lg:h-6" width="67" height="67" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
        <path d="m27.94 39.4 15.74-11.6c.77-.57 1.87-.35 2.24.54A12.88 12.88 0 0 1 29.04 45.2l-5.35 2.47c7.67 5.23 16.99 3.94 22.8-1.88a17.5 17.5 0 0 0 4.72-16.55l.01.01c-1.94-8.32.48-11.64 5.43-18.45l.35-.48-6.51 6.5v-.02zM24.69 42.21c-5.51-5.25-4.56-13.37.14-18.05a13.2 13.2 0 0 1 14.14-2.8l5.33-2.46a17.75 17.75 0 0 0-22.85 1.9A17.8 17.8 0 0 0 17.58 40c2.02 4.88-1.28 8.34-4.61 11.83-1.18 1.24-2.37 2.48-3.32 3.79z" />
      </svg>
    ),
  },
];

const SCATTERED_IMAGES = [
  "/images/aboutus/photo-1603201667493-4c2696de0b1f.avif",
  "/images/aboutus/photo-1603201667246-3c45012c6d17.avif",
  "/images/aboutus/photo-1603202662706-62ead3176b8f.avif",
  "/images/aboutus/photo-1603201667141-5a2d4c673378.avif",
  "/images/aboutus/photo-1603201667106-0e3e0ae584c5.avif",
  "/images/aboutus/photo-1603195827187-459ab02554a0.avif",
];

function ScatteredImage({
  className,
  src,
  aspect = "66.75%",
  innerRef,
}: {
  className: string;
  src: string;
  aspect?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className={`absolute transform pointer-events-none inline-flex ${className}`}>
      <div ref={innerRef} className="w-full transition-transform duration-100 ease-out will-change-transform">
        <div className="w-full overflow-hidden relative rounded-xl lg:rounded-2xl">
          <div className="relative overflow-hidden w-full" style={{ paddingTop: aspect }}>
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AiSection() {
  const img0 = useRef<HTMLDivElement>(null);
  const img1 = useRef<HTMLDivElement>(null);
  const img2 = useRef<HTMLDivElement>(null);
  const img3 = useRef<HTMLDivElement>(null);
  const img4 = useRef<HTMLDivElement>(null);
  const img5 = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = e.clientX - window.innerWidth / 2;
    const cy = e.clientY - window.innerHeight / 2;
    const factor = 0.02;

    // Alternate directions for depth
    [img0, img2, img4].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
      }
    });
    [img1, img3, img5].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${cx * -factor}px, ${cy * -factor}px)`;
      }
    });
  }, []);

  return (
    <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-0">
        <div
          className="w-full h-[70vh] lg:h-[60vh] relative flex flex-wrap justify-center"
          onMouseMove={handleMouseMove}
        >
          {/* Scattered background images */}
          <ScatteredImage
            className="top-2/3 -left-10 w-24 md:w-40 2xl:w-60"
            src={SCATTERED_IMAGES[0]}
            innerRef={img0}
          />
          <ScatteredImage
            className="left-4 top-10 lg:top-20 lg:left-20 w-20 md:w-56 2xl:w-80"
            src={SCATTERED_IMAGES[1]}
            innerRef={img1}
          />
          <ScatteredImage
            className="bottom-0 left-1/3 hidden lg:flex w-14 lg:w-24 2xl:w-40"
            src={SCATTERED_IMAGES[2]}
            innerRef={img2}
          />
          <ScatteredImage
            className="bottom-10 right-1/3 lg:right-40 lg:top-0 w-32 md:w-40 2xl:w-60"
            src={SCATTERED_IMAGES[3]}
            innerRef={img3}
          />
          <ScatteredImage
            className="right-4 bottom-0 lg:right-10 lg:bottom-0 w-20 md:w-40"
            src={SCATTERED_IMAGES[4]}
            innerRef={img4}
          />
          <ScatteredImage
            className="right-4 -top-8 lg:top-auto lg:right-60 lg:bottom-20 w-20 md:w-28"
            src={SCATTERED_IMAGES[5]}
            aspect="150%"
            innerRef={img5}
          />

          {/* Centered content */}
          <div className="px-2 lg:px-3 xl:px-4 w-full h-full flex flex-col space-y-6 justify-center items-center text-center">
            <div className="flex flex-col space-y-3 lg:space-y-5 items-center text-center">
              <div className="inline-flex items-center">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Don&apos;t believe the hype?
                </div>
              </div>
              <h1 className="text-2xl md:text-[7vw] lg:text-[5vw] tracking-tight text-gray-600 leading-[0.9] text-balance">
                See what AI has
                <br />
                to say about us
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 px-10 lg:gap-2">
              {AI_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-x-1.5 pl-3 pr-5 py-1.5 bg-primary-500 text-gray-600 rounded-full text-sm lg:text-base transition-colors duration-300 hover:bg-gray-600 hover:text-white"
                >
                  {link.icon}
                  <div className="mt-0.5">{link.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
