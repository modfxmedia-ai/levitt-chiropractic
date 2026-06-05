"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type ExtLink = {
  title: string;
  description: string;
  href: string;
  group: "Associations" | "Education" | "Reference";
};

const links: ExtLink[] = [
  {
    title: "American Chiropractic Association",
    description:
      "The leading professional organization representing doctors of chiropractic across the United States.",
    href: "https://www.acatoday.org/",
    group: "Associations",
  },
  {
    title: "Chiropractic Is Safe",
    description:
      "Research and resources documenting the safety and efficacy of chiropractic care.",
    href: "https://www.chiropracticissafe.org/",
    group: "Associations",
  },
  {
    title: "Planet Chiropractic",
    description:
      "News, events, and a global community for the chiropractic profession.",
    href: "https://www.planetc1.com/",
    group: "Associations",
  },
  {
    title: "The Chiropractic Resource Organization",
    description:
      "An extensive library of chiropractic research, articles, and resources.",
    href: "https://www.chiro.org/",
    group: "Education",
  },
  {
    title: "Chiropractic History Archive",
    description:
      "A deep archive of the history and development of the chiropractic profession.",
    href: "https://www.chiro.org/Plus/History/",
    group: "Education",
  },
  {
    title: "Dynamic Chiropractic Online",
    description:
      "Industry news, clinical articles, and continuing education for chiropractors.",
    href: "https://www.chiroweb.com/dynamic",
    group: "Education",
  },
  {
    title: "Spine-Health",
    description:
      "Trusted patient education on back, neck, and spine conditions — written and reviewed by physicians.",
    href: "https://www.spine-health.com/",
    group: "Reference",
  },
  {
    title: "Chiropractic Treatments for Back Pain",
    description:
      "A focused guide on how chiropractic care addresses back pain — from Spine-Health.",
    href: "https://www.spine-health.com/topics/conserv/chiro/feature/chirtr01.html",
    group: "Reference",
  },
  {
    title: "National Directory of Chiropractic",
    description:
      "Find chiropractors and clinics across the United States.",
    href: "https://www.chirodirectory.com/",
    group: "Reference",
  },
  {
    title: "NCCAM — Manipulative Therapies",
    description:
      "The National Center for Complementary and Alternative Medicine&rsquo;s overview of manipulative therapies.",
    href: "https://nccam.nih.gov/health/backgrounds/manipulative.htm",
    group: "Reference",
  },
];

const groups: ExtLink["group"][] = ["Associations", "Education", "Reference"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function LinksContent() {
  return (
    <>
      <ServiceHero
        title="Helpful Links"
        subtitle="Trusted external resources for chiropractic education, research, and patient information."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Links" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Curated by Dr. Levitt
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Resources we trust
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Below are external organizations, research libraries, and
              patient-education sites we recommend to anyone curious about
              chiropractic care. Each link opens in a new tab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: GROUPED LINK CARDS */}
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              External Resources
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Browse by category
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-14 space-y-16">
            {groups.map((groupName) => {
              const groupLinks = links.filter((l) => l.group === groupName);
              return (
                <motion.div
                  key={groupName}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07 } },
                  }}
                >
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 flex items-center gap-4"
                  >
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-[#F97316]/60 to-transparent"
                    />
                    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
                      {groupName}
                    </h3>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-l from-[#F97316]/60 to-transparent"
                    />
                  </motion.div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {groupLinks.map((l) => (
                      <motion.a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                        className="group relative block overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-[#1E3A5F]/80 hover:ring-[#F97316]/40"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-heading text-base font-bold text-white">
                            {l.title}
                          </h4>
                          <span
                            aria-hidden
                            className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30 transition-all group-hover:bg-[#F97316] group-hover:text-white group-hover:ring-[#F97316]"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            >
                              <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                          </span>
                        </div>
                        <p
                          className="mt-3 text-sm leading-relaxed text-white/70"
                          dangerouslySetInnerHTML={{ __html: l.description }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-14 max-w-2xl text-center text-xs text-white/50"
          >
            External links are provided for informational purposes only.
            Levitt Chiropractic Center is not responsible for the content of
            third-party sites.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Want to Talk to a Real Person?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Skip the search engine
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                These resources are great — but if you have a specific
                question, call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/resources/qa"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  browse our Q&amp;A
                </Link>
                . Real answers from your local chiropractor.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Have a Question?"
                title="Book a consultation"
                body="Talk with Dr. Levitt about your goals."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
