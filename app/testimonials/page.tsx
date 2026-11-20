import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Testimonials",
	description: "Client feedback for Tayyab Munir's graphic design work.",
};

const reviewScreenshots = [
	{
		src: "/images/testimonials/client-review.jpeg",
		alt: "LinkedIn recommendation from Amit Mehta, Vice President at Accenture",
		caption: "Amit Mehta • Vice President, Accenture",
		width: 777,
		height: 385,
	},
	{
		src: "/images/testimonials/client-review-2.jpeg",
		alt: "Five-star client testimonial from Francesca Rahimi, Founder",
		caption: "Francesca Rahimi • Founder",
		width: 1200,
		height: 627,
	},
	{
		src: "/images/testimonials/review-3-design.jpeg",
		alt: "Designed feature summarizing Francesca Rahimi's feedback on a LinkedIn banner redesign",
		caption: "Francesca Rahimi • Review feature",
		width: 1080,
		height: 1350,
	},
];

const reviewCopies = [false, true];

export default function TestimonialsPage() {
	return (
		<div>
			<Hero
				eyebrow="Tayyab Munir · Graphic Designer"
				title="Client Testimonials"
				description="A place for thoughtful feedback from the people and teams Tayyab has worked with."
			/>

			<section className="light-section border-y border-light-line bg-light-bg">
				<div className="mx-auto max-w-6xl px-6 py-24">
					<SectionHeading
						eyebrow="Testimonials"
						title="Feedback from clients and collaborators."
						description="Real client reviews shown in their original format."
					/>

					<div className="testimonial-marquee-wrap mt-12" role="region" aria-label="Client review images">
						<div className="testimonial-marquee-track">
							{reviewCopies.map((isDuplicate, copyIndex) => (
								<div key={copyIndex} className="testimonial-marquee-group" aria-hidden={isDuplicate} inert={isDuplicate}>
									{reviewScreenshots.map((review) => (
										<figure key={review.src} className="testimonial-marquee-item h-full overflow-hidden rounded-lg border border-line bg-surface p-3">
										<a
											href={review.src}
											target="_blank"
											rel="noreferrer"
											aria-label={`Open the full ${review.caption} in a new tab`}
											className="group block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
										>
											<Image
												src={review.src}
												alt={review.alt}
												width={review.width}
												height={review.height}
												sizes="(min-width: 1280px) 416px, (min-width: 768px) 38vw, 78vw"
												className="h-auto w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
											/>
										</a>
										<figcaption className="flex items-center justify-between gap-4 px-1 pt-4">
											<span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Client review</span>
											<span className="text-right text-sm text-text">{review.caption}</span>
										</figcaption>
									</figure>
									))}
								</div>
							))}
						</div>
					</div>

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