/** All public URL slugs (relative paths) with sitemap metadata.
 *  Single source of truth for /sitemap.xml and the user-facing /site-map page.
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
  // Home
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // About
  { path: "/about", priority: 0.9, changefreq: "monthly" },
  { path: "/meet-the-doctor", priority: 0.8, changefreq: "monthly" },
  { path: "/unique-care", priority: 0.7, changefreq: "monthly" },
  { path: "/testimonials/page", priority: 0.7, changefreq: "monthly" },

  // Services
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/adjustments-and-manipulation", priority: 0.8, changefreq: "monthly" },
  { path: "/injuries", priority: 0.8, changefreq: "monthly" },
  { path: "/auto-injury", priority: 0.8, changefreq: "monthly" },
  { path: "/personal-injury", priority: 0.7, changefreq: "monthly" },
  { path: "/sports-injury", priority: 0.7, changefreq: "monthly" },
  { path: "/cryotherapy", priority: 0.7, changefreq: "monthly" },
  { path: "/ice-pack-cryotherapy", priority: 0.6, changefreq: "monthly" },
  { path: "/cold-laser-therapy", priority: 0.7, changefreq: "monthly" },
  { path: "/custom-foot-orthotics", priority: 0.7, changefreq: "monthly" },
  { path: "/common-chiropractic-conditions", priority: 0.7, changefreq: "monthly" },
  { path: "/back-pain-treatments", priority: 0.8, changefreq: "monthly" },
  { path: "/degenerative-disc-disease", priority: 0.7, changefreq: "monthly" },
  { path: "/therapeutic-exercise", priority: 0.6, changefreq: "monthly" },
  { path: "/functional-medicine", priority: 0.7, changefreq: "monthly" },
  { path: "/alternative-medicine", priority: 0.6, changefreq: "monthly" },

  // New patient center
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

  // User-facing sitemap
  { path: "/site-map", priority: 0.4, changefreq: "monthly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/hipaa-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-of-use", priority: 0.3, changefreq: "yearly" },
  { path: "/good-faith-estimate", priority: 0.3, changefreq: "yearly" },
];

export type SitemapSection = {
  title: string;
  description?: string;
  links: { label: string; href: string }[];
};

/** Curated, grouped sitemap used by the user-facing /site-map page. */
export const sitemapSections: SitemapSection[] = [
  {
    title: "Main",
    description: "Top-level pages.",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "New Patient Center", href: "/new-patient-center" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "About",
    description: "Get to know our practice.",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Meet the Doctor", href: "/meet-the-doctor" },
      { label: "Unique Care", href: "/unique-care" },
      { label: "Testimonials", href: "/testimonials/page" },
    ],
  },
  {
    title: "Services",
    description: "Treatments and care offered at Levitt Chiropractic.",
    links: [
      { label: "Services Overview", href: "/services" },
      { label: "Adjustments & Manipulation", href: "/adjustments-and-manipulation" },
      { label: "Injuries", href: "/injuries" },
      { label: "Auto Injury", href: "/auto-injury" },
      { label: "Personal Injury", href: "/personal-injury" },
      { label: "Sports Injury", href: "/sports-injury" },
      { label: "Cryotherapy", href: "/cryotherapy" },
      { label: "Ice Pack Cryotherapy", href: "/ice-pack-cryotherapy" },
      { label: "Cold Laser Therapy", href: "/cold-laser-therapy" },
      { label: "Custom Foot Orthotics", href: "/custom-foot-orthotics" },
      { label: "Common Chiropractic Conditions", href: "/common-chiropractic-conditions" },
      { label: "Back Pain Treatments", href: "/back-pain-treatments" },
      { label: "Degenerative Disc Disease", href: "/degenerative-disc-disease" },
      { label: "Therapeutic Exercise", href: "/therapeutic-exercise" },
      { label: "Functional Medicine", href: "/functional-medicine" },
      { label: "Alternative Medicine", href: "/alternative-medicine" },
    ],
  },
  {
    title: "New Patient Center",
    description: "Everything you need before your first visit.",
    links: [
      { label: "New Patient Center", href: "/new-patient-center" },
      { label: "Online Forms", href: "/new-patient-center/online-forms" },
      { label: "What to Expect", href: "/new-patient-center/what-to-expect" },
    ],
  },
  {
    title: "Resources",
    description: "Educational tools and references.",
    links: [
      { label: "Resources Overview", href: "/resources" },
      { label: "About Chiropractic", href: "/resources/about-chiropractic" },
      { label: "3D Spine Simulator", href: "/resources/3d-spine-simulator" },
      { label: "Health Resources", href: "/resources/health-resources" },
      { label: "Wellness Tips", href: "/resources/wellness-tips" },
      { label: "Q & A", href: "/resources/qa" },
      { label: "Useful Links", href: "/resources/links" },
    ],
  },
  {
    title: "Contact",
    description: "Get in touch or book a visit.",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Request an Appointment", href: "/contact/appointment-request" },
    ],
  },
  {
    title: "Legal & Policies",
    description: "Office policies and patient protections.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "HIPAA Policy", href: "/hipaa-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Good Faith Estimate", href: "/good-faith-estimate" },
    ],
  },
];
