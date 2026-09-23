import { localeUrl } from "@/app/[locale]/project-management/config";
import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

/**
 * The service pages only, by decision: the product pages are still found through links, this
 * points search engines at what the site is for. Each page is listed in every language, and
 * every entry names all of them, so a searcher is shown the right one.
 *
 * No `lastModified`, `priority` or `changeFrequency`: Google ignores the last two, and a date that
 * isn't the page's real one is worse than none.
 */
const pages = ["/project-management", "/services", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
	return pages.flatMap(path => {
		const languages = {
			...Object.fromEntries(routing.locales.map(locale => [locale, localeUrl(locale, path)])),
			"x-default": localeUrl(routing.defaultLocale, path),
		};

		return routing.locales.map(locale => ({ url: localeUrl(locale, path), alternates: { languages } }));
	});
}
