import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import WhatToExpectContent from "@/components/patient/WhatToExpectContent";

export const metadata: Metadata = generateMeta({
  title: "What to Expect on Your First Visit",
  description:
    "A friendly walkthrough of your first visit to Levitt Chiropractic in Saint Louis Park, MN paperwork, exam, goals, and your personalized care plan.",
  slug: "new-patient-center/what-to-expect",
});

export default function Page() {
  return <WhatToExpectContent />;
}
