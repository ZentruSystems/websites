# Project Bootstrap landing page

Route: `/project-bootstrap`, linked from the Services page and the hero of `/about`. For now it is also
where `/` goes – a temporary redirect in `next.config.ts`, until there is a home page again. The page has one job: a booked strategy
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

The sections are built from `app/blocks` (Hero, ProofBar, Band, CardGrid, Steps, CaseStudies,
PackageTable, Faq, CtaBand). Those take plain strings and nodes, not message keys, so the home page
can use them with its own copy. `Comparison` is unused here – the before/after rows moved into the
package table – but it stays in `app/blocks` for the home page.

The order is: hero, proof bar, the problem, **what it is worth** (`outcomes` – money saved and hours
freed, deliberately before any "how"), the solution and its five stages with a call to action, case
studies, how it works, the two packages, FAQ, final call to action.

## Movement

Three small effects, and deliberately only three.

Every filled card – the card grids, the case studies, the package cards, all marked `data-lift` –
rises towards the pointer. `PointerLift`, mounted once per page, gives each one `--near`: 1 when the
pointer is on it, falling to 0 at 130px from its edge. The stylesheet turns that into up to 4px of
lift and a shadow that grows with it, so hovering is not a separate state but the top of the same
ramp, and the cards beside the one under the cursor come up part of the way with it.

The transition is half `--snappyDuration`, because this follows a pointer rather than answering an
event – at the full duration the cards visibly trail behind it. Behind `hover: hover` so a phone
doesn't keep the lifted state after a tap; `prefers-reduced-motion` drops the whole thing, and the
`:hover` rule alone still works if the script never runs.

**"How a project comes together" is held.** These are the five stages inside the *solution* section
(`solution.stagesTitle`) – not the "How it works" list further down, which is a different `Steps` and
stays still. `<ScrollFocus>` in `page.tsx` wraps the heading and the list; `scrollFocus` on `Steps`
marks the list as the thing it drives.

`ScrollFocus` is a track holding a sticky pin and an empty spacer. The spacer is `--hold` (1.6vh) per
step of reserved scrolling; the pin sticks through it while the stylesheet releases a `--drift` (3vh)
offset, so the section rises by that much over the stretch. It therefore crosses it at about **43% of
the page's speed – slowed, not stopped** – and then picks up again. The wheel is never intercepted;
doing that breaks trackpads, keyboards and screen readers.

The lane is short because it is paid for twice over: the reserved scrolling becomes space above the
stages once the pin rests at the end of its range, and space below them while it is still travelling.
A longer, more emphatic slowdown costs the section's own spacing both ways.

The drift is set low and released, rather than lifted and left there: either way the section rises
while the pin is stuck, but this way it ends at zero instead of hovering `--drift` above its own box
with that much dead space beneath it. The gap to the call to action is then the band's own 60px.

The spacer cannot be padding on the track: a sticky element is confined to its containing block's
*content* box, so padding leaves it nothing to stick through and the section sails past at full speed.

Because the lane is short, the sweep is not tied to it. `--focus` – how far the reader has got,
counted in steps, fractional so neighbours crossfade – starts while the section is still coming up
the screen (0.65 of a viewport out) and runs a little past the last step, so the fifth is lit and
settled by the time the slowdown begins rather than still arriving as it lets go. Each step
turns that into `--reached` and comes up 14px to full opacity; the ones still waiting sit at
`--waiting` (0.35). `--hold`, `--drift` and `--waiting` are one number each in `blocks.module.css`.

Stacked below 1100px nothing is pinned and there is no "further along" to point at, so the steps
become a card stack instead: each pins clear of the nav until the next slides up and covers it,
`position: sticky` and equal rows, no JS at all.

Native scroll-driven animations (`animation-timeline: view()`) would replace the JS, but Firefox
still has them behind a flag; when that changes, `.stepsFocus` is the one place to swap. No
animation library is installed and none is needed.

## Copy

All text lives in `messages/en.ts` and `messages/de.ts` under `Fields.projectBootstrap`. German
uses "Sie", like the other Fields page, not the "du" of the product pages. Like the rest of the site it
speaks as Zentru Systems, "we" – only the About section on `/about` is Felix in the first person.

Nothing on the page is invented: the case studies, the proof bar and every number come from the
brief – one to two weeks of setup, three weeks of consulting included, "practically zero" errors,
and the 95% of issues solved without the client's involvement. No client names, logos or
testimonials, because none were supplied.

The CRM case is the one Felix built but did not manage. It carries an *Implementation* tag
(`implementationCaseKeys` in `content.ts`) and the section intro says "two we bootstrapped and
managed, one we built", so the page claims no more involvement than there was. The value section's
evidence line names "two of the clients below" for the same reason.

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
| `booking_click` | A booking button is clicked | `placement`: `hero`, `solution`, `process`, `final` |
| `booking_confirmed` | `/project-bootstrap/booked` loads, once per session | – |
| `scroll_depth` | 25, 50, 75 and 100% of the page scrolled, once each | `page`, `percent` |

Traffic source is GA's own (referrer and UTM). `utm_*` parameters on the landing URL are also
forwarded to the Cal.com link, so a booking records the campaign it came from.
