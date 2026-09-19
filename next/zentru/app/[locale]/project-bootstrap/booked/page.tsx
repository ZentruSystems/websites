import Band from "@/app/blocks/Band";
import style from "@/app/blocks/blocks.module.css";
import Hero from "@/app/blocks/Hero";
import { defaultHtml } from "@/lib/localization";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import BookingConfirmed from "../BookingConfirmed";
import { projectBootstrap } from "../config";

/**
 * Where Cal.com sends someone after they book (config.ts, `bookedPath`) – it is what counts a
 * booking as completed. Kept out of search results: it only makes sense right after booking.
 */
export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Fields.projectBootstrap.booked");

	return {
		title: t("title"),
		robots: { index: false, follow: false },
	};
}

export default async function BookedPage() {
	const t = await getTranslations("Fields.projectBootstrap.booked");
	const locale = await getLocale();

	// A div: `.navPad > div` grows to fill the screen, which keeps the footer at the bottom of a short page
	return <div>
		<main lang={locale}>
			<BookingConfirmed />
			<Hero title={t("title")}>{t("intro")}</Hero>
			<Band title={t("prepareTitle")}>
				<div className={style.cardText}>{t.rich("prepare", defaultHtml)}</div>
				<div>
					<p>{t("change")}</p>
					<p className="tMarg">
						<Link className="hover-fg decorationC-l4 hoverUnderlineAnimation underline" href={projectBootstrap.path}>
							{t("back")}
						</Link>
					</p>
				</div>
			</Band>
		</main>
	</div>;
}
