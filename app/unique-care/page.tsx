import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import UniqueCareContent from "@/components/about/UniqueCareContent";

export const metadata: Metadata = generateMeta({
  title:
    "Unique Chiropractic Care in Saint Louis Park, MN | Applied Kinesiology, TRT & More | Dr. Alan Levitt",
  description:
    "Dr. Alan Levitt&rsquo;s comprehensive, nervous-system-first chiropractic approach in Saint Louis Park, MN — Applied Kinesiology, Koren Specific Technique, Zone Therapy, Torque Release Technique and more. Call 952-920-7535.",
  slug: "unique-care",
});

export default function Page() {
  return <UniqueCareContent />;
}
