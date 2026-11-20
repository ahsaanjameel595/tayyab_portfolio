import type { Service } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <ScrollReveal><article className="group rounded-lg border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-line">
      <div className="mb-8 h-1 w-10 bg-line transition-all duration-200 group-hover:w-16" />
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