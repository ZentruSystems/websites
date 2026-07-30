/**
 * Every value on this page that is a commercial decision rather than a fact about the app.
 *
 * The entries marked TODO are placeholders – the page renders and links correctly with them,
 * but they must be replaced before the page goes public.
 */
export const shiftDown = {
	name: "ShiftDown",
	/** TODO: confirm – the app's bundle ID (systems.zentru.shiftdown) suggests this one */
	siteUrl: "https://zentru.systems",
	path: "/products/shiftdown",
	// The page title is translated: messages/{en,de}.ts, Products.shiftdown.meta.title

	/** Formatted per locale by the messages that use it – "€9.99" in English, "9,99 €" in German */
	price: 9.99,
	/** What the price is anchored against: the introductory price is what people actually pay */
	regularPrice: 14,
	/** Usage days, not calendar days: only days the app is actually used count down */
	trialDays: 30,
	/** TODO: confirm – placeholder from the handoff */
	machines: 3,
	/** TODO: confirm – placeholder from the handoff */
	refundDays: 30,

	/** TODO: verify against the shipped build */
	minMacOs: "macOS 12",
	/** TODO: verify against the shipped build */
	minWindows: "Windows 10",

	/**
	 * TODO: rename once the app ships a build called ShiftDown. These are the real binaries in
	 * `public/download/`, so the names stay as the build produced them – pointing at a
	 * ShiftDown-named file that does not exist would only break the download. It is the last
	 * user-visible place the old name survives.
	 */
	downloads: {
		macos: "/download/ShiftDown-macOS.zip",
		windows: "/download/ShiftDown-Windows.zip",
	},

	checkoutUrl: "https://zentrusystems.lemonsqueezy.com/checkout/buy/79624aff-0cfc-4ebe-8064-a87aec2192c9?enabled=1944236",

	/** TODO: replace with a ShiftDown specific OG image – this is the site wide one */
	ogImage: "/opengraph-image.png",

	supportEmail: "service@zentru.systems",
} as const;

export type Platform = "macos" | "windows";

export const platformLabels: Record<Platform, string> = {
	macos: "macOS",
	windows: "Windows",
};
