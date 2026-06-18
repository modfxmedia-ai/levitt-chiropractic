import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import AppointmentRequestContent from "@/components/contact/AppointmentRequestContent";

export const metadata: Metadata = generateMeta({
  title: "Appointment Request",
  description:
    "Request an appointment at Levitt Chiropractic Center, P.A. in Saint Louis Park, MN our staff will be in touch shortly.",
  slug: "contact/appointment-request",
});

export default function Page() {
  return <AppointmentRequestContent />;
}
