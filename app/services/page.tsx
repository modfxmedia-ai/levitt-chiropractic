import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = generateMeta({
  title: "Chiropractic Services in Saint Louis Park, MN | Levitt Chiropractic",
  description:
    "Explore Dr. Alan Levitt's full range of chiropractic and integrative services — spinal adjustments, cold laser therapy, cryotherapy, custom orthotics, functional medicine, and more in Saint Louis Park, MN.",
  slug: "services",
});

export default function Page() {
  return <ServicesContent />;
}
