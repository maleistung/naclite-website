"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left">
              <span className="font-display text-[1.15rem] font-medium text-ink md:text-[1.3rem]">{it.q}</span>
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition ${isOpen ? "rotate-45 border-ember text-ember" : ""}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <p className="max-w-2xl pb-6 font-sans text-[0.97rem] leading-relaxed text-ink-mute">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
