"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "section" | "div" | "article" | "header" | "footer";
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      animate={
        reduce ? undefined : inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
      }
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </Tag>
  );
}
