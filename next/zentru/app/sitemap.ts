import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";
import { MetadataRoute } from "next";

/**
 * Every indexable page. A new page has to be added here by hand – nothing discovers it.
 *
 * Left out on purpose: the `noindex` pages (/project-bootstrap/booked, /products/speedswitch/welcome),
 * the early-access sign-up forms, and the DialApp legal pages, which exist for the app store
 * listing rather than for search.
 */
const paths = [
	"",
	"/project-bootstrap",
	"/services",
	"/digital-experiences",
	"/products",
	"/products/speedswitch",
	"/products/DialApp",
	"/products/.rec",
	"/products/tools",
	"/products/tools/audio-file-organizer",
	"/impressum",
	"/privacy-policy",
];

/**
 * One entry per page per locale, each listing every language version of itself – that pairing is
 * what tells a search engine /en/x and /de/x are the same page, rather than two competing ones.
 * No `lastModified`: there is no honest source for it, and a build date on every page is noise.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return paths.flatMap(path => routing.locales.map(locale => ({
		url: `${siteUrl}/${locale}${path}`,
		alternates: {
			languages: {
				...Object.fromEntries(routing.locales.map(other => [other, `${siteUrl}/${other}${path}`])),
				// Written exactly as the pages' own hreflang tags render it, so the two never disagree
				"x-default": `${siteUrl}${path}`,
			},
		},
	})));
}
