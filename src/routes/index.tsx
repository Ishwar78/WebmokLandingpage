import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { EnrollModal } from "@/components/EnrollModal";
import { Mentors } from "@/components/Mentors";
import { Testimonials } from "@/components/Testimonials";
import { CompanyMarquee } from "@/components/CompanyMarquee";
import { WhyChoose } from "@/components/WhyChoose";
import { JoinUs } from "@/components/JoinUs";
import { Branches } from "@/components/Branches";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Mok — Build Your Future With Industry Ready Skills" },
      {
        name: "description",
        content:
          "Web Mok is a premium ed-tech platform offering live, mentor-led training in Full Stack, Java, React, MERN, UI/UX, Python and more. Learn, build & get placed.",
      },
      { property: "og:title", content: "Web Mok — Premium Ed-Tech for Future Builders" },
      { property: "og:description", content: "Industry-ready training with live projects, mentors from top companies, and placement support." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(t);
  }, []);

  const openModal = (c?: string) => {
    setCourse(c);
    setOpen(true);
  };

  return (
    <>
      {/* Loader */}
      <div
        aria-hidden
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 animate-ping rounded-full bg-gradient-brand opacity-60" />
          <span className="absolute inset-2 rounded-full bg-gradient-brand shadow-glow" />
        </div>
      </div>

      <ScrollProgress />
      <CursorGlow />
      <FloatingParticles />

      <Navbar onEnroll={() => openModal()} />

      <main className="relative">
        <Hero onEnroll={() => openModal()} />
        <Courses onEnroll={openModal} />
        <CompanyMarquee />
        <Mentors />
        <Testimonials />
        <JoinUs />
        <WhyChoose />
        <Branches />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-70" />
      </a>

      <EnrollModal open={open} onClose={() => setOpen(false)} defaultCourse={course} />
    </>
  );
}
