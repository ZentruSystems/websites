"use client";

import { useEffect, useRef, useState } from "react";
import { readSource } from "../products/transmission/acquisitionSource";
import { track } from "../products/transmission/analytics";
import { Platform, transmission } from "../products/transmission/config";
import copy from "../products/transmission/copy";
import pageStyle from "../products/transmission/transmission.module.css";
import style from "./welcome.module.css";

/** Version of the claim contract. The app repo's handoff pins this to 1 – both halves must agree. */
const claimContractVersion = "1";

function claimUrl(source: string) {
	return `transmission://claim?src=${encodeURIComponent(source)}&v=${claimContractVersion}`;
}

export default function WelcomeClient({ platform, appVersion }: {
	platform: Platform | null,
	appVersion: string | null,
}) {
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
	const steps = isWindows ? copy.welcome.steps.windows : copy.welcome.steps.macos;
	const intro = isWindows ? copy.welcome.intro.windows : copy.welcome.intro.macos;

	return <section className="vhGrid vPad minV100">
		<div className="s1 e9 ph-s1 ph-e5 vCenter">
			<p className={pageStyle.eyebrow}>{transmission.name}</p>
			<h1 className={`light ${style.title}`}>{copy.welcome.title}</h1>
			<p className={`${style.intro} bMarg`}>{intro}</p>

			<ol className={style.steps}>
				{steps.map(step => <li key={step.title}>
					<div>
						<h2 className={style.stepTitle}>{step.title}</h2>
						<p>{step.text}</p>
					</div>
				</li>)}
			</ol>

			<p className={`${style.note} tMarg`}>{copy.welcome.reassurance}</p>
			<p className={style.note}>{copy.welcome.trialNote}</p>

			{claimHref && <p className={`${style.note} tMarg`}>
				<a
					className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
					href={claimHref}
				>
					{copy.welcome.manualClaim}
				</a>
			</p>}
		</div>
	</section>;
}
