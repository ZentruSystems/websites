/**
 * The visitor's analytics consent, shared by the banner, the footer entry that reopens it and
 * every event that would go to Google Analytics.
 *
 * Only Google Analytics needs it: it sets cookies. Vercel Web Analytics and Speed Insights are
 * cookieless and run regardless.
 */

export type Consent = "granted" | "denied";

const STORAGE_KEY = "zentru.consent.analytics";

/** Fired on `window` whenever the choice changes – `useSyncExternalStore` subscribes to it */
const CHANGE_EVENT = "zentru:consent-change";
/** Fired on `window` to show the banner again, from the footer */
export const OPEN_EVENT = "zentru:consent-open";

/**
 * The choice made on this page load. Where storage throws (private mode, blocked site data) it
 * is the only record, and without it the banner could never close.
 */
let thisVisit: Consent | null = null;

/** null: no choice yet */
export function readConsent(): Consent | null {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored == "granted" || stored == "denied") return stored;
	} catch {
		// Falls through to this visit's choice
	}
	return thisVisit;
}

export function writeConsent(consent: Consent): void {
	thisVisit = consent;
	try {
		window.localStorage.setItem(STORAGE_KEY, consent);
	} catch {
		// Not remembered across visits, so the banner asks again next time – the choice still applies now
	}
	window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeConsent(onChange: () => void): () => void {
	// `storage` carries a choice made in another tab
	window.addEventListener(CHANGE_EVENT, onChange);
	window.addEventListener("storage", onChange);
	return () => {
		window.removeEventListener(CHANGE_EVENT, onChange);
		window.removeEventListener("storage", onChange);
	};
}

export function hasAnalyticsConsent(): boolean {
	return readConsent() == "granted";
}

export function openConsentSettings(): void {
	window.dispatchEvent(new Event(OPEN_EVENT));
}
