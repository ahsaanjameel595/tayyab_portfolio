"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Case Studies", "/case-studies"],
  ["Testimonials", "/testimonials"],
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 border-b border-line bg-background transition-all duration-500 ${isScrolled ? "nav-scrolled" : ""}`}>
      <nav aria-label="Primary navigation" className="mx-auto max-w-6xl px-6 py-4 transition-all duration-500">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" onClick={closeMenu} className="font-semibold tracking-tight text-foreground"><span className="mr-2 text-accent-dark">TM</span><span className="hidden sm:inline">/ Tayyab Munir</span></Link>
          <div className="desktop-nav items-center gap-5 text-sm">
            {links.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined} className={isActive(href) ? "font-medium text-accent-dark" : "text-muted transition hover:text-accent-dark"}>{label}</Link>)}
          </div>
          <div className="desktop-cta items-center gap-4">
            <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className="rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-dark">Let&apos;s talk</Link>
          </div>
          <button type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="mobile-nav-toggle h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line text-foreground transition hover:border-accent-dark hover:text-accent-dark">
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </button>
        </div>
        <div className={`mobile-nav-panel mt-4 gap-1 border-t border-line pt-4 ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen} inert={!isOpen ? true : undefined}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu} aria-current={isActive(href) ? "page" : undefined} className={isActive(href) ? "bg-accent/10 px-3 py-3 text-sm font-medium text-accent-dark" : "px-3 py-3 text-sm text-muted transition hover:bg-accent/10 hover:text-accent-dark"}>{label}</Link>)}
          <Link href="/contact" onClick={closeMenu} aria-current={pathname === "/contact" ? "page" : undefined} className="mt-2 bg-accent px-3 py-3 text-sm font-medium text-white transition hover:bg-accent-dark">Let&apos;s talk</Link>
        </div>
      </nav>
    </header>
  );
}