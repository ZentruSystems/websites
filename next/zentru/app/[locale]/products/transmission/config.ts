/**
 * Every value on this page that is a commercial decision rather than a fact about the app.
 *
 * The entries marked TODO are placeholders – the page renders and links correctly with them,
 * but they must be replaced before the page goes public.
 */
export const transmission = {
	name: "Transmission",
	/** TODO: confirm – the app's bundle ID (systems.zentru.transmission) suggests this one */
	siteUrl: "https://zentru.systems",
	path: "/products/transmission",
	// The brand-paired title is translated: messages/{en,de}.ts, Products.transmission.meta.title

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

	/** TODO: replace with the signed installers once they are hosted */
	downloads: {
		macos: "/downloads/transmission-macos.dmg",
		windows: "/downloads/transmission-windows.exe",
	},

	/** TODO: replace with the checkout link once the payment provider is chosen (Lemon Squeezy / Paddle) */
	checkoutUrl: "https://zentru.systems/products/transmission",

	/** TODO: replace with a Transmission specific OG image – this is the site wide one */
	ogImage: "/opengraph-image.png",

	supportEmail: "service@zentru.systems",
} as const;

export type Platform = "macos" | "windows";

export const platformLabels: Record<Platform, string> = {
	macos: "macOS",
	windows: "Windows",
};
