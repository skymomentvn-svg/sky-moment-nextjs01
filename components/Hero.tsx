"use client";

import Link from "next/link";
import { useState } from "react";

// Video expected at: /public/videos/hero/sky-moment-hero.mp4
// Replace this file with real footage — falls back to a gradient
// field if the file is missing so the layout never breaks.
export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-base">
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero/hero-poster.jpg"
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/hero/sky-moment-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 0%, #1c1a16 0%, #0A0A0B 62%), linear-gradient(180deg, #0A0A0B 0%, #0A0A0B 100%)",
            }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="mx-auto max-w-content">
          <p className="clip-reveal meta-label mb-6 text-ink-dim">
            FPV / Flycam / Photo / Video &mdash; TVC / Branding / Marketing / VR360
          </p>

          <h1 className="font-display font-black uppercase text-ink">
            <span className="clip-reveal block text-display-xl" style={{ animationDelay: "80ms" }}>
              Sky
            </span>
            <span className="clip-reveal block text-display-xl" style={{ animationDelay: "180ms" }}>
              Moment
            </span>
          </h1>

          <div
            className="clip-reveal mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "320ms" }}
          >
            <p className="max-w-md font-body text-lg text-ink-dim">
              Every flight tells a story.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#work"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-body text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 font-body text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#collaborations"
        className="meta-label absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-ink-dim transition-colors duration-300 hover:text-ink md:flex"
      >
        <span>Scroll to Explore</span>
        <span className="h-8 w-px animate-pulse bg-ink-dim" aria-hidden />
      </a>
    </section>
  );
}
