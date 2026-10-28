import Reveal from "@/components/Reveal";
export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="lattice pointer-events-none absolute inset-0 opacity-50"
        style={{ maskImage: "radial-gradient(ellipse at 80% 0%, #000 10%, transparent 60%)" }} />
      <div className="relative mx-auto max-w-wide px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-hero font-semibold text-ink">{title}</h1>
          {intro && <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-mute md:text-xl">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
