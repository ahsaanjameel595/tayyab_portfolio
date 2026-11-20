import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StackedCaseStudy } from "@/components/StackedCaseStudy";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Case Studies",
	description: "A closer look at selected graphic design projects and visual outcomes by Tayyab Munir.",
};
export default function CaseStudiesPage() {
	return (
		<div>
			<Hero
				eyebrow="Tayyab Munir · Graphic Designer"
				title="Case Studies"
				description="Selected projects that bring the design process, concept, and final visual outcome into focus."
			/>

			<section className="border-y border-line bg-bg-alt">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<SectionHeading eyebrow="Featured case studies" title="A closer look at the available work." description="These project stories use the records and uploaded visuals currently available in Tayyab's portfolio." />
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-24">
					<div className="space-y-20">
						{projects.map((project, index) => (
							<ScrollReveal key={project.slug} className="border-t border-line pt-8">
							<article className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
								<div>
									<p className="text-sm text-accent">0{index + 1}</p>
									<h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h2>
									<p className="mt-5 text-sm uppercase tracking-[0.16em] text-muted">{project.category}</p>
									{project.summary && <p className="mt-6 max-w-xl leading-7 text-muted">{project.summary}</p>}
								</div>
								{project.slug === "linkedin-banner-2" ? <StackedCaseStudy /> : project.image && (
									<div className="case-study-image-frame relative aspect-[4/5] min-w-0 overflow-hidden bg-bg">
										<Image src={project.image} alt={`${project.title} project visual`} fill sizes="(min-width: 1024px) 48vw, 100vw" className="case-study-image object-contain" />
									</div>
								)}
							</article>
							</ScrollReveal>
						))}
					</div>
			</section>

			<CTA heading="Want to create something similar?" label="Contact Me" />
		</div>
	);
}