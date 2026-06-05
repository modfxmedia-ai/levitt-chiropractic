import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";

export const metadata: Metadata = generateMeta({
  title:
    "Patient Testimonials in Saint Louis Park, MN | Levitt Chiropractic Center | Dr. Alan Levitt",
  description:
    "Real patient reviews of Dr. Alan Levitt at Levitt Chiropractic Center in Saint Louis Park, MN — back, neck, headache, and post-accident chiropractic care patients trust for 35+ years. Call 952-920-7535.",
  slug: "testimonials/page",
});

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
