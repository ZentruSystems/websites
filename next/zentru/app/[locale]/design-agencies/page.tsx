import Band from "@/app/blocks/Band";
import style from "@/app/blocks/blocks.module.css";
import CardGrid from "@/app/blocks/CardGrid";
import CaseStudies from "@/app/blocks/CaseStudies";
import CtaBand from "@/app/blocks/CtaBand";
import Faq, { FaqItem } from "@/app/blocks/Faq";
import Hero from "@/app/blocks/Hero";
import PackageTable from "@/app/blocks/PackageTable";
import PointerLift from "@/app/blocks/PointerLift";
import ProofBar from "@/app/blocks/ProofBar";
import ScrollFocus from "@/app/blocks/ScrollFocus";
import Steps from "@/app/blocks/Steps";
import ScrollDepth from "@/app/ScrollDepth";
import { defaultHtml } from "@/lib/localization";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import BookCallCta from "../project-management/BookCallCta";
import { localeUrl, projectBootstrap } from "../project-management/config";
import { designAgencies } from "./config";
import {
	caseKeys,
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
 * Development integrated Design: setting up – and, if they want, managing – the development side
 * of a design agency, so it can sell development without running it. Built like Project Management,
 * from the same blocks and with the same single job, a booked strategy call; what the two pages
 * say identically (the button, the case labels, the CRM case, the table labels) is read from
 * Project Management's messages rather than repeated.
 */

const url = (locale: string) => localeUrl(locale, designAgencies.path);

/** One button, one destination – this page's own booking event */
const Cta = (props: { placement: string, large?: boolean }) =>
	<BookCallCta {...props} bookingUrl={designAgencies.bookingUrl} />;

// The locale comes from the route, not `getLocale()`: in metadata that can still be the root
// layout's English on a German page
export async function generateMetadata({ params }: PageProps<"/[locale]/design-agencies">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale: locale as Locale, namespace: "Fields.designAgencies.meta" });

	const title = t("title");
	const description = t("description");
	const images = { url: `${projectBootstrap.siteUrl}${projectBootstrap.ogImage}` };

	return {
		title,
		description,
		keywords: [
			"development for design agencies",
			"design agency development partner",
			"white label development",
			"offer development services",
			"design to development",
			"development project management",
		],
		robots: { index: true, follow: true },
		// Each language is its own page, and says which the other one is
		alternates: {
			canonical: url(locale),
			languages: { en: url("en"), de: url("de"), "x-default": url("en") },
		},
		openGraph: { title, description, type: "website", url: url(locale), siteName: "Zentru Systems", images },
		twitter: { card: "summary_large_image", title, description, images },
	};
}

export default async function DesignAgenciesPage({ params }: PageProps<"/[locale]/design-agencies">) {
	const { locale } = await params;
	setRequestLocale(locale as Locale);

	// The root layout sets no `lang`; the tables' hyphenation, and screen readers, need one
	return <main lang={locale}>
		<ScrollDepth page="design-agencies" />
		<PointerLift />
		<StructuredData locale={locale as Locale} />
		{/* Tinted and plain alternate from here down; the hero and proof bar share one band */}
		<HeroSection />
		<ProofSection />
		<ProblemSection />
		<OutcomesSection />
		<SolutionSection />
		<CasesSection />
		<ProcessSection />
		<PackagesSection />
		<FaqSection />
		<FinalCtaSection />
	</main>;
}

/** Shared by the visible FAQ and its structured data, so the two can't drift apart */
async function getFaqItems(locale: Locale): Promise<FaqItem[]> {
	const t = await getTranslations({ locale, namespace: "Fields.designAgencies.faq.items" });

	return faqKeys.map(key => ({
		key,
		question: t(`${key}.question`),
		// The answers are template literals: line breaks and indentation collapse to single spaces
		answer: t(`${key}.answer`).replace(/\s+/g, " "),
	}));
}

/**
 * Who provides the service, what it is and includes, and the questions it answers – schema.org, for
 * search results and for AI tools reading the page. The organisation is the same node Project
 * Management describes, by the same `@id`, so search engines see one company with two services.
 */
