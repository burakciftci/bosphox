"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge, Rocket, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";
import { landingCardMinH } from "@/lib/landingCardShell";
import { landingCardHover, landingCardHoverTransition } from "@/lib/landingMotion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const POINT_ICONS = [Gauge, Target, Cpu, Rocket] as const;

export function WhyBosphoX() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-transparent py-28 sm:py-36" aria-labelledby="why-heading">
      <SectionPatterns />
      <Container className="relative z-[1]">
        <FadeIn>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-accent-fade-h motion-safe:animate-kicker-line motion-reduce:animate-none sm:w-12"
              aria-hidden
            />
            <p className="section-kicker">{t.why.eyebrow}</p>
          </div>
          <h2
            id="why-heading"
            className="font-display mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-display text-ink sm:text-4xl lg:text-[2.35rem]"
          >
            {t.why.title}
          </h2>
        </FadeIn>

        <div className="mt-24 grid items-stretch gap-6 sm:grid-cols-2">
          {t.why.points.map((item, i) => {
            const Icon = POINT_ICONS[i];
            return (
              <FadeIn key={item.title} className="h-full min-h-0" delay={i * 0.05}>
                <motion.article
                  whileHover={landingCardHover}
                  transition={landingCardHoverTransition}
                  className={cn(
                    landingCardMinH,
                    "group relative flex h-full w-full flex-col gap-5 overflow-hidden rounded-2xl border border-cyan-200/50 bg-card-tone-2 p-7 shadow-card ring-1 ring-slate-900/[0.04] transition-[transform,box-shadow,border-color] duration-300 hover:border-cyan-300/60 hover:shadow-[0_12px_40px_-14px_rgba(14,165,233,0.12)] sm:flex-row sm:items-stretch",
                    "dark:border-cyan-500/25 dark:bg-card-dark-2 dark:shadow-[0_16px_48px_-18px_rgba(0,0,0,0.55)] dark:ring-slate-950/50",
                    "dark:hover:border-cyan-400/45 dark:hover:shadow-[0_14px_40px_-14px_rgba(34,211,238,0.1)]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_0%,rgba(14,165,233,0.12),transparent_55%)] dark:opacity-70" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/[0.03] to-transparent dark:from-sky-950/35" />
                  <div className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/60 bg-white/90 text-cyan-600 shadow-sm transition-transform duration-300 group-hover:scale-[1.04] dark:border-cyan-500/35 dark:bg-slate-900/90 dark:text-cyan-300 sm:mt-0">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
                    <h3 className="font-display text-base font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
