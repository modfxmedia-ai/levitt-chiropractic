import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import QAContent from "@/components/resources/QAContent";

export const metadata: Metadata = generateMeta({
  title: "Q & A | Resources",
  description:
    "Answers to common questions about chiropractic care, adjustments, subluxations, and what to expect at Levitt Chiropractic Center.",
  slug: "resources/qa",
});

export default function Page() {
  return <QAContent />;
}
