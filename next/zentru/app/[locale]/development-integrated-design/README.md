# Development integrated Design – /development-integrated-design

The service for design agencies: we set up their development services – structure, process, tools,
consulting – around the way they design, so they can sell development without running it.

- **The Setup is the offer:** a fixed price, no time limit, consulting included.
- **Management is optional**, and can be added at any time: monthly or hourly.
- **Implementation is optional too:** smaller projects, if the agency wants. It is billed
  separately because it depends on their client's project, so it is not a row in the package table.

Built like `/project-management` – read its README for the blocks, the movement and the tracking.
This one only notes what is different.

## Files

| File | What it holds |
|---|---|
| `page.tsx` | The sections, the metadata and the structured data. |
| `content.ts` | Which items exist, in which order. |
| `config.ts` | Booking URL, booked path, and both cases' media. |
| `llms.ts` | `buildLlmsTxt(locale)` – the page as an llms.txt, built from its messages. |
| `booked/page.tsx` | Where Cal.com sends someone after booking. `noindex`. |
| `../../development-integrated-design/llms.txt/route.ts`, `llms.txt/route.ts` | `/development-integrated-design/llms.txt` (English) and `/de/development-integrated-design/llms.txt`. |

## Shared with Project Management

Copy that both pages say word for word is **read from `Fields.projectBootstrap`**, not repeated:
the button label, the case labels, the CRM case and its "Implementation" tag, the table's labels,
the 95% line, the portrait and its alt text, the service area, the `seo` link words, and most of
the booked page. Change one of those and both pages change.

So do `BookCallCta` (this page passes its own `bookingUrl`), `BookingConfirmed`, the company facts
and `localeUrl()` – all from `../project-management/`.

## The carousel

The finance case shows its images and videos in a carousel (`app/blocks/MediaCarousel.tsx`),
which `CaseStudies` renders when a case has `media`. To add to it:

1. Put the files in `public/img/development-integrated-design/`.
2. List them in `config.ts`, `caseMedia`, in the order they should appear:
   `{ src: "/img/development-integrated-design/forecast.mp4", poster: "/img/development-integrated-design/forecast.jpg" }`.
   `.mp4`, `.webm` and `.mov` play as video; anything else shows as an image.
3. `cases.items.finance.mediaAlt` in both message files describes every slide.

An image can also have a dark-mode version (`darkSrc`); the browser picks between the two by the
colour scheme. Both cases use one: the finance screenshots are the interface's own light and dark
themes, the CRM funnel's dark version is derived – `public/img/development-integrated-design/README.md` says how.

The frame is 16:10 unless the first slide gives its `width` and `height`; then it takes that
slide's proportions, so the image is shown whole. Slides after it are fitted to the same frame.

Videos are muted and looping, load nothing until shown (`preload="none"`), and play only while in
view. With reduced motion they don't autoplay and show controls instead. With an empty list the
case simply has no carousel. A poster is worth giving every video: it is what shows before
playback, and all a reduced-motion visitor sees until they press play.

## Search and AI

- Title, description and keywords are about the service only – no products.
- Canonical and hreflang per locale, via `localeUrl(locale, designAgencies.path)`.
- **The locale comes from the route params**, not `getLocale()`, which can return English in
  metadata on a German page.
- Structured data: the same `ProfessionalService` node as Project Management (same `@id`), a
  `Service` for design agencies with both packages as its offer catalogue, the `WebPage`, and the
  `FAQPage` built from the visible FAQ.
- `/llms.txt` and `/de/llms.txt` end with a short section pointing here and to this page's own
  llms.txt.
- `app/sitemap.ts` lists the page; `booked` stays out.

## Before it goes public

1. **The Cal.com event's redirect.** The page books
   `cal.com/zentrusystems/development-integrated-design` (`config.ts`, `bookingUrl`). In that
   event's settings, "Redirect on booking" must point to
   `https://zentru.systems/development-integrated-design/booked`, or no booking is counted as
   completed.
2. The OG image is the site-wide one, as on Project Management.
