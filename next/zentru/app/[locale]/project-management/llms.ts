import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { localeUrl, projectBootstrap } from "./config";
import { caseKeys, faqKeys, implementationCaseKeys, packageRows, stepKeys } from "./content";

/** Template literals carry their line breaks and indentation; in plain text they are single spaces */
const clean = (text: string) => text.replace(/\s+/g, " ").trim();

/**
 * The page as an llms.txt (llmstxt.org): a title, a one-paragraph summary, then the facts under
 * headings – what an AI tool needs to describe the service without reading the page's markup.
 *
 * Built from the page's own messages rather than written separately, so it cannot drift from what
 * the page says. `seo` in the messages holds the little the page itself doesn't state.
 */
export async function buildLlmsTxt(locale: Locale): Promise<string> {
	const t = await getTranslations({ locale, namespace: "Fields.projectBootstrap" });

	const intro = t.markup("solution.intro", { p: chunks => `${chunks}\n\n` })
		.split("\n\n")
		.map(clean)
		.filter(Boolean);

	const otherLanguage = locale == "de"
		? `${projectBootstrap.siteUrl}/llms.txt`
		: `${projectBootstrap.siteUrl}/de/llms.txt`;

	const lines = [
		`# Zentru Systems – ${t("name")}`,
		"",
		`> ${clean(t("seo.summary"))}`,
		"",
		clean(t("seo.area")),
		"",
		...intro.flatMap(paragraph => [paragraph, ""]),
		clean(t("solution.estimate")),
		"",
		`## ${t("packages.title")}`,
		"",
		...packageRows.map(row => `- ${t(`packages.rows.${row.key}`)}`),
		"",
		`## ${t("process.title")}`,
		"",
		...stepKeys.map(key => `- ${t(`process.steps.${key}.title`)}: ${clean(t(`process.steps.${key}.text`))}`),
		"",
		`## ${t("cases.title")}`,
		"",
		clean(t("cases.intro")),
		"",
		...caseKeys.map(key => {
			// The case that was built, not managed, says so here too – as it does on the page
			const tag = implementationCaseKeys.includes(key) ? ` (${t("cases.implementationTag")})` : "";
			return `- ${t(`cases.items.${key}.title`)}${tag}: ${clean(t(`cases.items.${key}.result`))}`;
		}),
		"",
		`## ${t("faq.title")}`,
		"",
		...faqKeys.flatMap(key => [
			`### ${t(`faq.items.${key}.question`)}`,
			"",
			clean(key == "pricing"
				? t(`faq.items.${key}.answer`, { weeks: `${projectBootstrap.includedWeeks}` })
				: t(`faq.items.${key}.answer`)),
			"",
		]),
		`## ${t("seo.links")}`,
		"",
		`- [${t("cta.label")}](${projectBootstrap.bookingUrl}): ${t("hero.note")}`,
		`- [${t("seo.page")}](${localeUrl(locale)})`,
		`- ${t("seo.email")}: ${projectBootstrap.email}`,
		`- [${t("seo.otherLanguage")}](${otherLanguage})`,
		"",
	];

	return lines.join("\n");
}
