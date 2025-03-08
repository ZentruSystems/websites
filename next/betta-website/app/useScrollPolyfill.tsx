'use client';

import { useEffect, useState } from 'react';

export type UseScrollPolyfillResult = 'polyfillNotNeeded' | 'polyfillApplied' | 'polyfillApplyingFailed';

/**
 * A custom hook that loads the ScrollTimeline polyfill and upgrades animations
 * on elements with the `data-animated="true"` attribute.
 * @returns {UseScrollPolyfillResult} Result status.
 *
 * @remarks
 * - Hook applies the polyfill only if
 * - The polyfill is dynamically imported from the `scroll-timeline-polyfill` package.
 * - The hook uses `requestAnimationFrame` to ensure animations are upgraded in the next frame.
 * - Animations that are in the `finished` or `idle` state are reset and played again.
 */
export default function useScrollPolyfill(): UseScrollPolyfillResult {
	const [status, setStatus] = useState<UseScrollPolyfillResult>('polyfillNotNeeded');

	useEffect(() => {
		const loadPolyfill = async () => {
			try {
				// Don't enable polyfill if browser claims support
				if (CSS.supports("animation-timeline: --works"))
					return;

				// // Relative path is the only way scroll-timeline-polyfill/dist/scroll-timeline.js import works for me. Anyway, make sure that you pass correct path.
				// await import('scroll-timeline' as any); // no TS declaration file, so as any

				// Regular NextJS check that we're not on server-side
				if (typeof window === 'undefined')
					return;

				if ('ScrollTimeline' in window) { // If polyfill applied
					console.log('ScrollTimeline is now available. Upgrading animations...');

					// Find all elements marked with data attribute "data-animated"
					const elements = document.querySelectorAll<HTMLElement>('[data-animated="true"]');
					// console.log('elements found:', elements.length);

					let animationsToUpgrade: Animation[] = [];

					elements.forEach((el) => {
						// Get all animations related to element
						const animations = el.getAnimations?.() || [];
						// console.log(`animations found(${k}):`, animations.length);
						animationsToUpgrade = animationsToUpgrade.concat(animations);
					});

					if (animationsToUpgrade.length > 0) {
						requestAnimationFrame(() => {
							animationsToUpgrade.forEach((anim) => {
								// console.log('Upgrading animation:', anim);
								if (anim.playState === 'finished' || anim.playState === 'idle') {
									anim.cancel(); // Reset the animation
								}
								anim.play();
							});
						});
					}

					setStatus('polyfillApplied');
					return;
				} else {
					throw new Error('Failed to import the scroll-timeline-polyfill: window.ScrollTimeline is still not available');
				}
			} catch (error) {
			// 	CodeBud.captureEvent('Failed to load the ScrollTimeline polyfill', { error, where: 'useScrollTimelinePolyfill hook' });
			// 	Bugsnag.leaveBreadcrumb('Failed to load the ScrollTimeline polyfill', { error });
			// 	Bugsnag.notify('useScrollTimelinePolyfill failure');
				console.error('Failed to load the ScrollTimeline polyfill:', error);
				setStatus('polyfillApplyingFailed');
				return;
			}
		};

		loadPolyfill();
	}, []);

	return status;
};