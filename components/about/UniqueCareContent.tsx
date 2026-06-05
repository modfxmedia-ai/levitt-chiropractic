"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const techniques = [
  "Applied Kinesiology",
  "Koren Specific Technique",
  "Zone Therapy",
  "Talsky Tonal Therapy",
  "Torque Release Technique",
  "Polarity Testing",
  "Muscle Testing",
];

const pillars = [
  {
    title: "Chemical",
    body: "Nutrition, supplements, and chemical balance — supporting the body from the inside.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M9 3h6M10 3v6L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 9V3" />
      </svg>
    ),
  },
  {
    title: "Nutritional",
    body: "Whole-food guidance and personalized recommendations to fuel healing.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 3a4 4 0 014 4c0 2-1 3-1 4s1 2 1 4a4 4 0 11-8 0c0-2 1-3 1-4s-1-2-1-4a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Structural",
    body: "Adjustments and soft-tissue work to restore alignment, mobility, and nervous-system function.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M6 3v18M18 3v18M6 7h12M6 12h12M6 17h12" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function UniqueCareContent() {
  return (
    <>
      <ServiceHero
        title="Unique Care"
        subtitle="A comprehensive, nervous-system-first approach — built around the patient sitting in front of Dr. Levitt."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Unique Care" },
        ]}
      />

      {/* SECTION 2 — WHITE: NERVOUS SYSTEM FOCUS + TECHNIQUES */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Why It&rsquo;s Different
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                The nervous system is the starting point
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Levitt is a highly experienced chiropractor who uses a
                comprehensive approach to patient care. He believes the
                nervous system plays a critical role in overall health and
                wellness, and works to optimize it through a unique
                combination of techniques.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                By using these techniques together, Dr. Levitt is able to
                identify areas of dysfunction in the nervous system and
                create individualized treatment plans that address each
                patient&rsquo;s specific needs.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {techniques.map((t) => (
                  <motion.li
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/8 px-4 py-2 text-sm font-semibold text-[#0F172A]"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
                    />
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl ring-1 ring-white/10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Beyond the Symptoms
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-white/80">
                  Dr. Levitt&rsquo;s approach goes beyond just treating the
                  symptoms. Instead, he takes a holistic approach that
                  addresses the underlying causes of health issues — focusing
                  on chemical, nutritional, and structural solutions to
                  improve the patient&rsquo;s overall health and wellness.
                </p>
                <p className="relative mt-3 text-sm font-semibold leading-relaxed text-orange-200">
                  Every patient is unique — each treatment plan is tailored
                  to the individual.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: 3 PILLARS */}
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
              Three Pillars
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Chemical, nutritional, structural
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-heading text-4xl font-black text-white/[0.06]"
                >
                  0{i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                  {p.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: COMPLEX CASES + CTA */}
      <section className="relative bg-white py-20 sm:py-24">
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
                When Other Treatments Haven&rsquo;t Worked
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Built for difficult cases
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                One of Dr. Levitt&rsquo;s greatest strengths is his ability
                to work with difficult cases and patients who have not had
                satisfactory results with previous treatments. With over 35
                years of experience and training, Dr. Levitt has developed
                a keen understanding of the human body and its intricacies —
                using that knowledge to identify and treat even the most
                complex health issues.
              </p>
              <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Levitt is a highly skilled and compassionate chiropractor
                dedicated to helping his patients achieve optimal health and
                wellness — with individualized plans that address underlying
                causes for long-term success.
              </p>

              <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">
                Ready to try a different approach? Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Difficult Case?"
                title="Let&rsquo;s find what others missed"
                body="Schedule a comprehensive evaluation today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
