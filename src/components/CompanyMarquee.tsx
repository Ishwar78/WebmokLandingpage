import { Reveal } from "./Reveal";

// Company Logos
import tcs from "../assets/p3-B6GCuxQd.png";
import infosys from "../assets/p4-CfPXyRGC.png";
import wipro from "../assets/p5-4B0YJBLX.png";
import accenture from "../assets/p16-SQ51noBV.svg";
import cognizant from "../assets/p6-B39tL6rK.png";
import hcl from "../assets/p2-fVN6Puc1.webp";
import ibm from "../assets/p20-BF6EI_fA.png";
import capgemini from "../assets/p17-DLaD7X9z.png";
import techmahindra from "../assets/p19-fS4JI0Qn.png";
import deloitte from "../assets/p15-Dld--8L5.png";

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
  deloitte,
];

export function CompanyMarquee() {
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-black">
            Our Students Are Placed In Top Companies
          </h2>
        </Reveal>

        <div className="relative mt-8 overflow-hidden">
          {/* Left Gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"
          />

          {/* Right Gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"
          />

          {/* Marquee */}
          <div className="flex w-max items-center gap-14 animate-marquee">
            {loop.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="company logo"
                  className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
