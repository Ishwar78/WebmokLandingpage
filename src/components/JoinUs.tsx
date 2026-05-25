import { Reveal } from "./Reveal";
import { Instagram, Facebook, Twitter, Linkedin, Star } from "lucide-react";

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/webmok.in" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/webmok" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/webmokofficial" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/webmok" },
];

export function JoinUs() {
  return (
    <section className="relative py-20 md:py-10 overflow-hidden" style={{ background: "oklch(0.12 0.04 252)" }}>
      {/* Background blobs for the dark theme */}
      <div
        aria-hidden
        className="absolute -top-32 right-10 h-64 w-64 rounded-full opacity-10 blur-3xl animate-float-slow"
        style={{ background: "oklch(0.60 0.22 27)" }} // reddish glow
      />

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex items-center gap-2 text-brand-cyan">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-base font-semibold text-white">Join Us</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            Become Part Of Our Students Community
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <a
                href={s.href}
                className="group flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-[#0b1120] p-10 transition-all hover:border-white/10 hover:bg-[#111827] hover:shadow-[0_0_40px_-10px_rgba(225,29,72,0.3)]"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#111827] shadow-[0_0_30px_0px_rgba(225,29,72,0.4)] transition-transform group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full border border-rose-500/30" />
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-base font-medium text-white/70">Follow</p>
                  <p className="text-xl font-bold text-white">{s.name}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
