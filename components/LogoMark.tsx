import { cn } from "@/lib/cn";
export default function LogoMark({ className, rounded = 22 }: { className?: string; rounded?: number }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={cn("block", className)}>
      <rect width="100" height="100" rx={rounded} fill="#141414" />
      <path d="M34 42 L50 32 L66 42 L66 62 L50 72 L34 62 Z" fill="none" stroke="#FBFAF7" strokeWidth="4" strokeLinejoin="round" />
      <path d="M34 42 L50 52 L66 42 M50 52 L50 72" fill="none" stroke="#FBFAF7" strokeWidth="4" strokeOpacity="0.55" strokeLinejoin="round" />
      <circle cx="50" cy="32" r="5.5" fill="#E8552B" />
    </svg>
  );
}
