"use client";

import { useEffect, useRef } from "react";
import FpvDroneHero from "./FpvDroneHero";

const PROGRESS_MS = 1900; // slower, deliberate pace reads as cinematic rather than rushed
const JUMP_AT = 58; // % progress at which the page jumps to the section (screen fully covered)
const PHASES: [number, string][] = [
  [0, "ARMING"],
  [10, "AIRBORNE"],
  [88, "LANDING"],
];

// A gentle ease-in-out — no snap at either end, which is what reads as
// "stable" rather than mechanical.
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
};

type FlightFrame = {
  cx: number;
  cy: number;
  scale: number;
  tilt: number;
  opacity: number;
  blurPx: number;
};

// Two distinct flight patterns. Each click picks one at random, but never
// the same one twice in a row, so the loader stays varied without ever
// feeling like it's just replaying the last clip.
const FLIGHTS: ((t: number, climb: number) => FlightFrame)[] = [
  // 1) Single circular orbit that swings toward camera (near, big, sharp)
  //    and away (far, small, softly faded) once per lap.
  (t, climb) => {
    const angle = t * Math.PI * 2; // one lap
    const radius = 26 * climb;
    const depth = (1 - Math.cos(angle)) / 2; // 0 = nearest camera, 1 = farthest
    return {
      cx: radius * Math.sin(angle),
      cy: 26 - climb * 30 - radius * 0.35 * Math.cos(angle) + (1 - depth) * climb * 4,
      scale: climb * (1.22 - 0.32 * depth),
      tilt: climb * Math.sin(angle) * 10,
      opacity: climb * (1 - 0.4 * depth),
      blurPx: depth > 0.6 ? (depth - 0.6) * 1.6 : 0,
    };
  },
  // 2) Straight vertical takeoff with a gentle hover sway — no orbit,
  //    no near/far pass, just a calm, steady climb and descent.
  (t, climb) => {
    const sway = Math.sin(t * Math.PI * 3);
    return {
      cx: sway * 5 * climb,
      cy: 26 - climb * 34 + Math.sin(t * Math.PI * 6) * 1.2 * climb,
      scale: 1 + climb * 0.16,
      tilt: sway * 5 * climb,
      opacity: climb,
      blurPx: 0,
    };
  },
];

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
  const barTopRef = useRef<HTMLDivElement>(null);
  const barBottomRef = useRef<HTMLDivElement>(null);
  const lastFlightRef = useRef<number | null>(null);

  useEffect(() => {
    let busy = false;
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pickFlight = () => {
      if (FLIGHTS.length < 2) return 0;
      let next = Math.floor(Math.random() * FLIGHTS.length);
      if (next === lastFlightRef.current) next = (next + 1) % FLIGHTS.length;
      lastFlightRef.current = next;
      return next;
    };

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
      const flight = FLIGHTS[pickFlight()];
      overlay.style.visibility = "visible";
      if (destRef.current) destRef.current.textContent = `\u2192 ${(link.textContent || "").trim().toUpperCase()}`;
      overlay.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, fill: "forwards" });

      const start = performance.now();
      let jumped = false;

      const finish = () => {
        const out = overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, fill: "forwards" });
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
        if (spdRef.current) spdRef.current.textContent = String(Math.round(Math.sin(t * Math.PI) * 90)).padStart(3, "0");

        // Cinematic letterbox bars: slide in as the shot opens, hold
        // steady through the flight, slide back out just before landing.
        const frame = smoothstep(0, 0.08, t) * (1 - smoothstep(0.94, 1, t));
        if (barTopRef.current) barTopRef.current.style.transform = `scaleY(${frame})`;
        if (barBottomRef.current) barBottomRef.current.style.transform = `scaleY(${frame})`;

        // Lift off, fly the pattern chosen for this click, then ease back
        // down to land. Every curve uses the same smooth climb envelope so
        // nothing snaps or jitters regardless of which pattern plays.
        const climb = smoothstep(0, 0.16, t) - smoothstep(0.84, 1, t);
        const f = flight(t, climb);
        droneRef.current?.setAttribute(
          "transform",
          `translate(${f.cx.toFixed(2)} ${f.cy.toFixed(2)}) scale(${Math.max(f.scale, 0.001).toFixed(3)}) rotate(${f.tilt.toFixed(2)})`
        );
        if (droneRef.current) {
          droneRef.current.style.opacity = String(f.opacity);
          droneRef.current.style.filter = f.blurPx > 0 ? `blur(${f.blurPx.toFixed(2)}px)` : "none";
        }
        shadowRef.current?.setAttribute("cx", String((f.cx * 0.6).toFixed(2)));
        shadowRef.current?.setAttribute("rx", String(34 * (1 - 0.5 * climb)));
        shadowRef.current?.setAttribute("opacity", String((0.7 * (1 - 0.5 * climb)).toFixed(3)));
        // Propeller speed eases continuously with climb — no discrete
        // jump between "slow" and "fast" states.
        svgRef.current?.style.setProperty("--spin", `${(0.42 - climb * 0.32).toFixed(3)}s`);

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
      {/* Cinematic letterbox bars */}
      <div
        ref={barTopRef}
        className="absolute inset-x-0 top-0 h-[6vh] max-h-16 origin-top bg-black"
        style={{ transform: "scaleY(0)" }}
      />
      <div
        ref={barBottomRef}
        className="absolute inset-x-0 bottom-0 h-[6vh] max-h-16 origin-bottom bg-black"
        style={{ transform: "scaleY(0)" }}
      />

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
