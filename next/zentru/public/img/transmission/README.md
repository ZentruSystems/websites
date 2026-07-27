# Transmission media

Drop clips and stills here, then fill in the path on the matching slot in
`app/[locale]/products/transmission/media.ts`. Until then each slot renders a placeholder
that already reserves its aspect ratio, so nothing on the page shifts when a file arrives.

Clips are silent and loop: MP4 (H.264) or WebM, roughly 15 seconds, plus a poster frame as
JPG or PNG. The poster is what visitors who asked for reduced motion see.

| Slot in `media.ts` | Suggested file | What it shows |
|---|---|---|
| `hero-round-trip` | `hero-round-trip.mp4` | Zoom in → nudge → zoom out. The round trip. Timer visible. |
| `hero-one-pass` | `hero-one-pass.mp4` | Same edit: hold the key, grab it, done. Same timer. |
| `problem` | `problem.mp4` | The same edit done both ways, side by side. |
| `pen` | `pen.mp4` | Pen on a tablet, same small target at full speed and in low gear. |
| `accessibility-permission` | `accessibility-permission.png` | System Settings → Privacy & Security → Accessibility, Transmission switched on. |
| `usecase-general-demo` | `usecase-general.mp4` | Grabbing a window resize edge and a panel divider. |
| `usecase-general-still` | `usecase-general.png` | A panel divider under the cursor, hover state armed. |
| `usecase-video-music-demo` | `usecase-video-music.mp4` | A tight cut in an NLE: trim handle versus move zone. |
| `usecase-video-music-still` | `usecase-video-music.png` | A timeline edge with the trim handle armed. |
| `usecase-graphics-demo` | `usecase-graphics.mp4` | A vector path: selecting a point instead of the segment. |
| `usecase-graphics-still` | `usecase-graphics.png` | A Bézier point with both handles extended. |
| `usecase-cad-3d-demo` | `usecase-cad-3d.mp4` | Arming the intended osnap among clustered candidates. |
| `usecase-cad-3d-still` | `usecase-cad-3d.png` | Four snap candidates inside a few pixels. |

The placeholders are deliberately neutral blocks. Do not stand in a fake screenshot or stock
footage — an obviously empty slot is honest, a fake one is not.
