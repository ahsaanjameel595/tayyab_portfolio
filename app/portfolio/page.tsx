import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Selected graphic design, brand identity, and stationery work by Tayyab Munir.",
};
export default function PortfolioPage() {
	return (
		<div>
			<Hero
				eyebrow="Tayyab Munir · Graphic Designer"
				title="My Portfolio"
				description="A selection of Tayyab's graphic design work across visual identity, stationery, and branded spaces."
			/>

			<section className="border-y border-line">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<SectionHeading
						eyebrow="Selected work"
						title="Visual ideas, made tangible."
						description="Explore the project images currently available in Tayyab's portfolio."
					/>
				</div>
			</section>

			<section className="border-y border-line bg-surface-muted">
				<div className="mx-auto max-w-6xl px-6 py-24">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
				</div>
			</section>

			<CTA heading="Have a project in mind?" label="Contact Me" />
		</div>
	);
}