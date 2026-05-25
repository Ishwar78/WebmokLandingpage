import {
  Rocket,
  BriefcaseBusiness,
  UserCheck,
  Video,
  Award,
  MessagesSquare,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Rocket,
    title: "Live Projects",
    desc: "Build real, production-grade apps that go straight to your portfolio.",
    accent:
      "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement Support",
    desc: "Dedicated placement cell with 100+ hiring partners across India.",
    accent:
      "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]",
  },
  {
    icon: UserCheck,
    title: "Industry Mentors",
    desc: "1:1 mentorship from engineers shipping at top product companies.",
    accent:
      "from-[oklch(0.42_0.24_150)] to-[oklch(0.68_0.18_178)]",
  },
  {
    icon: Video,
    title: "Recorded Lectures",
    desc: "Lifetime access to every session — revise at your own pace.",
    accent:
      "from-[oklch(0.45_0.20_285)] to-[oklch(0.68_0.18_315)]",
  },
  {
    icon: Award,
    title: "Certifications",
    desc: "Industry-recognized certificates after every milestone & capstone.",
    accent:
      "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]",
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    desc: "Mock interviews, DSA sprints, resume reviews & HR rounds.",
    accent:
      "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]",
  },
];

export function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-10"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.99 0.004 230) 0%, oklch(0.96 0.015 240) 50%, oklch(0.98 0.008 250) 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="animate-float absolute -top-40 left-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.72 0.16 224)" }}
      />

      <div
        aria-hidden
        className="animate-float-slow absolute -bottom-32 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.42 0.18 252)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 px-4 py-1.5 text-sm font-semibold text-brand-deep">
              ✦ Why Web Mok
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl">
              Everything you need to{" "}
              <span className="text-gradient-brand">
                land a tech job
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              We combine live learning, real projects, and dedicated career
              support — so you don't just learn, you get hired.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/50 hover:shadow-elegant">
                
                {/* Glow */}
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                />

                {/* Top Row */}
                <div className="flex items-start gap-4">
                  
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <f.icon className="h-7 w-7" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-foreground">
                      {f.title}
                    </h3>

                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${f.accent} transition-all duration-500 group-hover:w-full`}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}