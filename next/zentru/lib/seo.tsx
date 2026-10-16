import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";

/** The production origin. Every canonical, hreflang, sitemap and structured-data URL starts here. */
export const siteUrl = "https://zentru.systems";

/**
 * Canonical and hreflang for a page that exists once per locale.
 *
 * Pages live at `/en/…` and `/de/…` – next-intl's `localePrefix` defaults to "always", and the bare
 * path only redirects to one of them by `Accept-Language`. That redirecting address is the
 * `x-default`, which is exactly what x-default is for.
 *
 * Paths are relative and resolve against `metadataBase` in the root layout. `path` is "" for home.
 */
export function alternatesFor(path: string, locale: string): Metadata["alternates"] {
	return {
		canonical: `/${locale}${path}`,
		languages: {
			...Object.fromEntries(routing.locales.map(other => [other, `/${other}${path}`])),
			"x-default": path || "/",
		},
	};
}

/** What every page under `[locale]` receives */
export type LocaleParams = { params: Promise<{ locale: string }> };

/**
 * The locale from the route, for metadata.
 *
 * Not `getLocale()`: the root layout calls `setRequestLocale("en")` on every request, and
 * `getLocale()` returns whatever was set first – so in metadata it answers "en" on German pages
 * whenever the root layout happened to run before it. The route param can't be wrong. Anything that
 * isn't a locale has already been turned into a 404 by `[locale]/layout.tsx`.
 */
export async function localeOf(params: LocaleParams["params"]): Promise<Locale> {
	const { locale } = await params;
	return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}

/** One id per entity, the same on every page, so search engines merge what each page says */
export const organizationId = `${siteUrl}/#organization`;
export const founderId = `${siteUrl}/#founder`;

/**
 * Zentru Systems and the person behind it, for any page's structured data.
 *
 * Every value is already public on this site, mostly in the impressum. The street address and the
 * phone number are left out on purpose: structured data can surface them in search panels, and the
 * registered seat is a residential address.
 */
export function organizationNodes() {
	return [
		{
			"@type": "Organization",
			"@id": organizationId,
			name: "Zentru Systems",
			legalName: "Zentru Systems e.U.",
			url: siteUrl,
			logo: `${siteUrl}/faviconDark/android-chrome-512x512.png`,
			email: "service@zentru.systems",
			founder: { "@id": founderId },
			address: { "@type": "PostalAddress", addressLocality: "Vienna", addressCountry: "AT" },
			sameAs: ["https://www.linkedin.com/company/zentru-systems"],
		},
		{
			"@type": "Person",
			"@id": founderId,
			name: "Felix Elias Trutschnig",
			worksFor: { "@id": organizationId },
		},
	];
}

/** Structured data as a script tag. `<` is escaped, so no string in the data can close the tag. */
export function JsonLd({ data }: { data: object }) {
	return <script
		type="application/ld+json"
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
	/>;
}
