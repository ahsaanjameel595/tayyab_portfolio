import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto_auto] md:items-end">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-foreground">TAYYAB MUNIR</p>
          <p className="mt-3 text-base text-muted">Strategic Visual Designer</p>
          <p className="mt-2 text-sm text-muted">Lahore, Pakistan</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/portfolio" className="transition hover:text-accent-dark">Work</Link>
          <Link href="/services" className="transition hover:text-accent-dark">Services</Link>
          <Link href="/about" className="transition hover:text-accent-dark">About</Link>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
          <a href="https://www.linkedin.com/in/tayyabmunirvisuals/" target="_blank" rel="noreferrer" className="transition hover:text-accent-dark">
            LinkedIn
          </a>
          <a href="mailto:tayyabmunir1212@gmail.com" className="transition hover:text-accent-dark">
            Email
          </a>
        </div>

        <p className="border-t border-line pt-5 text-xs md:col-span-3">© 2026 Tayyab Munir</p>
      </div>
    </footer>
  );
}
