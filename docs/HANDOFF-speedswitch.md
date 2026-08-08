# SpeedSwitch landing page — handoff

State of the SpeedSwitch product page as it stands, what was decided and why, and what is
still open. Written to be picked up cold.

The product was called **Transmission**, then **ShiftDown**, before settling on
**SpeedSwitch**. Neither old name should appear anywhere except where this document says it
still does.

- **Route:** `/[locale]/products/speedswitch` — reachable from `/products`
- **Locales:** `en` and `de`, both complete
- **Branches:** the work landed on `claude/transmission-landing-page-33yrom`.
  `claude/shiftdown-single-hero-video` branched off it and is where this document was added;
  the copy rework and this rename continued on `claude/shiftdown-copy-rework`.
- **Not yet public.** Nothing here has shipped, which is why several breaking renames below
  were safe to do.

---

## 1. Where things live

Everything for the page is under `next/zentru/app/[locale]/products/speedswitch/`. That folder
has its own `README.md` with a file-by-file table — this section is only the shape of it.

| Concern | File |
|---|---|
| The page, one function per section in render order | `page.tsx` |
| Prices, URLs, platforms — decisions, not facts | `config.ts` |
| Which items exist and in what order (keys, not text) | `content.ts` |
| Where clips and stills are wired up | `media.ts` |
| Acquisition token: sanitise, store, read, forward | `acquisitionSource.ts` |
| The three analytics events | `analytics.ts` |
| First-launch page the app opens | `welcome/` |

Outside that folder:

| Concern | File |
|---|---|
| All copy, both locales | `next/zentru/messages/{en,de}.ts` → `Products.speedswitch` |
| Linux interest API | `next/zentru/app/api/products/speedswitch/linux-interest/route.ts` |
| Its model | `next/zentru/models/speedSwitchLinuxInterest.ts` |
| Media files + the format/size spec | `next/zentru/public/img/speedswitch/` |
| Installers | `next/zentru/public/download/SpeedSwitch-{macOS,Windows}.zip` |

---

## 2. Contracts with the desktop app

**These are the things that break silently.** They are shared with the app repo, whose side
is documented in its `docs/HANDOFF-analytics-instrumentation.md`. If the two halves disagree,
attribution returns nothing and nobody gets an error.

| The website expects | The app must |
|---|---|
| `speedswitch://claim?src=<token>&v=1` | Register `speedswitch://` as its URL scheme. Was `transmission://`, then `shiftdown://`. |
| `/products/speedswitch/welcome` | Open that URL on first launch. Was `/products/transmission/welcome`, then `/products/shiftdown/welcome`. |
| `systems.zentru.speedswitch` | Confirm the bundle ID — `config.ts` only assumes it. |

Until the app ships a build that agrees, the claim redirect goes nowhere. `install_confirmed`
still fires, so download → install conversion survives; the per-channel attribution does not.

`v=1` is the claim contract version, pinned in `welcome/WelcomeClient.tsx`. Bump it on both
sides together or not at all.

---

## 3. How acquisition attribution works

The one non-obvious mechanism on the page.

```
?src=Reddit-DaVinci
  → sanitised to lowercase [a-z0-9_-], max 64 chars  → "reddit-davinci"
  → localStorage under "speedswitch.src"
  → appended to every download and checkout URL
  → read back on /welcome, which fires install_confirmed
  → handed to the app via speedswitch://claim?src=…&v=1
```

`localStorage`, not `sessionStorage`: the install regularly happens after the tab is closed.
The first token wins — the channel that brought someone here is the one that earned it.
Junk tokens are rejected and never stored.

`direct` means no token was ever stored. The app uses `unknown` for "no claim arrived".
Keeping those two apart is how you tell whether the bridge works at all.

### Events

