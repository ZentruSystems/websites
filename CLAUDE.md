# Working in this repository

Read this instead of exploring. It covers the layout, the conventions, and the things that
have actually caught people out. Where something is unverified it says so — don't upgrade a
"probably" here into a statement to the user.

---

## 1. What this is

Two websites and a shared package, in one pnpm workspace rooted at **`next/`** (not at the
repo root):

| Workspace | What it is |
|---|---|
| `next/zentru` | **zentru.systems** — the company site and every product page. Almost all work happens here. |
| `next/evar` | A second, much smaller site. Builds a file tree from `dirData.json` via `genDirData.js`. |
| `next/common` | Shared React components **and the entire CSS design system**. Linked into both sites as `common` (`link:../common`), and listed in `transpilePackages`. |

Next.js 16.2.12 App Router, React 19, TypeScript, `next-intl` v4. No Tailwind in practice —
`app/style.css` imports it but the codebase styles with the custom system in §4.

**A change in `next/common` affects both sites.** Treat it as a shared library: if you touch
`common/theming/*.css`, check every page of both sites before you call it done.

---

## 2. Where things are

```
next/zentru/
  app/
    layout.tsx              root layout: fonts, GoogleAnalytics (G-31E6P1N02L), Vercel Analytics
    [locale]/
      layout.tsx            imports the three CSS files, renders <Nav> + footer, wraps in .navPad
      nav/Nav.tsx           fixed nav — top on desktop, BOTTOM on phone (see §4.3)
      products/
        page.tsx            the overview: one <…Section> per product, in display order
        .rec/  DialApp/  speedswitch/  tools/
      fields/  impressum/  privacy-policy/  catalog/  digital-experiences/
    api/products/
      baseSignup.ts         buildSignupHandler(model, mapper?) — every signup route uses it
      .rec/  DialApp/  speedswitch/
  messages/en.ts  de.ts     ALL user-facing copy, both locales
  models/                   Mongoose schemas
  i18n/routing.ts           locales ['en','de'], default 'en'
  lib/localization.tsx      `defaultHtml` — the tag map for t.rich()
  lib/mongodb.ts            connects at module load (see §7.3)
  global.ts                 makes en.ts the type source for every message key
  public/img/<product>/     media, with a README per product folder
docs/HANDOFF-speedswitch.md the SpeedSwitch page in depth — read it before touching that page
```

`@/*` maps to the workspace root (`next/zentru/*`), so `@/app/Section`, `@/public/img/...`.

---

## 3. Running and checking

```bash
cd next/zentru
npx next dev --port 3350        # pnpm dev adds --inspect, which is usually not what you want
npx tsc --noEmit                # the real gate
npx eslint app models messages
```

- **Never `pkill -f "next dev"`** — it matches the shell running it and kills your own
  command. Start a new server on a free port instead.
- **`rm -rf .next` after renaming or moving a route.** Next's generated `.next/dev/types`
  keeps the old paths and `tsc` reports errors in files you never touched.
- Playwright is available and Chromium is preinstalled at `/opt/pw-browsers/chromium`. Pass
  it as `executablePath`; do not run `playwright install`.
- **That Chromium has no H.264**, so no `.mp4` in this repo will ever play in it.
  `canPlayType` returns `""` and you get `DEMUXER_ERROR_NO_SUPPORTED_STREAMS`. You can test
  player *logic* by dispatching synthetic `ended` events; actual playback needs a real
  browser and cannot be verified here.
- **No MongoDB.** Every signup API route 500s locally at the connection, including the
  long-standing `.rec` one. That is environmental, not a regression — check `.rec` behaves
  identically before reporting a signup route as broken.

---

## 4. The design system — read this before writing any markup

Three files, all in `next/common/theming/`, all imported by `app/[locale]/layout.tsx`:
`base.css` (tokens), `modular.css` (layout utilities), `text.css`.

### 4.1 The grid

`.vhGrid` / `.hGrid` lay out **14 columns**: a padding column, twelve content columns, a
padding column. Placement is by utility class, not inline styles:

- `s0`…`s13` = `grid-column-start`, `e0`…`e13` = `grid-column-end`. `s1 e12` is a
  full-width content block; `s1 e7` is the left half.
- `gr-s1`…`gr-s5` and `gr-e1`…`gr-e5` do the same for rows.
- **Below 730px the grid becomes 7 columns**, so every placement needs a `ph-` counterpart:
  `s1 e12 ph-s1 ph-e5`. Omitting the phone variant is the most common cause of horizontal
  overflow. There are `ph-` variants of most utilities (`ph-gr-s3`, `ph-NoFloat`, …).
