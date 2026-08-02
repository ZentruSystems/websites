/**
 * Where the clips and stills go.
 *
 * None of them have been shot yet. Every slot below renders a reserved-space placeholder
 * until it has a `src`, so adding a file is a two step job and never touches layout:
 *
 *   1. drop the file into `public/img/shiftdown/` (see the README there)
 *   2. fill in the path – and a poster frame for clips – on the matching slot
 *
 * Clips are silent, looping and muted; the poster is what reduced-motion visitors see.
 */
export type MediaSource = {
	/** Path under /public, e.g. "/img/shiftdown/hero-round-trip.mp4" */
	src?: string;
	/** Poster frame, e.g. "/img/shiftdown/hero-round-trip.jpg" */
	poster?: string;
};

const mediaSources: Record<string, MediaSource> = {
	// Hero, left pane: zoom in → nudge → zoom out, the round trip
	"hero-round-trip": {},
	// Hero, right pane: hold the key, grab it, done. Same edit, timer on both
	"hero-one-pass": {},

	"hero-comparison": { src: "/img/shiftdown/ShiftDown.Horizontal.Logic.mp4" },

	"problem": {},
	"pen": {},
	// A screenshot rather than a clip: System Settings → Privacy & Security → Accessibility
	"accessibility-permission": {},

	"usecase-general-demo": {},
	"usecase-general-still": {},
	"usecase-video-music-demo": { src: "/img/shiftdown/ShiftDown.Horizontal.Logic.mp4" },
	"usecase-video-music-still": {},
	"usecase-graphics-demo": { src: "/img/shiftdown/ShiftDown.Fast.Figma.mp4" },
	"usecase-graphics-still": {},
	"usecase-cad-3d-demo": {},
	"usecase-cad-3d-still": {},
};

/** An unknown or unfilled slot renders as a placeholder, which is the point. */
export function mediaFor(slot: string): MediaSource {
	return mediaSources[slot] ?? {};
}
