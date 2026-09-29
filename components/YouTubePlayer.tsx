"use client";

import { useState } from "react";
import { youtubeEmbedUrl, youtubeThumbnail } from "@/lib/youtube";

export default function YouTubePlayer({
  url,
  className = "",
  autoplayOnMount = false,
}: {
  url: string;
  className?: string;
  /** Skip the thumbnail/play-button step and load the iframe immediately (e.g. inside a lightbox the user just opened on purpose). */
  autoplayOnMount?: boolean;
}) {
  const [playing, setPlaying] = useState(autoplayOnMount);
  const thumb = youtubeThumbnail(url, "maxresdefault");
  const src = youtubeEmbedUrl(url, { autoplay: true, controls: true });
  if (!src) return null;

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className={`group relative block h-full w-full overflow-hidden bg-surface ${className}`}
      >
        {thumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
            loading="lazy"
          />
        )}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink transition-transform duration-300 group-hover:scale-110">
            <span className="ml-0.5 text-base text-base">&#9658;</span>
          </span>
        </span>
      </button>
    );
  }

  return (
    <iframe
      src={src}
      title="YouTube video"
      className={`h-full w-full ${className}`}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}
