/**
 * Where the clips and stills go.
 *
 * Every slot below renders a reserved-space placeholder until it has a `src`, so adding a
 * file is a two step job and never touches layout:
 *
 *   1. drop the file into `public/img/speedswitch/` (see the README there)
 *   2. fill in the path – and a poster frame for clips – on the matching slot
 *
 * A slot can hold one source or several. Several play one after another in the order written
 * here; pass `order="random"` to `DemoMedia` to shuffle them instead.
 *
 * Clips are silent, looping and muted; the poster is what reduced-motion visitors see.
 */
export type MediaSource = {
	/** Path under /public, e.g. "/img/speedswitch/hero.mp4" */
	src?: string;
	/** Poster frame, e.g. "/img/speedswitch/hero.jpg" */
	poster?: string;
};

/** One clip, or a playlist of them. */
export type Media = MediaSource | MediaSource[];

const mediaSources: Record<string, Media> = {
	"hero-comparison": { src: "/img/speedswitch/SpeedSwitch.Horizontal.SBS.LowRes.Logic.mp4" },

	"problem": { src: "/img/speedswitch/SpeedSwitch.Sequential.SBS.Figma.mp4" },
	// The laptop and trackpad section: placing an object exactly, which is the whole case
	"trackpad": { src: "/img/speedswitch/SpeedSwitch.Fast.Powerpoint.mp4" },
	"pen": {},
	// A screenshot rather than a clip: System Settings → Privacy & Security → Accessibility
	"accessibility-permission": {},
	"usecase-video-music-demo": [
		{ src: "/img/speedswitch/SpeedSwitch.Vertical.SBS.Logic.mp4" },
		{ src: "/img/speedswitch/SpeedSwitch.Fast.Resolve.mp4" },
	],
	"usecase-video-music-still": {},
	"usecase-graphics-demo": { src: "/img/speedswitch/SpeedSwitch.Fast.Figma.mp4" },
	"usecase-graphics-still": {},
	"usecase-3d-demo": { src: "/img/speedswitch/SpeedSwitch.Fast.Blender.mp4" },
	"usecase-3d-still": {},
};

/** An unknown or unfilled slot renders as a placeholder, which is the point. */
export function mediaFor(slot: string): Media {
	return mediaSources[slot] ?? {};
}

/**
 * One shape for the player to work with: always a list, and only entries that point at a file.
 * An empty result is a slot with nothing in it yet, which is what the placeholder is for.
 */
export function toMediaSources(media: Media | undefined): MediaSource[] {
	if (!media) return [];
	return (Array.isArray(media) ? media : [media]).filter(one => one.src);
}
