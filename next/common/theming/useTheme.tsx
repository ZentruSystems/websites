'use client';

import { useEffect, useState } from "react";

export default function useTheme() {
	const [prefersLight, setPrefersLight] = useState<boolean|undefined>(undefined);
	useEffect(() => {
		if (window.matchMedia) {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
			console.log(prefersDark);

			if (prefersDark === undefined || prefersDark === null) {
				setPrefersLight(true); // fallback to lighttheme
				return;
			}

			// dark mode
			setPrefersLight(!(prefersDark.matches ?? false));

			function _handle(event: MediaQueryListEvent) {
				setPrefersLight(!event.matches);
			}

			if (!prefersDark.addEventListener) {
				console.warn("useTheme: using fallback for old browsers");
				prefersDark.addListener(_handle);
				return () => prefersDark.removeListener(_handle);
			}

			prefersDark.addEventListener('change', _handle);
			return () => prefersDark.removeEventListener('change', _handle);
		}
	}, []);

	return {
		prefersLight,
		prefersDark: !prefersLight,
	}
}