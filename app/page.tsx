import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, processSteps } from "@/data/content";

const proofItems = [
  "Brand Identity",
  "Personal Branding",
  "Social Media Design",
  "Digital Design",
];

const serviceGroups = [
  {
    title: "Personal Branding",
    description: "LinkedIn banners, profile visuals, and personal brand systems that help professionals look clear, credible, and memorable.",
    points: ["LinkedIn banners", "Profile visuals", "Personal brand systems"],
  },
  {
    title: "Brand Identity",
    description: "Identity foundations that bring consistency to a business or founder’s story, from logo systems to visual direction.",
    points: ["Logo systems", "Typography", "Color systems", "Brand guidelines"],
  },
  {
    title: "Digital & Social",
    description: "Campaign visuals and marketing content designed to stay aligned with the brand and feel polished across platforms.",
    points: ["Social graphics", "Campaign visuals", "Ads", "Carousels"],
  },
  {
    title: "Business Design",
    description: "Professional materials that make the brand feel established in person and across everyday touchpoints.",
    points: ["Business cards", "Stationery", "Certificates", "Marketing materials"],
  },
];

const featuredProjects = [
  {
    title: "Syntrix",
    category: "Tech Brand Identity & Visual Guidelines",
    image: "/images/projects/tayyab-1.png",
    summary: "A complete visual identity designed to give Syntrix a clearer and more consistent brand presence.",
  },
  {
    title: "Brand Stationery",
    category: "Business Stationery",
    image: "/images/projects/tayyab-3.png",
    summary: "Clean, premium stationery built to make the brand feel established and professional.",
  },
  {
    title: "Office Identity",
    category: "Brand Identity Application",
    image: "/images/projects/tayyab 6.png",
    summary: "A strong identity presence that extends from a logo system into the physical brand experience.",
  },
];

export const metadata = {
  title: "Tayyab Munir — Strategic Visual Designer",
  description:
    "Strategic visual designer helping brands, founders and professionals build clear, confident visual identities through branding, personal branding and digital design.",
};

