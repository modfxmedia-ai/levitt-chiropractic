/** All public URL slugs (relative paths) with sitemap metadata.
 *  Single source of truth for /sitemap.xml and next-sitemap.config.js fallback.
 */
export type SitemapEntry = {
  path: string;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export const sitemapEntries: SitemapEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // About
  { path: "/about", priority: 0.9, changefreq: "monthly" },
  { path: "/meet-the-doctor", priority: 0.8, changefreq: "monthly" },
  { path: "/unique-care", priority: 0.7, changefreq: "monthly" },
  { path: "/testimonials/page", priority: 0.7, changefreq: "monthly" },

  // Services
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/services/spinal-manipulation-adjustment", priority: 0.8, changefreq: "monthly" },
  { path: "/services/adjustments-and-manipulation", priority: 0.7, changefreq: "monthly" },
  { path: "/services/injuries", priority: 0.8, changefreq: "monthly" },
  { path: "/services/injuries/auto-injury", priority: 0.8, changefreq: "monthly" },
  { path: "/services/injuries/personal-injury", priority: 0.7, changefreq: "monthly" },
  { path: "/services/injuries/sports-injury", priority: 0.7, changefreq: "monthly" },
  { path: "/services/cryotherapy", priority: 0.7, changefreq: "monthly" },
  { path: "/services/cryotherapy/ice-pack-cryotherapy", priority: 0.6, changefreq: "monthly" },
  { path: "/services/cold-laser-therapy", priority: 0.7, changefreq: "monthly" },
  { path: "/services/custom-foot-orthotics", priority: 0.7, changefreq: "monthly" },
  { path: "/services/common-chiropractic-conditions", priority: 0.7, changefreq: "monthly" },
  { path: "/services/back-pain-treatments", priority: 0.8, changefreq: "monthly" },
  { path: "/services/degenerative-disc-disease", priority: 0.7, changefreq: "monthly" },
  { path: "/services/therapeutic-exercise", priority: 0.6, changefreq: "monthly" },
  { path: "/services/functional-medicine", priority: 0.7, changefreq: "monthly" },
  { path: "/services/alternative-medicine", priority: 0.6, changefreq: "monthly" },

  // New patient
  { path: "/new-patient-center", priority: 0.8, changefreq: "monthly" },
  { path: "/new-patient-center/online-forms", priority: 0.7, changefreq: "monthly" },
  { path: "/new-patient-center/what-to-expect", priority: 0.7, changefreq: "monthly" },

  // Resources
  { path: "/resources", priority: 0.7, changefreq: "monthly" },
  { path: "/resources/about-chiropractic", priority: 0.6, changefreq: "monthly" },
  { path: "/resources/3d-spine-simulator", priority: 0.6, changefreq: "monthly" },
  { path: "/resources/health-resources", priority: 0.5, changefreq: "monthly" },
  { path: "/resources/links", priority: 0.4, changefreq: "yearly" },
  { path: "/resources/qa", priority: 0.6, changefreq: "monthly" },
  { path: "/resources/wellness-tips", priority: 0.6, changefreq: "monthly" },

  // Contact
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/contact/appointment-request", priority: 0.9, changefreq: "monthly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/hipaa-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-of-use", priority: 0.3, changefreq: "yearly" },
  { path: "/good-faith-estimate", priority: 0.3, changefreq: "yearly" },
];
