import Image from "next/image";
import type { Service } from "@/data/services";
import { youtubeThumbnail } from "@/lib/youtube";

export default function ServiceDetail({
  service,
  onPlay,
}: {
  service: Service;
  onPlay: (url: string) => void;
}) {
  const isYouTube = service.media.type === "youtube";

  return (
    <div key={service.slug} className="detail-in">
      {/* Media banner */}
      <button
        type="button"
        disabled={!isYouTube}
        onClick={() => isYouTube && onPlay(service.media.src)}
        className="group relative block aspect-video w-full overflow-hidden rounded-sm bg-surface disabled:cursor-default"
      >
        {service.media.type === "video" ? (
          <video
            className="h-full w-full object-cover"
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
              className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink transition-transform duration-300 group-hover:scale-110">
                <span className="ml-0.5 text-base text-base">&#9658;</span>
              </span>
            </span>
          </>
        ) : (
          <Image
            src={service.media.src}
            alt={service.title}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        )}
      </button>

      {/* Eyebrow + title */}
      <p className="meta-label mt-8 text-accent">{service.eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl font-black uppercase text-ink md:text-4xl">
        {service.title}
      </h3>

      {/* Description */}
      <div className="mt-6 flex flex-col gap-4 max-w-2xl">
        {service.description.map((p, i) => (
          <p key={i} className="font-body leading-relaxed text-ink-dim">
            {p}
          </p>
        ))}
      </div>

      {/* Techniques / "<Service> Production" */}
      <div className="mt-12">
        <p className="meta-label mb-5 text-ink-faint">{service.title} Production</p>
        <div className="detail-stagger grid gap-x-8 gap-y-6 md:grid-cols-2">
          {service.techniques.map((t, i) => (
            <div key={t.title} style={{ animationDelay: `${i * 60}ms` }} className="border-t border-line pt-4">
              <p className="font-display text-base font-bold uppercase text-ink">{t.title}</p>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-dim">{t.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications tags */}
      {service.applications && (
        <div className="mt-12">
          <p className="meta-label mb-5 text-ink-faint">
            {service.title} phù hợp với
          </p>
          <div className="detail-stagger flex flex-wrap gap-2.5">
            {service.applications.map((tag, i) => (
              <span
                key={tag}
                style={{ animationDelay: `${i * 35}ms` }}
                className="meta-label rounded-full border border-line px-3.5 py-1.5 text-ink-dim transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Extra: process / rollout / values / goal */}
      {service.extra && (
        <div className="mt-12">
          <p className="meta-label mb-5 text-ink-faint">{service.extra.heading}</p>
          <div className="detail-stagger grid gap-x-8 gap-y-6 md:grid-cols-2">
            {service.extra.items.map((item, i) => (
              <div key={item.title} style={{ animationDelay: `${i * 60}ms` }} className="border-t border-accent/40 pt-4">
                <p className="font-display text-base font-bold uppercase text-ink">{item.title}</p>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-dim">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
