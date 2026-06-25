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

export function serviceJsonLd(input: {
  name: string;
  slug: string;
  description: string;
  serviceType?: string;
}) {
  const url = `${siteConfig.url}/${input.slug.replace(/^\/+/, "")}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: input.name,
    description: input.description,
    url,
    areaServed: [
      { "@type": "City", name: "Saint Louis Park" },
      { "@type": "City", name: "Minneapolis" },
      { "@type": "AdministrativeArea", name: "Minnesota" },
    ],
  };
}

export function blogPostingJsonLd(input: {
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  authorUrl?: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
}) {
  const url = `${siteConfig.url}/blog/${input.slug.replace(/^\/+/, "")}`;
  const image = input.image.startsWith("http")
    ? input.image
    : `${siteConfig.url}${input.image.startsWith("/") ? input.image : `/${input.image}`}`;
  const authorUrl = input.authorUrl
    ? input.authorUrl.startsWith("http")
      ? input.authorUrl
      : `${siteConfig.url}${input.authorUrl.startsWith("/") ? input.authorUrl : `/${input.authorUrl}`}`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: input.title,
    description: input.description,
    image: [image],
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: "en-US",
    url,
    author: {
      "@type": "Person",
      name: input.authorName,
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#chiropractor`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/og-default.jpg`,
      },
    },
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.keywords && input.keywords.length > 0
      ? { keywords: input.keywords.join(", ") }
      : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
  };
}

export function blogIndexJsonLd(input: {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    authorName: string;
    image: string;
  }>;
}) {
  const url = `${siteConfig.url}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${siteConfig.name} Blog`,
    description:
      "Articles on chiropractic care, recovery, and spinal health from Dr. Alan Levitt.",
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#chiropractor`,
      name: siteConfig.name,
    },
    blogPost: input.posts.map((p) => {
      const postUrl = `${siteConfig.url}/blog/${p.slug}`;
      const image = p.image.startsWith("http")
        ? p.image
        : `${siteConfig.url}${p.image.startsWith("/") ? p.image : `/${p.image}`}`;
      return {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: p.title,
        description: p.description,
        url: postUrl,
        datePublished: p.publishedAt,
        dateModified: p.updatedAt ?? p.publishedAt,
        image,
        author: { "@type": "Person", name: p.authorName },
      };
    }),
  };
}

export function faqPageJsonLd(input: { faqs: Array<{ q: string; a: string }> }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: input.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(input: {
  items: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: input.items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

/** Per-city LocalBusiness/Chiropractor schema used on /areas-we-serve/[city]. */
export function cityChiropractorJsonLd(input: {
  citySlug: string;
  cityName: string;
}) {
  const url = `${siteConfig.url}/areas-we-serve/${input.citySlug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": `${url}#chiropractor`,
    name: `${siteConfig.name} serving ${input.cityName}, MN`,
    image: `${siteConfig.url}/images/og-default.jpg`,
    url,
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
    areaServed: { "@type": "City", name: input.cityName },
  };
}

/** Physician/Person schema for Dr. Alan Levitt used on /meet-the-doctor. */
export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/meet-the-doctor#physician`,
    name: "Dr. Alan G. Levitt, DC",
    medicalSpecialty: "Chiropractic",
    image: `${siteConfig.url}/images/dr-leviit.png`,
    url: `${siteConfig.url}/meet-the-doctor`,
    telephone: siteConfig.phone,
    worksFor: { "@id": `${siteConfig.url}/#chiropractor` },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
  };
}
