import Link from "next/link";
import Button from "./Button";
import { ALL_CASE_STUDIES, type CaseStudyData } from "@/content/caseStudies";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

interface Project {
  year: string;
  client: string;
  title: string;
  tags: string[];
  image: string;
  video?: string;
  href: string;
}

/** Convert a CaseStudyData entry into the shape the card needs. */
function toProject(cs: CaseStudyData): Project {
  return {
    year: cs.year,
    client: cs.client,
    title: cs.headline,
    tags: cs.tags,
    image: cs.heroGradient,
    video: cs.heroVideo,
    href: `/work/${cs.slug}`,
  };
}

/**
 * Pick `count` case studies from the pool.
 *
 * - If `keyword` is provided, case studies whose tags, client name, or
 *   industry match (case-insensitive) are prioritised.
 * - Remaining slots are filled from the rest of the pool so the section
 *   always shows the requested number of items (or as many as exist).
 */
function pickProjects(count: number, keyword?: string): Project[] {
  const all = Object.values(ALL_CASE_STUDIES);

  if (!keyword) {
    return all.slice(0, count).map(toProject);
  }

  const kw = keyword.toLowerCase();

  const matches: CaseStudyData[] = [];
  const rest: CaseStudyData[] = [];

  for (const cs of all) {
    const haystack = [
      cs.client,
      cs.industry,
      ...cs.tags,
    ]
      .join(" ")
      .toLowerCase();

    if (haystack.includes(kw)) {
      matches.push(cs);
    } else {
      rest.push(cs);
    }
  }

  // Prioritised matches first, then backfill from the rest
  return [...matches, ...rest].slice(0, count).map(toProject);
}

/* ------------------------------------------------------------------ */
/*  ProjectCard                                                        */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full mb-16 lg:mb-28">
      <Link
        href={project.href}
        className="w-full relative group flex flex-col items-start"
      >
        {/* Image with hover tag reveal */}
        <div className="w-full relative overflow-hidden mb-6">
          {/* Tags — slide in on hover */}
          <div className="absolute -top-px pt-px -right-px z-20 bg-white pl-3 pb-3 transition-transform duration-300 transform rounded-bl-3xl xl:-translate-y-full xl:group-hover:translate-y-0">
            <div className="flex flex-wrap items-center -mb-2 lg:-mb-3 -mr-2">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-50 leading-tight rounded-full mr-2 mb-2 lg:mr-3 lg:mb-3 text-sm pt-2 pb-1.5 px-4"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Image / Video */}
          <div className="w-full rounded-2xl overflow-hidden relative bg-gray-50 lg:rounded-3xl">
            <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
              <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
                {project.video ? (
                  <video
                    className="w-full h-full object-cover absolute top-0 left-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.image}`} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base text-gray-400">
          <div className="font-light">{project.year}</div>
          <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full" />
          <div className="font-light">{project.client}</div>
        </div>

        {/* Title */}
        <h2 className="text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-balance pr-10">
          {project.title}
        </h2>
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WorkSection                                                        */
/* ------------------------------------------------------------------ */

interface WorkSectionProps {
  /** Optional keyword to prioritise matching case studies (matches tags, client, industry). */
  keyword?: string;
  /** Total number of case studies to show (default: 2). */
  count?: number;
}

export default function WorkSection({ keyword, count = 2 }: WorkSectionProps) {
  const projects = pickProjects(count, keyword);

  // Split into two columns for the masonry layout
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 === 1);

  return (
    <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="flex flex-wrap -mb-16">
          {/* Section header — mobile only */}
          <div className="px-2 lg:px-3 xl:px-4 w-full mb-6 lg:hidden">
            <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
              <div className="inline-flex items-center">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Our Work
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-sm">
                Take a look at our projects
              </h2>
            </div>
          </div>

          {/* Left column */}
          <div className="px-2 lg:px-3 xl:px-4 w-full md:w-8/16 md:mt-20">
            {leftProjects.map((project) => (
              <ProjectCard key={project.client} project={project} />
            ))}

            {/* CTA — centered, desktop only */}
            <div className="w-full hidden lg:flex justify-center text-center mb-10">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                  Like what
                  <br />
                  you see?
                </h2>
                <Button href="/contact" variant="primary">
                  Contact us
                </Button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="px-2 lg:px-3 xl:px-4 w-full md:w-8/16">
            {/* Section header — desktop only */}
            <div className="w-full justify-center mb-16 hidden lg:flex lg:mb-20">
              <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                <div className="inline-flex items-center">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Our Work
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl tracking-tight text-gray-600 leading-none text-balance max-w-sm xl:max-w-md">
                  Take a look at our projects
                </h2>
              </div>
            </div>

            {rightProjects.map((project) => (
              <ProjectCard key={project.client} project={project} />
            ))}

            {/* CTA — mobile only */}
            <div className="w-full lg:hidden">
              <div className="w-full justify-center text-center flex mb-10">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-2xl md:text-3xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                    Like what
                    <br />
                    you see?
                  </h2>
                  <Button href="/contact" variant="primary">
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
