"use client";

import { defaultHtml } from "@/lib/localization";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import DemoMedia from "../DemoMedia";
import MediaSection from "../MediaSection";
import { readSource } from "../acquisitionSource";
import { track } from "../analytics";
import { Platform, speedSwitch } from "../config";
import { welcomeStepKeys } from "../content";
import { mediaFor } from "../media";
import pageStyle from "../speedswitch.module.css";
import style from "./welcome.module.css";

/** Version of the claim contract. The app repo's handoff pins this to 1 – both halves must agree. */
const claimContractVersion = "1";

function claimUrl(source: string) {
	return `speedswitch://claim?src=${encodeURIComponent(source)}&v=${claimContractVersion}`;
}

export default function WelcomeClient({ platform, appVersion }: {
	platform: Platform | null,
	appVersion: string | null,
}) {
	const t = useTranslations("Products.speedswitch.welcome");
	const tPermission = useTranslations("Products.speedswitch.permission");
	const [claimHref, setClaimHref] = useState<string | null>(null);
	const hasClaimed = useRef(false);

	useEffect(() => {
		// The claim is a one-shot: it hands the token to the app and must not fire twice
		if (hasClaimed.current) return;
		hasClaimed.current = true;

		const source = readSource();

		// Fires whether or not the scheme redirect below succeeds – on its own it already
		// gives download → install conversion per channel.
		track("install_confirmed", { src: source, platform: platform ?? "unknown", app_version: appVersion });

		const url = claimUrl(source);
		setClaimHref(url);
		window.location.href = url;
	}, [platform, appVersion]);

	// Without a platform we show the macOS path: it is the one with a permission prompt waiting.
	const isWindows = platform == "windows";
	const steps = isWindows ? welcomeStepKeys.windows : welcomeStepKeys.macos;

	return <>
		<section className="vhGrid vPad">
			<div className="s1 e9 ph-s1 ph-e5 vCenter">
				<p className={pageStyle.eyebrow}>{speedSwitch.name}</p>
				<h1 className={`light ${style.title}`}>{t("title")}</h1>
				<p className={`${style.intro} bMarg`}>{t(isWindows ? "intro.windows" : "intro.macos")}</p>

				<ol className={style.steps}>
					{steps.map(key => <li key={key}>
						<div>
							<h2 className={style.stepTitle}>{t(`steps.${key}.title`)}</h2>
							<p>{t(`steps.${key}.text`)}</p>
						</div>
					</li>)}
				</ol>

				{/* On macOS the permission section below says this at length, so it would only repeat */}
				{isWindows && <p className={`${style.note} tMarg`}>{t("reassurance")}</p>}
				<p className={`${style.note} tMarg`}>{t("trialNote", { days: `${speedSwitch.trialDays}` })}</p>

				{claimHref && <p className={`${style.note} tMarg`}>
					<a
						className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
						href={claimHref}
					>
						{t("manualClaim")}
					</a>
				</p>}
			</div>
		</section>

		{/*
			The long version of step one, with the screenshot. It belongs here rather than on the
			landing page: this is the last thing people read before macOS puts the prompt in front
			of them. Windows has no such prompt, so it does not get the section.
		*/}
		{!isWindows && <MediaSection
			className="bg-l5"
			title={tPermission("title")}
			media={<DemoMedia
				media={mediaFor("accessibility-permission")}
				description={tPermission("screenshot")}
				aspectRatio="4 / 3"
				kind="screenshot"
			/>}
		>
			{tPermission.rich("body", defaultHtml)}
		</MediaSection>}
	</>;
}
