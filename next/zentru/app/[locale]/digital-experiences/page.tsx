import { defaultHtml } from "@/lib/localization";
import HorizontalDivider from "common/components/horizontalDivider/HorizontalDivider";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { CSSProperties } from "react";
import HoverText from "../../HoverText";
import style from "./digital-experiences.module.css";

/** The Tape Player reference, in the order shown. The sizes set each image's share of the row. */
const tapePlayerImages = [
	{ key: "player", src: "/img/digital-experiences/tape-player.webp", width: 1018, height: 1254 },
	{ key: "fx", src: "/img/digital-experiences/tape-player-fx.webp", width: 1936, height: 1648 },
	{ key: "fxPlatinum", src: "/img/digital-experiences/tape-player-fx-platinum.webp", width: 1936, height: 1648 },
] as const;

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
		<section className="vBigPad hBigPad">
			<h2 className="normal foreground">{tDXP("reference.headline")}</h2>
			{tDXP.rich("reference.text", defaultHtml)}
			<div className={style.references}>
				{tapePlayerImages.map(image => <div key={image.key} style={{ "--aspect": image.width / image.height } as CSSProperties}>
					<Image
						src={image.src}
						alt={tDXP(`reference.images.${image.key}`)}
						width={image.width}
						height={image.height}
						sizes="(max-width: 730px) 90vw, 40vw"
					/>
				</div>)}
			</div>
		</section>
	</>;
}