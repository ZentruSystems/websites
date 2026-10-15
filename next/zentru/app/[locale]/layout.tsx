import 'common/theming/base.css';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import { routing } from '@/i18n/routing';
import { localeOf, LocaleParams } from '@/lib/seo';
import ThemedImg from 'common/theming/ThemedImg';
import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../animations.css';
import '../style.css';
import CookieSettingsButton from '../CookieSettingsButton';
import Nav from './nav/Nav';

/**
 * The localized defaults. The root layout's metadata is static English, so without this every
 * German page that doesn't describe itself was described in English – and as "Really Good".
 * Pages that set their own description, Open Graph or Twitter card replace these wholesale.
 */
export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
	const locale = await localeOf(params);
	const t = await getTranslations({ locale, namespace: "Always.meta" });
	const description = t("description");

	return {
		description,
		openGraph: {
			title: "Zentru Systems",
			siteName: "Zentru Systems",
			type: "website",
			locale,
			description,
			images: "/opengraph-image.png",
		},
		twitter: { card: "summary_large_image", title: "Zentru Systems", description, images: "/opengraph-image.png" },
	};
}

export default async function BaseLayout({
	children,
	params,
}: {
	children: React.ReactNode,
	params: Promise<{ locale: string }>,
}) {
	// The proxy skips any path with a dot in it, so `/robots.txt` or `/x.php` reaches this
	// segment with that as its "locale" – and i18n/request.ts falls back to English rather than
	// failing. Without this, every such URL served the home page with a 200: a soft 404 to a
	// search engine, and an HTML page to any crawler asking for robots.txt.
	if (!hasLocale(routing.locales, (await params).locale)) notFound();

	const t = await getTranslations();
	const tAlways = await getTranslations("Always");

	return <>
			<Nav />
			<div className='navPad vflex minV100'>
				{children}
				<footer className="bg-l4 hGrid ph-bNavPad">
					<div className="s1 e3 ph-e5 vPad">
						<p>{tAlways("letsMeetAt") ?? "Lets meet at"}</p>
						<Link href="https://www.linkedin.com/company/zentru-systems">linkedIn</Link>
					</div>
					<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad">
						<p>{tAlways("weAre")}</p>
						<Link href="/">
							<ThemedImg style={{ height: 25 }}
								lightSrc="/img/ZentruLogo/Color=Dark,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
								darkSrc="/img/ZentruLogo/Color=White,Connected=False,Accent=Green,Line=Thick,Italic=False,WithRects=True.svg"
							/>
						</Link>
					</div>
					<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset bUnitPad">
						<Link href="/#about">
							<p>{tAlways("about") ?? "About me"}</p>
						</Link>
						<Link href="/impressum">
							<p>{tAlways("imprint") ?? "Imprint"}</p>
						</Link>
						<Link href="/privacy-policy">
							<p>{tAlways("privacyPolicy") ?? "Privacy Policy"}</p>
						</Link>
						<p><CookieSettingsButton>{tAlways("cookies.settings")}</CookieSettingsButton></p>
					</div>
				</footer>
			</div>
	</>;
}

