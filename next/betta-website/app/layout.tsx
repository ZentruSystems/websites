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
		<html lang="en" style={{ overflowX: "hidden" }}>
			{/* <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
			<EnableScrollAnimations /> */}
			<FixFavicon />
			<body>
				<Nav />
				<div className='navPad'>
					{children}
					<footer className="bg-l3 hGrid ph-bNavPad">
						<div className="s1 e3 ph-e5 vPad">
							<p>Lets meet at</p>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad">
							<p>We are</p>
							<Link href="/">
								<ThemedImg
									lightsrc="./img/Betta Systems - Logo - Light.svg"
									darksrc="./img/Betta Systems - Logo - Dark.svg"
								/>
							</Link>
						</div>
					</footer>
				</div>
			</body>
		</html>
	</>);
}

export const metadata: Metadata = {
	title: "Betta Systems",
	keywords: [
		"Apps",
		"Software",
		"Quality",
	],
	description: "Really Good",
	robots: { index: true, follow: true },
	openGraph: {
		title: "Betta Systems",
		type: 'website',
		url: "https://betta.systems",
		description: "Really Good",
	},
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: dark)',
				url: '/img/betta-single-dark.png',
				href: '/img/betta-single-dark.png',
				rel: "shortcut icon",
				id: "favDark"
			} as unknown as Icon,
			{
				media: '(prefers-color-scheme: light)',
				url: '/img/betta-single-light.png',
				href: '/img/betta-single-light.png',
				rel: "shortcut icon",
				id: "favLight"
			} as unknown as Icon,
		],
	},
};