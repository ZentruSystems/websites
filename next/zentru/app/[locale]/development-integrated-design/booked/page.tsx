import Band from "@/app/blocks/Band";
import style from "@/app/blocks/blocks.module.css";
import Hero from "@/app/blocks/Hero";
import { defaultHtml } from "@/lib/localization";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import BookingConfirmed from "../../project-management/BookingConfirmed";
import { designAgencies } from "../config";

/**
 * Where Cal.com sends someone after booking this page's call (config.ts, `bookedPath`) – it is
 * what counts a booking as completed. Kept out of search results: it only makes sense right after
 * booking. The words are Project Management's, apart from what to prepare and the way back.
 */
export async function generateMetadata({ params }: PageProps<"/[locale]/development-integrated-design/booked">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale: locale as Locale, namespace: "Fields.projectBootstrap.booked" });

	return {
		title: t("title"),
		robots: { index: false, follow: false },
	};
}

export default async function BookedPage({ params }: PageProps<"/[locale]/development-integrated-design/booked">) {
	const { locale } = await params;
	setRequestLocale(locale as Locale);
	const t = await getTranslations("Fields.designAgencies.booked");
	const tShared = await getTranslations("Fields.projectBootstrap.booked");

	// A div: `.navPad > div` grows to fill the screen, which keeps the footer at the bottom of a short page
	return <div>
		<main lang={locale}>
			<BookingConfirmed />
			<Hero title={tShared("title")}>{tShared("intro")}</Hero>
			<Band title={tShared("prepareTitle")}>
				<div className={style.cardText}>{t.rich("prepare", defaultHtml)}</div>
				<div>
					<p>{tShared("change")}</p>
					<p className="tMarg">
						<Link className="hover-fg decorationC-l4 hoverUnderlineAnimation underline" href={designAgencies.path}>
							{t("back")}
						</Link>
					</p>
				</div>
			</Band>
		</main>
	</div>;
}
