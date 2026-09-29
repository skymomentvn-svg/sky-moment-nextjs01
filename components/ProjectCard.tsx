import { youtubeThumbnail } from "@/lib/youtube";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (url: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(project.cover.src)}
      className="group relative block w-full overflow-hidden border-b border-line pb-8 text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={youtubeThumbnail(project.cover.src, "maxresdefault")}
          alt={project.title}
          className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink">
            <span className="ml-0.5 text-base text-base">&#9658;</span>
          </span>
        </span>
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
    </button>
  );
}
