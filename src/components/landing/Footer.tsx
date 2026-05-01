"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { useLanguage } from "@/components/providers/LanguageProvider";

const FOOTER_HREFS = ["#services", "#products", "#process", "#contact"] as const;
type FooterNavKey = "services" | "products" | "process" | "contact";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const rights = t.footer.rightsLine.replace("{year}", String(year));

  const footerNav = FOOTER_HREFS.map((href, i) => {
    const keys: FooterNavKey[] = ["services", "products", "process", "contact"];
    return { href, label: t.nav[keys[i]] };
  });

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-slate-900/[0.06] bg-white/45 py-16 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/55">
      <SectionPatterns />
      <Container className="relative z-[1]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{t.footer.blurb}</p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{t.footer.navigate}</p>
              <ul className="mt-4 space-y-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{t.footer.connect}</p>
              <p className="mt-4 text-sm text-ink-muted">
                <a href="mailto:info@bosphox.com" className="text-ink hover:underline">
                  info@bosphox.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-900/[0.06] pt-10 text-xs text-ink-faint dark:border-slate-800/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{rights}</p>
          <p className="text-ink-faint/80">{t.footer.location}</p>
        </div>
      </Container>
    </footer>
  );
}
