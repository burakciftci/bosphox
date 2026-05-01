import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const themeInitScript = `(function(){try{var k='bosphox-theme';var s=localStorage.getItem(k);if(s==='dark'){document.documentElement.classList.add('dark');return;}if(s==='light'){document.documentElement.classList.remove('dark');return;}if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark');}catch(e){}})();`;

export const metadata: Metadata = {
  title: "BosphoX — Product studio for web & mobile",
  description:
    "BosphoX designs and ships web apps, mobile apps, and product experiences—built for real users, not slide decks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${montserrat.variable} h-full bg-white dark:bg-slate-950`}>
      <body className="min-h-screen bg-transparent font-sans text-ink antialiased">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
