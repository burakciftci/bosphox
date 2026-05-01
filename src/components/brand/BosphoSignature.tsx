"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Brand signature: interconnected hex network — ties to the BosphoX mark without aping the navbar logo.
 * One restrained “hero moment” — slow drift, no flashy glow.
 */
export function BosphoSignature({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 420 380"
        className="h-[min(52vw,28rem)] w-full max-w-[420px] text-sky-200/[0.38]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [0, 0.8, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="sig-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Primary hex cluster */}
        <path
          d="M210 28 L318 90 V214 L210 276 L102 214 V90 L210 28Z"
          stroke="url(#sig-stroke)"
          strokeWidth="1.15"
          opacity="0.85"
        />
        <path
          d="M210 88 L268 122 V190 L210 224 L152 190 V122 L210 88Z"
          stroke="currentColor"
          strokeWidth="0.85"
          opacity="0.35"
        />
        <path
          d="M72 118 L130 84 L188 118 V186 L130 220 L72 186 V118Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.28"
        />
        <path
          d="M232 118 L290 84 L348 118 V186 L290 220 L232 186 V118Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.28"
        />
        {/* Flow curves — product / data paths */}
        <path
          d="M40 200 C 100 120, 140 260, 210 200 S 320 140, 380 200"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
          strokeLinecap="round"
        />
        <path
          d="M60 260 C 130 300, 180 200, 250 240 S 340 280, 390 230"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.15"
          strokeLinecap="round"
        />
        {/* Nodes */}
        <circle cx="210" cy="28" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="318" cy="90" r="2.5" fill="currentColor" opacity="0.35" />
        <circle cx="102" cy="214" r="2.5" fill="currentColor" opacity="0.35" />
        <circle cx="210" cy="276" r="3.5" fill="currentColor" opacity="0.55" />
        <circle cx="348" cy="118" r="2" fill="currentColor" opacity="0.4" />
      </motion.svg>
    </motion.div>
  );
}
