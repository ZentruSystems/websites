/**
 * Events for any page that isn't SpeedSwitch – `products/speedswitch/analytics.ts` predates this
 * and keeps its own copy, which could move onto this one.
 *
 * Both tools `app/layout.tsx` loads get every event: Google Analytics (only with consent, see
 * `lib/consent.ts`) and Vercel Web Analytics, which is cookieless and always on.
 */

import { track as vercelTrack } from "@vercel/analytics";
import { hasAnalyticsConsent } from "./consent";

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

/** Only what both tools accept as an event property */
export type EventProps = Record<string, string | number | boolean | null>;

/**
 * The queue the tag itself uses.
 *
 * An event can fire before the analytics script has run – `booking_confirmed` does, on first
 * paint. Queuing on `dataLayer` the way the official snippet does means gtag.js replays it on load.
 */
const queue: (...args: unknown[]) => void = function () {
	window.dataLayer = window.dataLayer ?? [];
	// Not rest parameters: gtag.js replays the queue as `arguments` objects, and the official
	// snippet pushes exactly this. An array is a different shape and may not be replayed.
	// eslint-disable-next-line prefer-rest-params
	window.dataLayer.push(arguments);
};

export function trackEvent(event: string, props: EventProps): void {
	// Without consent nothing is queued either, so nothing is sent if consent is given later
	if (hasAnalyticsConsent()) {
		if (window.gtag) window.gtag("event", event, props);
		else queue("event", event, props);
	}

	// Custom events need a paid Vercel plan; without one this is a no-op
	vercelTrack(event, props);
}
