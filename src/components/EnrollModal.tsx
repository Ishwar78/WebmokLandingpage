import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function EnrollModal({
  open,
  onClose,
  defaultCourse,
}: {
  open: boolean;
  onClose: () => void;
  defaultCourse?: string;
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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Web Mok, I want to enroll in ${course}.\nName: ${name}\nPhone: ${phone}\nCity: ${city}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md animate-[scale-in_0.25s_ease-out] overflow-hidden rounded-3xl glass shadow-elegant">
        <div className="bg-gradient-brand p-5 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold opacity-90">Free Inquiry</p>
              <h3 className="mt-0.5 text-xl font-bold">Enroll With Web Mok</h3>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-sm opacity-90">
            Submit and we'll continue the chat on WhatsApp.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4 bg-card/80 p-6">
          <Field label="Full Name">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="input"
            />
          </Field>
          <Field label="Mobile Number">
            <input
              required
              type="tel"
              pattern="[0-9+\s\-]{7,15}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="input"
            />
          </Field>
          <Field label="Course">
            <select
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="input"
            >
              <option value="Digital Marketing with AI">Digital Marketing with AI</option>
              <option value="Counseling">Free Counseling</option>
            </select>
          </Field>
          <Field label="City">
            <input
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Bengaluru"
              className="input"
            />
          </Field>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-5 py-3 text-base font-semibold text-primary-foreground"
          >
            Send on WhatsApp
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
