import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import type { Metadata } from "next";

type CaseStudy = {
	title: string;
	category: string;
	project: Project;
	images: string[];
	overview: string;
	focus: string;
	deliverables: string;
	outcome: string;
};

function getProject(slug: string) {
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		throw new Error(`Project not found: ${slug}`);
	}

	return project;
}

const syntrix = getProject("tayyab-1");
const syntrixBuilding = getProject("tayyab-6");
const businessCard = getProject("tayyab-3");
const letterhead = getProject("tayyab-4");
const stationery = getProject("tayyab-5");

const caseStudies: CaseStudy[] = [
	{
		title: "Syntrix",
		category: "Tech Brand Identity & Visual Guidelines",
		project: syntrix,
		images: [syntrix.image, syntrixBuilding.image].filter((image): image is string => Boolean(image)),
		overview: "A tech innovation brand identity presented through the available Syntrix visuals.",
		focus: "Logo design, colour palette, typography, logo construction and grid, logo variations, and brand consistency.",
		deliverables: "Logo, colour palette, typography, logo variations, stationery, and brand guidelines.",
		outcome: "A connected identity system shown across the uploaded brand and office visuals.",
	},
	{
		title: "Med Healthcare — Letterhead & Business Card Design",
		category: "Business Card & Stationery Design",
		project: businessCard,
		images: [businessCard.image, letterhead.image, stationery.image].filter((image): image is string => Boolean(image)),
		overview: "Letterhead and business card design for a medical company providing medical services at customers' doorstep.",
		focus: "Clear, professional stationery design with readable typography and visual hierarchy.",
		deliverables: "Letterhead, business card, and related stationery visuals.",
		outcome: "The available print design outcomes are shown together in the responsive gallery.",
	},
];

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

			<section className="border-y border-line bg-surface-muted">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<SectionHeading eyebrow="Featured case studies" title="A closer look at the available work." description="These project stories use the records and uploaded visuals currently available in Tayyab's portfolio." />
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-24">
				<div className="space-y-32">
					{caseStudies.map((caseStudy, index) => (
						<article key={caseStudy.title} className="border-t border-line pt-8">
							<div className="grid min-w-0 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
								<div>
									<p className="text-sm text-muted">0{index + 1}</p>
									<h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{caseStudy.title}</h2>
									<p className="mt-5 text-sm uppercase tracking-[0.16em] text-muted">{caseStudy.category}</p>
									<div className="mt-12 space-y-8 text-sm">
										<div>
											<h3 className="font-semibold">Project overview</h3>
											<p className="mt-2 leading-7 text-muted">{caseStudy.overview}</p>
										</div>
										<div>
											<h3 className="font-semibold">Design focus / objective</h3>
											<p className="mt-2 leading-7 text-muted">{caseStudy.focus}</p>
										</div>
										<div>
											<h3 className="font-semibold">Deliverables</h3>
											<p className="mt-2 leading-7 text-muted">{caseStudy.deliverables}</p>
										</div>
										<div>
											<h3 className="font-semibold">Visual outcome</h3>
											<p className="mt-2 leading-7 text-muted">{caseStudy.outcome}</p>
										</div>
									</div>
								</div>

								<div className="grid min-w-0 gap-5 sm:grid-cols-2">
									{caseStudy.images.map((image, imageIndex) => (
										<div key={image} className={`case-study-image-frame relative min-h-0 min-w-0 overflow-hidden bg-surface-muted xl:min-h-72 ${imageIndex === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}>
											<Image src={image} alt={`${caseStudy.title} project visual ${imageIndex + 1}`} fill sizes="(min-width: 1024px) 48vw, 100vw" className="case-study-image object-cover" />
										</div>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<CTA heading="Want to create something similar?" label="Contact Me" />
		</div>
	);
}