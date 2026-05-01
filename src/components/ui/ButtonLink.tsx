import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60";

  const styles: Record<Variant, string> = {
    primary:
      "border border-accent-soft/35 bg-gradient-to-r from-accent-soft to-accent font-semibold text-[#061018] shadow-glow hover:brightness-[1.03] hover:border-accent-soft/50",
    secondary:
      "border border-cyan-200/80 bg-white/90 text-ink shadow-card hover:border-cyan-300 hover:bg-cyan-50/90 dark:border-cyan-500/30 dark:bg-slate-900/75 dark:text-slate-100 dark:shadow-none dark:hover:border-cyan-400/45 dark:hover:bg-slate-800/90",
    ghost: "border border-transparent text-ink-muted hover:text-ink hover:bg-sky-900/[0.04]",
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
