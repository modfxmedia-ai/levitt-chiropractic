import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import NewPatientCenterContent from "@/components/patient/NewPatientCenterContent";

export const metadata: Metadata = generateMeta({
  title: "New Patient Center",
  description:
    "Everything new patients need before their first visit to Levitt Chiropractic in Saint Louis Park, MN forms, what to expect, and a quick checklist.",
  slug: "new-patient-center",
});

export default function Page() {
  return <NewPatientCenterContent />;
}
