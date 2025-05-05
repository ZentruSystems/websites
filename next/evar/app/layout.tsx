
import { GoogleAnalytics } from 'common';
import 'common/theming/base.css';
import FixFavicon from 'common/theming/FixFavicon';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import 'common/theming/ThemedImg';
import ThemedImg from 'common/theming/ThemedImg';
import { Metadata } from 'next';
import Link from "next/link";
import './style.css';

export default function EvarLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (<>
		<html lang="en">
			<link key="d" id="favDark" rel="shortcut icon" href="/img/evar-single-dark.png" media="(prefers-color-scheme: dark)" />
			<link key="l" id="favLight" rel="shortcut icon" href="/img/evar-single-light.png" media="(prefers-color-scheme: light)" />
			<FixFavicon />
			<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
				<nav className="hGrid fixed glass v10Pad hFill">
					<Link className="s1 e12 ph-e5 hCenter" href="/">
						<ThemedImg
							lightsrc="./img/Evar Text Logo.svg"
							darksrc="./img/Evar Text Logo Dark.svg"
						/>
					</Link>
				</nav>
				<div className="navPad ph-navPad">
					{children}
					<footer className="bg-l3 hGrid">
						<div className="s1 e3 vPad">
							<p>Lets meet at</p>
						</div>
						<div className="s11 e12 ph-s4 ph-e5 vBottom hRight vPad">
							<p>A field of</p>
							<Link href="https://zentru.systems">
								<img style={{ height: 25 }} src="./img/Brightness=Dark, Color=Green.svg" loading="lazy" />
							</Link>
						</div>
					</footer>
				</div>
			</body>
			<GoogleAnalytics gaId="G-GDTQ6JS1HD" />
		</html>
	</>);
}

export const metadata: Metadata = {
	title: "EVAR",
	keywords: [
		"Games"
	],
	// description: "Really Good",
	robots: { index: true, follow: true },
	openGraph: {
		title: "EVAR",
		type: 'website',
		url: "https://evar.space",
		// description: "Really Good",
	},

};