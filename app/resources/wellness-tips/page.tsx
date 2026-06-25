import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import WellnessTipsContent from "@/components/resources/WellnessTipsContent";

export const metadata: Metadata = generateMeta({
  title: "Spinal Wellness Tips",
  description:
    "Practical daily habits to protect your spine posture, lifting, sleep, hydration, and stretching tips from Dr. Alan Levitt at Levitt Chiropractic.",
  slug: "resources/wellness-tips",
});

export default function Page() {
  return <WellnessTipsContent />;
}
