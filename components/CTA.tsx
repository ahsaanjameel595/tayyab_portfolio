import { Button } from "@/components/Button";

type CTAProps = { heading?: string; label?: string; href?: string };

export function CTA({ heading = "Have a project in mind?", label = "Start a conversation", href = "/contact" }: CTAProps) {
  return <section className="mx-auto max-w-6xl px-6 py-24"><div className="dark-cta overflow-hidden rounded-lg border border-dark-text/20 bg-dark-bg p-8 text-dark-text md:p-12"><p className="text-sm font-medium uppercase tracking-[0.2em] text-dark-text/70">Next step</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-dark-text md:text-5xl">{heading}</h2><div className="mt-8"><Button href={href}>{label}</Button></div></div></section>;
}