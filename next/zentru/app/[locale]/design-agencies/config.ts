import { MediaItem } from "@/app/blocks/MediaCarousel";

/**
 * Every value on this page that is a commercial or operational decision rather than copy. What it
 * shares with Project Management – the site, the company facts, the portrait – is read from that
 * page's config instead, so the two can't drift apart.
 *
 * The entries marked TODO are placeholders – the page renders and links correctly with them,
 * but they must be replaced before the page goes public.
 */
export const designAgencies = {
	path: "/design-agencies",
	// The page title is translated: messages/{en,de}.ts, Fields.designAgencies.meta.title

	/**
	 * This page's own Cal.com event, on the same account as Project Management's. In the event's
	 * settings, "Redirect on booking" must point to `siteUrl + bookedPath` – the page there is what
	 * counts a booking as completed. Leave "forward parameters" off: it would put the visitor's name
	 * and email into a URL that analytics records.
	 */
	bookingUrl: "https://cal.com/zentrusystems/design-development",
	bookedPath: "/design-agencies/booked",

	/**
	 * The finance case's carousel, in the order shown, e.g. `{ src: "/img/design-agencies/forecast.mp4",
	 * poster: "/img/design-agencies/forecast.jpg" }`. Files go in /public/img/design-agencies/. Every
	 * slide is described by `cases.items.finance.mediaAlt` in the messages, plus its place in the row.
	 * TODO: empty until the images and videos arrive – the case then shows no carousel at all.
	 */
	caseMedia: [] as readonly Omit<MediaItem, "alt">[],

	/**
	 * The CRM case's funnel, from the platform itself. The dark version is derived from the light one –
	 * public/img/design-agencies/README.md says how. Described by `cases.crmMediaAlt`.
	 */
	crmMedia: [
		{ src: "/img/design-agencies/crm-funnel.png", darkSrc: "/img/design-agencies/crm-funnel-dark.png" },
	] as readonly Omit<MediaItem, "alt">[],
} as const;