- Spacing utilities: `vPad`, `tPad`, `bPad`, `bMarg`, `tMarg`. Corners: `lRound`, `rRound`,
  `allRound`. Colours: `fg-l1`…`fg-l4`, and for backgrounds **only `bg-l1`, `bg-l2`, `bg-l4`
  and `bg-l5` exist** — see the note below.
- **`bg-l6` and `bg-l3` are not defined anywhere.** Both sites use `bg-l6` on sections
  (`.rec`, `DialApp`, `speedswitch`) expecting a faint tint; it computes to transparent, so
  those sections just show the page background. Verified in the browser, and it predates the
  SpeedSwitch work. The alternating-tint effect still reads, because tinted `bg-l5` sections
  alternate with these untinted ones — which is why nobody noticed. Adding the rule would
  change all three product pages at once, so **ask before "fixing" it**.

### 4.2 Tokens

`--l1` (darkest) … `--l6` (lightest) invert under `prefers-color-scheme: dark` — so `--l5`
is `hsl(0 0% 95%)` in light and `hsl(0 0% 30%)` in dark. Anything you hand-draw (SVG, inline
colour) needs a light and a dark value; there is no automatic inversion for asset content.

Accents: `--primaryAccentColor` is a mint that is only readable on dark; use
`--darkPrimaryAccentColor` on light backgrounds. The theme defines both for exactly this.

### 4.3 The nav, and the trap in `.underNav`

`--nav-height` is `70px`. The nav is `position: fixed`, **at the top on desktop and pinned to
`bottom: 0` at ≤730px**. `[locale]/layout.tsx` wraps everything in `.navPad`, which pads the
content down by the nav height.

`.underNav` cancels that with a negative margin so a hero can run *behind* the nav — and it
also sets `--nav-height: 0` **on its direct children**:

```css
.underNav          { margin-top: calc(-1 * var(--nav-height)); }
.underNav > *      { --nav-height: 0px; }
```

That second rule is the trap. Anything inside `.underNav` that needs the *real* nav height —
a `position: fixed` bar that must sit clear of the nav, which on a phone is along the bottom
— computes `0` and lands under it. **Fix it by moving the element out of `.underNav`, not by
changing the shared CSS.** It is fixed-position, so its place in the DOM changes nothing
else. `speedswitch/page.tsx` does exactly this and carries a comment explaining why.

### 4.4 `Section` and the sliding aside

`app/Section.tsx` is the standard title + body + aside block used by every product card. Its
aside is a fixed-width panel with `overflow: hidden`, and the image inside sits at
`left: 15vw` until the card is hovered, then slides to `left: 0`.

**So roughly the left 55% of any aside image is what people see at rest** (measured: 57% at
1440, 55% at 900, ~84% at 390 where `ph-NoFloat` disables the slide). Compose aside artwork
so the point is in the left half and the right half is the reward for hovering.

---

## 5. Copy and localization

- **All user-facing text lives in `messages/en.ts` and `messages/de.ts`.** Never inline a
  string in a component. German is informal ("du").
- **`global.ts` derives the message-key types from `en.ts`.** Renaming a key therefore breaks
  every call site at compile time — which is a feature, but it means a copy change and a
  structural change must land in the same commit or the tree does not build.
- **The two files must have identical key sets.** A key present in one only is a render-time
  crash in the other locale, not a fallback.
- Multi-paragraph copy is a single template literal with `<p>` / `<ul>` / `<li>`, rendered
  with `t.rich(key, defaultHtml)`. The tag map is `lib/localization.tsx`.
- **Never edit ICU placeholders.** `{price, number, ::currency/EUR}` and
  `{regular, number, ::currency/EUR precision-integer}` must survive verbatim.
- Lists are **keyed objects, not arrays**. A `content.ts` next to each page holds the key
  order (`useCaseIds`, `modeKeys`, `faqKeys`, …), so adding an item means adding it to both
  message files *and* listing its key in `content.ts`.

---

## 6. Product pages

Each product owns a folder under `app/[locale]/products/` and exports two things: the page
itself, and a `…Section` used by the products overview. Shared shape:

- `config.ts` — commercial values (price, trial, download URLs, support email). Entries
  marked `TODO` are placeholders and must not be presented as facts.
