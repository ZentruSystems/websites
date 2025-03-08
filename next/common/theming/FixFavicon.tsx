"use client"

import { useEffect, useRef } from "react";
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
export default function FixFavicon() {
	const { prefersLight } = useTheme();
	const favLight = useRef<HTMLElement>(null);
	const favDark = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!favLight.current) favLight.current = document.getElementById("favLight");
		if (!favDark.current) favDark.current = document.getElementById("favDark");

		if (prefersLight) {
			console.log("Change to light theme favicon");
			document.head.removeChild(favDark.current!);
			favDark.current!.remove();
			console.log(`parent of dark${favDark.current!.parentNode}`);
			document.head.append(favLight.current!);
		} else {
			console.log("Change to dark theme favicon");
			document.head.removeChild(favLight.current!);
			favLight.current!.remove();
			console.log(`parent of light ${favLight.current!.parentNode}`);
			document.head.append(favDark.current!);
		}
	}, [prefersLight, favLight.current, favDark.current]);

	return <></>;
}