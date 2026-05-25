import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/webmok-logo.png";
import { CONTACT_EMAIL, CONTACT_ADDRESS, WHATSAPP_NUMBER } from "@/lib/site";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-primary-foreground"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.04 252), oklch(0.32 0.1 244))",
      }}
    >
      <div
        aria-hidden
        className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Web Mok" width={70} height={70} className="h-20 w-30  bg-white/20 p-1" loading="lazy" />
              {/* <span className="text-lg font-bold">Web Mok</span> */}
            </div>
            <p className="mt-3 text-base opacity-80">
              Premium ed-tech for the next generation of builders. Learn, build, get hired.
            </p>
           <div className="mt-4 flex items-center gap-2">
  {[
    {
      icon: Instagram,
      href: "https://www.instagram.com/webmok.in",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/webmok",
      label: "LinkedIn",
    },
    
    {
      icon: Facebook,
      href: "https://www.facebook.com/webmok",
      label: "Facebook",
    },
  ].map(({ icon: Icon, href, label }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-gradient-brand hover:shadow-glow"
    >
      <Icon className="h-4 w-4" />
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-base font-bold uppercase tracking-wider opacity-90">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-base opacity-80">
              {[
                ["Home", "#home"],
                ["Courses", "#courses"],
                ["Mentors", "#mentors"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}><a className="transition hover:text-brand-cyan" href={h}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold uppercase tracking-wider opacity-90">Course</h4>
            <ul className="mt-4 space-y-2 text-base opacity-80">
              <li>
                <a href="#courses" className="transition hover:text-brand-cyan">
                  Digital Marketing with AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold uppercase tracking-wider opacity-90">Contact</h4>
            <ul className="mt-4 space-y-2 text-base opacity-80">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-brand-cyan">{CONTACT_EMAIL}</a></li>
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-cyan">+{WHATSAPP_NUMBER}</a></li>
              <li>{CONTACT_ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} Web Mok. All rights reserved.</p>
          <p>Crafted with care for future builders.</p>
        </div>
      </div>
    </footer>
  );
}
