'use client'

import { defaultHtml } from '@/lib/localization';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function DynamicQuote() {
	const [isQuoteHovered, setIsQuoteHovered] = useState<boolean>(false);
	const tMain = useTranslations("Main");

	// TODO: add link to youtube video
	const quoteer = isQuoteHovered ? "we" : "Phillip Stark";

	return <>
		<p className="s1 e8 ph-e5 rUnitPad">
			{tMain.rich("weBelieve", {
				...defaultHtml,
				quoteer,
			})}
		</p>
		<p className="Quote s1 e6 ph-e5" onMouseEnter={() => setIsQuoteHovered(true)} onMouseLeave={() => setIsQuoteHovered(false)}>
			<span style={{ opacity: isQuoteHovered ? 0 : 1, transition: "opacity var(--liquid) 1.5s" }}>
				“{tMain("timelessStark")}”
				</span>
			<span style={{ opacity: isQuoteHovered ? 1 : 0, transition: "opacity var(--liquid) 1.5s" }}>
				“{tMain("timelessWe")}”
			</span>
		</p>
	</>
}