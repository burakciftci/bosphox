"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  /** Liste öğelerinde hafif gecikme — scroll eğrisinde sıraya sokar */
  delay?: number;
};

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const d = Math.min(delay, 0.45);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.08"],
  });

  /** Scroll ilerledikçe sürekli güncellenen hareket: girişte hafif zoom + çıkışta soluk */
  const y = useTransform(scrollYProgress, [0, 0.48, 1], [46, 0, -40]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05 + d * 0.1, 0.16 + d * 0.08, 0.78, 1],
    [0, 0.82, 1, 1, 0.58],
  );
  const scale = useTransform(scrollYProgress, [0, 0.28, 0.55, 1], [0.93, 0.99, 1, 0.985]);

  if (reduceMotion) {
    return (
      <motion.div ref={ref} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
