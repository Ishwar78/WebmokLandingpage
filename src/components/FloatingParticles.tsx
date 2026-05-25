import { useMemo } from "react";

export function FloatingParticles() {
  const parts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 6,
        dur: 6 + Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.35,
        i,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {parts.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full bg-gradient-brand"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(1px)",
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
