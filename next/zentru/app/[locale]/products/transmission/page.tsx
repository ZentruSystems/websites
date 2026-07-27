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
import { transmission } from "./config";
import { featureKeys, modeKeys } from "./content";
import { mediaFor } from "./media";
import style from "./transmission.module.css";

/** The sticky download bar keeps out of the way while either of these is on screen */
const heroId = "transmission-hero";
const finalCtaId = "transmission-final-cta";

/** Trial length, price and platforms appear in several messages */
const productValues = {
	days: `${transmission.trialDays}`,
	price: transmission.price,
	macOs: transmission.minMacOs,
	windows: transmission.minWindows,
};

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Products.transmission");

	const title = t("meta.title");
	const description = t("hero.sub");
	const url = `${transmission.siteUrl}${transmission.path}`;
	const images = { url: `${transmission.siteUrl}${transmission.ogImage}` };

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

export default function TransmissionPage() {
	return <>
		<SourceCapture />
		<Hero />
		<UseCasesSection />
		<ProblemSection />
		<HowItWorksSection />
		<FeaturesSection />
		<PenSection />
		<PermissionSection />
		<PrivacySection />
		<PricingSection />
		<FaqSection />
		<FinalCtaSection />
		<StickyCta hideWhileVisible={[heroId, finalCtaId]} />
	</>;
}

/** The two clips run behind the headline: the round trip on the left, one pass on the right. */
async function Hero() {
	const t = await getTranslations("Products.transmission");

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
	const t = await getTranslations("Products.transmission.useCases");

	return <section className="vhGrid vPad bg-l5">
		<div className="s1 e12 ph-s1 ph-e5 gr-s1 bMarg">
			<h2>{t("title")}</h2>
			<p className={style.heroSub}>{t("intro")}</p>
		</div>
		<UseCaseTabs />
	</section>;
}

async function ProblemSection() {
	const t = await getTranslations("Products.transmission.problem");

	return <MediaSection
		title={t("title")}
		media={<DemoMedia {...mediaFor("problem")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function HowItWorksSection() {
	const t = await getTranslations("Products.transmission.howItWorks");

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
	const t = await getTranslations("Products.transmission.features");

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
	const t = await getTranslations("Products.transmission.pen");

	return <MediaSection
		title={t("title")}
		isMediaLeft
		className="bg-l5"
		media={<DemoMedia {...mediaFor("pen")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

/**
 * Deliberately given the weight of a full section: the permission prompt is where people
 * who already installed the app get spooked and quit.
 */
async function PermissionSection() {
	const t = await getTranslations("Products.transmission.permission");

	return <MediaSection
		title={t("title")}
		media={<DemoMedia
			{...mediaFor("accessibility-permission")}
			description={t("screenshot")}
			aspectRatio="4 / 3"
			kind="screenshot"
		/>}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function PrivacySection() {
	const t = await getTranslations("Products.transmission.privacy");

	return <Section title={t("title")} className="bg-l6" isStringAsChild={false}>
		<p>
			{t("bodyBeforeLink")}
			<Link
				className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
				href="https://aptabase.com"
			>
				{t("linkLabel")}
			</Link>
			{t("bodyAfterLink")}
		</p>
	</Section>;
}

async function PricingSection() {
	const t = await getTranslations("Products.transmission");

	return <section className="vhGrid vPad bg-l5">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("pricing.title", productValues)}</h2>
		<div className={`s1 e7 ph-s1 ph-e5 ${style.priceBox}`}>
			<ul className={style.priceList}>
				<li>{t("pricing.items.trial", productValues)}</li>
				<li>{t("pricing.items.platforms", productValues)}</li>
				<li>{t("pricing.items.machines", { machines: `${transmission.machines}` })}</li>
				<li>{t("pricing.items.updates")}</li>
				<li>{t("pricing.items.refund", { days: `${transmission.refundDays}` })}</li>
			</ul>
			<DownloadCta placement="pricing" full note={t("hero.micro", productValues)} />
		</div>
		<p className={`s1 e7 ph-s1 ph-e5 ${style.priceNote}`}>
			{t("pricing.note", productValues)}
			{" "}
			<Link
				className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
				href={`mailto:${transmission.supportEmail}`}
			>
				{transmission.supportEmail}
			</Link>
		</p>
	</section>;
}

async function FaqSection() {
	const t = await getTranslations("Products.transmission.faq");

	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className="s1 e12 ph-s1 ph-e5">
			<Faq />
		</div>
	</section>;
}

async function FinalCtaSection() {
	const t = await getTranslations("Products.transmission.finalCta");

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
export async function TransmissionSection() {
	const t = await getTranslations("Products.transmission");

	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title={transmission.name}
		aside={<DemoMedia description={t("hero.demoRight")} />}
		link={transmission.path}
	>
		{t("hero.headline")}
	</Section>;
}
