"use client";

import { useEffect, useRef, useState } from "react";
import { showreelMedia } from "@/data/media";
import { youtubeThumbnail } from "@/lib/youtube";
import YouTubePlayer from "./YouTubePlayer";

export default function Showreel() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isYouTube = showreelMedia.kind === "youtube";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content text-center">
        <p className="meta-label mb-6 text-ink-dim">Showreel</p>
        <h2 className="font-display text-display-lg font-black uppercase leading-[0.96] text-ink">
          A different
          <br />
          perspective.
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative mx-auto mt-14 block aspect-video w-full max-w-4xl overflow-hidden rounded-sm bg-surface"
        >
          {isYouTube ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={youtubeThumbnail(showreelMedia.url, "maxresdefault")}
              alt=""
              className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              loading="lazy"
            />
          ) : (
            <video
              className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              poster="/images/hero/showreel-poster.jpg"
            >
              <source src={showreelMedia.src} type="video/mp4" />
            </video>
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-body text-sm font-semibold text-base transition-transform duration-300 group-hover:scale-105">
              &#9658; Play Showreel
            </span>
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close showreel"
            className="absolute right-5 top-5 z-10 font-body text-sm text-ink-dim transition-colors hover:text-ink md:right-10 md:top-10"
          >
            Close &#10005;
          </button>

          {isYouTube ? (
            <div className="aspect-video w-full max-w-5xl">
              <YouTubePlayer url={showreelMedia.url} autoplayOnMount />
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="max-h-full max-w-full"
                autoPlay
                playsInline
                onEnded={() => setPlaying(false)}
              >
                <source src={showreelMedia.src} type="video/mp4" />
              </video>

              <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="meta-label rounded-full border border-line px-5 py-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="meta-label rounded-full border border-line px-5 py-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {muted ? "Unmute" : "Mute"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
