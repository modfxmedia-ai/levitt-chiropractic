import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = generateMeta({
  title: "Contact Us",
  description:
    "Reach Levitt Chiropractic Center in Saint Louis Park, MN phone, address, office hours, directions, and a quick online appointment request form.",
  slug: "contact",
});

export default function Page() {
  return <ContactContent />;
}
