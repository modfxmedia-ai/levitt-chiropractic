"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
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

type Right = { title: string; body: React.ReactNode };

const rights: Right[] = [
  {
    title: "Total expected cost",
    body: (
      <>
        You have the right to receive a Good Faith Estimate for the total
        expected cost of any non-emergency items or services. This includes
        related costs like medical tests, prescription drugs, equipment, and
        hospital fees.
      </>
    ),
  },
  {
    title: "In writing, at least 1 business day in advance",
    body: (
      <>
        Make sure your health care provider gives you a Good Faith Estimate
        in writing at least 1 business day before your medical service or
        item. You can also ask your health care provider, and any other
        provider you choose, for a Good Faith Estimate before you schedule
        an item or service.
      </>
    ),
  },
  {
    title: "Dispute bills $400 or more above your estimate",
    body: (
      <>
        If you receive a bill that is at least <strong>$400 more</strong>{" "}
        than your Good Faith Estimate, you can dispute the bill.
      </>
    ),
  },
  {
    title: "Save a copy",
    body: (
      <>
        Make sure to save a copy or picture of your Good Faith Estimate for
        your records.
      </>
    ),
  },
];

export default function GoodFaithEstimateContent() {
  return (
    <>
      <ServiceHero
        title="Good Faith Estimate"
        subtitle="Your right to know what your care will cost — under the No Surprises Act."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Good Faith Estimate" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Your Patient Rights
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              You have the right to a Good Faith Estimate
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              You have the right to receive a &ldquo;Good Faith Estimate&rdquo;
              explaining how much your medical care will cost.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Under the law, health care providers need to give patients who
              don&rsquo;t have insurance or who are not using insurance an
              estimate of the bill for medical items and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: 4 KEY RIGHTS */}
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
              What You&rsquo;re Entitled To
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Four key protections
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
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-14 grid gap-5 sm:grid-cols-2"
          >
            {rights.map((r, i) => (
              <motion.article
                key={r.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-2xl font-black text-[#F97316]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {r.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CONTACT / RESOURCE CTA */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Need More Information?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Learn more about your rights
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              For questions or more information about your right to a Good
              Faith Estimate, visit{" "}
              <a
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cms.gov/nosurprises
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              To request a Good Faith Estimate from our office, call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
