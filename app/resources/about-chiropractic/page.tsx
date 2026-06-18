import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import AboutChiropracticContent from "@/components/resources/AboutChiropracticContent";

export const metadata: Metadata = generateMeta({
  title: "About Chiropractic | Resources",
  description:
    "What is chiropractic? A natural, systemic approach to healing built on the idea that the body is self-sustaining and self-healing.",
  slug: "resources/about-chiropractic",
});

export default function Page() {
  return <AboutChiropracticContent />;
}
