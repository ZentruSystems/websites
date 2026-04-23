import Section from "@/app/Section";
import { CSSProperties } from "react";

export default function RecPage() {
	const containerStyle:CSSProperties = {
		display:"grid",
		gridTemplateRows: "minmax(70px, 3fr) 1fr minmax(10%, 0.5fr)",
		maxHeight: "calc(100vh - var(--nav-height) - (min(5vh, 30px)))",
		backgroundImage: "TODO: rec head image", // TODO: rec head image
	};

	return <>
		<section id="rec-head" className="vFillView vGrid" style={containerStyle}>
			<h1 className="light vCenter hCenter">.rec</h1>
			<button className="vCenter hCenter primary hover">
				Early Access
			</button>
		</section>
	</>;
}

export function RecSection() {
	return <Section
		title=".rec"
			aside={<>
				<img
					className="More2 RightFloat hUnitPad tPad"
					style={{ marginLeft: "30%", top: "15%" }}
					src="/img/rec.png"
					alt="no friction recording" />
			</>}
			link="products/.rec"
		>
			Never forget another melody in your head.
			{/* TODO: wording! */}<br/>
			Like your trusty voice-recorder, but supercharged.<br/>
			Record your melody, add bass, drums and maybe some pads.
			There – you got yourself a songstarter, now jump into the DAW, drag over the stems and you are ready to start the song.
		</Section>;
}