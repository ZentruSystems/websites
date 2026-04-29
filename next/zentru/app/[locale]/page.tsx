import { defaultHtml } from "@/lib/localization";
import VerticalDivider from "common/components/verticalDivider/VerticalDivider";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import DynamicQuote from "../DynamicQuote";
import SideBoard from "../SideBoard";

export default async function Page() {
	const t = await getTranslations();
	const tMain = await getTranslations("Main");

	return <main>
			<section className="Head bg-l5 hGrid">
				<div className="vCenter vBigPad ph-vPad s1 e7 ph-e5 vFill vSpaceing">
					<h2 className="light noMargin">{tMain("because1") ?? "Because we don’t like how Companies treat their Customers."}</h2>
					<h2 className="light noMargin">{tMain("because2") ?? "Because we don’t like bad design."}</h2>
					<h2 className="light noMargin">{tMain.rich("because3", {
						span: (chunks) => <span className="bold mutedPrimaryAccent">{chunks}</span>,
					})}</h2>
				</div>
				<div className="s8 e13 flex ph-s1 ph-e5 ph-flex-vert">
					<VerticalDivider className="vAltPad rGap lGap"/>
					<div className="vCenter vPad ph-tUnitPad vFill hFill il-grid layoutVBottom">
						<Link href="https://evar.space" className="il-grid vUnitPad layoutVBottom layoutHCenter">
							<img className="invertIfLightTheme" style={{ height: 50, }} src="/img/EvarTextLogo.svg" alt="Evar – Games" />
						</Link>
						<h4 className="hCenter vBottom">{tMain("checkOutAllOther")}</h4>
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
			<section className="Sustainability">

			</section>
		</main >
}