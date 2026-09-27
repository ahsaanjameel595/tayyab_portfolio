type SectionHeadingProps = { eyebrow: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return <div className="max-w-2xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">{eyebrow}</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">{title}</h2>{description && <p className="mt-5 text-lg leading-8 text-muted">{description}</p>}</div>;
}