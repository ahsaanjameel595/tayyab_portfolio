import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/content";

const experience = [
  { role: "Freelance Graphic Designer", organization: "Self-Employed", period: "2023 – Present", location: "" },
  { role: "Graphic Designer", organization: "Metaplay Studio", period: "May 2025 – Jul 2026", location: "Lahore, Pakistan" },
  { role: "Graphic Designer", organization: "IT Brain", period: "Jun 2024 – May 2025", location: "Lahore, Pakistan" },
  { role: "Graphic Designer", organization: "Skynet Joe", period: "Nov 2023 – Jun 2024", location: "Lahore, Pakistan" },
];
const education = [{ qualification: "BS Geography", institution: "University of the Punjab", period: "2019 – 2023" }, { qualification: "Graphic Design Course", institution: "Rajeev Mehta", period: "Aug 2024 – Feb 2025" }];
const skills = ["Graphic Design", "Brand Identity", "Typography", "Creative Concept Design", "Social Media Design", "YouTube Thumbnail Design", "Business Card Design", "Flyer & Banner Design", "Certificate Design", "Adobe Illustrator", "Adobe Photoshop"];

export const metadata: Metadata = { title: "About", description: "Learn about Tayyab Munir, a graphic designer focused on strategic visual communication." };

export default function AboutPage() {
  return <div>
    <Hero eyebrow="Tayyab Munir · Graphic Designer" title="About Me" description="Your profile and brand should do more than show what you do. They should help people quickly understand who you are, what you offer, and why people should remember you." image="/images/profile/tayyab image new.jpg.jpeg" imageAlt="Tayyab Munir, graphic designer" />
    <section className="border-y border-line bg-surface-muted py-28"><div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">The approach</p><div><h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Before they trust your work, they trust what they see.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Tayyab Munir is a graphic designer with 1.5+ years of experience across branding, social media graphics, thumbnails, flyers, banners, business cards, and marketing materials. His approach considers positioning, target audience, message, personality, typography, colour, hierarchy, and consistency before execution.</p></div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-28"><SectionHeading eyebrow="Experience" title="A growing design practice." /><ol className="mt-14 border-l border-line">{experience.map((item, index) => <li key={`${item.organization}-${item.period}`} className="relative py-7 pl-8 first:pt-0"><span className="absolute -left-[5px] top-9 h-2 w-2 rounded-full bg-accent first:top-1" aria-hidden="true" /><p className="text-sm font-medium text-accent-dark">0{index + 1}</p><div className="mt-3 flex flex-col justify-between gap-3 md:flex-row"><div><h3 className="text-2xl font-semibold">{item.role}</h3><p className="mt-2 text-muted">{item.organization}{item.location ? ` · ${item.location}` : ""}</p></div><p className="text-sm text-muted md:pt-1">{item.period}</p></div></li>)}</ol></section>
    <section className="border-y border-line bg-surface-muted py-28"><div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2"><div><SectionHeading eyebrow="Education" title="Learning that informs the work." /><div className="mt-12 space-y-8">{education.map((item) => <article key={item.qualification} className="border-t border-line pt-5"><h3 className="text-xl font-semibold">{item.qualification}</h3><p className="mt-2 text-muted">{item.institution}</p><p className="mt-2 text-sm text-muted">{item.period}</p></article>)}</div></div><div><SectionHeading eyebrow="Skills & tools" title="Building a visual language." /><ul className="mt-12 grid gap-3 sm:grid-cols-2">{skills.map((skill) => <li key={skill} className="rounded border border-line px-4 py-4 text-sm text-muted transition hover:border-accent-dark hover:text-accent-dark">{skill}</li>)}</ul></div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-28"><SectionHeading eyebrow="How I work" title="From brief to delivery." /><div className="mt-14 grid gap-6 md:grid-cols-5">{processSteps.map((step) => <article key={step.number}><p className="text-4xl font-semibold text-accent-dark">{step.number}</p><h3 className="mt-8 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.description}</p></article>)}</div></section>
    <CTA heading="Have a project in mind?" label="Contact Me" />
  </div>;
}
