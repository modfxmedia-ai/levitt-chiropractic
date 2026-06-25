import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = generateMeta({
  title: "Privacy Policy",
  description:
    "How Levitt Chiropractic Center, P.A. collects, uses, stores, and protects the information you share through this website and our online forms.",
  slug: "privacy-policy",
});

export default function Page() {
  return <PrivacyPolicyContent />;
}
