import { siteConfig } from "./siteConfig";

const GEO = { latitude: 44.9305, longitude: -93.3673 };

function buildHoursSpecification() {
  const dayMap: Record<string, string> = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su",
  };

  const out: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string;
    opens?: string;
    closes?: string;
    description?: string;
  }> = [];

  for (const h of siteConfig.hours) {
    const code = dayMap[h.day];
    if (!code) continue;
    if (/closed/i.test(h.hours)) continue;
    if (/appointment/i.test(h.hours)) {
      out.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: code,
        description: h.hours,
      });
      continue;
    }
    // Best-effort range parse: "8:30am–11:30am" or "8:30–11:30am & 2:30–5:30pm"
    const ranges = h.hours.split("&").map((s) => s.trim());
    for (const range of ranges) {
      const m = range.match(
        /(\d{1,2})(?::(\d{2}))?\s*([ap]m)?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*([ap]m)/i,
      );
      if (!m) continue;
      const opens = to24h(m[1], m[2], m[3] ?? m[6]);
      const closes = to24h(m[4], m[5], m[6]);
      if (opens && closes)
        out.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: code,
          opens,
          closes,
        });
    }
  }
  return out;
}

function to24h(h: string, m: string | undefined, ampm: string | undefined) {
  let hh = parseInt(h, 10);
  const mm = m ? parseInt(m, 10) : 0;
  const ap = (ampm ?? "").toLowerCase();
  if (ap === "pm" && hh < 12) hh += 12;
  if (ap === "am" && hh === 12) hh = 0;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": `${siteConfig.url}/#chiropractor`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/og-default.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: buildHoursSpecification(),
    areaServed: [
      { "@type": "City", name: "Saint Louis Park" },
      { "@type": "City", name: "Minneapolis" },
      { "@type": "AdministrativeArea", name: "Minnesota" },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en-US",
  };
}
