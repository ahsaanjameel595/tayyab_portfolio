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

const projectCopies = [false, true];

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

			<section className="border-y border-line bg-bg-alt">
				<div className="mx-auto max-w-6xl px-6 py-24">
					<div className="project-marquee-wrap">
						<div className="project-marquee-track">
							{projectCopies.map((isDuplicate, copyIndex) => (
								  <div key={copyIndex} className="project-marquee-group" aria-hidden={isDuplicate} inert={isDuplicate}>
									{projects.map((project) => (
										<div key={project.slug} className="project-marquee-item">
											<ProjectCard project={project} className="h-full" />
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<CTA heading="Have a project in mind?" label="Contact Me" />
		</div>
	);
}