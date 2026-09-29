import { youtubeEmbedUrl } from "@/lib/youtube";

// Fills its parent (which must be position:relative/absolute) the same
// way a <video autoPlay muted loop> cover-fit background would, but
// backed by a YouTube link instead of a local file.
export default function YouTubeBackground({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) {
  const src = youtubeEmbedUrl(url, { autoplay: true, mute: true, loop: true, controls: false });
  if (!src) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <iframe
        src={src}
        title="Background video"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        allow="autoplay; encrypted-media"
        loading="lazy"
      />
    </div>
  );
}
