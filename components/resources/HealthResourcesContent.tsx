"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Resource = {
  title: string;
  body: string;
  href: string;
  icon: React.ReactNode;
};

const resources: Resource[] = [
  {
    title: "About Chiropractic",
    body: "What chiropractic actually is, how it works, and the natural systemic approach behind it.",
    href: "/resources/about-chiropractic",
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
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Spinal Wellness Tips",
    body: "Practical, everyday habits — posture, lifting, sleep — to keep your spine healthy.",
    href: "/resources/wellness-tips",
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
        <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "Q & A",
    body: "Common questions about adjustments, subluxations, and what to expect — answered.",
    href: "/resources/qa",
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
        <path d="M12 18h.01" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Common Conditions",
    body: "Vertebral subluxation complex, sciatica, headaches, and more — explained simply.",
    href: "/common-chiropractic-conditions",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "3D Spine Simulator",
    body: "Explore each vertebra and learn how spinal issues affect the rest of your body.",
    href: "/resources/3d-spine-simulator",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
  {
    title: "Helpful Links",
    body: "Curated resources from trusted chiropractic and wellness organizations.",
    href: "/resources/links",
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
        <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
        <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
      </svg>
    ),
  },
  {
    title: "Patient Forms",
    body: "Download and print your new-patient paperwork before your first visit.",
    href: "/new-patient-center/online-forms",
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
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path d="M14 3v6h6M8 13h8M8 17h5" />
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

export default function HealthResourcesContent() {
  return (
    <>
      <ServiceHero
        title="Patient Resources"
        subtitle="A library of resources to help you learn more about chiropractic, your body, and how we can help."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Health Resources" },
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
              For Our Patients
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Resources to help you thrive
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              We offer a variety of resources for our patients. We encourage
              you to learn more about what we provide and how we can help by
              clicking on the links below. If you have any questions, please{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                contact us
              </Link>{" "}
              — we&rsquo;re always happy to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: RESOURCE CARD GRID */}
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
              Browse the Library
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pick a topic
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {resources.map((r) => (
              <motion.div
                key={r.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Link
                  href={r.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-[#1E3A5F]/80 hover:ring-[#F97316]/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30 transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                    {r.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {r.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-colors group-hover:text-[#F97316]">
                    Explore
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
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
                Can&rsquo;t Find What You&rsquo;re Looking For?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Reach out — we&rsquo;ll help
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Call{" "}
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
                  send us a message
                </Link>
                . We&rsquo;re always happy to hear from you.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Ready to Get Started?"
                title="Book your first visit"
                body="Schedule online or call us today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
