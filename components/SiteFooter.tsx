import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon text-paper">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <div className="grid gap-12 border-b border-line-dark pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark inverted />
            <p className="mt-5 font-sans text-sm leading-relaxed text-paper/60">{site.description}</p>
          </div>
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">Company</p>
            <ul className="space-y-3 font-sans text-sm text-paper/75">
              <li><Link href="/about" className="transition-colors hover:text-paper">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-paper">Services</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-paper">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">Contact</p>
            <ul className="space-y-3 font-sans text-sm text-paper/75">
              <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">{site.email}</a></li>
              <li><a href={site.phoneHref} className="transition-colors hover:text-paper">{site.phone}</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">Registered Office</p>
            <address className="not-italic font-sans text-sm leading-relaxed text-paper/75">
              {site.legalName}<br />{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}<br />{site.address.country}
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 font-sans text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} {site.legalName}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-paper">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-paper">Terms</Link>
            <span>Registered in Wyoming, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
