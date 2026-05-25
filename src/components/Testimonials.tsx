import { useState, useRef, useEffect } from "react";
import { Play, X } from "lucide-react";
import { Reveal } from "./Reveal";

// ✅ Import All Review Videos
import review1 from "@/assets/Review/TM001.mp4";
import review2 from "@/assets/Review/TM0020.mp4";
import review3 from "@/assets/Review/TM0025.mp4";
import review4 from "@/assets/Review/TM0012.mp4";
import review5 from "@/assets/Review/TM0011.mp4";
import review6 from "@/assets/Review/TM0013.mp4";
import review7 from "@/assets/Review/TM0014.mp4";
import review8 from "@/assets/Review/TM0016.mp4";

// ✅ Testimonials Data (8 videos = 2 rows × 4 cols)
const items = [
  {
    videoSrc: review1,
    name: "Nitesh",
    location: "Delhi",
    course: "Digital Marketing",
  },
  {
    videoSrc: review2,
    name: "Kunal",
    location: "Noida",
    course: "Digital Marketing",
  },
  {
    videoSrc: review3,
    name: "Divyanshu",
    location: "Gurgaon",
    course: "SEO Mastery",
  },
  {
    videoSrc: review4,
    name: "Nikhal",
    location: "Rohtak",
    course: "UI/UX",
  },
  {
    videoSrc: review5,
    name: "Bhuwan Suneja",
    location: "Hisar",
    course: "Digital Marketing",
  },
  {
    videoSrc: review6,
    name: "Shruti",
    location: "Dehradun",
    course: "SEO",
  },
  {
    videoSrc: review7,
    name: "Raviju",
    location: "Noida",
    course: "Digital Marketing",
  },
  {
    videoSrc: review8,
    name: "Mahir",
    location: "Delhi",
    course: "Content Marketing",
  },
];

interface ModalProps {
  src: string;
  onClose: () => void;
}

function VideoModal({ src, onClose }: ModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="testimonial-modal-overlay"
      onClick={onClose}
    >
      <div
        className="testimonial-modal-inner"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="testimonial-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          className="testimonial-modal-video"
        />
      </div>
    </div>
  );
}

interface VideoCardProps {
  item: (typeof items)[0];
  index: number;
  onClick: () => void;
}

function VideoCard({ item, index, onClick }: VideoCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preview play on hover
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered]);

  return (
    <div
      className="testimonial-card"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Video thumbnail */}
      <video
        ref={videoRef}
        src={item.videoSrc}
        muted
        playsInline
        preload="metadata"
        className="testimonial-card-video"
      />

      {/* Dark gradient overlay */}
      <div className="testimonial-card-overlay" />

      {/* Top badge */}
      <div className="testimonial-card-badge">
        <span>WEB MOK · STORY</span>
      </div>

      {/* Play button */}
      <button
        className={`testimonial-card-play${hovered ? " hovered" : ""}`}
        aria-label={`Play ${item.name}'s testimonial`}
      >
        <Play size={22} fill="white" color="white" />
      </button>

      {/* Bottom info */}
      <div className="testimonial-card-info">
        <p className="testimonial-card-name">{item.name}</p>
        <p className="testimonial-card-meta">
          {item.course} · {item.location}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background glow */}
      <div className="testimonials-bg-glow" />

      {/* Video Modal */}
      {playingSrc && (
        <VideoModal src={playingSrc} onClose={() => setPlayingSrc(null)} />
      )}

      <div className="testimonials-container">
        {/* Heading */}
        <Reveal>
          <div className="testimonials-heading">
            <span className="testimonials-badge">✦ Success Stories</span>

            <h2 className="testimonials-title">
              Real students,{" "}
              <span className="text-gradient-brand">real results</span>
            </h2>

            <p className="testimonials-subtitle">
              Watch what our students say about their transformation at Web Mok.
            </p>
          </div>
        </Reveal>

        {/* 4 × 2 Video Grid */}
        <div className="testimonials-grid">
          {items.map((item, i) => (
            <VideoCard
              key={item.videoSrc}
              item={item}
              index={i}
              onClick={() => setPlayingSrc(item.videoSrc)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}