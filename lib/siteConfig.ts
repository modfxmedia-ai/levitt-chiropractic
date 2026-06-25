const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levittchiropracticcenter.com"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Levitt Chiropractic Center, P.A.",
  shortName: "Levitt Chiropractic",
  tagline: "Your Spine Health Specialists",
  description:
    "Drug-free chiropractic care in Saint Louis Park, MN. Personalized spinal manipulation, cold laser therapy, cryotherapy and custom orthotics from Dr. Alan Levitt.",
  url: SITE_URL,
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
} as const;

export type SiteConfig = typeof siteConfig;
