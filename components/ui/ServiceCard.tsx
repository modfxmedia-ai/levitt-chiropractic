"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  ctaLabel?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  ctaLabel = "Learn More",
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy text-white shadow-md shadow-black/20 transition-shadow hover:shadow-xl hover:shadow-orange-500/20"
    >
      <Link
        href={href}
        className="flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        <span
          aria-hidden
          className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl transition-opacity group-hover:opacity-80"
        />

        {icon && (
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
            {icon}
          </div>
        )}

        <h3 className="font-heading text-lg font-semibold tracking-tight text-white group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
          {description}
        </p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {ctaLabel}
          <motion.span
            aria-hidden
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}
