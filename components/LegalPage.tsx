import PageHeader from "@/components/PageHeader";
export default function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string[] }[] }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} intro={`Last updated ${updated}.`} />
      <section className="mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-display-md font-semibold text-ink">{s.h}</h2>
              {s.p.map((t, i) => <p key={i} className="mt-3 font-sans text-[0.97rem] leading-relaxed text-ink-mute">{t}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
