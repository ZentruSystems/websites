'use client';
import { useSyncExternalStore } from "react";

/**
 * `prefers-color-scheme`, read once for the whole page.
 *
 * Every themed element calls this hook – `ThemedImg`, `Themed`, `FixFavicon`, zentru's
 * `ThemedImage` – so anything per instance here is paid once per themed element on the page.
 * The previous version registered a `matchMedia` listener *and* a localStorage entry per
 * instance, and wrote to it on mount; every write notified every other instance, so the cost
 * grew with the square of the number of themed elements on a page.
 *
 * There is one query and one subscription now, and React fans the value out. The localStorage
 * entry is gone with it: nothing else ever read the key, and the value it held was only ever
 * derived from the media query, so it could go stale but never add anything.
 */

const QUERY = "(prefers-color-scheme: dark)";

/** Resolved once. `null` on the server, and in browsers old enough to lack `matchMedia`. */
let list: MediaQueryList | null | undefined;

function mediaQueryList(): MediaQueryList | null {
	if (list === undefined) {
		list = typeof window == "undefined" ? null : window.matchMedia?.(QUERY) ?? null;
	}

	return list;
}

function subscribe(onChange: () => void): () => void {
	const query = mediaQueryList();
	if (!query) return () => { };

	// Safari before 14 only has the deprecated pair
	if (!query.addEventListener) {
		query.addListener(onChange);
		return () => query.removeListener(onChange);
	}

	query.addEventListener("change", onChange);
	return () => query.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
	return !(mediaQueryList()?.matches ?? false);
}

/**
 * Undefined until the client has answered, which is what the localStorage version also did.
 * Callers branch on it – `ThemedImg` and `ThemedImage` hold their space rather than guessing a
 * theme and swapping the image a moment later.
 */
function getServerSnapshot(): undefined {
	return undefined;
}

export default function useTheme() {
	const prefersLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	return {
		prefersLight,
		prefersDark: !prefersLight,
	}
}
