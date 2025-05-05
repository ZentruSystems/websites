'use client'

import { useState } from 'react';

export default function DynamicQuote() {
	const [isQuoteHovered, setIsQuoteHovered] = useState<boolean>(false);

	// TODO: add link to youtube video
	const quoteer = isQuoteHovered ? "we" : "Phillip Stark";

	return <>
		<p className="s1 e8 ph-e5 rUnitPad">
			We believe that whatever we do, we should do it really good.<br />
			We believe this, because we strive for the thoughtfulness and sustainable design of the past.<br />
			<br />
			Just think of all the timeless designs we got – that’s what we love.<br />
			<span>As {quoteer} put it</span>
		</p>
		<p className="Quote s1 e6 ph-e5" onMouseEnter={() => setIsQuoteHovered(true)} onMouseLeave={() => setIsQuoteHovered(false)}>
			<span style={{ opacity: isQuoteHovered ? 0 : 1, transition: "opacity var(--liquid) 1.5s" }}>
				“Timeless design is the only design that can be sustainable and the only design we should focus on”
				</span>
			<span style={{ opacity: isQuoteHovered ? 1 : 0, transition: "opacity var(--liquid) 1.5s" }}>
				“No unnecessary features, no compromises—just well-executed systems that do exactly what they should, nothing more, nothing less.”
			</span>
		</p>
	</>
}