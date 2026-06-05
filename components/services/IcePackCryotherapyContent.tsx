"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const benefits = [
  {
    title: "Eases muscle spasms",
    body: "Cold compresses help calm tight, spasming muscle tissue and the surrounding nerves.",
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
    title: "Numbs painful areas",
    body: "Targeted cooling reduces sensation in irritated soft tissues and joints.",
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
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    title: "Cools soft tissue",
    body: "Provides cooling relief to the affected soft tissues so the body can settle and recover.",
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
        <path d="M12 3a4 4 0 014 4v6a4 4 0 11-8 0V7a4 4 0 014-4z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Decreases inflammation",
    body: "Helpful for those in rehabilitation programs for injuries — or living with chronic pain.",
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
        <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
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

export default function IcePackCryotherapyContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <ServiceHero
        title="Ice Pack Cryotherapy"
        subtitle="Cold compresses applied to fresh injuries to reduce pain, swelling, and inflammation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Cryotherapy", href: "/cryotherapy" },
          { label: "Ice Pack Cryotherapy" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-cyan-400/15 blur-2xl"
                />
                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.5, 1, 0.5], scale: [1, 1.03, 1] }
                  }
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative grid h-full w-full place-items-center rounded-full border border-cyan-300/30 bg-[#0F172A] shadow-2xl ring-1 ring-white/10"
                >
                  <motion.span
                    aria-hidden
                    animate={
                      reduce
                        ? undefined
                        : { scale: [1, 1.25, 1], opacity: [0.55, 0, 0.55] }
                    }
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-cyan-300/40"
                  />
                  <div className="relative text-center">
                    <p className="font-heading text-7xl font-black text-cyan-300 drop-shadow-[0_0_24px_rgba(103,232,249,0.55)]">
                      ❄
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      Targeted Cold Therapy
                    </p>
                  </div>
                </motion.div>
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
                What It Is
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Cold compresses, smarter recovery
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Ice pack cryotherapy consists of applying cold compresses to
                the skin, both to reduce its temperature and constrict blood
                vessels in the area. Applied to fresh injuries, it can help
                reduce pain, swelling, and inflammation.
              </p>
              <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                You are likely already familiar with the use of ice to bring
                down swelling after spraining an ankle or knocking your shin.
                But did you know that ice pack cryotherapy can be beneficial
                well after you suffer your initial injury?
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: TREATMENT & BENEFITS */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
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
              Treatment & Benefits
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Cold therapy, real relief
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              Ice pack cryotherapy is an excellent way to help with muscle
              spasms, and is known to numb painful areas while providing
              cooling relief to the affected soft tissues. Commonly used in
              sports medicine, its power to ease pain and decrease
              inflammation can be helpful to those in rehabilitation programs
              for injuries — or who have chronic pain.
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
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
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
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
                  {b.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CLOSING + CTA */}
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
                Ready to Feel Better
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Interested in learning more about ice pack cryotherapy?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Contact your chiropractor for an appointment today. Call{" "}
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
                </Link>{" "}
                — Dr. Levitt will help you build a treatment plan that fits
                your needs.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Book Cold Therapy"
                title="Schedule your session"
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
