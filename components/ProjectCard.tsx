import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden border-b border-line pb-8"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface">
        {project.cover.type === "video" ? (
          <video
            className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
            muted
            loop
            playsInline
            preload="none"
            poster={project.cover.poster}
          >
            <source src={project.cover.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.cover.src}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="meta-label mb-2 text-ink-faint">{project.index}</p>
          <h3 className="font-display text-xl font-extrabold uppercase text-ink transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5 md:text-2xl">
            {project.title}
          </h3>
          <p className="meta-label mt-2 text-ink-dim">
            {project.categories.join(" / ")}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 text-xl text-ink-dim transition-transform duration-500 ease-cinematic group-hover:translate-x-1 group-hover:text-accent"
        >
          &#8599;
        </span>
      </div>
    </Link>
  );
}
