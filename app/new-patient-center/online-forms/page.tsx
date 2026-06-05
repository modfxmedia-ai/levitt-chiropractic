import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import OnlineFormsContent from "@/components/patient/OnlineFormsContent";

export const metadata: Metadata = generateMeta({
  title: "Patient Forms | New Patient Center",
  description:
    "Download and print your new-patient intake form before your first visit to Levitt Chiropractic Center in Saint Louis Park, MN.",
  slug: "new-patient-center/online-forms",
});

export default function Page() {
  return <OnlineFormsContent />;
}
