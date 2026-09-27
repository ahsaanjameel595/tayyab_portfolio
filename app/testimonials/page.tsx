import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Testimonials",
	description: "Client feedback for Tayyab Munir's graphic design work.",
};
export default function TestimonialsPage() {
	return (
		<div>
			<Hero
				eyebrow="Tayyab Munir · Graphic Designer"
				title="Client Testimonials"
				description="A place for thoughtful feedback from the people and teams Tayyab has worked with."
			/>

			<section className="border-y border-line bg-surface-muted">
				<div className="mx-auto max-w-6xl px-6 py-24">
					<SectionHeading
						eyebrow="Testimonials"
						title="Feedback from clients and collaborators."
						description="A real client review, shown in its original format."
					/>

					<ScrollReveal className="mt-12">
						<figure className="max-w-4xl overflow-hidden rounded-lg border border-line bg-surface p-3 shadow-[0_8px_24px_rgba(28,27,25,0.08)]">
							<a
								href="/images/testimonials/WhatsApp%20Image%202026-09-26%20at%2011.27.42%20PM.jpeg"
								target="_blank"
								rel="noreferrer"
								aria-label="Open the full client review screenshot in a new tab"
								className="group block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
							>
								<Image
									src="/images/testimonials/WhatsApp%20Image%202026-09-26%20at%2011.27.42%20PM.jpeg"
									alt="Screenshot of a client review"
									width={777}
									height={385}
									sizes="(min-width: 896px) 896px, calc(100vw - 3rem)"
									className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
								/>
							</a>
							<figcaption className="flex items-center justify-between gap-4 px-1 pt-4">
								<span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Client Testimonial</span>
								<a
									href="/images/testimonials/WhatsApp%20Image%202026-09-26%20at%2011.27.42%20PM.jpeg"
									target="_blank"
									rel="noreferrer"
									className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent-dark motion-reduce:transition-none"
								>
									View full review
								</a>
							</figcaption>
						</figure>
					</ScrollReveal>

					{testimonials.length > 0 && (
						<div className="mt-12 grid gap-6 md:grid-cols-2">
							{testimonials.map((testimonial) => (
								<TestimonialCard key={`${testimonial.name}-${testimonial.role}`} testimonial={testimonial} />
							))}
						</div>
					)}
				</div>
			</section>

			<CTA heading="Let&apos;s work together" label="Contact Me" />
		</div>
	);
}