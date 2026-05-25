import { Linkedin, Twitter, Star, Award } from "lucide-react";
import m1 from "@/assets/Rahish Sir.png";
import m3 from "@/assets/DeepakSir-1.png";
import m2 from "@/assets/simran1.png";

import { Reveal } from "./Reveal";

const mentors = [
  {
    img: m1,
    name: "Rahish Sangwan",
    role: "Founder & Digital Marketing Specialist",
    exp: "10+ Years",
    students: "4,400+",
    accent:
      "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]",
  },
  {
    img: m2,
    name: "Simran",
    role: "Digital Marketing Head",
    company: "Infosys",
    exp: "8+ Years",
    students: "3,500+",
    accent:
      "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]",
  },
  {
    img: m3,
    name: "Deepak",
    role: "Digital Marketing Head",
    company: "Razorpay",
    exp: "5+ Years",
    students: "500+",
    accent:
      "from-[oklch(0.42_0.24_150)] to-[oklch(0.68_0.18_178)]",
  },
];

export function Mentors() {
  return (
    <section
      id="mentors"
      className="relative py-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.12 0.04 252) 0%, oklch(0.18 0.06 244) 50%, oklch(0.14 0.05 260) 100%)",
      }}
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: "oklch(0.72 0.16 224)" }}
      />

      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "oklch(0.42 0.18 252)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur border border-white/20">
              <Award className="h-4 w-4 text-cyan-300" />
              Industry Mentors
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Learn from{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Real Industry Experts
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80 max-w-2xl mx-auto">
              Learn practical skills, live projects, placement strategies,
              freelancing systems and real-world digital marketing from
              experienced mentors.
            </p>
          </div>
        </Reveal>

        {/* Mentor Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/30 hover:bg-white/10 shadow-2xl">
                
                {/* Top Gradient */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${m.accent}`}
                />

                {/* Glow */}
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${m.accent} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40`}
                />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="h-[260px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_252)] via-transparent to-transparent" />

                  {/* Rating */}
                  <div className="absolute top-5 right-5 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur border border-white/20">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-white">
                      Expert
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-white">
                  <h3 className="text-lg font-black text-center">
                    {m.name}
                  </h3>

                  <p
                    className={`mt-1 text-sm font-bold text-center bg-gradient-to-r ${m.accent} bg-clip-text text-white`}
                  >
                    {m.role}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-center">
                      <p className="text-xs text-white/50">
                        Experience
                      </p>
                      <p className="mt-0.5 text-base font-extrabold text-white">
                        {m.exp}
                      </p>
                    </div>

                    <div className="h-8 w-px bg-white/10" />

                    <div className="text-center">
                      <p className="text-xs text-white/50">
                        Students
                      </p>
                      <p className="mt-0.5 text-base font-extrabold text-white">
                        {m.students}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}