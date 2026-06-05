"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Testimonial = {
  author: string;
  short: string;
  full: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Richard B.",
    short:
      "Dr. Levitt has provided continued excellent care in treating my condition — ankylosing spondylitis. He has helped me maintain as much movement as possible and keep the rest of my skeletal structure aligned and tuned.",
    full:
      "Dr. Levitt has provided continued excellent care in treating my condition — ankylosing spondylitis. He has helped me maintain as much movement as possible and keep the rest of my skeletal structure aligned and tuned. His consistent expertise is very much appreciated as is his extensive professional manner. Highly recommended.",
  },
  {
    author: "Barbara N.",
    short:
      "Upon the recommendation of a friend, I saw Dr. Levitt for a sudden back problem. The problem went away after only 2 visits.",
    full:
      "Upon the recommendation of a friend, I saw Dr. Levitt for a sudden back problem. The problem went away after only 2 visits. I have continued to see him because I feel he is caring, intuitive & brilliant. He truly cares & has the tools & knowledge to help me maximize my health & well-being. Thank you, Dr. Levitt.",
  },
  {
    author: "Sanoma62",
    short:
      "I hurt my knee after running in a marathon. I went to physical therapy for over a year, with very little relief. I went to see Dr. Levitt — within a month I was running again, pain free!",
    full:
      "I hurt my knee after running in a marathon. I went to physical therapy for over a year, with very little relief. I went to see Dr. Levitt. I had never been to a chiropractor and was a bit skeptical. Within a month I was running again, pain free! I would highly recommend Dr. Levitt. I have now been going to him for 16 years!!! He has helped me with headaches, back and knee pain. I bring my children to him too. Thank you Dr. Levitt!!!!",
  },
  {
    author: "Barb W.",
    short:
      "I&rsquo;ve seen Dr. Levitt multiple times since I was in a serious car accident. He is able to perceive and treat my issues with a variety of methods in a short amount of time each visit.",
    full:
      "I&rsquo;ve seen Dr. Levitt multiple times since I was in a serious car accident. He is able to perceive and treat my issues with a variety of methods in a short amount of time each visit. I am much more rested and relieved of discomfort than prior to beginning treatment. Dr. Levitt and his staff have been very flexible with accommodating my schedule, and I appreciate their professionalism very much.",
  },
  {
    author: "Catherine G.",
    short:
      "Excellent and very helpful. Dr. Levitt is practical and yet thorough in his treatment. I feel like he listens well, pushes when necessary and also respects my preferences.",
    full:
      "Excellent and very helpful. Dr. Levitt is practical and yet thorough in his treatment. I feel like he listens well, pushes when necessary and also respects my preferences. He knows his stuff. And my health is much much better as a result of his support.",
  },
  {
    author: "Linda M.",
    short:
      "I have seen Dr. Levitt for the past 10+ years with a lifelong history of musculoskeletal issues. He has always been able to keep me functional with his muscle-testing and various ways of getting to what is really going on.",
    full:
      "I have seen Dr. Levitt for the past 10+ years with a lifelong history of musculoskeletal issues. During that time, while I have continued to improve overall, I have also had all kinds of exacerbations occur and he has always been able to keep me functional with his muscle-testing and various ways of getting to what is really going on at any particular moment. In addition to being my first responder when I run into difficulty, Dr. Levitt has also been very supportive, collaborative, helpful and open to the other extensive therapies I have sought out to really address the complexities of these issues in my case. I have truly appreciated his gentle manner and willingness to work with me given my need to incorporate these other therapies as my body unwinds its compensations (some are quite literally life-long). I wouldn&rsquo;t have made the progress or been able to maintain the quality of life I have had without his expertise and good work. Thank you very much, Dr. Levitt.",
  },
  {
    author: "Handy H.",
    short:
      "Dr. Levitt is not the conventional in-and-out chiropractor. He actually listens to what you say and runs tests against your own body to find the root cause of a problem.",
    full:
      "Dr. Levitt is not the conventional in-and-out chiropractor. He actually listens to what you say and runs tests against your own body to find the root cause of a problem. It&rsquo;s remarkable, truly, to think how many lives this humble man has changed including mine. I highly recommend Dr. Levitt to anyone looking for a down-to-earth, personable, kind, reliable chiropractor — a hidden gem for sure!",
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

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
      aria-hidden
    >
      <path d="M9.5 6.5C7 7 5 9 5 12v6h6v-6H8c0-2 1-3.5 3-4l-1.5-1.5zM18.5 6.5C16 7 14 9 14 12v6h6v-6h-3c0-2 1-3.5 3-4l-1.5-1.5z" />
    </svg>
  );
}

function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  const [open, setOpen] = useState(false);
  const isLong = t.full.length > t.short.length + 8;

  return (
    <motion.article
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
      className="group relative h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
    >
      <span
        aria-hidden
        className="absolute right-5 top-5 font-heading text-4xl font-black text-[#0F172A]/[0.05]"
      >
        0{i + 1}
      </span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/20">
        <QuoteIcon />
      </span>

      <div className="mt-5 text-sm leading-relaxed text-slate-700">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={open ? "full" : "short"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            dangerouslySetInnerHTML={{ __html: open ? t.full : t.short }}
          />
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F172A]">
          — {t.author}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F97316] transition-colors hover:text-orange-600"
          >
            {open ? "Show Less" : "Show More"}
            <span
              aria-hidden
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function TestimonialsContent() {
  return (
    <>
      <ServiceHero
        title="Testimonials"
        subtitle="What our patients have to say about Dr. Levitt and the team at Levitt Chiropractic Center."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Testimonials" },
        ]}
      />

      {/* SECTION 2 — WHITE: STATS BAR */}
      <section className="relative bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {[
              { value: "35+", label: "Years in practice" },
              { value: "5★", label: "Average patient rating" },
              { value: "16", label: "Years of return visits (and counting)" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-t-4 border-[#F97316] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200"
              >
                <p className="font-heading text-4xl font-black text-[#0F172A]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: TESTIMONIAL GRID */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 sm:py-24">
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
              Real Stories
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Patients in their own words
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
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} t={t} i={i} />
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
                Your Story Next
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Ready to feel better?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Join the patients who trust Dr. Levitt with their care. Call{" "}
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
                to schedule your first appointment.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Become a Patient"
                title="Start your story"
                body="Schedule your first visit with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
