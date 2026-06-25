import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import ResourcesHubContent from "@/components/resources/ResourcesHubContent";

export const metadata: Metadata = generateMeta({
  title: "Patient Resources",
  description:
    "Patient education from Levitt Chiropractic about chiropractic, Q&A, wellness tips, and our blog with in-depth articles on spinal health and recovery.",
  slug: "resources",
});

export default function Page() {
  return <ResourcesHubContent />;
}
