"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const causes = [
  "Natural aging tears in the tougher outer layer",
  "Loss of disc fluid (smaller, less flexible)",
  "Obesity",
  "Smoking",
  "Repeated physical work",
  "Injury",
];

const symptoms = [
  {
    title: "Localized Pain",
    body: "Pain at the site of the affected disc in the back or neck.",
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
        <path d="M12 3v18M5 12h14" />
      </svg>
    ),
  },
  {
    title: "Radiating Pain",
    body: "Caused by compressed nerves pain travels to the buttocks, arms, and legs.",
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
        <path d="M3 12c3-4 6-4 9 0s6 4 9 0" />
      </svg>
    ),
  },
  {
    title: "Numbness & Tingling",
    body: "Numbness and tingling sensations in the arms and legs.",
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
        <path d="M4 12h2M8 12h2M12 12h2M16 12h2M20 12h0" />
        <path d="M4 18h16M4 6h16" />
      </svg>
    ),
  },
  {
    title: "Variable Severity",
    body: "Pain can range from mild to severe and debilitating every patient is different.",
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
        <path d="M3 18l4-8 4 6 4-12 4 14" />
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

export default function DegenerativeDiscDiseaseContent() {
  return (
    <>
      <ServiceHero
        title="Degenerative Disc Disease"
        subtitle="A name for the changes that happen to the spine as we age not as much a disease as a process you can manage."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          {
            label: "Common Chiropractic Conditions",
            href: "/common-chiropractic-conditions",
          },
          { label: "Degenerative Disc Disease" },
        ]}
      />

      {/* SECTION 2 WHITE: WHAT IS IT */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Spinal Discs
                  </p>
                  <p className="mt-4 font-heading text-4xl font-black leading-tight text-[#F97316]">
                    Tough outside.
                    <br />
                    Soft inside.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Discs sit between the vertebrae and act as shock
                    absorbers a tough, rubbery exterior with a soft
                    interior. As we age, they begin to degenerate.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                What Is Degenerative Disc Disease?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                A natural part of getting older
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Degenerative disc disease is not as much a disease as it is a
                name for the changes that can happen to the spine as we age.
              </p>
              <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Our discs are made of a tough, rubbery exterior and a soft
                interior. They sit between the vertebrae to act as shock
                absorbers. As we age, the spinal discs begin to degenerate.
                This can cause herniated discs, bulging discs, spinal
                stenosis, and osteoarthritis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: SYMPTOMS GRID */}
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
              Symptoms
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What it feels like
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              The degeneration of spinal discs may cause no symptoms at all               and symptoms depend on each patient and the severity of their
              case.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {symptoms.map((s, i) => (
              <motion.div
                key={s.title}
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
                  {s.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: CAUSES + TREATMENT SPLIT */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Causes
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                What contributes to disc degeneration
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Our spines can degenerate as a natural part of aging. In
                addition to aging, other factors that may come into play
                include:
              </p>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07 } },
                }}
                className="mt-6 grid gap-2"
              >
                {causes.map((c) => (
                  <motion.li
                    key={c}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                    }}
                    className="flex items-start gap-3 text-sm text-slate-700 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{c}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl ring-1 ring-white/10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Treatment
                </p>
                <h3 className="relative mt-3 font-heading text-2xl font-bold text-white">
                  What you can do about it
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-white/80">
                  Pain caused by degeneration is often treated with hot or
                  cold packs and an anti-inflammatory medication. When disc
                  degeneration causes problems like herniated or bulging
                  discs, spinal stenosis, or osteoarthritis, other forms of
                  treatment may be beneficial including physical therapy,
                  stretching, and in some cases, surgery.
                </p>
                <p className="relative mt-3 text-sm font-semibold leading-relaxed text-orange-200">
                  While degenerative disc disease is a natural part of aging,
                  there are things you can do to prevent pain and stay
                  healthy. If you are experiencing frequent back or neck
                  pain, visit our office for an examination so we can create
                  a treatment plan for you.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 5 DARK NAVY: CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#F97316]/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Get Started
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Build a treatment plan that fits you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Frequent back or neck pain? Visit Dr. Levitt for an
                examination. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-orange-300 underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Get Evaluated"
                title="Schedule your exam"
                body="Make an appointment with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
