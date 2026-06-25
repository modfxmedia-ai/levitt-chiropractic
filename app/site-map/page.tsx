import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import SiteMapContent from "@/components/legal/SiteMapContent";

export const metadata: Metadata = generateMeta({
  title: "Site Map",
  description:
    "Browse every page on Levitt Chiropractic Center, P.A. services, areas we serve, new patient resources, contact information, and legal policies.",
  slug: "site-map",
  noindex: true,
});

export default function Page() {
  return <SiteMapContent />;
}
