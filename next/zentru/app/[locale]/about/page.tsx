import DynamicQuote from "@/app/DynamicQuote";
import SideBoard from "@/app/SideBoard";
import { defaultHtml } from "@/lib/localization";
import VerticalDivider from "common/components/verticalDivider/VerticalDivider";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Page() {
	const t = await getTranslations();
	const tMain = await getTranslations("Main");

	return <main>
			<section className="Head bg-l5 hGrid">
				<div className="vCenter vBigPad ph-vPad s1 e7 ph-e5 vFill vSpaceing">
					<h2 className="light noMargin" style={{letterSpacing: "-2.5%"}}>{tMain("because1") ?? "Because I don’t like how Companies treat their Customers."}</h2>
					<h2 className="light noMargin" style={{letterSpacing: "-2.5%"}}>{tMain("because2") ?? "Because I don’t like bad design."}</h2>
					<h2 className="light noMargin" style={{letterSpacing: "-2.5%"}}>{tMain.rich("because3", {
						span: (chunks) => <span className="bold mutedPrimaryAccent" style={{letterSpacing: "0%"}}>{chunks}</span>,
					})}</h2>
				</div>
				<div className="s8 e13 flex ph-s1 ph-e5 ph-flex-vert">
					<VerticalDivider className="vAltPad rGap lGap"/>
					<div className="vCenter vPad ph-tUnitPad vFill hFill il-grid layoutVBottom">
						<Link href="/project-management" className="il-grid vUnitPad layoutVBottom layoutHCenter">
							{/* Empty alt: the name is right below it as text */}
							<img className="invertIfLightTheme" style={{ height: 50, }} src="/img/project-management/ProjectManagementMark.svg" alt="" />
							<h2 className="light noMargin tUnitPad">{t("Fields.projectBootstrap.name")}</h2>
						</Link>
						<h4 className="hCenter vBottom">{t("Fields.projectBootstrap.subline")}</h4>
					</div>
				</div>
			</section >
			<section className="Really vhGrid">
				<h2 className="s1 e5 ph-e5 tPad">{t("reallyGood")??"Really Good"}</h2>
				<DynamicQuote/>
				<p className="s1 e8 ph-e3 bPad ph-vUnitPad ph-rGap UnitPad ph-vCenter">
					{tMain.rich("weFocusOn", defaultHtml)}
				</p>
				<SideBoard
					src="/img/OldProducts.svg"
					alt="Thoughtfulness from a lost era"
				/>
			</section>
			{/*
				Linked from the footer as `/about#about`. The nav is fixed over the top of the page, so
				`scroll-padding-top` in app/style.css is what keeps the heading out from under it.
			*/}
			{/* <section id="about" className="About vhGrid">
				<h2 className="s1 e5 ph-e5 tPad">{tMain("about.title")}</h2>
				<div className="s1 e8 ph-e5 paragraphSpaceLarger">
					{tMain.rich("about.body", defaultHtml)}
				</div>
				<p className="s1 e8 ph-e5 tPad">{tMain("about.findMe")}</p>
				<div className="s1 e8 ph-e5 flex">
					<p className="vCenter">{tMain("about.mineLabel")}</p>
					<SocialLinks account="personal" linkedIn github style={{ placeContent: "start" }} />
				</div>
				<div className="s1 e8 ph-e5 flex">
					<p className="vCenter">{tMain("about.zentruLabel")}</p>
					<SocialLinks linkedIn style={{ placeContent: "start" }} />
				</div>
				<div className="s1 e8 ph-e5 bPad paragraphSpaceLarger">
					{tMain.rich("about.closing", defaultHtml)}
				</div>
			</section> */}
			{/* <section className="Sustainability">

			</section> */}
		</main >
}