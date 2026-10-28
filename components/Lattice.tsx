"use client";
import { motion, useReducedMotion } from "framer-motion";

/** A crystal lattice: stacked cubes drawn in on load. The brand's motif. */
export default function Lattice({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const cube = (cx: number, cy: number, s: number, i: number, accent = false) => {
    const h = s * 0.5, v = s * 0.3;
    const d = `M${cx - h} ${cy - v} L${cx} ${cy - 2 * v} L${cx + h} ${cy - v} L${cx + h} ${cy + v} L${cx} ${cy + 2 * v} L${cx - h} ${cy + v} Z M${cx - h} ${cy - v} L${cx} ${cy} L${cx + h} ${cy - v} M${cx} ${cy} L${cx} ${cy + 2 * v}`;
    return (
      <motion.path key={i} d={d} fill="none" stroke={accent ? "#E8552B" : "#141414"} strokeOpacity={accent ? 1 : 0.55} strokeWidth={accent ? 2.2 : 1.6} strokeLinejoin="round"
        initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.08 }} />
    );
  };
  const s = 64;
  const cubes = [
    [160, 150], [224, 186], [96, 186], [160, 222],
    [224, 114, true], [96, 114], [160, 78],
  ] as Array<[number, number, boolean?]>;
  return (
    <svg viewBox="0 0 320 300" className={className} aria-hidden="true">
      {cubes.map(([x, y, a], i) => cube(x, y, s, i, a))}
    </svg>
  );
}
