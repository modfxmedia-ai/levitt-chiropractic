/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://levittchiro.com",
  generateRobotsTxt: false, // app/robots.txt/route.ts handles robots
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/server-sitemap.xml", "/sitemap.xml"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://levittchiro.com/sitemap.xml"],
  },
};
