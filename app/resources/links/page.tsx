import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import LinksContent from "@/components/resources/LinksContent";

export const metadata: Metadata = generateMeta({
  title: "Helpful Links | Resources",
  description:
    "Curated chiropractic and wellness resources — associations, education, and patient reference sites recommended by Dr. Alan Levitt.",
  slug: "resources/links",
});

export default function Page() {
  return <LinksContent />;
}
