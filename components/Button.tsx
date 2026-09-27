import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
};

export function Button({ children, href, variant = "solid" }: ButtonProps) {
  const styles = variant === "solid"
    ? "bg-accent text-white shadow-[0_8px_20px_rgba(23,23,23,0.08)] hover:bg-accent-dark hover:shadow-[0_10px_24px_rgba(23,23,23,0.12)]"
    : "border border-foreground/20 bg-transparent text-foreground hover:border-accent-dark hover:bg-accent hover:text-white";

  return (
    <Link href={href} data-cursor="GO" className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-300 active:scale-[0.97] hover:scale-[1.02] ${styles}`}>
      <span>{children}</span><span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}