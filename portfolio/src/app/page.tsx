import Image from "next/image";
import ProjectsCarousel from "./components/projects-carousel";
import TopNav from "./components/top-nav";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const experienceTimeline = [
    {
      period: "Sep 2025 -",
      title: "robotics software researcher",
      organization: "@ robohub x uwaterloo",
      logo: "/logos/robohub_logo.png",
      logoAlt: "RoboHub x UWaterloo logo",
      details:
        "building control software for a 6-dof robotic arm platform with millimeter accuracy",
    },
    {
      period: "Sep 2023 - Jun 2024",
      title: "executive director",
      organization: "@ canadian youth stem conference",
      logo: "/logos/cysc_logo.jpg",
      logoAlt: "Canadian Youth STEM Conference logo",
      details:
        "created the centerpiece 'innovation challenge' and oversaw 300+ attendees for day-of operations",
    },
    {
      period: "Summer 2023",
      title: "STEM leader",
      organization: "@ launch waterloo",
      logo: "/logos/launch_logo.png",
      logoAlt: "Organization logo",
      details:
        "oversaw weekly sessions, leading activities, interacting with students and working with sphero robotic cars",
    },
  ];

  const projects = [
    {
      name: "Scrible",
      stack: "next.js / typescript / react / tailwind / python / tensorflow / keras / gemini api",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "https://github.com/forkiron/scrible",
      image: "/projects/scrible.png",
      mediaFit: "cover",
      mediaPosition: "top center",
      imageAlt: "Scrible project preview",
    },
    {
      name: "Melodica",
      stack: "next.js / typescript / react / google cloud platform / tone.js / supabase",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "https://github.com/gnixnahte/melodica",
      image: "/projects/melodica1.png",
      hoverImage: "/projects/melodica2.png",
      mediaFit: "contain",
      mediaBg: "#2f2f2f",
      imageAlt: "Melodica project preview",
    },
    {
      name: "AXIOM",
      stack: "next.js / typescript / react / node.js / supabase / backboard.io",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "https://github.com/forkiron/axiom",
      image: "/projects/axiom.png",
      imageAlt: "AXIOM project preview",
    },
    {
      name: "SumoBot and Firefighter",
      stack: "onshape CAD / PIC microcontrollers / custom pcb design / soldering / great cow BASIC",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "#",
      image: "/projects/robot1.jpg",
      hoverImage: "/projects/robot2.jpg",
      imageAlt: "SumoBot and Firefighter project preview",
    },
    {
      name: "VEX  Robot",
      stack: "c++ / vex iq",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "#",
      image: "/projects/vex1.jpeg",
      hoverImage: "/projects/vex2.png",
      imageAlt: "VEX Robot project preview",
    },
    {
      name: "iSpy",
      stack: "javascript / python / pytorch / flask / openCV / sightengine API",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "https://github.com/forkiron/ispy",
      image: "/projects/ispy.webp",
      imageAlt: "iSpy project preview",
    },
    {
      name: "NewDen",
      stack: "javascript / python / openCV / spaCy / fuzzywuzzy",
      details:
        "short description of what you built, the problem it solves, and your impact.",
      link: "https://github.com/forkiron/newden",
      image: "/projects/newden.webp",
      mediaFit: "contain",
      mediaBg: "#ffffff",
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
            currently studying mechatronics @ uwaterloo
          </p>

          <p className="mt-6 max-w-xl text-base lowercase leading-relaxed text-[var(--muted)] sm:text-lg">
            i work with end-to-end software systems and love building, learning and iterating fast.
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
                  <p className="mt-4 text-sm lowercase leading-relaxed text-[var(--muted)]">
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
          <div className="mb-6 flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-sm bg-[var(--background-alt)]">
              <Image
                src="/logos/org-placeholder.svg"
                alt="Portrait of Ethan Xing"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs text-[var(--muted)]">
              add your photo by replacing <code>/public/me.jpg</code>
            </p>
          </div>

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
      </footer>
    </main>
  );
}
