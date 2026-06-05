"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const services = [
  {
    title: "Ice Pack Cryotherapy",
    href: "/ice-pack-cryotherapy",
    eyebrow: "Targeted Cold Therapy",
    body: "Localized cold therapy used to reduce swelling, calm acute pain, and support healing — applied directly to the affected area.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M12 2v20M2 12h20" />
        <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
  {
    title: "Whole Body Cryotherapy",
    href: "/contact",
    eyebrow: "Full-Body Recovery",
    body: "Brief, full-body cold exposure used to support recovery, ease soreness, and complement chiropractic care. Contact us to learn more.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <path d="M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    ),
  },
];

const benefits = [
  "Reduces swelling and inflammation",
  "Eases acute pain",
  "Supports faster recovery",
  "Drug-free and non-invasive",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CryotherapyContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <ServiceHero
        title="Cryotherapy"
        subtitle="A variety of cryotherapy services to reduce pain, swelling, and inflammation — explore each option below."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Cryotherapy" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
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
              <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-cyan-400/15 blur-2xl"
                />
                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.4, 1, 0.4], scale: [1, 1.03, 1] }
                  }
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 grid place-items-center rounded-full border border-cyan-300/30 bg-[#0F172A] shadow-2xl ring-1 ring-white/10"
                >
                  <motion.span
                    aria-hidden
                    animate={
                      reduce
                        ? undefined
                        : { scale: [1, 1.2, 1], opacity: [0.55, 0, 0.55] }
                    }
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-cyan-300/40"
                  />
                  <div className="relative text-center">
                    <p className="font-heading text-6xl font-black text-cyan-300 drop-shadow-[0_0_24px_rgba(103,232,249,0.55)]">
                      ❄
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      Cold Therapy
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
                Welcome
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Cold therapy, tailored to you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                We offer a variety of cryotherapy services for our valued
                patients. We encourage you to learn more about what we provide
                and how we can help by exploring the cards below. If you have
                any questions, please{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  contact us
                </Link>
                {" "}— we&rsquo;re always happy to hear from you!
              </p>

              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li
                    key={b}
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
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: SERVICE CARDS */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Our Cryotherapy Services
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pick the cold therapy that fits
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
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {services.map((s, i) => (
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={s.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-[#1E3A5F]"
                >
                  <span
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute right-6 top-6 font-heading text-5xl font-black text-white/[0.06]"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
                      {s.icon}
                    </span>
                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                      {s.eyebrow}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                      {s.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-transform duration-200 group-hover:translate-x-1">
                      Learn more
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CONTACT + CTA */}
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
                Questions?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Not sure which cryotherapy is right for you?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Talk with Dr. Levitt about how to incorporate cold therapy
                into your treatment plan. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or request a visit online to get started.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Cold Therapy"
                title="Try cryotherapy"
                body="Book a consultation with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
