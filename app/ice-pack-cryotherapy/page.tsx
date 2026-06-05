import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import IcePackCryotherapyContent from "@/components/services/IcePackCryotherapyContent";

export const metadata: Metadata = generateMeta({
  title:
    "Ice Pack Cryotherapy in Saint Louis Park, MN | Levitt Chiropractic",
  description:
    "Ice pack cryotherapy reduces pain, swelling, and inflammation. Used in sports medicine and chiropractic rehab at Levitt Chiropractic Center. Call 952-920-7535.",
  slug: "ice-pack-cryotherapy",
});

export default function IcePackCryotherapyPage() {
  return <IcePackCryotherapyContent />;
}
