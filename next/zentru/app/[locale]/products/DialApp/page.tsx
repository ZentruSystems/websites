"use client";

import Section from "@/app/Section";
import style from "./dialApp.module.css";

import ThemedImage from "@/app/ThemedImage";
import { defaultHtml } from "@/lib/localization";
import DialAppRadialMenuDark from "@/public/img/DialApp/Dial-Dark-currentWindow.png";
import DialAppRadialMenuDarkSelected from "@/public/img/DialApp/Dial-Dark-selected.png";
import DialAppRadialMenuLight from "@/public/img/DialApp/Dial-Light-currentWindow.png";
import DialAppRadialMenuLightSelected from "@/public/img/DialApp/Dial-Light-selected.png";
import DarkProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone - dark.svg";
import ProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone.svg";
import DarkProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone - dark.svg";
import ProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const DarkProjectViewImageNeutralPath = "/img/rec/ProjectView - neutral - iPhone - dark.svg";
const ProjectViewImageNeutralPath = "/img/rec/ProjectView - neutral - iPhone.svg";

export default function DialAppPage() {
	const tDialApp = useTranslations("Products.DialApp");

	const [isDialHovered, setIsDialHovered] = useState<Boolean>(false);

	const dialAppTitle = <div className="vCenter hCenter" style={{ gridArea: "title", position: "relative" }}>
		<h1 className="light" style={{ lineHeight: 1 }}>
			DialApp
		</h1>
		<ThemedImage
			style={{
				maskImage: "radial-gradient(circle 50px at center, transparent 100%, black 100%)",
				maskRepeat: "no-repeat"
			}}
			loading="eager"
			lightSrc={isDialHovered ? DialAppRadialMenuLightSelected : DialAppRadialMenuLight}
			darkSrc={isDialHovered ? DialAppRadialMenuDarkSelected : DialAppRadialMenuDark}
			alt="no friction window switching on macOS"
			onMouseEnter={e => setIsDialHovered(true)} onMouseLeave={e => setIsDialHovered(false)}
		/>
	</div>;

	const text = <div className={style.text} style={{ gridArea: "text", maxWidth: "400px" }}>
		<p>
			{tDialApp("headsection.whatItIs")}
		</p>
		<p className="tPad bUnitPad" style={{}}>
			{tDialApp("headsection.reason")}
		</p>
	</div>;

	const signupButton = <Link
		className="vCenter hCenter buttonSecondary hover"
		href={"./DialApp/early-access"}
		style={{ gridArea: "btn" }}
	>
		Early Access
	</Link>

	const recordingImage = <ThemedImage
		loading="eager"
		lightSrc={ProjectViewImageRecordingAudio}
		darkSrc={DarkProjectViewImageRecordingAudio}
		width="750" height="1000"
		alt="project view of rec while an audio track is recording"
		className={style.recImage}
		style={{ gridArea: "rec" }}
	/>;
	const neutralImage = <ThemedImage
		loading="eager"
		lightSrc={ProjectViewImageNeutral}
		darkSrc={DarkProjectViewImageNeutral}
		width="750" height="1000"
		alt="project view of rec"
		className={style.neutralImage}
		style={{
			gridArea: "neut",
			zIndex: -1,
			// right: "7vw",
			// position: "relative",
		}}
	/>;


	return <>
		<section className={style.headSection} style={{ maxWidth: "min(calc(500px + 40vw), 100vw)", width: "100%", alignSelf: "center" }}>
			{dialAppTitle}
			{signupButton}
			{/* {recordingImage}
			{neutralImage} */}
			{text}
		</section>
		<Section title={tDialApp("section2.title")}
			className="bg-l5 paragraphSpaceLarger"
		>
			{tDialApp.rich("section2.content", defaultHtml)}
		</Section>
		<Section title={tDialApp("section3.title")}
			className="bg-l6 paragraphSpaceLarger"
			isStringAsChild={false}
		>
			{tDialApp.rich("section3.content", defaultHtml)}
		</Section>
	</>
}

export function DialAppSection() {
	const tDialApp = useTranslations("Products.DialApp");

	return <Section
		noPadAside
		asideContainerStyle={{ placeContent: "center" }}
		title="DialApp"
		aside={<>
			<ThemedImage
				loading="eager"
				className="ph-NoFloat RightFloat From15vw To0"
				style={{ marginBlock: 10, height: "400px", width: "400px", aspectRatio: 1 }}
				lightSrc={DialAppRadialMenuLightSelected}
				darkSrc={DialAppRadialMenuDarkSelected}
				alt="no friction window switching on macOS"
			/>
		</>}
		link="products/DialApp"
	>
		{tDialApp.rich("sectionSummary", defaultHtml)}
	</Section>;
}