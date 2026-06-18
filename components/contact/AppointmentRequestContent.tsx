"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const reasons = [
  {
    title: "We&rsquo;ll reach out fast",
    body: "Our staff will be in touch shortly to confirm your visit and answer any questions.",
  },
  {
    title: "Flexible scheduling",
    body: "Tell us your preferred days and times we&rsquo;ll do our best to match.",
  },
  {
    title: "First-visit friendly",
    body: "New to the practice? We&rsquo;ll walk you through paperwork and what to expect.",
  },
];

export default function AppointmentRequestContent() {
  return (
    <>
      <ServiceHero
        title="Appointment Request"
        subtitle="Fill out the form and our staff will be in touch shortly let&rsquo;s get you on the schedule."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Appointment Request" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO + FORM */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Request a Visit
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Send us a message
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Fill out the appointment request form and our staff will be
                in touch shortly. Send us a message!
              </p>

              <ul className="mt-8 space-y-4">
                {reasons.map((r) => (
                  <li key={r.title} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p
                        className="font-heading text-sm font-bold text-[#0F172A]"
                        dangerouslySetInnerHTML={{ __html: r.title }}
                      />
                      <p
                        className="mt-1 text-sm text-slate-600"
                        dangerouslySetInnerHTML={{ __html: r.body }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-[#0F172A] p-6 text-white ring-1 ring-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Prefer to Call?
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 block font-heading text-2xl font-bold text-white transition-colors hover:text-[#F97316]"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-white/60">
                  Mon &amp; Thu: 8:30am – 5:30pm
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                  Appointment Form
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#0F172A]">
                  Tell us about you
                </h3>

                <form
                  className="mt-6 grid gap-5"
                  method="post"
                  action="/api/appointment"
                >
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="a-name"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                    >
                      Full Name <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="a-name"
                      name="name"
                      required
                      className="h-12 rounded-lg border border-slate-300 px-4 text-sm outline-none transition-colors focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <div className="grid gap-1.5">
                      <label
                        htmlFor="a-email"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                      >
                        Email <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        id="a-email"
                        name="email"
                        type="email"
                        required
                        className="h-12 rounded-lg border border-slate-300 px-4 text-sm outline-none transition-colors focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label
                        htmlFor="a-phone"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                      >
                        Phone
                      </label>
                      <input
                        id="a-phone"
                        name="phone"
                        type="tel"
                        className="h-12 rounded-lg border border-slate-300 px-4 text-sm outline-none transition-colors focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="a-preferred"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                    >
                      Preferred Day / Time
                    </label>
                    <input
                      id="a-preferred"
                      name="preferred"
                      placeholder="e.g. Tuesday mornings"
                      className="h-12 rounded-lg border border-slate-300 px-4 text-sm outline-none transition-colors focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="a-message"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                    >
                      Reason for Visit
                    </label>
                    <textarea
                      id="a-message"
                      name="message"
                      rows={5}
                      placeholder="Brief description please don&rsquo;t include sensitive health details."
                      className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  >
                    <button
                      type="submit"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition-colors hover:bg-orange-600"
                    >
                      Submit Request
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
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>

                  <p className="text-xs text-slate-500">
                    This form is for appointment requests only. Please do
                    not send protected health information (PHI). For urgent
                    medical needs, call{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="font-semibold text-[#F97316] hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                    .
                  </p>
                </form>

                <p className="mt-6 text-xs text-slate-500">
                  New to the practice?{" "}
                  <Link
                    href="/new-patient-center/what-to-expect"
                    className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
                  >
                    See what to expect
                  </Link>{" "}
                  on your first visit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
