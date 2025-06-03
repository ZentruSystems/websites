import { GoogleAnalytics } from 'common';
import 'common/theming/base.css';
import FixFavicon from 'common/theming/FixFavicon';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import ThemedImg from 'common/theming/ThemedImg';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Link from 'next/link';
import './animations.css';
import Nav from './nav/Nav';
import './style.css';


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (<>
		{/* {/* <head>
			{/* <link
          rel='icon'
          href='/faviconLight/favicon.ico'
          media='(prefers-color-scheme: dark)'
        />

			<link
          rel='icon'
          href='/faviconDark/favicon.ico'
          media='(prefers-color-scheme: light)'
        />
		</head> */}
		<html lang="en" style={{ overflowX: "hidden" }}>
			{/* <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
			<EnableScrollAnimations /> */}
			<FixFavicon
				darkSrc="/faviconLight/favicon.ico"
				lightSrc="/faviconDark/favicon.ico"
			/>
			<body>
				<Nav />
				<div className='navPad vflex minV100'>
					{children}
					<footer className="bg-l3 hGrid ph-bNavPad">
						<div className="s1 e3 ph-e5 vPad">
							<p>Lets meet at</p>
							<Link href="https://www.linkedin.com/company/zentru-systems">linkedIn</Link>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad">
							<p>We are</p>
							<Link href="/">
								<ThemedImg style={{ height: 25 }}
									lightsrc="./img/ZentruLogo/Brightness=Dark,Color=Green.svg"
									darksrc="./img/ZentruLogo/Brightness=White,Color=Blue.svg"
								/>
							</Link>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset bUnitPad">
							<Link href="/impressum">
								<p>Impressum</p>
							</Link>
						</div>
					</footer>
				</div>
			</body>
			<GoogleAnalytics gaId="G-31E6P1N02L" />
		</html>
	</>);
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
	}
	icons: {
		icon: [
			{
				url: '/faviconDark/favicon.ico',
				id: "favicon"
			} as unknown as Icon]
	},
};