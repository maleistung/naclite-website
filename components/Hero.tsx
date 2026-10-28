"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Lattice from "@/components/Lattice";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay },
  });
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="lattice pointer-events-none absolute inset-0 opacity-60"
        style={{ maskImage: "radial-gradient(ellipse at 70% 20%, #000 20%, transparent 65%)" }} />
      <div className="relative mx-auto grid max-w-wide items-center gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.35fr_1fr] md:px-10 md:pb-28 md:pt-28">
        <div>
          <motion.p {...fade(0)} className="eyebrow">Naclite LLC &middot; Sheridan, Wyoming</motion.p>
          <motion.h1 {...fade(0.08)} className="mt-6 max-w-3xl font-display text-hero font-semibold text-ink">
            The essential element in modern <span className="text-ember">commerce</span>.
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-ink-mute md:text-xl">
            Naclite builds, operates, and scales consumer brands and commerce
            ventures — with the clarity and structure to make them last.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-medium">Start a conversation</Link>
            <Link href="/services" className="rounded-full border border-line bg-salt px-7 py-3.5 font-sans text-[0.95rem] font-medium text-ink transition hover:border-ink">Our services</Link>
          </motion.div>
          <motion.div {...fade(0.34)} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
            <span>Brand building</span><span className="h-1 w-1 rounded-full bg-ember" />
            <span>Commerce operations</span><span className="h-1 w-1 rounded-full bg-ember" />
            <span>Global sourcing</span>
          </motion.div>
        </div>
        <div className="hidden justify-self-end md:block">
          <Lattice className="w-[22rem]" />
        </div>
      </div>
    </section>
  );
}
