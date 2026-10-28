import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { cn } from "@/lib/cn";
export default function Wordmark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" aria-label="Naclite — Home" className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark className="h-7 w-7" rounded={8} />
      <span className={cn("font-display text-[1.25rem] font-semibold leading-none tracking-[-0.02em]", inverted ? "text-paper" : "text-ink")}>
        Naclite
      </span>
    </Link>
  );
}
