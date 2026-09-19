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
import { speedSwitch } from "./config";
import { limitKeys, modeKeys, workaroundKeys } from "./content";
import { mediaFor } from "./media";
import style from "./speedswitch.module.css";

// import SpeedSwitchIcon from "@/public/img/speedswitch/app-icon.svg";
import SpeedSwitchIcon from "@/public/img/speedswitch/SpeedSwitch.PointerPath.dark.svg";
import Image from "next/image";

/** The sticky download bar keeps out of the way while either of these is on screen */
const heroId = "speedswitch-hero";
const finalCtaId = "speedswitch-final-cta";

/** Trial length, price and platforms appear in several messages */
const productValues = {
	days: `${speedSwitch.trialDays}`,
	price: speedSwitch.price,
	macOs: speedSwitch.minMacOs,
	windows: speedSwitch.minWindows,
};

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Products.speedswitch");

	const title = t("meta.title");
	const description = t("hero.sub");
	const url = `${speedSwitch.siteUrl}${speedSwitch.path}`;
	const images = { url: `${speedSwitch.siteUrl}${speedSwitch.ogImage}` };

	return {
		title,
		description,
		keywords: [
			"cursor precision",
			"mouse sensitivity",
			"video editing",
			"pen tablet",
		],
		robots: { index: true, follow: true },
		openGraph: { title, description, type: "website", url, images },
		twitter: { card: "summary_large_image", title, description, images },
	};
}

export default function SpeedSwitchPage() {
	return <>
		<div className="underNav">
			<SourceCapture />
			<Hero />
			<TrackpadSection />
			<UseCasesSection />
			{/* The hero and the workaround cards already make the zoom-cycle point */}
			{/* <ProblemSection /> */}
			<HowItWorksSection />
			<WorkaroundsSection />
			<LimitsSection />
			{/* <PenSection /> */}
			<PrivacySection />
			<PricingSection />
			<FaqSection />
			<FinalCtaSection />
		</div>
		{/*
			Deliberately outside `.underNav`. That wrapper sets `--nav-height: 0` on its children
			so the hero can run behind the nav – but the sticky bar needs the real height to sit
			clear of the nav, which is along the bottom on a phone. It is `position: fixed`, so
			where it sits in the DOM changes nothing else.
		*/}
		<StickyCta hideWhileVisible={[heroId, finalCtaId]} />
	</>;
}

/** One wide clip runs behind the headline, under a scrim that keeps the type readable. */
async function Hero() {
	const t = await getTranslations("Products.speedswitch");

	return <section id={heroId} className={`vhGrid ${style.hero}`}>
		<div className={style.heroMedia} aria-hidden>
			<div className={style.heroPane}>
				<DemoMedia fill media={mediaFor("hero-comparison")} description={t("hero.demo")} preload="auto" />
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
	const t = await getTranslations("Products.speedswitch.useCases");

	return <section className="vhGrid vPad bg-l5">
		<div className="s1 e12 ph-s1 ph-e5 gr-s1 bMarg">
			<h2>{t("title")}</h2>
			<p className={style.heroSub}>{t("intro")}</p>
		</div>
		<UseCaseTabs />
	</section>;
}

