"use client"

import { useEffect } from "react";
import useTheme from "./useTheme";

/**
 * Fixes the favicon theming
 *
 * the favicons have to both be loaded and have ids of 'favLight' and 'favDark' that denotes their **USE**
 *
 * It doesn't render anything.
 *
 * For example if not working right away with {@link Metadata}
 * @example
 * <html lang="en">
 *   <link key="d" id="favDark" rel="shortcut icon" href="/img/evar-single-dark.png" media="(prefers-color-scheme: dark)" />
 *   <link key="l" id="favLight" rel="shortcut icon" href="/img/evar-single-light.png" media="(prefers-color-scheme: light)" />
 * 	 <FixFavicon />
 */
export default function FixFavicon(props: {
	lightSrc: string,
	darkSrc: string,
}) {
	const { prefersLight } = useTheme();

	useEffect(() => {
		const favicon = document.getElementById("favicon") as HTMLLinkElement;

		console.log("CHECK");
		if (prefersLight === undefined) return;

		if (prefersLight) {
			console.log("Change to light theme favicon");
			// path is correct, the favicon itself is dark!
			favicon.href = props.lightSrc;
		} else {
			console.log("Change to dark theme favicon");
			// path is correct, the favicon itself is light!
			favicon.href = props.darkSrc;
		}
		console.info("FixFavicon: DONE");
	}, [prefersLight]);

	return <></>;
}