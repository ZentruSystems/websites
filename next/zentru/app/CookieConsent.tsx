"use client";

import { Consent, OPEN_EVENT, readConsent, subscribeConsent, writeConsent } from "@/lib/consent";
import { GoogleAnalytics } from "common";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import style from "./CookieConsent.module.css";

/** On the server and during hydration the choice is unknown: it lives in the browser */
const unknownOnServer = () => undefined;

/** Google's documented opt-out flag – stops a tag that is already loaded from sending anything */
function setGoogleAnalyticsDisabled(gaId: string, isDisabled: boolean): void {
	(window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = isDisabled;
}

/** The cookies GA set, on this host and on the parent domain it may have set them on */
function deleteGoogleAnalyticsCookies(): void {
	const names = document.cookie
		.split(";")
		.map(cookie => cookie.split("=")[0].trim())
		.filter(name => name == "_ga" || name.startsWith("_ga_"));
	const host = window.location.hostname;
	const domains = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];

	for (const name of names) {
		document.cookie = `${name}=; Max-Age=0; path=/`;
		for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
	}
}

/**
 * Asks before Google Analytics runs, and loads it only after "Accept".
 *
 * Vercel Web Analytics and Speed Insights are cookieless and stay outside this. The footer's
 * "Cookie settings" reopens the banner, so the choice can be changed at any time.
 */
export default function CookieConsent({ gaId }: { gaId: string }) {
	const t = useTranslations("Always.cookies");
	const consent = useSyncExternalStore<Consent | null | undefined>(subscribeConsent, readConsent, unknownOnServer);
	const [isReopened, setIsReopened] = useState(false);

	useEffect(() => {
		const reopen = () => setIsReopened(true);
		window.addEventListener(OPEN_EVENT, reopen);
		return () => window.removeEventListener(OPEN_EVENT, reopen);
	}, []);

	function choose(choice: Consent) {
		// The script can't be unloaded once it has run, so declining after accepting disables it instead
		setGoogleAnalyticsDisabled(gaId, choice == "denied");
		if (choice == "denied") deleteGoogleAnalyticsCookies();

		writeConsent(choice);
		setIsReopened(false);
	}

	const isOpen = consent === null || isReopened;

	return <>
		{consent == "granted" && <GoogleAnalytics gaId={gaId} />}
		{isOpen && <div role="region" aria-label={t("label")} className={`glass allRound ${style.banner}`}>
			<p className={style.text}>
				{t("text")}
				{" "}
				<Link className="hover-fg decorationC-l4 hoverUnderlineAnimation underline" href="/privacy-policy">
					{t("policy")}
				</Link>
			</p>
			{/* Equal weight: declining is exactly as easy as accepting */}
			<div className={style.actions}>
				<button type="button" className="secondary hover" onClick={() => choose("denied")}>{t("decline")}</button>
				<button type="button" className="primary hover" onClick={() => choose("granted")}>{t("accept")}</button>
			</div>
		</div>}
	</>;
}
