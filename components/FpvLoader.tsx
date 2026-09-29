"use client";

import { useEffect, useRef } from "react";
import FpvDroneHero from "./FpvDroneHero";

const PROGRESS_MS = 1300;
const JUMP_AT = 55; // % progress at which the page jumps to the section (screen fully covered)
const PHASES: [number, string][] = [
  [0, "ARMING"],
  [20, "TAKEOFF"],
  [60, "CLIMB"],
  [90, "CRUISE"],
];

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// Intercepts clicks on same-page anchor links inside <header>, plays an FPV
// "loading" sequence, and jumps to the section while the screen is covered.
export default function FpvLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const phaseRef = useRef<HTMLParagraphElement>(null);
  const destRef = useRef<HTMLParagraphElement>(null);
  const altRef = useRef<HTMLSpanElement>(null);
  const spdRef = useRef<HTMLSpanElement>(null);
  const droneRef = useRef<SVGGElement>(null);
  const shadowRef = useRef<SVGEllipseElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let busy = false;
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.("header a[href]") as HTMLAnchorElement | null;
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      e.preventDefault(); // stop Next <Link> from doing its own hash navigation
      if (busy) return;

      const go = () => {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: "instant" as ScrollBehavior,
        });
        history.replaceState(null, "", url.hash);
      };

      const overlay = overlayRef.current;
      if (reduce.matches || !overlay || typeof overlay.animate !== "function") {
        go();
        return;
      }

      busy = true;
      overlay.style.visibility = "visible";
      if (destRef.current) destRef.current.textContent = `\u2192 ${(link.textContent || "").trim().toUpperCase()}`;
      overlay.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, fill: "forwards" });

      const start = performance.now();
      let jumped = false;

      const finish = () => {
        const out = overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: "forwards" });
        out.onfinish = () => {
          overlay.getAnimations().forEach((a) => a.cancel());
          overlay.style.visibility = "hidden";
          busy = false;
        };
      };

      const tick = (now: number) => {
        const t = Math.min((now - start) / PROGRESS_MS, 1);
        const p = Math.round(ease(t) * 100);
        if (barRef.current) barRef.current.style.transform = `scaleX(${p / 100})`;
        if (pctRef.current) pctRef.current.textContent = String(p).padStart(2, "0");
        if (phaseRef.current) {
          const phase = [...PHASES].reverse().find(([from]) => p >= from);
          phaseRef.current.textContent = phase ? phase[1] : "ARMING";
        }
        if (altRef.current) altRef.current.textContent = String(Math.round(p * 1.2)).padStart(3, "0");
        if (spdRef.current) spdRef.current.textContent = String(Math.round(Math.sin(t * Math.PI) * 140)).padStart(3, "0");

        // Takeoff: props spin up, drone lifts off, its shadow shrinks.
        const lift = Math.min(Math.max((t - 0.12) / 0.7, 0), 1);
        const le = 1 - Math.pow(1 - lift, 3);
        const y = 26 - le * 46 + Math.sin(now / 260) * 1.2 * le;
        const tilt = Math.sin(now / 420) * 2.5 * le;
        droneRef.current?.setAttribute("transform", `translate(0 ${y.toFixed(2)}) rotate(${tilt.toFixed(2)})`);
        shadowRef.current?.setAttribute("rx", String(34 * (1 - 0.5 * le)));
        shadowRef.current?.setAttribute("opacity", String(0.7 * (1 - 0.6 * le)));
        svgRef.current?.style.setProperty("--spin", p < 12 ? "0.5s" : p < 28 ? "0.28s" : "0.12s");

        if (!jumped && p >= JUMP_AT) {
          jumped = true;
          go();
        }
        if (t < 1) raf = requestAnimationFrame(tick);
        else finish();
      };
      raf = requestAnimationFrame(tick);
    };

    // Capture phase so we run before Next's <Link> handler.
    document.addEventListener("click", onClick, true);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[45] bg-base"
      style={{ visibility: "hidden", opacity: 0 }}
    >
      {/* OSD corner brackets */}
      <div className="absolute left-6 top-24 h-8 w-8 border-l border-t border-accent/60 md:left-10" />
      <div className="absolute right-6 top-24 h-8 w-8 border-r border-t border-accent/60 md:right-10" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-accent/60 md:left-10" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-accent/60 md:right-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <FpvDroneHero droneRef={droneRef} shadowRef={shadowRef} svgRef={svgRef} size={200} />

        <p ref={phaseRef} className="meta-label text-accent">ARMING</p>
        <p ref={destRef} className="font-display text-2xl font-black uppercase text-ink md:text-4xl" />

        <div className="h-px w-56 bg-line md:w-72">
          <div ref={barRef} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
        </div>
        <p className="meta-label text-ink-dim">
          <span ref={pctRef} className="text-ink">00</span>%
        </p>
      </div>

      <div className="meta-label absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-6 text-ink-dim">
        <span>ALT <span ref={altRef} className="text-ink">000</span> M</span>
        <span>SPD <span ref={spdRef} className="text-ink">000</span> KM/H</span>
      </div>
    </div>
  );
}
