# ShiftDown landing page — handoff

State of the ShiftDown product page as it stands, what was decided and why, and what is
still open. Written to be picked up cold.

The product was called **Transmission** until it was renamed; the old name should not appear
anywhere except where this document says it still does.

- **Route:** `/[locale]/products/shiftdown` — reachable from `/products`
- **Locales:** `en` and `de`, both complete
- **Branches:** the work landed on `claude/transmission-landing-page-33yrom`.
  `claude/shiftdown-single-hero-video` branched off it and is where this document is added.
- **Not yet public.** Nothing here has shipped, which is why several breaking renames below
  were safe to do.

---

## 1. Where things live

Everything for the page is under `next/zentru/app/[locale]/products/shiftdown/`. That folder
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
| All copy, both locales | `next/zentru/messages/{en,de}.ts` → `Products.shiftdown` |
| Linux interest API | `next/zentru/app/api/products/shiftdown/linux-interest/route.ts` |
| Its model | `next/zentru/models/shiftDownLinuxInterest.ts` |
| Media files + the format/size spec | `next/zentru/public/img/shiftdown/` |
| Installers | `next/zentru/public/download/ShiftDown-{macOS,Windows}.zip` |

---

## 2. Contracts with the desktop app

**These are the things that break silently.** They are shared with the app repo, whose side
is documented in its `docs/HANDOFF-analytics-instrumentation.md`. If the two halves disagree,
attribution returns nothing and nobody gets an error.

| The website expects | The app must |
|---|---|
| `shiftdown://claim?src=<token>&v=1` | Register `shiftdown://` as its URL scheme. Was `transmission://`. |
| `/products/shiftdown/welcome` | Open that URL on first launch. Was `/products/transmission/welcome`. |
| `systems.zentru.shiftdown` | Confirm the bundle ID — `config.ts` only assumes it. |

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
  → localStorage under "shiftdown.src"
  → appended to every download and checkout URL
  → read back on /welcome, which fires install_confirmed
  → handed to the app via shiftdown://claim?src=…&v=1
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
`next/zentru/public/img/shiftdown/README.md`. The short version:

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

Filled:

| Slot | File |
|---|---|
| `hero-comparison` | `ShiftDown.Horizontal.Logic.mp4` (5.1 MB) |
| `usecase-video-music-demo` | `ShiftDown.Horizontal.Logic.mp4` — same file as the hero |
| `usecase-graphics-demo` | `ShiftDown.Fast.Figma.mp4` (2.3 MB) |

Still placeholders, and they render as honest empty slots until filled: `problem`, `pen`,
`accessibility-permission`, `usecase-general-demo`, `usecase-cad-3d-demo`, and all four
`usecase-*-still` slots.

---

## 6. Open items

### Must be resolved before the page goes public

- **`config.ts` TODOs** — `machines` (3) and `refundDays` (30) are placeholders from the
  original brief; `minMacOs` (macOS 12) and `minWindows` (Windows 10) were never verified
  against a shipped build; `ogImage` is still the site-wide one; `siteUrl` is unconfirmed.
- **The app-side contracts in §2.**
- **Currency** — EUR vs USD, see §4.

### Rough edges left by the switch to a single hero video

None of these break anything; they are dead weight that will confuse the next reader.

- `media.ts` still declares `hero-round-trip` and `hero-one-pass`. Nothing references them.
- `messages/{en,de}.ts` still carry `hero.demoLeft` and `hero.demoRight`. Only `hero.demo`
  is used now.
- `shiftdown.module.css`: `.heroMedia` is still a two-column grid with a 1 px hairline gap
  and an `--l4` background, all of which only made sense with two panes. `.heroPane` has its
  `position: relative` commented out rather than removed — it works because `.mediaFill`
  resolves against `.heroMedia` instead, but that is incidental, not intended.
- The hero comment still says "two clips side by side".

### Worth a look

- **The hero video is 5.1 MB and autoplays on load.** That is the single largest thing on the
  page and it is behind an 0.8 scrim with a 3 px blur, so most of that detail never reaches
  the viewer. A smaller encode would cost nothing visible.
- **The same file is used for the hero and the video/music use case.** Deliberate or
  temporary is unclear from the commit.
- The German meta title was changed to "Mausübersetzung" (was "Mausgetriebe"); the rest of
  the German copy still uses the gearbox metaphor ("kleiner Gang", "Getriebe").

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
  for the API routes. This predates the ShiftDown work — `.rec/early-access` fails identically.
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
