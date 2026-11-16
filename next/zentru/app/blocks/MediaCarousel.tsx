"use client";

import Image, { getImageProps } from "next/image";
import { CSSProperties, useEffect, useRef } from "react";
import style from "./blocks.module.css";

export type MediaItem = {
	/** Path under /public. `.mp4`, `.webm` and `.mov` play as video, anything else shows as an image */
	src: string,
	/** What it shows – the image's alt text, or the video's label */
	alt: string,
	/** For a video: the frame shown before it plays, and all a reduced-motion visitor sees until they press play */
	poster?: string,
	/** For an image: the version drawn for dark mode – a screenshot of a light UI would glare otherwise */
	darkSrc?: string,
	/** The file's size in pixels. The first slide's sets the carousel's proportions, so it is shown uncropped; without it, 16:10 */
	width?: number,
	height?: number,
};

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

const sizes = "(max-width: 730px) 90vw, 560px";

/**
 * An image with a dark-mode version. The browser picks between them by the colour scheme, the same
 * media query the theme's tokens follow – no script, so nothing flashes from one to the other.
 */
function ThemedImage({ src, darkSrc, alt }: { src: string, darkSrc: string, alt: string }) {
	const { props: { srcSet: dark } } = getImageProps({ src: darkSrc, alt, fill: true, sizes });
	const { props: { srcSet: light, ...rest } } = getImageProps({ src, alt, fill: true, sizes });

	return <picture>
		<source media="(prefers-color-scheme: dark)" srcSet={dark} sizes={sizes} />
		<img {...rest} srcSet={light} alt={alt} />
	</picture>;
}

/**
 * Images and videos in a strip, one in view at a time.
 *
 * The strip is a scroll-snap track, so swiping, trackpads and the keyboard move it natively; the
 * buttons only scroll it. Nothing here is React state: which slide is showing, and which video is
 * playing, change nothing in the markup, so rendering for them would be work for no repaint.
 */
export default function MediaCarousel({ items, label, previousLabel, nextLabel }: {
	items: MediaItem[],
	/** Names the carousel for screen readers – the case it belongs to */
	label: string,
	previousLabel: string,
	nextLabel: string,
}) {
	const trackRef = useRef<HTMLUListElement>(null);

	// A video plays while it is visible and only then – one slid out of the track counts as out of
	// view, since the observer clips to the track. A decoding video costs the same seen or not.
	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const videos = [...track.querySelectorAll("video")];
		if (videos.length == 0) return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const visible = new Set<Element>();

		function sync() {
			for (const video of videos) {
				// No motion for anyone who asked for less of it: controls instead, so playing is their choice
				video.controls = reduceMotion.matches;

				if (!visible.has(video)) video.pause();
				else if (!reduceMotion.matches) video.play().catch(() => { /* autoplay refused – the poster stays */ });
			}
		}

		const observer = new IntersectionObserver(entries => {
			for (const entry of entries) {
				if (entry.isIntersecting) visible.add(entry.target);
				else visible.delete(entry.target);
			}
			sync();
		}, { threshold: 0.6 });

		videos.forEach(video => observer.observe(video));
		reduceMotion.addEventListener("change", sync);
		sync();

		return () => {
			observer.disconnect();
			reduceMotion.removeEventListener("change", sync);
		};
	}, [items]);

	/** One slide on or back, wrapping at either end so neither button is ever dead */
	function step(direction: 1 | -1) {
		const track = trackRef.current;
		if (!track) return;

		const width = track.clientWidth;
		const last = track.scrollWidth - width;
		let target = track.scrollLeft + direction * width;
		const wraps = target > last + 1 || target < -1;
		if (target > last + 1) target = 0;
		else if (target < -1) target = last;

		// A wrap jumps: gliding back would sweep across every slide between, and start – and fetch –
		// each video it passes only to stop it again
		const smooth = !wraps && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		track.scrollTo({ left: target, behavior: smooth ? "smooth" : "auto" });
	}

	if (items.length == 0) return null;
	const several = items.length > 1;
	// Every slide shares one frame, so the strip doesn't change height as it moves
	const { width, height } = items[0];
	const ratio = width && height ? { "--ratio": `${width} / ${height}` } as CSSProperties : undefined;

	return <div className={style.carousel} role="region" aria-roledescription="carousel" aria-label={label}>
		{/* Focusable when it scrolls, so the arrow keys can move it */}
		<ul ref={trackRef} className={style.carouselTrack} style={ratio} tabIndex={several ? 0 : undefined}>
			{items.map((item, index) => <li
				key={item.src}
				className={style.carouselSlide}
				aria-roledescription="slide"
				aria-label={`${index + 1} / ${items.length}`}
			>
				{isVideo(item.src)
					? <video src={item.src} poster={item.poster} aria-label={item.alt} muted loop playsInline preload="none" />
					: item.darkSrc
						? <ThemedImage src={item.src} darkSrc={item.darkSrc} alt={item.alt} />
						: <Image src={item.src} alt={item.alt} fill sizes={sizes} />}
			</li>)}
		</ul>
		{several && <div className={style.carouselButtons}>
			<button type="button" className={style.carouselButton} onClick={() => step(-1)} aria-label={previousLabel}>
				<span aria-hidden>‹</span>
			</button>
			<button type="button" className={style.carouselButton} onClick={() => step(1)} aria-label={nextLabel}>
				<span aria-hidden>›</span>
			</button>
		</div>}
	</div>;
}
