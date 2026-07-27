/**
 * Events for the Transmission funnel, sent through the Google Analytics tag that
 * `app/layout.tsx` already loads. No additional analytics tool is introduced here.
 *
 * download_click    – someone left for an installer, with the channel that brought them
 * buy_click         – someone left for checkout
 * install_confirmed – the app opened /welcome on first launch; download → install per channel
 */

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

export type TransmissionEvent = "download_click" | "buy_click" | "install_confirmed";

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

export function track(event: TransmissionEvent, props: Record<string, unknown>): void {
	if (window.gtag) window.gtag("event", event, props);
	else queue("event", event, props);
}
