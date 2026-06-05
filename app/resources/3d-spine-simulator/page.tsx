import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import SpineSimulatorContent from "@/components/resources/SpineSimulatorContent";

export const metadata: Metadata = generateMeta({
  title: "3D Spine Simulator | Resources",
  description:
    "Explore the four regions of your spine and the body areas each controls — cervical, thoracic, lumbar, and sacral. From Levitt Chiropractic Center in Saint Louis Park, MN.",
  slug: "resources/3d-spine-simulator",
});

export default function Page() {
  return <SpineSimulatorContent />;
}
