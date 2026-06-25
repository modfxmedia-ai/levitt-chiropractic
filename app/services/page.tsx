import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = generateMeta({
  title: "Chiropractic Services in Saint Louis Park, MN",
  description:
    "Dr. Alan Levitt's full chiropractic services in Saint Louis Park, MN spinal adjustments, cold laser, cryotherapy, orthotics, and functional medicine.",
  slug: "services",
});

export default function Page() {
  return <ServicesContent />;
}
