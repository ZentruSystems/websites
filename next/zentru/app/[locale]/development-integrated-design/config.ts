import { MediaItem } from "@/app/blocks/MediaCarousel";

/**
 * Every value on this page that is a commercial or operational decision rather than copy. What it
 * shares with Project Management – the site, the company facts, the portrait – is read from that
 * page's config instead, so the two can't drift apart.
 */
export const designAgencies = {
	path: "/development-integrated-design",
	// The page title is translated: messages/{en,de}.ts, Fields.designAgencies.meta.title

	/**
	 * This page's own Cal.com event, on the same account as Project Management's. In the event's
	 * settings, "Redirect on booking" must point to `siteUrl + bookedPath` – the page there is what
	 * counts a booking as completed. Leave "forward parameters" off: it would put the visitor's name
	 * and email into a URL that analytics records.
	 */
	bookingUrl: "https://cal.com/zentrusystems/development-integrated-design",
	bookedPath: "/development-integrated-design/booked",

	/**
	 * The finance case's carousel, in the order shown. Files go in /public/img/development-integrated-design/; a
	 * video is listed with its poster, e.g. `{ src: "/img/development-integrated-design/forecast.mp4", poster:
	 * "/img/development-integrated-design/forecast.jpg" }`, and a second slide brings the carousel's buttons. Every
	 * slide is described by `cases.items.finance.mediaAlt` in the messages, plus its place in the row.
	 * The size makes the frame the screenshots' own 10:7, so they are shown whole – further slides
	 * should match it, or they are cropped to fit.
	 */
	caseMedia: [
		{
			src: "/img/development-integrated-design/finance-forecast-light.png",
			darkSrc: "/img/development-integrated-design/finance-forecast-dark.png",
			width: 1440,
			height: 1008,
		},
	] as readonly Omit<MediaItem, "alt">[],

	/**
	 * The CRM case's funnel, from the platform itself. The dark version is derived from the light one –
	 * public/img/development-integrated-design/README.md says how. Described by `cases.crmMediaAlt`.
	 */
	crmMedia: [
		{ src: "/img/development-integrated-design/crm-funnel.png", darkSrc: "/img/development-integrated-design/crm-funnel-dark.png" },
	] as readonly Omit<MediaItem, "alt">[],
} as const;
