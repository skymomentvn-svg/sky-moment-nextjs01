import Image from "next/image";
import type { GalleryItem } from "@/data/projects";

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          className={`relative overflow-hidden rounded-sm bg-surface ${
            i === 0 ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
          }`}
        >
          {item.type === "video" ? (
            <video
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="none"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={item.src}
              alt={item.caption || ""}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}
