import HiddenButton from "common/components/hiddenButton";

export default function EvarPage() {
	return <main className="hGrid bPad">
		<div className="s0 e13 ph-e6 tPad ph-tPadResp hGrid hFill">
			<div id="debris-card" className="s1 e12 ph-s0 ph-e6 ph-hUnitMarg allRoundBig ph-allRoundBigResp bg-l2 Container pulsingShadow" style={{ boxShadow: "#ffffff3d 0px 0px 45px 0px" }}>
				<div style={{ maxHeight: "75vh" }}>
					<img className="hFill allRoundBig ph-allRoundBigResp" src="./img/debris_screenshot_01.png" />
				</div>
				<div className="tUnitPad Pad ph-PadResp fg-white-fix bg-d4-fixed" style={{backdropFilter: "saturate(140%) brightness(90%) blur(60px)", borderRadius: "var(--borderRadiusBigResponsive)", marginTop: "calc(-2 * var(--borderRadiusBigResponsive))", zIndex:0}}>
					<h2>Get In — save Mars</h2>
					<p>
						After many satellites were sent to orbit, the inevitable mass-crash started, and is spreading like a wildfire.
						Malcom has to master many critical situations to stay alive to save the station, himself and probably more.<br />
						<br />
						Experience this multi-level story unravel beneath you and get to know the truth behind the commanding voice.
					</p>
				</div>
				<div className="flex layoutHCenter">
					<iframe
						id="steamWidget"
						className="Pad hfill ph-hfill"
						src="https://store.steampowered.com/widget/3732370/?utm_source=evarhomepage"
						frameBorder="0"
						style={{ height: "calc(2 * var(--normalPadding) + 190px)", minWidth: "440px", width: "min(800px, 100%)" }}></iframe>
				</div>
				<div className="hGrid" style={{paddingBottom: "10px"}}>
					<HiddenButton
						className="s1 e12 ph-s1 ph-e5 hShrink hCenter hoverZoom fg-l1 hover-fg-l4"
						style={{ padding: "max(1%, 8px)", fontSize: "0.8em" }}
						href="https://evar.space/PressKit">
						Press Kit
					</HiddenButton>
				</div>
			</div>
		</div>
	</main>;
}