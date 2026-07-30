import Section from "@/app/Section";
import { defaultHtml } from "@/lib/localization";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import DemoMedia from "./DemoMedia";
import DownloadCta from "./DownloadCta";
import Faq from "./Faq";
import MediaSection from "./MediaSection";
import SourceCapture from "./SourceCapture";
import StickyCta from "./StickyCta";
import UseCaseTabs from "./UseCaseTabs";
import { shiftDown } from "./config";
import { featureKeys, modeKeys } from "./content";
import { mediaFor } from "./media";
import style from "./shiftdown.module.css";

/** The sticky download bar keeps out of the way while either of these is on screen */
const heroId = "shiftdown-hero";
const finalCtaId = "shiftdown-final-cta";

/** Trial length, price and platforms appear in several messages */
const productValues = {
	days: `${shiftDown.trialDays}`,
	price: shiftDown.price,
	macOs: shiftDown.minMacOs,
	windows: shiftDown.minWindows,
};

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Products.shiftdown");

	const title = t("meta.title");
	const description = t("hero.sub");
	const url = `${shiftDown.siteUrl}${shiftDown.path}`;
	const images = { url: `${shiftDown.siteUrl}${shiftDown.ogImage}` };

	return {
		title,
		description,
		keywords: [
			"cursor precision",
			"mouse sensitivity",
			"video editing",
			"CAD",
			"pen tablet",
		],
		robots: { index: true, follow: true },
		openGraph: { title, description, type: "website", url, images },
		twitter: { card: "summary_large_image", title, description, images },
	};
}

export default function ShiftDownPage() {
	return <>
		<SourceCapture />
		<Hero />
		<UseCasesSection />
		<ProblemSection />
		<HowItWorksSection />
		<FeaturesSection />
		<PenSection />
		<PrivacySection />
		<PricingSection />
		<FaqSection />
		<FinalCtaSection />
		<StickyCta hideWhileVisible={[heroId, finalCtaId]} />
	</>;
}

/** The two clips run behind the headline: the round trip on the left, one pass on the right. */
async function Hero() {
	const t = await getTranslations("Products.shiftdown");

	return <section id={heroId} className={`vhGrid ${style.hero}`}>
		<div className={style.heroMedia} aria-hidden>
			<div className={style.heroPane}>
				<DemoMedia fill {...mediaFor("hero-round-trip")} description={t("hero.demoLeft")} />
			</div>
			<div className={style.heroPane}>
				<DemoMedia fill {...mediaFor("hero-one-pass")} description={t("hero.demoRight")} />
			</div>
			<div className={style.heroScrim} />
		</div>
		<div className={`s1 e12 ph-s1 ph-e5 vPad ${style.heroContent}`}>
			<p className={style.eyebrow}>{t("meta.title")}</p>
			<h1 className={`light ${style.heroHeadline}`}>{t("hero.headline")}</h1>
			<p className={`${style.heroSub} bMarg`}>{t("hero.sub")}</p>
			<DownloadCta placement="hero" full note={t("hero.micro", productValues)} />
		</div>
	</section>;
}

async function UseCasesSection() {
	const t = await getTranslations("Products.shiftdown.useCases");

	return <section className="vhGrid vPad bg-l5">
		<div className="s1 e12 ph-s1 ph-e5 gr-s1 bMarg">
			<h2>{t("title")}</h2>
			<p className={style.heroSub}>{t("intro")}</p>
		</div>
		<UseCaseTabs />
	</section>;
}

