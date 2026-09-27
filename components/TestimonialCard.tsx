import type { Testimonial } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return <ScrollReveal><figure className="rounded-lg border border-line bg-surface p-7 shadow-[0_8px_24px_rgba(23,23,23,0.05)]"><blockquote className="text-xl leading-8 tracking-tight">&ldquo;{testimonial.quote}&rdquo;</blockquote><figcaption className="mt-8 text-sm text-muted">{testimonial.name}, {testimonial.role}</figcaption></figure></ScrollReveal>;
}