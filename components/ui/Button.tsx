"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-md shadow-orange-500/20 hover:bg-orange-600",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  ghost: "text-primary bg-transparent hover:bg-primary/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-13 px-8 text-base",
};

const motionProps = {
  whileHover: { scale: 1.04, y: -1 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 320, damping: 20 },
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsButton = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps | "ref"> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps | "href" | "ref"> & {
    href: string;
  };

export function Button(props: AsButton | AsLink) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;
  const cls =
    `${base} ${variants[variant]} ${sizes[size]} hover:shadow-lg hover:shadow-orange-500/30 ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as AsLink;
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      </motion.span>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as AsButton;
  return (
    <motion.span {...motionProps} className="inline-block">
      <button className={cls} {...rest}>
        {children}
      </button>
    </motion.span>
  );
}
