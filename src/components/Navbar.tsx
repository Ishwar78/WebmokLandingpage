import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/webmok-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onEnroll }: { onEnroll: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-elegant" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Web Mok" className="h-14 w-20 object-contain" width={40} height={40} />
            {/* <span className="text-lg font-bold tracking-tight">
              <span className="text-brand-deep">Web</span>{" "}
              <span className="text-brand-cyan">Mok</span>
            </span> */}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-brand transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={onEnroll}
              className="hidden rounded-full btn-gradient px-5 py-2.5 text-base font-semibold text-primary-foreground md:inline-flex"
            >
              Enroll Now
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-4 shadow-elegant">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/90 hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    onEnroll();
                  }}
                  className="w-full rounded-full btn-gradient px-5 py-2.5 text-base font-semibold text-primary-foreground"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
