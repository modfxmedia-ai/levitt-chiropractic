import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import HealthResourcesContent from "@/components/resources/HealthResourcesContent";

export const metadata: Metadata = generateMeta({
  title: "Patient Resources | Health Resources",
  description:
    "A library of patient resources from Levitt Chiropractic Center — about chiropractic, wellness tips, Q & A, conditions, and more.",
  slug: "resources/health-resources",
});

export default function Page() {
  return <HealthResourcesContent />;
}