- `content.ts` — the key registries described above.
- `media.ts` — a slot → file map. A slot takes one `MediaSource` or an array of them; an
  array plays in sequence, or shuffled with `order="random"`.
- `<product>.module.css` — page-local styles.
- `README.md` — what is wired and what is still a placeholder.

**SpeedSwitch** (`products/speedswitch`) is the most involved and is documented separately in
`docs/HANDOFF-speedswitch.md` — positioning decisions, the contracts it has with the desktop
app, and what is deliberately left out. Read that before changing its copy or its routes.
It was called *Transmission*, then *ShiftDown*; both old names are retired everywhere except
the history notes in that handoff.

---

## 7. Signups

One architecture, three products. Follow it rather than writing a fourth variant.

### 7.1 Client

`app/[locale]/products/baseSignup.tsx` exports `useSignup({ apiPath, extraFields, onSuccess })`,
returning `{ email, setEmail, isEmailValid, sending, result, submit }`, and default-exports a
`Signup` component built on it. Use the component for a normal full-page form; use the hook
directly when the form cannot take that layout — SpeedSwitch's Linux form sits inside an FAQ
answer.

### 7.2 Route

`app/api/products/baseSignup.ts` exports `buildSignupHandler(model, mapper?)`. The optional
`mapper` returns the extra fields to store — **only what it returns is written**, so a caller
cannot set a field just by naming it in the request body. Signing up twice is not an error;
it increments `count`.

### 7.3 Model — the sharp edge

`models/baseSignup.ts` exports a single shared `BaseSignupSchema` **instance**. Mongoose's
`.add()` mutates the schema it is called on, so adding a field directly would add it to every
other product's collection. Always:

```ts
const schema = BaseSignupSchema.clone().add({ src: { type: String, trim: true } });
```

Also note `lib/mongodb.ts` calls `mongoose.connect()` at **module top level**, not lazily. If
`MONGODB_URI` is unset the module throws on import, which is why every signup route 500s in a
sandbox (§3).

---

## 8. Branches and deployment

- `main` is the release branch; **`staging` is where feature work lands** and is usually
  ahead of `main`. Branch from `staging` unless told otherwise, and fetch before branching —
  work here gets squashed into `staging` by the maintainer, so your local view of a feature
  branch can be behind.
- The maintainer pushes directly to feature branches mid-session. **Fetch and rebase rather
  than force-pushing**, and re-apply any mechanical transformation (a rename, a lint fix) to
  the commits that arrived while you were working — their content will not have it.
- `.github/workflows/` holds two Azure Static Web Apps workflows that trigger on `main` and
  upload `next/{zentru,evar}/out`. **That output directory is not produced by the current
  config** — `distDir: "out"` is commented out in `next.config.ts` and there is no
  `output: "export"`. Meanwhile the app uses Vercel Analytics, Speed Insights, and reads
  `VERCEL_TARGET_ENV`, and the zentru README says Vercel. The evidence says Vercel is live
  and the Azure workflows are stale, but nobody has confirmed that — ask before acting on it.

---

## 9. House style

- **Tabs for indentation** in TS/TSX/CSS. Match the file you are in.
- Comments explain *why*, and are used sparingly — a comment that restates the code is noise
  here. Where a decision looks wrong at a glance, the comment says what would break if you
  "fixed" it. Write in that register.
- Prefer utility classes over inline styles; use a CSS custom property when a value must be
  overridable by a media query (an inline style cannot be).
- Don't restructure existing code as a side effect of a task. **If a change needs edits to
  code outside the thing you were asked to build, ask first.**
- Keep the lint baseline. There are a small number of pre-existing findings; leaving them is
  correct, adding to them is not.

---

## 10. Things that have gone wrong before

- A stale `.next` producing `LayoutProps` errors after a route move → `rm -rf .next`.
- Renaming a message key without updating `content.ts` and the components → the tree does not
  compile, because of `global.ts` (§5).
- Assuming an empty media slot renders a placeholder. It did once; the placeholder branch in
  `DemoMedia.tsx` is currently commented out, so an empty slot renders **nothing** and adding
  a section without a clip leaves a gap.
- Measuring "overlap" between a fixed bar and the nav as `bar.bottom - nav.top`. That is
  meaningless when the nav is at the top; use a real rectangle intersection.
- Believing a test that asserts old behaviour. When a check fails after someone else's
  change, first work out whether the expectation is stale — several in this repo were, and
  "fixing" the code to satisfy them would have been wrong.
