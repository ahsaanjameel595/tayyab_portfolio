import { HeroVisual } from "@/components/HeroVisual";
import type { CSSProperties, ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function Hero({ eyebrow, title, description, actions, image, imageAlt }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-6xl overflow-x-hidden gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-20 md:pb-32 md:pt-32">
      <div>
        <p className="hero-stagger mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent-dark" style={{ "--hero-delay": "100ms" } as CSSProperties}>{eyebrow}</p>
        <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-8xl">{title.split("\n").map((line) => <span className="hero-line" key={line}><span style={{ "--hero-delay": "180ms" } as CSSProperties}>{line}</span></span>)}</h1>
        <p className="hero-stagger mt-8 max-w-xl text-lg leading-8 text-muted" style={{ "--hero-delay": "300ms" } as CSSProperties}>{description}</p>
        {actions && <div className="hero-stagger mt-10 flex flex-wrap gap-3" style={{ "--hero-delay": "400ms" } as CSSProperties}>{actions}</div>}
      </div>
      {image && (
        <HeroVisual src={image} alt={imageAlt ?? title} />
      )}
    </section>
  );
}