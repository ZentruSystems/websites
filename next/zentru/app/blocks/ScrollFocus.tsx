"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import style from "./blocks.module.css";

/**
 * Slows its content down as the page scrolls past it, and publishes `--focus` – how far through
 * that stretch the reader is, counted in items – so CSS can bring one item forward after another.
 *
 * A track that reserves extra scrolling with a sticky child inside it, which is how a product site
 * builds this: the wheel is never intercepted, the section simply takes up more of the page.
 * Intercepting the wheel would fight anyone on a trackpad, a keyboard or a screen reader. The
 * stylesheet then drifts the pin upward across that stretch, so it keeps moving, slowly, rather
 * than stopping dead and taking the screen away from what is around it.
 *
 * `--focus` is fractional, so neighbours crossfade, and is written straight to the element's style:
 * one property per frame, no re-render.
 */
export default function ScrollFocus(props: { count: number, children: ReactNode }) {
	const trackRef = useRef<HTMLDivElement>(null);
	const pinRef = useRef<HTMLDivElement>(null);
	const count = props.count;

	useEffect(() => {
		const track = trackRef.current;
		const pin = pinRef.current;
		if (!track || !pin) return;

		// Below 1100px the steps are a stack of their own, and nothing is pinned
		const stacked = window.matchMedia("screen and (max-width: 1100px)");
		const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");

		let frame = 0;
		let listening = false;

		const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

		const update = () => {
			frame = 0;

			/*
				Measured from the track alone. The pin carries a transform that this very number
				drives, so reading the pin's rect back would feed the drift into its own input and
				run away; its layout height and its sticky offset are the only things taken from it,
				and neither moves.
			*/
			const trackBox = track.getBoundingClientRect();
			const stickyTop = parseFloat(getComputedStyle(pin).top) || 0;
			const travel = trackBox.height - pin.offsetHeight;

			// The slow lane: 0 as the pin takes hold, 1 as it lets go again
			const lane = travel > 0 ? clamp((stickyTop - trackBox.top) / travel) : 1;

			/*
				The sweep is not the lane. Every pixel of lane is empty page between the section and
				what follows it, so the lane stays short – but the steps then have too little of it
				to light up one at a time. So the sweep starts while the section is still coming up
				the screen and finishes with the lane: long enough to read, without the empty space.
			*/
			const entry = window.innerHeight * 0.555;
			const sweep = clamp((entry - trackBox.top) / (entry - stickyTop + travel));

			track.style.setProperty("--progress", `${lane}`);
			// Past the last step before the sweep ends, so the final one is lit and settled rather
			// than still arriving as the section lets go
			track.style.setProperty("--focus", `${sweep * (count + 0.75)}`);
		};

		const onScroll = () => {
			frame ||= requestAnimationFrame(update);
		};

		const listen = (on: boolean) => {
			if (on == listening) return;
			listening = on;

			if (on) {
				window.addEventListener("scroll", onScroll, { passive: true });
				window.addEventListener("resize", onScroll);
				update();
			} else {
				window.removeEventListener("scroll", onScroll);
				window.removeEventListener("resize", onScroll);
			}
		};

		// Nothing is measured while the section is off screen, or while the effect doesn't apply.
		// The last entry, not the first: a batch holds every crossing since the previous callback.
		const observer = new IntersectionObserver(entries => listen(entries[entries.length - 1].isIntersecting));

		const apply = () => {
			if (stacked.matches || stillness.matches) {
				observer.disconnect();
				listen(false);
				// Back to "not running", which the stylesheet reads as every item lit and unshifted
				track.style.removeProperty("--focus");
				track.style.removeProperty("--progress");
			} else {
				observer.observe(track);
			}
		};

		apply();
		stacked.addEventListener("change", apply);
		stillness.addEventListener("change", apply);

		return () => {
			stacked.removeEventListener("change", apply);
			stillness.removeEventListener("change", apply);
			observer.disconnect();
			listen(false);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [count]);

	return <div ref={trackRef} className={style.scrollTrack} style={{ "--count": count } as CSSProperties}>
		<div ref={pinRef} className={style.scrollPin}>{props.children}</div>
		{/* Empty on purpose: it is the scrolling the pin is given to stick through */}
		<div className={style.scrollSpacer} aria-hidden />
	</div>;
}