Sent to Google Analytics (the site's existing tag) and Vercel Web Analytics.

| Event | Props | Fires |
|---|---|---|
| `download_click` | `platform`, `src`, `source` | any download link; `source` is where on the page |
| `buy_click` | `src`, `source` | the buy button |
| `install_confirmed` | `src`, `platform`, `app_version` | `/welcome`, on first launch |

`install_confirmed` fires on mount, possibly before GA has defined `gtag`, so `analytics.ts`
pushes to the `dataLayer` queue using an `arguments` object — the shape gtag.js replays. Do
not "modernise" that to an array; it will stop being replayed and the event will vanish.

---

## 4. Decisions worth not re-litigating

The copy follows the August 2026 positioning guide. The parts that shape every string:

- **The laptop and trackpad case leads.** It has its own section directly under the hero,
  before the profession tabs, because a trackpad's precision problem is structural — ~10cm of
  travel for a whole display — and unlike a mouse user there is no hardware escape. Software
  is the only fix. That case used to be a tab called "general"; it was promoted, and the
  mousepad, trackball and cramped-desk cases fold into it.
- **The pitch is one sentence:** stop zooming in just to nudge something. The cost being
  removed is *context loss* — precision and overview becoming mutually exclusive — not time.
- **The gear metaphor stays, but is never used cold.** Every occurrence decodes itself in the
  same sentence: *"your pointer switches to a lower gear: the same hand movement now covers a
  quarter of the distance."* The verb is *switch* rather than *shift down* so it echoes the
  product name; German already says *schaltet einen Gang herunter*, which does the same job.
  It appears in exactly three places per locale — the hero sub, the
  how-it-works section, and one workaround card. **Metadata is plain language only**
  (`meta.title`, `welcome.metaTitle`, `welcome.metaDescription`), and so is `/welcome`, which
  the app opens directly and which is therefore read with no page context.
- **No trigger key is named.** The old copy promised "Left Shift", which is the drag modifier
  in every application this targets. The guide calls that an activation killer, and the app's
  default has not moved yet, so the page says "any key or combination, picked when you set it
  up" and stays true either way.
- **Gaming is answered once, honestly, in "What it doesn't do":** SpeedSwitch moves the system
  pointer, so it has no effect in games reading the mouse through raw input. No anti-cheat
  framing, no "sniper" language anywhere.
- **No analytics vendor is named in the app-facing copy.** The website and the app use
  different providers, and which one the app uses is not something a visitor should have to
  take on trust from a brand name.
- **Copy lives in the message files**, never in components. Multi-paragraph text is a single
  rich string with `<p>`/`<ul>` rendered through `t.rich(…, defaultHtml)`, matching `.rec`.
- **Lists are keyed objects, not arrays.** `content.ts` holds the key order, so adding a
  feature/mode/FAQ/use case means adding it to both message files and listing the key there.
- **German uses informal "du"**, and keeps the mode names in English (`Hold`, `Toggle`,
  `Inverted`) because that is what the app's own settings call them.
- **Trial is 30 _usage_ days**, not calendar days. The copy says so deliberately.
- **Price is €9.99, anchored against €14.** Currency is EUR throughout, formatted per locale
  by ICU (`€9.99` in English, `9,99 €` in German). Note the original brief said `$` — this
  was flagged and EUR was kept. Still unconfirmed.
- **The Accessibility explanation lives on `/welcome`, not the landing page**, because that
  is the last thing people read before macOS puts the prompt in front of them. Windows has no
  such prompt and does not get the section.
- **The Linux interest form runs on the shared signup architecture** (`baseSignup`), sharing
  the `useSignup` hook and `buildSignupHandler`, but not the `Signup` component — that renders
  a centred full-height section, and this form sits inside a FAQ answer.
- **`MediaSection.tsx` exists** because `app/Section.tsx` drops its aside's placement classes
  when no `link` is given.

---

## 5. Media

The full format and sizing spec, with the measurements behind it, is in
`next/zentru/public/img/speedswitch/README.md`. The short version:

- **MP4 / H.264 only.** `DemoMedia` renders a single `<video src>`, not a `<source>` list, so
  there is no format fallback. Encode with `-pix_fmt yuv420p` (or Safari shows black) and
  `-movflags +faststart`.
- **Nothing resizes these.** Plain `<img>`/`<video>`, not `next/image` — the file you drop is
  what every visitor downloads. Section slots cap at **520 css px** on a desktop and peak at
  **620** in the phone layout, so **1280 wide** covers every viewport at 2×.
- **The hero crops hard.** It is `object-fit: cover` in a box that is landscape on a desktop
  (up to 1.90) and portrait on a phone (0.50). A 4:3 source keeps 70–92 % on a desktop but
  only ~38 % on a phone. Keep the action horizontally centred.

### Slot status

A slot holds **one source or a list of them**. A list plays through and starts over, in the
order written; `order="random"` on the `DemoMedia` shuffles instead. A single clip keeps the
`loop` attribute, a list cannot — `ended` never fires on a looping video.

Filled:

| Slot | File(s) |
|---|---|
| `hero-comparison` | `SpeedSwitch.Horizontal.SBS.LowRes.Logic.mp4` (2.0 MB) |
| `usecase-video-music-demo` | `SpeedSwitch.Horizontal.SBS.Logic.mp4` (5.1 MB) then `SpeedSwitch.Fast.Resolve.mp4` (7.3 MB) |
| `usecase-graphics-demo` | `SpeedSwitch.Fast.Figma.mp4` (2.3 MB) |

Still placeholders, and they render as honest empty slots until filled: `problem`, `pen`,
`accessibility-permission`, `usecase-general-demo`, `usecase-cad-3d-demo`, and all four
`usecase-*-still` slots.

None of the clips has a `poster` yet. That is what reduced-motion visitors see, and on a
playlist it is what covers the moment between one clip ending and the next loading.

---

## 6. Open items

### Must be resolved before the page goes public

- **`config.ts` TODOs** — `machines` (3) and `refundDays` (30) are placeholders from the
  original brief; `minMacOs` (macOS 12) and `minWindows` (Windows 10) were never verified
  against a shipped build; `ogImage` is still the site-wide one; `siteUrl` is unconfirmed.
- **The app-side contracts in §2.**
- **Currency** — EUR vs USD, see §4.
- **The name itself is unchecked.** `ShiftDown` collided with an existing Windows utility,
  which is what prompted this rename; nobody has checked whether `SpeedSwitch` is free of the
  same problem. The page always pairs the name with a qualifier, which helps either way, but
  the search is still owed.

### `.underNav` zeroes `--nav-height` for everything inside it

The page is wrapped in `.underNav` (`common/theming/modular.css`) so the hero can run behind
the navigation bar. It does that by pulling the wrapper up by the nav height **and setting
`--nav-height: 0px` on its children**, so nothing inside reserves space for a bar it now sits
under.

The catch: anything `position: fixed` inside that wrapper also sees `0px`. The sticky download
tray positions itself with `bottom: calc(var(--nav-height) + var(--grid-gap))` and on a phone
the nav is along the bottom — inside the wrapper that resolved to 15px and the tray landed on
top of the nav. It is rendered **outside** `.underNav` for that reason; it is fixed, so its
place in the DOM costs nothing.

Anything fixed or sticky added to this page later needs the same treatment, or its own
un-zeroed value.

### Rough edges left by the switch to a single hero video

`speedswitch.module.css`: `.heroMedia` is still a two-column grid with a 1 px hairline gap and
an `--l4` background, all of which only made sense with two panes. `.heroPane` has its
`position: relative` commented out rather than removed — it works because `.mediaFill`
resolves against `.heroMedia` instead, but that is incidental, not intended. Neither breaks
anything; both will confuse the next reader.

### Worth a look

- **`SpeedSwitch.Fast.Resolve.mp4` is 7.3 MB**, the largest file on the page. It is the second
  clip of the video/music playlist, so it downloads when the first one ends. The hero has
  already been through a low-res pass — this one has not.
- **`ProblemSection` is commented out**, not deleted — the hero and the workaround cards
  already make the zoom-cycle point. Its copy and its clip are still wired up, so restoring it
  is one line in `page.tsx`. `PenSection` is commented out the same way.

---

## 7. Verifying changes

There is no test suite in the repo. The page was verified by driving a dev server with
Playwright — `scrollWidth === clientWidth` for overflow, DOM assertions for content, UA
spoofing for platform detection, `dataLayer` inspection for events, and a stubbed API for the
signup states.

### What cannot be verified in a sandbox

Say so rather than assuming, if you work in one:

- **`next build` does not run.** `lib/mongodb.ts` calls `new URL(MONGODB_URI)` at module load
  and connects at import time, so without a live MongoDB the build fails collecting page data
  for the API routes. This predates the SpeedSwitch work — `.rec/early-access` fails identically.
- **The database write path is untested** for the same reason.
- **Video playback is unverified** where the bundled Chromium is built without H.264
  (`canPlayType('video/mp4; codecs="avc1.42E01E"')` returns empty). The files serve correctly
  — 200, `video/mp4`, valid `ftyp` container — but whether they decode has to be checked in a
  real browser.

### Known lint baseline

`npx eslint` reports 4 pre-existing errors (an `Object` wrapper type and three `any`s) in
`baseSignup.tsx`, `api/products/baseSignup.ts` and `models/baseSignup.ts`, plus one
`no-img-element` warning in `DemoMedia.tsx` — that one is deliberate, since `next/image`
would fight the reserved-aspect placeholder.
