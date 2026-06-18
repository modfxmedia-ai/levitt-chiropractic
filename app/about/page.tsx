import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = generateMeta({
  title:
    "About Levitt Chiropractic Center in Saint Louis Park, MN | Dr. Alan Levitt",
  description:
    "About Levitt Chiropractic Center in Saint Louis Park, MN practice policies, payment options, and conditions Dr. Levitt treats including personal injuries, subluxations and headaches. Call 952-920-7535.",
  slug: "about",
});

export default function Page() {
  return <AboutContent />;
}
