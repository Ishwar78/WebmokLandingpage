import {
  Megaphone,
  ArrowRight,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Reveal } from "./Reveal";

const curriculumItems = [
  "Digital Marketing",
  // "Web Design & Development",
  "Business Development",
  "Graphic Designing",
  "Google Adwords (PPC)",
  "SEO",
  "Social Media Marketing",
  "Video Editing",
  "Lead Generation",
  "Affiliate Marketing",
  "Content Marketing",
  "E-Commerce Marketing",
  "Email Marketing",
  "Google Adsense",
  "Google Analytics",
  "Inbound Marketing",
  "Mobile Marketing",
  "Online Reputation Marketing",
  "YouTube Marketing",
  "Freelancing",
  "Artificial Intelligence",
];

export function Courses({
  onEnroll,
}: {
  onEnroll: (courseName?: string) => void;
}) {
  return (
    <section
      id="courses"
      className="relative overflow-hidden py-12"
      style={{
        background:
          "linear-gradient(135deg, #07111f 0%, #0b172a 50%, #07111f 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              ✦ Premium Course
            </span>

            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>{" "}
              with AI
            </h2>

            <p className="mt-4 text-base text-white/70 md:text-lg">
              Learn practical skills with latest AI tools & marketing strategies.
            </p>
          </div>
        </Reveal>

        {/* MAIN SECTION */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">

          {/* LEFT IMAGE */}
          <Reveal>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

              <div className="relative h-[850px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1974&auto=format&fit=crop"
                  alt="Digital Marketing"
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-10 w-full p-8">

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Megaphone className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                    Digital Marketing
                  </h3>

                  <p className="mt-2 text-lg text-cyan-200">
                    with Artificial Intelligence
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                    Learn SEO, Social Media Marketing, AI Tools,
                    Designing, Video Editing & Freelancing.
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur">
                      <Clock className="mx-auto mb-1 h-5 w-5 text-cyan-300" />
                      <p className="text-sm font-bold text-white">6 Months</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur">
                      <Users className="mx-auto mb-1 h-5 w-5 text-cyan-300" />
                      <p className="text-sm font-bold text-white">5000+</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur">
                      <Star className="mx-auto mb-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <p className="text-sm font-bold text-white">5.0 Rating</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={100}>
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Course Curriculum
              </h3>

             
              {/* SIMPLE TEXT DESIGN */}
<div className="grid grid-cols-2 gap-4">

  {curriculumItems.map((item, index) => (
    <div
      key={index}
      className="flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-4 text-center text-base font-medium text-white transition-all duration-300 hover:bg-cyan-500/20"
    >
      {item}
    </div>
  ))}

</div>

              {/* BUTTON */}
              <button
                onClick={() => onEnroll("Digital Marketing with AI")}
                className="group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}