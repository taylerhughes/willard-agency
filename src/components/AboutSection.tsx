import Image from "next/image";
import Button from "./Button";
import LogoCarousel from "./LogoCarousel";

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ReviewBadge({
  icon,
  alt,
  rating,
}: {
  icon: string;
  alt: string;
  rating: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-3">
      <Image src={icon} alt={alt} width={24} height={24} className="w-6 h-6" />
      <div className="text-lg font-medium text-gray-600">{rating}</div>
      <div className="flex gap-0.5 text-amber-400">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="w-full">
      <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
        <div className="px-0">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 w-full flex flex-wrap justify-between">
            {/* Left label */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-4/16">
              <div className="inline-flex items-center space-x-2 mb-2 lg:mt-4">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Who are we?
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="px-2 lg:px-3 xl:px-4 flex flex-col items-start space-y-8 w-full lg:w-11/16">
              <h2 className="text-2xl md:text-[4vw] xl:text-[3vw] tracking-tight text-gray-600 leading-none text-balance lg:indent-48">
                An independent web design and branding agency set up in 2012 who
                care, build relationships, have industry experience, and win
                awards.
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <div className="mr-1 lg:mr-4">
                  <Button href="/about" variant="primary">
                    About Willard
                  </Button>
                </div>
                <div>
                  <Button href="/about" variant="text" showArrow={true}>
                    Meet the Team
                  </Button>
                </div>
              </div>

              {/* Review badges */}
              <div className="w-full">
                <p className="text-sm font-light text-gray-400 mb-3">
                  We&apos;re pretty good at it too
                </p>
                <div className="flex flex-wrap gap-3">
                  <ReviewBadge icon="/images/google.svg" alt="Google Reviews" rating="5.0" />
                  <ReviewBadge icon="/images/clutch.svg" alt="Clutch Reviews" rating="5.0" />
                </div>
              </div>
            </div>
          </div>

          {/* Logo carousel */}
          <LogoCarousel />
        </div>
      </div>
    </div>
  );
}