async function StructuredData({ locale }: { locale: Locale }) {
	const t = await getTranslations({ locale, namespace: "Fields.designAgencies" });
	const tShared = await getTranslations({ locale, namespace: "Fields.projectBootstrap" });
	const pageUrl = url(locale);
	const faq = await getFaqItems(locale);
	const { company } = projectBootstrap;

	const organization = `${projectBootstrap.siteUrl}/#organization`;
	const service = `${pageUrl}#service`;

	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ProfessionalService",
				"@id": organization,
				name: "Zentru Systems",
				legalName: company.legalName,
				url: projectBootstrap.siteUrl,
				email: projectBootstrap.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: company.streetAddress,
					postalCode: company.postalCode,
					addressLocality: company.locality,
					addressCountry: company.country,
				},
				sameAs: [projectBootstrap.linkedIn],
				knowsLanguage: ["en", "de"],
			},
			{
				"@type": "Service",
				"@id": service,
				name: t("name"),
				description: `${t("seo.summary")} ${tShared("seo.area")}`.replace(/\s+/g, " "),
				provider: { "@id": organization },
				audience: { "@type": "BusinessAudience", audienceType: t("seo.audience") },
				// In person in Austria, remote anywhere – the detail is in the description
				areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Place", name: "Worldwide" }],
				// No prices: none are published, so none are claimed here either
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: t("packages.title"),
					itemListElement: packageKeys.map(pkg => ({
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: t(`packages.${pkg}.name`),
							description: t(`packages.${pkg}.summary`),
						},
					})),
				},
			},
			{
				"@type": "WebPage",
				"@id": pageUrl,
				url: pageUrl,
				name: t("meta.title"),
				description: t("meta.description"),
				inLanguage: locale,
				about: { "@id": service },
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
	const t = await getTranslations("Fields.designAgencies.hero");

	return <Hero
		eyebrow={t.rich("eyebrow", {
			audience: chunks => <span className={style.notOnPhone}>{chunks}</span>,
		})}
		title={t("headline")}
		cta={<Cta placement="hero" />}
		note={t("note")}
	>
		{t("sub")}
	</Hero>;
}

async function ProofSection() {
	const t = await getTranslations("Fields.designAgencies.proof");

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
	const t = await getTranslations("Fields.designAgencies.problem");

	return <Band title={t("title")} intro={<p>{t("intro")}</p>}>
		<CardGrid
			columns={3}
			items={problemKeys.map(key => ({
				key,
				title: t(`items.${key}.title`),
				text: t(`items.${key}.text`),
			}))}
		/>
	</Band>;
}

/** What the agency gets out of it – before the page says how it is done */
async function OutcomesSection() {
	const t = await getTranslations("Fields.designAgencies.outcomes");

	return <Band tinted title={t("title")}>
		<p className={`${style.highlight} ${style.intro} bUnitMarg`}>{t("evidence")}</p>
		<CardGrid
			columns={2}
			tagPosition="topRight"
			items={outcomeKeys.map(key => ({
				key,
				title: t(`items.${key}.title`),
				text: t(`items.${key}.text`),
				// Only with Management – so nobody expects it from the Setup alone
				tag: managementOutcomeKeys.includes(key) ? { label: t("managementTag"), accent: true } : undefined,
			}))}
		/>
	</Band>;
}

