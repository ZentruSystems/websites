import Band from "@/app/blocks/Band";
import style from "@/app/blocks/blocks.module.css";
import CardGrid from "@/app/blocks/CardGrid";
import CaseStudies from "@/app/blocks/CaseStudies";
import Comparison from "@/app/blocks/Comparison";
import CtaBand from "@/app/blocks/CtaBand";
import Faq, { FaqItem } from "@/app/blocks/Faq";
import Hero from "@/app/blocks/Hero";
import PackageTable from "@/app/blocks/PackageTable";
import ProofBar from "@/app/blocks/ProofBar";
import Steps from "@/app/blocks/Steps";
import ScrollDepth from "@/app/ScrollDepth";
import { defaultHtml } from "@/lib/localization";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import BookCallCta from "./BookCallCta";
import { projectBootstrap } from "./config";
import {
	caseKeys,
	comparisonKeys,
	deliverables,
	faqKeys,
	finalCtaKeys,
	managementOutcomeKeys,
	outcomeKeys,
	packageKeys,
	packageRows,
	problemKeys,
	proofKeys,
	stageKeys,
	stepKeys,
} from "./content";

/**
 * Project Bootstrap: the setup (and, as an upgrade, the management) of a small business's
 * software project. The page has one job – a booked strategy call – so every section leads
 * to the same button, and nothing else on it asks the visitor to go anywhere.
 *
 * The sections are built from `app/blocks`, which take plain strings so other pages can reuse
 * them with their own copy.
 */

/** The weeks of included consulting the copy quotes – a plain `{weeks}` argument takes a string */
const includedWeeks = { weeks: `${projectBootstrap.includedWeeks}` };

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Fields.projectBootstrap.meta");

	const title = t("title");
	const description = t("description");
	const url = `${projectBootstrap.siteUrl}${projectBootstrap.path}`;
	const images = { url: `${projectBootstrap.siteUrl}${projectBootstrap.ogImage}` };

	return {
		title,
		description,
		keywords: [
			"project setup",
			"software project consulting",
			"system architecture",
			"small business",
			"finance",
		],
		robots: { index: true, follow: true },
		openGraph: { title, description, type: "website", url, images },
		twitter: { card: "summary_large_image", title, description, images },
	};
}

export default async function ProjectBootstrapPage() {
	// The root layout sets no `lang`; the tables' hyphenation, and screen readers, need one
	const locale = await getLocale();

	return <main lang={locale}>
		<ScrollDepth page="project-bootstrap" />
		<StructuredData />
		{/* Tinted and plain alternate from here down; the hero and proof bar share one band */}
		<HeroSection />
		<ProofSection />
		<ProblemSection />
		<OutcomesSection />
		<SolutionSection />
		<DeliverablesSection />
		<ComparisonSection />
		<CasesSection />
		<ProcessSection />
		<PackagesSection />
		<FaqSection />
		<FinalCtaSection />
	</main>;
}

/** Shared by the visible FAQ and its structured data, so the two can't drift apart */
async function getFaqItems(): Promise<FaqItem[]> {
	const t = await getTranslations("Fields.projectBootstrap.faq.items");

	return faqKeys.map(key => ({
		key,
		question: t(`${key}.question`),
		// The answers are template literals: line breaks and indentation collapse to single spaces
		answer: (key == "consulting" || key == "pricing"
			? t(`${key}.answer`, includedWeeks)
			: t(`${key}.answer`)
		).replace(/\s+/g, " "),
	}));
}

/** Who provides the service, and the questions it answers – schema.org, for search results */
async function StructuredData() {
	const t = await getTranslations("Fields.projectBootstrap");
	const url = `${projectBootstrap.siteUrl}${projectBootstrap.path}`;
	const faq = await getFaqItems();

	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ProfessionalService",
				"@id": `${url}#service`,
				name: "Zentru Systems",
				url,
				email: projectBootstrap.email,
				description: t("meta.description"),
				// No prices: none are published, so none are claimed here either
				makesOffer: packageKeys.map(key => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: t(`packages.${key}.name`),
						description: t(`packages.${key}.summary`),
					},
				})),
			},
			{
				"@type": "FAQPage",
				mainEntity: faq.map(item => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: { "@type": "Answer", text: item.answer },
				})),
			},
		],
	};

	// `<` escaped, so no string in the data can close the script tag
	return <script
		type="application/ld+json"
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
	/>;
}

async function HeroSection() {
	const t = await getTranslations("Fields.projectBootstrap.hero");

	return <Hero
		eyebrow={t.rich("eyebrow", {
			audience: chunks => <span className={style.notOnPhone}>{chunks}</span>,
		})}
		title={t("headline")}
		cta={<BookCallCta placement="hero" />}
		note={t("note")}
	>
		{t("sub")}
	</Hero>;
}

async function ProofSection() {
	const t = await getTranslations("Fields.projectBootstrap.proof");

	return <ProofBar
		label={t("label")}
		items={proofKeys.map(key => ({
			key,
			title: t(`items.${key}.title`),
			text: t(`items.${key}.text`),
		}))}
	/>;
}

async function ProblemSection() {
	const t = await getTranslations("Fields.projectBootstrap.problem");

	return <Band title={t("title")} intro={<p>{t("intro")}</p>}>
		<CardGrid
			columns={3}
			items={problemKeys.map(key => ({
				key,
				title: t(`items.${key}.title`),
				text: t(`items.${key}.text`),
			}))}
		/>
		<p className={`${style.highlight} ${style.intro}`}>{t("cost")}</p>
	</Band>;
}

