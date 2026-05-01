"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const NAV_HREFS = ["#home", "#services", "#products", "#process", "#contact"] as const;
type NavKey = "home" | "services" | "products" | "process" | "contact";

function HeaderActions({
  t,
  ctaClassName,
  mobileCtaClassName,
}: {
  t: ReturnType<typeof useLanguage>["t"];
  ctaClassName: string;
  mobileCtaClassName: string;
}) {
  return (
    <>
      <ThemeToggle />
      <LanguageSwitcher />
      <ButtonLink href="#contact" className={ctaClassName}>
        {t.nav.cta}
      </ButtonLink>
      <ButtonLink href="#contact" variant="primary" className={mobileCtaClassName}>
        {t.nav.ctaShort}
      </ButtonLink>
    </>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 1px 0 rgba(255,255,255,0.65) inset",
      "0 1px 0 rgba(255,255,255,0.65) inset, 0 12px 40px -18px rgba(14, 165, 233, 0.14)",
    ],
  );

  const navItems = useMemo(
    () =>
      NAV_HREFS.map((href, i) => {
        const keys: NavKey[] = ["home", "services", "products", "process", "contact"];
        const key = keys[i];
        return { href, label: t.nav[key] };
      }),
    [t.nav],
  );

  const ctaDesktop =
    "hidden !px-3 !py-2.5 !text-sm !font-semibold sm:inline-flex md:!px-4 xl:!px-5 md:!py-3 xl:!text-base";
  const ctaMobile = "!px-4 !py-2.5 !text-sm !font-semibold sm:hidden";

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 overflow-x-hidden border-b border-cyan-200/35 bg-gradient-to-b from-[#f8fafc]/95 via-[#f0f9ff]/88 to-[#e0f2fe]/55 backdrop-blur-xl backdrop-saturate-150 dark:border-cyan-500/20 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-900/85"
      style={reduceMotion ? { boxShadow: "0 1px 0 rgba(255,255,255,0.65) inset" } : { boxShadow: headerShadow }}
    >
      <Container className="w-full max-w-[100vw] py-2">
        {/* Mobil / tablet: grid — logo | aksiyonlar (en sağ) */}
        <div className="grid min-h-[5rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:hidden">
          <Link
            href="/#home"
            className="min-w-0 justify-self-start rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Logo emphasis="nav" />
          </Link>
          <div className="flex min-w-0 items-center justify-end gap-1.5 sm:gap-2">
            <HeaderActions t={t} ctaClassName={ctaDesktop} mobileCtaClassName={ctaMobile} />
            <button
              type="button"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/80 text-ink-muted transition-colors hover:border-cyan-300 hover:text-ink dark:border-cyan-500/35 dark:hover:border-cyan-400/55 dark:hover:text-slate-100"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Geniş ekran: 3 kolon grid — logo | nav (minmax sığdırma) | tema+dil+CTA (sağ kenar) */}
        <div className="hidden min-h-[5.75rem] w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 md:grid md:gap-x-4 xl:gap-x-6 2xl:gap-x-8">
          <div className="min-w-0 justify-self-start">
            <Link
              href="/#home"
              className="inline-flex max-w-full items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <Logo emphasis="nav" />
            </Link>
          </div>

          <nav
            className="min-w-0 justify-self-stretch px-1 sm:px-2"
            aria-label={t.nav.primaryAria}
          >
            <div className="mx-auto flex w-full max-w-full min-w-0 flex-nowrap items-center justify-center gap-x-0.5 sm:gap-x-1 md:gap-x-1.5 lg:gap-x-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap rounded-lg px-1.5 py-2 text-xs font-medium leading-tight text-ink-muted transition-colors hover:bg-sky-900/[0.04] hover:text-ink sm:px-2 sm:text-sm md:text-[0.9375rem] lg:px-2.5 xl:px-3 xl:text-base dark:hover:bg-slate-800/60 dark:hover:text-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex min-w-0 shrink-0 items-center justify-end justify-self-end gap-1.5 sm:gap-2 md:gap-2.5 xl:gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <ButtonLink
              href="#contact"
              className="!inline-flex !shrink-0 !px-3 !py-2.5 !text-sm !font-semibold md:!px-4 xl:!px-5 md:!py-3 xl:!text-base"
            >
              {t.nav.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-cyan-200/30 bg-gradient-to-b from-[#f8fafc]/98 to-[#eff8ff]/95 backdrop-blur-xl dark:border-cyan-500/20 dark:from-slate-950/98 dark:to-slate-900/95 md:hidden overflow-hidden"
          >
            <Container className="flex flex-col gap-0.5 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-ink-muted transition-colors hover:bg-cyan-50 hover:text-ink dark:hover:bg-slate-800/80 dark:hover:text-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
