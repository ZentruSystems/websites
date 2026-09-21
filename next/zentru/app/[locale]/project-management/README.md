# Project Management landing page

Route: `/project-management`, linked from the Services page and the hero of `/about`. The page was
called Project Bootstrap; `/project-bootstrap` redirects here permanently. For now it is also
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
studies, how it works, what's included, FAQ, final call to action.

There is one package, the management – setting the project up and choosing the tools are part of it.
`PackageTable` gets only that one, so it shows no card – the section's intro says what the package is –
and a single column of checkmarks, with most of the width given to the labels.

## Movement

Three small effects, and deliberately only three.

Every filled card – the card grids, the case studies, all marked `data-lift` –
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

`ScrollFocus` is a track holding a sticky pin and an empty spacer. The spacer is `--hold` (4vh) per
step of reserved scrolling; the pin sticks through it while the stylesheet lifts it by `--drift`
(15vh), so the section keeps rising over the stretch at about **75% of the page's speed – slowed, not
stopped** – and then picks up again. The wheel is never intercepted; doing that breaks trackpads,
keyboards and screen readers.

The reserve minus the drift is spare space (5vh): below the stages until the pin lets go, above them
after. It is what the slowdown costs, so it stays fixed; a longer lane raises the hold and the drift
together, which starts the movement earlier and makes it gentler rather than opening the section up.

The pin sticks 37vh below the nav – where the movement starts – and ends it `--drift` higher. It is
lifted as it goes rather than set low and released: set low, the section would come up the screen
`--drift` below its place, with that much empty space over it while the steps light up. Lifted, it
ends the lane `--drift` above its own box, so the track's negative `--reclaim` margin (the drift plus
3vh) pulls what follows up by as much. The extra 3vh narrows the spare space below, which read as
the section stopping short of the call to action: the gap is ~33px at rest and ~78px while the steps
light up, instead of the band's 60 and 105.

Before the script runs – or without it – `--progress` is 1: the pin lifted, right for everything
after the lane. Before the lane that puts it a little into the content above until the script takes
over; 0 would instead leave it on the call to action after the lane.

The spacer cannot be padding on the track: a sticky element is confined to its containing block's
*content* box, so padding leaves it nothing to stick through and the section sails past at full speed.

`--focus` – how far the reader has got, counted in steps, fractional so neighbours crossfade – starts
while the section is still coming up the screen (0.555 of a viewport down) and runs a little past the
last step as the lane ends, so steps two to five light up during the slowdown and the fifth is
settled before the section lets go. Each step turns that into `--reached` and comes up 14px to full
opacity; the ones still waiting sit at `--waiting` (0.35). `--hold`, `--drift`, `--reclaim` and
`--waiting` are one number each in `blocks.module.css`.

Stacked below 1100px nothing is pinned and there is no "further along" to point at, so the steps
become a card stack instead: each pins clear of the nav until the next slides up and covers it,
`position: sticky` and equal rows, no JS at all.

Native scroll-driven animations (`animation-timeline: view()`) would replace the JS, but Firefox
still has them behind a flag; when that changes, `.stepsFocus` is the one place to swap. No
animation library is installed and none is needed.

## Copy

All text lives in `messages/en.ts` and `messages/de.ts` under `Fields.projectBootstrap`. German
uses "Sie", like the other Fields page, not the "du" of the product pages. The audience is AI and
software startups. Like the rest of the site it
speaks as Zentru Systems, "we" – only the About section on `/about` is Felix in the first person.

Nothing on the page is invented: the case studies, the proof bar and every number come from the
brief – one to two weeks to set a project up, "practically zero" errors,
and the 95% of issues solved without the client's involvement. No client names, logos or
testimonials, because none were supplied.

The CRM case is the one Felix built but did not manage. It carries an *Implementation* tag
(`implementationCaseKeys` in `content.ts`) and the section intro says "two we bootstrapped and
managed, one we built", so the page claims no more involvement than there was. The value section's
evidence line names "two of the clients below" for the same reason.

## Before it goes public

1. **Cal.com redirect.** In the event's settings, set *Redirect on booking* to
   `https://zentru.systems/project-management/booked`. Without it, completed bookings aren't
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
| `booking_confirmed` | `/project-management/booked` loads, once per session | – |
| `scroll_depth` | 25, 50, 75 and 100% of the page scrolled, once each | `page`, `percent` |

Traffic source is GA's own (referrer and UTM). `utm_*` parameters on the landing URL are also
forwarded to the Cal.com link, so a booking records the campaign it came from.
