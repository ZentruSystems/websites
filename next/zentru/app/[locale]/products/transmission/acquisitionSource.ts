/**
 * Acquisition source ("src") plumbing.
 *
 * A visitor arrives with `?src=reddit-davinci`, downloads, installs, and the app opens
 * `/welcome` in the same browser on first launch. That browser still holds the token,
 * which is how an anonymous install can be attributed to a channel without ever
 * identifying the user.
 *
 * The app side of this contract lives in the app repo (docs/HANDOFF-analytics-instrumentation.md);
 * both halves have to agree or attribution silently returns nothing.
 */

const STORAGE_KEY = "transmission.src";
const MAX_LENGTH = 64;

/** Absent token. Distinct from the app's "unknown", which means no claim ever arrived. */
export const DIRECT = "direct";

/** Lowercase `[a-z0-9_-]`, max 64 characters. Anything else is not a token we accept. */
export function sanitizeSource(raw: string | null | undefined): string | null {
	if (!raw) return null;

	const token = raw.toLowerCase().slice(0, MAX_LENGTH);
	return /^[a-z0-9_-]+$/.test(token) ? token : null;
}

/**
 * Persists `?src=` from the current URL.
 *
 * localStorage, not sessionStorage: the install regularly happens after the tab is closed.
 * An existing token is kept – the first channel that brought someone here is the one that earned it.
 */
export function captureSourceFromUrl(): void {
	const token = sanitizeSource(new URLSearchParams(window.location.search).get("src"));
	if (!token) return;

	try {
		if (window.localStorage.getItem(STORAGE_KEY) == null) {
			window.localStorage.setItem(STORAGE_KEY, token);
		}
	} catch {
		// private mode / storage disabled – attribution is optional, the download is not
	}
}

export function readSource(): string {
	try {
		return sanitizeSource(window.localStorage.getItem(STORAGE_KEY)) ?? DIRECT;
	} catch {
		return DIRECT;
	}
}

/** Appends the token to a download or checkout URL, leaving everything else untouched. */
export function withSource(url: string, source: string): string {
	try {
		const resolved = new URL(url, window.location.origin);
		resolved.searchParams.set("src", source);
		return resolved.toString();
	} catch {
		return url;
	}
}
