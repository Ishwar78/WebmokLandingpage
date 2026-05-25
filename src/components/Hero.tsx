import { useState } from "react";
import { ArrowRight, Sparkles, Users, Briefcase, Trophy, CheckCircle2, Phone, Mail, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function Hero({ onEnroll }: { onEnroll: () => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🎓 *New Course Inquiry — Web Mok*\n\n👤 Name: ${formData.name}\n📱 Phone: ${formData.phone}\n📧 Email: ${formData.email || "Not provided"}\n📚 Course: ${formData.course}\n\n`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    // Call window.open before any state updates to avoid popup blockers
    window.open(waUrl, "_blank", "noopener,noreferrer");
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Floating blobs */}
      <div
        aria-hidden
        className="absolute -left-24 top-24 h-72 w-72 bg-gradient-brand opacity-25 animate-blob animate-float"
        style={{ filter: "blur(70px)" }}
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/3 h-96 w-96 bg-gradient-brand opacity-15 animate-blob animate-float-slow"
        style={{ filter: "blur(90px)" }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 bg-gradient-brand opacity-10 animate-float"
        style={{ filter: "blur(80px)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        {/* ── LEFT: Content ── */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-semibold text-brand-deep">
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              India's #1 Ed-Tech for Future Builders
            </span>
          </Reveal>

          <Reveal delay={100}>
  <h1 className="mt-5 text-3xl font-extrabold leading-[1.07] tracking-tight md:text-4xl xl:text-5xl">
    4 Months Online & Offline{" "}
    <span className="text-gradient-brand">
      Digital Marketing Course
    </span>{" "}
    To Make You A High-Paying
  </h1>
</Reveal>

          <Reveal delay={180}>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg leading-relaxed">
              Join <strong className="text-foreground">5,000+ students</strong> who transformed
              their careers through live projects, expert mentors & guaranteed placement support.
            </p>
          </Reveal>

          {/* Benefits list */}
          <Reveal delay={260}>
            <ul className="mt-7 space-y-3">
              {[
                "Live classes with industry experts",
                "100% placement assistance",
                "Real-world projects & portfolio building",
                "Certificate recognized by top companies",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-foreground/80">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-brand-cyan" style={{ height: "1.1rem", width: "1.1rem" }} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-base font-semibold text-primary-foreground"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={onEnroll}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-base font-semibold text-foreground backdrop-blur transition-all hover:border-brand-cyan hover:text-brand-deep hover:shadow-glow"
              >
                Book Free Demo
              </button>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={420}>
            <div className="mt-12 grid grid-cols-3 gap-3">
              <StatCard icon={<Users className="h-5 w-5" />} value="5000+" label="Students" />
              <StatCard icon={<Briefcase className="h-5 w-5" />} value="2000+" label="Placements" />
              <StatCard icon={<Trophy className="h-5 w-5" />} value="98%" label="Success Rate" />
            </div>
          </Reveal>
        </div>

        {/* ── RIGHT: Lead Form ── */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            {/* Glow behind form */}

             <div className="mb-6 rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 px-6 py-3 text-center text-base font-bold leading-relaxed text-foreground shadow-lg">
      कोर्स पूरा होने के बाद{" "}
      <span className="text-red-500">30 दिनों</span> के अंदर कंपनी द्वारा{" "}
      <span className="text-red-500">प्लेसमेंट</span> – वरना{" "}
      <span className="text-red-500">100% फीस वापसी!</span>
    </div>
            {/* <div
              aria-hidden
              className="absolute -inset-4 -z-10 bg-gradient-brand opacity-08 animate-glow-pulse"
              style={{ filter: "blur(30px)", borderRadius: "40%" }}
            /> */}

            <div className="glass rounded-3xl p-8 shadow-elegant">
              {!submitted ? (
                <>
                  <div className="mb-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-glow">
                      <Sparkles className="h-3.5 w-3.5" />
                      FREE Demo Class — Limited Seats!
                    </span>

                    
                    <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                      Start Your Journey <span className="text-gradient-brand">Today</span>
                    </h2>
                    <p className="mt-1 text-base text-muted-foreground">
                      Fill in your details — our counselor will call you within 24hrs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="hero-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="hero-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="hero-email"
                        name="email"
                        type="email"
                        placeholder="Email Address (optional)"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                      />
                    </div>

                    {/* Course Select */}
                    <div>
                      <select
                        id="hero-course"
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-base text-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a Course
                        </option>
                        <option>Digital Marketing With Ai</option>
                        <option>Free Counseling</option>
                       
                      </select>
                    </div>

                    <button
                      id="hero-submit"
                      type="submit"
                      disabled={loading}
                      className="group relative w-full overflow-hidden rounded-xl btn-gradient py-3.5 text-base font-bold text-primary-foreground transition-all disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Booking your seat…
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Book My FREE Demo
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>
                  </form>

                  <p className="mt-4 text-center text-[11px] text-muted-foreground">
                    🔒 Your details are safe with us. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold">You're In! 🎉</h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Thank you, <strong>{formData.name}</strong>! Our counselor will reach
                    you at <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", course: "" }); }}
                    className="mt-6 rounded-full btn-gradient px-6 py-2.5 text-base font-semibold text-primary-foreground"
                  >
                    Submit Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-3 text-center shadow-elegant hover-lift md:p-4">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
        {icon}
      </div>
      <div className="mt-2 text-xl font-extrabold text-gradient-brand md:text-2xl">{value}</div>
      <div className="text-[11px] font-medium text-muted-foreground md:text-sm">{label}</div>
    </div>
  );
}
