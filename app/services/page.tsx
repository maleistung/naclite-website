import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Services", description: "Brand building, commerce operations, and global sourcing — the three capabilities Naclite operates end to end." };

const services = [
  { id: "brand", no: "01", title: "Brand Building", lead: "Consumer brands with a point of view.",
    body: "We create brands from the ground up — positioning, identity, product, and packaging — built on real demand rather than a trend. The result is a brand people recognize, trust, and return to.",
    points: ["Market and demand research", "Positioning and identity", "Product development and packaging", "Launch strategy and storefront"] },
  { id: "commerce", no: "02", title: "Commerce Operations", lead: "Run like an operating company.",
    body: "We operate online retail end to end: storefront, merchandising, fulfilment, and customer care. Every process is documented, measured, and improved — so quality holds as volume grows.",
    points: ["Direct-to-consumer and marketplace storefronts", "Merchandising and catalog management", "Fulfilment and logistics coordination", "Customer care and retention"] },
  { id: "sourcing", no: "03", title: "Global Sourcing", lead: "Reliable supply, consistent quality.",
    body: "We build long-term supplier relationships and the logistics to match — so products arrive on time, to spec, at healthy margins, across every market we serve.",
    points: ["Supplier discovery and qualification", "Quality control and compliance", "Cross-border logistics", "Cost and margin optimization"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title={<>Three capabilities, operated <span className="text-ember">end to end</span>.</>}
        intro="We don't advise from the sidelines. We own and run the businesses we build — which means every capability below is one we operate every day." />
      <div className="mx-auto max-w-wide px-6 md:px-10">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className={`grid gap-10 py-20 md:grid-cols-[1fr_1.3fr] md:py-28 ${i < services.length - 1 ? "border-b border-line" : ""}`}>
            <Reveal>
              <span className="font-display text-sm font-semibold text-ember">{s.no}</span>
              <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">{s.title}</h2>
              <p className="mt-3 font-display text-display-md font-medium text-ink-mute">{s.lead}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-lg leading-relaxed text-ink-mute">{s.body}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-2xl border border-line bg-salt px-4 py-3 font-sans text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />{p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>
      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-shell px-6 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="font-display text-display-lg font-semibold text-ink">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-md font-sans text-lg text-ink-mute">Tell us about it. We&rsquo;ll tell you honestly whether we&rsquo;re the right fit.</p>
            <Link href="/contact" className="btn-primary mt-8 inline-block rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-medium">Contact us</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
