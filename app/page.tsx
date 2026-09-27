import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { processSteps } from "@/data/content";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div>
      <Hero eyebrow="Strategic visual design" title={"Turn your brand into a stronger\nfirst impression."} description="I help founders, businesses and professionals communicate their value through clear, purposeful and memorable visual design." image="/images/profile/tayyab image new.jpg.jpeg" imageAlt="Tayyab Munir, graphic designer" actions={<><Button href="/portfolio">View My Work</Button><Button href="/contact" variant="outline">Let&apos;s Work Together</Button></>} />
      <section className="overflow-hidden border-y border-line py-5" aria-label="Design disciplines"><div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs font-medium uppercase tracking-[0.24em] text-muted"><span>Brand Identity <b className="ml-8 text-accent">•</b> Social Media <b className="ml-8 text-accent">•</b> Personal Branding <b className="ml-8 text-accent">•</b> Digital Design <b className="ml-8 text-accent">•</b> Print Design</span><span aria-hidden="true">Brand Identity <b className="ml-8 text-accent">•</b> Social Media <b className="ml-8 text-accent">•</b> Personal Branding <b className="ml-8 text-accent">•</b> Digital Design <b className="ml-8 text-accent">•</b> Print Design</span></div></section>
      <section className="mx-auto max-w-6xl px-6 py-28 md:py-36"><div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">The point of view</p><div><h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Before they trust your work, they trust what they see.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Good design is not only about looking attractive. It should communicate value clearly and help people understand the person, business or brand behind the design.</p></div></div></section>
      <section className="border-y border-line bg-surface-muted py-28"><div className="mx-auto max-w-6xl px-6"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="Featured work" title="Selected visual stories." description="Real uploaded work, presented with the context available in Tayyab&apos;s portfolio." /><Button href="/portfolio" variant="outline">View All Work</Button></div><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-28"><SectionHeading eyebrow="Services" title="Design that makes value visible." description="A strategic foundation, then the visual execution needed to make it consistent." /><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div><div className="mt-10"><Button href="/services" variant="outline">Explore Services</Button></div></section>
      <section className="border-y border-line bg-surface-muted py-28"><div className="mx-auto max-w-6xl px-6"><SectionHeading eyebrow="How I work" title="A considered process from brief to delivery." /><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-5">{processSteps.map((step) => <article key={step.number} className="bg-surface-muted p-6"><p className="text-4xl font-semibold text-accent-dark">{step.number}</p><h3 className="mt-12 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.description}</p></article>)}</div></div></section>
      <CTA heading="Have a project in mind?" label="Let&apos;s work together" href="/contact" />
    </div>
  );
}
