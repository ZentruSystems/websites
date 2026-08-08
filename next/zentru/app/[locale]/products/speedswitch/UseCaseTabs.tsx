"use client";

import { defaultHtml } from "@/lib/localization";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import DemoMedia from "./DemoMedia";
import { useCaseIds } from "./content";
import { mediaFor } from "./media";
import style from "./speedswitch.module.css";

/**
 * The use case selector.
 *
 * Renders as grid children of the surrounding section, so the tabs and the panel keep the
 * site grid: row 1 belongs to the section intro, row 2 is the tab list, row 3 the panel.
 */
export default function UseCaseTabs() {
	const t = useTranslations("Products.speedswitch.useCases");
	const [selectedIndex, setSelectedIndex] = useState(0);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const selected = useCaseIds[selectedIndex];
	const solvesHtml = { ...defaultHtml, ul: (chunks: React.ReactNode) => <ul className={style.solvesList}>{chunks}</ul> };

	function selectRelative(offset: number) {
		const next = (selectedIndex + offset + useCaseIds.length) % useCaseIds.length;
		setSelectedIndex(next);
		tabRefs.current[next]?.focus();
	}

	return <>
		<div
			role="tablist"
			aria-label={t("tabsLabel")}
			className={`s1 e12 ph-s1 ph-e5 gr-s2 ${style.tabList}`}
			onKeyDown={event => {
				if (event.key == "ArrowRight") selectRelative(1);
				else if (event.key == "ArrowLeft") selectRelative(-1);
				else return;

				event.preventDefault();
			}}
		>
			{useCaseIds.map((id, index) => <button
				key={id}
				ref={element => { tabRefs.current[index] = element; }}
				role="tab"
				id={`usecase-tab-${id}`}
				aria-selected={index == selectedIndex}
				aria-controls={`usecase-panel-${id}`}
				tabIndex={index == selectedIndex ? 0 : -1}
				className={`${style.tab} ${index == selectedIndex ? style.tabSelected : ""}`}
				onClick={() => setSelectedIndex(index)}
			>
				{t(`${id}.label`)}
			</button>)}
		</div>

		<div
			role="tabpanel"
			id={`usecase-panel-${selected}`}
			aria-labelledby={`usecase-tab-${selected}`}
			className="s1 e6 ph-s1 ph-e5 gr-s3 paragraphSpaceLarger"
		>
			<h3 className={style.subHeadline}>{t(`${selected}.headline`)}</h3>
			{t.rich(`${selected}.body`, defaultHtml)}
			{t.rich(`${selected}.solves`, solvesHtml)}
		</div>

		<div className={`s7 e12 ph-s1 ph-e5 gr-s3 ph-gr-s4 ${style.mediaStack}`}>
			<DemoMedia
				media={mediaFor(`usecase-${selected}-demo`)}
				description={t(`${selected}.demo`)}
			/>
			<DemoMedia
				media={mediaFor(`usecase-${selected}-still`)}
				description={t(`${selected}.still`)}
				aspectRatio="16 / 10"
				kind="still"
			/>
		</div>
	</>;
}
