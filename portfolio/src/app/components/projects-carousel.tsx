"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type Project = {
  name: string;
  stack: string;
  details: string;
  link: string;
  extraLinks?: Array<{ label: string; href: string }>;
  image: string;
  hoverImage?: string;
  mediaFit?: "cover" | "contain";
  mediaPosition?: string;
  mediaBg?: string;
  imageAlt: string;
};

type ProjectsCarouselProps = {
  projects: Project[];
};

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<HTMLElement[]>([]);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || projects.length === 0) {
      return;
    }

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    itemRefs.current = Array.from(
      scroller.querySelectorAll("[data-project-item]")
    ) as HTMLElement[];

    const applyDepth = () => {
      const centerY = scroller.scrollTop + scroller.clientHeight / 2;
      const items = itemRefs.current;
      const activeRange = scroller.clientHeight * 0.9;

      items.forEach((item) => {
        const el = item;
        const itemCenter = el.offsetTop + el.offsetHeight / 2;
        const dist = Math.min(Math.abs(itemCenter - centerY), scroller.clientHeight);
        const ratio = dist / scroller.clientHeight;

        if (Math.abs(itemCenter - centerY) > activeRange) {
          el.style.transform = reducedMotionRef.current
            ? "translateZ(0px) rotateX(0deg) scale(1)"
            : "translateZ(0px) rotateX(0deg) scale(0.92)";
          el.style.opacity = "0.35";
          return;
        }

        const scale = reducedMotionRef.current ? 1 : 1 - ratio * 0.08;
        const rotateX = reducedMotionRef.current ? 0 : ratio * 4;
        const opacity = 1 - ratio * 0.68;
        const z = reducedMotionRef.current ? 0 : 12 - ratio * 10;

        el.style.transform = `translateZ(${z.toFixed(1)}px) rotateX(${rotateX.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
      });
    };

    requestAnimationFrame(() => {
      scroller.scrollTop = 0;
      applyDepth();
    });

    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      raf = requestAnimationFrame(() => {
        applyDepth();
        ticking = false;
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => applyDepth();
    window.addEventListener("resize", onResize);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [projects.length]);

  return (
    <div className="relative -mx-4 px-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 h-[21rem] -translate-y-1/2" />

      <ul
        ref={scrollerRef}
        className="h-[38rem] overflow-y-auto px-2 pt-20 pb-24 [perspective:1000px] [scrollbar-width:none] [touch-action:pan-y] [overscroll-behavior:contain] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <li
            key={`${project.name}-${project.stack}-${index}`}
            data-project-item
            className="mb-3 origin-center rounded-sm border border-[var(--line)]/20 bg-[var(--background)]/75 p-3 [contain:layout_paint_style] will-change-transform [transform:translateZ(0)]"
          >
            <div className="flex items-start gap-4">
              <div
                className="group/media relative mt-1 h-[94px] w-[94px] shrink-0 overflow-hidden rounded-sm"
                style={{ backgroundColor: project.mediaBg ?? "transparent" }}
              >
                {/\.((mp4)|(webm)|(ogg))$/i.test(project.image) ? (
                  <video
                    src={project.image}
                    aria-label={project.imageAlt}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="h-full w-full"
                    style={{ objectFit: project.mediaFit ?? "cover" }}
                  />
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={94}
                      height={94}
                      quality={100}
                      sizes="94px"
                      className={`h-full w-full transition-opacity duration-200 ${
                        project.hoverImage ? "opacity-100 group-hover/media:opacity-0" : ""
                      }`}
                      style={{
                        objectFit: project.mediaFit ?? "cover",
                        objectPosition: project.mediaPosition ?? "center",
                      }}
                    />
                    {project.hoverImage ? (
                      <Image
                        src={project.hoverImage}
                        alt={project.imageAlt}
                        width={94}
                        height={94}
                        quality={100}
                        sizes="94px"
                        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover/media:opacity-100"
                        style={{
                          objectFit: project.mediaFit ?? "cover",
                          objectPosition: project.mediaPosition ?? "center",
                        }}
                      />
                    ) : null}
                  </>
                )}
              </div>
              <div className="max-w-xl">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-1 font-[Arial] text-xs tracking-[0.04em] text-[var(--muted)]">
                  {project.stack}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {project.details}
                </p>
                {project.extraLinks && project.extraLinks.length > 0 ? (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    {project.extraLinks.map((item) => (
                      <a
                        key={`${project.name}-${item.label}`}
                        href={item.href}
                        className="inline-block underline decoration-1 underline-offset-4 transition hover:text-[var(--muted)]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={project.link}
                    className="mt-3 inline-block text-sm lowercase underline decoration-1 underline-offset-4 transition hover:text-[var(--muted)]"
                  >
                    view project
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
