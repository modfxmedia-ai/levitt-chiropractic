"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const steps = [
  {
    title: "Download the form",
    body: "Click the download button and save the PDF to your computer or device.",
  },
  {
    title: "Print at home",
    body: "Use any standard printer — the form is single-sided and fits letter-size paper.",
  },
  {
    title: "Fill it out",
    body: "Take your time. The more we know up front, the more time we spend on your care.",
  },
  {
    title: "Bring it to your visit",
    body: "Hand it to our front desk when you arrive — you&rsquo;re ready to be seen.",
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

export default function OnlineFormsContent() {
  return (
    <>
      <ServiceHero
        title="Patient Forms"
        subtitle="Save time at your first visit — download and complete your new-patient paperwork in advance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "New Patient Center", href: "/new-patient-center" },
          { label: "Online Forms" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO + DOWNLOAD CARD */}
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
                New Patient Paperwork
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Tell us about your health
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                This lets us know the history and current state of your
                health. What questions, concerns, or goals regarding wellness
                can we help you with? Let us know!
              </p>
              <p className="mt-6 text-sm text-slate-600">
                Trouble downloading? Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                and we&rsquo;ll send you a copy.
              </p>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
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
                      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
                      <path d="M14 3v6h6M8 13h8M8 17h5" />
                    </svg>
                  </span>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    PDF · 1 page
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                    New Patient Intake Form
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Health history, current symptoms, and wellness goals.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="mt-6"
                  >
                    <a
                      href="/forms/new-patient-form.pdf"
                      download
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition-colors hover:bg-orange-600"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        <path d="M12 3v12M6 11l6 6 6-6M5 21h14" />
                      </svg>
                      Download &amp; Print Form
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: HOW IT WORKS */}
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
              How It Works
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Four quick steps
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
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {steps.map((s, i) => (
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
                <p className="font-heading text-4xl font-black text-[#F97316]">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-white/75"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CTA */}
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
                Ready to Be Seen
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Got your form? Let&rsquo;s schedule
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Once you&rsquo;ve filled out your paperwork, request a visit
                online or call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>
                . Not sure what to expect at your first visit?{" "}
                <Link
                  href="/new-patient-center/what-to-expect"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  Read our walkthrough
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="First Visit"
                title="Book your appointment"
                body="Schedule online or call our office today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
