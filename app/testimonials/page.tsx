import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";

export const metadata: Metadata = generateMeta({
  title: "Patient Testimonials in Saint Louis Park, MN",
  description:
    "Real reviews of Dr. Alan Levitt back, neck, headache, and post-accident chiropractic patients have trusted since 1987 in Saint Louis Park, MN.",
  slug: "testimonials",
});

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
