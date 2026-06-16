"use client";

import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_ITEMS = [
  "✓ Personalized Chiropractic Care",
  "✓ Serving Saint Louis Park Since 1985",
  "✓ Accepting New Patients",
  "✓ Cold Laser Therapy",
  "✓ Functional Medicine",
];

type Props = {
  items?: string[];
  /** seconds for one full loop */
  speed?: number;
};

export function ScrollTicker({ items = DEFAULT_ITEMS, speed = 40 }: Props) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div
      className="overflow-hidden bg-primary text-white"
      role="region"
      aria-label="Practice highlights"
    >
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap py-3"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-sm font-semibold uppercase tracking-wider"
            aria-hidden={i >= items.length || undefined}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
