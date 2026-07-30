"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { readSource, withSource } from "./acquisitionSource";
import { track } from "./analytics";
import { Platform, platformLabels, shiftDown } from "./config";
import style from "./shiftdown.module.css";

declare global {
	interface Navigator {
		/** Chromium only, and not in the DOM lib yet */
		userAgentData?: { platform?: string };
	}
}

type DownloadCtaProps = {
	/** Where on the page this CTA sits – reported as `source` on the analytics event */
	placement: string;
	/** Also render the buy button */
	full?: boolean;
	/** Trial micro-copy, next to the link to the other platform */
	note?: string;
	/** One row, for the sticky bar: the other platform moves next to the button instead of below it */
	compact?: boolean;
};

/**
 * Which installer to lead with.
 *
 * `userAgentData.platform` is the accurate answer where it exists (Chromium); everywhere
 * else the user agent string still carries the OS. Anything we don't recognise – Linux, a
 * phone, a locked-down browser – returns null and both platforms stay equally available.
 */
function detectPlatform(): Platform | null {
	const platformHint = navigator.userAgentData?.platform ?? navigator.userAgent;

	if (/mac/i.test(platformHint)) return "macos";
	if (/win/i.test(platformHint)) return "windows";
	return null;
}

/**
 * Download and buy buttons.
 *
 * The platform is detected only to decide which one leads – the other one stays visible
 * underneath, because detection is a convenience and not a gate.
 */
export default function DownloadCta({ placement, full = false, note, compact = false }: DownloadCtaProps) {
	const t = useTranslations("Products.shiftdown.cta");
	const [platform, setPlatform] = useState<Platform | null>(null);
	const [source, setSource] = useState<string | null>(null);

	useEffect(() => {
		setPlatform(detectPlatform());
		setSource(readSource());
	}, []);

	// Before the effect runs we don't know the platform yet: lead with macOS, unlabelled.
	const primary = platform ?? "macos";
	const secondary: Platform = primary == "macos" ? "windows" : "macos";

	function downloadHref(target: Platform) {
		const url = shiftDown.downloads[target];
		return source == null ? url : withSource(url, source);
	}

	function onDownload(target: Platform) {
		track("download_click", { platform: target, src: source, source: placement });
	}

	const checkoutHref = source == null ? shiftDown.checkoutUrl : withSource(shiftDown.checkoutUrl, source);

	const otherPlatformLink = <a
		className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
		href={downloadHref(secondary)}
		onClick={() => onDownload(secondary)}
	>
		{t("alsoFor", { platform: platformLabels[secondary] })}
	</a>;

	return <div>
		<div className={style.ctaRow}>
			<a
				className="buttonPrimary hover"
				href={downloadHref(primary)}
				onClick={() => onDownload(primary)}
			>
				{platform
					? t("downloadFor", { platform: platformLabels[primary] })
					: t("download")}
			</a>
			{full && <a
				className="buttonSecondary hover"
				href={checkoutHref}
				onClick={() => track("buy_click", { src: source, source: placement })}
			>
				{t("buy", { price: shiftDown.price })}
			</a>}
			{compact && <span className={style.ctaNote}>{otherPlatformLink}</span>}
		</div>
		{!compact && <p className={`${style.ctaNote} tMarg`}>
			{otherPlatformLink}
			{note && <> · {note}</>}
		</p>}
	</div>;
}
