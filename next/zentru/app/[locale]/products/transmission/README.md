# Transmission landing page

Route: `/products/transmission`. The onboarding page the app opens on first launch lives at
`app/[locale]/welcome`.

## Files

| File | What it holds |
|---|---|
| `page.tsx` | The page. One section per function, top to bottom in the order they render. |
| `content.ts` | Which items exist and in which order — the message keys, not the text. |
| `config.ts` | Prices, platforms, URLs — everything that is a decision rather than a fact. **Contains the open TODOs.** |
| `media.ts` | Where the clips and stills go. The only file to touch when footage lands. |
| `MediaSection.tsx` | Section with text on one side, media on the other. |
| `DemoMedia.tsx` | A clip, a still, or a placeholder for one that doesn't exist yet. |
| `DownloadCta.tsx` | Download / buy buttons, platform detection, analytics events. |
| `StickyCta.tsx` | Download bar that appears once the hero is off screen. |
| `UseCaseTabs.tsx` | The use case selector. |
| `SourceCapture.tsx` | Persists `?src=` on arrival. Renders nothing. |
| `acquisitionSource.ts` | Sanitise / store / read / forward the `src` token. |
| `analytics.ts` | The three events, sent through the site's existing Google Analytics tag. |

## Copy

All text lives in `messages/en.ts` and `messages/de.ts` under `Products.transmission`, like
the rest of the site. English and German are both complete.

- Multi-paragraph text and the "what it solves" lists are single rich strings with `<p>` and
  `<ul>` tags, rendered through `t.rich(…, defaultHtml)` — the convention `.rec` already uses.
- Lists that render as cards or tabs are keyed objects, not arrays. `content.ts` holds the
  key order, so adding a feature, mode, FAQ entry or use case means adding it to both message
  files and listing its key there.
- The price is a number in `config.ts`, formatted per locale by the messages that use it:
  `€9.99` in English, `9,99 €` in German.
- German mode names stay English — `Hold`, `Toggle`, `Inverted` — because that is what the
  app's own settings call them.

## Adding the clips and stills

None of them have been shot. Every slot renders a neutral placeholder that reserves its
aspect ratio, so the page does not move when a file lands.

1. Drop the file into `public/img/transmission/` (that folder's README lists the slots).
2. Fill in `src` — and `poster` for clips — on the matching slot in `media.ts`.

That is the whole job: no component or layout change. Clips are rendered
`muted / loop / playsInline / preload="metadata"`, started from an effect so
`prefers-reduced-motion` is honoured on the first frame rather than after it. A slot whose
`src` is not `.mp4` / `.webm` / `.mov` renders as an image, which is what the Accessibility
screenshot uses.

## Analytics

Events go through the Google Analytics tag that `app/layout.tsx` already loads. No new
analytics tool was added.

| Event | Props | Fired |
|---|---|---|
| `download_click` | `platform`, `src`, `source` | Any download link. `source` is the CTA's position on the page. |
| `buy_click` | `src`, `source` | The buy button. |
| `install_confirmed` | `src`, `platform`, `app_version` | `/welcome`, on first app launch. |

## The `src` round trip

`?src=reddit-davinci` → sanitised to lowercase `[a-z0-9_-]`, max 64 chars → `localStorage`
(not `sessionStorage`: the install often happens after the tab is closed) → appended to the
download and checkout URLs → read back on `/welcome`, which fires `install_confirmed` and
redirects to `transmission://claim?src=<token>&v=1`.

`direct` means no token was ever stored. The app uses `unknown` for "no claim arrived" —
keeping the two apart is how you tell whether the bridge works at all. The app side of this
contract is `docs/HANDOFF-analytics-instrumentation.md` in the app repo; both halves have to
agree or attribution silently returns nothing.

## Still open

- **`config.ts` TODOs** — download URLs, checkout provider, domain, OG image, and the
  trial / machine count / refund / minimum OS placeholders.
- **Not linked from anywhere.** Adding it to the products overview is one import and one
  line in `app/[locale]/products/page.tsx`; `page.tsx` already exports `TransmissionSection`
  for exactly that. Left undone because that file was out of scope.
