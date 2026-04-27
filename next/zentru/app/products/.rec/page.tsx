import Section from "@/app/Section";
import style from "./early-access.module.css";

import ThemedImage from "@/app/ThemedImage";
import DarkProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone - dark.svg";
import ProjectViewImageNeutral from "@/public/img/rec/ProjectView - neutral - iPhone.svg";
import DarkProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone - dark.svg";
import ProjectViewImageRecordingAudio from "@/public/img/rec/ProjectView - recording audio - iPhone.svg";
import Link from "next/link";

export default function RecPage() {
	// const containerStyle: CSSProperties = {
	// 	display: "grid",
	// 	gridTemplateRows: "minmax(70px, 3fr) 1fr minmax(10%, 0.3fr)",
	// 	height: "calc(100vh - var(--nav-height) - (min(5vh, 30px)))",
	// 	maxHeight: "600px",
	// 	minHeight: "300px"
	// };

	const recTitle = <h1 className="light vCenter hCenter" style={{
		gridArea: "title",
		// width: "100%",
		// textAlign: "center"
	}}>.rec</h1>;

	const text = <div className={style.text} style={{ gridArea: "text", maxWidth: "400px" }}>
		<p className="tBigPad lUnitPad" style={{}}>
			Music creation for you.
		</p>
		<p className="tPad lUnitPad" style={{}}>
			Never miss a line in your head, while driving on the road or taking a walk in the park.
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

	// return <>
	// 	<section id="rec-head" className="vGrid" style={containerStyle}>
	// 		<div id="rec-head-background" className={styles.recHeadBackground}>
	// 			{/* <div style={{ gridArea: "rec", display: "grid", maxWidth: "min(45vw, 400px)" }}> */}
	// 			<div style={{ gridArea: "text" }}>
	// 				<p className="tBigPad lUnitPad" style={{}}>
	// 					Music creation for you.
	// 				</p>
	// 				<p className="tPad lUnitPad" style={{}}>
	// 					Never miss a line in your head, while driving on the road or taking a walk in the park.
	// 				</p>
	// 			</div>
	// 			<h1 className="tPad light vCenter hCenter" style={{
	// 				// position: "relative",
	// 				// left: "calc(25vw + 5%)"
	// 				gridArea: "title",
	// 				width: "100%",
	// 				textAlign: "center"
	// 			}}>.rec</h1>
	// 			<ThemedImage
	// 				lightSrc={ProjectViewImageRecordingAudio}
	// 				darkSrc={DarkProjectViewImageRecordingAudio}
	// 				width="250" height="500"
	// 				alt=""
	// 				style={{
	// 					position: "relative",
	// 					// bottom: "-10%",
	// 					justifySelf: "start",
	// 					left: "calc(5vw - 20px)",
	// 					gridArea: "rec"
	// 				}}
	// 			/>
	// 			{/* </div> */}
	// 			<ThemedImage
	// 				lightSrc={ProjectViewImageNeutral}
	// 				darkSrc={DarkProjectViewImageNeutral}
	// 				width="350" height="600"
	// 				alt=""
	// 				style={{
	// 					// maxHeight: "min(600px, 75%)",
	// 					// right: "10px",
	// 					// left: "max(50px, 7vw)",
	// 					position: "relative",
	// 					gridArea: "neut",
	// 					justifySelf: "center",
	// 					placeSelf: "center",
	// 					// top: "min(5vw, 65px)",
	// 				}}
	// 			/>
	// 		</div>
	// 		<h1 className="light vCenter hCenter" style={{ opacity: 0 }}>.rec</h1>
	// 		<Link className="vCenter hCenter buttonSecondary hover" href={"./.rec/early-access"}>
	// 			Early Access
	// 		</Link>
	// 	</section>
	// </>;
}

export function RecSection() {
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
		Never forget another melody in your head.
		{/* TODO: wording! */}<br />
		Like your trusty voice-recorder, but supercharged.<br />
		Record your melody, add bass, drums and maybe some pads.
		There – you got yourself a songstarter, now jump into the DAW, drag over the stems and you are ready to start the song.
	</Section>;
}