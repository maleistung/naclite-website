import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";

const stats = [
  { to: 2023, label: "Founded in Wyoming", raw: true },
  { to: 3, label: "Core capabilities" },
  { to: 12, suffix: "+", label: "Markets reached" },
  { to: 100, suffix: "%", label: "Operated in-house" },
];

const services = [
  { title: "Brand Building", body: "Positioning, identity, and product — we create consumer brands with a clear point of view and the substance to back it up.", href: "/services#brand" },
  { title: "Commerce Operations", body: "Storefronts, merchandising, fulfilment, and customer care, run end to end with the rigor of an operating company.", href: "/services#commerce" },
  { title: "Global Sourcing", body: "Supplier relationships and logistics that keep quality consistent and margins healthy as volume scales.", href: "/services#sourcing" },
];

const process = [
  { no: "01", title: "Discover", body: "We find real demand — a product people already want, in a market we understand." },
  { no: "02", title: "Build", body: "Brand, product, and storefront come together with structure from day one." },
  { no: "03", title: "Operate", body: "We run the business hands-on: sourcing, fulfilment, support, and growth." },
  { no: "04", title: "Scale", body: "Proven channels get investment. Shared infrastructure compounds every venture." },
];

const values = [
  { title: "Clarity", body: "Simple structures, clear ownership, no ambiguity about what matters." },
  { title: "Consistency", body: "The same standard on the thousandth order as on the first." },
  { title: "Durability", body: "We build for years, not quarters — reputation is the asset." },
];

const faq = [
  { q: "What does Naclite actually do?", a: "We build and operate our own consumer brands and commerce ventures. We are an operating company, not an agency — we own the businesses we run." },
  { q: "Do you work with outside partners?", a: "Yes. We partner with suppliers, manufacturers, logistics providers, and selectively with brands that fit our model. Reach out through the contact page." },
  { q: "Where are you based?", a: "Naclite LLC is registered in Sheridan, Wyoming, United States, and operates across international markets." },
  { q: "How do I get in touch?", a: "Use the contact form, email contact@naclite.com, or call +1 (661) 235-4594. We read every message." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS */}
      <section className="border-b border-line bg-bone">
        <div className="mx-auto grid max-w-wide grid-cols-2 divide-x divide-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="px-6 py-10 md:py-12">
              <p className="font-display text-display-lg font-semibold text-ink">
                {s.raw ? s.to : <Counter to={s.to} suffix={s.suffix} />}
              </p>
              <p className="mt-2 font-sans text-sm text-ink-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">Three capabilities. One operating company.</h2>
          </div>
          <Link href="/services" className="font-sans text-sm font-medium text-ember-deep hover:text-ember">All services &rarr;</Link>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <Link href={s.href} className="card block h-full rounded-4xl p-8">
                <span className="font-display text-sm font-semibold text-ember">0{i + 1}</span>
                <h3 className="mt-5 font-display text-display-md font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{s.body}</p>
                <span className="mt-6 inline-block font-sans text-sm font-medium text-ink">Learn more &rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-carbon text-paper">
        <div className="mx-auto max-w-shell px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-display-xl font-semibold">
              Like salt, the best businesses are simple, essential, and <span className="text-ember">built to last</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-lg text-paper/60">
              We don&rsquo;t chase trends. We build the fundamentals — product, operations, and trust — and let them compound.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">A process built on structure.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-line bg-line md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.06}>
              <div className="h-full bg-salt p-8">
                <span className="font-display text-sm font-semibold text-ember">{p.no}</span>
                <h3 className="mt-5 font-display text-[1.4rem] font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-line bg-bone">
        <div className="mx-auto grid max-w-wide gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">Our standard</p>
            <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">What we hold ourselves to.</h2>
            <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-mute">Three principles behind every decision, every product, and every order.</p>
          </Reveal>
          <div className="grid gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="card flex gap-6 rounded-3xl p-7">
                  <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-ember" />
                  <div>
                    <h3 className="font-display text-[1.3rem] font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-shell px-6 py-24 md:py-32">
        <Reveal className="mb-12">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-display-lg font-semibold text-ink">Common questions.</h2>
        </Reveal>
        <Reveal delay={0.1}><FAQ items={faq} /></Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-wide">
          <div className="relative overflow-hidden rounded-5xl bg-carbon px-6 py-20 text-center text-paper md:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember/25 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl font-display text-display-xl font-semibold">Let&rsquo;s build something essential.</h2>
            <p className="relative mx-auto mt-5 max-w-md font-sans text-lg text-paper/65">Tell us what you&rsquo;re working on. We reply personally, usually within one business day.</p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-ember rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold">Contact us</Link>
              <a href="tel:+16612354594" className="rounded-full border border-paper/30 px-7 py-3.5 font-sans text-[0.95rem] font-medium text-paper transition hover:bg-paper/10">+1 (661) 235-4594</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
