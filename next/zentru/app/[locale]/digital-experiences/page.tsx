import { defaultHtml } from "@/lib/localization";
import HorizontalDivider from "common/components/horizontalDivider/HorizontalDivider";
import { getTranslations } from "next-intl/server";
import HoverText from "../../HoverText";

/**
 * This page should show, tell and showcase that we do design consultation for
 * UI (App, Web, Game), Audio and Music
 */
export default async function DigitalExperiences() {
	const tDXP = await getTranslations("Fields.digitalExperiences");

	return <>
		<section className="vFillView vBigPad hBigPad" style={{
			display: "unset",
			// maxHeight: "calc(100% - var(--nav-Height) - 30px)"
		}}>
			<h2 className="normal foreground">{tDXP("headline-p1")}<HoverText
				default={tDXP("headline-p2/1")}
				onHover={tDXP("headline-p2/2")} /> {tDXP.rich("headline-p3", {
					span: (chunks) => <span className="bold decorationC-fg hoverUnderlineAnimation">{chunks}</span>
				})}</h2>
			{tDXP.rich("text1", defaultHtml)}
		</section>
		<HorizontalDivider color="var(--l4)" />
		<section className="vBigPad hBigPad">
			<h2 className="normal foreground">{tDXP("ui.headline")}</h2>
			{tDXP.rich("ui.text", defaultHtml)}
		</section>
		<section className="vBigPad hBigPad">
			<h2 className="normal foreground">{tDXP("sonicDesign.headline")}</h2>
			{tDXP.rich("sonicDesign.text", defaultHtml)}
		</section>
	</>;
}