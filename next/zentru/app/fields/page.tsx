import Link from "next/link";

export default function Page() {
	return <>
		<section className="vFillView hGrid2 ph-hGrid1">
			<div className="vCenter vPad vFill hFill il-grid ph-tUnitPad bg-l5" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="https://evar.space" className="il-grid vUnitPad vCenter hCenter layoutHCenter">
					<img className="invertIfLightTheme" style={{ height: 50, }} src="./img/EvarTextLogo.svg" alt="Evar – Games" />
				</Link>
				<h4 className="hCenter vBottom">Games, space games</h4>
			</div>
			<div className="vPad il-grid" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="/digital-experiences" className="vCenter hCenter"><h1 className="light">Digital Experiences</h1></Link>
				<div className="hCenter vBottom">
					<p>Useful, beautiful, emotional – an experience</p>
				</div>
			</div>
		</section>
		<div style={{ width: "100%", height: 1, backgroundColor: "var(--foregroundColor)", paddingTop: 1 }} />
		<section className="vFillView">
			<p className="hCenter vCenter hFill vPad hPad">
				In the future you will see all our fields here.
			</p>
		</section>
	</>
}