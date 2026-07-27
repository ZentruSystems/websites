"use client";

import { useRef, useState } from "react";
import DemoMedia from "./DemoMedia";
import { useCases } from "./copy";
import { mediaFor } from "./media";
import style from "./transmission.module.css";

/**
 * The use case selector.
 *
 * Renders as grid children of the surrounding section, so the tabs and the panel keep the
 * site grid: row 1 belongs to the section intro, row 2 is the tab list, row 3 the panel.
 */
export default function UseCaseTabs() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const selected = useCases[selectedIndex];

	function selectRelative(offset: number) {
		const next = (selectedIndex + offset + useCases.length) % useCases.length;
		setSelectedIndex(next);
		tabRefs.current[next]?.focus();
	}

	return <>
		<div
			role="tablist"
			aria-label="Use cases"
			className={`s1 e12 ph-s1 ph-e5 gr-s2 ${style.tabList}`}
			onKeyDown={event => {
				if (event.key == "ArrowRight") selectRelative(1);
				else if (event.key == "ArrowLeft") selectRelative(-1);
				else return;

				event.preventDefault();
			}}
		>
			{useCases.map((useCase, index) => <button
				key={useCase.id}
				ref={element => { tabRefs.current[index] = element; }}
				role="tab"
				id={`usecase-tab-${useCase.id}`}
				aria-selected={index == selectedIndex}
				aria-controls={`usecase-panel-${useCase.id}`}
				tabIndex={index == selectedIndex ? 0 : -1}
				className={`${style.tab} ${index == selectedIndex ? style.tabSelected : ""}`}
				onClick={() => setSelectedIndex(index)}
			>
				{useCase.label}
			</button>)}
		</div>

		<div
			role="tabpanel"
			id={`usecase-panel-${selected.id}`}
			aria-labelledby={`usecase-tab-${selected.id}`}
			className="s1 e6 ph-s1 ph-e5 gr-s3 paragraphSpaceLarger"
		>
			<h3 className={style.subHeadline}>{selected.headline}</h3>
			{selected.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
			<ul className={style.solvesList}>
				{selected.solves.map(item => <li key={item}>{item}</li>)}
			</ul>
		</div>

		<div className={`s7 e12 ph-s1 ph-e5 gr-s3 ph-gr-s4 vCenter ${style.mediaStack}`}>
			<DemoMedia
				{...mediaFor(`usecase-${selected.id}-demo`)}
				description={selected.demo}
			/>
			<DemoMedia
				{...mediaFor(`usecase-${selected.id}-still`)}
				description={selected.still}
				aspectRatio="16 / 10"
				placeholderLabel="Still — coming soon"
			/>
		</div>
	</>;
}
