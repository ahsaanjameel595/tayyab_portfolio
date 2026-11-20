import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <ScrollReveal className={className}><article className="group h-full w-full overflow-hidden rounded-lg border border-line bg-surface p-3 transition duration-200 hover:-translate-y-1 hover:border-line">
      <a href={project.image ?? "#"} target={project.image ? "_blank" : undefined} rel={project.image ? "noreferrer" : undefined} aria-label={`Open ${project.title} project image in a new tab`} className="block h-full rounded-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4">
        {project.image && (
          <div className="project-image-frame relative aspect-[4/5] overflow-hidden rounded-md bg-bg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="project-image object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="px-3 pb-3 pt-5">
          <p className="project-category text-xs font-medium uppercase tracking-[0.16em] text-muted">{project.category}</p>
          <h3 className="project-title mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
          {project.summary && <p className="mt-3 text-muted">{project.summary}</p>}
        </div>
      </a>
    </article></ScrollReveal>
  );
}