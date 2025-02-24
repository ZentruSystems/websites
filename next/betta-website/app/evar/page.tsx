
export default function EvarPage() {
	return <main className="hGrid bPad">
		<div className="s0 e13 tPad hGrid hFill">
			<div className="s1 e12 allRoundBig bg-l2 Container">
				<div style={{height: 486}}>
					<img className="hFill allRoundBig" src="./img/debris_screenshot.png" style={{ position: 'absolute', top: -14, clipPath: "rect(145px 100% 630px 0px round var(--borderRadiusBig))", width: "calc(100% - var(--normalPadding) *2)"}} />
				</div>
				<div className="tUnitPad Pad fg-white-bl">
					<h2>Get In — save Mars</h2>
					<p>
						After many satellites were sent to orbit, the inevitable mass-crash started, and is spreading like a wildfire.
						Malcom has to master many critical situations to stay alive to save the station and save the colony.<br />
						<br />
						Experience this multi-level story unravel beneath you and get to know one of the big secrets of the colony’s funding.<br />
						Many people say things have to change.
					</p>
					<img className="hBigPad" src="./img/Horizontal Line.svg" />
				</div>
			</div>
		</div>
	</main>;
}