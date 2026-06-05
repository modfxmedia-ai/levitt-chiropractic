import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";
import { sitemapEntries } from "@/lib/sitemapEntries";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString();

  const urls = sitemapEntries
    .map((e) => {
      const loc = new URL(e.path, siteConfig.url).toString();
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
