import Section from "@/app/Section";
import style from "./early-access.module.css";

import ThemedImage from "@/app/ThemedImage";
import { defaultHtml } from "@/lib/localization";
import DarkProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone - dark.svg";
import ProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone.svg";
import DarkProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone - dark.svg";
import ProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone.svg";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function RecPage() {
	const tRec = await getTranslations("Products.rec");

	const recTitle = <h1 className="light vCenter hCenter" style={{
		gridArea: "title",
		// width: "100%",
		// textAlign: "center"
	}}>.rec</h1>;

	const text = <div className={style.text} style={{ gridArea: "text", maxWidth: "400px" }}>
		<p className="tBigPad lUnitPad" style={{}}>
			{tRec("whatItIs")}
		</p>
		<p className="tPad lUnitPad" style={{}}>
			{tRec("reason")}
		</p>
	</div>;

	const signupButton = <Link
		className="vCenter hCenter buttonSecondary hover"
		href={"./.rec/early-access"}
		style={{gridArea: "btn"}}
	>
		Early Access
	</Link>

	const recordingImage = <ThemedImage
		lightSrc={ProjectViewImageRecordingAudio}
		darkSrc={DarkProjectViewImageRecordingAudio}
		width="350" height="600"
		alt=""
		className={style.recImage}
		style={{
			gridArea: "rec",
		}}
	/>;
	const neutralImage = <ThemedImage
		lightSrc={ProjectViewImageNeutral}
		darkSrc={DarkProjectViewImageNeutral}
		width="350" height="600"
		alt=""
		className={style.neutralImage}
		style={{
			gridArea: "neut",
			zIndex: -1,
			// maxHeight: "min(600px, 75%)",
			// right: "10px",
			right: "7vw",
			position: "relative",
			// justifySelf: "center",
			// placeSelf: "center",
			// top: "min(5vw, 65px)",

		}}
	/>;


	return <section className={style.recHeadSection}>
		{text}
		{recTitle}
		{signupButton}
		{recordingImage}
		{neutralImage}
	</section>
}

export async function RecSection() {
	const tRec = await getTranslations("Products.rec");

	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title=".rec"
		aside={<>
			<ThemedImage
				className="ph-NoFloat RightFloat From15vw To0 hUnitPad"
				style={{ marginBlock: 10, height: "500px" }}
				lightSrc={ProjectViewImageNeutral}
				darkSrc={DarkProjectViewImageNeutral}
				alt="no friction recording" />
		</>}
		link="products/.rec"
	>
		{tRec.rich("sectionSummary", defaultHtml)}
	</Section>;
}