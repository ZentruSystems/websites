"use client";

import { useSyncExternalStore } from "react";

/**
 * Which breakpoint the viewport is in.
 *
 * Media queries rather than a `resize` listener: `resize` fires continuously while a window is
 * being dragged, and the previous version turned every one of those events into a `setState`,
 * re-rendering `Nav` on every pixel to answer a question that only changes when a breakpoint is
 * crossed. These fire on the crossing itself.
 *
 * They are also correct on the first client render. The old hook started at width 0, so
 * `isDesktop` was false until an effect ran and the nav mounted in its phone form on every
 * page load before swapping.
 *
 * The breakpoints match the ones in `theming/base.css` and `theming/modular.css`.
 */

const MOBILE = "(max-width: 480px)";
const TABLET = "(min-width: 481px) and (max-width: 730px)";
const DESKTOP = "(min-width: 731px)";

/** One `MediaQueryList` per query, resolved once and shared by every caller. */
const lists = new Map<string, MediaQueryList | null>();

function mediaQueryList(query: string): MediaQueryList | null {
	if (!lists.has(query)) {
		lists.set(query, typeof window == "undefined" ? null : window.matchMedia?.(query) ?? null);
	}

	return lists.get(query) ?? null;
}

function subscribe(query: string) {
	return (onChange: () => void): () => void => {
		const list = mediaQueryList(query);
		if (!list) return () => { };

		// Safari before 14 only has the deprecated pair
		if (!list.addEventListener) {
			list.addListener(onChange);
			return () => list.removeListener(onChange);
		}

		list.addEventListener("change", onChange);
		return () => list.removeEventListener("change", onChange);
	};
}

function useMediaQuery(query: string, serverValue: boolean): boolean {
	return useSyncExternalStore(
		subscribe(query),
		() => mediaQueryList(query)?.matches ?? false,
		() => serverValue,
	);
}

export default function useResponsiveSize() {
	// The server has no viewport to measure. Desktop is the assumption the markup is built
	// around, and it is the one the old hook effectively settled on after its first effect.
	const isMobile = useMediaQuery(MOBILE, false);
	const isTablet = useMediaQuery(TABLET, false);
	const isDesktop = useMediaQuery(DESKTOP, true);

	return {
		isMobile,
		isTablet,
		isDesktop,
	}
}
