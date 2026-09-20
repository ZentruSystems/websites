"use client";

import { useEffect } from "react";

/**
 * Lets the cards feel the pointer before it arrives: every card marked `data-lift` gets `--near`,
 * 1 under the cursor and falling to 0 at `reach`, and the stylesheet raises it by that much. The
 * card being hovered is simply the one where `--near` has reached 1, so there is no second state to
 * animate into – the whole thing is one number.
 *
 * Mounted once per page rather than wrapping each grid: the cards sit in three different blocks,
 * and one listener for all of them beats three components with a listener each.
 */
export default function PointerLift(props: { reach?: number }) {
	/** How far from a card's edge the pointer starts to pull on it */
	const reach = props.reach ?? 130;

	useEffect(() => {
		const pointing = window.matchMedia("(hover: hover)");
		const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");

		const cards = [...document.querySelectorAll<HTMLElement>("[data-lift]")];
		if (!cards.length) return;

		let frame = 0;
		let listening = false;
		let x = 0;
		let y = 0;

		const update = () => {
			frame = 0;

			for (const card of cards) {
				const box = card.getBoundingClientRect();
				// Distance to the card's edge, so anywhere inside it counts as nothing
				const gapX = Math.max(box.left - x, 0, x - box.right);
				const gapY = Math.max(box.top - y, 0, y - box.bottom);
				const near = Math.max(1 - Math.hypot(gapX, gapY) / reach, 0);

				// Rounded: three decimals is under a tenth of a pixel of lift, and short strings
				// keep this from rewriting every card's style on every frame for nothing
				const value = near.toFixed(3);
				if (card.style.getPropertyValue("--near") != value)
					card.style.setProperty("--near", value);
			}
		};

		const schedule = () => {
			frame ||= requestAnimationFrame(update);
		};

		const onMove = (event: PointerEvent) => {
			x = event.clientX;
			y = event.clientY;
			schedule();
		};

		// The cards move under a still pointer as the page scrolls, so that counts as movement too
		const listen = (on: boolean) => {
			if (on == listening) return;
			listening = on;

			if (on) {
				window.addEventListener("pointermove", onMove, { passive: true });
				window.addEventListener("scroll", schedule, { passive: true });
			} else {
				window.removeEventListener("pointermove", onMove);
				window.removeEventListener("scroll", schedule);
				for (const card of cards) card.style.removeProperty("--near");
			}
		};

		// A touch screen has no pointer to be near, and `hover` flips when a mouse is plugged in
		const apply = () => listen(pointing.matches && !stillness.matches);

		apply();
		pointing.addEventListener("change", apply);
		stillness.addEventListener("change", apply);

		return () => {
			pointing.removeEventListener("change", apply);
			stillness.removeEventListener("change", apply);
			listen(false);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [reach]);

	return null;
}
