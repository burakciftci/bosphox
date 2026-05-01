"use client";

import { useId, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

function HexLattice({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.075]", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v17L0 8.5V0h14zm0 49V32l14-8.5V49H14zM0 24.5L14 33v17L0 41.5V24.5zM28 24.5L14 33v17l14-8.5V24.5z' fill='%2300d4f5' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "28px 49px",
      }}
      aria-hidden
    />
  );
}

function FlowBackdrop({ gradientId, className }: { gradientId: string; className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-accent/[0.22]", className)}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M40 120 C 140 40, 220 200, 320 100 S 480 20, 560 140"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M80 200 C 180 260, 260 120, 380 180 S 520 240, 600 160"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="320" cy="100" r="2" fill="currentColor" opacity="0.22" />
      <circle cx="180" cy="220" r="1.5" fill="currentColor" opacity="0.16" />
      <circle cx="480" cy="160" r="1.5" fill="currentColor" opacity="0.14" />
    </svg>
  );
}

/**
 * Hero ile aynı hex ızgara + akış SVG’si. Çoklu bölüm için gradient id benzersiz.
 */
export function SectionPatterns({ className }: { className?: string }) {
  const gradId = useId().replace(/:/g, "");
  const regionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: regionRef,
    offset: ["start end", "end start"],
  });
  const layerY = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, -20]);

  return (
    <div ref={regionRef} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={reduceMotion ? undefined : { y: layerY }}
      >
        <HexLattice />
        <FlowBackdrop gradientId={`flow-${gradId}`} />
      </motion.div>
    </div>
  );
}
