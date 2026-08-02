"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Media, toMediaSources } from "./media";
import style from "./shiftdown.module.css";

type DemoMediaProps = {
	/**
	 * What to play: one clip, or several to play one after another.
	 * While it is empty a reserved-space placeholder is rendered instead – see README.md.
	 */
	media?: Media;
	/** What the clip shows. Placeholder caption now, accessible label once the clip exists. */
	description: string;
	/** Reserved before anything loads, so the page never shifts */
	aspectRatio?: string;
	/** Fill the positioned parent instead of reserving an aspect ratio – used by the hero */
	fill?: boolean;
	/** What the slot will hold, which is what the placeholder announces */
	kind?: "clip" | "still" | "screenshot";
	/**
	 * How a playlist advances: in the order it is written in `media.ts`, or shuffled.
	 * Ignored when the slot holds a single clip.
	 */
	order?: "defined" | "random";
};

/** Fisher-Yates. Returns a new array; the caller decides when it is safe to swap one in. */
function shuffled(items: number[]): number[] {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	return next;
}

/**
 * A silent, looping demo clip – or a playlist of them.
 *
 * Motion is started from an effect rather than the `autoplay` attribute: that way
 * `prefers-reduced-motion` is honoured on the first frame instead of after it, and the
 * poster stays put with a play control for anyone who asked for less movement.
 */
export default function DemoMedia({
	media,
	description,
	aspectRatio = "16 / 9",
	fill = false,
	kind = "clip",
	order = "defined",
}: DemoMediaProps) {
	const t = useTranslations("Products.shiftdown.media");
	const videoRef = useRef<HTMLVideoElement>(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	const sources = useMemo(() => toMediaSources(media), [media]);
	// What the playlist is keyed on. The paths, not the array: a parent that builds a fresh
	// array on every render would otherwise restart the effect below on every render.
	const playlistKey = sources.map(one => one.src).join("|");

	// Indices into `sources`, in the order they will play. Identity to begin with: shuffling
	// during render would make the server send one clip and the client expect another.
	const [playlist, setPlaylist] = useState<number[]>(() => sources.map((_, i) => i));
	const [position, setPosition] = useState(0);

	useEffect(() => {
		const count = playlistKey ? playlistKey.split("|").length : 0;
		const identity = Array.from({ length: count }, (_, i) => i);
		setPlaylist(order == "random" && count > 1 ? shuffled(identity) : identity);
		setPosition(0);
	}, [playlistKey, order]);

	const current = sources[playlist[position] ?? 0];
	const src = current?.src;

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

	/** One clip finished. Move to the next, reshuffling each time round so a cycle is not fixed. */
	function playNext() {
		if (position + 1 < playlist.length) {
			setPosition(position + 1);
			return;
		}

		if (order == "random" && playlist.length > 1) {
			const last = playlist[playlist.length - 1];
			const next = shuffled(playlist);
			// Wrapping onto the clip that just played would look like a stutter, not a shuffle
			if (next[0] == last) [next[0], next[1]] = [next[1], next[0]];
			setPlaylist(next);
		}
		setPosition(0);
	}

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
			// Remounts on change, so the new clip starts from its first frame rather than
			// carrying the previous one's playback position
			key={src}
			src={src}
			poster={current?.poster}
			aria-label={description}
			controls={prefersReducedMotion}
			// A playlist must not loop, or `ended` never fires and it stays on the first clip
			loop={sources.length == 1}
			onEnded={sources.length > 1 ? playNext : undefined}
			muted
			playsInline
			preload="metadata"
		/>
	</div>;
}
