import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "common";
import FixFavicon from "common/theming/FixFavicon";
import { Metadata } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: LayoutProps<"/">) {
	return <InternationalizationLayout {...props} locale='en' />
}

export function InternationalizationLayout({ children, locale }: LayoutProps<"/"> & { locale: Locale }) {
	// Enable static rendering
	setRequestLocale(locale);

	return <NextIntlClientProvider>
			<html style={{ overflowX: "hidden" }}>
				<FixFavicon
					darkSrc="/faviconLight/favicon.ico"
					lightSrc="/faviconDark/favicon.ico"
				/>
				<body>
					{children}
					<GoogleAnalytics gaId="G-31E6P1N02L" />
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</NextIntlClientProvider>;
}

export const metadata: Metadata = {
	title: "Zentru Systems",
	keywords: [
		"Apps",
		"Software",
		"Quality",
	],
	description: "Really Good",
	robots: { index: true, follow: true },
	openGraph: {
		title: "Zentru Systems",
		type: 'website',
		url: "https://zentru.systems",
		description: "Really Good",
		images: {
			href: "https://zentru.systems",
			url: "https://zentru.systems/opengraph-image.png",
		}
	},
	twitter: {
		card: "summary_large_image",
		description: "Really Good",
		title: "Zentru Systems",
		images: {
			href: "https://zentru.systems",
			url: "https://zentru.systems/opengraph-image.png",
		}
	},
	icons: {
		icon: [
			{
				url: '/faviconDark/favicon.ico',
				id: "favicon"
			} as unknown as Icon]
	},
};