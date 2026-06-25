import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { servedCities, getCityBySlug } from "@/lib/areasData";
import { siteConfig } from "@/lib/siteConfig";
import { cityChiropractorJsonLd } from "@/lib/jsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import AreaCityPageContent from "@/components/areas/AreaCityPageContent";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return servedCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Chiropractor in ${city.name}, MN`;
  const description = `Drug-free chiropractic care for ${city.name}, Minnesota adjustments, cold laser, cryotherapy, custom orthotics and more. Call ${siteConfig.phone}.`;

  return generateMeta({
    title,
    description,
    slug: `areas-we-serve/${city.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return notFound();

  return (
    <>
      <JsonLd
        id={`ld-city-${city.slug}`}
        data={cityChiropractorJsonLd({ citySlug: city.slug, cityName: city.name })}
      />
      <AreaCityPageContent city={city} />
    </>
  );
}
