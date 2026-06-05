import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import IcePackCryotherapyContent from "@/components/services/IcePackCryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Ice Pack Cryotherapy in Saint Louis Park, MN | Levitt Chiropractic",
  description:
    "Ice pack cryotherapy reduces pain, swelling, and inflammation. Used in sports medicine and chiropractic rehab at Levitt Chiropractic Center. Call 952-920-7535.",
  slug: "ice-pack-cryotherapy",
});

export default function IcePackCryotherapyPage() {
  return (
    <>
      <ServiceSchema
        name="Ice Pack Cryotherapy"
        slug="ice-pack-cryotherapy"
        description="Ice pack cryotherapy in Saint Louis Park, MN to reduce pain, swelling and inflammation. Used in sports medicine and chiropractic rehab."
      />
      <IcePackCryotherapyContent />
    </>
  );
}
