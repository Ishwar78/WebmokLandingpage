import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Sparkles,
} from "lucide-react";

import {
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from "@/lib/site";

import { Reveal } from "./Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const course = "Digital Marketing with AI";

  const submit = (e: React.FormEvent) => {
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.99 0.004 230) 0%, oklch(0.96 0.015 240) 50%, oklch(0.98 0.008 250) 100%)",
      }}
    >
      {/* BG BLUR */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.72 0.16 224)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* HEADING */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 px-4 py-1 text-xs font-semibold text-brand-deep">
              ✦ Contact Us
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-foreground md:text-4xl">
              Start Your{" "}
              <span className="text-gradient-brand">
                Digital Marketing Journey
              </span>
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Learn AI-powered marketing with live training & placement support.
            </p>
          </div>
        </Reveal>

        {/* MAIN GRID */}
        <div className="grid gap-5 lg:grid-cols-5">
          
          {/* LEFT FORM */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="glass rounded-[2rem] border border-white/20 bg-white/70 p-5 shadow-elegant backdrop-blur-xl md:p-6"
            >
              {/* COURSE CARD */}
              <div className="mb-5 flex items-center gap-3 rounded-2xl bg-gradient-brand-soft p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Digital Marketing with AI
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    Industry-ready course with AI tools
                  </p>
                </div>
              </div>

              {/* INPUTS */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="c-input"
                    placeholder="Enter your name"
                  />
                </Field>

                <Field label="Mobile Number">
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="c-input"
                    placeholder="+91 98765 43210"
                  />
                </Field>
              </div>

              {/* COURSE */}
              <Field label="Selected Course" className="mt-4">
                <div className="course-box">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Course Name
                      </p>

                      <h4 className="text-sm font-bold text-foreground">
                        Digital Marketing with AI
                      </h4>
                    </div>
                  </div>
                </div>
              </Field>

              {/* MESSAGE */}
              <Field label="Message" className="mt-4">
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="c-input resize-none"
                  placeholder="Tell us about your goals..."
                />
              </Field>

              {/* BUTTONS */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Inquiry
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-glow"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              
              <InfoCard
                icon={<Mail className="h-4 w-4" />}
                title="EMAIL"
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
              />

              <InfoCard
                icon={<MapPin className="h-4 w-4" />}
                title="ADDRESS"
                value={CONTACT_ADDRESS}
              />

              <InfoCard
                icon={<MessageCircle className="h-4 w-4" />}
                title="WHATSAPP"
                value={`+${WHATSAPP_NUMBER}`}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
              />

              {/* SOCIAL */}
              <div className="glass rounded-3xl p-5 shadow-elegant">
                <p className="mb-4 text-lg font-bold text-foreground">
                  Follow Us
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {[
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/webmok.in",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/company/webmok",
                    },
                    {
                      icon: Twitter,
                      href: "https://x.com/webmokofficial",
                    },
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/webmok",
                    },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CSS */}
      <style>{`
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
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-foreground/80">
        {label}
      </span>

      {children}
    </label>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex items-center gap-4 rounded-3xl p-5 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>

        <p className="mt-1 break-words text-base font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}