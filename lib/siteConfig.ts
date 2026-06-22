export const siteConfig = {
  name: "Levitt Chiropractic Center, P.A.",
  shortName: "Levitt Chiropractic",
  tagline: "Your Spine Health Specialists",
  description:
    "Levitt Chiropractic Center, P.A. Your Spine Health Specialists in Saint Louis Park, MN. Personalized chiropractic care including spinal manipulation, cold laser therapy, cryotherapy, custom orthotics, and individualized injury recovery.",
  url: "https://levittchiro.com",
  locale: "en_US",
  phone: "952-920-7535",
  phoneHref: "tel:9529207535",
  email: "",
  address: {
    street: "6200 Excelsior Blvd, Suite 201",
    city: "Saint Louis Park",
    state: "MN",
    zip: "55416",
    full: "6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416",
  },
  hours: [
    { day: "Monday", hours: "8:30–11:30am & 2:30–5:30pm" },
    { day: "Tuesday", hours: "8:30am–11:30am" },
    { day: "Wednesday", hours: "10:00am–12:00pm" },
    { day: "Thursday", hours: "8:30–11:30am & 2:30–5:30pm" },
    { day: "Friday", hours: "8:30am–11:30am" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  appointmentUrl: "/contact/appointment-request",
  socialLinks: {} as Record<string, string>,
  colors: {
    primary: "#F97316",
    dark: "#0F172A",
    navy: "#1E3A5F",
    gray: "#64748B",
  },
  nav: [
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "Meet the Doctor", href: "/meet-the-doctor" },
        { label: "Testimonials", href: "/testimonials/page" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Spinal Manipulation / Adjustment", href: "/services/spinal-manipulation-adjustment" },
        { label: "Adjustments & Manipulation", href: "/services/adjustments-and-manipulation" },
        { label: "Injuries", href: "/services/injuries" },
        { label: "Cryotherapy", href: "/services/cryotherapy" },
        { label: "Cold Laser Therapy", href: "/services/cold-laser-therapy" },
        { label: "Custom Foot Orthotics", href: "/services/custom-foot-orthotics" },
        { label: "Common Chiropractic Conditions", href: "/services/common-chiropractic-conditions" },
        { label: "Back Pain Treatments", href: "/services/back-pain-treatments" },
        { label: "Degenerative Disc Disease", href: "/services/degenerative-disc-disease" },
        { label: "Therapeutic Exercise", href: "/services/therapeutic-exercise" },
        { label: "Functional Medicine", href: "/services/functional-medicine" },
        { label: "Alternative Medicine", href: "/services/alternative-medicine" },
      ],
    },
    {
      label: "New Patient Center",
      href: "/new-patient-center",
      children: [
        { label: "What to Expect", href: "/new-patient-center/what-to-expect" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      children: [
        { label: "About Chiropractic", href: "/resources/about-chiropractic" },
        { label: "Q&A", href: "/resources/qa" },
        { label: "Wellness Tips", href: "/resources/wellness-tips" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      children: [
        { label: "Appointment Request", href: "/contact/appointment-request" },
      ],
    },
  ],
  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "HIPAA Policy", href: "/hipaa-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Good Faith Estimate", href: "/good-faith-estimate" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];
