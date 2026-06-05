"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { sitemapSections } from "@/lib/sitemapEntries";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SiteMapContent() {
  const totalLinks = sitemapSections.reduce(
    (sum, s) => sum + s.links.length,
    0,
  );

  return (
    <>
      <ServiceHero
        title="Site Map"
        subtitle="Every page on the Levitt Chiropractic Center, P.A. website — organized for quick navigation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Site Map" },
        ]}
      />

      {/* Intro */}
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Full Index
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Find what you need, fast
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-left text-base leading-relaxed text-slate-700 sm:text-lg">
              {totalLinks} pages across {sitemapSections.length} sections.
              Looking for the machine-readable version?{" "}
              <a
                href="/sitemap.xml"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                /sitemap.xml
              </a>{" "}
              is available for search engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {sitemapSections.map((section, idx) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  {String(idx + 1).padStart(2, "0")} · Section
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="mt-2 text-sm text-white/70">
                    {section.description}
                  </p>
                )}
                <span
                  aria-hidden
                  className="mt-4 block h-px w-12 bg-[#F97316]"
                />
                <ul className="mt-4 space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-orange-300"
                      >
                        <span
                          aria-hidden
                          className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]/70 transition-colors group-hover:bg-[#F97316]"
                        />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow="Can't find what you're looking for?"
            title="We're here to help"
            body={`Call ${siteConfig.phone} or send us a message — we'll point you to the right resource or schedule your visit.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
