import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = generateMeta({
  title: "Privacy Policy",
  description:
    "How Levitt Chiropractic Center, P.A. collects, uses, and protects information you share through this website.",
  slug: "privacy-policy",
});

export default function Page() {
  return <PrivacyPolicyContent />;
}
