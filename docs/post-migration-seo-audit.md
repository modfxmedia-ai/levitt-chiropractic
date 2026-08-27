# Levitt Chiropractic Center — Post-Migration SEO & Lead Audit

**Site:** [https://www.levittchiropracticcenter.com](https://www.levittchiropracticcenter.com)  
**Go-live:** June 5–6, 2026  
**Audit date:** August 26, 2026  
**Period in question:** ~3 months after migration, ~3 new leads

---

## Bottom line

The new website is technically fine. The lead drop is not because titles, HTTPS, or the sitemap are missing.

New-patient demand is still there. People in this market search for a chiropractor in Saint Louis Park every month. After the migration, the practice became **invisible in the two places those searches convert**:

1. **Google Map Pack** (the map results at the top of search) — not showing at all for “chiropractor saint louis park.”
2. **Google organic page 1** — the main commercial keyword sits on **page 3** (position 25).

That is why three months produced about three leads.

---

## What happened

The old site was replaced with a new Next.js site on **June 5–6, 2026**, on the same domain.

Google did not simply “keep” the old rankings. It recrawled the site as a **new site graph**:

- All 5 remaining keyword rankings are flagged as **new**, not recovered.
- Domain rank is **0**.
- Estimated organic traffic value is about **$13/month**.
- The site ranks for only **5 keywords** in the US. Only one of those is a real patient search.

On top of that, the Google Business Profile was never aligned to how people actually search. Google still stores the business as **“Alan G. Levitt, DC” in Minneapolis**, not as **Levitt Chiropractic Center in Saint Louis Park**. Map Pack winners for this query all have Saint Louis Park as the city, far more reviews, and active photos.

Website work alone cannot put the clinic in that map. Maps is a profile + reviews + city-name problem.

---

## The numbers

| Signal | Levitt today | What “good” looks like here |
|---|---|---|
| New leads since go-live | ~3 | Ongoing new-patient flow from search |
| Map Pack rank for “chiropractor saint louis park mn” | Not in the pack | Top 3 |
| Organic rank for “chiropractic st louis park” (170 searches/mo) | **#25** (page 3) | Page 1 |
| Total ranked keywords (US) | **5** | Dozens of local/condition terms |
| Estimated organic traffic value | **~$13/mo** | Hundreds/month for a healthy local clinic |
| Google reviews on the live listing | **29 · 5.0 stars** | Pack leaders: 91–515 reviews |
| Photos on Google Business Profile | **1** | Pack leaders: 23–71 |
| Homepage on-page SEO score | **97/100** | Already fine |

### The only 5 keywords the site ranks for

| Keyword | Position | Monthly volume | Does it bring new patients? |
|---|---:|---:|---|
| chiropractic st louis park | 25 | 170 | Yes, but page 3 = almost no clicks |
| dr alan levitt | 1 | 40 | Branded — existing patients, not new leads |
| karel lewit clinic | 13 | 70 | Wrong person |
| puritz chiropractic | 47 | 70 | Someone else’s brand |
| “chiropractor in ketchum” junk query | 33 | 140 | Unrelated |

---

## Root cause 1 — Google Maps (this is the lead killer)

Local chiropractic leads come from the **Map Pack first**, then the website.

The Google Business Profile **is claimed** and **is linked to the new site**. It even ranks #1 when someone searches the doctor’s name. It does **not** rank when someone searches like a new patient:

> chiropractor saint louis park mn

### How Google stores this practice today

- **Name:** Alan G. Levitt, DC *(not Levitt Chiropractic Center)*
- **City:** Minneapolis *(ZIP 55416; the website says Saint Louis Park)*
- **Reviews:** 29 at 5.0
- **Photos:** 1
- **Booking URL:** missing
- **Secondary categories:** missing

### Who actually wins that Map Pack (Aug 26, 2026)

| Rank | Business | Reviews | City Google uses |
|---|---|---|---|
| 1 | Minnesota Chiro Health of West End | 515 · 4.9 | St Louis Park 55416 |
| 2 | Excelsior & Grand / Elevate | 91–138 · 4.9 | St Louis Park |
| 3 | LifeClinic Chiropractic | 160 · 5.0 | Cedar Lake Rd S (SLP) |
| — | **This practice** | **29 · 5.0** | **Minneapolis** |

Google will not put a **Minneapolis doctor listing with 29 reviews and 1 photo** into a Saint Louis Park chiropractor Map Pack against businesses whose city field is Saint Louis Park and who have 100–500 reviews.

Name / address / phone is also split across the web. The website says Saint Louis Park. Healthgrades and several directories still say Minneapolis. That conflict reinforces the wrong city.

---

## Root cause 2 — Organic search was reset

For `chiropractor saint louis park`, page 1 organic is other SLP clinics (Excelsior & Grand, Symmetry, etc.). Levitt is not in the top 10.

Page 3 on the one commercial term means **effectively zero new-patient clicks** from Google Search. Users almost never go there.

This was made worse by how the migration was sequenced:

| Date | What happened | Effect |
|---|---|---|
| Jun 5–6, 2026 | New site went live, including ~1,100 city/service pages | Google recrawled a new URL tree. Rankings flagged as new. |
| Jun 17 | Injury URLs changed after launch | Extra redirects after Google had already recrawled. |
| Jun 26 | Google Search Console verification added | First 3 weeks had no GSC coverage. |
| Jun 30 | Google Analytics added | Launch-month traffic and form conversions were not measured. |
| Jul–Aug | Blog posts added | Content did not fix Maps or the city-name problem. |

The domain also carries an old, toxic backlink profile (spam score 51, purchased PBN-style anchors, ~50 broken/403 links). That predates the rebuild. It does not help rankings and should not be grown.

---

## What is *not* broken

Do not rebuild the site or metadata on the assumption SEO tags are missing.

- Homepage on-page score: **97/100**
- HTTPS is on; non-www permanently redirects to www
- Canonical, Open Graph, and the homepage title are present  
  Title: “Chiropractor in Saint Louis Park, MN”
- `robots.txt` allows crawling and points at the sitemap
- Sitemap is live: **HTTP 200**, **1,191 URLs**

A bulk crawler reported “0/100, not HTTPS, missing canonical.” That was a **false reading**. A deeper page crawl contradicts it.

---

## Other issues that matter (not the main lead leak)

**Programmatic city pages.** The sitemap has ~1,191 URLs (roughly 70+ Twin Cities × 15 services). Distant cities (Stillwater, Forest Lake, etc.) are thin near-duplicates. City pages also output extra `Chiropractor` structured data named as if the clinic “serves” that city as a location. That can confuse Google about where the business actually is and waste crawl budget. DataForSEO’s domain crawler still only reports **2 crawled pages** at domain level.

**Duplicate business schema.** The homepage outputs Chiropractor JSON-LD twice (layout + homepage). Missing useful fields: review stars, social/`sameAs`, breadcrumbs, booking URL.

**Homepage H1.** The H1 is “YOUR SPINE HEALTH SPECIALISTS.” Competitors use “chiropractor” + Saint Louis Park in the H1. The title tag already does this; the visible H1 does not.

**Lead forms.** Homepage and appointment request use two different GoHighLevel iframes. If notifications or spam filters dropped submissions — especially in June before Analytics was installed — “3 leads” could be traffic **and** a form gap. This should be verified in GHL, not assumed.

**Search Console access.** The site has a verification tag, but the SEO tooling account is still not a user on the property, so 90-day Google click/impression history could not be pulled for this audit.

---

## Recommended next steps

### This week (Maps + measurement)

1. **Google Business Profile**
   - Set city to **Saint Louis Park** if Google will accept it (55416 is SLP).
   - Decide whether the public name should stay the doctor name or match the practice name. Do not keyword-stuff.
   - Upload 40+ photos (exterior, interior, team, treatment rooms).
   - Add services, appointment URL, weekly Google posts, and Q&A.
2. **Reviews** — same-day ask + QR/SMS to the Google listing. Target 10–15 new reviews/month until 100+.
3. **NAP cleanup** — Healthgrades, Apple, Bing, Yelp, Facebook, WebMD: same name, Saint Louis Park address, same phone, `https://www.levittchiropracticcenter.com`.
4. **Search Console** — add `seo-mcp-bot@nextjs-seo-mcp.iam.gserviceaccount.com` as Owner; submit sitemap; inspect homepage and `/contact/appointment-request`.
5. **GoHighLevel** — confirm both forms (contact vs appointment) hit the pipeline; check June 5–30 for lost submissions.

### Next 2 weeks (website)

6. Change homepage H1 to match the title (chiropractor + Saint Louis Park).
7. One Chiropractor schema sitewide; add rating, `sameAs`, and breadcrumbs once the GBP CID is confirmed.
8. Do **not** buy more links. Get 10–20 real Minnesota citations. Ignore/disavow the PBN spam.

### Next 30 days

9. Keep all city/service URLs **indexable** and enrich them (drive time, landmark, ZIPs, honest “one office in Saint Louis Park” copy, unique FAQs). Do **not** emit a second Chiropractor entity per city — schema stays WebPage about the real clinic.
10. Optional bridge: Google Ads on “chiropractor st louis park” until the Map Pack recovers. Organic will not replace Maps in 30 days.

---

## Client message (short)

Copy below if you want a shorter note; a slightly longer version is in the accompanying send-ready text.

> We audited the site and Google listings after the June migration. The new website itself is technically sound (on-page score 97/100). The reason new-patient leads dropped to about three in three months is visibility, not a broken website: Google Maps still lists the practice as “Alan G. Levitt, DC” in Minneapolis, so it does not appear in the Map Pack for “chiropractor saint louis park.” Organic search for that term is page 3. Competitors in the map have 90–500 reviews; the listing has 29 and one photo. Fixing the Google profile, reviews, and name/address consistency is the first priority. Website copy/schema cleanup is second. We can start that this week.

---

*Sources: DataForSEO Labs (keywords, domain rank, backlinks), DataForSEO live SERP and Local Pack, DataForSEO Instant Pages on-page audit, live HTML/schema/heading/link checks, live robots.txt and sitemap.xml, git deploy history. Google Search Console Search Analytics was unavailable (service account not granted on the property).*
