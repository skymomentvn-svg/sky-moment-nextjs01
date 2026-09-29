"use client";

import { useEffect, useRef } from "react";
import { FpvDroneShape } from "./FpvDrone";

// Curvy flight line, top to bottom. Drone follows it as the page scrolls.
const FLIGHT_PATH = "M30 0 C58 120 2 240 30 360 S58 620 30 760 S2 900 30 1000";

export default function FlightHUD() {
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const droneRef = useRef<SVGGElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const altRef = useRef<HTMLSpanElement>(null);
  const spdRef = useRef<HTMLSpanElement>(null);
  const dstRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const trail = trailRef.current;
    const drone = droneRef.current;
    if (!path || !trail || !drone) return;

    const total = path.getTotalLength();
    trail.style.strokeDasharray = `${total}`;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let current = 0;
    let vel = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let raf = 0;
    let running = false;

    const frame = (now: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? window.scrollY / max : 0;
      const dt = Math.max(now - lastT, 1);
      const inst = (Math.abs(window.scrollY - lastY) / dt) * 1000;
      vel += (inst - vel) * 0.15;
      lastY = window.scrollY;
      lastT = now;
      current += (target - current) * (reduce ? 1 : 0.12);

      const len = current * total;
      const a = path.getPointAtLength(len);
      const b = path.getPointAtLength(Math.min(len + 2, total));
      const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      drone.setAttribute("transform", `translate(${a.x} ${a.y}) rotate(${angle})`);
      trail.style.strokeDashoffset = `${total - len}`;

      if (streakRef.current) {
        streakRef.current.style.opacity = reduce ? "0" : String(Math.min(vel / 3500, 0.7));
      }
      const alt = Math.round(60 + Math.sin(current * Math.PI * 3) * 40 + current * 80);
      if (altRef.current) altRef.current.textContent = String(alt).padStart(3, "0");
      if (spdRef.current) spdRef.current.textContent = String(Math.min(Math.round(vel / 12), 160)).padStart(3, "0");
      if (dstRef.current) dstRef.current.textContent = String(Math.round(window.scrollY * 0.5)).padStart(4, "0");
      if (pctRef.current) pctRef.current.textContent = String(Math.round(current * 100)).padStart(2, "0");

      if (Math.abs(target - current) > 0.0005 || vel > 1) {
        raf = requestAnimationFrame(frame);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      lastT = performance.now();
      raf = requestAnimationFrame(frame);
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none">
      {/* Speed streaks: appear when scrolling fast, like FPV motion at speed */}
      <div
        ref={streakRef}
        className="fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 4deg, rgba(243,242,238,0.07) 4deg 4.4deg)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 42%, black 92%)",
          maskImage: "radial-gradient(circle at 50% 50%, transparent 42%, black 92%)",
        }}
      />

      {/* Flight line + drone, right edge */}
      <div className="fixed bottom-24 right-1 top-24 z-40 w-10 md:right-4 md:w-14">
        <svg viewBox="0 0 60 1000" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
          <path ref={pathRef} d={FLIGHT_PATH} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeDasharray="3 6" />
          <path ref={trailRef} d={FLIGHT_PATH} fill="none" stroke="#D9A15C" strokeWidth="2" strokeLinecap="round" strokeDashoffset="0" />
          <g ref={droneRef}>
            <g transform="scale(0.8)">
              <FpvDroneShape spin />
            </g>
          </g>
        </svg>
      </div>

      {/* OSD telemetry, bottom-left */}
      <div className="meta-label fixed bottom-6 left-6 z-40 hidden gap-6 text-ink-dim sm:flex md:left-10">
        <span>ALT <span ref={altRef} className="text-ink">060</span> M</span>
        <span>SPD <span ref={spdRef} className="text-ink">000</span> KM/H</span>
        <span>DST <span ref={dstRef} className="text-ink">0000</span> M</span>
        <span>FLIGHT <span ref={pctRef} className="text-accent">00</span>%</span>
      </div>
    </div>
  );
}
