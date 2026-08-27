import type { ServedCity } from "./areasData";
import type { PseoService } from "./pseoServices";
import { siteConfig } from "./siteConfig";

export function neighborsPhrase(city: Pick<ServedCity, "neighbors">): string {
  const n = city.neighbors;
  if (n.length === 0) return "nearby neighborhoods";
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

export function zipPhrase(city: Pick<ServedCity, "zips">): string {
  if (city.zips.length === 1) return city.zips[0];
  if (city.zips.length === 2) return `${city.zips[0]} and ${city.zips[1]}`;
  return `${city.zips.slice(0, -1).join(", ")}, and ${city.zips[city.zips.length - 1]}`;
}

/** Typical Twin Cities drive, not posted speed. */
export function driveMinutes(city: Pick<ServedCity, "distanceMi">): number {
  if (city.distanceMi === 0) return 0;
  return Math.max(10, Math.round(city.distanceMi * 2.2));
}

export function driveLabel(city: Pick<ServedCity, "distanceMi" | "name">): string {
  if (city.distanceMi === 0) return `In ${city.name}`;
  const min = driveMinutes(city);
  return `About ${city.distanceMi} miles · ${min} min`;
}

function regionLifestyle(city: ServedCity): string {
  switch (city.region) {
    case "West Metro":
      return `West Metro patients often split time between desk work and an active lakeside life. We see a lot of neck and low-back strain from I-394 / Hwy 100 commutes, plus overuse from walking, cycling, and time on Lake Minnetonka.`;
    case "Minneapolis":
      return `Minneapolis patients typically sit more than they realize — Uptown, downtown, and the Chain of Lakes loop. Desk posture, bike-commute tightness, and recurring neck pain are the patterns we treat most from the city.`;
    case "Saint Paul":
      return `Saint Paul patients often come after a week of river-city commuting and desk hours. We look at the whole pattern: driving on I-94, sitting at work, and whatever sport or walking routine they are trying to keep.`;
    case "South Metro":
      return `South Metro patients usually reach us via 35W, 62, or 494. Long highway sits plus standing jobs (retail, warehouse, healthcare) show up as low-back, hip, and sciatica complaints.`;
    case "North Metro":
      return `North Metro patients often drive 169 or 94 to get here. We plan visits around that commute so care is efficient — evaluate, treat, and send you home with a plan you can actually keep.`;
    case "East Metro":
      return `East Metro patients make a longer but straightforward drive across the metro. If the visit is worth the trip, we make it count: a full evaluation, a clear plan, and techniques that do not require living next door to the office.`;
  }
}

export function cityIntro(city: ServedCity): { lead: string; support: string } {
  if (city.distanceMi === 0) {
    return {
      lead: `Our clinic is in ${city.name}. The office is at ${siteConfig.address.street}, near ${city.landmark}, serving ZIP codes ${zipPhrase(city)}.`,
      support: `Dr. Alan Levitt has practiced in this community since 1999. Care is drug-free and built around your case — spinal adjustments, cold laser, cryotherapy, therapeutic exercise, and custom orthotics when they help the cause, not just the symptom. ${regionLifestyle(city)}`,
    };
  }

  return {
    lead: `We do not have a second office in ${city.name}. Patients who live near ${city.landmark} or in ZIP ${zipPhrase(city)} are seen at our Saint Louis Park clinic — about ${city.distanceMi} miles, typically ${driveMinutes(city)} minutes depending on traffic.`,
    support: `That drive is why the first visit is unhurried and specific. Dr. Levitt has treated ${city.region.toLowerCase()} families since 1987, including people who also come from ${neighborsPhrase(city)}. ${regionLifestyle(city)} You leave with a plan, not a sales script.`,
  };
}

export function cityWhyPoints(city: ServedCity): Array<{ title: string; body: string }> {
  const drive =
    city.distanceMi === 0
      ? `You are already in the neighborhood. Parking and a first-visit plan are straightforward.`
      : `Most ${city.name} patients treat this as a dedicated appointment, not a drop-in. We work around your calendar so the ${driveMinutes(city)}-minute drive is worth it.`;

  return [
    {
      title: "One clinic, honest geography",
      body: drive,
    },
    {
      title: `Built for ${city.region} lives`,
      body: regionLifestyle(city),
    },
    {
      title: "Root-cause care",
      body: `No generic protocol. Dr. Levitt uses exam findings — and imaging only when it would change the plan — then chooses among adjustments, laser, cryotherapy, exercise, and orthotics.`,
    },
  ];
}

export function cityFaqs(city: ServedCity): Array<{ q: string; a: string }> {
  const officeQ =
    city.distanceMi === 0
      ? {
          q: `Where is the chiropractor's office in ${city.name}?`,
          a: `Levitt Chiropractic Center is at ${siteConfig.address.full}, near ${city.landmark}. Call ${siteConfig.phone} or request an appointment online.`,
        }
      : {
          q: `Do you have a chiropractic office in ${city.name}?`,
          a: `No. There is one clinic, in Saint Louis Park at ${siteConfig.address.street}. ${city.name} is about ${city.distanceMi} miles away (typically ${driveMinutes(city)} minutes). We regularly see patients from ${city.name} and ${neighborsPhrase(city)}.`,
        };

  return [
    officeQ,
    {
      q: `Are you accepting new patients from ${city.name}?`,
      a: `Yes. New patients from ${city.name} can request a visit online or call ${siteConfig.phone}. Most people are seen within the same week.`,
    },
    {
      q: `What should I expect on a first visit from ${city.name}?`,
      a: `Dr. Levitt listens first, then evaluates history, posture, and the nervous system. You leave with a clear next step. Imaging is ordered only when it would change care.`,
    },
    {
      q: `Is parking available?`,
      a: `Yes. The office is in Suite 201 at 6200 Excelsior Blvd. If you are coming from ${city.name}, give yourself a few extra minutes the first time so you are not rushed into the exam.`,
    },
  ];
}

export function cityServiceIntro(
  city: ServedCity,
  service: PseoService,
): { lead: string; support: string } {
  const conditions = formatList(service.conditions);
  if (city.distanceMi === 0) {
    return {
      lead: `${service.name} is available at our ${city.name} office near ${city.landmark}.`,
      support: `Dr. Levitt uses ${service.inlineNoun} as part of a whole-case plan — not an isolated gadget. People in ZIP ${zipPhrase(city)} typically come in for ${conditions}.`,
    };
  }
  return {
    lead: `${city.name} residents receive ${service.inlineNoun} at our Saint Louis Park clinic, about ${city.distanceMi} miles (${driveMinutes(city)} minutes) from ${city.landmark}.`,
    support: `We do not franchise a ${city.name} location. If you are making that drive for ${service.inlineNoun}, the visit is built to count: exam, the right technique for your findings, and a plan you can follow at home. Common reasons ${city.name} patients book this: ${conditions}.`,
  };
}

export function cityServiceFaqs(
  city: ServedCity,
  service: PseoService,
): Array<{ q: string; a: string }> {
  const localized = service.faqs;

  const travel = {
    q: `Can I get ${service.name.toLowerCase()} if I live in ${city.name}?`,
    a:
      city.distanceMi === 0
        ? `Yes — you will be seen here in ${city.name} at ${siteConfig.address.street}.`
        : `Yes. There is no ${city.name} branch. Appointments are at the Saint Louis Park office, typically a ${driveMinutes(city)}-minute drive. Call ${siteConfig.phone} if you want to confirm timing before you come.`,
  };

  return [...localized, travel];
}

export function visitFacts(city: ServedCity): Array<{ label: string; value: string }> {
  return [
    { label: "Office", value: siteConfig.address.full },
    { label: "From here", value: driveLabel(city) },
    { label: "County", value: `${city.county} County` },
    { label: "Phone", value: siteConfig.phone },
  ];
}

function formatList(items: string[]): string {
  if (items.length === 0) return "pain and mobility issues";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
