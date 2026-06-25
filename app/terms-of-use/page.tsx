import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import TermsOfUseContent from "@/components/legal/TermsOfUseContent";

export const metadata: Metadata = generateMeta({
  title: "Terms of Use",
  description:
    "Website Terms of Service for Levitt Chiropractic Center, P.A. Please read these terms carefully before using this website or our online forms.",
  slug: "terms-of-use",
});

export default function Page() {
  return <TermsOfUseContent />;
}
