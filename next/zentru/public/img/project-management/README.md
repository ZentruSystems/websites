# Project Management images

Referenced from `app/[locale]/project-management/config.ts`. Until a file lands, its slot shows
the empty `--l5` box it reserves, so nothing on the page shifts when it arrives.

| File | Where | Notes |
|---|---|---|
| `portrait.jpg` | The "One person between your business and your tech" section, next to the intro | In place. Shown in a 4:5 frame; `portraitPosition` in `config.ts` sets which part of it the frame keeps. Served through `next/image`, so size and format are optimised automatically. |
| `ProjectManagementMark.svg` | The `/about` hero, above the name | In place. A start line and three staggered bars – a timeline of work packages – in the Evar logo's line style: 2px, round caps, drawn dark. The `invertIfLightTheme` class turns it white in dark mode. |
| `og.png` (optional) | Link previews | 1200 × 630. Set `ogImage` in `config.ts` to `/img/project-management/og.png` once it exists; until then the site-wide image is used. |
