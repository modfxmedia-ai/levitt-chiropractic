import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import AboutChiropracticContent from "@/components/resources/AboutChiropracticContent";

export const metadata: Metadata = generateMeta({
  title: "About Chiropractic",
  description:
    "What is chiropractic? A natural, systemic approach to healing built on the idea that the body is self-sustaining, self-healing, and nervous-system led.",
  slug: "resources/about-chiropractic",
});

export default function Page() {
  return <AboutChiropracticContent />;
}
