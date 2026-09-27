import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact Tayyab Munir about a freelance graphic design project.",
};
export default function ContactPage() {
	return (
		<div>
			<Hero
				eyebrow="Tayyab Munir · Graphic Designer"
				title="Let&apos;s Work Together"
				description="Have a design project in mind? Share a few details and start a conversation about how Tayyab can help shape it visually."
			/>

			<section className="border-y border-line bg-surface-muted">
				<div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<SectionHeading eyebrow="Contact information" title="Start with a direct connection." />
						<div className="mt-12 space-y-7">
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-muted">Name</p>
								<p className="mt-2 text-lg">Tayyab Munir</p>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-muted">Email</p>
								<a className="mt-2 block text-lg underline underline-offset-4 hover:opacity-60" href="mailto:tayyabmunir1212@gmail.com">tayyabmunir1212@gmail.com</a>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-muted">Phone</p>
								<a className="mt-2 block text-lg underline underline-offset-4 hover:opacity-60" href="tel:03125849912">03125849912</a>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-muted">LinkedIn</p>
								<a className="mt-2 block break-all text-lg underline underline-offset-4 hover:opacity-60" href="https://www.linkedin.com/in/tayyabmunirvisuals/" target="_blank" rel="noreferrer">linkedin.com/in/tayyabmunirvisuals</a>
							</div>
						</div>

						<div className="mt-14 border-t border-line pt-6">
							<p className="text-xs uppercase tracking-[0.16em] text-muted">Location</p>
							<p className="mt-3 text-lg font-medium">Lahore, Pakistan</p>
						</div>

						<div className="mt-8 border-t border-line pt-6">
							<p className="text-xs uppercase tracking-[0.16em] text-muted">Availability</p>
							<p className="mt-3 text-lg font-medium">Available for Freelance</p>
						</div>
					</div>

					<div className="border border-line p-6 md:p-8">
						<div className="flex items-start justify-between gap-6">
							<div>
								<h2 className="text-2xl font-semibold tracking-tight">Tell me about your project</h2>
								<p className="mt-3 text-sm leading-6 text-muted">A few details will help frame the conversation.</p>
							</div>
							<span className="text-xs uppercase tracking-[0.16em] text-muted">Inquiry</span>
						</div>

						<ContactForm />
					</div>
				</div>
			</section>

			<CTA heading="Ready to bring your idea to life?" label="Let&apos;s work together" href="mailto:tayyabmunir1212@gmail.com" />
		</div>
	);
}