
export default function EvarPage() {
	return <main className="hGrid bPad">
		<div className="s0 e13 ph-e6 tPad ph-tPadResp hGrid hFill">
			<div id="debris-card" className="s1 e12 ph-s0 ph-e6 ph-hUnitMarg allRoundBig ph-allRoundBigResp bg-l2 Container pulsingShadow" style={{ boxShadow: "#ffffff3d 0px 0px 45px 0px" }}>
				<div style={{ maxHeight: "75vh" }}>
					<img className="hFill allRoundBig ph-allRoundBigResp" src="./img/debris_screenshot.png" />
				</div>
				<div className="tUnitPad Pad ph-PadResp fg-white-fix bg-d4-fixed">
					<h2>Get In — save Mars</h2>
					<p>
						After many satellites were sent to orbit, the inevitable mass-crash started, and is spreading like a wildfire.
						Malcom has to master many critical situations to stay alive to save the station and save the colony.<br />
						<br />
						Experience this multi-level story unravel beneath you and get to know one of the big secrets of the colony’s funding.<br />
						Many people say things have to change.
					</p>
				</div>
				<div className="flex layoutHCenter">
					<iframe
						className="Pad ph-hfill"
						src="https://store.steampowered.com/widget/3732370/?utm_source=evar-homepage&utm_medium=widget"
						frameBorder="0"
						style={{ height: "calc(2 * var(--normalPadding) + 190px)", minWidth: "490px" }}></iframe>
				</div>
			</div>
		</div>
	</main>;
}