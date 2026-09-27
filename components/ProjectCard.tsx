import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <ScrollReveal><article data-cursor="VIEW" className="group overflow-hidden rounded-lg border border-line bg-surface p-3 shadow-[0_8px_24px_rgba(23,23,23,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_38px_rgba(23,23,23,0.1)]">
      {project.image && (
        <div className="project-image-frame relative aspect-[4/3] overflow-hidden rounded-md bg-surface-muted">
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
              <p className="project-category text-xs font-medium uppercase tracking-[0.16em] text-accent-dark">{project.category}</p>
              <h3 className="project-title mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-muted">{project.summary}</p>
      </div>
    </article></ScrollReveal>
  );
}