async function OutcomesSection() {
	const t = await getTranslations("Fields.projectBootstrap");

	return <Band tinted title={t("outcomes.title")} intro={<p>{t("outcomes.intro")}</p>}>
		<CardGrid
			columns={3}
			items={outcomeKeys.map(key => ({
				key,
				title: t(`outcomes.items.${key}.title`),
				text: t(`outcomes.items.${key}.text`),
				tag: managementOutcomeKeys.includes(key)
					? { label: t("deliverables.tags.management"), accent: true }
					: undefined,
			}))}
		/>
		<p className={`${style.highlight} ${style.intro}`}>{t("outcomes.evidence")}</p>
	</Band>;
}

/** The one person between business and tech, and the framework they work by */
async function SolutionSection() {
	const t = await getTranslations("Fields.projectBootstrap.solution");

	return <Band
		title={t("title")}
		intro={<>
			{t.rich("intro", defaultHtml)}
			<p className={style.highlight}>{t("estimate")}</p>
		</>}
		aside={<Image
			className={style.portrait}
			src={projectBootstrap.portrait}
			style={{ objectPosition: projectBootstrap.portraitPosition }}
			alt={t("portraitAlt")}
			width={480}
			height={600}
			sizes="(max-width: 730px) 90vw, 360px"
		/>}
	>
		<div>
			<h3 className={style.subTitle}>{t("stagesTitle")}</h3>
			<Steps
				headingLevel="h4"
				ongoingLabel={t("ongoing")}
				items={stageKeys.map(key => ({
					key,
					title: t(`stages.${key}.title`),
					text: t(`stages.${key}.text`),
				}))}
			/>
		</div>
	</Band>;
}

async function DeliverablesSection() {
	const t = await getTranslations("Fields.projectBootstrap.deliverables");

	return <Band tinted title={t("title")} intro={<p>{t("intro")}</p>}>
		<CardGrid
			columns={4}
			items={deliverables.map(({ key, from }) => ({
				key,
				title: t(`items.${key}.title`),
				text: t(`items.${key}.text`),
				tag: { label: t(`tags.${from}`), accent: from == "management" },
			}))}
		/>
	</Band>;
}

async function ComparisonSection() {
	const t = await getTranslations("Fields.projectBootstrap.comparison");

	return <Band title={t("title")}>
		<Comparison
			beforeLabel={t("beforeLabel")}
			afterLabel={t("afterLabel")}
			rows={comparisonKeys.map(key => ({
				key,
				before: t(`rows.${key}.before`),
				after: t(`rows.${key}.after`),
			}))}
		/>
	</Band>;
}

async function CasesSection() {
	const t = await getTranslations("Fields.projectBootstrap.cases");

	return <Band tinted title={t("title")} intro={<p>{t("intro")}</p>}>
		<CaseStudies
			labels={{
				challenge: t("labels.challenge"),
				work: t("labels.work"),
				result: t("labels.result"),
			}}
			items={caseKeys.map(key => ({
				key,
				title: t(`items.${key}.title`),
				challenge: t(`items.${key}.challenge`),
				work: t(`items.${key}.work`),
				result: t(`items.${key}.result`),
			}))}
		/>
	</Band>;
}

async function ProcessSection() {
	const t = await getTranslations("Fields.projectBootstrap");

	return <Band title={t("process.title")}>
		<Steps
			items={stepKeys.map(key => ({
				key,
				title: t(`process.steps.${key}.title`),
				text: t(`process.steps.${key}.text`),
			}))}
		/>
		<div>
			<BookCallCta placement="process" />
			<p className={style.note}>{t("hero.note")}</p>
		</div>
	</Band>;
}

async function PackagesSection() {
	const t = await getTranslations("Fields.projectBootstrap.packages");

	return <Band tinted title={t("title")} intro={<p>{t("intro")}</p>}>
		<PackageTable
			caption={t("caption")}
			featureLabel={t("featureLabel")}
			includedLabel={t("included")}
			notIncludedLabel={t("notIncluded")}
			priceLabel={t("priceLabel")}
			packages={packageKeys.map(key => ({
				key,
				tag: t(`${key}.tag`),
				name: t(`${key}.name`),
				summary: t(`${key}.summary`),
				fit: t(`${key}.fit`),
				price: key == "setup" ? t("setup.price", includedWeeks) : t(`${key}.price`),
				isUpgrade: key == "management",
			}))}
			rows={packageRows.map(row => ({
				key: row.key,
				label: row.key == "consulting" ? t("rows.consulting", includedWeeks) : t(`rows.${row.key}`),
				included: packageKeys.map(pkg => (row.in as readonly string[]).includes(pkg)),
			}))}
		/>
	</Band>;
}

async function FaqSection() {
	const t = await getTranslations("Fields.projectBootstrap.faq");

	return <Band title={t("title")}>
		<Faq items={await getFaqItems()} />
	</Band>;
}

async function FinalCtaSection() {
	const t = await getTranslations("Fields.projectBootstrap.finalCta");

	return <CtaBand
		title={t("title")}
		intro={t("intro")}
		items={finalCtaKeys.map(key => ({ key, text: t(`items.${key}`) }))}
		cta={<BookCallCta placement="final" large />}
		note={t("note")}
	/>;
}
