"use client";

type TopNavItem = {
  id: string;
  label: string;
};

const items: TopNavItem[] = [
  { id: "me", label: "me" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "robotics", label: "robotics" },
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
    <nav className="fixed left-1/2 top-5 z-30 -translate-x-1/2">
      <div className="flex items-center gap-6 text-sm">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => scrollToSection(event, item.id)}
            className="transition hover:text-[var(--muted)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
