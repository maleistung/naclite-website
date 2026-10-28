"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={cn("sticky top-0 z-50 transition-all", scrolled ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 md:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href}
              className={cn("font-sans text-sm transition-colors hover:text-ink", pathname === n.href ? "text-ink" : "text-ink-mute")}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary rounded-full px-5 py-2 font-sans text-sm font-medium">
            Get in touch
          </Link>
        </nav>
        <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden">
          <span className="relative block h-3.5 w-5">
            <span className={cn("absolute left-0 top-0 h-[2px] w-5 bg-ink transition", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute left-0 top-1.5 h-[2px] w-5 bg-ink transition", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-3 h-[2px] w-5 bg-ink transition", open && "top-1.5 -rotate-45")} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-line bg-paper px-6 pb-6 pt-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {site.nav.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-xl px-3 py-3 font-display text-lg font-medium text-ink hover:bg-bone">
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3 rounded-full px-5 py-3 text-center font-sans text-sm font-medium">
                Get in touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
