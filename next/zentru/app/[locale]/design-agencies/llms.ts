import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { localeUrl, projectBootstrap } from "../project-management/config";
import { designAgencies } from "./config";
import { caseKeys, faqKeys, packageKeys, packageRows, stepKeys } from "./content";

/** Template literals carry their line breaks and indentation; in plain text they are single spaces */
const clean = (text: string) => text.replace(/\s+/g, " ").trim();

/** Where this page's llms.txt is: next to the page, `/design-agencies/llms.txt` for English */
export function llmsTxtUrl(locale: Locale) {
	const prefix = locale == "en" ? "" : `/${locale}`;
	return `${projectBootstrap.siteUrl}${prefix}${designAgencies.path}/llms.txt`;
}

/**
 * This service as a section of the site's own llms.txt, after Project Management's: what it is, and
 * where its page and its own llms.txt are. Starts with a blank line, as the section before ends
 * with one.
 */
export async function buildLlmsTxtSection(locale: Locale): Promise<string> {
	const t = await getTranslations({ locale, namespace: "Fields.designAgencies" });
	const tShared = await getTranslations({ locale, namespace: "Fields.projectBootstrap" });

	return [
		"",
		`## ${t("name")}`,
		"",
		clean(t("seo.summary")),
		"",
		`- [${tShared("seo.page")}](${localeUrl(locale, designAgencies.path)})`,
		`- [${t("seo.llmsTxt")}](${llmsTxtUrl(locale)})`,
		"",
	].join("\n");
}

/**
 * The page as an llms.txt (llmstxt.org), built from its own messages like Project Management's, so
 * it cannot drift from what the page says. The strings the page reads from Project Management are
 * read from there here too.
 */
export async function buildLlmsTxt(locale: Locale): Promise<string> {
	const t = await getTranslations({ locale, namespace: "Fields.designAgencies" });
	const tShared = await getTranslations({ locale, namespace: "Fields.projectBootstrap" });

	const intro = t.markup("solution.intro", { p: chunks => `${chunks}\n\n` })
		.split("\n\n")
		.map(clean)
		.filter(Boolean);

	const cases = {
		finance: `${t("cases.items.finance.title")} (${t("cases.designTag")}): ${clean(t("cases.items.finance.result"))}`,
		crm: `${tShared("cases.items.crm.title")} (${tShared("cases.implementationTag")}): ${clean(tShared("cases.items.crm.result"))}`,
	};

	const otherLanguage = llmsTxtUrl(locale == "de" ? "en" : "de");

	const lines = [
		`# Zentru Systems – ${t("name")}`,
		"",
		`> ${clean(t("seo.summary"))}`,
		"",
		clean(tShared("seo.area")),
		"",
		...intro.flatMap(paragraph => [paragraph, ""]),
		clean(tShared("solution.estimate")),
		"",
		`## ${t("packages.title")}`,
		"",
		clean(t("packages.intro")),
		"",
		...packageKeys.flatMap(pkg => [
			`### ${t(`packages.${pkg}.name`)}`,
			"",
			`${t(`packages.${pkg}.summary`)} ${t(`packages.${pkg}.fit`)} ${tShared("packages.priceLabel")}: ${t(`packages.${pkg}.price`)}.`,
			"",
			...packageRows
				.filter(row => (row.in as readonly string[]).includes(pkg))
				.map(row => `- ${t(`packages.rows.${row.key}`)}`),
			"",
		]),
		`## ${t("process.title")}`,
		"",
		...stepKeys.map(key => `- ${t(`process.steps.${key}.title`)}: ${clean(t(`process.steps.${key}.text`))}`),
		"",
		`## ${t("cases.title")}`,
		"",
		clean(t("cases.intro")),
		"",
		...caseKeys.map(key => `- ${cases[key]}`),
		"",
		`## ${t("faq.title")}`,
		"",
		...faqKeys.flatMap(key => [
			`### ${t(`faq.items.${key}.question`)}`,
			"",
			clean(t(`faq.items.${key}.answer`)),
			"",
		]),
		`## ${tShared("seo.links")}`,
		"",
		`- [${tShared("cta.label")}](${designAgencies.bookingUrl}): ${t("hero.note")}`,
		`- [${tShared("seo.page")}](${localeUrl(locale, designAgencies.path)})`,
		`- ${tShared("seo.email")}: ${projectBootstrap.email}`,
		`- [${tShared("seo.otherLanguage")}](${otherLanguage})`,
		"",
	];

	return lines.join("\n");
}
