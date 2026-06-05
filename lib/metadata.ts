import type { Metadata } from "next";

const SITE_NAME = "Levitt Chiropractic Center, P.A.";
const SITE_URL = "https://levittchiro.com";
const OG_DEFAULT = "/images/og-default.jpg";

type GenerateMetaInput = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  noindex?: boolean;
};

function buildUrl(slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}` : SITE_URL;
}

export function generateMeta({
  title,
  description,
  slug,
  image = OG_DEFAULT,
  noindex = false,
}: GenerateMetaInput): Metadata {
  const url = buildUrl(slug);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: "/images/fevicon.png", type: "image/png" },
      ],
      shortcut: "/images/fevicon.png",
      apple: "/images/fevicon.png",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/** Backwards-compat alias used by older imports. */
export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  return generateMeta({
    title: input.title,
    description: input.description ?? "",
    slug: input.path ?? "",
    image: input.image,
    noindex: input.noindex,
  });
}

export const SEO = { SITE_NAME, SITE_URL };
