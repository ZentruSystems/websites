import Section from "@/app/Section";
import { Metadata } from "next";
import Link from "next/link";
import DemoMedia from "./DemoMedia";
import DownloadCta from "./DownloadCta";
import Faq from "./Faq";
import MediaSection from "./MediaSection";
import SourceCapture from "./SourceCapture";
import StickyCta from "./StickyCta";
import UseCaseTabs from "./UseCaseTabs";
import copy from "./copy";
import { transmission } from "./config";
import { mediaFor } from "./media";
import style from "./transmission.module.css";

/** The sticky download bar keeps out of the way while either of these is on screen */
const heroId = "transmission-hero";
const finalCtaId = "transmission-final-cta";

export const metadata: Metadata = {
	title: transmission.brandPair,
	description: copy.hero.sub,
	keywords: [
		"cursor precision",
		"mouse sensitivity",
		"video editing",
		"CAD",
		"pen tablet",
	],
	robots: { index: true, follow: true },
	openGraph: {
		title: transmission.brandPair,
		type: "website",
		url: `${transmission.siteUrl}${transmission.path}`,
		description: copy.hero.sub,
		images: { url: `${transmission.siteUrl}${transmission.ogImage}` },
	},
	twitter: {
		card: "summary_large_image",
		title: transmission.brandPair,
		description: copy.hero.sub,
		images: { url: `${transmission.siteUrl}${transmission.ogImage}` },
	},
};

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
function Hero() {
	return <section id={heroId} className={`vhGrid ${style.hero}`}>
		<div className={style.heroMedia} aria-hidden>
			<div className={style.heroPane}>
				<DemoMedia fill {...mediaFor("hero-round-trip")} description={copy.hero.demoLeft} />
			</div>
			<div className={style.heroPane}>
				<DemoMedia fill {...mediaFor("hero-one-pass")} description={copy.hero.demoRight} />
			</div>
			<div className={style.heroScrim} />
		</div>
		<div className={`s1 e12 ph-s1 ph-e5 vPad ${style.heroContent}`}>
			<p className={style.eyebrow}>{transmission.brandPair}</p>
			<h1 className={`light ${style.heroHeadline}`}>{copy.hero.headline}</h1>
			<p className={`${style.heroSub} bMarg`}>{copy.hero.sub}</p>
			<DownloadCta placement="hero" full note={copy.hero.micro} />
		</div>
	</section>;
}

function UseCasesSection() {
	return <section className="vhGrid vPad bg-l5">
		<div className="s1 e12 ph-s1 ph-e5 gr-s1 bMarg">
			<h2>{copy.useCases.title}</h2>
			<p className={style.heroSub}>{copy.useCases.intro}</p>
		</div>
		<UseCaseTabs />
	</section>;
}

function ProblemSection() {
	return <MediaSection
		title={copy.problem.title}
		media={<DemoMedia {...mediaFor("problem")} description={copy.problem.demo} />}
	>
		{copy.problem.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
	</MediaSection>;
}

function HowItWorksSection() {
	return <section className="vhGrid vPad bg-l6">
		<h2 className="s1 e12 ph-s1 ph-e5">{copy.howItWorks.title}</h2>
		<div className="s1 e7 ph-s1 ph-e5 paragraphSpaceLarger bMarg">
			{copy.howItWorks.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
		</div>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards}`}>
			{copy.howItWorks.modes.map(mode => <div key={mode.name} className={`${style.card} bg-l5`}>
				<h3 className={style.subHeadline}>{mode.name}</h3>
				<p>{mode.text}</p>
			</div>)}
		</div>
		<p className="s1 e12 ph-s1 ph-e5 tMarg fg-l2">{copy.howItWorks.keyLine}</p>
	</section>;
}

function FeaturesSection() {
	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{copy.features.title}</h2>
		<div className={`s1 e12 ph-s1 ph-e5 ${style.cards} ${style.cardsWide}`}>
			{copy.features.items.map(feature => <div key={feature.title} className={`${style.card} bg-l6`}>
				<h3 className={style.subHeadline}>{feature.title}</h3>
				<p>{feature.text}</p>
			</div>)}
		</div>
	</section>;
}

function PenSection() {
	return <MediaSection
		title={copy.pen.title}
		isMediaLeft
		className="bg-l5"
		media={<DemoMedia {...mediaFor("pen")} description={copy.pen.demo} />}
	>
		{copy.pen.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
	</MediaSection>;
}

/**
 * Deliberately given the weight of a full section: the permission prompt is where people
 * who already installed the app get spooked and quit.
 */
function PermissionSection() {
	return <MediaSection
		title={copy.permission.title}
		media={<DemoMedia
			{...mediaFor("accessibility-permission")}
			description={copy.permission.screenshot}
			aspectRatio="4 / 3"
			placeholderLabel="Screenshot — coming soon"
		/>}
	>
		{copy.permission.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
	</MediaSection>;
}

function PrivacySection() {
	return <Section title={copy.privacy.title} className="bg-l6" isStringAsChild={false}>
		<p>
			{copy.privacy.bodyBeforeLink}
			<Link
				className="hover-fg fg-l2 decorationC-l4 hoverUnderlineAnimation underline"
				href={copy.privacy.linkUrl}
			>
				{copy.privacy.linkLabel}
			</Link>
			{copy.privacy.bodyAfterLink}
		</p>
	</Section>;
}

function PricingSection() {
	return <section className="vhGrid vPad bg-l5">
		<h2 className="s1 e12 ph-s1 ph-e5">{copy.pricing.title}</h2>
		<div className={`s1 e7 ph-s1 ph-e5 ${style.priceBox}`}>
			<ul className={style.priceList}>
				{copy.pricing.items.map(item => <li key={item}>{item}</li>)}
			</ul>
			<DownloadCta placement="pricing" full note={copy.hero.micro} />
		</div>
		<p className={`s1 e7 ph-s1 ph-e5 ${style.priceNote}`}>
			{copy.pricing.note}
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

function FaqSection() {
	return <section className="vhGrid vPad">
		<h2 className="s1 e12 ph-s1 ph-e5">{copy.faq.title}</h2>
		<div className="s1 e12 ph-s1 ph-e5">
			<Faq />
		</div>
	</section>;
}

function FinalCtaSection() {
	return <section id={finalCtaId} className="vhGrid vPad bg-l6">
		<div className="s1 e12 ph-s1 ph-e5">
			<h2>{copy.finalCta.title}</h2>
			<DownloadCta placement="final" full note={copy.finalCta.micro} />
		</div>
	</section>;
}

/**
 * Entry for the products overview – mirrors RecSection / ToolsSection.
 * Not wired up yet, see README.md.
 */
export function TransmissionSection() {
	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title={transmission.name}
		aside={<DemoMedia
			description={copy.hero.demoRight}
			placeholderLabel="Demo clip — coming soon"
		/>}
		link={transmission.path}
	>
		{copy.hero.headline}
	</Section>;
}
