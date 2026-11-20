import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
};

export function Button({ children, href, variant = "solid" }: ButtonProps) {
  const styles = variant === "solid"
    ? "bg-accent text-on-accent hover:bg-accent-hover"
    : "button-outline border border-text/20 bg-bg text-text hover:border-line hover:text-text";

  return (
    <Link href={href} className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-200 active:scale-[0.97] hover:scale-[1.02] ${styles}`}>
      <span>{children}</span><span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </Link>
  );
}