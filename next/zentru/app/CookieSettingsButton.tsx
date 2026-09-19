"use client";

import { openConsentSettings } from "@/lib/consent";
import style from "./CookieConsent.module.css";

/** Reopens the consent banner – the footer's way to change the choice later */
export default function CookieSettingsButton({ children }: { children: React.ReactNode }) {
	return <button type="button" className={style.settingsButton} onClick={openConsentSettings}>
		{children}
	</button>;
}
