import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/jsonLd";
import { qaFaqsPlainText } from "@/lib/qaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import QAContent from "@/components/resources/QAContent";

export const metadata: Metadata = generateMeta({
  title: "Chiropractic Q & A",
  description:
    "Answers to common questions about chiropractic care, adjustments, subluxations, and what to expect at Levitt Chiropractic in Saint Louis Park, MN.",
  slug: "resources/qa",
});

export default function Page() {
  return (
    <>
      <JsonLd
        id="ld-qa-faq"
        data={faqPageJsonLd({
          faqs: qaFaqsPlainText.map((f) => ({ q: f.q, a: f.a })),
        })}
      />
      <QAContent />
    </>
  );
}
