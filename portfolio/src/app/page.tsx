import Image from "next/image";
import ProjectsCarousel from "./components/projects-carousel";
import type { Project } from "./components/projects-carousel";
import TopNav from "./components/top-nav";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const experienceTimeline = [
    {
      period: "May 2026 - Aug 2026",
      title: "machine learning engineer",
      organization: "@ GrazeAI",
      logo: "/logos/grazeai_logo.jpeg",
      logoAlt: "GrazeAI logo",
      details: "ai and llm integration, workflow automation + CRM management",
    },
    {
      period: "Sep 2025 - Aug 2026",
      title: "robotics software researcher",
      organization: "@ robohub x uwaterloo",
      logo: "/logos/robohub_logo.png",
      logoAlt: "RoboHub x UWaterloo logo",
      details:
        "built control software for a 6-dof KINOVA robotic arm with millimeter accuracy for 3d bioprinting purposes",
    },
    {
      period: "Sep 2023 - Jun 2024",
      title: "executive director",
      organization: "@ Canadian Youth Stem Conference",
      logo: "/logos/cysc_logo.jpg",
      logoAlt: "Canadian Youth STEM Conference logo",
      details:
        "created the centerpiece 'innovation challenge' and oversaw 300+ attendees for day-of operations",
    },
  ];

  const projects: Project[] = [
    {
      name: "Scrible",
      stack: "next.js / typescript / react / tailwind / python / tensorflow / keras / gemini api",
      details:
        "ml-powered, full-stack accessibility tool for people with parkinson's disease and hand tremors, allowing users to transcribe ineligible handwriting into eligible text",
      popupDetails:
        "full-stack accessibility app for handwriting transcription for users with hand tremors and mobility limitations.\n\n> built with Next.js, TypeScript and React on the frontend \n\t> visual input enabled with OpenCV \n> transcription powered by custom CNN-RNN-CTC inference pipeline trained on set of 7,000+ handwritten samples\n\t> leverages GeminiAPI to improve recognition on edge cases \n> lightweight backend with Supabase to allow for logging and saving past writing excerpts",
      link: "https://github.com/forkiron/scrible",
      image: "/projects/scrible1.png",
      hoverImage: "/projects/scrible2.png",
      popupImage: "/projects/scrible.mp4",
      mediaFit: "cover",
      mediaPosition: "top center",
      imageAlt: "Scrible project preview",
    },
    {
      name: "Melodica",
      stack: "next.js / typescript / react / google cloud platform / tone.js / supabase",
      details:
        "beginner-friendly, browser-based DAW music maker with real-time audio scheduling and an interactive piano roll-based editor",
      popupDetails:
        "full-stack, web-based music production tool for beginners and drafting quick melodies with audio recording capabilities.\n\t> 35+ effects, 7+ instruments, unlimited creative potential, with note-level control over sfx + instrumentation\n\n> built with Next.js, TypeScript and React on the frontend \n\t> audio engine powered by Tone.js and audio scheduling enabled through piano-roll interface with Web Audio API\n> used Supabase (PostgreSQL) to implement save/load functionality, user authentication, and secure data access with RLS policies\n\t> projects stored in JSON, allowing for easy .mp3 export",
      link: "https://github.com/gnixnahte/melodica",
      image: "/projects/melodica1.png",
      hoverImage: "/projects/melodica2-new.png",
      popupImage: "/projects/melodica.mp4",
      mediaFit: "contain",
      mediaBg: "#2f2f2f",
      imageAlt: "Melodica project preview",
    },
    {
      name: "AXIOM",
      stack: "next.js / typescript / react / node.js / supabase / backboard.io",
      details:
        "standardized grading system for canadian high schools, reducing the effects of grade inflation with data taken from 2,000+ schools in the Fraser Institute",
      popupDetails:
        "data-driven grade normalization platform for canadian high schools using datasets from over 2,000+ high schools across Canada. \n\n> built with Next.js, TypeScript and React on the frontend \n\t> 3D mapping powered by Mapbox/MapLibre, deck.gl, and React Three Fiber for globe + heat-layer visualization \n> designed an analyzer pipeline with subject-specific AI routing to estimate test rigor and generate school-aware adjustment factors\n\t> integrated Gemini + Backboard SDK for tool orchestration and agentic chatbot \n> implemented Supabase-backed persistence for adjustment submissions, secure API routes, and migration-driven data management",
      link: "https://github.com/forkiron/axiom",
      image: "/projects/axiom1.png",
      hoverImage: "/projects/axiom2.png",
      popupImage: "/projects/axiom.mp4",
      mediaPosition: "center 56%",
      imageAlt: "AXIOM project preview",
    },
    {
      name: "Firefighting Robot",
      stack: "CAD / PIC microcontrollers / custom pcb design / soldering / great cow BASIC",
      details:
        "custom built robot, designed with CAD, powered by PCBs i designed, with autonomous navigation capabilities aided by ultrasonic and infrared sensors",
      link: "#",
      image: "/projects/robot1.jpg",
      hoverImage: "/projects/robot2.jpg",
      popupImage: "/projects/firefighter-screenrecording.mov",
      popupDetails:
        "custom built autonomous firefighting robot designed with CAD, powered by custom-made PCBs, and ultrasonic and infrared sensory input. \n\n> used PIC microcontroller as the control core for navigation and determining action based on sensory input\n\t> two motors driven by L293D H-bridge \n> implemented line detection with IR LED + photoresistor pair and wall detection with ultrasonic distance sensors for tracking path and navigation \n\t> IR phototransistor used to detect heat for fire tracking and extinguishing\n> LCD displayed live sensor and state information during debugging tests and maze trials",
      imageAlt: "SumoBot and Firefighter project preview",
    },
    {
      name: "VEX  Robot",
      stack: "c++ / vex iq",
      details:
        "autonomous robotic collector built with VEX IQ and C++",
      popupDetails:
        "autonomous object-collection robot built on vex iq with c++. \n\n> implemented sensor-driven navigation, intake sequencing, and scoring-state logic for reliable item pickup under time constraints. \n> iteratively tuned control loops and mechanical layout to improve consistency between practice and competition runs.",
      link: "#",
      image: "/projects/vex1.jpeg",
      hoverImage: "/projects/vex2.png",
      popupImage: "/projects/vex3.jpeg",
      imageAlt: "VEX Robot project preview",
    },
    {
      name: "iSpy",
      stack: "javascript / python / pytorch / flask / openCV / sightengine API",
      details:
        "browser extension built to identify ai-generated media, helping artists and consumers alike identify ai-generated media",
      popupDetails:
        "browser extension built for chrome allowing users to detect and differentiate ai-generated media\n\n> built with JavaScript and Tailwind on the frontend \n\t> visual input enabled with OpenCV \n> CNN built with PyTorch trained on 10,000+ images to detect between real and ai-generated media\n\t> leverages SightEngineAPI to improve recognition of edge cases (ie. photorealistic ai-images)",
      link: "https://github.com/forkiron/ispy",
      image: "/projects/ispy.webp",
      imageAlt: "iSpy project preview",
    },
    {
      name: "NewDen",
      stack: "javascript / python / openCV / spaCy / fuzzywuzzy",
      details:
        "NLP-based scam-detection tool for people looking for housing in Canada, found 3,000+ scam listings across Ontario alone",
      popupDetails:
        "housing scam detection tool for renters in canada that combines NLP heuristics, fuzzy matching, and listing-pattern analysis to provide user feedback. \n\n> built with React and JavaScript on the frontend \n\t> openCV processes images of listings attached by the user\n> photos are scraped using openCV and given to a custom trained pipeline \n> NLP-pipeline revolving around OCR being able to scrape keywords of the image and NER finding information for listings in similar regions based off keywords\n\t> leverages GeminiAPI to improve feedback for locations with minimal information",
      link: "https://github.com/forkiron/newden",
      image: "/projects/newden.webp",
      mediaFit: "contain",
      mediaBg: "#ffffff",
      popupMediaBg: "#ffffff",
      imageAlt: "NewDen project preview",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)] [background-size:22px_22px]" />
      <TopNav />

      <section
        id="me"
        className="relative z-10 flex min-h-screen scroll-mt-20 items-center justify-center px-6 py-16"
      >
        <div className="w-full max-w-3xl">

          <h1 className="text-4xl font-black lowercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            ethan xing
          </h1>

          <p className="mt-6 max-w-xl text-base lowercase leading-relaxed text-[var(--muted)] sm:text-lg">
            studying mechatronics @ uwaterloo
          </p>

          <p className="mt-6 max-w-xl text-base lowercase leading-relaxed text-[var(--muted)] sm:text-lg">
            i enjoy building ai, ml & perception systems.
          </p>

          <p className="mt-10 text-xs tracking-[0.08em] text-[var(--muted)]">
            reach out!
          </p>
          <div className="mt-2 -ml-2 flex flex-wrap items-center gap-2">
            <a
              href="mailto:ethanxing2007@gmail.com"
              aria-label="Email Ethan"
              className="flex h-11 w-11 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            >
              <Image
                src="/logos/email-icon.svg"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
              />
            </a>
            <a
              href="https://github.com/gnixnahte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            >
              <Image
                src="/logos/github-icon.svg"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
              />
            </a>
            <a
              href="https://linkedin.com/in/ethanxinguw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            >
              <Image
                src="/logos/linkedin-icon.svg"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 scroll-mt-20 px-6 pb-24 pt-2">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-black lowercase tracking-[-0.03em] sm:text-5xl">
              projects
            </h2>
          </div>

          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      <section id="experience" className="relative z-10 scroll-mt-20 px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="mt-3 text-3xl font-black lowercase tracking-[-0.03em] sm:text-5xl">
              experience
            </h2>
          </div>

          <div id="robotics" className="relative scroll-mt-20 pb-6">
            <div className="pointer-events-none absolute left-0 top-6 h-px w-[220vw] bg-[var(--line)]/35" />
            <ol className="relative flex gap-14 pr-8">
              {experienceTimeline.map((item) => (
                <li
                  key={`${item.period}-${item.title}`}
                  className="group relative w-[18rem] pt-12"
                >
                  <span className="absolute left-0 top-[18px] h-3 w-3 rounded-full bg-[var(--line)] transition duration-200 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.95)]" />
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={22}
                    height={22}
                    className="absolute -left-7 top-[82px] h-[22px] w-[22px] rounded-sm"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 font-[Arial] text-xs tracking-[0.02em] text-[var(--muted)]">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {item.details}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 pb-12 pt-4">
        <div className="mx-auto w-full max-w-3xl border-t border-[var(--line)]/25 pt-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm text-[var(--muted)]">
                built by ethan xing <span className="mx-2">/</span> {currentYear}
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                based in toronto + waterloo <span className="mx-2">/</span> builders reach out!
              </p>
              <div className="mt-3 -ml-1 flex flex-wrap items-center gap-2">
                <a
                  href="mailto:ethanxing2007@gmail.com"
                  aria-label="Email Ethan"
                  className="flex h-10 w-10 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                >
                  <Image
                    src="/logos/email-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://github.com/gnixnahte"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                >
                  <Image
                    src="/logos/github-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/ethanxinguw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-sm transition duration-200 hover:opacity-60 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                >
                  <Image
                    src="/logos/linkedin-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 sm:items-end">
              <div className="h-20 w-20 overflow-hidden rounded-sm bg-[var(--background-alt)]">
                <Image
                  src="/8.jpg"
                  alt="Portrait of Ethan Xing"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
