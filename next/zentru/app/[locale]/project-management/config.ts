/**
 * Every value on this page that is a commercial or operational decision rather than copy.
 *
 * The entries marked TODO are placeholders – the page renders and links correctly with them,
 * but they must be replaced before the page goes public.
 */
export const projectBootstrap = {
	siteUrl: "https://zentru.systems",
	path: "/project-management",
	// The page title is translated: messages/{en,de}.ts, Fields.projectBootstrap.meta.title

	/**
	 * In the Cal.com event's settings, "Redirect on booking" must point to `siteUrl + bookedPath` –
	 * the page there is what counts a booking as completed. Leave "forward parameters" off: it
	 * would put the visitor's name and email into a URL that analytics records.
	 */
	bookingUrl: "https://cal.com/zentrusystems/project-management",
	bookedPath: "/project-management/booked",

	/** The length the setup's fixed price covers */
	includedWeeks: 3,

	portrait: "/img/project-management/portrait.jpg",
	/**
	 * Where the 4:5 frame crops this photo: what sits 25px right of centre in the 360px desktop
	 * frame belongs in the middle. A percentage rather than `calc(50% - 25px)`: the file is nearly
	 * square, so the frame only has ~38px to spare per side at 360px and less on a phone, where a
	 * fixed 25px would show the photo's edge. 83% is that same shift, scaled to any frame size.
	 * A different photo needs this recomputed.
	 */
	portraitPosition: "83% 50%",
	/** TODO: replace with a page specific OG image – this is the site wide one */
	ogImage: "/opengraph-image.png",

	email: "service@zentru.systems",
	linkedIn: "https://www.linkedin.com/company/zentru-systems",
	/** For the structured data. From the imprint (next/common/impressum.tsx) – keep the two in step */
	company: {
		legalName: "Zentru Systems e.U.",
		streetAddress: "Laurenzgasse 13/11",
		postalCode: "1050",
		locality: "Wien",
		country: "AT",
	},
} as const;

/**
 * A page's address in one language. Every page lives under its locale (next-intl's default
 * `localePrefix: "always"`); the address without one only redirects, so it is never the one to give
 * a search engine.
 */
export function localeUrl(locale: string, path: string = projectBootstrap.path) {
	return `${projectBootstrap.siteUrl}/${locale}${path}`;
}
