"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import style from "./shiftdown.module.css";

type DemoMediaProps = {
	/**
	 * Path to the clip, e.g. "/img/shiftdown/hero.mp4".
	 * While it is undefined a reserved-space placeholder is rendered instead – see README.md.
	 */
	src?: string;
	poster?: string;
	/** What the clip shows. Placeholder caption now, accessible label once the clip exists. */
	description: string;
	/** Reserved before anything loads, so the page never shifts */
	aspectRatio?: string;
	/** Fill the positioned parent instead of reserving an aspect ratio – used by the hero panes */
	fill?: boolean;
	/** What the slot will hold, which is what the placeholder announces */
	kind?: "clip" | "still" | "screenshot";
};

/**
 * A silent, looping demo clip.
 *
 * Motion is started from an effect rather than the `autoplay` attribute: that way
 * `prefers-reduced-motion` is honoured on the first frame instead of after it, and the
 * poster stays put with a play control for anyone who asked for less movement.
 */
export default function DemoMedia({
	src,
	poster,
	description,
	aspectRatio = "16 / 9",
	fill = false,
	kind = "clip",
}: DemoMediaProps) {
	const t = useTranslations("Products.shiftdown.media");
	const videoRef = useRef<HTMLVideoElement>(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");

		function apply() {
			setPrefersReducedMotion(query.matches);

			const video = videoRef.current;
			if (!video) return;

			if (query.matches) video.pause();
			else video.play().catch(() => { /* autoplay refused – the poster stays, which is fine */ });
		}

		apply();
		query.addEventListener("change", apply);
		return () => query.removeEventListener("change", apply);
	}, [src]);

	const className = `${style.media} ${fill ? style.mediaFill : ""}`;
	const sizing = fill ? undefined : { aspectRatio };

	if (!src) {
		return <div className={className} style={sizing}>
			<div className={style.placeholder}>
				<span className={style.placeholderLabel}>{t(kind)}</span>
				<p className={style.placeholderCaption}>{description}</p>
			</div>
		</div>;
	}

	// Most slots are clips, but the Accessibility one is a screenshot
	if (!/\.(mp4|webm|mov)$/i.test(src)) {
		return <div className={className} style={sizing}>
			<img src={src} alt={description} />
		</div>;
	}

	return <div className={className} style={sizing}>
		<video
			ref={videoRef}
			src={src}
			poster={poster}
			aria-label={description}
			controls={prefersReducedMotion}
			loop
			muted
			playsInline
			preload="metadata"
		/>
	</div>;
}
