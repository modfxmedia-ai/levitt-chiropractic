import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = generateMeta({
  title: "Contact",
  description:
    "Contact Levitt Chiropractic Center, P.A. in Saint Louis Park, MN phone, address, office hours, and directions.",
  slug: "contact",
});

export default function Page() {
  return <ContactContent />;
}
