"use client";

import useTheme from "./useTheme";

/**
 * Renders `light` per default, otherwise `dark` only if `prefers-color-scheme: dark` matches
 */
export default function Themed(props: {
	dark: React.ReactElement,
	light: React.ReactElement,
}) {
	return useTheme().prefersLight ? props.light : props.dark;
}