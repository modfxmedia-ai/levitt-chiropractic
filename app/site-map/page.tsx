import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import SiteMapContent from "@/components/legal/SiteMapContent";

export const metadata: Metadata = generateMeta({
  title: "Site Map",
  description:
    "Browse every page on Levitt Chiropractic Center, P.A. — services, new patient resources, contact, and policies.",
  slug: "site-map",
});

export default function Page() {
  return <SiteMapContent />;
}
