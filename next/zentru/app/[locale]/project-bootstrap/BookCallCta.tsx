"use client";

import style from "@/app/blocks/blocks.module.css";
import { trackEvent } from "@/lib/analytics";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { projectBootstrap } from "./config";

/**
 * Carries the campaign a visitor arrived with (`utm_*`) over to the booking, where Cal.com
 * records it – so a booking can be traced to its channel, not only a click.
 */
function withCampaign(url: string, search: string): string {
	try {
		const target = new URL(url);
		// The mailto fallback in config.ts has nowhere to put them
		if (target.protocol != "https:") return url;

		for (const [name, value] of new URLSearchParams(search)) {
			if (name.startsWith("utm_")) target.searchParams.set(name, value);
		}
		return target.toString();
	} catch {
		return url;
	}
}

/**
 * The page's one conversion action.
 *
 * Every placement renders this, so the words, the look and the destination are the same
 * everywhere – only `placement` differs, and it is what the click is reported with.
 */
export default function BookCallCta({ placement, large = false }: {
	/** Where on the page this sits – reported with `booking_click` */
	placement: string,
	/** For the final band, where it is the only thing left to do */
	large?: boolean,
}) {
	const t = useTranslations("Fields.projectBootstrap.cta");
	const [href, setHref] = useState<string>(projectBootstrap.bookingUrl);

	useEffect(() => {
		setHref(withCampaign(projectBootstrap.bookingUrl, window.location.search));
	}, []);

	return <a
		className={`buttonAccent buttonPrimary hover ${style.cta} ${large ? style.ctaLarge : ""}`}
		href={href}
		onClick={() => trackEvent("booking_click", { placement })}
	>
		{t("label")}
	</a>;
}
