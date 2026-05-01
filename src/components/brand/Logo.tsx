"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  /** Stronger presence for primary placement (e.g. navbar). */
  emphasis?: "default" | "nav";
};

const MARK_W = 492;
const MARK_H = 407;

export function Logo({ className, iconClassName, wordmarkClassName, emphasis = "default" }: LogoProps) {
  const nav = emphasis === "nav";

  return (
    <span className={cn("inline-flex items-center gap-3", nav && "gap-3.5", className)}>
      <span className={cn("relative inline-flex shrink-0 items-center", iconClassName)} aria-hidden>
        <Image
          src="/logo-mark.png"
          alt=""
          width={MARK_W}
          height={MARK_H}
          className={cn(nav ? "h-[3.25rem] w-auto sm:h-14" : "h-9 w-auto", "object-contain object-left")}
          priority={nav}
        />
      </span>
      <span
        className={cn(
          "bg-gradient-to-r from-[#8eb8e8] via-[#4a9fe8] to-[#00e5ff] bg-clip-text tracking-tight text-transparent dark:from-cyan-200 dark:via-sky-300 dark:to-cyan-400",
          nav
            ? "font-display text-lg font-bold tracking-[-0.02em] sm:text-xl"
            : "text-[15px] font-semibold sm:text-base",
          wordmarkClassName,
        )}
      >
        BosphoX
      </span>
    </span>
  );
}
