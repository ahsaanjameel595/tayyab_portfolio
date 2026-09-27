import type { Service } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <ScrollReveal><article className="group rounded-lg border border-line bg-surface p-6 shadow-[0_8px_24px_rgba(23,23,23,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_38px_rgba(23,23,23,0.1)]">
      <div className="mb-8 h-1 w-10 bg-accent transition-all duration-300 group-hover:w-16" />
      <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 text-muted">{service.description}</p>
      {service.details && (
        <ul className="mt-6 space-y-3 border-t border-line pt-5 text-sm text-muted">
          {service.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
    </article></ScrollReveal>
  );
}