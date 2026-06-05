import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Links",
  description:
    "Helpful external links and trusted partner organizations recommended by Levitt Chiropractic Center.",
  slug: "resources/links",
});

const links = [
  { href: "https://www.acatoday.org/", label: "American Chiropractic Association" },
  { href: "https://www.mnchiro.com/", label: "Minnesota Chiropractic Association" },
  { href: "https://www.health.state.mn.us/", label: "Minnesota Department of Health" },
];

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        title="Helpful Links"
        subtitle="External organizations and references we trust."
      />
      <AnimatedSection className="mx-auto max-w-3xl px-6 py-20">
        <ul className="space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm hover:border-sky-300 hover:text-sky-800"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </>
  );
}
