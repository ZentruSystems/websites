'use client'

import { ReactElement, useState } from 'react';

export default function HoverText(props: {
	default: string | ReactElement,
	onHover: string | ReactElement,
}) {
	const [isQuoteHovered, setIsQuoteHovered] = useState<boolean>(false);

	return <span onMouseEnter={() => setIsQuoteHovered(true)} onMouseLeave={() => setIsQuoteHovered(false)}>
		<span style={{ opacity: isQuoteHovered ? 1 : 0, transition: "opacity var(--liquid) 1.5s", position: 'absolute' }}>
			{props.onHover}
		</span>
		<span style={{ opacity: isQuoteHovered ? 0 : 1, transition: "opacity var(--liquid) 1.5s" }}>
			{props.default}
		</span>
	</span>
}