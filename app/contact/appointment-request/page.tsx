import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import AppointmentRequestContent from "@/components/contact/AppointmentRequestContent";

export const metadata: Metadata = generateMeta({
  title: "Request an Appointment",
  description:
    "Request a chiropractic appointment at Levitt Chiropractic in Saint Louis Park, MN. We typically reply within one business day to schedule your visit.",
  slug: "contact/appointment-request",
});

export default function Page() {
  return <AppointmentRequestContent />;
}
