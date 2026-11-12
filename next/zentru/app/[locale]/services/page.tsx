import { getTranslations } from "next-intl/server";
import Link from "next/link";
import style from "./services.module.css";

export default async function Page() {
	const tFields = await getTranslations("Fields");

	return <>
		<section className="vFillView hGrid3 ph-hGrid1">
			<div className="vPad il-grid" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="/project-management" className="vCenter hCenter"><h1 className={`light ${style.tileTitle}`}>{tFields("projectBootstrap.name")}</h1></Link>
				<div className="hCenter vBottom">
					<p className={style.tileText}>{tFields("projectBootstrap.subline")}</p>
				</div>
			</div>
			<div className="vPad il-grid bg-l5" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="/digital-experiences" className="vCenter hCenter"><h1 className={`light ${style.tileTitle}`}>{tFields("digitalExperiences.name")}</h1></Link>
				<div className="hCenter vBottom">
					<p className={style.tileText}>{tFields("digitalExperiences.subline")}</p>
				</div>
			</div>
			<div className="vPad il-grid" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="/design-agencies" className="vCenter hCenter"><h1 className={`light ${style.tileTitle}`}>{tFields("designAgencies.name")}</h1></Link>
				<div className="hCenter vBottom">
					<p className={style.tileText}>{tFields("designAgencies.subline")}</p>
				</div>
			</div>
			{/* <div className="vCenter vPad vFill hFill il-grid ph-tUnitPad bg-l5" style={{ gridAutoRows: "1fr 1fr 1fr" }}>
				<div />
				<Link href="https://evar.space" className="il-grid vUnitPad vCenter hCenter layoutHCenter">
					<img className="invertIfLightTheme" style={{ height: 50, }} src="/img/EvarTextLogo.svg" alt="Evar – Games" />
				</Link>
				<h4 className="hCenter vBottom">{tFields("evar.subline")}</h4>
			</div> */}
		</section>
	</>

}