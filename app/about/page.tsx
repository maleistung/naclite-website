import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Lattice from "@/components/Lattice";

export const metadata: Metadata = { title: "About", description: "Naclite LLC is an operating company that builds, runs, and scales consumer brands and commerce ventures from Sheridan, Wyoming." };

const pillars = [
  { label: "Who we are", body: "An operating company. We build consumer brands and commerce ventures, and we run them ourselves — hands-on, every day." },
  { label: "Why Naclite", body: "Salt is simple, essential, and everywhere. We named the company after it because the best businesses share those qualities." },
  { label: "What we believe", body: "Fundamentals compound. Product, operations, and trust matter more than any single campaign or trend." },
];

const timeline = [
  { year: "2023", title: "Founded", body: "Naclite LLC is registered in Sheridan, Wyoming, with a mandate to build and operate commerce ventures." },
  { year: "2024", title: "First ventures", body: "Our first consumer brands launch, with sourcing and fulfilment run entirely in-house." },
  { year: "2025", title: "Shared infrastructure", body: "Operations, sourcing, and growth systems are consolidated so every new venture starts further ahead." },
  { year: "Today", title: "Scaling with discipline", body: "A growing portfolio, operated to the same standard on every order and in every market." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={<>Simple. Essential. <span className="text-ember">Built to last.</span></>}
        intro="Naclite is an operating company that builds, runs, and scales consumer brands and commerce ventures — with the structure to make them endure." />

      <section className="mx-auto grid max-w-wide gap-5 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.07}>
            <div className="card h-full rounded-4xl p-8">
              <p className="eyebrow">{p.label}</p>
              <p className="mt-4 font-display text-display-md font-medium leading-snug text-ink">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-line bg-bone">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">From one idea to an operating group.</h2>
            <div className="mt-10 space-y-8 border-l border-line pl-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative">
                  <span className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-ember" />
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ember-deep">{t.year}</p>
                  <h3 className="mt-1 font-display text-[1.3rem] font-semibold text-ink">{t.title}</h3>
                  <p className="mt-1.5 max-w-lg font-sans text-[0.95rem] leading-relaxed text-ink-mute">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="hidden justify-self-center md:block"><Lattice className="w-80" /></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-6 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="font-display text-display-lg font-semibold text-ink">Want to work with us?</h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-lg text-ink-mute">Partners, suppliers, and brands that fit our model — we&rsquo;d like to hear from you.</p>
          <Link href="/contact" className="btn-primary mt-8 inline-block rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-medium">Get in touch</Link>
        </Reveal>
      </section>
    </>
  );
}
