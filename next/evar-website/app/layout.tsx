
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
					<Link className="s4 e8 hCenter" href="/">
						<ThemedImg
							lightsrc="./img/Evar Text Logo.svg"
							darksrc="./img/Evar Text Logo Dark.svg"
						/>
					</Link>
				</nav>
				<div className="navPad">
					{children}
					<footer className="bg-l3 hGrid">
						<div className="s1 e3 vPad">
							<p>Lets meet at</p>
						</div>
						<div className="s11 e12 vBottom hRight vPad">
							<p>A Field endeavored by</p>
							<Link href="https://betta.systems">
								<img src="./img/betta-systems-logo-transparent-1.svg" loading="lazy" />
							</Link>
						</div>
					</footer>
				</div>
			</body>
			<GoogleAnalytics gaId="G-7D5Y46X9F5"/>
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