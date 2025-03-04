import { useEffect, useState } from "react";

export default function useTheme() {
	const [prefersLight, setPrefersLight] = useState(true);
	useEffect(() => {
		if (window.matchMedia) {
			// dark mode
			setPrefersLight(!(window.matchMedia('(prefers-color-scheme: dark)').matches ?? false));

			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
				setPrefersLight(!event.matches);
			});
		}
	});

	return {
		prefersLight,
		prefersDark: !prefersLight,
	}
}