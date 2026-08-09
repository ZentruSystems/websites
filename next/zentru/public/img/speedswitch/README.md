# SpeedSwitch media

Drop clips and stills here, then fill in the path on the matching slot in
`app/[locale]/products/speedswitch/media.ts`. Until then each slot renders a placeholder
that already reserves its aspect ratio, so nothing on the page shifts when a file arrives.

Clips are silent and loop, roughly 15 seconds, each with a poster frame. The poster is what
visitors who asked for reduced motion see, so pick a frame that still makes the point.

## One clip or several

A slot takes either a single source or a list of them:

```ts
"usecase-graphics-demo": { src: "/img/speedswitch/SpeedSwitch.Fast.Figma.mp4" },

"usecase-video-music-demo": [
    { src: "/img/speedswitch/SpeedSwitch.Horizontal.SBS.Logic.mp4" },
    { src: "/img/speedswitch/SpeedSwitch.Fast.Resolve.mp4" },
],
```

A list plays one clip after another and starts over at the end. By default that is the order
written above; pass `order="random"` to the `DemoMedia` that renders the slot to shuffle
instead, reshuffling each time round and never repeating a clip back to back.

A single clip keeps the `loop` attribute. A list cannot — `ended` never fires on a looping
video, so it would sit on the first clip forever.

Each clip carries its own `poster`, which is what shows during the moment the next one loads.
Only the playing clip is in the DOM, so a list costs no more bandwidth up front than a single
clip does — but the switch is not seamless, and a poster makes that gap look deliberate.

## Format

**H.264 in MP4, and only that.** `DemoMedia` renders a single `<video src>`, not a list of
`<source>` elements, so there is no format fallback — one file has to play everywhere. WebM
or AV1 would be smaller, but they need a component change first.

```
ffmpeg -i in.mov -c:v libx264 -profile:v high -pix_fmt yuv420p \
       -crf 22 -movflags +faststart -an out.mp4
```

- `-pix_fmt yuv420p` – without it Safari shows a black box.
- `-movflags +faststart` – puts the index first so playback starts before the download ends.
- `-an` – the player is muted anyway, and a silent audio track only costs bytes.

Stills and screenshots: **WebP**, or PNG for UI captures if you would rather not re-encode.
Never JPEG for a screenshot – it smears exactly the thin one-pixel edges these shots are about.

## Size

Nothing resizes these. The page uses a plain `<img>` / `<video>`, not `next/image`, so the
file you drop is the file every visitor downloads. These are the widest each slot is ever
rendered, doubled for retina, then rounded to a normal encode size:

| Slot kind | Widest rendered | Encode at |
|---|---|---|
| Section clips (`problem`, `pen`, `usecase-*-demo`) | 620 css px | **1280 × 720** (16:9) |
| Use case stills (`usecase-*-still`) | 620 css px | **1280 × 800** (16:10) |
| `accessibility-permission` | 620 css px | **1280 × 960** (4:3) |
| Hero pair (`hero-round-trip`, `hero-one-pass`) | 960 css px wide, 1010 tall | **1440 × 1440** (1:1) |

Going bigger is pure download cost: on a desktop the section slots are capped at 520 css px
and never grow, even on a 4K display. The 620 comes from the phone layout at its widest.

Both hero clips start playing the moment the page loads, so keep them to a couple of MB each.

## The hero panes crop hard, and not the way you expect

The hero clips are `object-fit: cover` inside two panes that are **portrait on a desktop and
landscape on a phone** — the box ranges from 0.62 to 1.76 wide-over-tall. Whatever does not
fit is cut off, and how much survives depends entirely on the aspect you shoot:

| Source | Worst case still visible |
|---|---|
| 16:9 | 35 % |
| 4:3 | 46 % |
| **1:1** | **57 %** |
| 4:5 | 45 % |

A 16:9 screen recording loses about two thirds of its width on a ~900 px window. So either
shoot the hero pair square, or frame tightly on the one thing that matters — the timeline
corner, the snap cluster — instead of a whole app window. A tight crop is the better demo
anyway, and it is naturally close to square.

If you would rather shoot 16:9 for everything, say so and the hero can take a separate
phone and desktop crop instead. The section slots below the hero do not have this problem:
their boxes match the aspect ratios above exactly.

## Recording

- Capture at 2× (a Retina Mac already does) and at the tightest region that tells the story —
  recording a whole 5K desktop and shrinking it throws away the pixel detail that is the point.
- 60 fps for the demo clips where the motion *is* the message; 30 is fine elsewhere.
- Make the first and last frame match, or the loop visibly jumps.

| Slot in `media.ts` | Suggested file | What it shows |
|---|---|---|
| `hero-round-trip` | `hero-round-trip.mp4` | Zoom in → nudge → zoom out. The round trip. Timer visible. |
| `hero-one-pass` | `hero-one-pass.mp4` | Same edit: hold the key, grab it, done. Same timer. |
| `problem` | `problem.mp4` | The same edit done both ways, side by side. |
| `pen` | `pen.mp4` | Pen on a tablet, same small target at full speed and in low gear. |
| `accessibility-permission` | `accessibility-permission.png` | System Settings → Privacy & Security → Accessibility, SpeedSwitch switched on. |
| `usecase-general-demo` | `usecase-general.mp4` | Grabbing a window resize edge and a panel divider. |
| `usecase-general-still` | `usecase-general.png` | A panel divider under the cursor, hover state armed. |
| `usecase-video-music-demo` | `usecase-video-music.mp4` | A tight cut in an NLE: trim handle versus move zone. |
| `usecase-video-music-still` | `usecase-video-music.png` | A timeline edge with the trim handle armed. |
| `usecase-graphics-demo` | `usecase-graphics.mp4` | A vector path: selecting a point instead of the segment. |
| `usecase-graphics-still` | `usecase-graphics.png` | A Bézier point with both handles extended. |
| `usecase-3d-demo` | `usecase-3d.mp4` | Arming the intended osnap among clustered candidates. |
| `usecase-3d-still` | `usecase-3d.png` | Four snap candidates inside a few pixels. |

The placeholders are deliberately neutral blocks. Do not stand in a fake screenshot or stock
footage — an obviously empty slot is honest, a fake one is not.
