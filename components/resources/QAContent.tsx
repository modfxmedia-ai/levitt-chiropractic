"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type FAQ = {
  q: string;
  a: string[];
};

const faqs: FAQ[] = [
  {
    q: "Is chiropractic effective?",
    a: [
      "Chiropractic helps to remove postural imbalances and structural misalignments that can accumulate in our bodies over time. Chiropractic works by restoring your own inborn ability to be healthy.",
      "For your body to remain healthy, your nervous system must function well. For your nervous system to function well it must be free of interference. By restoring spinal function with chiropractic adjustments, nerve interference by misaligned vertebrae is removed — thus allowing optimal nervous system function and improved health.",
    ],
  },
  {
    q: "Why should I see a chiropractor?",
    a: [
      "Seeing a chiropractor is not only for back pain and neck pain. Chiropractic care is an excellent way to keep your body at its peak performance through nutrition, adjustment, and overall wellness.",
      "In addition, chiropractic care has been known to help a wide range of conditions — from fibromyalgia to diabetes.",
    ],
  },
  {
    q: "What is subluxation?",
    a: [
      "When a vertebra becomes misaligned or moves out of its normal position, this is referred to in the chiropractic profession as a subluxation. Subluxations can be caused by a wide range of issues — from a minor slip or bump to any sudden trauma.",
      "When a vertebra is subluxated, it begins to put pressure on nerves, blood vessels, and everything around it. This pressure comes with a price: the subluxation interrupts the natural pathways that messages from the brain need to be clear in order to be completed properly.",
    ],
  },
  {
    q: "How does chiropractic care work?",
    a: [
      "Chiropractic is an overall way of looking at the human body. It&rsquo;s based on the idea that the body is self-sustaining and self-healing. The body is essentially controlled by the brain through its connection via the spinal cord and the vast networks of nerves that make up the body.",
      "In the chiropractic world, drugs and medicine are not utilized as a form of treating a patient. While supplementation and nutrition are almost always a part of the bigger picture, drugs and prescriptions can be viewed as band-aids to treat symptoms rather than going to the source.",
      "Chiropractors not only treat soft and hard tissue problems such as sciatica and joint pain, but are largely called on to deal with more significant issues — fibromyalgia, allergies, insomnia, headaches, and many more.",
    ],
  },
  {
    q: "What is a chiropractic adjustment? Is it safe?",
    a: [
      "Adjustments, or manipulation as they&rsquo;re sometimes referred to, is the minor movement of vertebrae in the spine. The objective of this movement is to realign vertebrae that have moved out of place for a number of reasons — from normal daily activity to sudden trauma.",
      "When these vertebrae are out of place, it has an overall systemic effect from muscular to the central nervous system. Without proper alignment and flow of all nerves and systems in the body from the brain, we can&rsquo;t function at our peak.",
      "An adjustment is often pressure from the chiropractor utilizing the hands or an instrument to move a vertebra back into place. This happens with a quick movement and is often without discomfort. You may hear a noise that sounds like cracking your knuckles — joint cavitation — which is the release of gases such as oxygen and nitrogen from the joint.",
    ],
  },
  {
    q: "What can I expect from my visit to a chiropractor?",
    a: [
      "Going to the chiropractor is a new experience for many of us. Maybe we&rsquo;ve heard through a friend or have done some research online. It&rsquo;s possible that you are just fed up with living in pain and it&rsquo;s time to do something about it.",
      "In either case, your first visit to the chiropractor will really be about getting to know the chiropractor and discussing your history, current condition, and goals.",
    ],
  },
  {
    q: "What results can I expect from treatment?",
    a: [
      "Chiropractic is based on the idea of removing imbalances both structural and postural in an effort to allow our body to heal itself. For this to happen, the network of nerves and signals from your brain — down your spinal cord, to the network of nerves — must be allowed to flow freely without any interruption.",
      "Chiropractors have the ability and skill to remove these interruptions or misalignments and allow the body to perform as it was meant to.",
      "If you&rsquo;ve ever experienced a fall, repetitive strain, or just bumped into something too hard, it&rsquo;s very possible that you are not functioning at your best due to a misalignment. While there are many potential mechanical or structural causes for misalignment, there are also chemical reasons — smoking, drinking excessively, or even just a poor diet can cause underlying conditions and disease to appear.",
      "Allowing a chiropractor to get you back on track both chemically and structurally will bring your body back to the proper state it should be in to perform at its peak.",
    ],
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

function FAQAccordion({ faq, i }: { faq: FAQ; i: number }) {
  const [open, setOpen] = useState(i === 0);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E3A5F]/50 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#1E3A5F]/80"
      >
        <span className="flex items-center gap-4">
          <span className="font-heading text-xs font-black text-[#F97316]">
            Q{i + 1}
          </span>
          <span className="font-heading text-base font-bold text-white sm:text-lg">
            {faq.q}
          </span>
        </span>
        <span
          aria-hidden
          className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-6 py-6 text-sm leading-relaxed text-white/80 sm:text-base">
              {faq.a.map((p, k) => (
                <p key={k} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function QAContent() {
  return (
    <>
      <ServiceHero
        title="Q & A"
        subtitle="Common questions about chiropractic care, adjustments, subluxations, and what to expect — answered."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Q & A" },
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
              Questions, Answered
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Everything you wanted to know
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Tap any question below to see the full answer. Don&rsquo;t see
              what you&rsquo;re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                Contact us
              </Link>{" "}
              or call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              — we&rsquo;re always happy to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: FAQ ACCORDION */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              7 Common Questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start exploring
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="mt-8 sm:mt-12 grid gap-3"
          >
            {faqs.map((f, i) => (
              <FAQAccordion key={f.q} faq={f} i={i} />
            ))}
          </motion.div>
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
                Still Curious?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Get answers from Dr. Levitt himself
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
                </Link>{" "}
                — every question gets a real answer.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Have a Question?"
                title="Book a consultation"
                body="Schedule a visit and ask anything in person."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
