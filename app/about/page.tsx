import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = generateMeta({
  title: "About Our Practice in Saint Louis Park, MN",
  description:
    "Inside Levitt Chiropractic Center in Saint Louis Park, MN our approach, payment options, and the conditions Dr. Alan Levitt treats every day.",
  slug: "about",
});

export default function Page() {
  return <AboutContent />;
}