export default function Home() {
  return (
    <div>
      <Hero
        eyebrow="STRATEGIC VISUAL DESIGN"
        title="Make your brand impossible to overlook."
        description="I help founders, professionals and growing brands build a clear, confident visual presence through brand identity, personal branding and digital design."
        image="/images/profile/tayyab image new.jpg.jpeg"
        imageAlt="Tayyab Munir, strategic visual designer"
        actions={
          <>
            <Button href="/contact">Start a Project →</Button>
            <Button href="#work" variant="outline">View My Work ↓</Button>
          </>
        }
      />

      <section className="overflow-hidden border-y border-line bg-surface-muted/80 py-5" aria-label="Selected client work and design disciplines">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          <span>
            {proofItems.map((item, index) => (
              <span key={item}>
                {item}
                {index < proofItems.length - 1 && <span className="mx-6 text-accent">•</span>}
              </span>
            ))}
          </span>
          <span aria-hidden="true">
            {proofItems.map((item, index) => (
              <span key={`${item}-repeat`}>
                {item}
                {index < proofItems.length - 1 && <span className="mx-6 text-accent">•</span>}
              </span>
            ))}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">The problem</p>
          <div>
            <h2 className="text-4xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-6xl">
              Your brand is saying something before you do.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Weak or inconsistent visuals can make a strong business feel generic, forgettable and less professional. The goal is not decoration — it is clarity, trust and a stronger first impression.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              I create visual systems that help your brand communicate clearly and confidently wherever people encounter it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Concept → final"
            title="From unclear visuals to a stronger visual system."
            description="A clearer design direction helps the message feel more intentional and more credible."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1.2fr]">
            <div className="rounded-3xl border border-line bg-background p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-dark">Brief</p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Challenge</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight">A brand needs a clearer identity and stronger presence.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Direction</p>
                  <p className="mt-3 text-lg leading-8 text-muted">A sharper visual language, stronger hierarchy and a more confident presentation.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">System</p>
                  <p className="mt-3 text-lg leading-8 text-muted">Typography, colors, layouts and visual cues designed to communicate value clearly.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-line bg-background p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface-muted">
                  <Image src="/images/profile/tayyab image new.jpg.jpeg" alt="Tayyab Munir profile and personal branding direction" fill className="object-cover" />
                </div>
                <div className="px-1 pb-1 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-dark">Concept</p>
                  <p className="mt-2 text-xl font-semibold">Professional presence</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-line bg-background p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface-muted">
                  <Image src="/images/projects/tayyab-1.png" alt="Syntrix brand identity final logo application" fill className="object-cover" />
                </div>
                <div className="px-1 pb-1 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-dark">Final</p>
                  <p className="mt-2 text-xl font-semibold">Clear visual identity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Visual design built around your brand."
          description="The work is structured around positioning, clarity and consistency — not just isolated assets."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <article key={group.title} className="group rounded-[28px] border border-line bg-background p-7 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_44px_rgba(23,23,23,0.04)] md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">0{index + 1}</p>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">{group.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{group.description}</p>
              <ul className="mt-8 space-y-3 text-sm text-foreground/80">
                {group.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-line bg-surface-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A strong visual presence, built for real brand communication."
            />
            <Button href="/portfolio" variant="outline">View Portfolio →</Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[28px] border border-line bg-background p-3">
                <div className="relative overflow-hidden rounded-[22px] border border-line bg-surface-muted">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                </div>
                <div className="px-2 pb-2 pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-dark">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>
                  <Link href="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-dark transition hover:text-accent">
                    View case study <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          eyebrow="Case study"
          title="Design thinking that connects the message to the visual system."
        />

        <div className="mt-14 space-y-8">
          {[
            {
              name: "Syntrix",
              challenge: "Create a tech brand identity that feels modern, confident and memorable without losing clarity.",
              direction: "A bold blue system, sharp geometry and a structured visual language designed to support a tech-forward positioning.",
              system: "Typography, color, logo geometry and application across physical and digital touchpoints.",
              image: "/images/projects/tayyab-1.png",
            },
            {
              name: "Business Stationery",
              challenge: "Turn a professional profile into a more polished and credible first impression.",
              direction: "A minimal premium direction built around clarity, balance and subtle personality.",
              system: "Fine typography, clean spacing, soft contrast and business-ready layout structure.",
              image: "/images/projects/tayyab-3.png",
            },
          ].map((item) => (
            <article key={item.name} className="grid gap-6 overflow-hidden rounded-[32px] border border-line bg-background p-4 md:grid-cols-[0.9fr_1.1fr] md:p-6">
              <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-line bg-surface-muted">
                <Image src={item.image} alt={`${item.name} case study`} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-2 md:p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">{item.name}</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">The challenge</p>
                    <p className="mt-2 text-lg leading-8 text-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">The direction</p>
                    <p className="mt-2 text-lg leading-8 text-muted">{item.direction}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">The system</p>
                    <p className="mt-2 text-lg leading-8 text-muted">{item.system}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-line bg-surface-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="From idea to final visual system."
            description="A clear process keeps the work intentional, collaborative and built for real-world use."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-[24px] border border-line bg-background p-6">
                <p className="text-4xl font-semibold text-accent-dark">{step.number}</p>
                <h3 className="mt-10 text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative overflow-hidden rounded-[30px] border border-line bg-surface-muted p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image src="/images/profile/tayyab image new.jpg.jpeg" alt="Tayyab Munir portrait" fill className="object-cover" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-dark">About Tayyab</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Design should make people understand what you stand for.
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted">
              I&apos;m Tayyab Munir, a graphic and strategic visual designer based in Lahore, Pakistan. I work with businesses, professionals and brands to create visual identities that are clear, consistent and memorable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              <span className="rounded-full border border-line px-3 py-2">Based in Lahore, Pakistan</span>
              <span className="rounded-full border border-line px-3 py-2">Available for freelance</span>
            </div>
            <div className="mt-10">
              <Button href="/about">View About →</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-y border-line bg-surface-muted py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">Client feedback</p>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-line bg-background p-3 md:p-5">
            <div className="relative overflow-hidden rounded-[22px] border border-line bg-surface-muted p-3">
              <Image
                src="/images/testimonials/WhatsApp Image 2026-09-26 at 11.27.42 PM.jpeg"
                alt="Client testimonial from Amit Mehta for Tayyab Munir graphic design work"
                width={1200}
                height={700}
                className="h-auto w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:py-28">
        <SectionHeading eyebrow="FAQ" title="A few practical answers." />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-foreground marker:hidden">
                <span>{faq.question}</span>
                <span className="text-2xl leading-none text-accent-dark transition group-open:rotate-45">+</span>
              </summary>
              <p className="faq-answer max-w-2xl pt-4 leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:pb-28">
        <div className="overflow-hidden rounded-[32px] border border-line bg-[#1f1f1d] px-6 py-12 text-white shadow-[0_32px_80px_rgba(23,23,23,0.18)] md:px-10 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7B39A]">Next step</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
            Your brand deserves a stronger first impression.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Let&apos;s build visuals that represent it properly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start a Project →</Button>
            <Button href="/portfolio" variant="outline">View Selected Work →</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
