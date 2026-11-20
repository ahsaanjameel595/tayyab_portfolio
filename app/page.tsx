import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StackedCaseStudy } from "@/components/StackedCaseStudy";
import { projects } from "@/data/projects";
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

const testimonialCopies = [false, true];

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
        highlightedWord="impossible"
        description="I help founders, professionals and growing brands build a clear, confident visual presence through brand identity, personal branding and digital design."
        image="/images/profile/tayyab-profile.jpg"
        imageAlt="Tayyab Munir, strategic visual designer"
        actions={
          <>
            <Button href="/contact">Start a Project →</Button>
            <Button href="#work" variant="outline">View My Work ↓</Button>
          </>
        }
      />

      <section className="overflow-hidden border-y border-line bg-bg-alt py-5" aria-label="Selected client work and design disciplines">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          <span>
            {proofItems.map((item, index) => (
              <span key={item}>
                {item}
                {index < proofItems.length - 1 && <span className="mx-6 text-muted">•</span>}
              </span>
            ))}
          </span>
          <span aria-hidden="true">
            {proofItems.map((item, index) => (
              <span key={`${item}-repeat`}>
                {item}
                {index < proofItems.length - 1 && <span className="mx-6 text-muted">•</span>}
              </span>
            ))}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <ScrollReveal className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">The problem</p>
          <div>
            <h2 className="text-4xl font-semibold leading-[0.98] tracking-tight text-text md:text-6xl">
              Your brand is saying something before you do.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Weak or inconsistent visuals can make a strong business feel generic, forgettable and less professional. The goal is not decoration — it is clarity, trust and a stronger first impression.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              I create visual systems that help your brand communicate clearly and confidently wherever people encounter it.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <ScrollReveal>
        <SectionHeading
          eyebrow="Services"
          title="Visual design built around your brand."
          description="The work is structured around positioning, clarity and consistency — not just isolated assets."
        />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 80}>
            <article className="group h-full rounded-[28px] border border-line bg-surface p-7 transition duration-200 hover:-translate-y-1 hover:border-line md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight text-text">{group.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{group.description}</p>
              <ul className="mt-8 space-y-3 text-sm text-text/80">
                {group.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-line" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-line bg-bg-alt py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A strong visual presence, built for real brand communication."
            />
            <Button href="/portfolio" variant="outline">View Portfolio →</Button>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 80}>
                <article className="group h-full overflow-hidden rounded-[28px] border border-line bg-surface p-3">
                  {project.slug === "linkedin-banner-2" ? (
                    <StackedCaseStudy />
                  ) : (
                    <div className="relative overflow-hidden rounded-[22px] border border-line bg-bg">
                      <div className="project-image-frame relative aspect-[4/5] overflow-hidden">
                        {project.image && <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="project-image object-cover transition duration-700 group-hover:scale-[1.03]" />}
                      </div>
                    </div>
                  )}
                  <div className="px-2 pb-2 pt-6">
                    <p className="project-category text-xs font-medium uppercase tracking-[0.22em] text-muted">{project.category}</p>
                    <h3 className="project-title mt-3 text-2xl font-semibold tracking-tight text-text">{project.title}</h3>
                    {project.summary && <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>}
                    <Link href="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">
                      View case study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="dark-section border-y border-dark-line bg-dark-bg py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="dark-section-heading">
          <SectionHeading
            eyebrow="Process"
            title="From idea to final visual system."
            description="A clear process keeps the work intentional, collaborative and built for real-world use."
          />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 70}>
              <article className="relative h-full rounded-[24px] border border-line bg-surface p-6">
                <p className="text-4xl font-semibold text-accent">{step.number}</p>
                <h3 className="mt-10 text-2xl font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[30px] border border-line bg-bg p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image src="/images/profile/tayyab-profile.jpg" alt="Tayyab Munir portrait" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">About Tayyab</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
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
          </ScrollReveal>
        </div>
      </section>

      <section id="testimonials" className="light-section border-y border-light-line bg-light-bg py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Client feedback</p>
          </ScrollReveal>
          <div className="testimonial-marquee-wrap mt-8" role="region" aria-label="Client testimonials">
            <div className="testimonial-marquee-track">
              {testimonialCopies.map((isDuplicate, copyIndex) => (
                <div key={copyIndex} className="testimonial-marquee-group" aria-hidden={isDuplicate} inert={isDuplicate}>
                  {reviewScreenshots.map((review) => (
                    <figure key={review.src} className="testimonial-marquee-item overflow-hidden rounded-lg border border-line bg-surface p-3">
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
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:py-28">
        <ScrollReveal>
        <SectionHeading eyebrow="FAQ" title="A few practical answers." />
        </ScrollReveal>
        <ScrollReveal className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-text marker:hidden">
                <span>{faq.question}</span>
                <span className="text-2xl leading-none text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="faq-answer max-w-2xl pt-4 leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:pb-28">
        <ScrollReveal className="dark-cta overflow-hidden rounded-[32px] border border-dark-text/20 bg-dark-bg px-6 py-12 text-dark-text md:px-10 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-dark-text/70">Next step</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight text-dark-text md:text-6xl">
            Your brand deserves a stronger first impression.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-dark-text/70">
            Let&apos;s build visuals that represent it properly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start a Project →</Button>
            <Button href="/portfolio" variant="outline">View Selected Work →</Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
