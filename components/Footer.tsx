import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dark-line bg-dark-bg px-6 py-12 text-sm text-dark-muted">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto_auto] md:items-end">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-dark-text">TAYYAB MUNIR</p>
          <p className="mt-3 text-base text-dark-muted">Strategic Visual Designer</p>
          <p className="mt-2 text-sm text-dark-muted">Lahore, Pakistan</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/portfolio" className="transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">Work</Link>
          <Link href="/services" className="transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">Services</Link>
          <Link href="/about" className="transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">About</Link>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
          <a href="https://www.linkedin.com/in/tayyabmunirvisuals/" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">
            LinkedIn
          </a>
          <a href="mailto:tayyabmunir1212@gmail.com" className="transition-colors duration-200 hover:underline decoration-accent-hover underline-offset-4">
            Email
          </a>
        </div>

        <p className="border-t border-dark-line pt-5 text-xs md:col-span-3">© 2026 Tayyab Munir</p>
      </div>
    </footer>
  );
}
