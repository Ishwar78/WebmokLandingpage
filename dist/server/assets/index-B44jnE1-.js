import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { X, Menu, Sparkles, CheckCircle2, ArrowRight, Users, Briefcase, Trophy, User, Phone, Mail, Megaphone, Clock, Star, Send, Award, Play, Rocket, BriefcaseBusiness, UserCheck, Video, MessagesSquare, Instagram, Facebook, Twitter, Linkedin, MapPin, MessageCircle } from "lucide-react";
const logo = "/assets/webmok-logo-8X1q6IjV.png";
const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];
function Navbar({ onEnroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass shadow-elegant" : "bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsx("a", { href: "#home", className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Web Mok", className: "h-14 w-20 object-contain", width: 40, height: 40 }) }),
              /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: l.href,
                  className: "group relative text-base font-medium text-foreground/80 transition-colors hover:text-foreground",
                  children: [
                    l.label,
                    /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-brand transition-all duration-300 group-hover:w-full" })
                  ]
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: onEnroll,
                    className: "hidden rounded-full btn-gradient px-5 py-2.5 text-base font-semibold text-primary-foreground md:inline-flex",
                    children: "Enroll Now"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    "aria-label": "Toggle menu",
                    onClick: () => setOpen((v) => !v),
                    className: "rounded-lg p-2 text-foreground md:hidden",
                    children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `overflow-hidden transition-all duration-300 md:hidden ${open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "glass rounded-2xl p-4 shadow-elegant", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "block rounded-lg px-3 py-2 text-base font-medium text-foreground/90 hover:bg-accent",
                  children: l.label
                }
              ) }, l.href)),
              /* @__PURE__ */ jsx("li", { className: "mt-2", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setOpen(false);
                    onEnroll();
                  },
                  className: "w-full rounded-full btn-gradient px-5 py-2.5 text-base font-semibold text-primary-foreground",
                  children: "Enroll Now"
                }
              ) })
            ] }) })
          }
        )
      ] })
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${className}`, children });
}
const WHATSAPP_NUMBER = "919680061002";
const CONTACT_EMAIL = "sirsa@webmok.com";
const CONTACT_ADDRESS = "Sirsa, Haryana, India";
function Hero({ onEnroll }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `🎓 *New Course Inquiry — Web Mok*

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email || "Not provided"}
📚 Course: ${formData.course}

`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };
  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-36 md:pb-24",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -left-24 top-24 h-72 w-72 bg-gradient-brand opacity-25 animate-blob animate-float",
            style: { filter: "blur(70px)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -right-32 top-1/3 h-96 w-96 bg-gradient-brand opacity-15 animate-blob animate-float-slow",
            style: { filter: "blur(90px)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 bg-gradient-brand opacity-10 animate-float",
            style: { filter: "blur(80px)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-semibold text-brand-deep", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-brand-cyan" }),
              "India's #1 Ed-Tech for Future Builders"
            ] }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-3xl font-extrabold leading-[1.07] tracking-tight md:text-4xl xl:text-5xl", children: [
              "4 Months Online & Offline",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Digital Marketing Course" }),
              " ",
              "To Make You A High-Paying"
            ] }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 180, children: /* @__PURE__ */ jsxs("p", { className: "mt-5 max-w-lg text-base text-muted-foreground md:text-lg leading-relaxed", children: [
              "Join ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "5,000+ students" }),
              " who transformed their careers through live projects, expert mentors & guaranteed placement support."
            ] }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 260, children: /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3", children: [
              "Live classes with industry experts",
              "100% placement assistance",
              "Real-world projects & portfolio building",
              "Certificate recognized by top companies"
            ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-base text-foreground/80", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4.5 w-4.5 shrink-0 text-brand-cyan", style: { height: "1.1rem", width: "1.1rem" } }),
              item
            ] }, item)) }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 340, children: /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#courses",
                  className: "group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-base font-semibold text-primary-foreground",
                  children: [
                    "Explore Courses",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onEnroll,
                  className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-base font-semibold text-foreground backdrop-blur transition-all hover:border-brand-cyan hover:text-brand-deep hover:shadow-glow",
                  children: "Book Free Demo"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 420, children: /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsx(StatCard, { icon: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }), value: "5000+", label: "Students" }),
              /* @__PURE__ */ jsx(StatCard, { icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }), value: "2000+", label: "Placements" }),
              /* @__PURE__ */ jsx(StatCard, { icon: /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5" }), value: "98%", label: "Success Rate" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(Reveal, { delay: 200, className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-md", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 px-6 py-3 text-center text-base font-bold leading-relaxed text-foreground shadow-lg", children: [
              "कोर्स पूरा होने के बाद",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "30 दिनों" }),
              " के अंदर कंपनी द्वारा",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "प्लेसमेंट" }),
              " – वरना",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "100% फीस वापसी!" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl p-8 shadow-elegant", children: !submitted ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-glow", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                  "FREE Demo Class — Limited Seats!"
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-2xl font-extrabold leading-tight", children: [
                  "Start Your Journey ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Today" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-base text-muted-foreground", children: "Fill in your details — our counselor will call you within 24hrs." })
              ] }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(User, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "hero-name",
                      name: "name",
                      type: "text",
                      required: true,
                      placeholder: "Your Full Name",
                      value: formData.name,
                      onChange: handleChange,
                      className: "w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "hero-phone",
                      name: "phone",
                      type: "tel",
                      required: true,
                      placeholder: "Mobile Number",
                      value: formData.phone,
                      onChange: handleChange,
                      className: "w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "hero-email",
                      name: "email",
                      type: "email",
                      placeholder: "Email Address (optional)",
                      value: formData.email,
                      onChange: handleChange,
                      className: "w-full rounded-xl border border-border bg-background/60 pl-10 pr-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "hero-course",
                    name: "course",
                    required: true,
                    value: formData.course,
                    onChange: handleChange,
                    className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-base text-foreground focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition appearance-none cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select a Course" }),
                      /* @__PURE__ */ jsx("option", { children: "Digital Marketing With Ai" }),
                      /* @__PURE__ */ jsx("option", { children: "Free Counseling" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    id: "hero-submit",
                    type: "submit",
                    disabled: loading,
                    className: "group relative w-full overflow-hidden rounded-xl btn-gradient py-3.5 text-base font-bold text-primary-foreground transition-all disabled:opacity-70",
                    children: loading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }),
                      "Booking your seat…"
                    ] }) : /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                      "Book My FREE Demo",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-[11px] text-muted-foreground", children: "🔒 Your details are safe with us. No spam, ever." })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center py-6 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-glow", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-extrabold", children: "You're In! 🎉" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-2 text-base text-muted-foreground", children: [
                "Thank you, ",
                /* @__PURE__ */ jsx("strong", { children: formData.name }),
                "! Our counselor will reach you at ",
                /* @__PURE__ */ jsx("strong", { children: formData.phone }),
                " within 24 hours."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", course: "" });
                  },
                  className: "mt-6 rounded-full btn-gradient px-6 py-2.5 text-base font-semibold text-primary-foreground",
                  children: "Submit Another"
                }
              )
            ] }) })
          ] }) })
        ] })
      ]
    }
  );
}
function StatCard({ icon, value, label }) {
  return /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-3 text-center shadow-elegant hover-lift md:p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground", children: icon }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-xl font-extrabold text-gradient-brand md:text-2xl", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-[11px] font-medium text-muted-foreground md:text-sm", children: label })
  ] });
}
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
  "Artificial Intelligence"
];
function Courses({
  onEnroll
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "courses",
      className: "relative overflow-hidden py-12",
      style: {
        background: "linear-gradient(135deg, #07111f 0%, #0b172a 50%, #07111f 100%)"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
          /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center text-white", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur", children: "✦ Premium Course" }),
            /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-3xl font-extrabold md:text-5xl", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Digital Marketing" }),
              " ",
              "with AI"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-white/70 md:text-lg", children: "Learn practical skills with latest AI tools & marketing strategies." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-16 grid gap-8 lg:grid-cols-2 lg:items-start", children: [
            /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[850px] overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1974&auto=format&fit=crop",
                  alt: "Digital Marketing",
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 z-10 w-full p-8", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600", children: /* @__PURE__ */ jsx(Megaphone, { className: "h-8 w-8 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-3xl font-extrabold text-white md:text-4xl", children: "Digital Marketing" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-cyan-200", children: "with Artificial Intelligence" }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-white/80 md:text-base", children: "Learn SEO, Social Media Marketing, AI Tools, Designing, Video Editing & Freelancing." }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "mx-auto mb-1 h-5 w-5 text-cyan-300" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-white", children: "6 Months" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur", children: [
                    /* @__PURE__ */ jsx(Users, { className: "mx-auto mb-1 h-5 w-5 text-cyan-300" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-white", children: "5000+" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur", children: [
                    /* @__PURE__ */ jsx(Star, { className: "mx-auto mb-1 h-5 w-5 fill-yellow-400 text-yellow-400" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-white", children: "5.0 Rating" })
                  ] })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxs("div", { className: "rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-white", children: "Course Curriculum" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: curriculumItems.map((item, index) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-4 text-center text-base font-medium text-white transition-all duration-300 hover:bg-cyan-500/20",
                  children: item
                },
                index
              )) }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => onEnroll("Digital Marketing with AI"),
                  className: "group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]",
                  children: [
                    "Enroll Now",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })
                  ]
                }
              )
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
function EnrollModal({
  open,
  onClose,
  defaultCourse
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse ?? "Digital Marketing with AI");
  const [city, setCity] = useState("");
  useEffect(() => {
    if (defaultCourse) setCourse(defaultCourse);
  }, [defaultCourse]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello Web Mok, I want to enroll in ${course}.
Name: ${name}
Phone: ${phone}
City: ${city}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      className: "fixed inset-0 z-[70] flex items-center justify-center p-4",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md animate-[scale-in_0.25s_ease-out] overflow-hidden rounded-3xl glass shadow-elegant", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-brand p-5 text-primary-foreground", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold opacity-90", children: "Free Inquiry" }),
                /* @__PURE__ */ jsx("h3", { className: "mt-0.5 text-xl font-bold", children: "Enroll With Web Mok" })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "rounded-full bg-white/15 p-2 transition hover:bg-white/25",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm opacity-90", children: "Submit and we'll continue the chat on WhatsApp." })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4 bg-card/80 p-6", children: [
            /* @__PURE__ */ jsx(Field$1, { label: "Full Name", children: /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "John Doe",
                className: "input"
              }
            ) }),
            /* @__PURE__ */ jsx(Field$1, { label: "Mobile Number", children: /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                type: "tel",
                pattern: "[0-9+\\s\\-]{7,15}",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "+91 98765 43210",
                className: "input"
              }
            ) }),
            /* @__PURE__ */ jsx(Field$1, { label: "Course", children: /* @__PURE__ */ jsxs(
              "select",
              {
                required: true,
                value: course,
                onChange: (e) => setCourse(e.target.value),
                className: "input",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "Digital Marketing with AI", children: "Digital Marketing with AI" }),
                  /* @__PURE__ */ jsx("option", { value: "Counseling", children: "Free Counseling" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Field$1, { label: "City", children: /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                value: city,
                onChange: (e) => setCity(e.target.value),
                placeholder: "Bengaluru",
                className: "input"
              }
            ) }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "group flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-5 py-3 text-base font-semibold text-primary-foreground",
                children: [
                  "Send on WhatsApp",
                  /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand-cyan) 18%, transparent);
        }
      ` })
      ]
    }
  );
}
function Field$1({ label, children }) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-sm font-semibold text-foreground/80", children: label }),
    children
  ] });
}
const m1 = "/assets/Rahish%20Sir-s8ylH8Is.png";
const m3 = "/assets/DeepakSir-1-Dv8BUP_t.png";
const m2 = "/assets/simran1-CEJOF4bW.png";
const mentors = [
  {
    img: m1,
    name: "Rahish Sangwan",
    role: "Founder & Digital Marketing Specialist",
    exp: "10+ Years",
    students: "4,400+",
    accent: "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]"
  },
  {
    img: m2,
    name: "Simran",
    role: "Digital Marketing Head",
    company: "Infosys",
    exp: "8+ Years",
    students: "3,500+",
    accent: "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]"
  },
  {
    img: m3,
    name: "Deepak",
    role: "Digital Marketing Head",
    company: "Razorpay",
    exp: "5+ Years",
    students: "500+",
    accent: "from-[oklch(0.42_0.24_150)] to-[oklch(0.68_0.18_178)]"
  }
];
function Mentors() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "mentors",
      className: "relative py-12 overflow-hidden",
      style: {
        background: "linear-gradient(135deg, oklch(0.12 0.04 252) 0%, oklch(0.18 0.06 244) 50%, oklch(0.14 0.05 260) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full opacity-20 blur-3xl animate-float",
            style: { background: "oklch(0.72 0.16 224)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl animate-float-slow",
            style: { background: "oklch(0.42 0.18 252)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4", children: [
          /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center text-white", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur border border-white/20", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-cyan-300" }),
              "Industry Mentors"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-black leading-tight md:text-6xl", children: [
              "Learn from",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent", children: "Real Industry Experts" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-8 text-white/80 max-w-2xl mx-auto", children: "Learn practical skills, live projects, placement strategies, freelancing systems and real-world digital marketing from experienced mentors." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: mentors.map((m, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/30 hover:bg-white/10 shadow-2xl", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-1.5 w-full bg-gradient-to-r ${m.accent}`
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                "aria-hidden": true,
                className: `absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${m.accent} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40`
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: m.img,
                  alt: m.name,
                  width: 500,
                  height: 500,
                  loading: "lazy",
                  className: "h-[260px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_252)] via-transparent to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute top-5 right-5 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur border border-white/20", children: [
                /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: "Expert" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 text-white", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-center", children: m.name }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `mt-1 text-sm font-bold text-center bg-gradient-to-r ${m.accent} bg-clip-text text-white`,
                  children: m.role
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-white/50", children: "Experience" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-base font-extrabold text-white", children: m.exp })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-white/10" }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-white/50", children: "Students" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-base font-extrabold text-white", children: m.students })
                ] })
              ] })
            ] })
          ] }) }, m.name)) })
        ] })
      ]
    }
  );
}
const review1 = "/assets/TM001-DGM7N9Ut.mp4";
const review2 = "/assets/TM0020-C4Un0ehO.mp4";
const review3 = "/assets/TM0025-cz3UGJZL.mp4";
const review4 = "/assets/TM0012-CCcxK_QG.mp4";
const review5 = "/assets/TM0011-AaNGrzWY.mp4";
const review6 = "/assets/TM0013-C_K-KNm3.mp4";
const review7 = "/assets/TM0014-DAp6gYL4.mp4";
const review8 = "/assets/TM0016-C-PWUXNU.mp4";
const items = [
  {
    videoSrc: review1,
    name: "Nitesh",
    location: "Delhi",
    course: "Digital Marketing"
  },
  {
    videoSrc: review2,
    name: "Kunal",
    location: "Noida",
    course: "Digital Marketing"
  },
  {
    videoSrc: review3,
    name: "Divyanshu",
    location: "Gurgaon",
    course: "SEO Mastery"
  },
  {
    videoSrc: review4,
    name: "Nikhal",
    location: "Rohtak",
    course: "UI/UX"
  },
  {
    videoSrc: review5,
    name: "Bhuwan Suneja",
    location: "Hisar",
    course: "Digital Marketing"
  },
  {
    videoSrc: review6,
    name: "Shruti",
    location: "Dehradun",
    course: "SEO"
  },
  {
    videoSrc: review7,
    name: "Raviju",
    location: "Noida",
    course: "Digital Marketing"
  },
  {
    videoSrc: review8,
    name: "Mahir",
    location: "Delhi",
    course: "Content Marketing"
  }
];
function VideoModal({ src, onClose }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "testimonial-modal-overlay",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "testimonial-modal-inner",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "testimonial-modal-close",
                onClick: onClose,
                "aria-label": "Close video",
                children: /* @__PURE__ */ jsx(X, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "video",
              {
                ref: videoRef,
                src,
                controls: true,
                autoPlay: true,
                playsInline: true,
                className: "testimonial-modal-video"
              }
            )
          ]
        }
      )
    }
  );
}
function VideoCard({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) {
      v.currentTime = 0;
      v.play().catch(() => {
      });
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "testimonial-card",
      style: { animationDelay: `${index * 80}ms` },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick,
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            src: item.videoSrc,
            muted: true,
            playsInline: true,
            preload: "metadata",
            className: "testimonial-card-video"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "testimonial-card-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "testimonial-card-badge", children: /* @__PURE__ */ jsx("span", { children: "WEB MOK · STORY" }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `testimonial-card-play${hovered ? " hovered" : ""}`,
            "aria-label": `Play ${item.name}'s testimonial`,
            children: /* @__PURE__ */ jsx(Play, { size: 22, fill: "white", color: "white" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "testimonial-card-info", children: [
          /* @__PURE__ */ jsx("p", { className: "testimonial-card-name", children: item.name }),
          /* @__PURE__ */ jsxs("p", { className: "testimonial-card-meta", children: [
            item.course,
            " · ",
            item.location
          ] })
        ] })
      ]
    }
  );
}
function Testimonials() {
  const [playingSrc, setPlayingSrc] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "testimonials-section", children: [
    /* @__PURE__ */ jsx("div", { className: "testimonials-bg-glow" }),
    playingSrc && /* @__PURE__ */ jsx(VideoModal, { src: playingSrc, onClose: () => setPlayingSrc(null) }),
    /* @__PURE__ */ jsxs("div", { className: "testimonials-container", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "testimonials-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "testimonials-badge", children: "✦ Success Stories" }),
        /* @__PURE__ */ jsxs("h2", { className: "testimonials-title", children: [
          "Real students,",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "real results" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "testimonials-subtitle", children: "Watch what our students say about their transformation at Web Mok." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "testimonials-grid", children: items.map((item, i) => /* @__PURE__ */ jsx(
        VideoCard,
        {
          item,
          index: i,
          onClick: () => setPlayingSrc(item.videoSrc)
        },
        item.videoSrc
      )) })
    ] })
  ] });
}
const tcs = "/assets/p3-B6GCuxQd-B6GCuxQd.png";
const infosys = "/assets/p4-CfPXyRGC-CfPXyRGC.png";
const wipro = "/assets/p5-4B0YJBLX-4B0YJBLX.png";
const accenture = "/assets/p16-SQ51noBV-SQ51noBV.svg";
const cognizant = "/assets/p6-B39tL6rK-B39tL6rK.png";
const hcl = "/assets/p2-fVN6Puc1-fVN6Puc1.webp";
const ibm = "/assets/p20-BF6EI_fA-BF6EI_fA.png";
const capgemini = "/assets/p17-DLaD7X9z-DLaD7X9z.png";
const techmahindra = "/assets/p19-fS4JI0Qn-fS4JI0Qn.png";
const deloitte = "/assets/p15-Dld--8L5-Dld--8L5.png";
const companies = [
  tcs,
  infosys,
  wipro,
  accenture,
  cognizant,
  hcl,
  ibm,
  capgemini,
  techmahindra,
  deloitte
];
function CompanyMarquee() {
  const loop = [...companies, ...companies];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-white py-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { className: "text-center text-base font-semibold uppercase tracking-[0.2em] text-black", children: "Our Students Are Placed In Top Companies" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-8 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex w-max items-center gap-14 animate-marquee", children: loop.map((logo2, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex items-center justify-center",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo2,
              alt: "company logo",
              className: "h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 md:h-16"
            }
          )
        },
        i
      )) })
    ] })
  ] }) });
}
const features = [
  {
    icon: Rocket,
    title: "Live Projects",
    desc: "Build real, production-grade apps that go straight to your portfolio.",
    accent: "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]"
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement Support",
    desc: "Dedicated placement cell with 100+ hiring partners across India.",
    accent: "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]"
  },
  {
    icon: UserCheck,
    title: "Industry Mentors",
    desc: "1:1 mentorship from engineers shipping at top product companies.",
    accent: "from-[oklch(0.42_0.24_150)] to-[oklch(0.68_0.18_178)]"
  },
  {
    icon: Video,
    title: "Recorded Lectures",
    desc: "Lifetime access to every session — revise at your own pace.",
    accent: "from-[oklch(0.45_0.20_285)] to-[oklch(0.68_0.18_315)]"
  },
  {
    icon: Award,
    title: "Certifications",
    desc: "Industry-recognized certificates after every milestone & capstone.",
    accent: "from-[oklch(0.42_0.18_252)] to-[oklch(0.72_0.16_224)]"
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    desc: "Mock interviews, DSA sprints, resume reviews & HR rounds.",
    accent: "from-[oklch(0.60_0.22_27)] to-[oklch(0.75_0.19_55)]"
  }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative overflow-hidden py-20 md:py-10",
      style: {
        background: "linear-gradient(135deg, oklch(0.99 0.004 230) 0%, oklch(0.96 0.015 240) 50%, oklch(0.98 0.008 250) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "animate-float absolute -top-40 left-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl",
            style: { background: "oklch(0.72 0.16 224)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "animate-float-slow absolute -bottom-32 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl",
            style: { background: "oklch(0.42 0.18 252)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4", children: [
          /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "glass inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 px-4 py-1.5 text-sm font-semibold text-brand-deep", children: "✦ Why Web Mok" }),
            /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-3xl font-extrabold text-foreground md:text-5xl", children: [
              "Everything you need to",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "land a tech job" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-lg text-muted-foreground", children: "We combine live learning, real projects, and dedicated career support — so you don't just learn, you get hired." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/50 hover:shadow-elegant", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "aria-hidden": true,
                className: `absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`,
                  children: /* @__PURE__ */ jsx(f.icon, { className: "h-7 w-7" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-extrabold text-foreground", children: f.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-base leading-relaxed text-muted-foreground", children: f.desc })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${f.accent} transition-all duration-500 group-hover:w-full`
              }
            )
          ] }) }, f.title)) })
        ] })
      ]
    }
  );
}
const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/webmok.in" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/webmok" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/webmokofficial" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/webmok" }
];
function JoinUs() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-10 overflow-hidden", style: { background: "oklch(0.12 0.04 252)" }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute -top-32 right-10 h-64 w-64 rounded-full opacity-10 blur-3xl animate-float-slow",
        style: { background: "oklch(0.60 0.22 27)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-brand-cyan", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-white", children: "Join Us" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-extrabold text-white md:text-5xl", children: "Become Part Of Our Students Community" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: socials.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: s.href,
          className: "group flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-[#0b1120] p-10 transition-all hover:border-white/10 hover:bg-[#111827] hover:shadow-[0_0_40px_-10px_rgba(225,29,72,0.3)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-[#111827] shadow-[0_0_30px_0px_rgba(225,29,72,0.4)] transition-transform group-hover:scale-110", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border border-rose-500/30" }),
              /* @__PURE__ */ jsx(s.icon, { className: "h-8 w-8 text-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-white/70", children: "Follow" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white", children: s.name })
            ] })
          ]
        }
      ) }, s.name)) })
    ] })
  ] });
}
const branches = [
  {
    city: "Rohtak",
    address: "1st Floor, 129 L, near CR Polytechnic Back Gate, Power House, Model Town, Rohtak, Haryana 124001",
    phone: "+91 8950329919"
  },
  {
    city: "Hissar",
    address: "DSB-198, Red Square Market, near by Eminent Mall, Mehta Nagar, Hisar",
    phone: "+91 7800020055"
  },
  {
    city: "Delhi",
    address: "Office No: 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi",
    phone: "+91 8684031003"
  },
  {
    city: "Gurgaon",
    address: "Sector 29, Gurgaon",
    phone: "+91 9876543213"
  },
  {
    city: "Noida",
    address: "Sector 18, Noida",
    phone: "+91 9876543214"
  },
  {
    city: "Dehradun",
    address: "Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun",
    phone: "+91 7206720663"
  },
  {
    city: "Sirsa",
    address: "Office, Sirsa, Haryana 124507",
    phone: "+91 9680061002"
  },
  {
    city: "Jhajjar",
    address: "Charkhi Dadri - Jhajjar Rd, near Bhagat Singh Chowk, Jhajjar, Haryana 124103",
    phone: "+91 7206720234"
  }
];
function Branches() {
  return /* @__PURE__ */ jsxs("section", { id: "branches", className: "branches-section", children: [
    /* @__PURE__ */ jsx("div", { className: "branches-bg-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "branches-container", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "branches-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "branches-badge", children: "✦ Our Presence" }),
        /* @__PURE__ */ jsxs("h2", { className: "branches-title", children: [
          "We are",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Everywhere" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "branches-subtitle", children: "Visit your nearest Web Mok branch and start your journey today." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "branches-grid", children: branches.map((branch, index) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "branch-card",
          style: { animationDelay: `${index * 60}ms` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "branch-card-header", children: [
              /* @__PURE__ */ jsx("div", { className: "branch-city-icon", children: /* @__PURE__ */ jsx(MapPin, { size: 16 }) }),
              /* @__PURE__ */ jsx("h3", { className: "branch-city", children: branch.city })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "branch-divider" }),
            /* @__PURE__ */ jsxs("div", { className: "branch-row", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "branch-icon", size: 15 }),
              /* @__PURE__ */ jsx("p", { className: "branch-address", children: branch.address })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "branch-row", children: [
              /* @__PURE__ */ jsx(Phone, { className: "branch-icon", size: 15 }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${branch.phone}`,
                  className: "branch-phone",
                  children: branch.phone
                }
              )
            ] })
          ]
        }
      ) }, index)) })
    ] })
  ] });
}
function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const course = "Digital Marketing with AI";
  const submit = (e) => {
    e.preventDefault();
    const text = `🚀 Hello Web Mok,

👤 Name: ${name}
📱 Phone: ${phone}

📚 Course:
${course}

📝 Message:
${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "relative overflow-hidden py-10",
      style: {
        background: "linear-gradient(135deg, oklch(0.99 0.004 230) 0%, oklch(0.96 0.015 240) 50%, oklch(0.98 0.008 250) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-40 left-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl",
            style: { background: "oklch(0.72 0.16 224)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4", children: [
          /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-10 max-w-2xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "glass inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 px-4 py-1 text-xs font-semibold text-brand-deep", children: "✦ Contact Us" }),
            /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-2xl font-extrabold text-foreground md:text-4xl", children: [
              "Start Your",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Digital Marketing Journey" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Learn AI-powered marketing with live training & placement support." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 lg:grid-cols-5", children: [
            /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: submit,
                className: "glass rounded-[2rem] border border-white/20 bg-white/70 p-5 shadow-elegant backdrop-blur-xl md:p-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center gap-3 rounded-2xl bg-gradient-brand-soft p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", children: "Digital Marketing with AI" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Industry-ready course with AI tools" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                    /* @__PURE__ */ jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        required: true,
                        value: name,
                        onChange: (e) => setName(e.target.value),
                        className: "c-input",
                        placeholder: "Enter your name"
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Field, { label: "Mobile Number", children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        required: true,
                        type: "tel",
                        value: phone,
                        onChange: (e) => setPhone(e.target.value),
                        className: "c-input",
                        placeholder: "+91 98765 43210"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx(Field, { label: "Selected Course", className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "course-box", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Course Name" }),
                      /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-foreground", children: "Digital Marketing with AI" })
                    ] })
                  ] }) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Message", className: "mt-4", children: /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      required: true,
                      rows: 4,
                      value: message,
                      onChange: (e) => setMessage(e.target.value),
                      className: "c-input resize-none",
                      placeholder: "Tell us about your goals..."
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "submit",
                        className: "group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]",
                        children: [
                          "Send Inquiry",
                          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: `https://wa.me/${WHATSAPP_NUMBER}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-glow",
                        children: [
                          /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                          "WhatsApp"
                        ]
                      }
                    )
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Reveal, { delay: 120, className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col gap-4", children: [
              /* @__PURE__ */ jsx(
                InfoCard,
                {
                  icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                  title: "EMAIL",
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`
                }
              ),
              /* @__PURE__ */ jsx(
                InfoCard,
                {
                  icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                  title: "ADDRESS",
                  value: CONTACT_ADDRESS
                }
              ),
              /* @__PURE__ */ jsx(
                InfoCard,
                {
                  icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                  title: "WHATSAPP",
                  value: `+${WHATSAPP_NUMBER}`,
                  href: `https://wa.me/${WHATSAPP_NUMBER}`
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-5 shadow-elegant", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-4 text-lg font-bold text-foreground", children: "Follow Us" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-3", children: [
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/webmok.in"
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/webmok"
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/webmokofficial"
                  },
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/webmok"
                  }
                ].map(({ icon: Icon, href }, i) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white transition-all duration-300 hover:scale-110 hover:shadow-glow",
                    children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
                  },
                  i
                )) })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        .c-input {
          width: 100%;
          height: 50px;
          border-radius: 1rem;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.95);
          padding: 0 1rem;
          font-size: 0.95rem;
          color: #111827;
          outline: none;
          transition: all .25s ease;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.03);
        }

        textarea.c-input {
          height: auto;
          padding-top: 1rem;
        }

        .c-input::placeholder {
          color: #94a3b8;
        }

        .c-input:focus {
          border-color: var(--brand-cyan);
          background: white;
          box-shadow:
            0 0 0 4px rgba(14, 165, 233, 0.12),
            0 8px 20px rgba(0,0,0,0.04);
        }

        .course-box {
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.9);
          padding: 0.9rem 1rem;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
        }
      ` })
      ]
    }
  );
}
function Field({
  label,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "mb-2 block text-sm font-semibold text-foreground/80", children: label }),
    children
  ] });
}
function InfoCard({
  icon,
  title,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "glass flex items-center gap-4 rounded-3xl p-5 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-glow", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 break-words text-base font-semibold text-foreground", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsx("a", { href, target: "_blank", rel: "noopener noreferrer", children: inner }) : inner;
}
function Footer() {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: "relative overflow-hidden text-primary-foreground",
      style: {
        background: "linear-gradient(135deg, oklch(0.18 0.04 252), oklch(0.32 0.1 244))"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Web Mok", width: 70, height: 70, className: "h-20 w-30  bg-white/20 p-1", loading: "lazy" }) }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-base opacity-80", children: "Premium ed-tech for the next generation of builders. Learn, build, get hired." }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-2", children: [
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/webmok.in",
                  label: "Instagram"
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/webmok",
                  label: "LinkedIn"
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/webmok",
                  label: "Facebook"
                }
              ].map(({ icon: Icon, href, label }, i) => /* @__PURE__ */ jsx(
                "a",
                {
                  href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": label,
                  className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-gradient-brand hover:shadow-glow",
                  children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-bold uppercase tracking-wider opacity-90", children: "Quick Links" }),
              /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-base opacity-80", children: [
                ["Home", "#home"],
                ["Courses", "#courses"],
                ["Mentors", "#mentors"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"]
              ].map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "transition hover:text-brand-cyan", href: h, children: l }) }, h)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-bold uppercase tracking-wider opacity-90", children: "Course" }),
              /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-base opacity-80", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#courses", className: "transition hover:text-brand-cyan", children: "Digital Marketing with AI" }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-bold uppercase tracking-wider opacity-90", children: "Contact" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-base opacity-80", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "transition hover:text-brand-cyan", children: CONTACT_EMAIL }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", rel: "noopener noreferrer", className: "transition hover:text-brand-cyan", children: [
                  "+",
                  WHATSAPP_NUMBER
                ] }) }),
                /* @__PURE__ */ jsx("li", { children: CONTACT_ADDRESS })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm opacity-70 md:flex-row", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Web Mok. All rights reserved."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Crafted with care for future builders." })
          ] })
        ] })
      ]
    }
  );
}
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen md:block",
      style: {
        background: "radial-gradient(circle, oklch(0.72 0.16 224 / 0.25), transparent 60%)",
        filter: "blur(40px)",
        transition: "transform 120ms ease-out"
      }
    }
  );
}
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 top-0 z-[60] h-1 w-full bg-transparent", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "h-full bg-gradient-brand transition-[width] duration-150",
      style: { width: `${p}%`, boxShadow: "0 0 12px var(--brand-cyan)" }
    }
  ) });
}
function FloatingParticles() {
  const parts = useMemo(
    () => Array.from({ length: 14 }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 6,
      dur: 6 + Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.35,
      i
    })),
    []
  );
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: parts.map((p) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute rounded-full bg-gradient-brand",
      style: {
        left: `${p.left}%`,
        top: `${p.top}%`,
        width: p.size,
        height: p.size,
        opacity: p.opacity,
        filter: "blur(1px)",
        animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`
      }
    },
    p.i
  )) });
}
function Index() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(void 0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(t);
  }, []);
  const openModal = (c) => {
    setCourse(c);
    setOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: `fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative h-16 w-16", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-gradient-brand opacity-60" }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-2 rounded-full bg-gradient-brand shadow-glow" })
    ] }) }),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(CursorGlow, {}),
    /* @__PURE__ */ jsx(FloatingParticles, {}),
    /* @__PURE__ */ jsx(Navbar, { onEnroll: () => openModal() }),
    /* @__PURE__ */ jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsx(Hero, { onEnroll: () => openModal() }),
      /* @__PURE__ */ jsx(Courses, { onEnroll: openModal }),
      /* @__PURE__ */ jsx(CompanyMarquee, {}),
      /* @__PURE__ */ jsx(Mentors, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(JoinUs, {}),
      /* @__PURE__ */ jsx(WhyChoose, {}),
      /* @__PURE__ */ jsx(Branches, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", rel: "noopener noreferrer", "aria-label": "Chat on WhatsApp", className: "fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-110", children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-70" })
    ] }),
    /* @__PURE__ */ jsx(EnrollModal, { open, onClose: () => setOpen(false), defaultCourse: course })
  ] });
}
export {
  Index as component
};
