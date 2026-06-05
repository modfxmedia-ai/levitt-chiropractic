"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export function StatCounter({ to, suffix = "", prefix = "", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(reduce ? to : 0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, duration, count, reduce]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
