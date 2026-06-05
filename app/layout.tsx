import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = generateMeta({
  title: siteConfig.name,
  description: siteConfig.description,
  slug: "",
});

export const viewport: Viewport = {
  themeColor: siteConfig.colors.primary,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased font-sans">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd id="ld-website" data={websiteJsonLd()} />
        <JsonLd id="ld-localbusiness" data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
