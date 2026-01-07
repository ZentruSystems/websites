import Link from "next/link";

export default function Page() {
	return <>
		<section className="" style={{ height: "calc(100vh - var(--nav-height))" }}>
			<div className="vCenter vPad ph-tUnitPad vFill hFill il-grid">
				<Link href="https://evar.space" className="il-grid vUnitPad layoutVBottom layoutHCenter">
					<img className="invertIfLightTheme" style={{ height: 50, }} src="./img/EvarTextLogo.svg" alt="Evar – Games" />
				</Link>
				<h4 className="hCenter vBottom">Games, space games</h4>
			</div>
		</section>
		<div style={{ width: "100%", height: 1, backgroundColor: "var(--foregroundColor)", paddingTop: 1 }} />
		<section style={{ height: "calc(100vh - var(--nav-height))" }}>
			<p className="hCenter vCenter hFill vPad hPad">
				In the future you will see all our fields here.
			</p>
		</section>
	</>
}