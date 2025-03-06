import { useEffect, useState } from "react";

export default function useTheme() {
	const [prefersLight, setPrefersLight] = useState(true);
	useEffect(() => {
		if (window.matchMedia) {
			// dark mode
			setPrefersLight(!(window.matchMedia('(prefers-color-scheme: dark)').matches ?? false));

			function _handle(event) {
				setPrefersLight(!event.matches);
			}
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', _handle);
			return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', _handle);
		}
	});

	return {
		prefersLight,
		prefersDark: !prefersLight,
	}
}