async function ProblemSection() {
	const t = await getTranslations("Products.shiftdown.problem");

	return <MediaSection
		title={t("title")}
		media={<DemoMedia {...mediaFor("problem")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function HowItWorksSection() {
	const t = await getTranslations("Products.shiftdown.howItWorks");

	return <section className="vhGrid vPad bg-l6">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className="s1 e7 ph-s1 ph-e5 paragraphSpaceLarger bMarg">
			{t.rich("body", defaultHtml)}
		</div>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards}`}>
			{modeKeys.map(key => <div key={key} className={`${style.card} bg-l5`}>
				<h3 className={style.subHeadline}>{t(`modes.${key}.name`)}</h3>
				<p>{t(`modes.${key}.text`)}</p>
			</div>)}
		</div>
		<p className="s1 e12 ph-s1 ph-e5 tMarg fg-l2">{t("keyLine")}</p>
	</section>;
}

async function FeaturesSection() {
	const t = await getTranslations("Products.shiftdown.features");

	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards} ${style.cardsWide}`}>
			{featureKeys.map(key => <div key={key} className={`${style.card} bg-l6`}>
				<h3 className={style.subHeadline}>{t(`items.${key}.title`)}</h3>
				<p>{t(`items.${key}.text`)}</p>
			</div>)}
		</div>
	</section>;
}

async function PenSection() {
	const t = await getTranslations("Products.shiftdown.pen");

	return <MediaSection
		title={t("title")}
		isMediaLeft
		className="bg-l5"
		media={<DemoMedia {...mediaFor("pen")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function PrivacySection() {
	const t = await getTranslations("Products.shiftdown.privacy");

	const inlineLink = "hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline";

	// Untinted: with the permission section moved to /welcome, this keeps the sections alternating
	return <Section title={t("title")} className="paragraphSpaceLarger" isStringAsChild={false}>
		<p>{t("intro")}</p>
		<p>
			{t("analyticsBeforeLink")}
			<Link className={inlineLink} href="https://aptabase.com">{t("analyticsLinkLabel")}</Link>
			{t("analyticsAfterLink")}
		</p>
		<p>
			{t("controlBeforeLink")}
			<Link className={inlineLink} href="/privacy-policy">{t("controlLinkLabel")}</Link>
			{t("controlAfterLink")}
		</p>
	</Section>;
}

async function PricingSection() {
	const t = await getTranslations("Products.shiftdown");

	return <section className="vhGrid vPad bg-l5">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("pricing.title", productValues)}</h2>
		<div className={`s1 e7 ph-s1 ph-e5 ${style.priceBox}`}>
			<p className={style.priceAnchor}>
				{t("pricing.anchor", { regular: shiftDown.regularPrice })}
			</p>
			<ul className={style.priceList}>
				<li>{t("pricing.items.trial", productValues)}</li>
				<li>{t("pricing.items.platforms", productValues)}</li>
				<li>{t("pricing.items.machines", { machines: `${shiftDown.machines}` })}</li>
				<li>{t("pricing.items.updates")}</li>
				<li>{t("pricing.items.refund", { days: `${shiftDown.refundDays}` })}</li>
			</ul>
			<DownloadCta placement="pricing" full note={t("hero.micro", productValues)} />
		</div>
		<p className={`s1 e7 ph-s1 ph-e5 ${style.priceNote}`}>
			{t("pricing.note", productValues)}
			{" "}
			<Link
				className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
				href={`mailto:${shiftDown.supportEmail}`}
			>
				{shiftDown.supportEmail}
			</Link>
		</p>
	</section>;
}

async function FaqSection() {
	const t = await getTranslations("Products.shiftdown.faq");

	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className="s1 e12 ph-s1 ph-e5">
			<Faq />
		</div>
	</section>;
}

async function FinalCtaSection() {
	const t = await getTranslations("Products.shiftdown.finalCta");

	return <section id={finalCtaId} className="vhGrid vPad bg-l6">
		<div className="s1 e12 ph-s1 ph-e5">
			<h2>{t("title")}</h2>
			<DownloadCta placement="final" full note={t("micro", productValues)} />
		</div>
	</section>;
}

/**
 * Entry for the products overview – mirrors RecSection / ToolsSection.
 * Not wired up yet, see README.md.
 */
export async function ShiftDownSection() {
	const t = await getTranslations("Products.shiftdown");

	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title={shiftDown.name}
		aside={<DemoMedia description={t("hero.demoRight")} />}
		link={shiftDown.path}
	>
		{t("hero.headline")}
	</Section>;
}
