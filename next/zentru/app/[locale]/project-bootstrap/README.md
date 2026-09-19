# Project Bootstrap landing page

Route: `/project-bootstrap`, linked from the Services page and the home page hero. The page has one job: a booked strategy
call. Every call to action is the same `BookCallCta`, and nothing else on the page sends the
visitor anywhere.

## Files

| File | What it holds |
|---|---|
| `page.tsx` | The page, one section per function in the order they render, plus metadata and structured data. |
| `content.ts` | Which items exist and in which order – the message keys, not the text. |
| `config.ts` | Booking URL, included weeks, image paths. **Contains the open TODOs.** |
| `BookCallCta.tsx` | The one conversion action. Forwards `utm_*` to the booking and reports `booking_click`. |
| `booked/page.tsx` | Where Cal.com sends people after booking. `noindex`. |
| `BookingConfirmed.tsx` | Reports `booking_confirmed` once per session on that page. |

The sections are built from `app/blocks` (Hero, ProofBar, Band, CardGrid, Steps, Comparison,
CaseStudies, PackageTable, Faq, CtaBand). Those take plain strings and nodes, not message keys,
so the home page can use them with its own copy.

## Copy

All text lives in `messages/en.ts` and `messages/de.ts` under `Fields.projectBootstrap`. German
uses "Sie", like the other Fields page, not the "du" of the product pages.

Nothing on the page is invented: the case studies, the proof bar and every number come from the
brief – one to two weeks of setup, three weeks of consulting included, "practically zero" errors,
and the 95% of issues solved without the client's involvement. No client names, logos or
testimonials, because none were supplied.

## Before it goes public

1. **Cal.com redirect.** In the event's settings, set *Redirect on booking* to
   `https://zentru.systems/project-bootstrap/booked`. Without it, completed bookings aren't
   counted. Leave *forward parameters* off: it would put the booker's name and email into a URL
   that analytics records.
2. **OG image.** `config.ts` → `ogImage` is the site-wide one.
3. **Google Analytics.** In GA4 → Admin → Events, mark `booking_confirmed` (and, if useful,
   `booking_click`) as key events. Conversion rate by device and by traffic source then comes
   from GA's standard reports.

## Tracking

Events go through `lib/analytics.ts`: to Google Analytics only with consent (`lib/consent.ts`),
and to Vercel Web Analytics always (cookieless – custom events need a paid Vercel plan).

| Event | When | Properties |
|---|---|---|
| `booking_click` | A booking button is clicked | `placement`: `hero`, `process`, `final` |
| `booking_confirmed` | `/project-bootstrap/booked` loads, once per session | – |
| `scroll_depth` | 25, 50, 75 and 100% of the page scrolled, once each | `page`, `percent` |

Traffic source is GA's own (referrer and UTM). `utm_*` parameters on the landing URL are also
forwarded to the Cal.com link, so a booking records the campaign it came from.
