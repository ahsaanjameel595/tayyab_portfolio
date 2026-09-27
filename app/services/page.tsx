import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { faqs } from "@/data/content";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Strategic visual design services by Tayyab Munir for brands, professionals, and businesses." };
export default function ServicesPage() {
  return <div>
    <Hero eyebrow="Strategic visual design" title="Services built around clarity." description="Design should communicate who you are, what you do, who you help, and what action you want people to take." />
    <section className="border-y border-line py-20"><div className="mx-auto max-w-6xl px-6"><p className="max-w-3xl text-xl leading-9 text-muted">Before visual execution, the work considers positioning, audience, message, brand personality, and desired action. Then typography, colour, hierarchy, and consistency bring that direction to life.</p></div></section>
    <section className="mx-auto max-w-6xl px-6 py-28"><SectionHeading eyebrow="What I offer" title="A visual system for every important touchpoint." /><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>
    <section className="border-y border-line bg-surface-muted py-28"><div className="mx-auto max-w-6xl px-6"><SectionHeading eyebrow="Custom scope" title="Every project starts with the right shape." description="Packages and one-off scopes can be discussed around the actual project rather than a fixed price list. Contact for a custom quote." /><div className="mt-12 grid gap-6 md:grid-cols-3"><article className="border border-line p-6"><p className="text-sm text-accent-dark">One-off</p><h3 className="mt-10 text-2xl font-semibold">A focused design need</h3><p className="mt-3 text-muted">For a defined visual asset or single deliverable.</p></article><article className="border border-line p-6"><p className="text-sm text-accent-dark">Hybrid scope</p><h3 className="mt-10 text-2xl font-semibold">A connected visual system</h3><p className="mt-3 text-muted">For a project that needs several related assets.</p></article><article className="border border-line p-6"><p className="text-sm text-accent-dark">Custom quote</p><h3 className="mt-10 text-2xl font-semibold">A tailored direction</h3><p className="mt-3 text-muted">Project terms are discussed and agreed before work begins.</p></article></div></div></section>
  <section className="mx-auto max-w-4xl px-6 py-28"><SectionHeading eyebrow="FAQ" title="A few practical answers." /><div className="mt-12 divide-y divide-line border-y border-line">{faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-medium marker:hidden">{faq.question}<span className="float-right text-accent-dark transition group-open:rotate-45">+</span></summary><p className="faq-answer max-w-2xl leading-7 text-muted">{faq.answer}</p></details>)}</div></section>
    <CTA heading="Have a project in mind?" label="Contact Me" />
  </div>;
}
