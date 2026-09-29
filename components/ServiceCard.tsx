import Image from "next/image";
import type { Service } from "@/data/services";
import { youtubeThumbnail } from "@/lib/youtube";

export default function ServiceCard({
  service,
  onPlay,
}: {
  service: Service;
  /** Called when the card's media is a YouTube link and the person clicks to watch it. */
  onPlay: (url: string) => void;
}) {
  const isYouTube = service.media.type === "youtube";
  const Wrapper = isYouTube ? "button" : "div";

  return (
    <Wrapper
      {...(isYouTube ? { type: "button", onClick: () => onPlay(service.media.src) } : {})}
      className="group relative block w-full overflow-hidden border-b border-line pb-8 text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface">
        {service.media.type === "video" ? (
          <video
            className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
            muted
            loop
            playsInline
            preload="none"
            poster={service.media.poster}
          >
            <source src={service.media.src} type="video/mp4" />
          </video>
        ) : isYouTube ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={youtubeThumbnail(service.media.src, "maxresdefault")}
              alt={service.title}
              className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink">
                <span className="ml-0.5 text-base text-base">&#9658;</span>
              </span>
            </span>
          </>
        ) : (
          <Image
            src={service.media.src}
            alt={service.title}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="meta-label mb-2 text-ink-faint">{service.index}</p>
          <h3 className="font-display text-xl font-extrabold uppercase text-ink transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5 md:text-2xl">
            {service.title}
          </h3>
          <p className="meta-label mt-2 text-ink-dim">{service.summary}</p>
          {service.detail && (
            <p className="mt-1 font-body text-sm text-ink-faint">{service.detail}</p>
          )}
        </div>
        <span
          aria-hidden
          className="mt-1 text-xl text-ink-dim transition-transform duration-500 ease-cinematic group-hover:translate-x-1 group-hover:text-accent"
        >
          &#8599;
        </span>
      </div>
    </Wrapper>
  );
}
