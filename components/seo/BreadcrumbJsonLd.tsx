"use client";

import { usePathname } from "next/navigation";

import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export type BreadcrumbCrumb = { label: string; href?: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: BreadcrumbCrumb[] }) {
  const pathname = usePathname();
  const items = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    return {
      name: c.label,
      url: c.href ?? (isLast ? pathname : "/"),
    };
  });

  return <JsonLd id="ld-breadcrumb" data={breadcrumbJsonLd({ items })} />;
}
