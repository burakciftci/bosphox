"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, BarChart3 } from "lucide-react";
import { BosphoSignature } from "@/components/brand/BosphoSignature";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { useLanguage } from "@/components/providers/LanguageProvider";

const barHeightsPx = [26, 42, 32, 52, 38, 58, 44];

export function Hero() {
  const { t } = useLanguage();
  const m = t.hero.mock;
  const mocksRef = useRef<HTMLDivElement>(null);
  const heroIntroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: introProgress } = useScroll({
    target: heroIntroRef,
    offset: ["start 0.9", "end 0.22"],
  });
  const introY = useTransform(introProgress, [0, 1], [22, -34]);
  const introScale = useTransform(introProgress, [0, 0.45, 1], [0.96, 1, 0.992]);
  const { scrollYProgress } = useScroll({
    target: mocksRef,
    offset: ["start end", "end start"],
  });
  const mockLeftY = useTransform(scrollYProgress, [0, 1], [48, -36]);
  const mockRightY = useTransform(scrollYProgress, [0, 1], [56, 28]);
  const mockOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2, 0.85, 1], [0, 0.9, 1, 1, 0.92]);
  const bridgeScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.2, 1, 1, 0.85]);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36"
      aria-labelledby="hero-heading"
    >
      <SectionPatterns />

      <div className="pointer-events-none absolute -right-4 top-1/2 z-0 hidden -translate-y-[42%] lg:block xl:right-[max(0px,calc(50vw-36rem))]">
        <BosphoSignature className="opacity-[0.28]" />
      </div>

      <Container className="relative z-[2]">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-24">
          <div ref={heroIntroRef} className="max-w-xl lg:max-w-none xl:max-w-[36rem]">
            <motion.div
              className="origin-top will-change-transform"
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: introY,
                      scale: introScale,
                    }
              }
            >
              <div className="flex items-center gap-4">
                <span
                  className="h-px w-10 bg-accent-fade-h motion-safe:animate-kicker-line motion-reduce:animate-none sm:w-14"
                  aria-hidden
                />
                <p className="section-kicker">{t.hero.eyebrow}</p>
              </div>

              <h1
                id="hero-heading"
                className="font-display mt-7 text-balance text-[2.35rem] font-semibold leading-[1.05] tracking-display text-ink sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]"
              >
                {t.hero.titleLine1}
                <span className="mt-2 block font-medium text-ink-muted lg:mt-3">{t.hero.titleLine2}</span>
              </h1>

              <p className="mt-7 max-w-md border-l-2 border-accent-soft/45 pl-5 text-[1.05rem] font-medium leading-relaxed text-slate-800 dark:border-accent-soft/35 dark:text-slate-300 sm:pl-6 sm:text-[1.0625rem]">
                {t.hero.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href="#products">{t.hero.primaryCta}</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  {t.hero.secondaryCta}
                </ButtonLink>
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[min(120%,28rem)] w-[min(120%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[100px]"
              aria-hidden
            />

            <div ref={mocksRef} className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[440px]">
              <motion.div
                className="absolute left-0 top-0 w-[64%] origin-top-left sm:top-2"
                style={
                  reduceMotion
                    ? { rotate: "-1.25deg" }
                    : { rotate: "-1.25deg", y: mockLeftY, opacity: mockOpacity }
                }
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-600/80 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-0 text-white shadow-device ring-1 ring-white/10">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
                  <div className="relative border-b border-white/[0.08] px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      <span className="ml-auto font-mono text-[10px] tracking-wide text-white/40">{m.webUrl}</span>
                    </div>
                  </div>
                  <div className="relative flex gap-3 p-3.5">
                    <div className="flex w-9 shrink-0 flex-col gap-2 border-r border-white/[0.08] pr-2 pt-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-7 rounded-lg ${i === 1 ? "bg-accent-soft/12 ring-1 ring-accent-soft/25" : "bg-white/[0.05]"}`}
                        />
                      ))}
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-white">
                            <BarChart3 className="h-3.5 w-3.5 text-accent-soft" aria-hidden />
                            {m.releaseHealth}
                          </div>
                          <p className="mt-0.5 text-[10px] text-white/45">{m.releaseSub}</p>
                        </div>
                        <span className="rounded-md bg-accent-soft/10 px-2 py-0.5 font-mono text-[10px] font-medium text-accent-soft">
                          +12.4%
                        </span>
                      </div>
                      <div className="flex h-16 items-end gap-1">
                        {barHeightsPx.map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-accent-soft/35 to-accent-soft/12"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-white/[0.07] pt-2">
                        <span className="text-[10px] text-white/70">{m.deploys}</span>
                        <span className="font-mono text-[10px] text-white">284</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-[58%] origin-bottom-right sm:bottom-1"
                style={
                  reduceMotion
                    ? { rotate: "2deg" }
                    : { rotate: "2deg", y: mockRightY, opacity: mockOpacity }
                }
              >
                <div className="relative rounded-[1.55rem] border border-slate-600/80 bg-gradient-to-b from-slate-800 to-slate-950 p-[10px] shadow-device ring-1 ring-white/10">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.45rem] bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent" />
                  <div className="relative rounded-[1.25rem] border border-slate-200/90 bg-white px-3.5 pb-5 pt-3 shadow-inner">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-slate-200 pb-3">
                      <span className="text-[10px] font-medium tabular-nums text-slate-500">9:41</span>
                      <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                      <span className="justify-self-end flex items-center gap-0.5 text-slate-500" aria-hidden>
                        <Activity className="h-3 w-3 text-cyan-600" />
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/25 to-cyan-400/20 ring-1 ring-cyan-300/30 shadow-[0_10px_28px_-14px_rgba(14,165,233,0.18)]">
                        <span className="font-display text-sm font-bold text-slate-900">B</span>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-slate-900">{m.phoneApp}</p>
                        <p className="text-[10px] text-slate-500">{m.phoneSub}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {m.metrics.map((row) => (
                        <div
                          key={row.key}
                          className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-slate-50/90 px-2.5 py-2"
                        >
                          <span className="text-[10px] text-slate-600">{row.key}</span>
                          <span className="font-mono text-[10px] font-medium text-cyan-600">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute left-[42%] top-[34%] z-[2] hidden h-px w-[34%] origin-left rotate-[-14deg] bg-gradient-to-r from-transparent via-accent-soft/25 to-transparent sm:block"
                style={reduceMotion ? { scaleX: 1 } : { scaleX: bridgeScale }}
                aria-hidden
              />

              <motion.div
                className="absolute right-[4%] top-[10%] z-[2] h-1.5 w-1.5 rounded-full bg-accent-soft/70 shadow-[0_0_12px_rgba(0,86,179,0.25)]"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
