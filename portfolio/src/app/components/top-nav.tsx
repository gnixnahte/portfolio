"use client";

type TopNavItem = {
  id?: string;
  href?: string;
  label: string;
};

const items: TopNavItem[] = [
  { id: "me", label: "me" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { href: "/EthanXingResume.pdf", label: "resume" },
];

export default function TopNav() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="site-top-nav fixed left-1/2 top-5 z-30 -translate-x-1/2">
      <div className="flex items-center gap-6 text-sm">
        {items.map((item) => (
          item.id ? (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id as string)}
              className="transition hover:text-[var(--muted)]"
            >
              {item.label}
            </a>
          ) : (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--muted)]"
            >
              {item.label}
            </a>
          )
        ))}
      </div>
    </nav>
  );
}