// Commented out of the page, kept ready to restore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function ProblemSection() {
	const t = await getTranslations("Products.speedswitch.problem");

	return <MediaSection
		title={t("title")}
		media={<DemoMedia media={mediaFor("problem")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function HowItWorksSection() {
	const t = await getTranslations("Products.speedswitch.howItWorks");

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

/** The laptop and trackpad case, which is the one the product leads on. */
async function TrackpadSection() {
	const t = await getTranslations("Products.speedswitch.trackpad");

	return <MediaSection
		title={t("title")}
		isMediaLeft
		className="bg-l5"
		media={<DemoMedia media={mediaFor("trackpad")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

/** What people reach for instead today, and why each one falls short. */
async function WorkaroundsSection() {
	const t = await getTranslations("Products.speedswitch.workarounds");

	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards} ${style.cardsWide}`}>
			{workaroundKeys.map(key => <div key={key} className={`${style.card} bg-l6`}>
				<h3 className={style.subHeadline}>{t(`items.${key}.title`)}</h3>
				<p>{t(`items.${key}.text`)}</p>
			</div>)}
		</div>
	</section>;
}

/** Said here so nobody has to find it out after paying. */
async function LimitsSection() {
	const t = await getTranslations("Products.speedswitch.limits");

	return <section className="vhGrid vPad bg-l6">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards}`}>
			{limitKeys.map(key => <div key={key} className={`${style.card} bg-l5`}>
				<h3 className={style.subHeadline}>{t(`items.${key}.title`)}</h3>
				<p>{t(`items.${key}.text`)}</p>
			</div>)}
		</div>
	</section>;
}

// Commented out of the page, kept ready to restore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function PenSection() {
	const t = await getTranslations("Products.speedswitch.pen");

	return <MediaSection
		title={t("title")}
		isMediaLeft
		className="bg-l5"
		media={<DemoMedia media={mediaFor("pen")} description={t("demo")} />}
	>
		{t.rich("body", defaultHtml)}
	</MediaSection>;
}

async function PrivacySection() {
	const t = await getTranslations("Products.speedswitch.privacy");

	const inlineLink = "hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline";

	// Untinted: with the permission section moved to /welcome, this keeps the sections alternating
	return <Section title={t("title")} className="paragraphSpaceLarger" isStringAsChild={false}>
		<p>{t("intro")}</p>
		{/* No vendor named: the app and this website use different analytics, and which one
			the app uses is not something a visitor needs to take on trust from a brand name */}
		<p>{t("analytics")}</p>
		<p>
			{t("controlBeforeLink")}
			<Link className={inlineLink} href="/privacy-policy">{t("controlLinkLabel")}</Link>
			{t("controlAfterLink")}
		</p>
	</Section>;
}

async function PricingSection() {
	const t = await getTranslations("Products.speedswitch");

	return <section className="vhGrid vPad bg-l5">
		<h2 className="s4 e8 ph-s1 ph-e5" style={{textAlign:"center"}}>{t("pricing.title", productValues)}</h2>
		<div className={`s4 e8 ph-s1 ph-e5 hCenter ${style.priceBox}`}>
			<p className={style.priceAnchor}>
				{t("pricing.anchor", { regular: speedSwitch.regularPrice })}
			</p>
			<ul className={style.priceList}>
				<li>{t("pricing.items.trial", productValues)}</li>
				<li>{t("pricing.items.platforms", productValues)}</li>
				<li>{t("pricing.items.machines", { machines: `${speedSwitch.machines}` })}</li>
				<li>{t("pricing.items.updates")}</li>
				<li>{t("pricing.items.refund", { days: `${speedSwitch.refundDays}` })}</li>
			</ul>
			<DownloadCta placement="pricing" full note={t("hero.micro", productValues)} />
		</div>
		<p className={`s4 e8 ph-s1 ph-e5 hCenter${style.priceNote}`}>
			{t("pricing.note", productValues)}
			{" "}
			<Link
				className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
				href={`mailto:${speedSwitch.supportEmail}`}
			>
				{speedSwitch.supportEmail}
			</Link>
		</p>
	</section>;
}

async function FaqSection() {
	const t = await getTranslations("Products.speedswitch.faq");

	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{t("title")}</h2>
		<div className="s1 e12 ph-s1 ph-e5">
			<Faq />
		</div>
	</section>;
}

async function FinalCtaSection() {
	const t = await getTranslations("Products.speedswitch.finalCta");

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
export async function SpeedSwitchSection() {
	const t = await getTranslations("Products.speedswitch");

	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title={speedSwitch.name}
		aside={<Image
			loading="eager"
			className="ph-NoFloat RightFloat From15vw To0"
			style={{ marginBlock: 10, height: "400px", width: "400px", aspectRatio: 1 }}
			src={SpeedSwitchIcon}
			alt={t("hero.demo")}
		/>}
		link={speedSwitch.path}
	>
		{t("hero.headline")}
	</Section>;
}
