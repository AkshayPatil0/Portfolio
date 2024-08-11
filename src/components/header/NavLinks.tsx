"use client";
const NAV_LINKS = [
  { label: "About Me", link: "about" },
  { label: "Skills", link: "skills" },
  { label: "Projects", link: "projects" },
  { label: "Contact Me", link: "contact" },
];

export function NavLinks() {
  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return NAV_LINKS.map(({ label, link }) => (
    <nav key={link}>
      <a
        className="relative overflow-hidden after:pointer-events-none after:absolute after:-bottom-1 after:left-1/2 after:inline-block after:h-[2px] after:w-0 after:bg-neutral after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-neutral hover:after:left-0 hover:after:w-full hover:after:opacity-100"
        href={`#${link}`}
        onClick={(e) => {
          e.preventDefault();
          navigateTo(link);
        }}
      >
        {label}
      </a>
    </nav>
  ));
}
