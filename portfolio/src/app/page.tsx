export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.22)_1px,transparent_0)] [background-size:20px_20px]" />

      <section className="relative z-10 w-full max-w-2xl border border-black/25 bg-white/65 p-8 backdrop-blur-sm sm:p-12">
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-black/60">
          portfolio / 2026
        </p>

        <h1 className="text-4xl font-black lowercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
          ethan xing
        </h1>

        <p className="mt-6 max-w-xl text-base lowercase leading-relaxed text-black/80 sm:text-lg">
          i design and build thoughtful digital experiences. this space is a
          stripped-back introduction to who i am and what i make.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-sm lowercase">
          <a
            href="mailto:ethanxing2007@gmail.com"
            className="rounded-full border border-black/25 px-4 py-2 transition hover:bg-black hover:text-[#b7ff00]"
          >
            email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/25 px-4 py-2 transition hover:bg-black hover:text-[#b7ff00]"
          >
            github
          </a>
        </div>
      </section>
    </main>
  );
}
