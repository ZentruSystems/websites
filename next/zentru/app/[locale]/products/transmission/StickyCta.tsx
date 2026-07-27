"use client";

import { useEffect, useState } from "react";
import DownloadCta from "./DownloadCta";
import style from "./transmission.module.css";

/**
 * Download bar for the long middle of the page.
 *
 * It stays out of the way while a section that already carries the call to action is on
 * screen – the hero at the top, the final CTA at the bottom – and fades in between them.
 */
export default function StickyCta({ hideWhileVisible }: { hideWhileVisible: string[] }) {
	const [isVisible, setIsVisible] = useState(false);
	const watchedIds = hideWhileVisible.join(",");

	useEffect(() => {
		const watched = watchedIds
			.split(",")
			.map(id => document.getElementById(id))
			.filter(element => element != null);

		if (watched.length == 0) return;

		const onScreen = new Set<Element>();
		const observer = new IntersectionObserver(entries => {
			for (const entry of entries) {
				if (entry.isIntersecting) onScreen.add(entry.target);
				else onScreen.delete(entry.target);
			}

			setIsVisible(onScreen.size == 0);
		});

		watched.forEach(element => observer.observe(element));
		return () => observer.disconnect();
	}, [watchedIds]);

	return <div
		className={`glass allRound ${style.stickyBar} ${isVisible ? style.stickyBarVisible : ""}`}
		inert={!isVisible}
	>
		<DownloadCta placement="sticky" compact />
	</div>;
}
