"use client";

import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";

const milestones = [25, 50, 75, 100];

/**
 * Reports `scroll_depth` once per milestone per page view. Renders nothing.
 *
 * Google Analytics' own scroll event only fires at 90%, which says nothing about where on a
 * long page people stop. Measured on scroll only, so a screen tall enough to show the whole
 * page doesn't count as having read it.
 */
export default function ScrollDepth({ page }: { page: string }) {
	useEffect(() => {
		const reached = new Set<number>();
		let frame = 0;

		function measure() {
			frame = 0;
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			const percent = scrollable <= 0 ? 100 : window.scrollY / scrollable * 100;

			for (const milestone of milestones) {
				// A pixel short of the bottom is the bottom
				if (reached.has(milestone) || percent < milestone - 1) continue;
				reached.add(milestone);
				trackEvent("scroll_depth", { page, percent: milestone });
			}

			if (reached.size == milestones.length) window.removeEventListener("scroll", onScroll);
		}

		function onScroll() {
			if (frame == 0) frame = requestAnimationFrame(measure);
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(frame);
		};
	}, [page]);

	return null;
}
