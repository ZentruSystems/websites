import { useEffect, useState } from "react";

export default function useResponsiveSize() {
	const [currentWidth, setCurrentWidth] = useState();

	useEffect(() => {
		function handleResize() {
			setCurrentWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize)
	});

	return {
		isMobile: currentWidth <= 480,
		isTablet: currentWidth > 480 && currentWidth <= 730,
		isDesktop: currentWidth > 730,
		currentWidth,
	}
}