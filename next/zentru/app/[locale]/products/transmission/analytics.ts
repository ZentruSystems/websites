/**
 * Events for the Transmission funnel, sent through the Google Analytics tag that
 * `app/layout.tsx` already loads. No additional analytics tool is introduced here.
 *
 * download_click   – someone left for an installer, with the channel that brought them
 * buy_click        – someone left for checkout
 * install_confirmed – the app opened /welcome on first launch; download → install per channel
 */

declare global {
	interface Window {
		gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
	}
}

export type TransmissionEvent = "download_click" | "buy_click" | "install_confirmed";

export function track(event: TransmissionEvent, props: Record<string, unknown>): void {
	window.gtag?.("event", event, props);
}
