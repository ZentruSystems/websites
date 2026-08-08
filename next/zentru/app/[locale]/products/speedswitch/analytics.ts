/**
 * Events for the SpeedSwitch funnel.
 *
 * Both tools `app/layout.tsx` already loads get every event, so neither becomes the single
 * place the funnel lives: Google Analytics (gaId G-31E6P1N02L) and Vercel Web Analytics.
 * Nothing new is introduced here – Aptabase stays what it is in the app, an on-device SDK
 * with no web counterpart.
 *
 * download_click    – someone left for an installer, with the channel that brought them
 * buy_click         – someone left for checkout
 * install_confirmed – the app opened /welcome on first launch; download → install per channel
 */

import { track as vercelTrack } from "@vercel/analytics";

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

export type SpeedSwitchEvent = "download_click" | "buy_click" | "install_confirmed";

/**
 * The queue the tag itself uses.
 *
 * `install_confirmed` fires from an effect on first paint, which can happen before the
 * analytics script has run. Queuing on `dataLayer` the way the official snippet does means
 * the event survives that race: gtag.js replays whatever it finds when it loads.
 */
const queue: (...args: unknown[]) => void = function () {
	window.dataLayer = window.dataLayer ?? [];
	// Not rest parameters: gtag.js replays the queue as `arguments` objects, and the official
	// snippet pushes exactly this. An array is a different shape and may not be replayed.
	// eslint-disable-next-line prefer-rest-params
	window.dataLayer.push(arguments);
};

/** Only what both tools accept as an event property */
export type EventProps = Record<string, string | number | boolean | null>;

export function track(event: SpeedSwitchEvent, props: EventProps): void {
	if (window.gtag) window.gtag("event", event, props);
	else queue("event", event, props);

	// Custom events need a paid Vercel plan; without one this is a no-op and GA still has it
	vercelTrack(event, props);
}