/** The one person between the design and its development, and the stages they work in */
async function SolutionSection() {
	const t = await getTranslations("Fields.designAgencies.solution");
	const tShared = await getTranslations("Fields.projectBootstrap.solution");

	return <Band
		title={t("title")}
		intro={<>
			{t.rich("intro", defaultHtml)}
			<p className={style.highlight}>{tShared("estimate")}</p>
		</>}
		aside={<Image
			className={style.portrait}
			src={projectBootstrap.portrait}
			style={{ objectPosition: projectBootstrap.portraitPosition }}
			alt={tShared("portraitAlt")}
			width={480}
			height={600}
			sizes="(max-width: 730px) 90vw, 360px"
		/>}
	>
		{/* Held still while the page scrolls past, so the stages come forward one after another */}
		<ScrollFocus count={stageKeys.length}>
			<h3 className={style.subTitle}>{t("stagesTitle")}</h3>
			<Steps
				scrollFocus
				headingLevel="h4"
				ongoingLabel={t("ongoing")}
				items={stageKeys.map(key => ({
					key,
					title: t(`stages.${key}.title`),
					text: t(`stages.${key}.text`),
				}))}
			/>
		</ScrollFocus>
		{/* The same button as everywhere else, so the visitor never has to scroll back for it */}
		<div>
			<p className={`${style.intro} bUnitMarg`}>{t("ctaLine")}</p>
			<Cta placement="solution" />
		</div>
	</Band>;
}

async function CasesSection() {
	const t = await getTranslations("Fields.designAgencies.cases");
	const tShared = await getTranslations("Fields.projectBootstrap.cases");

	const cases = {
		finance: {
			key: "finance",
			title: t("items.finance.title"),
			challenge: t("items.finance.challenge"),
			work: t("items.finance.work"),
			result: t("items.finance.result"),
			tag: { label: t("designTag") },
			media: designAgencies.caseMedia.map(item => ({ ...item, alt: t("items.finance.mediaAlt") })),
		},
		// Project Management's case, word for word
		crm: {
			key: "crm",
			title: tShared("items.crm.title"),
			challenge: tShared("items.crm.challenge"),
			work: tShared("items.crm.work"),
			result: tShared("items.crm.result"),
			tag: { label: tShared("implementationTag") },
			media: designAgencies.crmMedia.map(item => ({ ...item, alt: t("crmMediaAlt") })),
		},
	};

	return <Band tinted title={t("title")} intro={<p>{t("intro")}</p>}>
		<CaseStudies
			labels={{
				challenge: tShared("labels.challenge"),
				work: tShared("labels.work"),
				result: tShared("labels.result"),
				previous: t("previous"),
				next: t("next"),
			}}
			items={caseKeys.map(key => cases[key])}
		/>
	</Band>;
}

async function ProcessSection() {
	const t = await getTranslations("Fields.designAgencies");

	return <Band title={t("process.title")}>
		<Steps
			items={stepKeys.map(key => ({
				key,
				title: t(`process.steps.${key}.title`),
				text: t(`process.steps.${key}.text`),
			}))}
		/>
		<div>
			<Cta placement="process" />
			<p className={style.note}>{t("hero.note")}</p>
		</div>
	</Band>;
}

async function PackagesSection() {
	const t = await getTranslations("Fields.designAgencies.packages");
	const tShared = await getTranslations("Fields.projectBootstrap.packages");

	return <Band tinted title={t("title")} intro={<p>{t("intro")}</p>}>
		<PackageTable
			caption={t("caption")}
			featureLabel={tShared("featureLabel")}
			includedLabel={tShared("included")}
			notIncludedLabel={tShared("notIncluded")}
			priceLabel={tShared("priceLabel")}
			packages={packageKeys.map(key => ({
				key,
				tag: t(`${key}.tag`),
				name: t(`${key}.name`),
				summary: t(`${key}.summary`),
				fit: t(`${key}.fit`),
				price: t(`${key}.price`),
				isUpgrade: key == "management",
			}))}
			rows={packageRows.map(row => ({
				key: row.key,
				label: t(`rows.${row.key}`),
				included: packageKeys.map(pkg => (row.in as readonly string[]).includes(pkg)),
			}))}
		/>
	</Band>;
}

async function FaqSection() {
	const t = await getTranslations("Fields.designAgencies.faq");

	return <Band title={t("title")}>
		<Faq items={await getFaqItems(await getLocale())} />
	</Band>;
}

async function FinalCtaSection() {
	const t = await getTranslations("Fields.designAgencies.finalCta");

	return <CtaBand
		title={t("title")}
		intro={t("intro")}
		items={finalCtaKeys.map(key => ({ key, text: t(`items.${key}`) }))}
		cta={<Cta placement="final" large />}
		note={t("note")}
	/>;
}
